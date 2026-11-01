"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects, websites } from "@/lib/portfolio";
import SiteShowcase from "@/components/SiteShowcase";
import Lightbox from "@/components/Lightbox";
import BrandFilm from "@/components/BrandFilm";
import { imageMap, videoMap, posterMap } from "@/components/PortfolioAsset";

type Media = { src: string; alt: string; isVideo: boolean };
export default function WorkClient() {
  const [lightbox, setLightbox] = useState<Media | null>(null);
  return (
    <div className="bg-navy-dark min-h-screen pt-36 pb-24">
      <div className="section-padding max-w-7xl mx-auto">
        <header className="mb-16">
          <p className="label-light mb-4">Our Work</p>
          <h1 className="text-display-xl text-cream font-bold mb-6">
            The idea, brought to life.
          </h1>
          <p className="text-cream/75 text-xl max-w-2xl leading-relaxed">
            Explore websites, brand identities, content, and experiences. Each
            project shows a different part of what we can build with you.
          </p>
        </header>
        <nav
          aria-label="Work categories"
          className="flex flex-wrap gap-6 text-cream mb-14"
        >
          {[
            ["websites", "Websites"],
            ["brand-identity", "Brand Identity"],
            ["content-experiences", "Content & Experiences"],
            ["studio-studies", "Studio Studies"],
          ].map(([id, title]) => (
            <a
              key={id}
              href={`#${id}`}
              className="underline underline-offset-4"
            >
              {title}
            </a>
          ))}
        </nav>
        <section id="websites" className="scroll-mt-28 mb-24">
          <h2 className="text-display-sm text-cream font-bold mb-8">
            Websites
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {websites.map((site) => (
              <SiteShowcase
                key={site.slug}
                {...site}
                href={site.url}
                caseStudyHref={`/work/${site.slug}`}
              />
            ))}
          </div>
        </section>
        {[
          {
            id: "brand-identity",
            title: "Brand Identity",
            items: projects.filter((p) => p.tier === 2),
          },
          {
            id: "content-experiences",
            title: "Content & Experiences",
            items: projects.filter((p) => p.tier !== 2),
          },
        ].map((group) => (
          <section id={group.id} key={group.id} className="scroll-mt-28 mb-24">
            <h2 className="text-display-sm text-cream font-bold mb-8">
              {group.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
              {group.items.map((project) => {
                const video = videoMap[project.slug];
                const image = posterMap[project.slug] || imageMap[project.slug];
                return (
                  <article key={project.slug}>
                    <button
                      type="button"
                      className="block relative w-full aspect-[4/3] bg-navy overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-red"
                      aria-label={`${video ? "Play" : "Expand"} ${project.title}`}
                      onClick={() =>
                        setLightbox({
                          src: video || image,
                          alt: project.title,
                          isVideo: Boolean(video),
                        })
                      }
                    >
                      <Image
                        src={image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={
                          group.id === "brand-identity"
                            ? "object-contain"
                            : "object-cover"
                        }
                      />
                      <span className="absolute bottom-4 right-4 bg-navy-dark text-cream px-4 py-2 text-sm">
                        {video ? "Play video" : "Expand image"}
                      </span>
                    </button>
                    <h3 className="text-cream text-2xl font-bold mt-5">
                      {project.title}
                    </h3>
                    <p className="text-cream/65 mt-2">{project.category}</p>
                    <p className="text-cream/75 mt-4 leading-relaxed max-w-xl">
                      {project.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
        <section id="studio-studies" className="scroll-mt-28 mb-24">
          <h2 className="text-display-sm text-cream font-bold mb-5">
            Studio Studies
          </h2>
          <p className="text-cream/75 text-lg max-w-2xl mb-10">
            In-house explorations in character design, motion, and AI-assisted
            animation. Made for The Flower Club, separate from commissioned
            client work.
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
        </section>
        <section className="border-t border-cream/20 pt-12">
          <h2 className="text-display-sm text-cream font-bold mb-5">
            Have a project in mind?
          </h2>
          <Link href="/contact" className="btn-primary">
            Start a Project
          </Link>
        </section>
      </div>
      {lightbox && <Lightbox {...lightbox} onClose={() => setLightbox(null)} />}
    </div>
  );
}
