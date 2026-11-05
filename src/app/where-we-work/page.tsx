import type { Metadata } from "next";
import Link from "next/link";
import { buildMeta } from "@/lib/seo";
export const metadata: Metadata = buildMeta({
  title: "Where We Work: New York, Florida, Atlanta, Los Angeles, Charlotte",
  description:
    "The Flower Club is based in Charlotte and works with clients nationwide, with events in New York and Florida and planning and production in Atlanta and Los Angeles.",
  path: "/where-we-work",
});
const places: { name: string; body: string; href?: string; cta?: string }[] = [
  { name: "Charlotte", body: "Our home base.", href: "/services/charlotte", cta: "See Charlotte" },
  { name: "New York", body: "Where much of our event work has happened.", href: "/services/new-york", cta: "See New York" },
  { name: "Florida", body: "Tallahassee and Miami.", href: "/services/florida", cta: "See Florida" },
  {
    name: "Atlanta and Los Angeles",
    body: "Much of our client meetings, planning, and production work happens in these cities, and we work with clients here regularly.",
  },
];
export default function WhereWeWorkPage() {
  return (
    <div className="bg-navy-dark text-cream pt-36 pb-24">
      <div className="section-padding max-w-6xl mx-auto">
        <header className="mb-16">
          <p className="label-light mb-5">Where We Work</p>
          <h1 className="text-display-xl font-bold mb-6">Based in Charlotte. Working nationwide.</h1>
          <Link href="/contact" className="btn-primary">
            Start a Project
          </Link>
        </header>
        <section className="grid md:grid-cols-2 gap-x-10 gap-y-10 mb-20">
          {places.map((p) => (
            <div key={p.name} className="border-t border-cream/20 pt-6">
              <h2 className="text-2xl font-bold mb-3">{p.name}</h2>
              <p className="text-cream/75 leading-relaxed mb-4">{p.body}</p>
              {p.href && (
                <Link href={p.href} className="text-cream underline underline-offset-4">
                  {p.cta} →
                </Link>
              )}
            </div>
          ))}
        </section>
        <section className="bg-navy p-8 md:p-12">
          <h2 className="text-display-sm font-bold mb-6">Start with the project you have in mind.</h2>
          <Link href="/contact" className="btn-primary">
            Start a Project
          </Link>
        </section>
      </div>
    </div>
  );
}
