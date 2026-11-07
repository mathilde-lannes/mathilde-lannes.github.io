import type { MetadataRoute } from "next";
import { person } from "@/content/resume";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", person.website).toString(),
  };
}
