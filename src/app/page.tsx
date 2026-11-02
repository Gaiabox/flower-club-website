import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";
import FlowerWatermark from "@/components/FlowerWatermark";
import HomeStatement from "@/components/HomeStatement";
import ClientTicker from "@/components/ClientTicker";
import SelectedWork from "@/components/SelectedWork";
import { projectSteps } from "@/lib/portfolio";
export default function Home() {
  return (
    <>
      <section className="relative min-h-[90svh] flex items-center bg-navy-dark pt-36 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}
        />
        <HeroVideo
          src="/assets/videos/makers-mark-rev-run-teaser.mp4"
          poster="/assets/images/hero-bg.jpg"
        />
        <div className="absolute inset-0 bg-navy-dark/75" />
        <div className="relative z-10 section-padding max-w-7xl mx-auto w-full relative z-10">
          <p className="label-light mb-5">
            The Flower Club · Brand &amp; Digital Design
          </p>
          <h1 className="text-display-xl text-cream font-bold max-w-5xl mb-7">
            Make your brand the one they choose.
          </h1>
          <p className="text-cream/85 text-xl md:text-2xl max-w-2xl leading-relaxed mb-8">
            We design brands, build websites, and connect the systems behind
            them. Give customers a reason to choose you and a clear way to take
            the next step.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link href="/contact" className="btn-primary">
              Tell Us About Your Project
            </Link>
            <Link href="#selected-work" className="btn-outline">
              See What We’ve Made
            </Link>
          </div>
          <p className="text-cream/85 mt-8 max-w-xl text-sm">
            Strategy, design, development, and creative production. Based in
            Charlotte. Working nationwide.
          </p>
          <p className="text-cream/85 mt-10 text-xs">
            Featured footage: Maker’s Mark × Rev Run brand activation
          </p>
        </div>
      </section>
      <ClientTicker />
      <section className="bg-navy py-20 md:py-28 relative overflow-hidden" id="selected-work">
        <FlowerWatermark className="w-[560px] md:w-[760px] -right-36 md:-right-48 -top-40 text-cream opacity-[0.04]" />
        <div className="relative z-10 section-padding max-w-7xl mx-auto">
          <p className="label-light mb-4">Selected Work</p>
          <h2 className="text-display-md text-cream font-bold mb-6">
            A few things we’ve made.
          </h2>
          <p className="text-cream/85 text-lg max-w-2xl mb-10">
            Websites, identities, event content, and our own creative
            experiments. Different formats, with a clear idea behind each.
          </p>
          <SelectedWork />
          <Link
            href="/work"
            className="inline-block text-cream underline underline-offset-8 mt-10"
          >
            Explore all work →
          </Link>
        </div>
      </section>
      <section className="bg-cream py-20 md:py-28">
        <div className="relative z-10 section-padding max-w-7xl mx-auto">
          <p className="label mb-4">What Do You Need To Move Forward?</p>
          <h2 className="text-display-md text-navy font-bold mb-12">
            Find the right starting point.
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "A website that helps people choose you.",
                body: "Visitors should understand your offer, see why it matters, and know how to inquire. We write, design, and build that journey, including the forms and connections behind it.",
                href: "/services/web-design",
                label: "Explore Web Design",
              },
              {
                title: "A stronger brand from the first impression.",
                body: "Bring your positioning, logo, typography, and marketing into one recognizable identity. We build the visual system and the assets you need to put it to work.",
                href: "/services/brand-identity",
                label: "Explore Brand Design",
              },
              {
                title: "Less chasing. Clearer follow-up.",
                body: "If inquiries sit unanswered or your team copies the same information between tools, we can build intake, follow-up, scheduling, and reporting workflows around that work.",
                href: "/services/digital-employees",
                label: "Explore AI & Automation",
              },
              {
                title: "Content people can experience.",
                body: "Launch the idea through video, graphics, motion, and live activations. Our in-house design and AI-assisted production support the work from creative direction to finished assets.",
                href: "/services#content-experiences",
                label: "Explore Content & Experiences",
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-navy/20 pt-7">
                <h3 className="text-navy font-bold text-2xl mb-4">
                  {item.title}
                </h3>
                <p className="text-navy/85 leading-relaxed text-lg mb-5">
                  {item.body}
                </p>
                <Link
                  href={item.href}
                  className="text-navy font-semibold underline underline-offset-4"
                >
                  {item.label} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-navy py-20 md:py-28 relative overflow-hidden">
        <FlowerWatermark className="w-[520px] md:w-[700px] -left-36 md:-left-44 -bottom-40 text-cream opacity-[0.04]" />
        <div className="relative z-10 section-padding max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <h2 className="text-display-md text-cream font-bold">
            One partner from the idea to the finished work.
          </h2>
          <div className="text-cream/80 text-lg leading-relaxed">
            <p>
              You should not have to explain your business again every time a
              project moves from strategy to design to development. We connect
              those stages, so the identity, website, and supporting content
              work together.
            </p>
            <p className="mt-5">
              Founder James Highsmith brings experience in brand marketing at
              Maker’s Mark and stays involved in creative direction and review.
              You work with the team making the work.
            </p>
            <Link
              href="/services"
              className="inline-block text-cream underline underline-offset-4 mt-6"
            >
              See how we can help →
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-cream py-20 md:py-28">
        <div className="relative z-10 section-padding max-w-7xl mx-auto">
          <p className="label mb-4">From First Conversation To Launch</p>
          <h2 className="text-display-md text-navy font-bold mb-10">
            Know what happens next.
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {projectSteps.map((step) => (
              <div key={step.title}>
                <h3 className="text-navy text-xl font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-navy/85 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <HomeStatement />
      <section className="bg-navy py-20 md:py-28 relative overflow-hidden">
        <FlowerWatermark className="w-[480px] md:w-[640px] left-1/2 -translate-x-1/2 -bottom-56 text-cream opacity-[0.05]" />
        <div className="relative z-10 section-padding max-w-4xl mx-auto">
          <h2 className="text-display-md text-cream font-bold mb-6">
            Let’s make the next step clear.
          </h2>
          <p className="text-cream/80 text-lg max-w-2xl mb-8">
            Tell us what your business does, what needs to change, and when you
            need it. We’ll discuss the project, recommend a scope, and explain
            the budget before work begins.
          </p>
          <Link href="/contact" className="btn-primary">
            Tell Us About Your Project
          </Link>
          <p className="text-cream/85 text-sm mt-5">
            An inquiry starts a conversation. It does not commit you to a paid
            engagement.
          </p>
        </div>
      </section>
    </>
  );
}
