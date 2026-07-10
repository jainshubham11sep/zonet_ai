"use client";

import {
  AlertTriangle,
  ArrowLeft,
  Loader2,
  MessageCircle,
  Search,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { getAudit, runSection } from "@/lib/audit-api";
import type { AuditState, SectionKey } from "./audit-types";
import { countByStatus, SECTION_META } from "./audit-types";
import { CheckItem } from "./CheckItem";
import { EmailGateModal } from "./EmailGateModal";
import { LockedOverlay } from "./LockedOverlay";
import { MetricBar } from "./MetricBar";
import { StatusDonut } from "./StatusDonut";

const sectionIcons = {
  performance: Zap,
  seo: Search,
  mobile: Smartphone,
  security: ShieldCheck,
  conversion: MessageCircle,
} as const;

interface SectionDetailPageProps {
  auditId: string;
  section: SectionKey;
}

export default function SectionDetailPage({
  auditId,
  section,
}: SectionDetailPageProps) {
  const [audit, setAudit] = useState<AuditState | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  const [gateOpen, setGateOpen] = useState(false);

  const meta = SECTION_META[section];
  const Icon = sectionIcons[section];

  useEffect(() => {
    let cancelled = false;
    getAudit(auditId)
      .then((state) => {
        if (cancelled) return;
        setAudit(state);
        if (state.sections[section].status === "idle") {
          setRunning(true);
          runSection(auditId, section)
            .then((next) => !cancelled && setAudit(next))
            .catch(
              (err) =>
                !cancelled &&
                setError(
                  err instanceof Error
                    ? err.message
                    : "Failed to run this section.",
                ),
            )
            .finally(() => !cancelled && setRunning(false));
        }
      })
      .catch(
        (err) =>
          !cancelled &&
          setError(
            err instanceof Error ? err.message : "Failed to load audit.",
          ),
      );
    return () => {
      cancelled = true;
    };
  }, [auditId, section]);

  const handleRetry = useCallback(() => {
    setError(null);
    setRunning(true);
    runSection(auditId, section)
      .then(setAudit)
      .catch((err) =>
        setError(
          err instanceof Error ? err.message : "Failed to run this section.",
        ),
      )
      .finally(() => setRunning(false));
  }, [auditId, section]);

  if (error) {
    return (
      <div className="bg-[#F7F6F3] min-h-screen font-sans flex items-center justify-center px-6">
        <div className="rounded-2xl p-8 border border-[#E6E4DF] bg-white max-w-md text-center flex flex-col gap-4 items-center">
          <AlertTriangle size={28} className="text-yellow-600" />
          <p className="text-sm text-[#686B6B]">{error}</p>
          <button
            type="button"
            onClick={handleRetry}
            className="h-11 px-5 rounded-full bg-[#111111] text-white font-sans text-sm font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (!audit || running) {
    return (
      <div className="bg-[#F7F6F3] min-h-screen font-sans flex flex-col items-center justify-center gap-3">
        <Loader2 size={24} className="text-[#E8C547] animate-spin" />
        <span className="text-sm text-[#686B6B]">
          {running ? `Auditing ${meta.title.toLowerCase()}…` : "Loading…"}
        </span>
      </div>
    );
  }

  const result = audit.sections[section];
  const counts = countByStatus(result.checks);
  const failedChecks = result.checks.filter((c) => c.status === "fail");
  const warnChecks = result.checks.filter((c) => c.status === "warn");
  const passedChecks = result.checks.filter((c) => c.status === "pass");

  return (
    <div className="bg-[#F7F6F3] min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-16 md:pb-24">
        <Link
          href={`/audit/${auditId}`}
          className="inline-flex items-center gap-1.5 text-sm font-sans font-medium text-[#686B6B] hover:text-[#1A1A1A] transition-colors mb-6"
        >
          <ArrowLeft size={14} /> Back to full audit
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl p-6 md:p-8 border border-[#E6E4DF] bg-white mb-6"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F7F6F3] shrink-0">
                <Icon size={22} className="text-[#1A1A1A]" />
              </span>
              <div>
                <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#1A1A1A]">
                  {meta.title}
                </h1>
                <p className="text-sm text-[#686B6B] mt-1">{meta.tagline}</p>
              </div>
            </div>
            <div className="md:ml-auto flex items-center gap-4">
              <StatusDonut counts={counts} size={88} showLegend />
              {result.score !== null && (
                <div className="text-center">
                  <div
                    className={`text-4xl font-serif font-bold ${
                      result.score >= 80
                        ? "text-green-600"
                        : result.score >= 50
                          ? "text-yellow-600"
                          : "text-red-500"
                    }`}
                  >
                    {result.score}
                  </div>
                  <div className="text-xs text-[#686B6B] uppercase tracking-wide">
                    score
                  </div>
                </div>
              )}
            </div>
          </div>

          {result.metrics.length > 0 && (
            <div className="mt-6 pt-6 border-t border-[#E6E4DF] grid grid-cols-1 md:grid-cols-2 gap-x-8">
              {result.metrics.map((m) => (
                <MetricBar key={m.id} metric={m} />
              ))}
            </div>
          )}
        </motion.div>

        {/* Grouped findings — worst first */}
        <div className="flex flex-col gap-6">
          {failedChecks.length > 0 && (
            <FindingsGroup
              title="Critical"
              count={failedChecks.length}
              checks={failedChecks}
            />
          )}
          {warnChecks.length > 0 && (
            <FindingsGroup
              title="Needs attention"
              count={warnChecks.length}
              checks={warnChecks}
            />
          )}
          {passedChecks.length > 0 && (
            <FindingsGroup
              title="Passing"
              count={passedChecks.length}
              checks={passedChecks}
            />
          )}

          {result.locked && result.hiddenCount > 0 && (
            <div className="rounded-2xl p-6 border border-[#E6E4DF] bg-white">
              <LockedOverlay
                hiddenCount={result.hiddenCount}
                onUnlock={() => setGateOpen(true)}
              />
            </div>
          )}
        </div>
      </div>

      <EmailGateModal
        auditId={auditId}
        open={gateOpen}
        onClose={() => setGateOpen(false)}
      />
    </div>
  );
}

function FindingsGroup({
  title,
  count,
  checks,
}: {
  title: string;
  count: number;
  checks: Parameters<typeof CheckItem>[0]["check"][];
}) {
  return (
    <div className="rounded-2xl p-6 border border-[#E6E4DF] bg-white">
      <h2 className="text-xs font-sans font-medium text-[#686B6B] uppercase tracking-wide mb-2">
        {title} <span className="text-[#1A1A1A]">({count})</span>
      </h2>
      {checks.map((c) => (
        <CheckItem key={c.id} check={c} />
      ))}
    </div>
  );
}
