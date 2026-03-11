"use client";

import Image from "next/image";

// Maps portfolio slug → real asset path (once downloaded from Drive)
export const imageMap: Record<string, string> = {
  // Fortune 500 + Cultural Icons
  "makers-mark-jcole": "/assets/images/makers-mark-jcole.jpg",
  "redbull-daysnatchers": "/assets/images/redbull-daysnatchers.jpg",
  "bacardi": "/assets/images/bacardi.jpg",
  "popeyes": "/assets/images/popeyes.jpg",
  "pg": "/assets/images/pg.jpg",
  "liquid-death-daysnatchers": "/assets/images/liquiddeath.jpg",
  "febreze": "/assets/images/febreze.jpg",
  "hbcu-homecoming": "/assets/images/popeyes-febreze-multiband.jpg",
  "courvoisier": "/assets/images/courvoisier.jpg",
  // Creative / Design Range
  "jase-candy-land": "/assets/images/jase-candy-land.png",
  "cash-junkies": "/assets/images/cash-junkies-new.png",
  "db4d": "/assets/images/db4d.png",
  "kannagruv": "/assets/images/kannagruv-v2.png",
  // Industry Range
  "smiths-law": "/assets/images/hbcu-famu.jpg",
  "bean-locks": "/assets/images/bean-locks.png",
  "kens-computer-solutions": "/assets/images/kens-computer-solutions.jpg",
  "pesowes": "/assets/images/pesowes.jpg",
  "makers-mark-handcrafted": "/assets/images/makers-mark-handcrafted.jpg",
};

export const videoMap: Record<string, string> = {
  "makers-mark-culturecon": "/assets/videos/makers-mark-culturecon.mp4",
  "remy-martin": "/assets/videos/remy-martin-art-basel.mp4",
  "bacardi": "/assets/videos/bacardi.mp4",

  "makers-mark-handcrafted": "/assets/videos/makers-mark-handcrafted.mp4",
  "animation-card": "/assets/videos/animation-card.mov",
  "3d-animation-card": "/assets/videos/3d-animation-card.mp4",
  "ai-animation-hero": "/assets/videos/ai-animation-hero.mp4",
  "skillosophy-effen-vodka": "/assets/videos/skillosophy-effen-vodka.mp4",
  "courvoisier-herstory": "/assets/videos/courvoisier-herstory.mp4",
};

export const posterMap: Record<string, string> = {
  "makers-mark-culturecon": "/assets/images/makers-mark-culturecon-thumb.jpg",
  "remy-martin": "/assets/images/remy-martin-thumb.jpg",
  "bacardi": "/assets/images/bacardi-thumb.jpg",
  "skillosophy-effen-vodka": "/assets/images/skillosophy-thumb.jpg",
  "courvoisier-herstory": "/assets/images/courvoisier-herstory-thumb.jpg",
  "animation-card": "/assets/images/animation-card-thumb.jpg",
  "3d-animation-card": "/assets/images/3d-animation-thumb.jpg",
  "ai-animation-hero": "/assets/images/ai-animation-hero-thumb.jpg",

};

// SEO-optimized alt text for every portfolio asset
const altTextMap: Record<string, string> = {
  // Fortune 500 + Cultural Icons
  "makers-mark-jcole":         "Courvoisier × HBO Latino brand activation produced by The Flower Club creative agency",
  "redbull-daysnatchers":      "Red Bull Daysnatchers brand activation and experiential event by The Flower Club",
  "bacardi":                   "Bacardi Trap Golf weekend brand activation video produced by The Flower Club",
  "popeyes":                   "Popeyes HBCU Homecoming brand activation campaign by The Flower Club creative agency",
  "pg":                        "Febreze P&G brand campaign content produced by The Flower Club",
  "liquid-death-daysnatchers": "Liquid Death Daysnatchers experiential brand activation by The Flower Club",
  "febreze":                   "Febreze brand activation and content creation by The Flower Club creative agency",
  "hbcu-homecoming":           "Popeyes and Febreze HBCU Homecoming multi-brand activation by The Flower Club",
  "courvoisier":               "Courvoisier brand activation and event creative by The Flower Club",
  // Videos
  "makers-mark-culturecon":    "Maker's Mark CultureCon brand activation video — experiential marketing by The Flower Club",
  "remy-martin":               "Rémy Martin × Meta Art Basel brand activation video produced by The Flower Club",
  "makers-mark-handcrafted":   "Maker's Mark Handcrafted campaign video by The Flower Club creative agency",
  "skillosophy-effen-vodka":   "Effen Vodka × Skillosophy brand activation video produced by The Flower Club",
  "courvoisier-herstory":      "Courvoisier #HerStory event video production by The Flower Club creative agency",
  // Creative / Design
  "jase-candy-land":           "JASE Candy Land 3D album artwork and brand identity by The Flower Club",
  "cash-junkies":              "Cash Junkies logo design and brand identity by The Flower Club creative agency",
  "db4d":                      "Db4D typography and brand identity design by The Flower Club",
  "kannagruv":                 "KannaGrüv cannabis brand identity and graphic design by The Flower Club",
  // Productions
  "smiths-law":                "Smith's Law firm branding and graphic design by The Flower Club creative agency",
  "bean-locks":                "Bean Locks brand identity and logo design by The Flower Club",
  "kens-computer-solutions":   "Ken's Computer Solutions brand identity by The Flower Club creative agency",
  "pesowes":                   "PESOWES multi-project brand design and content creation by The Flower Club",
  "makers-mark-rev-run":       "Maker's Mark Rev Run brand activation video by The Flower Club creative agency",
  // Home / Animation
  "animation-card":            "Motion design and animation production by The Flower Club creative agency",
  "3d-animation-card":         "3D animation and visual effects production by The Flower Club",
  "ai-animation-hero":         "AI animation and motion design for brands by The Flower Club creative agency",
};

interface PortfolioAssetProps {
  slug: string;
  name: string;
  category?: string;
  aspect?: "video" | "square" | "portrait";
  teaserSrc?: string;
  onVideoClick?: () => void;
  className?: string;
}

export default function PortfolioAsset({
  slug,
  name,
  category,
  aspect = "video",
  className = "",
  teaserSrc,
  onVideoClick,
}: PortfolioAssetProps) {
  const imageSrc = imageMap[slug];
  const videoSrc = videoMap[slug];

  const aspectClass = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
  }[aspect];

  // Has real video
  if (videoSrc) {
    const poster = posterMap[slug];
    return (
      <div
        className={`relative ${aspectClass} rounded-sm overflow-hidden bg-navy-dark ${className}${onVideoClick ? " cursor-pointer" : ""}`}
        onClick={onVideoClick}
      >
        <video
          src={teaserSrc || videoSrc}
          poster={poster}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          loop
          playsInline
          onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
          onMouseLeave={(e) => {
            const v = e.currentTarget as HTMLVideoElement;
            v.pause();
            v.currentTime = 0;
          }}
        />
        {/* Play indicator — visible at rest, fades on hover */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
          <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" className="text-cream">
              <path d="M1 1L11 7L1 13V1Z" fill="currentColor"/>
            </svg>
            <span className="text-cream text-[10px] font-mono uppercase tracking-widest">Play</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    );
  }

  // Has real image
  if (imageSrc) {
    return (
      <div className={`relative ${aspectClass} rounded-sm overflow-hidden bg-navy-dark ${className}`}>
        <Image
          src={imageSrc}
          alt={altTextMap[slug] || `${name} — brand work by The Flower Club creative agency`}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    );
  }

  // Fallback placeholder (Fortune 500 work — awaiting assets)
  return (
    <div className={`placeholder-asset ${aspectClass} group rounded-sm ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy opacity-90" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250,247,242,1) 1px, transparent 1px), linear-gradient(90deg, rgba(250,247,242,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10 text-center p-6">
        <h3 className="text-cream font-bold text-display-sm leading-tight uppercase">
          {name}
        </h3>
        {category && <p className="label-light mt-3">{category}</p>}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
}
