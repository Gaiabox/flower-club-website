"use client";

import { useRef, useState } from "react";

/**
 * BrandFilm, a vertical in-house film card.
 * Nothing but the poster loads until someone engages (preload="none"),
 * so the page stays light. Hover plays on desktop, and a real button
 * covers the card so keyboard and touch users get the same control.
 * Always muted: these are ambient brand pieces, not something to blast
 * audio at a visitor.
 */
export default function BrandFilm({
  src,
  poster,
  title,
  meta,
  aspect = "9/16",
}: {
  src: string;
  poster: string;
  title: string;
  meta: string;
  aspect?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const finePointer = () =>
    typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

  const play = () => {
    ref.current?.play().catch(() => {});
  };

  const stop = (reset = true) => {
    const v = ref.current;
    if (!v) return;
    v.pause();
    if (reset) v.currentTime = 0;
  };

  // The video's own events own the state, so browser-initiated pauses
  // (tab switch, Low Power Mode, media key) stay in sync with the badge.
  const toggle = () => (playing ? stop(false) : play());

  return (
    <figure
      className="brand-film group relative m-0 overflow-hidden rounded-sm bg-navy border border-cream/10"
      style={{ aspectRatio: aspect }}
    >
      <video
        ref={ref}
        src={src}
        poster={poster}
        preload="none"
        muted
        loop
        playsInline
        disablePictureInPicture
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      {/* The control. Covers the card so hover, tap, and keyboard all work. */}
      <button
        type="button"
        onClick={toggle}
        onMouseEnter={() => finePointer() && play()}
        onMouseLeave={() => finePointer() && stop()}
        aria-label={`${playing ? "Pause" : "Play"} ${title}, ${meta}`}
        className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-inset"
      >
        <span
          aria-hidden="true"
          className={`flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-2 backdrop-blur-sm transition-opacity duration-300 ${
            playing ? "opacity-0" : "opacity-100"
          }`}
        >
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
            <path d="M1 1L9 6L1 11V1Z" fill="white" />
          </svg>
          <span className="font-mono text-[10px] uppercase tracking-widest text-cream">Play</span>
        </span>
      </button>

      {/* Caption */}
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 z-20">
        <div className="h-24 bg-gradient-to-t from-navy-dark/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
          <p className="font-bold text-cream text-sm md:text-base leading-tight">{title}</p>
          <p className="label-light mt-1">{meta}</p>
        </div>
      </figcaption>

      <div className="absolute bottom-0 left-0 z-20 h-1 w-full origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100" />
    </figure>
  );
}
