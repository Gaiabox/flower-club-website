import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Branding Agency PG County MD | The Flower Club",
  description:
    "Creative agency serving Prince George's County and Upper Marlboro MD. Brand identity, web design, and content for businesses ready to be seen.",
};

const services = [
  {
    title: "Brand Identity",
    description:
      "From logo to full visual system, we build identities that carry weight. Strategy-driven, built to outlast the trend cycle.",
  },
  {
    title: "Web Design + Development",
    description:
      "Custom-built sites that perform as good as they look. No templates. Fast, responsive, and built to convert.",
  },
  {
    title: "Content Creation",
    description:
      "Photo, video, graphics, content with purpose. Every asset built to work within a larger brand strategy.",
  },
  {
    title: "AI Animation + Video",
    description:
      "Cinematic visuals powered by AI. Next-gen content that moves faster and hits harder than traditional production.",
  },
  {
    title: "Graphic Design",
    description:
      "Marketing materials, social assets, packaging, print, crafted with the same attention whether it's a billboard or a business card.",
  },
  {
    title: "Event Creative",
    description:
      "Concept to execution. Immersive brand activations and on-site creative direction at scale.",
  },
];

const clients = ["Bacardi", "Popeyes", "Maker's Mark", "Red Bull", "Rémy Martin", "Febreze"];

export default function PGCountyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#FAF7F2]">

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-[0.2em] text-[#C0392B] uppercase mb-6">
          Prince George&apos;s County, MD
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-8 max-w-3xl">
          PG County&apos;s Creative Agency.
        </h1>
        <p className="text-[#FAF7F2]/60 text-xl leading-relaxed max-w-2xl mb-10">
          Prince George&apos;s County has one of the most affluent Black communities in the country.
          The talent and the money are here, the brands haven&apos;t caught up. The Flower Club is a{" "}
          <strong className="text-[#FAF7F2]/90">branding agency serving PG County MD</strong>{" "}
          and Upper Marlboro, built for businesses that are done being overlooked.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C0392B] text-[#FAF7F2] font-bold px-8 py-4 text-sm tracking-widest uppercase hover:bg-[#a93226] transition-colors duration-200"
        >
          Start a Project
        </Link>
      </section>

      {/* Divider */}
      <div className="border-t border-[#FAF7F2]/8 mx-6 md:mx-12 lg:mx-20" />

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-[0.2em] text-[#FAF7F2]/30 uppercase mb-12">
          What We Do
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#FAF7F2]/8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="bg-[#0a0a0a] p-8 hover:bg-[#1B2A4A]/30 transition-colors duration-300"
            >
              <span className="font-mono text-xs text-[#FAF7F2]/20 mb-4 block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="text-lg font-bold text-[#FAF7F2] mb-3">{service.title}</h2>
              <p className="text-[#FAF7F2]/50 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#FAF7F2]/8 mx-6 md:mx-12 lg:mx-20" />

      {/* Social Proof */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-[0.2em] text-[#FAF7F2]/30 uppercase mb-8">
          Clients
        </p>
        <p className="text-[#FAF7F2]/60 text-lg max-w-2xl mb-10 leading-relaxed">
          We&apos;ve worked at the Fortune 500 level, global brands, cultural platforms, artists
          with real reach. That same standard of work is now available to{" "}
          <strong className="text-[#FAF7F2]/90">businesses in Upper Marlboro and across
          Prince George&apos;s County</strong> that are ready to be taken seriously.
        </p>
        <div className="flex flex-wrap gap-6">
          {clients.map((client) => (
            <span
              key={client}
              className="font-mono text-sm text-[#FAF7F2]/25 tracking-widest uppercase border border-[#FAF7F2]/10 px-4 py-2"
            >
              {client}
            </span>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#FAF7F2]/8 mx-6 md:mx-12 lg:mx-20" />

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <div className="bg-[#1B2A4A] p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#FAF7F2] mb-4">
            Ready to be seen in Maryland?
          </h2>
          <p className="text-[#FAF7F2]/50 mb-10 max-w-md mx-auto">
            Brand identity, web design, content, video, whatever your business needs to compete.
            We build it right.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C0392B] text-[#FAF7F2] font-bold px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#a93226] transition-colors duration-200"
          >
            Start a Project
          </Link>
        </div>
      </section>

    </main>
  );
}
