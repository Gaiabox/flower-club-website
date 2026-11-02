import type { Metadata } from "next";
import Link from "next/link";
import SiteShowcase from "@/components/SiteShowcase";
import { websites } from "@/lib/portfolio";
import { buildMeta } from "@/lib/seo";
export const metadata: Metadata = buildMeta({
  title: "Custom Web Design & Development, Charlotte NC",
  description:
    "The Flower Club plans, writes, designs, and builds custom business websites. Explore Jade Lilly and Fire & Ash projects, inquiry flows, and CRM connections.",
  path: "/services/web-design",
});
export default function WebDesignPage() {
  return (
    <>
      <section className="bg-cream pt-36 pb-20">
        <div className="section-padding max-w-6xl mx-auto">
          <p className="label mb-5">
            Web Design &amp; Development · Charlotte &amp; Nationwide
          </p>
          <h1 className="text-display-xl text-navy font-bold max-w-5xl mb-7">
            Give visitors a reason to choose you. Then make it easy to act.
          </h1>
          <p className="text-navy/85 text-xl leading-relaxed max-w-3xl mb-8">
            We plan, write, design, and build custom websites for businesses
            with something worth showing. Clear messaging, relevant work, and
            thoughtful inquiry flows help customers understand your offer and
            take the next step.
          </p>
          <Link href="/contact?type=website" className="btn-primary">
            Discuss Your Website
          </Link>
          <p className="text-navy/85 mt-5">
            Starting fresh or replacing a site that no longer fits? We can help
            define the scope.
          </p>
        </div>
      </section>
      <section className="bg-navy py-20">
        <div className="section-padding max-w-7xl mx-auto">
          <h2 className="text-display-md text-cream font-bold mb-6">
            Websites we designed and built.
          </h2>
          <p className="text-cream/85 text-lg mb-10 max-w-2xl">
            See the work, the visitor journey, and what we delivered. These are
            our website projects, not template examples.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            {websites
              .filter((site) => site.slug !== "fire-and-ash-events")
              .map((site) => (
                <SiteShowcase
                  key={site.slug}
                  {...site}
                  href={site.url}
                  caseStudyHref={`/work/${site.slug}`}
                />
              ))}
          </div>
        </div>
      </section>
      <section className="bg-cream py-20">
        <div className="section-padding max-w-6xl mx-auto">
          <h2 className="text-display-md text-navy font-bold mb-10">
            The pages and the process behind them.
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              [
                "Make the offer clear",
                "Positioning, page structure, and copy that answer what you do, who it is for, and why a customer should get in touch.",
              ],
              [
                "Make the design your own",
                "Custom layouts, responsive development, and a visual direction built around your business and its actual assets.",
              ],
              [
                "Make the next step useful",
                "Forms, booking links, product selection, and CRM connections as scoped. Capture the information your team needs for the next conversation.",
              ],
              [
                "Prepare for launch",
                "Mobile and interaction checks, metadata, and on-page SEO foundations. Agree on ownership, handoff, hosting, and support before the project starts.",
              ],
            ].map(([title, body]) => (
              <div className="border-t border-navy/20 pt-6" key={title}>
                <h3 className="text-navy text-2xl font-bold mb-4">{title}</h3>
                <p className="text-navy/85 leading-relaxed text-lg">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 border-t border-navy/20 pt-10">
            <h2 className="text-navy text-3xl font-bold mb-4">
              What does a website project cost?
            </h2>
            <p className="text-navy/85 text-lg max-w-3xl">
              The scope depends on pages, copy, assets, integrations, and the
              features your customers need. We discuss those requirements and
              agree on a proposal before you commit. Hosting, ongoing support,
              and third-party fees are identified in the scope.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="text-navy text-3xl font-bold mb-6">
              Before you start.
            </h2>
            {[
              [
                "Can you help with the brand and copy too?",
                "Yes. We can scope positioning, identity, copy, design, and development together, or work with the brand assets you already have.",
              ],
              [
                "Will this guarantee more leads or better rankings?",
                "No. A clearer website supports the customer journey, but leads and rankings also depend on your offer, audience, traffic, and market. We agree on what to measure instead of promising a result we cannot substantiate.",
              ],
              [
                "What happens after launch?",
                "Your proposal defines the handoff, access, ownership, and any ongoing support. We can discuss a maintenance or creative support scope when needed.",
              ],
            ].map(([q, a]) => (
              <details key={q} className="border-t border-navy/20 py-5">
                <summary className="text-navy font-bold text-lg cursor-pointer">
                  {q}
                </summary>
                <p className="text-navy/85 leading-relaxed mt-4">{a}</p>
              </details>
            ))}
          </div>
          <div className="bg-navy p-8 md:p-12 mt-12">
            <h2 className="text-cream text-display-sm font-bold mb-5">
              What should your next website make possible?
            </h2>
            <p className="text-cream/80 text-lg mb-8">
              Share your current site, what needs to change, and your timeline.
              We will discuss the right scope and next steps.
            </p>
            <Link href="/contact?type=website" className="btn-primary">
              Discuss Your Website
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
