import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Powered Digital Employees | The Flower Club",
  description:
    "Custom AI-powered digital employees for follow-up, scheduling, intake, reporting, admin, and operational support. Built around your business. Deployed locally, cloud, or hybrid.",
  openGraph: {
    title: "AI-Powered Digital Employees | The Flower Club",
    description:
      "Custom AI support systems built around how your business actually runs. Follow-up, scheduling, intake, reporting, and more.",
    url: "https://theflowerclub.design/services/digital-employees",
  },
};

export default function DigitalEmployeesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
