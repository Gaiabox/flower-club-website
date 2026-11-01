import Link from "next/link";
import Image from "next/image";
import FlowerWatermark from "@/components/FlowerWatermark";
import SiteShowcase from "@/components/SiteShowcase";
import BrandFilm from "@/components/BrandFilm";
import { websites, services, projectSteps } from "@/lib/portfolio";

export default function Home() {
  return (
    <>
      <section className="bg-navy-dark relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-28">
        <FlowerWatermark className="w-[600px] -right-48 -top-32 text-cream opacity-[0.04]" />
        <div className="section-padding max-w-7xl mx-auto relative z-10">
          <p className="label-light mb-6">
            The Flower Club · Independent Creative Studio
          </p>
          <h1 className="text-display-xl text-cream font-bold max-w-5xl mb-8">
            Brand identities and websites that move you forward.
          </h1>
          <p className="text-cream/75 text-xl md:text-2xl leading-relaxed max-w-2xl mb-10">
            You have something worth building. We help you give it a clear
            identity, a considered website, and the content to bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link href="/contact" className="btn-primary">
              Start a Project
            </Link>
            <Link href="/work" className="btn-outline">
              View Our Work
            </Link>
          </div>
          <p className="text-cream/60 mt-10 text-sm">
            Based in Charlotte, NC. Working with businesses, founders, and
            creative brands nationwide.
          </p>
        </div>
      </section>
      <section className="bg-navy py-20 md:py-28" id="selected-work">
        <div className="section-padding max-w-7xl mx-auto">
          <p className="label-light mb-4">Selected Work</p>
          <h2 className="text-display-md text-cream font-bold mb-6">
            See what we build.
          </h2>
          <p className="text-cream/70 text-lg max-w-2xl mb-12">
            Custom websites and visual identities, with the details that make
            each business its own.
          </p>
          <div className="grid md:grid-cols-2 gap-12 mb-14">
            {websites.map((site) => (
              <SiteShowcase
                key={site.slug}
                {...site}
                href={site.url}
                caseStudyHref={`/work/${site.slug}`}
              />
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { name: "Bean Locks", image: "bean-locks.png" },
              {
                name: "Ken’s Computer Solutions",
                image: "kens-computer-solutions.jpg",
              },
            ].map((project) => (
              <Link
                href="/work#brand-identity"
                key={project.name}
                className="group"
              >
                <div className="aspect-[4/3] relative bg-cream overflow-hidden">
                  <Image
                    src={`/assets/images/${project.image}`}
                    alt={`${project.name} brand identity`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-cream text-xl font-bold mt-5 group-hover:text-red">
                  {project.name}
                </h3>
                <p className="text-cream/65 mt-2">
                  Logo design &amp; brand identity
                </p>
              </Link>
            ))}
          </div>
          <Link
            href="/work"
            className="inline-block text-cream underline underline-offset-8 mt-12"
          >
            View all work →
          </Link>
        </div>
      </section>
      <section className="bg-cream py-20 md:py-28">
        <div className="section-padding max-w-7xl mx-auto">
          <p className="label mb-4">What We Do</p>
          <h2 className="text-display-md text-navy font-bold mb-6">
            Start with what your business needs.
          </h2>
          <p className="text-navy/70 text-lg max-w-2xl mb-12">
            A new identity, a better website, or a creative partner for the next
            chapter. We scope the work around your goals.
          </p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {services.map((service) => (
              <div key={service.id} className="border-t border-navy/20 pt-7">
                <h3 className="text-navy text-2xl font-bold mb-3">
                  <Link href={`/services#${service.id}`}>
                    {service.title} →
                  </Link>
                </h3>
                <p className="text-navy/70 leading-relaxed">
                  {service.headline}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/services"
            className="inline-block text-navy underline underline-offset-8 mt-12"
          >
            Explore our services →
          </Link>
        </div>
      </section>
      <section className="bg-navy-dark py-20 md:py-28">
        <div className="section-padding max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="label-light mb-4">The Studio</p>
            <h2 className="text-display-md text-cream font-bold">
              Creative direction stays close to the work.
            </h2>
          </div>
          <div className="text-cream/75 text-lg leading-relaxed">
            <p>
              The Flower Club brings together brand strategy, design, web
              development, and production. Founder James Highsmith stays
              involved from the first conversation through the finished work.
            </p>
            <p className="mt-5">
              Our practice includes in-house motion and AI-assisted creative
              production, alongside automation for everyday business tasks. Each
              serves a different purpose, with a clear scope of its own.
            </p>
            <Link
              href="/about"
              className="inline-block text-cream underline underline-offset-8 mt-8"
            >
              Meet the studio →
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-cream py-20 md:py-28">
        <div className="section-padding max-w-7xl mx-auto">
          <p className="label mb-4">How Projects Work</p>
          <h2 className="text-display-md text-navy font-bold mb-12">
            A clear path from idea to launch.
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {projectSteps.map((step) => (
              <div key={step.title} className="border-t border-navy/20 pt-6">
                <h3 className="text-navy text-xl font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-navy/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-navy-dark py-20 md:py-28" id="films">
        <div className="section-padding max-w-7xl mx-auto">
          <p className="label-light mb-4">Studio Experiments</p>
          <h2 className="text-display-md text-cream font-bold mb-6">
            Made for The Flower Club.
          </h2>
          <p className="text-cream/70 text-lg max-w-2xl mb-10">
            Our own brand is a place to explore character design, motion, and
            AI-assisted animation. These are in-house creative studies, separate
            from client projects.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
            <BrandFilm
              src="/assets/videos/fc-bloomfire.mp4"
              poster="/assets/images/fc-bloomfire-thumb.jpg"
              title="Operation Bloomfire"
              meta="Studio study · AI-assisted animation"
              aspect="3/4"
            />
            <BrandFilm
              src="/assets/videos/fc-hoops.mp4"
              poster="/assets/images/fc-hoops-thumb.jpg"
              title="Club Ball"
              meta="Studio study · Character and motion design"
              aspect="3/4"
            />
          </div>
        </div>
      </section>
      <section className="bg-navy py-20 md:py-28">
        <div className="section-padding max-w-4xl mx-auto text-center">
          <h2 className="text-display-md text-cream font-bold mb-6">
            What are you ready to build?
          </h2>
          <p className="text-cream/75 text-lg mb-8">
            Tell us what you have in mind. We will help define the scope and the
            next step.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
