import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Branding Agency New York NY | The Flower Club",
  description:
    "New York's culture-forward creative agency. Brand identity, web design, AI-powered digital employees, and content for businesses ready to stand out.",
};

const services = [
  {
    title: "Brand Identity",
    description:
      "From logo to full visual system — we build identities that carry weight. Strategy-driven, built to outlast the trend cycle.",
  },
  {
    title: "Web Design + Development",
    description:
      "Custom-built sites that perform as good as they look. No templates. Fast, responsive, and built to convert.",
  },
  {
    title: "AI-Powered Digital Employees",
    description:
      "Custom AI support systems for follow-up, scheduling, intake, reporting, and admin — built around how your business actually runs.",
  },
  {
    title: "Content Creation",
    description:
      "Photo, video, graphics — content with purpose. Every asset built to work within a larger brand strategy.",
  },
  {
    title: "Graphic Design",
    description:
      "Marketing materials, social assets, packaging, print — crafted with the same attention whether it's a billboard or a business card.",
  },
  {
    title: "SEO + Social Media",
    description:
      "Strategy-driven search optimization and social management that drives real engagement and organic growth.",
  },
];

const clients = ["Bacardi", "Popeyes", "Maker's Mark", "Red Bull", "Rémy Martin", "Febreze"];

export default function NewYorkPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#FAF7F2]">
      <section className="pt-36 pb-20 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-[0.2em] text-[#C0392B] uppercase mb-6">
          New York, NY
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-8 max-w-3xl">
          Metro New York&apos;s Brand Agency.
        </h1>
        <p className="text-[#FAF7F2]/60 text-xl leading-relaxed max-w-2xl mb-10">
          NYC is the most competitive market in the world — and most brands here are still
          forgettable despite the city&apos;s energy. The noise is deafening, and blending in is the
          default. The Flower Club is a{" "}
          <strong className="text-[#FAF7F2]/90">branding agency in New York NY</strong> that builds
          brands sharp enough to cut through a city that never stops moving.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C0392B] text-[#FAF7F2] font-bold px-8 py-4 text-sm tracking-widest uppercase hover:bg-[#a93226] transition-colors duration-200"
        >
          Start a Project
        </Link>
      </section>

      <div className="border-t border-[#FAF7F2]/8 mx-6 md:mx-12 lg:mx-20" />

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

      <div className="border-t border-[#FAF7F2]/8 mx-6 md:mx-12 lg:mx-20" />

      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-[0.2em] text-[#FAF7F2]/30 uppercase mb-8">
          Clients
        </p>
        <p className="text-[#FAF7F2]/60 text-lg max-w-2xl mb-10 leading-relaxed">
          We&apos;ve done this at the Fortune 500 level — global brands, cultural platforms, and
          artists that move culture. That same craft is now available to{" "}
          <strong className="text-[#FAF7F2]/90">New York businesses</strong> ready to compete.
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

      <div className="border-t border-[#FAF7F2]/8 mx-6 md:mx-12 lg:mx-20" />

      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <div className="bg-[#1B2A4A] p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#FAF7F2] mb-4">
            Ready to stand out in New York?
          </h2>
          <p className="text-[#FAF7F2]/50 mb-10 max-w-md mx-auto">
            Brand identity, web design, AI support systems, content — whatever your business needs
            to compete. We build it right.
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
