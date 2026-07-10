"use client";

import { Lock } from "lucide-react";

interface LockedOverlayProps {
  hiddenCount: number;
  onUnlock: () => void;
}

/** Blurred placeholder rows + unlock CTA shown below the visible half of a section. */
export function LockedOverlay({ hiddenCount, onUnlock }: LockedOverlayProps) {
  const rows = Math.min(Math.max(hiddenCount, 2), 4);

  return (
    <div className="relative mt-2">
      <div
        className="select-none blur-[6px] pointer-events-none"
        aria-hidden="true"
      >
        {Array.from(
          { length: rows },
          (_, i) => `placeholder-${55 + i * 12}`,
        ).map((id, i) => (
          <div
            key={id}
            className="flex items-center gap-2 py-2 border-b border-[#E6E4DF] last:border-b-0"
          >
            <span className="w-4 h-4 rounded-full bg-red-200 shrink-0" />
            <span
              className="h-3 rounded bg-[#E6E4DF]"
              style={{ width: `${55 + i * 12}%` }}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-linear-to-b from-white/40 to-white/90">
        <button
          type="button"
          onClick={onUnlock}
          className="h-11 px-5 rounded-full bg-[#E8C547] text-[#1A1A1A] font-sans text-sm font-medium inline-flex items-center gap-2 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
        >
          <Lock size={16} />
          Unlock {hiddenCount} more finding{hiddenCount === 1 ? "" : "s"}
        </button>
        <span className="text-xs font-sans text-[#686B6B]">
          Free — sent to your email
        </span>
      </div>
    </div>
  );
}
