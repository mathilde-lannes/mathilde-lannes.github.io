import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { toMarkdownResume } from "../src/content/resume.ts";

const outPath = path.join(process.cwd(), "public", "resume.md");

await mkdir(path.dirname(outPath), { recursive: true });
await writeFile(outPath, toMarkdownResume());
console.log(`Wrote ${outPath}`);
