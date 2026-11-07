import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { person, profile } from "@/content/resume";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(person.website),
  title: {
    default: person.name,
    template: `%s — ${person.name}`,
  },
  description: profile,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: person.name,
    description: profile,
    url: person.website,
    siteName: person.name,
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "128x128" },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
