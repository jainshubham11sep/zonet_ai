"use client";

import { motion } from "motion/react";
import { scoreBand, scoreLabel } from "./audit-types";

const bandColors = {
  green: "#16a34a",
  yellow: "#ca8a04",
  red: "#ef4444",
} as const;

interface ScoreGaugeProps {
  score: number | null;
  size?: number;
  showLabel?: boolean;
}

export function ScoreGauge({
  score,
  size = 120,
  showLabel = true,
}: ScoreGaugeProps) {
  const stroke = size >= 100 ? 10 : 7;
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;
  const band = score !== null ? scoreBand(score) : null;
  const color = band ? bandColors[band] : "#E6E4DF";
  const filled = score !== null ? (score / 100) * circumference : 0;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
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
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: circumference - filled }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-serif font-bold text-[#1A1A1A]"
            style={{ fontSize: size / 3.4 }}
          >
            {score !== null ? score : "—"}
          </span>
        </div>
      </div>
      {showLabel && score !== null && (
        <span
          className={`text-xs font-sans font-medium px-2 py-1 rounded-full border ${
            band === "green"
              ? "text-green-600 bg-green-50 border-green-200"
              : band === "yellow"
                ? "text-yellow-600 bg-yellow-50 border-yellow-200"
                : "text-red-500 bg-red-50 border-red-200"
          }`}
        >
          {scoreLabel(score)}
        </span>
      )}
    </div>
  );
}
