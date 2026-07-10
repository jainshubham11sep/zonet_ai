"use client";

import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import type { AuditCheck } from "./audit-types";

const statusStyles = {
  pass: { Icon: CheckCircle2, color: "text-green-600" },
  warn: { Icon: AlertTriangle, color: "text-yellow-600" },
  fail: { Icon: XCircle, color: "text-red-500" },
} as const;

export function CheckItem({ check }: { check: AuditCheck }) {
  const { Icon, color } = statusStyles[check.status];

  return (
    <div className="flex items-start gap-2 py-2 border-b border-[#E6E4DF] last:border-b-0">
      <Icon size={18} className={`${color} shrink-0 mt-0.5`} />
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-sm font-sans text-[#1A1A1A]">
            {check.label}
          </span>
          {check.value && (
            <span className="text-xs font-sans text-[#686B6B] shrink-0">
              {check.value}
            </span>
          )}
        </div>
        {check.impact && check.status !== "pass" && (
          <p className="text-xs font-sans text-[#686B6B] mt-1 leading-relaxed">
            {check.impact}
          </p>
        )}
      </div>
    </div>
  );
}
