import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  SECTION_KEYS,
  type SectionKey,
} from "@/components/pages/audit/audit-types";
import SectionDetailPage from "@/components/pages/audit/SectionDetailPage";

export const metadata: Metadata = {
  title: "Section Report | ZonetTech Website Audit",
};

export default async function AuditSectionPage({
  params,
}: {
  params: Promise<{ id: string; section: string }>;
}) {
  const { id, section } = await params;
  if (!SECTION_KEYS.includes(section as SectionKey)) notFound();

  return <SectionDetailPage auditId={id} section={section as SectionKey} />;
}
