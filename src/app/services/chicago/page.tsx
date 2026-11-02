import type { Metadata } from "next";
import LocationServices from "@/components/LocationServices";
import { buildMeta } from "@/lib/seo";
export const metadata: Metadata = { ...buildMeta({
  title: "Brand Identity & Website Design for Chicago",
  description:
    "Brand identity, custom websites, and creative production for Chicago businesses. The Flower Club is a Charlotte-based studio working nationwide.",
  path: "/services/chicago",
}), robots: { index: false, follow: true } };
export default function LocationPage() {
  return (
    <LocationServices
      city={"Chicago"}
      intro={
        "Give your customers a clear picture of what you do, with an identity and website designed around your business and its next chapter."
      }
    />
  );
}
