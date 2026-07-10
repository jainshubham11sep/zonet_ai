import type { Metadata } from "next";
import AuditDashboardPage from "@/components/pages/audit/AuditDashboardPage";

export const metadata: Metadata = {
  title: "Your Website Audit | ZonetTech",
};

export default async function AuditReportPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ token?: string }>;
}) {
  const { id } = await params;
  const { token } = await searchParams;
  return <AuditDashboardPage auditId={id} token={token} />;
}
