import Link from "next/link";
export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-cream pt-36 pb-24">
      <article className="section-padding max-w-4xl mx-auto text-navy">
        <p className="label mb-4">The Flower Club</p>
        <h1 className="text-display-md font-bold mb-6">{title}</h1>
        <p className="text-navy/70 mb-10">Effective November 1, 2026</p>
        <div className="space-y-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mb-4 [&_p]:leading-relaxed [&_p]:mb-4 [&_a]:underline">
          {children}
        </div>
        <p className="mt-12 border-t border-navy/20 pt-6">
          Questions? <Link href="/contact">Contact The Flower Club</Link>.
          Please identify your message as a privacy, website terms, or
          accessibility request.
        </p>
      </article>
    </div>
  );
}
