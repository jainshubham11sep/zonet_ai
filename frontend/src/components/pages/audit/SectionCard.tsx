"use client";

import {
  ChevronRight,
  Loader2,
  MessageCircle,
  Search,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import type { SectionKey, SectionResult } from "./audit-types";
import { SECTION_META } from "./audit-types";
import { CheckItem } from "./CheckItem";
import { LockedOverlay } from "./LockedOverlay";
import { MetricBar } from "./MetricBar";
import { ScoreGauge } from "./ScoreGauge";

const sectionIcons = {
  performance: Zap,
  seo: Search,
  mobile: Smartphone,
  security: ShieldCheck,
  conversion: MessageCircle,
} as const;

interface SectionCardProps {
  section: SectionResult;
  running: boolean;
  onRun: (key: SectionKey) => void;
  onUnlock: () => void;
}

export function SectionCard({
  section,
  running,
  onRun,
  onUnlock,
}: SectionCardProps) {
  const meta = SECTION_META[section.key];
  const Icon = sectionIcons[section.key];
  const isIdle = section.status === "idle" && !running;

  return (
    <motion.div
      layout
      className="rounded-2xl p-6 border border-[#E6E4DF] bg-white transition-all duration-200"
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
        {section.status === "complete" && section.score !== null && (
          <ScoreGauge score={section.score} size={56} showLabel={false} />
        )}
      </div>

      {/* Idle — click to run */}
      {isIdle && (
        <div className="flex flex-col gap-4">
          <ul className="flex flex-col gap-2">
            {meta.includes.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-sans text-[#686B6B]"
              >
                <ChevronRight size={14} className="text-[#E8C547] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => onRun(section.key)}
            className="h-11 px-5 rounded-full border border-[#1A1A1A] text-[#1A1A1A] font-sans text-sm font-medium hover:bg-[#1A1A1A] hover:text-white transition-all duration-200 self-start"
          >
            Run this audit{meta.heavy ? " (~30s)" : ""}
          </button>
        </div>
      )}

      {/* Running */}
      {running && (
        <div className="flex items-center gap-2 py-8 justify-center">
          <Loader2 size={20} className="text-[#E8C547] animate-spin" />
          <span className="text-sm font-sans text-[#686B6B]">
            Auditing {meta.title.toLowerCase()}…
          </span>
        </div>
      )}

      {/* Failed */}
      {section.status === "failed" && !running && (
        <div className="flex flex-col gap-2 py-4">
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

      {/* Complete */}
      {section.status === "complete" && !running && (
        <div>
          {section.metrics.length > 0 && (
            <div className="mb-2">
              {section.metrics.map((m) => (
                <MetricBar key={m.id} metric={m} />
              ))}
            </div>
          )}
          {section.checks.map((c) => (
            <CheckItem key={c.id} check={c} />
          ))}
          {section.locked && section.hiddenCount > 0 && (
            <LockedOverlay
              hiddenCount={section.hiddenCount}
              onUnlock={onUnlock}
            />
          )}
        </div>
      )}
    </motion.div>
  );
}
