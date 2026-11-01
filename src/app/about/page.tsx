import type { Metadata } from "next";
import Link from "next/link";
import FlowerWatermark from "@/components/FlowerWatermark";
import { projectSteps } from "@/lib/portfolio";
import { buildMeta } from "@/lib/seo";
export const metadata: Metadata = buildMeta({
  title: "The Studio, Brand Strategy, Design & Websites",
  description:
    "Meet The Flower Club, an independent creative studio led by James Highsmith. Brand identities, websites, content, and business automation from Charlotte, NC.",
  path: "/about",
});
export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-dark pt-36 pb-24 relative overflow-hidden">
        <FlowerWatermark className="w-[600px] -right-40 -top-32 text-cream opacity-[0.04]" />
        <div className="section-padding max-w-6xl mx-auto relative z-10">
          <p className="label-light mb-4">The Studio</p>
          <h1 className="text-display-xl text-cream font-bold mb-8">
            Good ideas deserve a clear identity.
          </h1>
          <p className="text-cream/80 text-xl md:text-2xl leading-relaxed max-w-3xl">
            The Flower Club is an independent creative studio building brand
            identities, websites, and the content and systems that support them.
          </p>
          <p className="text-cream/70 text-lg leading-relaxed max-w-3xl mt-6">
            We work with founders, businesses, and creative brands that need a
            thoughtful partner to turn an idea into finished work. Strategy,
            design, development, and production stay connected throughout the
            project.
          </p>
        </div>
      </section>
      <section className="bg-cream py-24">
        <div className="section-padding max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="label mb-4">Founder &amp; Creative Lead</p>
            <h2 className="text-display-md text-navy font-bold">
              James Highsmith
            </h2>
          </div>
          <div className="text-navy/75 text-lg leading-relaxed">
            <p>
              Before founding The Flower Club, James worked as US Commercial
              Marketing &amp; Sales Manager at Maker&apos;s Mark (Beam Suntory).
              That experience in brand marketing and live activations informs
              how he approaches creative work today.
            </p>
            <p className="mt-6">
              At The Flower Club, he brings that perspective to brand
              identities, websites, and production for independent businesses
              and creative brands. He stays involved in the direction and review
              of each project.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-navy py-24">
        <div className="section-padding max-w-6xl mx-auto">
          <p className="label-light mb-4">
            Design, Production &amp; Technology
          </p>
          <h2 className="text-display-md text-cream font-bold max-w-3xl mb-8">
            The tools follow the idea.
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-cream/75 text-lg leading-relaxed">
            <div>
              <h3 className="text-cream font-bold text-2xl mb-4">
                Creative work, made in-house.
              </h3>
              <p>
                Our practice spans identity design, websites, video, and motion.
                We use AI-assisted production where it supports the creative
                direction, with design decisions and final review led by people.
              </p>
              <Link
                href="/work#studio-studies"
                className="inline-block text-cream underline underline-offset-4 mt-6"
              >
                Explore our studio studies →
              </Link>
            </div>
            <div>
              <h3 className="text-cream font-bold text-2xl mb-4">
                Systems that support the business.
              </h3>
              <p>
                Business automation is a separate service: intake, follow-up,
                scheduling, and reporting workflows built around a defined task.
                We scope the connections, review points, and support each
                workflow needs.
              </p>
              <Link
                href="/services/digital-employees"
                className="inline-block text-cream underline underline-offset-4 mt-6"
              >
                Explore business automation →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-cream py-24">
        <div className="section-padding max-w-6xl mx-auto">
          <h2 className="text-display-md text-navy font-bold mb-12">
            How we work together.
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {projectSteps.map((step) => (
              <div key={step.title}>
                <h3 className="text-navy font-bold text-xl mb-4">
                  {step.title}
                </h3>
                <p className="text-navy/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn-primary mt-12">
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
