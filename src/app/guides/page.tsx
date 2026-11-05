import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { buildMeta } from "@/lib/seo";
export const metadata: Metadata = buildMeta({
  title: "Guides: Websites, Branding, and Brand Activations",
  description:
    "Plain answers to the questions businesses ask before hiring for a website, a brand identity, or a brand activation.",
  path: "/guides",
});
export default function GuidesIndex() {
  return (
    <div className="bg-cream text-navy pt-36 pb-24">
      <div className="section-padding max-w-4xl mx-auto">
        <p className="label mb-5">Guides</p>
        <h1 className="text-display-lg font-bold mb-8">Questions worth answering before you hire anyone.</h1>
        <p className="text-xl text-navy/85 leading-relaxed mb-14">
          Plain answers about websites, branding, and brand activations, with examples from our own work.
        </p>
        <ul>
          {GUIDES.map((g) => (
            <li key={g.slug} className="border-t border-navy/20 py-7">
              <Link href={`/guides/${g.slug}`} className="group block">
                <h2 className="text-2xl font-bold mb-2 group-hover:text-red transition-colors">{g.question} →</h2>
                <p className="text-lg text-navy/85 leading-relaxed">{g.metaDescription}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="bg-navy text-cream p-8 md:p-12 mt-12">
          <h2 className="text-display-sm font-bold mb-6">Have a project in mind?</h2>
          <Link href="/contact" className="btn-primary">
            Tell Us About Your Project
          </Link>
        </div>
      </div>
    </div>
  );
}
