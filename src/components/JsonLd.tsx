import NextScript from "next/script";
import { websites, projects } from "@/lib/portfolio";
import { SITE, SERVICES_SEO, CITIES } from "@/lib/seo";

/**
 * JsonLd, Invisible structured data for search engines + LLMs.
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

/** Global org schema, in layout, every page */
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
        image: `${SITE.url}/og-card.jpg`,
        description: SITE.description,
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
            name:
              c.state === "NC"
                ? "North Carolina"
                : c.state === "FL"
                  ? "Florida"
                  : c.state === "NY"
                    ? "New York"
                    : "California",
          },
        })),
        serviceArea: {
          "@type": "GeoCircle",
          description:
            "Nationwide, primary markets: Charlotte NC, Miami FL, New York NY, Los Angeles CA",
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
        slogan: "Brand identities and websites that move you forward.",
        sameAs: [SITE.social.instagram, SITE.social.linkedin],
      }}
    />
  );
}

/** Website search action, helps Google understand the site */
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

/** Services page: the same four service categories shown in the page copy. */
export function ServicesSchema() {
  return (
    <>
      {SERVICES_SEO.map((service) => (
        <Script
          id={`ld-service-${service.slug}`}
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
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: c.state,
              },
            })),
            audience: {
              "@type": "Audience",
              audienceType: "Businesses, founders, and creative brands",
            },
            keywords: service.keywords.join(", "),
          }}
        />
      ))}
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
        name: "The Flower Club, Portfolio",
        description: "Websites, brand identities, content, and experiences.",
        itemListElement: [...websites, ...projects].map((project, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: project.client,
          description: project.description,
          url:
            "url" in project
              ? `${SITE.url}/work/${project.slug}`
              : `${SITE.url}/work#${project.tier === 2 ? "brand-identity" : "content-experiences"}`,
        })),
        provider: { "@id": `${SITE.url}/#organization` },
      }}
    />
  );
}

/** Breadcrumb schema for inner pages */
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
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
