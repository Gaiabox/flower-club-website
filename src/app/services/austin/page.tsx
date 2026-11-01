import type { Metadata } from "next";
import LocationServices from "@/components/LocationServices";
import { buildMeta } from "@/lib/seo";
export const metadata: Metadata = buildMeta({
  title: "Brand Identity & Website Design for Austin",
  description:
    "Brand identity, custom websites, and creative production for Austin businesses. The Flower Club is a Charlotte-based studio working nationwide.",
  path: "/services/austin",
});
export default function LocationPage() {
  return (
    <LocationServices
      city={"Austin"}
      intro={
        "Launching an idea or refining an established brand? We help bring your positioning, visual identity, and website into focus."
      }
    />
  );
}
