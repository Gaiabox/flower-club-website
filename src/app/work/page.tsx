"use client";

import { useEffect, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/lib/portfolio";
import PortfolioAsset from "@/components/PortfolioAsset";
import Lightbox from "@/components/Lightbox";
import { imageMap, videoMap, posterMap } from "@/components/PortfolioAsset";

gsap.registerPlugin(ScrollTrigger);

interface LightboxState {
  src: string;
  alt: string;
  isVideo: boolean;
}

export default function WorkPage() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const openLightbox = useCallback((slug: string, name: string) => {
    const video = videoMap[slug];
    const image = imageMap[slug];
    if (video) {
      setLightbox({ src: video, alt: `${name} — brand activation video by The Flower Club creative agency`, isVideo: true });
    } else if (image) {
      setLightbox({ src: image, alt: `${name} — creative work by The Flower Club agency`, isVideo: false });
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from(".work-header > *", {
        y: 30, opacity: 0, duration: 0.9, stagger: 0.12, ease: "power3.out", delay: 0.1,
      });

      // Section labels slide in from left
      gsap.utils.toArray<HTMLElement>(".section-label").forEach((el) => {
        gsap.from(el, {
          x: -20, opacity: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
        });
      });

      // Cards stagger up on scroll — each grid triggered independently
      gsap.utils.toArray<HTMLElement>(".work-grid-section").forEach((section) => {
        const items = section.querySelectorAll(".work-item");
        gsap.from(items, {
          opacity: 0, y: 40, duration: 0.65, stagger: 0.06, ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 82%", toggleActions: "play none none none" },
        });
      });

      // Hero video row subtle fade
      gsap.from(".hero-video-row", {
        opacity: 0, y: 25, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".hero-video-row", start: "top 85%" },
      });
    });
    return () => ctx.revert();
  }, []);

  const tier1 = projects.filter((p) => p.tier === 1);
  const tier2 = projects.filter((p) => p.tier === 2);
  const tier3 = projects.filter((p) => p.tier === 3);

  const ProjectCard = ({
    project,
    aspect,
    hideLabel = false,
  }: {
    project: (typeof projects)[0];
    aspect: "video" | "square" | "portrait";
    hideLabel?: boolean;
  }) => (
    <div
      className="work-item group cursor-pointer"
      onClick={() => openLightbox(project.slug, project.client)}
    >
      <div className="relative overflow-hidden rounded-sm">
        <PortfolioAsset
          slug={project.slug}
          name={project.client}
          category={project.category}
          aspect={aspect}
          className="group-hover:scale-[1.03] transition-transform duration-700"
        />
        {/* Hover overlay — description */}
        <div className="absolute inset-0 bg-navy-dark/85 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
          <div>
            <p className="text-cream/70 text-xs leading-relaxed max-w-xs">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] font-mono text-red/80 border border-red/20 px-2 py-0.5 rounded-sm uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="font-mono text-[9px] text-cream/30 mt-3 uppercase tracking-widest">
              Click to expand
            </p>
          </div>
        </div>
      </div>
      {!hideLabel && (
        <div className="mt-3">
          <h3 className="text-cream font-bold text-lg uppercase tracking-wide group-hover:text-red transition-colors duration-300">
            {project.client}
          </h3>
          <p className="label-light mt-0.5 text-[10px]">{project.category}</p>
        </div>
      )}
    </div>
  );

  return (
    <>
      <div className="bg-navy-dark min-h-screen pt-32 pb-24">
        <div className="section-padding max-w-7xl mx-auto">

          {/* Header */}
          <div className="work-header mb-20">
            <p className="label-light mb-4">Portfolio</p>
            <h1 className="text-display-xl text-cream font-bold mb-4">The Work.</h1>
            <p className="text-cream/60 text-xl max-w-xl">
              Activations. Art. Branding. The range is the proof.
            </p>
          </div>

          <div className="work-grid space-y-24">

            {/* Tier 1 */}
            <div className="work-grid-section">
              <p className="section-label label-light mb-8">Fortune 500 + Cultural Icons</p>

              {/* Video showcase row — landscape + vertical side by side */}
              {(() => {
                const videoProjects = tier1.filter((p) => p.video);
                const imageProjects = tier1.filter((p) => !p.video);
                return (
                  <>
                    {videoProjects.length > 0 && (
                      <div className="hero-video-row flex flex-col md:flex-row gap-6 mb-6">
                        {videoProjects[0] && (
                          <div className="work-item group cursor-pointer md:flex-[3]" onClick={() => openLightbox(videoProjects[0].slug, videoProjects[0].client)}>
                            <div className="relative overflow-hidden rounded-sm" style={{ paddingTop: "56.25%" }}>
                              <video
                                src={videoMap[videoProjects[0].slug]}
                                poster={posterMap[videoProjects[0].slug]}
                                muted loop playsInline
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                                onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLVideoElement).pause(); (e.currentTarget as HTMLVideoElement).currentTime = 0; }}
                              />
                              <div className="absolute inset-0 bg-navy-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                                <div className="w-14 h-14 rounded-full border-2 border-cream flex items-center justify-center">
                                  <span className="text-cream text-xl ml-1">▶</span>
                                </div>
                              </div>
                            </div>
                            <div className="mt-3">
                              <h3 className="text-cream font-bold text-lg uppercase tracking-wide group-hover:text-red transition-colors duration-300">{videoProjects[0].client}</h3>
                              <p className="label-light mt-0.5 text-[10px]">{videoProjects[0].category}</p>
                            </div>
                          </div>
                        )}
                        {videoProjects[1] && (
                          <div className="work-item group cursor-pointer md:flex-[1]" onClick={() => openLightbox(videoProjects[1].slug, videoProjects[1].client)}>
                            <div className="relative overflow-hidden rounded-sm" style={{ paddingTop: "177.78%" }}>
                              <video
                                src={videoMap[videoProjects[1].slug]}
                                poster={posterMap[videoProjects[1].slug]}
                                muted loop playsInline
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                                onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLVideoElement).pause(); (e.currentTarget as HTMLVideoElement).currentTime = 0; }}
                              />
                              <div className="absolute inset-0 bg-navy-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                                <div className="w-14 h-14 rounded-full border-2 border-cream flex items-center justify-center">
                                  <span className="text-cream text-xl ml-1">▶</span>
                                </div>
                              </div>
                            </div>
                            <div className="mt-3">
                              <h3 className="text-cream font-bold text-lg uppercase tracking-wide group-hover:text-red transition-colors duration-300">{videoProjects[1].client}</h3>
                              <p className="label-light mt-0.5 text-[10px]">{videoProjects[1].category}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Image brand cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {imageProjects.map((p) => <ProjectCard key={p.slug} project={p} aspect="video" />)}
                    </div>
                  </>
                );
              })()}
            </div>

            {/* Tier 2 */}
            <div className="work-grid-section">
              <p className="section-label label-light mb-8">LOGOS</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tier2.map((p) => <ProjectCard key={p.slug} project={p} aspect="square" hideLabel />)}
              </div>
            </div>

            {/* Tier 3 */}
            <div className="work-grid-section">
              <p className="section-label label-light mb-8">PRODUCTIONS</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tier3.map((p) => <ProjectCard key={p.slug} project={p} aspect="video" hideLabel />)}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          isVideo={lightbox.isVideo}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
