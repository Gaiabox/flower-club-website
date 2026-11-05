import Link from "next/link";
import { services } from "@/lib/portfolio";
import type { LocationEvent } from "@/lib/locations";
export default function LocationServices({
  city,
  intro,
  headline,
  events,
}: {
  city: string;
  intro: string;
  headline?: string;
  events?: LocationEvent[];
}) {
  const places = events ? Array.from(new Set(events.map((e) => e.place ?? ""))) : [];
  return (
    <div className="bg-navy-dark text-cream pt-36 pb-24">
      <div className="section-padding max-w-6xl mx-auto">
        <header className="mb-16">
          <p className="label-light mb-5">Serving {city}</p>
          <h1 className="text-display-xl font-bold mb-6">
            {headline ?? <>Brand identities and websites for {city} businesses.</>}
          </h1>
          <p className="text-cream/75 text-xl leading-relaxed max-w-3xl mb-6">
            {intro}
          </p>
          <p className="text-cream/70 text-lg max-w-3xl mb-8">
            The Flower Club is based in Charlotte, NC and works with clients
            nationwide. We bring strategy, design, development, and production
            together around your project.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a Project
          </Link>
        </header>
        {events && events.length > 0 && (
          <section className="mb-20">
            <h2 className="text-display-sm font-bold mb-10">
              Work in {city}.
            </h2>
            {places.map((place) => (
              <div key={place || "all"} className="mb-10 last:mb-0">
                {place && <p className="label-light mb-5">{place}</p>}
                <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                  {events
                    .filter((e) => (e.place ?? "") === place)
                    .map((e) => (
                      <div key={e.title} className="border-t border-cream/20 pt-6">
                        <h3 className="text-2xl font-bold mb-3">{e.title}</h3>
                        <p className="text-cream/75 leading-relaxed">{e.detail}</p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </section>
        )}
        <section className="mb-20">
          <h2 className="text-display-sm font-bold mb-6">
            Explore the work before we talk.
          </h2>
          <p className="text-cream/75 text-lg max-w-3xl mb-6">
            See the Fire &amp; Ash websites, brand identity projects, and
            selected content and experiences to understand how we approach the
            work.
          </p>
          <Link
            href="/work"
            className="text-cream underline underline-offset-4"
          >
            View our work →
          </Link>
        </section>
        <section className="mb-20">
          <h2 className="text-display-sm font-bold mb-10">
            What we can build together.
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service) => (
              <div key={service.id} className="border-t border-cream/20 pt-6">
                <h3 className="text-2xl font-bold mb-4">
                  <Link href={`/services#${service.id}`}>
                    {service.title} →
                  </Link>
                </h3>
                <p className="text-cream/75 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-navy p-8 md:p-12">
          <h2 className="text-display-sm font-bold mb-6">
            Start with the project you have in mind.
          </h2>
          <p className="text-cream/75 text-lg max-w-3xl mb-8">
            Share your goals, timeline, and budget. We will discuss a scope that
            fits, whether you need one focused project or ongoing creative
            support.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a Project
          </Link>
        </section>
      </div>
    </div>
  );
}
