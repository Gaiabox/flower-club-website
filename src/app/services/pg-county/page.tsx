import type { Metadata } from "next";
import LocationServices from "@/components/LocationServices";
import { buildMeta } from "@/lib/seo";
export const metadata: Metadata = { ...buildMeta({
  title: "Brand Identity & Website Design for Prince George\u2019s County",
  description:
    "Brand identity, custom websites, and creative production for Prince George\u2019s County businesses. The Flower Club is a Charlotte-based studio working nationwide.",
  path: "/services/pg-county",
}), robots: { index: false, follow: true } };
export default function LocationPage() {
  return (
    <LocationServices
      city={"Prince George\u2019s County"}
      intro={
        "From a first launch to a new direction, we help independent businesses give their work a consistent and considered public presence."
      }
    />
  );
}
