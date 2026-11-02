import type { Metadata } from "next";
import LocationServices from "@/components/LocationServices";
import { buildMeta } from "@/lib/seo";
export const metadata: Metadata = { ...buildMeta({
  title: "Brand Identity & Website Design for Detroit",
  description:
    "Brand identity, custom websites, and creative production for Detroit businesses. The Flower Club is a Charlotte-based studio working nationwide.",
  path: "/services/detroit",
}), robots: { index: false, follow: true } };
export default function LocationPage() {
  return (
    <LocationServices
      city={"Detroit"}
      intro={
        "Your work has a story. We help express it through a distinctive identity, considered content, and a website that is easy to understand."
      }
    />
  );
}
