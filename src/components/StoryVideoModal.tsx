"use client";

import { useState, useEffect, useRef } from "react";

interface StoryVideoModalProps {
  videoSrc?: string; // drop her-story.mp4 into public/assets/videos/ and this auto-wires
}

export default function StoryVideoModal({
  videoSrc = "/assets/videos/her-story.mp4",
}: StoryVideoModalProps) {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Pause + reset video when modal closes
  useEffect(() => {
    if (!open && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ─── TRIGGER — integrated into hero as a film-reel pill ─── */}
      <button
        onClick={() => setOpen(true)}
        className="group flex items-center gap-3 cursor-pointer"
        aria-label="Watch Her Story"
      >
        {/* Circular play ring */}
        <span className="relative flex items-center justify-center w-12 h-12 rounded-full border border-cream/30 group-hover:border-red transition-colors duration-300">
          {/* Rotating dashed ring on hover */}
          <span className="absolute inset-0 rounded-full border border-dashed border-cream/10 group-hover:border-red/40 transition-colors duration-300 group-hover:animate-spin-slow" />
          {/* Play triangle */}
          <svg
            viewBox="0 0 12 14"
            className="w-3 h-3 translate-x-[1px] fill-cream group-hover:fill-red transition-colors duration-300"
          >
            <path d="M0 0L12 7L0 14V0Z" />
          </svg>
        </span>
        <span className="flex flex-col items-start">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-cream/40 group-hover:text-red/70 transition-colors duration-300">
            Courvoisier
          </span>
          <span className="text-cream/70 text-sm font-semibold group-hover:text-cream transition-colors duration-300">
            Her Story
          </span>
        </span>
      </button>

      {/* ─── MODAL OVERLAY ─── */}
      {open && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={(e) => {
            if (e.target === overlayRef.current) setOpen(false);
          }}
          style={{ animation: "fadeIn 0.3s ease" }}
        >
          {/* Dark backdrop with blur */}
          <div className="absolute inset-0 bg-navy-dark/95 backdrop-blur-sm" />

          {/* Modal content */}
          <div
            className="relative z-10 w-full max-w-4xl mx-4"
            style={{ animation: "scaleIn 0.35s cubic-bezier(0.34,1.56,0.64,1)" }}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-12 right-0 flex items-center gap-2 text-cream/60 hover:text-cream transition-colors duration-200 group"
              aria-label="Close"
            >
              <span className="font-mono text-xs uppercase tracking-widest">Close</span>
              <span className="w-6 h-6 flex items-center justify-center border border-cream/20 group-hover:border-cream/60 rounded-sm transition-colors duration-200 text-sm">
                ×
              </span>
            </button>

            {/* Label */}
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream/30 mb-4">
              Courvoisier — Her Story
            </p>

            {/* Video container */}
            <div className="relative bg-navy aspect-video rounded-sm overflow-hidden border border-cream/10">
              <video
                ref={videoRef}
                src={videoSrc}
                controls
                preload="metadata"
                className="w-full h-full object-cover"
                playsInline
                // NO autoplay — user hits play
              >
                Your browser does not support HTML5 video.
              </video>

              {/* Shown only if video file not yet added */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div className="text-center opacity-30">
                  <p className="font-mono text-xs uppercase tracking-widest text-cream mb-2">
                    Video placeholder
                  </p>
                  <p className="text-cream/50 text-xs">
                    Add her-story.mp4 → public/assets/videos/
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom label */}
            <div className="flex items-center gap-3 mt-4">
              <div className="w-8 h-px bg-red/50" />
              <span className="text-cream/30 font-mono text-[9px] uppercase tracking-widest">
                Culture-Forward. Results-Driven.
              </span>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </>
  );
}
