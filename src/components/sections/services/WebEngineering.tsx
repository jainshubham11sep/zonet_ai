'use client';

import { motion } from 'motion/react';
import {
  Globe, Code2, Layers, Server, Database,
  Rocket, Zap, BarChart3, Layout, ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/sections/landing/ContactForm';
import CaseStudiesSection, { CaseStudyProject } from '@/components/common/CaseStudiesSection';

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

const webProjects: CaseStudyProject[] = [
  {
    tag: 'FINTECH',
    name: 'Hyyzo',
    desc: "India's Highest Paying Rewards",
    stats: [
      { value: '2M+', label: 'USERS' },
      { value: '100K+', label: 'STORES' },
      { value: '4.6', label: 'RATING', star: true },
    ],
    href: '/case-studies/hyyzo',
    image: '/images/zonet/hyyzo-1.png',
  },
  {
    tag: 'GAMING',
    name: 'Puno Games',
    desc: 'High-Performance Gaming Portal',
    stats: [
      { value: '500K+', label: 'PLAYERS' },
      { value: '99.9%', label: 'UPTIME' },
      { value: '4.7', label: 'RATING', star: true },
    ],
    href: '/case-studies/puno-games',
    image: '/images/zonet/puno-games.png',
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
        <div className="flex items-center gap-3 px-4 py-3 bg-[#12141A] border-b border-white/5">
          <div className="flex gap-1.5 shrink-0">
            <span className="w-3 h-3 rounded-full bg-[#FF6058]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28CA41]" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white/5 rounded-md px-3 py-1 text-[9px] text-white/25 flex items-center gap-1.5 max-w-[180px] w-full justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22D3A0] shrink-0" />
              app.zonet.ai/dashboard
            </div>
          </div>
          <div className="shrink-0">
            <span className="text-[9px] font-semibold text-[#E8C547] bg-[#E8C547]/10 px-2.5 py-1 rounded-md">
              Overview
            </span>
          </div>
        </div>

        {/* Dashboard body */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-16 bg-[#14161C] border-r border-white/4 p-2 flex flex-col gap-0.5 shrink-0">
            {['Dashboard', 'Analytics', 'Products', 'Orders', 'Create', 'Settings'].map((item, i) => (
              <div
                key={item}
                className={`text-[8px] px-1.5 py-1.5 rounded-md leading-none ${
                  i === 0 ? 'bg-[#E8C547]/12 text-[#E8C547] font-semibold' : 'text-white/22'
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
                <div key={s.label} className="bg-white/4 rounded-lg p-2 border border-white/3">
                  <div className="text-[7.5px] text-white/35 mb-0.5 truncate">{s.label}</div>
                  <div className="text-[12px] font-bold text-white leading-none">{s.value}</div>
                  <div className="text-[7.5px] text-[#22D3A0] mt-0.5">{s.change}</div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="bg-white/3 rounded-lg p-2.5 border border-white/3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[8px] text-white/35">Performance Trend</span>
                <span className="text-[7.5px] text-[#22D3A0] bg-[#22D3A0]/10 px-1.5 py-0.5 rounded-full">
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
              <div className="bg-white/3 rounded-lg p-2 border border-white/3">
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
              <div className="bg-white/3 rounded-lg p-2 border border-white/3">
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-screen pb-16 pt-12" style={{ fontFamily: "var(--font-sora-family)" }}>

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
              <span className="inline-block text-[10px] font-semibold tracking-[0.12em] uppercase text-[#E8C547] bg-[#E8C547]/10 px-3 py-1 rounded-full mb-6">
                Core Service
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.05] text-[#1A1A1A] mb-6">
                Custom Web<br />
                <em className="text-[#E8C547] not-italic">Engineering</em>
              </h1>

              <p className="text-sm sm:text-base md:text-[16px] leading-[1.6] text-[#686B6B] mb-10 max-w-[420px]">
                We don&apos;t just build websites; we engineer high-performance digital
                experiences designed for speed, security, and conversion.
              </p>

              <div className="flex items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 h-12 px-8 bg-[#E8C547] text-[#1A1A1A] font-bold text-sm rounded-full shadow-[0_4px_14px_rgba(232,197,71,0.35)] hover:bg-[#d4b33c] hover:shadow-[0_6px_20px_rgba(232,197,71,0.45)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  Start a Project <ArrowRight size={16} />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-white border border-[#E6E4DF] text-[#1A1A1A] font-bold text-sm rounded-full hover:bg-[#FAFAF8] transition-colors duration-200"
                >
                  View Our Work <ArrowRight size={16} className="text-[#999]" />
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
      <section className="border border-[#E6E4DF] py-5 sm:py-6 bg-white rounded-2xl mb-24 shadow-sm">
        <div className="w-full px-4 sm:px-8">
          <div className="flex items-center justify-center sm:justify-between gap-6 sm:gap-8 flex-wrap">
            {techStack.map(({ name, Icon }) => (
              <div key={name} className="flex items-center gap-2 text-[11px] sm:text-[12px] font-bold tracking-wider text-[#1A1A1A] whitespace-nowrap">
                <Icon size={18} className="text-[#1A1A1A]" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL-STACK CAPABILITIES ─────────────── */}
      <section className="py-12 sm:py-16 text-center">
        <div className="max-w-[1140px] mx-auto">
          <span className="inline-block text-[10px] font-semibold tracking-[0.12em] uppercase text-[#E8C547] bg-[#E8C547]/10 px-4 py-1.5 rounded-full mb-6">
            What We Deliver
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1A1A1A] mb-4 tracking-tight">
            Full-Stack <em className="text-[#E8C547] not-italic">Capabilities</em>
          </h2>
          <p className="text-sm sm:text-base text-[#686B6B] leading-[1.6] max-w-[560px] mx-auto mb-16">
            Our engineering team specializes in the modern web ecosystem, delivering
            applications that are as robust as they are beautiful.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {features.map(({ title, desc, Icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 sm:p-10 rounded-2xl border border-[#E6E4DF] shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FFF3DC] flex items-center justify-center mb-6">
                  <Icon size={24} className="text-[#E8C547]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{title}</h3>
                <p className="text-[14px] leading-[1.6] text-[#686B6B]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE ENGINEER SUCCESS ─────────────── */}
      <section className="py-16 sm:py-24 bg-[#F9F9F9] rounded-[40px] border border-[#E6E4DF] px-6 sm:px-12 my-12">
        <div className="max-w-[1140px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div>
              <span className="inline-block text-[10px] font-bold tracking-[0.14em] uppercase text-[#E8C547] mb-4">
                Our Process
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1A1A1A] mb-12 tracking-tight">
                How We <em className="text-[#E8C547] not-italic">Engineer</em> Success
              </h2>
              <div className="flex flex-col gap-8">
                {processSteps.map(({ num, title, desc }) => (
                  <div key={num} className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full border-2 border-[#E8C547] flex items-center justify-center text-[#E8C547] font-bold text-lg shrink-0">
                      {num}
                    </div>
                    <div className="pt-1">
                      <h4 className="text-lg font-bold text-[#1A1A1A] mb-2">{title}</h4>
                      <p className="text-[14px] leading-[1.6] text-[#686B6B] max-w-[400px]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preview card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full flex justify-center lg:justify-end"
            >
              <div className="bg-white rounded-[28px] border border-[#E6E4DF] shadow-xl overflow-hidden w-full max-w-[420px]">
                <div className="flex items-center justify-between px-4 py-3 border-b border-[#E6E4DF]">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF6058]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
                  </div>
                  <span className="text-[9px] font-bold tracking-widest uppercase text-[#E8C547] bg-[#FFF3DC] px-3 py-1 rounded-full">
                    LIVE ENVIRONMENT
                  </span>
                </div>
                <div className="p-6 sm:p-8 flex flex-col gap-5 min-h-[280px]">
                  <div className="grid grid-cols-[70px_1fr_1fr] gap-4 items-center">
                    <div className="w-[70px] h-[70px] bg-[#FFF3DC] rounded-xl flex items-center justify-center">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="14" stroke="#E8C547" strokeWidth="2" />
                        <path d="M10 16a6 6 0 1112 0" stroke="#E8C547" strokeWidth="2" />
                        <circle cx="16" cy="16" r="2" fill="#E8C547" />
                      </svg>
                    </div>
                    <div className="h-[70px] bg-[#F9F9F9] rounded-xl border border-[#E6E4DF]" />
                    <div className="h-[70px] bg-[#F9F9F9] rounded-xl border border-[#E6E4DF]" />
                  </div>
                  <div className="flex-1 min-h-[110px] bg-[#F9F9F9] rounded-xl border border-[#E6E4DF] flex items-center justify-center">
                    <span className="font-mono text-[22px] font-bold text-[#E6E4DF]">&lt;/&gt;</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CaseStudiesSection
        title="Web"
        titleHighlight="Success Stories"
        projects={webProjects}
      />

      {/* ── CONTACT FORM ────────────────────────── */}
      <div className="border-t border-[#E6E4DF] bg-white pt-12 mt-12 rounded-3xl mx-[-16px] sm:mx-[-24px] px-4 sm:px-6">
        <ContactForm />
      </div>
    </div>
  );
}
