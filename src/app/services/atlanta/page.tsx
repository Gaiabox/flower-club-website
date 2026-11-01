import type { Metadata } from "next";
import LocationServices from "@/components/LocationServices";
import { buildMeta } from "@/lib/seo";
export const metadata: Metadata = buildMeta({
  title: "Brand Identity & Website Design for Atlanta",
  description:
    "Brand identity, custom websites, and creative production for Atlanta businesses. The Flower Club is a Charlotte-based studio working nationwide.",
  path: "/services/atlanta",
});
export default function LocationPage() {
  return (
    <LocationServices
      city={"Atlanta"}
      intro={
        "From independent businesses to creative brands, we help turn a distinct point of view into a visual identity and a website that makes the offer clear."
      }
    />
  );
}
