import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { GUIDES, getGuide, type ListItem } from "@/lib/guides";
import { SITE, buildMeta } from "@/lib/seo";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = getGuide(params.slug);
  if (!g) return {};
  return buildMeta({ title: g.metaTitle, description: g.metaDescription, path: `/guides/${g.slug}` });
}

function Item({ item }: { item: ListItem }) {
  if (typeof item === "string") return <>{item}</>;
  return (
    <>
      <strong className="font-semibold">{item[0]}</strong> {item[1]}
    </>
  );
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const g = getGuide(params.slug);
  if (!g) notFound();
  const url = `${SITE.url}/guides/${g.slug}`;
  const related = GUIDES.filter((x) => x.slug !== g.slug).slice(0, 3);

  return (
    <div className="bg-cream text-navy pt-36 pb-24">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE.url },
          { name: "Guides", url: `${SITE.url}/guides` },
          { name: g.question, url },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: g.question,
            description: g.metaDescription,
            url,
            author: { "@id": `${SITE.url}/#organization` },
            publisher: { "@id": `${SITE.url}/#organization` },
          }).replace(/</g, "\\u003c"),
        }}
      />
      <article className="section-padding max-w-4xl mx-auto">
        <p className="label mb-5">
          <Link href="/guides" className="hover:text-red transition-colors">
            Guides
          </Link>
        </p>
        <h1 className="text-display-lg font-bold mb-8">{g.question}</h1>
        <p className="text-xl text-navy/85 leading-relaxed mb-14">{g.answer}</p>

        {g.blocks.map((b) => {
          const ListTag = b.ordered ? "ol" : "ul";
          return (
            <section key={b.heading} className="border-t border-navy/20 py-10">
              <h2 className="text-display-sm font-bold mb-6">{b.heading}</h2>
              {b.paras?.map((p) => (
                <p key={p} className="text-lg text-navy/85 leading-relaxed">
                  {p}
                </p>
              ))}
              {b.list && (
                <ListTag
                  className={`${b.ordered ? "list-decimal" : "list-disc"} pl-6 space-y-3 text-lg text-navy/85 leading-relaxed marker:text-red`}
                >
                  {b.list.map((item, i) => (
                    <li key={i}>
                      <Item item={item} />
                    </li>
                  ))}
                </ListTag>
              )}
              {b.table && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-lg text-navy/85">
                    <thead>
                      <tr className="border-b border-navy/30">
                        {b.table.head.map((h, i) => (
                          <th key={i} className="py-3 pr-6 font-semibold text-navy">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {b.table.rows.map((row) => (
                        <tr key={row[0]} className="border-b border-navy/15">
                          {row.map((cell, i) => (
                            <td key={i} className={`py-3 pr-6 ${i === 0 ? "font-semibold text-navy" : ""}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          );
        })}

        <section className="bg-navy text-cream p-8 md:p-12 my-10">
          <p className="label-light mb-4">From our work</p>
          <p className="text-lg text-cream/90 leading-relaxed mb-8">{g.proof}</p>
          <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
            {g.links.map(([href, label]) =>
              href === "/contact" ? (
                <Link key={href} href={href} className="btn-primary">
                  {label}
                </Link>
              ) : (
                <Link key={href} href={href} className="underline underline-offset-4 text-lg">
                  {label} →
                </Link>
              )
            )}
          </div>
        </section>

        <nav aria-label="More guides" className="border-t border-navy/20 pt-8">
          <p className="label mb-5">More guides</p>
          <ul className="space-y-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/guides/${r.slug}`} className="text-lg underline underline-offset-4 hover:text-red transition-colors">
                  {r.question}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </article>
    </div>
  );
}
