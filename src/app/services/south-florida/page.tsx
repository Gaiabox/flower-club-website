import type { Metadata } from "next";
import LocationServices from "@/components/LocationServices";
import { buildMeta } from "@/lib/seo";
export const metadata: Metadata = { ...buildMeta({
  title: "Brand Identity & Website Design for South Florida",
  description:
    "Brand identity, custom websites, and creative production for South Florida businesses. The Flower Club is a Charlotte-based studio working nationwide.",
  path: "/services/south-florida",
}), robots: { index: false, follow: true } };
export default function LocationPage() {
  return (
    <LocationServices
      city={"South Florida"}
      intro={
        "From hospitality to service businesses, we help make your offer tangible through identity, websites, and supporting creative production."
      }
    />
  );
}
