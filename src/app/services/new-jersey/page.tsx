import type { Metadata } from "next";
import LocationServices from "@/components/LocationServices";
import { buildMeta } from "@/lib/seo";
export const metadata: Metadata = { ...buildMeta({
  title: "Brand Identity & Website Design for New Jersey",
  description:
    "Brand identity, custom websites, and creative production for New Jersey businesses. The Flower Club is a Charlotte-based studio working nationwide.",
  path: "/services/new-jersey",
}), robots: { index: false, follow: true } };
export default function LocationPage() {
  return (
    <LocationServices
      city={"New Jersey"}
      intro={
        "Make your offer easier to understand and your next step easier to find, with a brand identity and website built around your customers."
      }
    />
  );
}
