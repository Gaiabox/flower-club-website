import type { Metadata } from "next";
import DigitalEmployeesClient from "./DigitalEmployeesClient";
import { buildMeta } from "@/lib/seo";

export const metadata: Metadata = buildMeta({
  title: "AI Employees for Business — Custom AI Automation | The Flower Club",
  description:
    "Custom AI-powered digital employees that handle lead follow-up, intake, scheduling, reporting, and admin. Deployed in the cloud, on local hardware, or hybrid. Built around how your business already works — Charlotte NC.",
  path: "/services/digital-employees",
});

export default function DigitalEmployeesPage() {
  return <DigitalEmployeesClient />;
}
