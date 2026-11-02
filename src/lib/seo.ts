import { services } from "@/lib/portfolio";
/**
 * SEO Configuration, The Flower Club
 * Centralized keyword + metadata config. Nothing here touches visible copy.
 * Cities: Charlotte NC · Miami FL · New York NY · Los Angeles CA
 */

export const SITE = {
  name: "The Flower Club",
  url: "https://theflowerclub.design",
  tagline: "Brand & Digital Design, Websites & AI Systems | Charlotte NC",
  description:
    "The Flower Club is an independent creative studio building brand identities, custom websites, content, and AI automation systems. Based in Charlotte, NC, working nationwide.",
  location: {
    city: "Charlotte",
    state: "NC",
    country: "US",
  },
  social: {
    instagram: "https://instagram.com/theflowerclub",
    linkedin: "https://linkedin.com/company/flowerclubhq",
  },
  clients: [
    "Maker's Mark",
    "Red Bull",
    "Bacardi",
    "Rémy Martin",
    "Courvoisier",
    "Popeyes",
    "Febreze",
    "Def Jam Recordings",
  ],
};

export const CITIES = [
  { name: "Charlotte", state: "NC", full: "Charlotte, NC" },
  { name: "Miami", state: "FL", full: "Miami, FL" },
  { name: "New York", state: "NY", full: "New York, NY" },
  { name: "Los Angeles", state: "CA", full: "Los Angeles, CA" },
];

export const SERVICES_SEO = services.map((service) => ({
  slug: service.id,
  name: service.title,
  description: service.description,
  keywords: [service.title, `${service.title} Charlotte NC`, "The Flower Club"],
}));

/** Build per-page metadata */
export function buildMeta({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}) {
  const url = `${SITE.url}${path}`;
  return {
    title,
    description,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type: "website" as const,
      locale: "en_US",
      images: [
        {
          url: `${SITE.url}/og-card.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [`${SITE.url}/og-card.jpg`],
    },
    keywords: [
      ...SERVICES_SEO.flatMap((s) => s.keywords),
      ...CITIES.flatMap((c) => [
        `creative agency ${c.name}`,
        `brand agency ${c.name} ${c.state}`,
        `creative studio ${c.name}`,
      ]),
      "brand identity studio",
      "custom website design",
      "The Flower Club",
    ],
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION, other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } : undefined },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large" as const,
      },
    },
  };
}
