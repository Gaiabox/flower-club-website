import { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

const CITY_PAGES = [
  "atlanta",
  "austin",
  "charlotte",
  "chicago",
  "dallas",
  "detroit",
  "houston",
  "los-angeles",
  "nashville",
  "new-jersey",
  "new-york",
  "pg-county",
  "phoenix-scottsdale",
  "south-florida",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE.url, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE.url}/work`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/services/audit`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/services/digital-employees`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...CITY_PAGES.map((city) => ({
      url: `${SITE.url}/services/${city}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
