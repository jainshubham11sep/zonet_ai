"use client";

import { MailCheck, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { unlockAudit } from "@/lib/audit-api";
import type { UnlockResult } from "./audit-types";

interface EmailGateModalProps {
  auditId: string;
  open: boolean;
  onClose: () => void;
}

export function EmailGateModal({
  auditId,
  open,
  onClose,
}: EmailGateModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<UnlockResult | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      setResult(
        await unlockAudit(auditId, email.trim(), name.trim() || "there"),
      );
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-md rounded-2xl p-6 md:p-8 bg-white border border-[#E6E4DF] relative"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F7F6F3] transition-colors"
            >
              <X size={18} className="text-[#686B6B]" />
            </button>

            {result ? (
              <div className="flex flex-col items-center text-center gap-4 py-4">
                <span className="w-16 h-16 flex items-center justify-center rounded-full bg-green-50 border border-green-200">
                  <MailCheck size={28} className="text-green-600" />
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                  Check your inbox
                </h3>
                <p className="text-sm font-sans text-[#686B6B] leading-relaxed">
                  {result.message}
                </p>
                {result.devVerifyUrl && (
                  <Link
                    href={result.devVerifyUrl}
                    className="text-sm font-sans font-medium text-[#686BAB] hover:underline underline-offset-4 transition-all duration-300"
                  >
                    Mock mode: simulate opening the email link →
                  </Link>
                )}
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-2">
                  Unlock your full report
                </h3>
                <p className="text-sm font-sans text-[#686B6B] mb-6 leading-relaxed">
                  We’ll email you a secure link that opens every section of this
                  audit — free, no spam.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="h-12 px-4 rounded-xl border border-[#E6E4DF] bg-[#F7F6F3] font-sans text-sm text-[#1A1A1A] placeholder:text-[#686B6B] focus:outline-none focus:border-[#E8C547] transition-colors"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@business.com"
                    className="h-12 px-4 rounded-xl border border-[#E6E4DF] bg-[#F7F6F3] font-sans text-sm text-[#1A1A1A] placeholder:text-[#686B6B] focus:outline-none focus:border-[#E8C547] transition-colors"
                  />
                  {error && (
                    <p className="text-xs font-sans text-red-500">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="h-12 px-6 rounded-full bg-[#E8C547] text-[#1A1A1A] font-sans text-sm font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                  >
                    {submitting ? "Sending link…" : "Email me the full report"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
