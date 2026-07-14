"use client";

import { useEffect, useState } from "react";

/**
 * AnimatedLogo, THE FL[O]WER CLUB wordmark where the flower mark cycles
 * through three treatments (filled → outlined → inverted) on a loop,
 * with a subtle petal rotation between frames.
 *
 * Only animates on desktop AND while the page is scrolled to the top.
 * The moment the user scrolls, it snaps back to the static filled mark.
 */

const FRAMES = [
  // filled, the original mark
  {
    petalFill: "#FFD700",
    petalStroke: "#1B2A4A",
    ringFill: "#F4A300",
    ringStroke: "#1B2A4A",
    innerFill: "#1B2A4A",
    innerStroke: "transparent",
    dotFill: "#FFD700",
    rotate: 0,
  },
  // outlined, hollow, blueprint sketch (currentColor adapts to nav color)
  {
    petalFill: "transparent",
    petalStroke: "currentColor",
    ringFill: "transparent",
    ringStroke: "currentColor",
    innerFill: "transparent",
    innerStroke: "currentColor",
    dotFill: "currentColor",
    rotate: 22.5,
  },
  // inverted, navy petals, gold linework
  {
    petalFill: "#1B2A4A",
    petalStroke: "#FFD700",
    ringFill: "#1B2A4A",
    ringStroke: "#FFD700",
    innerFill: "#FFD700",
    innerStroke: "transparent",
    dotFill: "#1B2A4A",
    rotate: 45,
  },
];

const SVG_TRANSITION = "fill 0.45s ease, stroke 0.45s ease";

export default function AnimatedLogo({ className = "" }: { className?: string }) {
  const [frame, setFrame] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const update = () => setAnimating(window.scrollY < 50);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!animating) {
      setFrame(0);
      return;
    }
    const cycle = window.setInterval(() => {
      setFrame((f) => (f + 1) % FRAMES.length);
    }, 2400);
    return () => window.clearInterval(cycle);
  }, [animating]);

  const f = FRAMES[frame];

  return (
    <span className={`inline-flex items-baseline gap-0 font-bold tracking-tight ${className}`}>
      <span>THE FL</span>
      <span className="inline-flex items-center" style={{ lineHeight: 0 }}>
        <svg
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{
            width: "0.85em",
            height: "0.85em",
            display: "inline-block",
            verticalAlign: "middle",
            marginBottom: "0.07em",
          }}
        >
          <g
            style={{
              transform: `rotate(${f.rotate}deg)`,
              transformOrigin: "18px 18px",
              transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <ellipse
                key={angle}
                cx="18"
                cy="9"
                rx="4.5"
                ry="7.5"
                fill={f.petalFill}
                stroke={f.petalStroke}
                strokeWidth="2"
                strokeLinejoin="round"
                transform={`rotate(${angle} 18 18)`}
                style={{ transition: SVG_TRANSITION }}
              />
            ))}
          </g>
          <circle
            cx="18"
            cy="18"
            r="8.5"
            fill={f.ringFill}
            stroke={f.ringStroke}
            strokeWidth="2.2"
            style={{ transition: SVG_TRANSITION }}
          />
          <circle
            cx="18"
            cy="18"
            r="4.5"
            fill={f.innerFill}
            stroke={f.innerStroke}
            strokeWidth="1.6"
            style={{ transition: SVG_TRANSITION }}
          />
          <circle cx="16.2" cy="17.2" r="1.1" fill={f.dotFill} style={{ transition: SVG_TRANSITION }} />
          <circle cx="19.8" cy="17.2" r="1.1" fill={f.dotFill} style={{ transition: SVG_TRANSITION }} />
          <circle cx="18" cy="20.2" r="1.1" fill={f.dotFill} style={{ transition: SVG_TRANSITION }} />
        </svg>
      </span>
      <span>WER CLUB</span>
    </span>
  );
}
