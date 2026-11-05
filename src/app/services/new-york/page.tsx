import type { Metadata } from "next";
import LocationServices from "@/components/LocationServices";
import { NEW_YORK_EVENTS } from "@/lib/locations";
import { buildMeta } from "@/lib/seo";
export const metadata: Metadata = buildMeta({
  title: "Brand Activations & Creative Work in New York",
  description:
    "Brand activations, event content, and creative work produced in New York for Maker's Mark, Courvoisier, Effen Vodka, and more.",
  path: "/services/new-york",
});
export default function LocationPage() {
  return (
    <LocationServices
      city={"New York"}
      headline={"Brand activations and creative work in New York."}
      intro={
        "We have produced brand activations, event content, and creative work in New York for spirits brands, artists, and cultural events. New York is where much of our event work has happened."
      }
      events={NEW_YORK_EVENTS}
    />
  );
}
