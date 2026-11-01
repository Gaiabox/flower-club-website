"use client";

import { useEffect, useState, useRef } from "react";

/**
 * HeroVideo, the looping clip behind the hero.
 *
 * Mounts only on desktop. A `hidden md:block` video still downloads on
 * phones, it is just invisible, which was costing mobile visitors about
 * 1.4MB for something they never see. Rendering nothing until we know
 * the viewport is wide means the file is never requested there.
 *
 * The hero's CSS background image sits underneath on every device, so
 * there is no empty frame while this decides.
 */
export default function HeroVideo({
  src,
  poster,
}: {
  src: string;
  poster: string;
}) {
  const video = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 768px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setShow(wide.matches && !reduce.matches);
    update();
    wide.addEventListener("change", update);
    reduce.addEventListener("change", update);
    return () => {
      wide.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
    };
  }, []);

  if (!show) return null;

  return (
    <>
      <video
        ref={video}
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <button
        type="button"
        className="absolute bottom-5 right-5 z-20 text-cream border border-cream/60 bg-navy-dark/80 px-4 py-3 text-sm"
        onClick={() => {
          if (video.current?.paused) {
            video.current.play().catch(() => {});
          } else {
            video.current?.pause();
          }
        }}
        aria-label={paused ? "Play header video" : "Pause header video"}
      >
        {paused ? "Play Video" : "Pause Video"}
      </button>
    </>
  );
}
