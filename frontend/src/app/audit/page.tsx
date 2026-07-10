import type { Metadata } from "next";
import AuditLandingPage from "@/components/pages/audit/AuditLandingPage";

export const metadata: Metadata = {
  title: "Free AI Website Audit | ZonetTech",
  description:
    "Audit your website speed, SEO, mobile experience, security and lead-generation setup in minutes — free.",
};

export default function AuditPage() {
  return <AuditLandingPage />;
}
