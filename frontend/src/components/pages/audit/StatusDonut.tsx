"use client";

import { motion } from "motion/react";
import type { StatusCounts } from "./audit-types";

const STATUS_COLOR = {
  pass: "#16a34a",
  warn: "#ca8a04",
  fail: "#ef4444",
} as const;

const STATUS_LABEL = {
  pass: "Passed",
  warn: "Warnings",
  fail: "Failed",
} as const;

interface StatusDonutProps {
  counts: StatusCounts;
  size?: number;
  showLegend?: boolean;
}

/** Status breakdown donut — pass/warn/fail, using the reserved status palette (never categorical hues). */
export function StatusDonut({
  counts,
  size = 72,
  showLegend = false,
}: StatusDonutProps) {
  const total = counts.pass + counts.warn + counts.fail;
  const stroke = size >= 64 ? 9 : 6;
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;

  const segments = (["fail", "warn", "pass"] as const).map((key) => ({
    key,
    value: counts[key],
    color: STATUS_COLOR[key],
    label: STATUS_LABEL[key],
  }));

  let offsetAcc = 0;
  const arcs = segments
    .filter((s) => s.value > 0)
    .map((s) => {
      const fraction = total > 0 ? s.value / total : 0;
      const length = fraction * circumference;
      // 2px surface gap between adjacent segments
      const gap = total > 1 ? 2 : 0;
      const dash = Math.max(length - gap, 0);
      const arc = { ...s, dash, offset: -offsetAcc };
      offsetAcc += length;
      return arc;
    });

  return (
    <div className="flex items-center gap-3">
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className="-rotate-90"
          aria-hidden="true"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="#E6E4DF"
            strokeWidth={stroke}
          />
          {arcs.map((a) => (
            <motion.circle
              key={a.key}
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke={a.color}
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={`${a.dash} ${circumference}`}
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: a.offset }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          ))}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className="font-serif font-bold text-[#1A1A1A]"
            style={{ fontSize: size / 4 }}
          >
            {total}
          </span>
          <span className="text-[9px] font-sans text-[#686B6B] uppercase tracking-wide">
            checks
          </span>
        </div>
      </div>

      {showLegend && (
        <ul className="flex flex-col gap-1">
          {segments.map((s) => (
            <li
              key={s.key}
              className="flex items-center gap-1.5 text-xs font-sans text-[#686B6B]"
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: s.color }}
              />
              {s.label}{" "}
              <span className="font-medium text-[#1A1A1A]">{s.value}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
