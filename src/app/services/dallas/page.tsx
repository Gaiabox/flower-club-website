import type { Metadata } from "next";
import LocationServices from "@/components/LocationServices";
import { buildMeta } from "@/lib/seo";
export const metadata: Metadata = buildMeta({
  title: "Brand Identity & Website Design for Dallas",
  description:
    "Brand identity, custom websites, and creative production for Dallas businesses. The Flower Club is a Charlotte-based studio working nationwide.",
  path: "/services/dallas",
});
export default function LocationPage() {
  return (
    <LocationServices
      city={"Dallas"}
      intro={
        "Build a consistent presence across your identity, website, and marketing, with creative direction that connects the work."
      }
    />
  );
}
