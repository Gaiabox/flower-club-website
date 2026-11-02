import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { websites } from "@/lib/portfolio";
import { buildMeta } from "@/lib/seo";
const details: Record<
  string,
  { context: string; approach: string; delivery: string[] }
> = {
  "jade-lilly": {
    context:
      "Jade Lilly works across photography, textile installations, and immersive experiences. The website brings those practices together so a visitor can explore her world and find the right way to work with her.",
    approach:
      "We designed and built the digital experience around her creative world: a yarn-island introduction, image-rich project galleries, service pathways, and a direct project inquiry. Strings Attached has its own place within the wider site.",
    delivery: [
      "Website design and development",
      "Creative direction and motion",
      "Project and experience galleries",
      "Service pathways and project inquiry",
    ],
  },
  "fire-and-ash-cigar-carts": {
    context:
      "A custom cigar humidor cart involves choices that are hard to capture in a generic contact form. The website lets clubs and operators explore the product before sharing the configuration they have in mind.",
    approach:
      "A seven-hole, golf-inspired configurator carries the visitor through their choices. The inquiry connects to HubSpot, bringing those details into the next sales conversation. Product storytelling and golf imagery give the rest of the site a consistent direction.",
    delivery: [
      "Custom website design and development",
      "Golf-inspired product configurator",
      "Inquiry flow connected to HubSpot",
      "Affiliate signup and agreement workflows",
      "Responsive layouts and product storytelling",
    ],
  },
  "fire-and-ash-events": {
    context:
      "People planning an event need to understand the experience, the pricing, and whether the service fits their occasion. The website brings those details together before asking for an inquiry.",
    approach:
      "Published pricing and an event photo gallery help visitors explore the mobile cigar lounge. A five-step match survey then collects the event details, giving the team context for a follow-up conversation.",
    delivery: [
      "Five-page custom website",
      "Published pricing and service information",
      "Five-step event inquiry survey",
      "Event photography gallery and local SEO foundations",
    ],
  },
};
export const dynamicParams = false;
export function generateStaticParams() {
  return websites.map((site) => ({ slug: site.slug }));
}
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = websites.find((site) => site.slug === params.slug);
  if (!project) notFound();
  return buildMeta({
    title: `${project.client}, Website Project`,
    description: project.description,
    path: `/work/${project.slug}`,
  });
}
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = websites.find((site) => site.slug === params.slug);
  if (!project) notFound();
  const detail = details[project.slug];
  return (
    <div className="bg-navy-dark text-cream pt-36 pb-24">
      <div className="section-padding max-w-6xl mx-auto">
        <Link
          href="/work#websites"
          className="text-cream/85 underline underline-offset-4"
        >
          ← All website work
        </Link>
        <header className="mt-12 mb-12">
          <p className="label-light mb-5">Website Design &amp; Development</p>
          <h1 className="text-display-xl font-bold mb-6">{project.client}</h1>
          <p className="text-cream/80 text-2xl leading-relaxed max-w-3xl">
            {project.title}
          </p>
        </header>
        <div className="relative aspect-[16/10] overflow-hidden border border-cream/20">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1100px"
            className="object-cover object-top"
          />
        </div>
        <section className="grid md:grid-cols-2 gap-12 py-16 border-b border-cream/20">
          <h2 className="text-display-sm font-bold">The visitor journey.</h2>
          <p className="text-cream/85 text-lg leading-relaxed">
            {detail.context}
          </p>
        </section>
        <section className="grid md:grid-cols-2 gap-12 py-16 border-b border-cream/20">
          <h2 className="text-display-sm font-bold">What we built.</h2>
          <div>
            <p className="text-cream/85 text-lg leading-relaxed mb-8">
              {detail.approach}
            </p>
            <ul className="text-cream/85 space-y-3">
              {detail.delivery.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </section>
        {project.slug === "fire-and-ash-cigar-carts" && <section className="py-12 border-b border-cream/20"><h2 className="text-3xl font-bold mb-5">From product choices to a sales conversation.</h2><p className="text-lg text-cream/90 max-w-3xl leading-relaxed">The configurator collects the buyer’s choices before the team follows up. The HubSpot connection brings that inquiry into the sales workflow. Our broader work also includes affiliate signup and agreement workflows, connecting the public experience with the operations behind it.</p><p className="text-lg text-cream/90 max-w-3xl mt-5">This case study describes delivered functionality. Revenue gains, hours saved, and conversion improvements have not been measured here.</p><Link href="/services/business-systems" className="inline-block underline mt-6">Explore business systems →</Link></section>}
        <section className="py-16">
          <h2 className="text-display-sm font-bold mb-6">
            Explore the finished site.
          </h2>
          <p className="text-cream/85 text-lg max-w-2xl mb-8">
            See the design, content, and inquiry experience in context.
          </p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Visit Live Site ↗
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </section>
        <section className="border-t border-cream/20 pt-12">
          <h2 className="text-display-sm font-bold mb-6">
            Let&apos;s build your website.
          </h2>
          <Link href="/contact?type=website" className="btn-outline">
            Start a Project
          </Link>
        </section>
      </div>
    </div>
  );
}
