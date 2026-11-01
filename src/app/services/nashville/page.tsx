import type { Metadata } from "next";
import LocationServices from "@/components/LocationServices";
import { buildMeta } from "@/lib/seo";
export const metadata: Metadata = buildMeta({
  title: "Brand Identity & Website Design for Nashville",
  description:
    "Brand identity, custom websites, and creative production for Nashville businesses. The Flower Club is a Charlotte-based studio working nationwide.",
  path: "/services/nashville",
});
export default function LocationPage() {
  return (
    <LocationServices
      city={"Nashville"}
      intro={
        "Bring the personality of your business into its visual identity, website, and content, with a clear path from first look to inquiry."
      }
    />
  );
}
