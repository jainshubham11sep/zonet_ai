'use client';

import { motion } from 'motion/react';
import {
  Globe, Code2, Layers, Server, Database,
  Rocket, Zap, BarChart3, Layout,
} from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/sections/landing/ContactForm';

const techStack = [
  { name: 'NEXT.JS', Icon: Globe },
  { name: 'TYPESCRIPT', Icon: Code2 },
  { name: 'TAILWIND CSS', Icon: Layers },
  { name: 'NODE.JS', Icon: Server },
  { name: 'POSTGRESQL', Icon: Database },
  { name: 'VERCEL', Icon: Rocket },
];

const features = [
  {
    title: 'Next.js 15+ Core',
    desc: 'Leveraging the latest App Router, Server Components, and Streaming SSR for unparalleled performance.',
    Icon: Zap,
  },
  {
    title: 'Tailwind Design Systems',
    desc: 'Custom-built, scalable CSS architectures that ensure visual consistency across thousands of pages.',
    Icon: Layout,
  },
  {
    title: 'SEO Dominance',
    desc: 'Automated schema markup, lightning-fast Core Web Vitals, and structural optimization for organic growth.',
    Icon: BarChart3,
  },
  {
    title: 'Headless Scalability',
    desc: 'Decoupled architectures using Sanity, Contentful, or Strapi for content-heavy enterprise platforms.',
    Icon: Database,
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Architecture Planning',
    desc: 'We design the system schema, database models, and API structures before writing a single line of code.',
  },
  {
    num: '02',
    title: 'Agile Development',
    desc: 'Bi-weekly sprints with clear milestones and live preview environments for your feedback.',
  },
  {
    num: '03',
    title: 'Vitals Optimization',
    desc: 'Rigorous performance auditing to ensure 95+ scores on all Google Lighthouse metrics.',
  },
];

const webProjects = [
  {
    tag: 'FINTECH',
    name: 'Hyyzo',
    desc: "India's Highest Paying Rewards",
    stats: [
      { value: '2M+', label: 'USERS', star: false },
      { value: '100K+', label: 'STORES', star: false },
      { value: '4.6', label: 'RATING', star: true },
    ],
    href: '/case-studies/hyyzo',
    variant: 'fintech' as const,
  },
  {
    tag: 'GAMING',
    name: 'Puno Games',
    desc: 'High-Performance Gaming Portal',
    stats: [
      { value: '500K+', label: 'PLAYERS', star: false },
      { value: '99.9%', label: 'UPTIME', star: false },
      { value: '4.7', label: 'RATING', star: true },
    ],
    href: '/case-studies/puno-games',
    variant: 'gaming' as const,
  },
];

function DashboardVisual() {
  return (
    <div className="relative w-full pt-6 pb-8 px-4">
      {/* Ambient glow */}
      <div className="absolute inset-12 bg-[#E8C547]/[0.07] rounded-full blur-3xl pointer-events-none" />

      {/* Main dashboard card */}
      <div className="relative w-full bg-[#1A1C22] rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.28)] border border-white/[0.07]">

        {/* Browser chrome bar */}
        <div className="flex items-center gap-3 px-4 py-3 bg-[#12141A] border-b border-white/[0.05]">
          <div className="flex gap-1.5 shrink-0">
            <span className="w-3 h-3 rounded-full bg-[#FF6058]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28CA41]" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white/[0.05] rounded-md px-3 py-1 text-[9px] text-white/25 flex items-center gap-1.5 max-w-[180px] w-full justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22D3A0] shrink-0" />
              app.zonet.ai/dashboard
            </div>
          </div>
          <div className="shrink-0">
            <span className="text-[9px] font-semibold text-[#E8C547] bg-[#E8C547]/[0.1] px-2.5 py-1 rounded-md">
              Overview
            </span>
          </div>
        </div>

        {/* Dashboard body */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-16 bg-[#14161C] border-r border-white/[0.04] p-2 flex flex-col gap-0.5 shrink-0">
            {['Dashboard', 'Analytics', 'Products', 'Orders', 'Create', 'Settings'].map((item, i) => (
              <div
                key={item}
                className={`text-[8px] px-1.5 py-1.5 rounded-md leading-none ${
                  i === 0 ? 'bg-[#E8C547]/[0.12] text-[#E8C547] font-semibold' : 'text-white/[0.22]'
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 p-3 flex flex-col gap-2.5 min-w-0">
            {/* KPI cards */}
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { label: 'Total Users', value: '42,430', change: '+13.2%' },
                { label: 'Revenue', value: '$24.8K', change: '+12.4%' },
                { label: 'Conversion', value: '8.62%', change: '+6.1%' },
              ].map((s) => (
                <div key={s.label} className="bg-white/[0.04] rounded-lg p-2 border border-white/[0.03]">
                  <div className="text-[7.5px] text-white/35 mb-0.5 truncate">{s.label}</div>
                  <div className="text-[12px] font-bold text-white leading-none">{s.value}</div>
                  <div className="text-[7.5px] text-[#22D3A0] mt-0.5">{s.change}</div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="bg-white/[0.03] rounded-lg p-2.5 border border-white/[0.03]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[8px] text-white/35">Performance Trend</span>
                <span className="text-[7.5px] text-[#22D3A0] bg-[#22D3A0]/[0.1] px-1.5 py-0.5 rounded-full">
                  ▲ 18.2%
                </span>
              </div>
              <svg viewBox="0 0 240 48" fill="none" className="w-full h-10">
                <defs>
                  <linearGradient id="perfGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#818CF8" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 40 C20 36 40 30 60 26 C80 22 100 32 120 22 C140 12 160 18 180 13 C200 8 220 14 240 9"
                  stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeLinecap="round"
                />
                <path
                  d="M0 40 C20 36 40 30 60 26 C80 22 100 32 120 22 C140 12 160 18 180 13 C200 8 220 14 240 9 L240 48 L0 48Z"
                  fill="url(#perfGrad)"
                />
              </svg>
            </div>

            {/* Bottom row */}
            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-white/[0.03] rounded-lg p-2 border border-white/[0.03]">
                <div className="text-[7.5px] text-white/25 uppercase tracking-wide font-semibold mb-1.5">
                  Top Products
                </div>
                {[
                  { color: '#E8C547', name: 'Product A', val: '$48k+' },
                  { color: '#3B82F6', name: 'Product B', val: '$6.2k' },
                  { color: '#10B981', name: 'Product C', val: '$9.4k' },
                ].map((p) => (
                  <div key={p.name} className="flex items-center gap-1.5 mb-1 last:mb-0">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: p.color }} />
                    <span className="text-[8px] text-white/45 flex-1 truncate">{p.name}</span>
                    <span className="text-[8px] text-white/75 font-semibold">{p.val}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white/[0.03] rounded-lg p-2 border border-white/[0.03]">
                <div className="text-[7.5px] text-white/25 uppercase tracking-wide font-semibold mb-1.5">
                  Recent Orders
                </div>
                {[
                  { num: '#1100', val: '$125.00' },
                  { num: '#1101', val: '$205.00' },
                  { num: '#1102', val: '$93.00' },
                ].map((o) => (
                  <div key={o.num} className="flex items-center justify-between mb-1 last:mb-0">
                    <span className="text-[8px] text-white/45">{o.num}</span>
                    <span className="text-[8px] text-white/75 font-semibold">{o.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge — Performance (top-left) */}
      <div className="absolute top-2 left-0 bg-white rounded-xl px-3 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.1)] border border-[#E6E4DF] z-10 min-w-[108px]">
        <div className="text-[8px] uppercase tracking-wide text-[#999] mb-0.5">Performance</div>
        <div className="text-[13px] font-bold text-[#1A1A1A] leading-tight">Optimized</div>
        <div className="text-[9px] text-[#686B6B]">90+ Score</div>
      </div>

      {/* Floating badge — Security (top-right) */}
      <div className="absolute top-2 right-0 bg-white rounded-xl px-3 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.1)] border border-[#E6E4DF] z-10 min-w-[108px]">
        <div className="text-[8px] uppercase tracking-wide text-[#999] mb-0.5">Security</div>
        <div className="text-[13px] font-bold text-[#1A1A1A] leading-tight">Enterprise</div>
        <div className="text-[9px] text-[#686B6B]">Grade</div>
      </div>

      {/* Floating badge — Core Web Vitals (bottom-left) */}
      <div className="absolute bottom-2 left-0 bg-white rounded-xl px-3 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.1)] border border-[#E6E4DF] z-10 min-w-[128px]">
        <div className="text-[8px] uppercase tracking-wide text-[#999] mb-0.5">Core Web Vitals</div>
        <div className="text-[13px] font-bold text-green-500 leading-tight">Excellent</div>
        <div className="text-[9px] text-[#686B6B]">All Metrics Passed</div>
      </div>

      {/* Floating badge — Uptime (bottom-right) */}
      <div className="absolute bottom-2 right-0 bg-white rounded-xl px-3 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.1)] border border-[#E6E4DF] z-10 min-w-[108px] text-center">
        <div className="text-[8px] uppercase tracking-wide text-[#999] mb-0.5">Uptime</div>
        <div className="text-xl font-bold text-[#1A1A1A] leading-tight">99.99%</div>
        <div className="text-[9px] text-[#686B6B]">Guaranteed</div>
      </div>
    </div>
  );
}

export default function WebEngineering() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-screen pb-16 pt-12" style={{ fontFamily: "var(--font-sora), 'Inter', sans-serif" }}>

      {/* ── HERO ────────────────────────────────── */}
      <section className="pt-16 pb-12 md:pt-24 overflow-hidden">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full max-w-[480px]"
            >
              <span className="inline-block text-[10px] font-semibold tracking-[0.12em] uppercase text-[#E8C547] border border-[#E8C547] rounded-full px-3 py-1 mb-4">
                Core Service
              </span>

              <h1 className="font-sora! text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-bold leading-[1.08] text-[#1A1A1A] mb-4">
                Custom Web<br />
                <em className="text-[#E8C547] italic">Engineering</em>
              </h1>

              <p className="text-sm sm:text-base md:text-[15px] leading-[1.75] text-[#686B6B] mb-8 max-w-[420px]">
                We don&apos;t just build websites; we engineer high-performance digital experiences
                designed for speed, security, and conversion.
              </p>

              <div className="flex items-center gap-4 mb-8 sm:mb-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-11 px-6 bg-[#E8C547] text-[#1A1A1A] font-semibold text-sm rounded-full shadow-[0_4px_14px_rgba(232,197,71,0.35)] hover:bg-[#d4b33c] hover:shadow-[0_6px_20px_rgba(232,197,71,0.45)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  Start a Project →
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 h-11 px-2 text-[#1A1A1A] font-semibold text-sm hover:text-[#E8C547] transition-colors duration-200"
                >
                  View Our Work →
                </Link>
              </div>
            </motion.div>

            {/* Dashboard Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center w-full min-w-0"
            >
              <div className="w-full max-w-[560px]">
                <DashboardVisual />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TECH BAR ────────────────────────────── */}
      <section className="border-y border-[#E6E4DF] py-4 sm:py-6 bg-white rounded-2xl">
        <div className="w-full px-4 sm:px-6">
          <div className="flex items-center justify-center sm:justify-between gap-4 sm:gap-6 lg:gap-8 flex-wrap">
            {techStack.map(({ name, Icon }) => (
              <div key={name} className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-[0.1em] text-[#686B6B] whitespace-nowrap">
                <Icon size={16} className="opacity-60 sm:w-[18px] sm:h-[18px]" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL-STACK CAPABILITIES ─────────────── */}
      <section className="py-12 sm:py-16 lg:py-24 text-center">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sora! text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1A1A1A] mb-4">
            Full-Stack <em className="text-[#E8C547] italic">Capabilities</em>
          </h2>
          <p className="text-sm sm:text-base md:text-[15px] text-[#686B6B] leading-[1.7] max-w-[520px] mx-auto mb-12 sm:mb-16">
            Our engineering team specializes in the modern web ecosystem, delivering applications
            that are as robust as they are beautiful.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E6E4DF] border border-[#E6E4DF] rounded-xl sm:rounded-2xl overflow-hidden">
            {features.map(({ title, desc, Icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 sm:p-8 lg:p-12 text-left flex flex-col sm:flex-row gap-4 sm:gap-6 items-start hover:bg-[#FAFAF8] transition-colors duration-200"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#FFF3DC] flex items-center justify-center shrink-0">
                  <Icon size={18} className="sm:w-[22px] sm:h-[22px] text-[#E8C547]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#1A1A1A] mb-2">{title}</h3>
                  <p className="text-xs sm:text-sm leading-[1.65] text-[#686B6B]">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE ENGINEER SUCCESS ─────────────── */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#F2EFE8]">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Steps */}
            <div>
              <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#E8C547] mb-2">
                Our Process
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1A1A1A] mb-8">
                How We <em className="text-[#E8C547] italic">Engineer</em> Success
              </h2>
              <div className="flex flex-col">
                {processSteps.map(({ num, title, desc }, i) => (
                  <div
                    key={num}
                    className={`flex gap-6 items-start py-6 ${
                      i < processSteps.length - 1 ? 'border-b border-[#E6E4DF]' : ''
                    }`}
                  >
                    <span className="font-serif text-sm font-bold text-[#E8C547] min-w-[30px] pt-0.5">
                      {num}
                    </span>
                    <div>
                      <h4 className="text-[15px] font-semibold text-[#1A1A1A] mb-1">{title}</h4>
                      <p className="text-[13px] leading-[1.65] text-[#686B6B]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preview card */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-[#E6E4DF] shadow-lg overflow-hidden">
              <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 border-b border-[#E6E4DF]">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF6058]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
                </div>
                <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.1em] uppercase text-[#E8C547] bg-[#FFF3DC] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full">
                  LIVE ENVIRONMENT
                </span>
              </div>
              <div className="p-4 sm:p-6 lg:p-8 flex flex-col gap-4 sm:gap-6 min-h-[240px] sm:min-h-[280px]">
                <div className="grid grid-cols-[70px_1fr_1fr] gap-4 items-center">
                  <div className="w-[70px] h-[70px] bg-[#FFF3DC] rounded-xl flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="16" r="14" stroke="#E8C547" strokeWidth="2" />
                      <path d="M10 16a6 6 0 1112 0" stroke="#E8C547" strokeWidth="2" />
                      <circle cx="16" cy="16" r="2" fill="#E8C547" />
                    </svg>
                  </div>
                  <div className="h-[70px] bg-[#F2EFE8] rounded-xl" />
                  <div className="h-[70px] bg-[#F2EFE8] rounded-xl" />
                </div>
                <div className="flex-1 min-h-[100px] bg-[#F2EFE8] rounded-xl flex items-center justify-center">
                  <span className="font-mono text-[22px] font-bold text-[#E6E4DF]">&lt;/&gt;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#E8C547] mb-2">
                Case Studies
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1A1A1A]">
                Web <em className="text-[#E8C547] italic">Success</em> Stories
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="text-[13px] font-semibold text-[#E8C547] hover:opacity-75 transition-opacity whitespace-nowrap mb-1"
            >
              View All Projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webProjects.map((project) => (
              <div
                key={project.name}
                className="border border-[#E6E4DF] rounded-[20px] overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-200"
              >
                {/* Preview illustration */}
                {project.variant === 'fintech' ? (
                  <div className="h-[200px] relative overflow-hidden bg-gradient-to-br from-[#FFF8E8] to-[#FEF0CC] p-4">
                    <span className="absolute top-3 left-3 text-[9px] font-bold tracking-widest uppercase bg-[#E8C547] text-white px-2 py-0.5 rounded-full z-10">
                      {project.tag}
                    </span>
                    <div className="h-full flex flex-col justify-end">
                      <div className="flex gap-4 items-center">
                        <div className="flex-1 flex flex-col gap-2">
                          <div className="h-2.5 w-4/5 bg-black/10 rounded-sm" />
                          <div className="h-2.5 w-3/5 bg-black/10 rounded-sm" />
                        </div>
                        <div className="flex gap-1.5">
                          <div className="w-12 h-16 rounded-md bg-gradient-to-br from-orange-400 to-orange-300" />
                          <div className="w-12 h-16 rounded-md bg-gradient-to-br from-blue-500 to-blue-400" />
                          <div className="w-12 h-16 rounded-md bg-gradient-to-br from-emerald-500 to-emerald-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-[200px] relative overflow-hidden bg-gradient-to-br from-[#1A2540] to-[#0F1932] p-4">
                    <span className="absolute top-3 left-3 text-[9px] font-bold tracking-widest uppercase bg-[#E8C547] text-white px-2 py-0.5 rounded-full z-10">
                      {project.tag}
                    </span>
                    <div className="h-full flex flex-col gap-2 justify-center">
                      <div className="flex gap-2">
                        {[
                          'from-indigo-500 to-purple-500',
                          'from-pink-500 to-rose-500',
                          'from-amber-500 to-orange-500',
                          'from-cyan-400 to-blue-500',
                        ].map((g, i) => (
                          <div key={i} className={`w-12 h-12 rounded-md bg-gradient-to-br ${g}`} />
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 h-10 rounded-md bg-white/[0.07]" />
                        <div className="flex-1 h-10 rounded-md bg-white/[0.07]" />
                        <div className="flex-1 h-10 rounded-md bg-white/[0.07]" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Body */}
                <div className="px-8 py-6">
                  <h3 className="font-serif text-xl font-semibold text-[#1A1A1A] mb-0.5">{project.name}</h3>
                  <p className="text-[13px] text-[#686B6B] mb-6">{project.desc}</p>
                  <div className="flex gap-12 mb-6">
                    {project.stats.map((stat) => (
                      <div key={stat.label} className="flex flex-col gap-0.5">
                        <span className="font-serif text-xl font-bold text-[#1A1A1A] flex items-center gap-1 leading-none">
                          {stat.value}
                          {stat.star && (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path
                                d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 9l-3 1.5.5-3.5L1 4.5l3.5-.5L6 1z"
                                fill="#E8C547"
                              />
                            </svg>
                          )}
                        </span>
                        <span className="text-[9px] tracking-[0.1em] uppercase text-[#999] font-semibold">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={project.href}
                    className="text-[13px] font-semibold text-[#E8C547] inline-flex items-center gap-1 hover:gap-2 transition-all duration-200"
                  >
                    View Case Study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ────────────────────────── */}
      <div className="border-t border-[#E6E4DF] bg-white">
        <ContactForm />
      </div>
    </div>
  );
}
