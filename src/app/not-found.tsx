import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="text-4xl font-semibold tracking-tight text-heading">Page not found</h1>
      <p className="max-w-md text-muted">That page isn’t on this site.</p>
      <Link
        href="/"
        className="rounded border border-accent px-5 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
      >
        Back home
      </Link>
    </main>
  );
}
