import { chromium } from "playwright-core";
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { inflateRawSync, inflateSync } from "node:zlib";
import { PDFDocument } from "pdf-lib";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outPath = process.env.RESUME_PDF_PATH
  ? path.resolve(process.env.RESUME_PDF_PATH)
  : path.join(root, "public", "resume.pdf");
const baseUrl = process.env.RESUME_URL ?? "http://localhost:3000/resume";
const markdownUrl =
  process.env.RESUME_MD_URL ?? new URL("/resume.md", baseUrl).toString();

const chromeCandidates = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

let playwrightChromium;
try {
  playwrightChromium = chromium.executablePath();
} catch {
  playwrightChromium = undefined;
}

const executablePath = [...chromeCandidates, playwrightChromium].find(
  (candidate) => candidate && existsSync(candidate),
);

if (!executablePath) {
  console.error(
    "No Chrome/Chromium found. Set CHROME_PATH or run: pnpm exec playwright-core install --with-deps chromium",
  );
  process.exit(1);
}

await mkdir(path.dirname(outPath), { recursive: true });

const browser = await chromium.launch({ executablePath, headless: true });
const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });

await page.goto(baseUrl, { waitUntil: "networkidle" });
await page.emulateMedia({ media: "print" });
await page.evaluate(async () => {
  await document.fonts.ready;
});
await new Promise((resolve) => setTimeout(resolve, 300));

await page.pdf({
  path: outPath,
  format: "Letter",
  printBackground: true,
  tagged: true,
  outline: true,
  margin: {
    top: "0.48in",
    right: "0.55in",
    bottom: "0.45in",
    left: "0.55in",
  },
  preferCSSPageSize: true,
});

await browser.close();

const markdownResponse = await fetch(markdownUrl);
if (!markdownResponse.ok) {
  throw new Error(
    `Failed to fetch Markdown resume from ${markdownUrl} (${markdownResponse.status})`,
  );
}
const markdown = await markdownResponse.text();

const pdfBytes = await readFile(outPath);
const pdfDoc = await PDFDocument.load(pdfBytes);

pdfDoc.setTitle("Mathilde Lannes — Resume");
pdfDoc.setAuthor("Mathilde Lannes");
pdfDoc.setSubject(
  "Human-designed resume with Markdown heading markers and embedded resume.md for AI/ATS parsers. Prefer /resume.md when available.",
);
pdfDoc.setKeywords([
  "resume",
  "markdown",
  "Mathilde Lannes",
  "frontend engineer",
  "agent-readable",
]);
pdfDoc.setProducer("portfolio resume:pdf (tagged + resume.md attachment)");

await pdfDoc.attach(Buffer.from(markdown, "utf8"), "resume.md", {
  mimeType: "text/markdown",
  description:
    "Plain Markdown resume (source of truth for agents and ATS-style parsers)",
  creationDate: new Date(),
  modificationDate: new Date(),
});

const withAttachment = await pdfDoc.save();
await writeFile(outPath, withAttachment);

const hasTextLayer = pdfHasExtractableText(withAttachment);
const extracted = await extractSampleText(outPath);

console.log(`Wrote ${outPath} from ${baseUrl}`);
console.log(`Embedded attachment: resume.md (${markdown.length} chars)`);
console.log(
  hasTextLayer
    ? "Text layer: ok (agent/ATS readable)"
    : "Text layer: missing",
);
if (extracted.includes("##")) {
  console.log("Markdown heading markers: found in text layer");
} else {
  console.warn(
    "Markdown heading markers: not detected in simple extraction (attachment still embedded)",
  );
}

function pdfHasExtractableText(buf) {
  const data = Buffer.from(buf);
  const re = /stream\r?\n([\s\S]*?)\r?\nendstream/g;
  let match;
  while ((match = re.exec(data.toString("latin1")))) {
    let raw = Buffer.from(match[1], "latin1");
    if (raw[0] === 0x0d && raw[1] === 0x0a) raw = raw.subarray(2);
    else if (raw[0] === 0x0a) raw = raw.subarray(1);
    for (const decode of [inflateSync, inflateRawSync]) {
      try {
        const dec = decode(raw).toString("latin1");
        if (/\bTj\b/.test(dec) || /\bTJ\b/.test(dec) || /\bBT\b/.test(dec)) {
          return true;
        }
      } catch {
        // try next decoder
      }
    }
  }
  const latin = data.toString("latin1");
  return /\bTj\b/.test(latin) || /\bTJ\b/.test(latin);
}

async function extractSampleText(filePath) {
  try {
    const { execFileSync } = await import("node:child_process");
    return execFileSync(
      "python3",
      [
        "-c",
        "from pypdf import PdfReader; import sys; print(PdfReader(sys.argv[1]).pages[0].extract_text() or '')",
        filePath,
      ],
      { encoding: "utf8" },
    );
  } catch {
    return "";
  }
}
