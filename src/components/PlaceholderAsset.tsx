"use client";

interface PlaceholderAssetProps {
  name: string;
  category?: string;
  aspect?: "video" | "square" | "portrait";
  className?: string;
}

export default function PlaceholderAsset({
  name,
  category,
  aspect = "video",
  className = "",
}: PlaceholderAssetProps) {
  const aspectClass = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
  }[aspect];

  return (
    <div
      className={`placeholder-asset ${aspectClass} group rounded-sm ${className}`}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy opacity-90" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250,247,242,1) 1px, transparent 1px), linear-gradient(90deg, rgba(250,247,242,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center p-6">
        <h3 className="text-cream font-bold text-display-sm leading-tight uppercase">
          {name}
        </h3>
        {category && (
          <p className="label-light mt-3">{category}</p>
        )}
      </div>

      {/* Red accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
}
