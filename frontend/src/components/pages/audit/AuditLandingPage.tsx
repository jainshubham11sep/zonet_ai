"use client";

import { ArrowRight, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SectionBadge } from "@/components/ui";
import { startAudit } from "@/lib/audit-api";
import { SECTION_KEYS, SECTION_META } from "./audit-types";

function normalizeUrl(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) return "";
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

export default function AuditLandingPage() {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const normalized = normalizeUrl(url);
    try {
      new URL(normalized);
    } catch {
      setError("Enter a valid website address, e.g. yourbusiness.com");
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const { auditId } = await startAudit(normalized);
      router.push(`/audit/${auditId}`);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not start the audit. Try again.",
      );
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-[#F7F6F3] min-h-screen font-sans">
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6"
        >
          <SectionBadge variant="dot">Free AI Website Audit</SectionBadge>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#1A1A1A] leading-tight">
            Is your website <span className="text-[#E8C547]">losing you</span>{" "}
            customers?
          </h1>
          <p className="text-base md:text-lg text-[#686B6B] leading-relaxed max-w-xl">
            Run a full audit of your speed, SEO, mobile experience, security and
            lead-generation setup — in minutes, free.
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-xl mt-2">
            <div className="flex flex-col sm:flex-row gap-2 p-2 rounded-2xl bg-white border border-[#E6E4DF]">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="yourbusiness.com"
                className="flex-1 h-12 px-4 rounded-xl font-sans text-sm text-[#1A1A1A] placeholder:text-[#686B6B] focus:outline-none bg-transparent"
              />
              <button
                type="submit"
                disabled={submitting}
                className="h-12 px-6 rounded-full bg-[#111111] text-white font-sans text-sm font-medium inline-flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
              >
                {submitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Starting…
                  </>
                ) : (
                  <>
                    Audit my website <ArrowRight size={16} />
                  </>
                )}
              </button>
            </div>
            {error && (
              <p className="text-sm text-red-500 mt-2 text-left">{error}</p>
            )}
          </form>
          <p className="text-xs text-[#686B6B]">
            No signup needed to start · Full report free via email
          </p>
        </motion.div>
      </section>

      <div className="border-t border-[#E6E4DF]"></div>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1A1A1A] text-center mb-12">
          What we check — 5 audits in one place
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SECTION_KEYS.map((key, i) => {
            const meta = SECTION_META[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl p-6 border border-[#E6E4DF] bg-white hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
              >
                <h3 className="font-serif text-base font-bold text-[#1A1A1A] mb-2">
                  {meta.title}
                </h3>
                <p className="text-xs text-[#686B6B] leading-relaxed">
                  {meta.tagline}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
