"use client";

import {
  ArrowRight,
  Loader2,
  MessageCircle,
  Search,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import type { SectionKey, SectionResult } from "./audit-types";
import { countByStatus, SECTION_META, topIssues } from "./audit-types";
import { StatusDonut } from "./StatusDonut";

const sectionIcons = {
  performance: Zap,
  seo: Search,
  mobile: Smartphone,
  security: ShieldCheck,
  conversion: MessageCircle,
} as const;

interface SectionCardProps {
  auditId: string;
  section: SectionResult;
  running: boolean;
  onRun: (key: SectionKey) => void;
}

/** Compact summary card — score, status donut, top 2 issues. Full detail lives on its own page. */
export function SectionCard({
  auditId,
  section,
  running,
  onRun,
}: SectionCardProps) {
  const meta = SECTION_META[section.key];
  const Icon = sectionIcons[section.key];
  const isIdle = section.status === "idle" && !running;
  const isComplete = section.status === "complete" && !running;

  const counts = isComplete ? countByStatus(section.checks) : null;
  const worst = isComplete ? topIssues(section.checks, 2) : [];

  return (
    <motion.div
      layout
      className="rounded-2xl p-6 border border-[#E6E4DF] bg-white hover:shadow-lg transition-all duration-200 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-start gap-2">
          <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#F7F6F3] shrink-0">
            <Icon size={15} className="text-[#1A1A1A]" />
          </span>
          <div>
            <h3 className="font-serif text-lg font-bold text-[#1A1A1A] leading-tight">
              {meta.title}
            </h3>
            <p className="text-xs font-sans text-[#686B6B] mt-1">
              {meta.tagline}
            </p>
          </div>
        </div>
        {isComplete && section.score !== null && (
          <span
            className={`text-2xl font-serif font-bold shrink-0 ${
              section.score >= 80
                ? "text-green-600"
                : section.score >= 50
                  ? "text-yellow-600"
                  : "text-red-500"
            }`}
          >
            {section.score}
          </span>
        )}
      </div>

      {/* Idle — click to run */}
      {isIdle && (
        <div className="flex flex-col gap-4 flex-1">
          <ul className="flex flex-col gap-2">
            {meta.includes.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-sans text-[#686B6B]"
              >
                <ArrowRight size={14} className="text-[#E8C547] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => onRun(section.key)}
            className="h-11 px-5 rounded-full border border-[#1A1A1A] text-[#1A1A1A] font-sans text-sm font-medium hover:bg-[#1A1A1A] hover:text-white transition-all duration-200 self-start mt-auto"
          >
            Run this audit{meta.heavy ? " (~30s)" : ""}
          </button>
        </div>
      )}

      {/* Running */}
      {running && (
        <div className="flex items-center gap-2 py-8 justify-center flex-1">
          <Loader2 size={20} className="text-[#E8C547] animate-spin" />
          <span className="text-sm font-sans text-[#686B6B]">
            Auditing {meta.title.toLowerCase()}…
          </span>
        </div>
      )}

      {/* Failed */}
      {section.status === "failed" && !running && (
        <div className="flex flex-col gap-2 py-4 flex-1">
          <p className="text-sm font-sans text-red-500">
            This section failed to run. The site may be blocking automated
            checks.
          </p>
          <button
            type="button"
            onClick={() => onRun(section.key)}
            className="text-sm font-sans font-medium text-[#1A1A1A] hover:underline underline-offset-4 transition-all duration-300 self-start"
          >
            Try again
          </button>
        </div>
      )}

      {/* Complete — compact summary */}
      {isComplete && counts && (
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#E6E4DF]">
            <StatusDonut counts={counts} size={64} />
            <ul className="flex flex-col gap-1 text-right">
              <li className="text-xs font-sans text-red-500">
                {counts.fail} failed
              </li>
              <li className="text-xs font-sans text-yellow-600">
                {counts.warn} warnings
              </li>
              <li className="text-xs font-sans text-green-600">
                {counts.pass} passed
              </li>
            </ul>
          </div>

          {worst.length > 0 ? (
            <ul className="flex flex-col gap-2">
              {worst.map((c) => (
                <li
                  key={c.id}
                  className="text-sm font-sans text-[#1A1A1A] leading-snug"
                >
                  <span
                    className={`inline-block w-1.5 h-1.5 rounded-full mr-2 ${
                      c.status === "fail" ? "bg-red-500" : "bg-yellow-600"
                    }`}
                  />
                  {c.label}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm font-sans text-green-600">
              No issues found — nicely done.
            </p>
          )}

          <Link
            href={`/audit/${auditId}/${section.key}`}
            className="mt-auto inline-flex items-center gap-1.5 text-sm font-sans font-medium text-[#1A1A1A] hover:underline underline-offset-4 transition-all duration-300"
          >
            View full report <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </motion.div>
  );
}
