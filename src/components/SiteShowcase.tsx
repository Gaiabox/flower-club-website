import Link from "next/link";
import Image from "next/image";

/** Client website preview with separate project-detail and live-site links. */
export default function SiteShowcase({
  href,
  image,
  alt,
  client,
  title,
  description,
  tags,
  priority = false,
  caseStudyHref,
}: {
  href: string;
  image: string;
  alt: string;
  client: string;
  title: string;
  description: string;
  tags: string[];
  priority?: boolean;
  caseStudyHref?: string;
}) {
  const domain = href.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <article data-cursor="view" className="site-card group relative">
      {/* Browser chrome */}
      <div className="overflow-hidden rounded-sm border border-cream/15 bg-navy transition-colors duration-500 group-hover:border-red/60">
        <div className="flex items-center gap-2 border-b border-cream/10 bg-navy-dark px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
          <span className="ml-2 truncate rounded-sm bg-navy px-2.5 py-1 font-mono text-[10px] text-cream/45">
            {domain}
          </span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden bg-navy-dark">
          <Image
            src={image}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1279px) calc(50vw - 40px), 608px"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      </div>

      {/* Project details and live website are separate destinations. */}
      <div className="mt-5">
        <p className="label-light mb-2">{client}</p>
        <h3 className="text-cream font-bold text-xl transition-colors duration-300 group-hover:text-red">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            {title}
            <span className="sr-only"> (opens the live site in a new tab)</span>
          </a>
        </h3>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-cream/55">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-cream/20 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cream/50"
            >
              {t}
            </span>
          ))}
        </div>
        {caseStudyHref && (
          <Link
            href={caseStudyHref}
            className="mt-5 block text-cream font-semibold underline underline-offset-4"
          >
            View project details →
          </Link>
        )}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cream transition-colors group-hover:text-red"
        >
          Visit the live site (new tab)
          <span className="transition-transform group-hover:translate-x-1">
            ↗
          </span>
        </a>
      </div>
    </article>
  );
}
