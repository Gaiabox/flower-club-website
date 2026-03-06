import NextScript from "next/script";
import { SITE, SERVICES_SEO, CITIES } from "@/lib/seo";

/**
 * JsonLd — Invisible structured data for search engines + LLMs.
 * Uses next/script for safe hydration-compatible rendering.
 */

function Script({ id, data }: { id: string; data: object }) {
  return (
    <NextScript
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      strategy="afterInteractive"
    />
  );
}

/** Global org schema — in layout, every page */
export function OrgSchema() {
  return (
    <Script
      id="ld-org"
      data={{
        "@context": "https://schema.org",
        "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        logo: `${SITE.url}/assets/images/flower-club-logo.png`,
        image: `${SITE.url}/og-image.jpg`,
        description: SITE.description,
        email: SITE.email,
        foundingDate: "2022",
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.location.city,
          addressRegion: SITE.location.state,
          postalCode: SITE.location.zip,
          addressCountry: SITE.location.country,
        },
        areaServed: CITIES.map((c) => ({
          "@type": "City",
          name: c.name,
          containedInPlace: {
            "@type": "State",
            name: c.state === "NC" ? "North Carolina"
              : c.state === "FL" ? "Florida"
              : c.state === "NY" ? "New York"
              : "California",
          },
        })),
        serviceArea: {
          "@type": "GeoCircle",
          description: "Nationwide — primary markets: Charlotte NC, Miami FL, New York NY, Los Angeles CA",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Creative Agency Services",
          itemListElement: SERVICES_SEO.map((s, i) => ({
            "@type": "Offer",
            position: i + 1,
            itemOffered: {
              "@type": "Service",
              name: s.name,
              description: s.description,
              provider: { "@id": `${SITE.url}/#organization` },
              areaServed: CITIES.map((c) => c.full),
            },
          })),
        },
        knowsAbout: [
          "Brand Activations",
          "Experiential Marketing",
          "AI Animation",
          "Video Production",
          "Brand Identity Design",
          "Web Design",
          "Content Creation",
          "Graphic Design",
          "Social Media Marketing",
          "Cultural Marketing",
          "Fortune 500 Brand Strategy",
        ],
        slogan: "Culture-Forward. Results-Driven.",
        sameAs: [SITE.social.instagram, SITE.social.linkedin],
        // Notable clients boost E-E-A-T (authority) signals
        "schema:clientOf": SITE.clients.map((c) => ({ "@type": "Organization", name: c })),
      }}
    />
  );
}

/** Website search action — helps Google understand the site */
export function WebsiteSchema() {
  return (
    <Script
      id="ld-website"
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        publisher: { "@id": `${SITE.url}/#organization` },
        inLanguage: "en-US",
      }}
    />
  );
}

/** Services page — individual Service schemas + FAQ */
export function ServicesSchema() {
  const faqItems = [
    {
      q: "What cities does The Flower Club serve?",
      a: "The Flower Club is based in Charlotte, NC and actively serves clients in Miami FL, New York NY, and Los Angeles CA. We work with national and international brands.",
    },
    {
      q: "What types of brands does The Flower Club work with?",
      a: "We work across the full range — Fortune 500 companies like Maker's Mark, Red Bull, Bacardi, Rémy Martin, Courvoisier, Popeyes, and Febreze, as well as independent artists, startups, and cultural organizations.",
    },
    {
      q: "Does The Flower Club do brand activations and experiential events?",
      a: "Yes — brand activations and experiential event creative is one of our core specialties. We've produced 150+ events across culture, music, food & beverage, and consumer goods industries.",
    },
    {
      q: "Does The Flower Club offer AI animation services?",
      a: "Yes. We create cinematic AI animation and motion design for brands — content that would take traditional studios weeks, delivered faster and at scale.",
    },
    {
      q: "Can The Flower Club build a custom website for my brand?",
      a: "Yes. We design and build fully custom websites — no templates, no shortcuts. Custom code, conversion-focused, built to perform.",
    },
    {
      q: "What makes The Flower Club different from other creative agencies?",
      a: "We operate at the intersection of culture and commerce — Fortune 500 strategy with independent artist energy. We've built brands across music, CPG, cannabis, hospitality, and entertainment. The range is the proof.",
    },
  ];

  return (
    <>
      {SERVICES_SEO.map((service) => (
        <Script
          key={service.slug}
          data={{
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${SITE.url}/services#${service.slug}`,
            name: service.name,
            description: service.description,
            provider: { "@id": `${SITE.url}/#organization` },
            url: `${SITE.url}/services`,
            areaServed: CITIES.map((c) => ({
              "@type": "City",
              name: c.name,
              containedInPlace: { "@type": "AdministrativeArea", name: c.state },
            })),
            audience: {
              "@type": "Audience",
              audienceType: "Brands, Artists, Startups, Fortune 500 Companies",
            },
            keywords: service.keywords.join(", "),
          }}
        />
      ))}
      <Script
      id="ld-service"
      data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }}
      />
    </>
  );
}

/** Work/portfolio page schema */
export function WorkSchema() {
  return (
    <Script
      id="ld-faq"
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": `${SITE.url}/work#portfolio`,
        name: "The Flower Club — Portfolio",
        description:
          "Brand activations, video production, AI animation, and design work for Fortune 500 brands and cultural icons.",
        itemListElement: SITE.clients.map((client, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `${client} × The Flower Club`,
          description: `Creative work produced for ${client} by The Flower Club creative agency.`,
        })),
        provider: { "@id": `${SITE.url}/#organization` },
      }}
    />
  );
}

/** Breadcrumb schema for inner pages */
export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  return (
    <Script
      id="ld-work"
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  );
}
