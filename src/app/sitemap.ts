import { MetadataRoute } from "next";
import { websites } from "@/lib/portfolio";
import { SITE } from "@/lib/seo";

const CITY_PAGES = ["charlotte"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE.url}/work`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/services`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/services/audit`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/services/digital-employees`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/contact`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...websites.map((project) => ({
      url: `${SITE.url}/work/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...[
      "/services/web-design",
      "/services/brand-identity",
      "/services/business-systems",
      "/services/charlotte/business-automation",
      "/legal/privacy",
      "/legal/terms",
      "/legal/accessibility",
    ].map((path) => ({
      url: `${SITE.url}${path}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...CITY_PAGES.map((city) => ({
      url: `${SITE.url}/services/${city}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
