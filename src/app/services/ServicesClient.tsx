import Link from "next/link";
import { services } from "@/lib/portfolio";

export default function ServicesClient() {
  return (
    <div className="bg-cream min-h-screen pt-36 pb-24">
      <div className="section-padding max-w-6xl mx-auto">
        <header className="mb-16">
          <p className="label mb-4">Services</p>
          <h1 className="text-display-xl text-navy font-bold mb-6">
            Build a brand people can understand and connect with.
          </h1>
          <p className="text-navy/70 text-xl max-w-3xl leading-relaxed">
            Brand identities and custom websites are at the center of our work.
            Content, experiences, and business automation help carry that work
            forward. Choose the support you need for a single project or an
            ongoing partnership.
          </p>
        </header>
        <nav
          aria-label="Service categories"
          className="flex flex-wrap gap-x-8 gap-y-4 mb-12"
        >
          {services.map((service) => (
            <Link
              key={service.id}
              href={`#${service.id}`}
              className="text-navy underline underline-offset-4"
            >
              {service.title}
            </Link>
          ))}
        </nav>
        {services.map((service) => (
          <section
            id={service.id}
            key={service.id}
            className="scroll-mt-28 border-t border-navy/20 py-12 md:py-16 grid md:grid-cols-2 gap-8 md:gap-16"
          >
            <div>
              <h2 className="text-display-sm text-navy font-bold mb-4">
                {service.title}
              </h2>
              <p className="text-navy text-xl leading-relaxed">
                {service.headline}
              </p>
            </div>
            <div>
              <p className="text-navy/70 leading-relaxed text-lg mb-6">
                {service.description}
              </p>
              <p className="label mb-3">Scope can include</p>
              <ul className="space-y-2 text-navy/75 mb-7">
                {service.deliverables.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-6">
                <Link
                  href={`/contact?type=${service.inquiry}`}
                  className="text-navy font-semibold underline underline-offset-4"
                >
                  Discuss your project →
                </Link>
                <Link
                  href={service.proofHref}
                  className="text-navy/70 underline underline-offset-4"
                >
                  {service.example} →
                </Link>
              </div>
            </div>
          </section>
        ))}
        <section className="border-t border-navy/20 py-12">
          <h2 className="text-navy text-2xl font-bold mb-4">
            Project or ongoing partner?
          </h2>
          <p className="text-navy/70 text-lg leading-relaxed max-w-3xl">
            We scope brand, website, and production projects around their
            deliverables. For ongoing creative or automation support, we agree
            on priorities and a monthly scope. You do not need a paid audit to
            start a creative project.
          </p>
          <p className="text-navy/70 mt-5 max-w-3xl">
            If your operational needs are unclear, our{" "}
            <Link
              className="underline underline-offset-4"
              href="/services/audit"
            >
              automation audit
            </Link>{" "}
            is a separate discovery engagement, starting at $2,500.
          </p>
        </section>
        <section className="bg-navy p-8 md:p-14 mt-8">
          <h2 className="text-display-sm text-cream font-bold mb-4">
            Tell us what you have in mind.
          </h2>
          <p className="text-cream/75 text-lg mb-8 max-w-2xl">
            Share the goal, the timeline, and where you need help. We will
            recommend a scope and explain what happens next.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a Project
          </Link>
        </section>
      </div>
    </div>
  );
}
