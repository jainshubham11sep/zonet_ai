"use client";

import {
  AlertTriangle,
  BadgeCheck,
  Globe,
  Loader2,
  LockOpen,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { getAudit, runSection, verifyAudit } from "@/lib/audit-api";
import type { AuditState, SectionKey } from "./audit-types";
import { SECTION_KEYS } from "./audit-types";
import { CheckItem } from "./CheckItem";
import { EmailGateModal } from "./EmailGateModal";
import { ScoreGauge } from "./ScoreGauge";
import { SectionCard } from "./SectionCard";

interface AuditDashboardPageProps {
  auditId: string;
  token?: string;
}

export default function AuditDashboardPage({
  auditId,
  token,
}: AuditDashboardPageProps) {
  const [audit, setAudit] = useState<AuditState | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [runningSections, setRunningSections] = useState<Set<SectionKey>>(
    new Set(),
  );
  const [gateOpen, setGateOpen] = useState(false);
  const [justUnlocked, setJustUnlocked] = useState(false);
  const verifiedRef = useRef(false);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        if (token && !verifiedRef.current) {
          verifiedRef.current = true;
          const state = await verifyAudit(auditId, token);
          if (!cancelled) {
            setAudit(state);
            setJustUnlocked(true);
          }
        } else {
          const state = await getAudit(auditId);
          if (!cancelled) setAudit(state);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Failed to load audit.",
          );
        }
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [auditId, token]);

  const handleRun = useCallback(
    async (key: SectionKey) => {
      setRunningSections((prev) => new Set(prev).add(key));
      try {
        const state = await runSection(auditId, key);
        setAudit(state);
      } catch {
        setAudit((prev) =>
          prev
            ? {
                ...prev,
                sections: {
                  ...prev.sections,
                  [key]: { ...prev.sections[key], status: "failed" as const },
                },
              }
            : prev,
        );
      } finally {
        setRunningSections((prev) => {
          const next = new Set(prev);
          next.delete(key);
          return next;
        });
      }
    },
    [auditId],
  );

  if (error) {
    return (
      <div className="bg-[#F7F6F3] min-h-screen font-sans flex items-center justify-center px-6">
        <div className="rounded-2xl p-8 border border-[#E6E4DF] bg-white max-w-md text-center flex flex-col gap-4 items-center">
          <AlertTriangle size={28} className="text-yellow-600" />
          <p className="text-sm text-[#686B6B]">{error}</p>
          <Link
            href="/audit"
            className="h-11 px-5 rounded-full bg-[#111111] text-white font-sans text-sm font-medium inline-flex items-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Start a new audit
          </Link>
        </div>
      </div>
    );
  }

  if (!audit) {
    return (
      <div className="bg-[#F7F6F3] min-h-screen font-sans flex items-center justify-center gap-2">
        <Loader2 size={20} className="text-[#E8C547] animate-spin" />
        <span className="text-sm text-[#686B6B]">Loading your audit…</span>
      </div>
    );
  }

  const quickIssues = audit.quick.filter((c) => c.status !== "pass");
  const anySectionRun = SECTION_KEYS.some(
    (k) => audit.sections[k].status === "complete",
  );

  return (
    <div className="bg-[#F7F6F3] min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 md:pb-24">
        {/* Unlocked banner */}
        {audit.unlocked && justUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 rounded-2xl p-4 border border-green-200 bg-green-50 flex items-center gap-2"
          >
            <LockOpen size={18} className="text-green-600 shrink-0" />
            <p className="text-sm text-green-600 font-medium">
              Email verified — your full report is unlocked. Every section now
              shows all findings.
            </p>
          </motion.div>
        )}

        {/* Header card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl p-6 md:p-8 border border-[#E6E4DF] bg-white mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <ScoreGauge score={audit.overallScore} size={120} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 text-[#686B6B] mb-2">
                <Globe size={15} className="shrink-0" />
                <span className="text-sm truncate">{audit.url}</span>
                {audit.unlocked && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 border border-green-200 rounded-full px-2 py-0.5">
                    <BadgeCheck size={12} /> Full report
                  </span>
                )}
              </div>
              <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-2">
                {audit.overallScore === null
                  ? "Run a section below to start scoring"
                  : `We found ${audit.issueCount} issue${audit.issueCount === 1 ? "" : "s"} on your site`}
              </h1>
              <p className="text-sm text-[#686B6B] leading-relaxed">
                {anySectionRun
                  ? "Your overall score updates as you run each section."
                  : "Each section runs its own audit — click the ones you care about. Heavy checks only run when you ask."}
              </p>
            </div>
          </div>

          {/* Quick scan strip */}
          {audit.quick.length > 0 && (
            <div className="mt-6 pt-6 border-t border-[#E6E4DF]">
              <p className="text-xs font-medium text-[#686B6B] uppercase tracking-wide mb-2">
                Quick scan{" "}
                {quickIssues.length > 0 &&
                  `— ${quickIssues.length} issue${quickIssues.length === 1 ? "" : "s"} already found`}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                {audit.quick.map((c) => (
                  <CheckItem key={c.id} check={c} />
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Section grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {SECTION_KEYS.map((key) => (
            <SectionCard
              key={key}
              auditId={auditId}
              section={audit.sections[key]}
              running={runningSections.has(key)}
              onRun={handleRun}
            />
          ))}
        </div>

        {!audit.unlocked && anySectionRun && (
          <button
            type="button"
            onClick={() => setGateOpen(true)}
            className="mt-8 h-12 px-6 rounded-full bg-[#E8C547] text-[#1A1A1A] font-sans text-sm font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 mx-auto flex"
          >
            Unlock full report for every section
          </button>
        )}
      </div>

      <EmailGateModal
        auditId={auditId}
        open={gateOpen}
        onClose={() => setGateOpen(false)}
      />
    </div>
  );
}
