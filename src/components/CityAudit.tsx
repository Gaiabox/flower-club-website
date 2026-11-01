import Link from "next/link";
export default function CityAudit({
  city,
}: {
  city: string;
  industries: string;
}) {
  return (
    <section className="section-padding py-16 max-w-6xl mx-auto">
      <h2 className="text-cream text-3xl font-bold mb-5">
        Creative support for your {city} business.
      </h2>
      <p className="text-cream/75 mb-6">
        Explore brand identities, websites, content, and business automation.
        Start with the project you need.
      </p>
      <Link href="/services" className="btn-primary">
        Explore Services
      </Link>
    </section>
  );
}
