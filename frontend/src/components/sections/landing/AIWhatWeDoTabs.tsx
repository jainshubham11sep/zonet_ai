"use client";

import { motion } from "motion/react";
import { SectionBadge } from "@/components/ui";
import { Check, ArrowUpRight, Zap, TrendingUp, Bot } from "lucide-react";

const cards = [
  {
    number: "01",
    label: "BUILD",
    title: "Digital Products That Scale",
    desc: "Custom-built web and mobile products with scalable architecture and an AI-ready foundation from day one.",
    items: ["Custom Web & App Development", "Scalable Architecture", "AI-Ready Foundation"],
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
    dark: false,
  },
  {
    number: "02",
    label: "OPTIMIZE",
    title: "Improve Performance & UX",
    desc: "Speed up your product, improve search rankings, and turn more visitors into paying customers.",
    items: ["Speed & SEO Optimization", "Conversion & Analytics", "Continuous UX Improvements"],
    icon: <TrendingUp size={18} />,
    dark: true,
  },
  {
    number: "03",
    label: "AUTOMATE",
    title: "AI Automation That Works",
    desc: "Deploy intelligent agents and workflows that eliminate manual work and scale your operations.",
    items: ["AI Chatbots & Assistants", "Workflow Automation", "Smart Integrations"],
    icon: <Bot size={18} />,
    dark: false,
  },
];

const AIWhatWeDoTabs = () => {
  return (
    <section className="bg-[#F7F6F3] py-20 md:py-28 border-t border-[#E6E4DF]">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="mb-16 max-w-4xl">
          <SectionBadge className="mb-6">What We Do</SectionBadge>
          <h2 className="font-sora text-4xl md:text-5xl lg:text-[56px] font-bold text-[#1A1A1A] leading-[1.08] tracking-tight mb-6">
            We don&apos;t just build websites &amp; apps.{" "}
            <br className="hidden md:block" />
            We turn them into a{" "}
            <span className="text-[#E8C547]">growth-driven platform.</span>
          </h2>
          <p className="font-sans text-[#686B6B] text-base leading-relaxed max-w-xl">
            Zonettech combines creative design with expert AI-powered development services to build high-performance, scalable, and future-ready digital solutions.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group rounded-[28px] p-8 flex flex-col gap-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                card.dark
                  ? "bg-[#1A1A1A] border-[#1A1A1A] hover:shadow-black/20"
                  : "bg-white border-[#E6E4DF] hover:shadow-black/5"
              }`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${card.dark ? "bg-white/10 text-white" : "bg-[#F7F6F3] text-[#1A1A1A]"}`}>
                  {card.icon}
                </div>
                <span className={`font-sans text-[10px] font-black tracking-[0.18em] uppercase ${card.dark ? "text-white/40" : "text-[#686B6B]"}`}>
                  {card.number}. {card.label}
                </span>
              </div>

              {/* Title + Desc */}
              <div className="flex flex-col gap-3 flex-1">
                <h3 className={`font-sans text-[20px] font-bold leading-[1.25] ${card.dark ? "text-white" : "text-[#1A1A1A]"}`}>
                  {card.title}
                </h3>
                <p className={`font-sans text-sm leading-relaxed ${card.dark ? "text-white/50" : "text-[#686B6B]"}`}>
                  {card.desc}
                </p>
              </div>

              {/* Items */}
              <ul className="flex flex-col gap-3">
                {card.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${card.dark ? "bg-white/10" : "bg-[#F7F6F3]"}`}>
                      <Check size={11} className={card.dark ? "text-[#E8C547]" : "text-[#1A1A1A]"} strokeWidth={3} />
                    </span>
                    <span className={`font-sans text-[13px] ${card.dark ? "text-white/70" : "text-[#686B6B]"}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Arrow */}
              <div className="flex justify-end">
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 group-hover:scale-110 ${
                  card.dark
                    ? "border-white/20 text-white/40 group-hover:bg-[#E8C547] group-hover:border-[#E8C547] group-hover:text-[#1A1A1A]"
                    : "border-[#E6E4DF] text-[#686B6B] group-hover:bg-[#1A1A1A] group-hover:border-[#1A1A1A] group-hover:text-white"
                }`}>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── VS Comparison ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-[1fr_64px_1fr] rounded-[28px] overflow-hidden border border-[#E6E4DF]"
        >
          {/* Traditional */}
          <div className="bg-white px-8 py-8 border-b sm:border-b-0 sm:border-r border-[#E6E4DF]">
            <span className="font-sans text-[10px] font-black tracking-[0.15em] text-red-400 uppercase block mb-4">
              Traditional Agency
            </span>
            <p className="font-sans text-[40px] font-bold text-[#1A1A1A] leading-none">3 Months+</p>
            <p className="font-sans text-sm text-[#686B6B] mt-1.5 mb-6">Average time to launch</p>
            <ul className="flex flex-col gap-3">
              {["Slow, bloated development", "High communication overhead", "Manual & repetitive processes"].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <span className="text-red-400 text-[10px] font-black">✗</span>
                  </span>
                  <span className="font-sans text-[13px] text-[#686B6B]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* VS */}
          <div className="bg-[#F7F6F3] flex items-center justify-center py-4 sm:py-0 border-b sm:border-b-0 sm:border-r border-[#E6E4DF]">
            <span className="font-sans text-xs font-black text-[#686B6B] tracking-widest rotate-0 sm:rotate-0">VS</span>
          </div>

          {/* Zonettech */}
          <div className="bg-[#1A1A1A] px-8 py-8 flex gap-6 items-start">
            <div className="flex-1">
              <span className="font-sans text-[10px] font-black tracking-[0.15em] text-[#E8C547] uppercase block mb-4">
                Zonettech — AI-Powered
              </span>
              <p className="font-sans text-[40px] font-bold text-[#E8C547] leading-none">30 Days</p>
              <p className="font-sans text-sm text-white/40 mt-1.5 mb-6">Average time to launch</p>
              <ul className="flex flex-col gap-3">
                {["3× faster delivery", "40% lower cost", "AI-powered workflows"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Check size={9} className="text-[#E8C547]" strokeWidth={3} />
                    </span>
                    <span className="font-sans text-[13px] text-white/60">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-[#E8C547] flex flex-col items-center justify-center shrink-0 mt-1">
              <Zap size={20} className="text-[#1A1A1A]" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AIWhatWeDoTabs;
