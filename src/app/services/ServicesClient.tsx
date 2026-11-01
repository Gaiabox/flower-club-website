import Image from "next/image";
import SketchDecor from "@/components/SketchDecor";
import BrandFilm from "@/components/BrandFilm";
import Link from "next/link";
import { services } from "@/lib/portfolio";

export default function ServicesClient() {
  return (
    <div className="sketchbook-bg relative min-h-screen pt-36 pb-24 overflow-hidden">
      <SketchDecor />
      <div className="section-padding max-w-6xl mx-auto relative z-10">
        <header className="mb-16">
          <p className="label mb-4">Services</p>
          <h1 className="text-display-xl text-navy font-bold mb-6">
            Design that earns attention. Systems that keep it moving.
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
              <div className="mt-8">
                {service.id === "brand-identity" && (
                  <>
                    <div className="relative aspect-[4/3] bg-white/60 max-w-sm">
                      <Image
                        src="/assets/images/bean-locks.png"
                        alt="Bean Locks logo designed by The Flower Club"
                        fill
                        sizes="400px"
                        className="object-contain p-12"
                      />
                    </div>
                    <p className="text-navy/70 mt-3 text-sm">
                      Bean Locks · Logo &amp; brand identity
                    </p>
                  </>
                )}
                {service.id === "websites" && (
                  <>
                    <Link href="/work/jade-lilly">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src="/assets/images/jade-lilly-website.jpg"
                          alt="Jade Lilly website hero artwork"
                          fill
                          sizes="(max-width:768px) 100vw, 500px"
                          className="object-cover"
                        />
                      </div>
                      <p className="text-navy mt-3 underline">
                        Jade Lilly · Website designed &amp; built by us →
                      </p>
                    </Link>
                  </>
                )}
                {service.id === "content-experiences" && (
                  <BrandFilm
                    src="/assets/videos/makers-mark-culturecon.mp4"
                    poster="/assets/images/makers-mark-culturecon-thumb.jpg"
                    title="Maker’s Mark × CultureCon"
                    meta="Brand activation · Event content"
                    aspect="4/3"
                  />
                )}
                {service.id === "business-automation" && (
                  <div className="bg-navy p-7 text-cream">
                    <p className="label-light mb-4">Illustrative Workflow</p>
                    <ol className="space-y-4">
                      <li>1. Inquiry arrives from your website</li>
                      <li>2. Details enter your CRM</li>
                      <li>3. Follow-up is routed to the right person</li>
                      <li>4. Your team reviews exceptions</li>
                    </ol>
                    <p className="mt-5 text-cream/70 text-sm">
                      A process example, not a client result or a live demo.
                    </p>
                  </div>
                )}
              </div>
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
                  href={
                    service.id === "websites"
                      ? "/services/web-design"
                      : service.proofHref
                  }
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
