import type { Metadata } from "next";
import LocationServices from "@/components/LocationServices";
import { buildMeta } from "@/lib/seo";
export const metadata: Metadata = buildMeta({
  title: "Brand Identity & Website Design for Charlotte",
  description:
    "Brand identity, custom websites, and creative production for Charlotte businesses. The Flower Club is a Charlotte-based studio working nationwide.",
  path: "/services/charlotte",
});
export default function LocationPage() {
  return (
    <LocationServices
      city={"Charlotte"}
      intro={
        "For a new venture or an established business ready for a new direction, we help you explain what you offer and present it with care."
      }
    />
  );
}
