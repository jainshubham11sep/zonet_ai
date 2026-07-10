"use client";

import { motion } from "motion/react";
import type { AuditMetric } from "./audit-types";
import { scoreBand } from "./audit-types";

const barColors = {
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  red: "bg-red-500",
} as const;

export function MetricBar({ metric }: { metric: AuditMetric }) {
  const band = scoreBand(metric.score);

  return (
    <div className="py-2">
      <div className="flex items-baseline justify-between mb-1">
        <span className="text-xs font-sans font-medium text-[#1A1A1A]">
          {metric.label}
        </span>
        <span className="text-xs font-sans text-[#686B6B]">{metric.value}</span>
      </div>
      <div className="h-2 rounded-full bg-[#F7F6F3] border border-[#E6E4DF] overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${barColors[band]}`}
          initial={{ width: 0 }}
          animate={{ width: `${metric.score}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
