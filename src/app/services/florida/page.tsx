import type { Metadata } from "next";
import LocationServices from "@/components/LocationServices";
import { FLORIDA_EVENTS } from "@/lib/locations";
import { buildMeta } from "@/lib/seo";
export const metadata: Metadata = buildMeta({
  title: "Brand Activations & Creative Work in Florida",
  description:
    "Brand activations and content produced in Tallahassee and Miami for Red Bull, Popeyes, Febreze, Rémy Martin, and Bacardi.",
  path: "/services/florida",
});
export default function LocationPage() {
  return (
    <LocationServices
      city={"Florida"}
      headline={"Brand activations and creative work in Florida."}
      intro={
        "From Tallahassee to Miami, we have produced activations and content for major brands in Florida."
      }
      events={FLORIDA_EVENTS}
    />
  );
}
