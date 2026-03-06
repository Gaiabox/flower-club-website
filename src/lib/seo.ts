/**
 * SEO Configuration — The Flower Club
 * Centralized keyword + metadata config. Nothing here touches visible copy.
 * Cities: Charlotte NC · Miami FL · New York NY · Los Angeles CA
 */

export const SITE = {
  name: "The Flower Club",
  url: "https://theflowerclub.co",
  tagline: "Culture-Forward Creative Agency | Brand Activations, Video, Design & AI Animation",
  description:
    "The Flower Club is a full-service creative agency specializing in brand activations, video production, AI animation, web design, and graphic design. Serving Fortune 500 brands and independent artists across Charlotte, Miami, New York, and Los Angeles.",
  email: "hello@theflowerclub.co",
  location: {
    city: "Charlotte",
    state: "NC",
    zip: "28201",
    country: "US",
  },
  social: {
    instagram: "https://instagram.com/theflowerclub",
    linkedin: "https://linkedin.com/company/theflowerclub",
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

export const SERVICES_SEO = [
  {
    slug: "brand-identity",
    name: "Brand Identity + Design",
    keywords: [
      "brand identity agency",
      "logo design agency",
      "brand design studio",
      "visual identity agency",
      "brand strategy agency",
      "corporate identity design",
    ],
    description:
      "Strategic brand identity and logo design for artists, startups, and Fortune 500 companies. We build visual systems that last — not trend-chasing.",
  },
  {
    slug: "web-design",
    name: "Web Design + Development",
    keywords: [
      "web design agency",
      "web development agency",
      "custom website design",
      "creative agency web design",
      "website design for brands",
      "Next.js web development agency",
    ],
    description:
      "Custom-coded, conversion-focused websites for brands that need more than a template. No Squarespace. No shortcuts.",
  },
  {
    slug: "content-creation",
    name: "Content Creation",
    keywords: [
      "content creation agency",
      "brand content studio",
      "social media content agency",
      "creative content production",
      "photo video content agency",
      "branded content studio",
    ],
    description:
      "Photo, video, and graphic content built around brand strategy — not just filling a content calendar.",
  },
  {
    slug: "ai-animation",
    name: "AI Animation + Video",
    keywords: [
      "AI animation studio",
      "AI video production agency",
      "motion design studio",
      "AI creative agency",
      "generative video agency",
      "AI animation for brands",
    ],
    description:
      "Next-gen AI animation and motion design for brands that want cinematic visuals without Hollywood budgets.",
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    keywords: [
      "graphic design agency",
      "creative design studio",
      "brand graphic design",
      "marketing design agency",
      "packaging design agency",
      "visual design studio",
    ],
    description:
      "Graphic design for campaigns, packaging, marketing materials, and everything in between — every piece crafted with intent.",
  },
  {
    slug: "brand-activations",
    name: "Brand Activations + Events",
    keywords: [
      "brand activation agency",
      "experiential marketing agency",
      "event creative agency",
      "brand experience agency",
      "cultural marketing agency",
      "live event creative production",
      "experiential brand agency",
    ],
    description:
      "Culture-forward brand activations and experiential events for Fortune 500 brands and cultural moments. 150+ events produced.",
  },
  {
    slug: "social-media",
    name: "Social Media Management",
    keywords: [
      "social media marketing agency",
      "social media management agency",
      "Instagram marketing agency",
      "social media strategy agency",
      "content marketing agency",
      "digital marketing creative agency",
    ],
    description:
      "Full-service social media management — strategy, content, community, analytics. We build audiences, not just follower counts.",
  },
];

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
      images: [{ url: `${SITE.url}/og-image.jpg`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [`${SITE.url}/og-image.jpg`],
    },
    keywords: [
      ...SERVICES_SEO.flatMap((s) => s.keywords),
      ...CITIES.flatMap((c) => [
        `creative agency ${c.name}`,
        `brand agency ${c.name} ${c.state}`,
        `creative studio ${c.name}`,
      ]),
      "culture-forward creative agency",
      "Fortune 500 creative agency",
      "music industry creative agency",
      "CPG brand activation agency",
      "The Flower Club",
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" as const },
    },
  };
}
