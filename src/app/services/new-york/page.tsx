import type { Metadata } from "next";
import LocationServices from "@/components/LocationServices";
import { buildMeta } from "@/lib/seo";
export const metadata: Metadata = buildMeta({
  title: "Brand Identity & Website Design for New York",
  description:
    "Brand identity, custom websites, and creative production for New York businesses. The Flower Club is a Charlotte-based studio working nationwide.",
  path: "/services/new-york",
});
export default function LocationPage() {
  return (
    <LocationServices
      city={"New York"}
      intro={
        "We help businesses and creative brands turn a clear point of view into an identity, website, and supporting content."
      }
    />
  );
}
