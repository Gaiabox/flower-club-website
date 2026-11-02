import type { Metadata } from "next";
import LocationServices from "@/components/LocationServices";
import { buildMeta } from "@/lib/seo";
export const metadata: Metadata = { ...buildMeta({
  title: "Brand Identity & Website Design for Los Angeles",
  description:
    "Brand identity, custom websites, and creative production for Los Angeles businesses. The Flower Club is a Charlotte-based studio working nationwide.",
  path: "/services/los-angeles",
}), robots: { index: false, follow: true } };
export default function LocationPage() {
  return (
    <LocationServices
      city={"Los Angeles"}
      intro={
        "For businesses and creative brands, we connect identity, websites, and production so the finished work feels like it belongs together."
      }
    />
  );
}
