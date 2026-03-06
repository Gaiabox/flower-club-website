"use client";

import { useEffect, useRef } from "react";

interface LightboxProps {
  src: string;
  alt: string;
  isVideo?: boolean;
  onClose: () => void;
}

export default function Lightbox({ src, alt, isVideo, onClose }: LightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ animation: "lbFadeIn 0.25s ease" }}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy-dark/97 backdrop-blur-sm" />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 flex items-center gap-2 text-cream/50 hover:text-cream transition-colors duration-200 group"
        aria-label="Close"
      >
        <span className="font-mono text-xs uppercase tracking-widest">Close</span>
        <span className="w-8 h-8 flex items-center justify-center border border-cream/20 group-hover:border-cream/60 rounded-sm text-lg transition-colors duration-200">×</span>
      </button>

      {/* Content */}
      <div
        className="relative z-10 max-w-6xl max-h-[90vh] w-full mx-6"
        style={{ animation: "lbScaleIn 0.3s cubic-bezier(0.34,1.2,0.64,1)" }}
      >
        {isVideo ? (
          <video
            ref={videoRef}
            src={src}
            controls
            autoPlay
            className="w-full max-h-[85vh] object-contain rounded-sm"
            playsInline
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            className="w-full max-h-[85vh] object-contain rounded-sm block"
          />
        )}

        {/* Label */}
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/25 mt-4 text-center">
          {alt}
        </p>
      </div>


    </div>
  );
}
