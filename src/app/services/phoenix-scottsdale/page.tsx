import type { Metadata } from "next";
import LocationServices from "@/components/LocationServices";
import { buildMeta } from "@/lib/seo";
export const metadata: Metadata = { ...buildMeta({
  title: "Brand Identity & Website Design for Phoenix & Scottsdale",
  description:
    "Brand identity, custom websites, and creative production for Phoenix & Scottsdale businesses. The Flower Club is a Charlotte-based studio working nationwide.",
  path: "/services/phoenix-scottsdale",
}), robots: { index: false, follow: true } };
export default function LocationPage() {
  return (
    <LocationServices
      city={"Phoenix & Scottsdale"}
      intro={
        "Present the experience your business offers through brand design, clear website copy, and a considered path to getting in touch."
      }
    />
  );
}
