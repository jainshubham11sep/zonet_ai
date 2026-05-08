'use client';

import { motion } from 'motion/react';
import {
  Smartphone, Zap, Layout, Wifi, ShieldCheck, Database, Server,
  Layers, Activity, ShoppingBag, Apple, ArrowRight, BarChart3, TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/sections/landing/ContactForm';
import CaseStudiesSection, { CaseStudyProject } from '@/components/common/CaseStudiesSection';

const techStack = [
  { name: 'REACT NATIVE', Icon: Layers },
  { name: 'FLUTTER', Icon: Layout },
  { name: 'SWIFT', Icon: Zap },
  { name: 'KOTLIN', Icon: Smartphone },
  { name: 'FIREBASE', Icon: Database },
  { name: 'NODE.JS', Icon: Server },
  { name: 'GRAPHQL', Icon: Activity },
];

const features = [
  {
    title: 'React Native & Expo',
    desc: 'Cross-platform applications that share 90%+ code between iOS and Android without sacrificing native performance.',
    Icon: Smartphone,
  },
  {
    title: 'Offline-First Reliability',
    desc: 'Advanced caching and background sync ensuring your app works perfectly even in zero-connectivity environments.',
    Icon: Wifi,
  },
  {
    title: 'Biometric Security',
    desc: 'Face ID, Touch ID, and Fingerprint integration for bank-grade security and frictionless user authentication.',
    Icon: ShieldCheck,
  },
  {
    title: 'Real-time Sync',
    desc: 'Powered by WebSockets and Firebase for instantaneous data updates across all user devices.',
    Icon: Zap,
  },
];

const processSteps = [
  {
    num: '01',
    title: 'UX/UI Design & Prototyping',
    desc: 'Interactive high-fidelity prototypes focused on mobile navigation patterns and gesture interactions.',
  },
  {
    num: '02',
    title: 'Cross-Platform Development',
    desc: 'Building with React Native or Flutter to ensure speed-to-market without compromising on native functionality.',
  },
  {
    num: '03',
    title: 'Testing & Quality Assurance',
    desc: 'Rigorous testing across real devices to ensure performance, functionality, and security.',
  },
  {
    num: '04',
    title: 'App Store Deployment',
    desc: 'Handling the entire submission process for Apple App Store and Google Play Store with ASO best practices.',
  },
];

const mobileProjects: CaseStudyProject[] = [
  {
    tag: 'FINTECH',
    name: 'Finmate',
    desc: 'Personal Finance Management App',
    stats: [
      { value: '100K+', label: 'DOWNLOADS' },
      { value: '4.8', label: 'PLAY STORE RATING', star: true },
      { value: '20%', label: 'INCREASE IN RETENTION' },
    ],
    href: '/case-studies/finmate',
    image: '/images/zonet/finmate.png',
  },
  {
    tag: 'E-COMMERCE',
    name: 'FreshBasket',
    desc: 'Grocery Shopping & Delivery App',
    stats: [
      { value: '250K+', label: 'DOWNLOADS' },
      { value: '4.7', label: 'APP STORE RATING', star: true },
      { value: '35%', label: 'REPEAT ORDERS' },
    ],
    href: '/case-studies/freshbasket',
    image: '/images/zonet/freshbasket.png',
  },
];

function HeroPhoneVisual() {
  return (
    <div className="relative w-full pt-16 pb-20 px-8 flex justify-center">
      {/* Background circles for presentation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[450px] h-[450px] bg-[#E8C547]/[0.03] rounded-full border border-[#E8C547]/[0.1]" />
        <div className="absolute w-[350px] h-[350px] bg-[#E8C547]/[0.05] rounded-full" />
      </div>

      {/* Main Phone */}
      <div className="relative w-[280px] h-[580px] bg-[#121212] rounded-[40px] border-[10px] border-[#1A1A1A] shadow-[0_32px_80px_rgba(0,0,0,0.4)] overflow-hidden z-20 shrink-0">
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-30" />

        {/* Screen Content */}
        <div className="absolute inset-0 bg-[#0A0A0A] text-white flex flex-col p-5 pt-12">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#E8C547] to-orange-500 flex items-center justify-center p-[2px]">
                <div className="w-full h-full bg-[#1A1A1A] rounded-full border-2 border-transparent" />
              </div>
              <div>
                <div className="text-[10px] text-white/50">Welcome back,</div>
                <div className="text-sm font-semibold flex items-center gap-1">Alec <span className="text-[#E8C547]">★</span></div>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
              <div className="w-1 h-1 bg-white rounded-full relative">
                <div className="absolute -left-2 w-1 h-1 bg-white rounded-full" />
                <div className="absolute -right-2 w-1 h-1 bg-white rounded-full" />
              </div>
            </div>
          </div>

          {/* Balance Card */}
          <div className="bg-[#1A1A1A] rounded-2xl p-5 mb-6 border border-white/5">
            <div className="text-[11px] text-white/50 mb-1">Total Balance</div>
            <div className="text-3xl font-bold mb-3 tracking-tight">$24,580.00</div>
            <div className="flex items-center gap-1.5 text-[10px] text-[#E8C547]">
              <TrendingUp size={12} />
              <span>+12.5% this month</span>
            </div>
          </div>

          {/* Chart Section */}
          <div className="mb-6">
            <div className="text-[11px] font-medium text-white/70 mb-4">Spending Overview</div>
            <div className="flex items-end justify-between h-20 gap-2 px-1">
              {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                <div key={i} className="w-full bg-[#1A1A1A] rounded-sm relative group overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 bg-[#E8C547] rounded-sm transition-all" style={{ height: `${h}%` }} />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[8px] text-white/30 px-2 uppercase">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <div className="text-[11px] font-medium text-white/70">Recent Transactions</div>
              <div className="text-[9px] text-[#E8C547]">View all</div>
            </div>
            <div className="space-y-3">
              {[
                { icon: ShoppingBag, name: 'Amazon', cat: 'Shopping', amount: '-$158.00', color: 'bg-orange-500' },
                { name: 'Dribbble', cat: 'Subscription', amount: '-$29.00', color: 'bg-pink-500' },
                { icon: Database, name: 'Salary', cat: 'Income', amount: '+$2,650.00', color: 'bg-[#E8C547]', pos: true },
              ].map((tx, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl ${tx.color}/20 flex items-center justify-center text-${tx.color.split('-')[1]}-500`}>
                       {tx.icon ? <tx.icon size={14} /> : <div className="w-3 h-3 bg-current rounded-full" />}
                    </div>
                    <div>
                      <div className="text-[12px] font-semibold">{tx.name}</div>
                      <div className="text-[9px] text-white/40">{tx.cat}</div>
                    </div>
                  </div>
                  <div className={`text-[12px] font-semibold ${tx.pos ? 'text-[#E8C547]' : 'text-white'}`}>
                    {tx.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badges */}
      <div className="absolute top-10 right-0 sm:right-[15%] bg-white rounded-xl px-4 py-3 shadow-[0_12px_24px_rgba(0,0,0,0.08)] border border-[#E6E4DF] z-30 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#E8C547]/10 flex items-center justify-center text-[#E8C547]">
          <Zap size={16} />
        </div>
        <div>
          <div className="text-[12px] font-bold text-[#1A1A1A]">Smooth<br/>Performance</div>
          <div className="text-[10px] text-[#686B6B]">60 FPS</div>
        </div>
      </div>

      <div className="absolute bottom-[20%] right-[-5%] sm:right-[5%] bg-white rounded-xl px-4 py-3 shadow-[0_12px_24px_rgba(0,0,0,0.08)] border border-[#E6E4DF] z-30 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600">
          <ShieldCheck size={16} />
        </div>
        <div>
          <div className="text-[12px] font-bold text-[#1A1A1A]">Secure by<br/>Design</div>
          <div className="text-[10px] text-[#686B6B]">100%</div>
        </div>
      </div>

      <div className="absolute top-[40%] left-[-10%] sm:left-[10%] bg-white rounded-xl px-4 py-3 shadow-[0_12px_24px_rgba(0,0,0,0.08)] border border-[#E6E4DF] z-30 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600">
          <Layers size={16} />
        </div>
        <div>
          <div className="text-[12px] font-bold text-[#1A1A1A]">Cross Platform</div>
          <div className="text-[10px] text-[#686B6B]">iOS & Android</div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 sm:left-[15%] bg-white rounded-xl px-4 py-3 shadow-[0_12px_24px_rgba(0,0,0,0.08)] border border-[#E6E4DF] z-30 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-[#1A1A1A]">
          <Apple size={16} />
        </div>
        <div>
          <div className="text-[12px] font-bold text-[#1A1A1A]">App Store<br/>Ready</div>
          <div className="text-[10px] text-[#686B6B]">Guaranteed</div>
        </div>
      </div>
    </div>
  );
}

function ProcessPhoneVisual() {
  return (
    <div className="relative w-full pt-10 pb-16 flex justify-center lg:justify-end pr-0 lg:pr-8">
      {/* Main Light Phone */}
      <div className="relative w-[260px] h-[540px] bg-white rounded-[40px] border-[8px] border-[#E6E4DF] shadow-[0_24px_64px_rgba(0,0,0,0.1)] overflow-hidden z-20 shrink-0">
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-30" />

        {/* Screen Content */}
        <div className="absolute inset-0 bg-[#F9F9F9] flex flex-col p-5 pt-12">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="w-8 h-8 rounded-full bg-[#E8C547]/20 flex items-center justify-center text-[#E8C547] font-bold text-xs">
              K
            </div>
            <div className="w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center border border-[#E6E4DF]">
              <div className="w-3 h-3 border border-[#1A1A1A] rounded-sm" />
            </div>
          </div>

          {/* Yellow Card */}
          <div className="bg-gradient-to-br from-[#E8C547] to-[#d4b33c] rounded-2xl p-5 mb-6 shadow-md text-white">
            <div className="text-[10px] font-medium opacity-90 mb-1">Total Balance</div>
            <div className="text-2xl font-bold mb-3 tracking-tight">$24,580.00</div>
            <div className="text-[14px] opacity-70 tracking-widest">•••• ••••</div>
          </div>

          {/* Line Chart */}
          <div className="mb-6 bg-white p-4 rounded-2xl shadow-sm border border-[#E6E4DF]">
             <div className="text-[11px] font-bold text-[#1A1A1A] mb-4">Statistics</div>
             <svg viewBox="0 0 200 60" className="w-full h-16 overflow-visible">
               <path d="M0 50 Q 20 40, 40 45 T 80 30 T 120 40 T 160 20 T 200 10" fill="none" stroke="#E8C547" strokeWidth="3" strokeLinecap="round" />
               <path d="M0 50 Q 20 40, 40 45 T 80 30 T 120 40 T 160 20 T 200 10 L 200 60 L 0 60 Z" fill="url(#gradLight)" opacity="0.2" />
               <defs>
                 <linearGradient id="gradLight" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="0%" stopColor="#E8C547" />
                   <stop offset="100%" stopColor="transparent" />
                 </linearGradient>
               </defs>
               <circle cx="160" cy="20" r="4" fill="#E8C547" stroke="white" strokeWidth="2" />
             </svg>
             <div className="flex justify-between mt-2 text-[8px] text-[#999] uppercase">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
             </div>
          </div>

          {/* Recent Activity */}
          <div className="flex-1 bg-white p-4 rounded-2xl shadow-sm border border-[#E6E4DF]">
            <div className="flex justify-between items-center mb-4">
              <div className="text-[11px] font-bold text-[#1A1A1A]">Recent Activity</div>
              <div className="text-[9px] text-[#E8C547] font-semibold">View All</div>
            </div>
            <div className="space-y-4">
               {[
                { name: 'Amazon', cat: 'Shopping', amount: '-$158.00', bg: 'bg-orange-100', color: 'text-orange-500' },
                { name: 'Dribbble', cat: 'Subscription', amount: '-$20.00', bg: 'bg-pink-100', color: 'text-pink-500' },
                { name: 'Salary', cat: 'Income', amount: '+$2,650.00', bg: 'bg-green-100', color: 'text-green-500', pos: true },
               ].map((item, i) => (
                 <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                       <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center ${item.color}`}>
                          <div className="w-3 h-3 bg-current rounded-full" />
                       </div>
                       <div>
                         <div className="text-[11px] font-bold text-[#1A1A1A]">{item.name}</div>
                         <div className="text-[9px] text-[#999]">{item.cat}</div>
                       </div>
                    </div>
                    <div className={`text-[11px] font-bold ${item.pos ? 'text-green-500' : 'text-[#1A1A1A]'}`}>
                       {item.amount}
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Light Badges */}
      <div className="absolute top-[30%] left-0 lg:left-[-15%] bg-white w-12 h-12 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-[#E6E4DF] z-30 flex items-center justify-center text-[#E8C547]">
         <Zap size={20} fill="currentColor" />
      </div>

      <div className="absolute top-[20%] right-[-10%] bg-white w-14 h-14 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-[#E6E4DF] z-30 flex items-center justify-center text-[#E8C547]">
         <BarChart3 size={24} />
      </div>

      <div className="absolute bottom-[25%] right-[-5%] bg-white w-12 h-12 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-[#E6E4DF] z-30 flex items-center justify-center text-[#E8C547]">
         <ShieldCheck size={20} />
      </div>
    </div>
  );
}

export default function MobileApps() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-screen pb-16 pt-12" style={{ fontFamily: "var(--font-sora-family)" }}>

      {/* ── HERO ────────────────────────────────── */}
      <section className="pt-16 pb-12 md:pt-24 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-[500px]"
          >
            <span className="inline-block text-[10px] font-semibold tracking-[0.12em] uppercase text-[#E8C547] bg-[#E8C547]/10 px-3 py-1 rounded-full mb-6">
              Our Service
            </span>

            <h1 className="font-sora-family! text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.05] text-[#1A1A1A] mb-6">
              Mobile App<br />
              <em className="text-[#E8C547] not-italic">Development</em>
            </h1>

            <p className="text-sm sm:text-base md:text-[16px] leading-[1.6] text-[#686B6B] mb-10 max-w-[420px]">
              We design and build fluid, high-performance mobile experiences that engage users and drive long-term retention on every platform.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 bg-[#E8C547] text-[#1A1A1A] font-bold text-sm rounded-full shadow-[0_4px_14px_rgba(232,197,71,0.35)] hover:bg-[#d4b33c] hover:shadow-[0_6px_20px_rgba(232,197,71,0.45)] hover:-translate-y-0.5 transition-all duration-200"
              >
                Start Building <ArrowRight size={16} />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-white border border-[#E6E4DF] text-[#1A1A1A] font-bold text-sm rounded-full hover:bg-[#FAFAF8] transition-colors duration-200"
              >
                View Our Work <ArrowRight size={16} className="text-[#999]" />
              </Link>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full flex justify-center"
          >
            <HeroPhoneVisual />
          </motion.div>
        </div>
      </section>

      {/* ── TECH BAR ────────────────────────────── */}
      <section className="border border-[#E6E4DF] py-5 sm:py-6 bg-white rounded-2xl mb-24 shadow-sm">
        <div className="w-full px-4 sm:px-8">
          <div className="flex items-center justify-center sm:justify-between gap-6 sm:gap-8 flex-wrap">
            {techStack.map(({ name, Icon }) => (
              <div key={name} className="flex items-center gap-2 text-[11px] sm:text-[12px] font-bold tracking-[0.05em] text-[#1A1A1A] whitespace-nowrap">
                <Icon size={18} className="text-[#1A1A1A]" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ─────────────── */}
      <section className="py-12 sm:py-16 text-center">
        <div className="max-w-[1140px] mx-auto">
          <span className="inline-block text-[10px] font-semibold tracking-[0.12em] uppercase text-[#E8C547] bg-[#E8C547]/10 px-4 py-1.5 rounded-full mb-6">
            What We Deliver
          </span>
          <h2 className="font-sora-family! text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1A1A1A] mb-4 tracking-tight">
            Native-Grade <em className="text-[#E8C547] not-italic">Performance</em>
          </h2>
          <p className="text-sm sm:text-base text-[#686B6B] leading-[1.6] max-w-[560px] mx-auto mb-16">
            From complex fintech apps to social reward ecosystems, we build mobile
            solutions that thrive in the competitive app marketplace.
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

      {/* ── OUR PROCESS ─────────────── */}
      <section className="py-16 sm:py-24 bg-[#F9F9F9] rounded-[40px] border border-[#E6E4DF] px-6 sm:px-12 my-12">
        <div className="max-w-[1140px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Steps */}
            <div>
              <span className="inline-block text-[10px] font-bold tracking-[0.14em] uppercase text-[#E8C547] mb-4">
                Our Process
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1A1A1A] mb-12 tracking-tight">
                From Design to <em className="text-[#E8C547] not-italic">App Store</em>
              </h2>
              
              <div className="flex flex-col gap-8">
                {processSteps.map(({ num, title, desc }, i) => (
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

            {/* Process Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full flex justify-center lg:justify-end"
            >
              <ProcessPhoneVisual />
            </motion.div>
          </div>
        </div>
      </section>

      <CaseStudiesSection
        title="Mobile"
        titleHighlight="Success Stories"
        projects={mobileProjects}
      />

      {/* ── CONTACT FORM ────────────────────────── */}
      <div className="border-t border-[#E6E4DF] bg-white pt-12 mt-12 rounded-3xl mx-[-16px] sm:mx-[-24px] px-4 sm:px-6">
        <ContactForm />
      </div>
    </div>
  );
}
