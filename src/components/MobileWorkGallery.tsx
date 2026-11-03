"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, websites } from "@/lib/portfolio";
import { imageMap, videoMap, posterMap } from "@/components/PortfolioAsset";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
type Media = { src: string; alt: string; video?: boolean };
type Entry = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tone: string;
  media: Media[];
  href?: string;
};
const siteEntries: Entry[] = websites.map((s) => ({
  id: s.slug,
  title: s.client,
  category: "Website design & development",
  description: s.description,
  image: s.image,
  tone: "site",
  media: [{ src: s.image, alt: s.alt }],
  href: `/work/${s.slug}`,
}));
const extraImages: Record<string, string[]> = {
  "redbull-daysnatchers": [
    "daysnatchers-crowd.jpg",
    "daysnatchers-bar.jpg",
    "daysnatchers-menu.jpg",
  ],
  popeyes: [
    "popeyes-community.jpg",
    "popeyes-wing-truck-tour.jpg",
    "popeyes-doordash.jpg",
  ],
  pg: ["hbcu-alumni.jpg", "popeyes-febreze-multiband.jpg"],
};
const projectEntries: Entry[] = projects.map((p) => ({
  id: p.slug,
  title: p.title,
  category: p.category,
  description: p.description,
  image: posterMap[p.slug] || imageMap[p.slug],
  tone: p.tier === 2 ? "identity" : "experience",
  media: [
    ...(videoMap[p.slug]
      ? [{ src: videoMap[p.slug], alt: p.title, video: true }]
      : []),
    { src: posterMap[p.slug] || imageMap[p.slug], alt: p.title },
    ...(extraImages[p.slug] || []).map((file) => ({
      src: `/assets/images/${file}`,
      alt: `${p.title}, project photography`,
    })),
  ],
}));
const studies: Entry[] = [
  {
    id: "bloomfire",
    title: "Operation Bloomfire",
    category: "Studio study · AI-assisted animation",
    description:
      "An in-house exploration in character and motion design. Made for The Flower Club.",
    image: "/assets/images/fc-bloomfire-thumb.jpg",
    tone: "portrait",
    media: [
      {
        src: "/assets/videos/fc-bloomfire.mp4",
        alt: "Operation Bloomfire",
        video: true,
      },
    ],
  },
  {
    id: "club-ball",
    title: "Club Ball",
    category: "Studio study · Motion design",
    description:
      "An in-house character and motion study. Made for The Flower Club.",
    image: "/assets/images/fc-hoops-thumb.jpg",
    tone: "portrait",
    media: [
      { src: "/assets/videos/fc-hoops.mp4", alt: "Club Ball", video: true },
    ],
  },
];
const selected = [
  siteEntries[0],
  projectEntries.find((p) => p.id === "bean-locks")!,
  siteEntries[1],
  studies[0],
  projectEntries.find((p) => p.id === "makers-mark-culturecon")!,
  studies[1],
];

function Viewer({
  entries,
  index,
  onClose,
  onChange,
}: {
  entries: Entry[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [mediaIndex, setMediaIndex] = useState(0);
  const entry = entries[index];
  const media = entry.media[mediaIndex] || entry.media[0];
  useEffect(() => {
    const el = dialog.current;
    const focus = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    el?.showModal();
    document.body.style.overflow = "hidden";
    const wide = window.matchMedia("(min-width:768px)");
    const closeOnDesktop = () => {
      if (wide.matches) onClose();
    };
    wide.addEventListener("change", closeOnDesktop);
    return () => {
      el?.close();
      document.body.style.overflow = overflow;
      wide.removeEventListener("change", closeOnDesktop);
      focus?.focus();
    };
  }, [onClose]);
  const change = (next: number) => {
    setMediaIndex(0);
    onChange((next + entries.length) % entries.length);
  };
  return (
    <dialog
      ref={dialog}
      className="mobile-project-dialog"
      aria-labelledby="mobile-project-title"
      onCancel={onClose}
    >
      <header>
        <span className="mobile-gallery-label">The Flower Club / Work</span>
        <button
          type="button"
          onClick={onClose}
          autoFocus
          aria-label="Close project viewer"
        >
          Close ×
        </button>
      </header>
      <div
        className={`mobile-viewer-stage tone-${entry.tone}`}
        key={`${entry.id}-${mediaIndex}`}
      >
        {media.video ? (
          <video
            src={media.src}
            controls
            autoPlay
            playsInline
            preload="metadata"
            aria-label={media.alt}
          />
        ) : (
          <Image
            src={media.src}
            alt={media.alt}
            fill
            sizes="100vw"
            className="object-contain"
          />
        )}
      </div>
      <div className="mobile-viewer-copy">
        <p className="mobile-gallery-label">{entry.category}</p>
        <h2 id="mobile-project-title">{entry.title}</h2>
        {entry.media.length > 1 && (
          <div className="mobile-media-nav" aria-label="Project media">
            <button
              onClick={() =>
                setMediaIndex(
                  (mediaIndex - 1 + entry.media.length) % entry.media.length,
                )
              }
              aria-label="Previous image or video"
            >
              ←
            </button>
            <span aria-live="polite">
              {mediaIndex + 1} / {entry.media.length}{" "}
              {media.video ? "Film" : "Image"}
            </span>
            <button
              onClick={() =>
                setMediaIndex((mediaIndex + 1) % entry.media.length)
              }
              aria-label="Next image or video"
            >
              →
            </button>
          </div>
        )}
        <p>{entry.description}</p>
        {entry.href && <Link href={entry.href}>Explore the case study ↗</Link>}
      </div>
      <footer>
        <button onClick={() => change(index - 1)} aria-label="Previous project">
          ←
        </button>
        <button
          className="mobile-next-project"
          onClick={() => change(index + 1)}
        >
          Next project{" "}
          <span>{entries[(index + 1) % entries.length].title} ↗</span>
        </button>
      </footer>
    </dialog>
  );
}
function Card({ entry, onClick }: { entry: Entry; onClick: () => void }) {
  return (
    <article className={`mobile-project-card tone-${entry.tone}`}>
      <button
        className="mobile-project-open"
        onClick={onClick}
        aria-label={`Explore ${entry.title}`}
      >
        <div className="mobile-project-art">
          <Image
            src={entry.image}
            alt={entry.title}
            fill
            sizes="(max-width:767px) 86vw, 1px"
          />
          <span className="mobile-open-icon" aria-hidden="true">
            ↗
          </span>
        </div>
        <div className="mobile-project-caption">
          <span className="mobile-gallery-label">{entry.category}</span>
          <h3>{entry.title}</h3>
        </div>
      </button>
    </article>
  );
}
function Row({
  title,
  id,
  entries,
  onOpen,
}: {
  title: string;
  id: string;
  entries: Entry[];
  onOpen: (entries: Entry[], index: number) => void;
}) {
  const rail = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const move = (direction: number) => {
    const el = rail.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement;
    el.scrollBy({
      left: direction * (card.offsetWidth + 16),
      behavior: window.matchMedia("(prefers-reduced-motion:reduce)").matches
        ? "instant"
        : "smooth",
    });
  };
  return (
    <section id={id} className="mobile-work-category">
      <div className="mobile-row-heading">
        <h2>{title}</h2>
        <span>Swipe to explore ↔</span>
      </div>
      <div
        ref={rail}
        className="mobile-work-rail"
        role="region"
        aria-label={title}
        tabIndex={0}
        onScroll={() => {
          const el = rail.current;
          if (el?.firstElementChild)
            setActive(
              Math.round(
                el.scrollLeft /
                  ((el.firstElementChild as HTMLElement).offsetWidth + 16),
              ),
            );
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
            e.preventDefault();
            move(e.key === "ArrowRight" ? 1 : -1);
          }
        }}
      >
        {entries.map((entry, i) => (
          <Card
            key={entry.id}
            entry={entry}
            onClick={() => onOpen(entries, i)}
          />
        ))}
      </div>
      <div className="mobile-rail-controls">
        <span>
          {Math.min(active + 1, entries.length)} / {entries.length}
        </span>
        <div>
          <button
            onClick={() => move(-1)}
            disabled={active === 0}
            aria-label={`Previous ${title} project`}
          >
            ←
          </button>
          <button
            onClick={() => move(1)}
            disabled={active >= entries.length - 1}
            aria-label={`Next ${title} project`}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
export default function MobileWorkGallery({
  pinned = false,
}: {
  pinned?: boolean;
}) {
  const root = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  const [viewer, setViewer] = useState<{
    entries: Entry[];
    index: number;
  } | null>(null);
  const [active, setActive] = useState(0);
  const [mobile, setMobile] = useState(false);
  const closeViewer = useCallback(() => setViewer(null), []);
  useEffect(() => {
    const query = window.matchMedia("(max-width:767px)");
    const update = () => setMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (!mobile || !pinned || !root.current || !rail.current) return;
    const mm = gsap.matchMedia();
    mm.add(
      "(max-width:767px) and (prefers-reduced-motion:no-preference)",
      () => {
        const el = root.current!,
          track = rail.current!;
        const distance = () =>
          Math.max(0, track.scrollWidth - track.clientWidth);
        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 76px",
            end: () => `+=${distance() + window.innerHeight * 0.25}`,
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
            onUpdate: (self) =>
              setActive(
                Math.min(
                  selected.length - 1,
                  Math.round(self.progress * (selected.length - 1)),
                ),
              ),
          },
        });

        const refresh = () => ScrollTrigger.refresh();
        document.fonts.ready.then(refresh);
        const observer = new ResizeObserver(refresh);
        observer.observe(track);
        return () => {
          observer.disconnect();
        };
      },
    );
    return () => mm.revert();
  }, [pinned, mobile]);
  const open = (entries: Entry[], index: number) =>
    setViewer({ entries, index });
  if (!mobile) return null;
  return (
    <div
      ref={root}
      className={
        pinned
          ? "mobile-only mobile-selected-stage"
          : "mobile-only mobile-work-page"
      }
    >
      {pinned ? (
        <>
          <div className="mobile-selected-heading">
            <p className="mobile-gallery-label">Selected Work</p>
            <h2>
              A few things
              <br />
              we’ve <em>made.</em>
            </h2>
            <div>
              <span className="mobile-scroll-instruction">
                Scroll down to explore →
              </span>
              <span className="mobile-swipe-instruction">
                Swipe to explore ↔
              </span>
              <a href="#after-selected-work">Skip gallery ↓</a>
            </div>
          </div>
          <div className="mobile-selected-window">
            <div ref={rail} className="mobile-selected-rail">
              {selected.map((entry, i) => (
                <Card
                  key={entry.id}
                  entry={entry}
                  onClick={() => open(selected, i)}
                />
              ))}
            </div>
          </div>
          <div className="mobile-selected-footer">
            <span>
              {active + 1} / {selected.length}
            </span>
            <Link href="/work">Explore all work ↗</Link>
          </div>
        </>
      ) : (
        <>
          <header className="mobile-work-intro">
            <p className="mobile-gallery-label">Our Work</p>
            <h1>
              The idea,
              <br />
              brought to <em>life.</em>
            </h1>
            <p>
              Explore websites, brand identities, content, and experiences. Each
              project shows a different part of what we can build with you.
            </p>
          </header>
          <nav className="mobile-category-nav" aria-label="Work categories">
            <a href="#websites">Websites</a>
            <a href="#brand-identity">Brand Identity</a>
            <a href="#content-experiences">Content & Experiences</a>
          </nav>
          <Row
            id="websites"
            title="Websites"
            entries={siteEntries}
            onOpen={open}
          />
          <Row
            id="brand-identity"
            title="Brand Identity"
            entries={projectEntries.filter((p) => p.tone === "identity")}
            onOpen={open}
          />
          <Row
            id="content-experiences"
            title="Content & Experiences"
            entries={projectEntries.filter((p) => p.tone !== "identity")}
            onOpen={open}
          />
          <Row
            id="studio-studies"
            title="Studio Studies"
            entries={studies}
            onOpen={open}
          />
          <p className="mobile-work-legal">
            Client names and marks belong to their respective owners. Project
            descriptions identify the scope shown. In-house studies are labeled
            separately.
          </p>
          <section className="mobile-work-cta">
            <h2>
              Have a project
              <br />
              in <em>mind?</em>
            </h2>
            <Link href="/contact" className="btn-primary">
              Start a Project ↗
            </Link>
          </section>
        </>
      )}
      {viewer && (
        <Viewer
          entries={viewer.entries}
          index={viewer.index}
          onClose={closeViewer}
          onChange={(index) => setViewer({ ...viewer, index })}
        />
      )}
    </div>
  );
}
