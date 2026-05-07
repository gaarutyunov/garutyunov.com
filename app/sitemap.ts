import type { MetadataRoute } from "next";
import { skills } from "@/lib/skills";

const SITE_URL = "https://garutyunov.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/cv/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...skills.map((s) => ({
      url: `${SITE_URL}/${s.id}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
