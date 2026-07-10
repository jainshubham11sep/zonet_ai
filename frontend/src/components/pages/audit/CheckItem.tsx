"use client";

import {
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  HelpCircle,
  XCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { AuditCheck } from "./audit-types";

const statusStyles = {
  pass: { Icon: CheckCircle2, color: "text-green-600" },
  warn: { Icon: AlertTriangle, color: "text-yellow-600" },
  fail: { Icon: XCircle, color: "text-red-500" },
} as const;

export function CheckItem({ check }: { check: AuditCheck }) {
  const { Icon, color } = statusStyles[check.status];
  const [open, setOpen] = useState(false);

  return (
    <div className="py-2 border-b border-[#E6E4DF] last:border-b-0">
      <div className="flex items-start gap-2">
        <Icon size={18} className={`${color} shrink-0 mt-0.5`} />
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-2">
            <span className="flex items-center gap-1.5 text-sm font-sans text-[#1A1A1A]">
              {check.label}
              {check.explainer && (
                <button
                  type="button"
                  onClick={() => setOpen((v) => !v)}
                  aria-label={`Why this matters: ${check.label}`}
                  aria-expanded={open}
                  className="text-[#686B6B] hover:text-[#1A1A1A] transition-colors"
                >
                  <HelpCircle size={14} />
                </button>
              )}
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

          <AnimatePresence>
            {open && check.explainer && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="mt-2 rounded-xl bg-[#F7F6F3] border border-[#E6E4DF] p-3 flex flex-col gap-2">
                  <ExplainerRow label="What" text={check.explainer.what} />
                  <ExplainerRow
                    label="How it's measured"
                    text={check.explainer.how}
                  />
                  <ExplainerRow label="How to fix" text={check.explainer.fix} />
                  <div className="flex flex-wrap gap-3 pt-1">
                    {check.explainer.docs.map((d) => (
                      <a
                        key={d.url}
                        href={d.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-sans font-medium text-[#686BAB] hover:underline underline-offset-4 transition-all duration-300"
                      >
                        {d.label} <ExternalLink size={12} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function ExplainerRow({ label, text }: { label: string; text: string }) {
  return (
    <p className="text-xs font-sans text-[#686B6B] leading-relaxed">
      <span className="font-medium text-[#1A1A1A]">{label}: </span>
      {text}
    </p>
  );
}
