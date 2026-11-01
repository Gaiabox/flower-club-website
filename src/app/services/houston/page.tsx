import type { Metadata } from "next";
import LocationServices from "@/components/LocationServices";
import { buildMeta } from "@/lib/seo";
export const metadata: Metadata = buildMeta({
  title: "Brand Identity & Website Design for Houston",
  description:
    "Brand identity, custom websites, and creative production for Houston businesses. The Flower Club is a Charlotte-based studio working nationwide.",
  path: "/services/houston",
});
export default function LocationPage() {
  return (
    <LocationServices
      city={"Houston"}
      intro={
        "We help businesses present their services clearly, from the first impression of a logo to the details a customer needs before making an inquiry."
      }
    />
  );
}
