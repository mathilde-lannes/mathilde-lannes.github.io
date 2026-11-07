import type { Metadata } from "next";
import Link from "next/link";
import { PrintResume } from "@/components/resume/print-resume";
import "./print.css";

export const metadata: Metadata = {
  title: "Resume",
  description: "Printable one-page resume for Mathilde Lannes.",
  robots: { index: true, follow: true },
};

export default function ResumePrintPage() {
  return (
    <div className="min-h-screen bg-[#e8e8e8] text-[#1a1a1a] print:bg-white">
      <div className="mx-auto flex max-w-[8.5in] flex-col gap-4 px-4 py-6 print:max-w-none print:gap-0 print:p-0">
        <nav
          aria-label="Resume actions"
          className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-white px-4 py-3 text-sm shadow-sm print:hidden"
        >
          <div className="flex flex-wrap gap-4">
            <Link href="/" className="text-[#71717a] hover:text-[#1d4ed7]">
              ← Portfolio
            </Link>
            <a href="/resume.pdf" className="font-medium text-[#1d4ed7] hover:underline">
              Download PDF
            </a>
          </div>
          <p className="text-[#71717a]">Tip: use Print → Save as PDF for a fresh export</p>
        </nav>

        <div className="resume-sheet rounded-sm bg-white px-[0.55in] py-[0.5in] shadow-md print:rounded-none print:px-0 print:py-0 print:shadow-none">
          <PrintResume />
        </div>
      </div>
    </div>
  );
}
