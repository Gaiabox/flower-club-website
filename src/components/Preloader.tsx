"use client";

import { useEffect, useState } from "react";

/**
 * Preloader — pixel-art flower growing out of dirt while the site loads.
 * Old-school handheld energy: chunky pixels, hard edges, mono % counter.
 * The live site sits blurred behind the overlay and fades in at 100%.
 * Desktop only — touch devices skip straight to the page.
 */

const PX = {
  dirt: "#5C4033",
  dirtDark: "#3A2A1E",
  stem: "#4E9B5E",
  petal: "#FFD700",
  core: "#F4A300",
  navy: "#1B2A4A",
};

// [row, colStart, colEnd, color] — one horizontal run of pixels
type Run = [number, number, number, string];

const span = (row: number, c0: number, c1: number, color: string): Run => [row, c0, c1, color];

// Dirt mound — always visible
const DIRT: Run[] = [
  span(17, 5, 11, PX.dirt),
  span(18, 3, 13, PX.dirt),
  span(19, 1, 15, PX.dirt),
  // dark speckles for texture
  span(17, 7, 7, PX.dirtDark),
  span(18, 5, 5, PX.dirtDark),
  span(18, 10, 10, PX.dirtDark),
  span(19, 3, 3, PX.dirtDark),
  span(19, 8, 8, PX.dirtDark),
  span(19, 12, 12, PX.dirtDark),
];

// Stage 1 — sprout breaks the surface (20%+)
const SPROUT: Run[] = [
  span(16, 8, 8, PX.stem),
  span(15, 8, 8, PX.stem),
  span(15, 7, 7, PX.stem),
  span(15, 9, 9, PX.stem),
];

// Stage 2 — stem climbs, first leaf (40%+)
const STEM_MID: Run[] = [
  span(14, 8, 8, PX.stem),
  span(13, 8, 8, PX.stem),
  span(12, 8, 8, PX.stem),
  span(13, 6, 7, PX.stem),
  span(12, 5, 6, PX.stem),
];

// Stage 3 — full stem, second leaf, bud forming (60%+)
const STEM_FULL: Run[] = [
  span(11, 8, 8, PX.stem),
  span(10, 8, 8, PX.stem),
  span(9, 8, 8, PX.stem),
  span(11, 9, 10, PX.stem),
  span(10, 10, 11, PX.stem),
];

const BUD: Run[] = [
  span(8, 7, 9, PX.petal),
  span(7, 7, 9, PX.petal),
  span(6, 7, 9, PX.petal),
  span(7, 8, 8, PX.core),
];

// Stage 4 — full bloom (80%+)
const BLOOM: Run[] = [
  // top petals
  span(2, 7, 9, PX.petal),
  span(3, 6, 10, PX.petal),
  // side petals
  span(4, 4, 5, PX.petal),
  span(4, 11, 12, PX.petal),
  span(5, 3, 5, PX.petal),
  span(5, 11, 13, PX.petal),
  span(6, 4, 5, PX.petal),
  span(6, 11, 12, PX.petal),
  // bottom petals
  span(7, 6, 10, PX.petal),
  span(8, 7, 9, PX.petal),
  // core
  span(4, 7, 9, PX.core),
  span(5, 7, 9, PX.core),
  span(6, 7, 9, PX.core),
  span(5, 8, 8, PX.navy),
];

function stageRuns(stage: number): Run[] {
  const runs = [...DIRT];
  if (stage >= 1) runs.push(...SPROUT);
  if (stage >= 2) runs.push(...STEM_MID);
  if (stage >= 3) runs.push(...STEM_FULL);
  if (stage === 3) runs.push(...BUD);
  if (stage >= 4) runs.push(...BLOOM);
  return runs;
}

function PixelFlower({ stage }: { stage: number }) {
  return (
    <svg
      viewBox="0 0 17 20"
      className="w-[170px] md:w-[210px]"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {stageRuns(stage).map(([row, c0, c1, color], i) => (
        <rect key={i} x={c0} y={row} width={c1 - c0 + 1} height={1} fill={color} />
      ))}
    </svg>
  );
}

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Desktop only — touch devices go straight to the site
    const isDesktop = window.matchMedia("(pointer: fine) and (min-width: 768px)").matches;
    if (!isDesktop) {
      setDone(true);
      return;
    }

    document.body.style.overflow = "hidden";

    let current = 0;
    const tick = window.setInterval(() => {
      const loaded = document.readyState === "complete";
      // crawl toward 90 while loading, sprint to 100 once the page is ready
      const step = loaded ? 6 + Math.random() * 5 : 1.5 + Math.random() * 3.5;
      current = Math.min(loaded ? 100 : 90, current + step);
      setProgress(current);

      if (current >= 100) {
        window.clearInterval(tick);
        window.setTimeout(() => setFading(true), 400);
        window.setTimeout(() => {
          document.body.style.overflow = "";
          setDone(true);
        }, 1100);
      }
    }, 90);

    return () => {
      window.clearInterval(tick);
      document.body.style.overflow = "";
    };
  }, []);

  if (done) return null;

  const stage = Math.min(4, Math.floor(progress / 20));

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-dark/40 backdrop-blur-2xl transition-opacity duration-700 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <PixelFlower stage={stage} />
      <p className="mt-10 font-mono text-cream text-2xl md:text-3xl tracking-[0.2em] tabular-nums select-none">
        {Math.floor(progress)}%
      </p>
    </div>
  );
}
