import type { MetadataRoute } from "next";
import { person } from "@/content/resume";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: person.website, changeFrequency: "monthly", priority: 1 },
    { url: new URL("/resume", person.website).toString(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
