'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { caseStudies, categories, industries } from '@/lib/case-studies';

/* ── CARD ── */
function Card({ cs }: { cs: (typeof caseStudies)[number] }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#e4dfd5] cursor-pointer transition-all duration-220 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)]">
      {/* Photo with chip overlay */}
      <div className="relative w-full h-[180px] overflow-hidden">
        <span className="absolute top-3 left-3 z-10 bg-white/95 border border-[#e4dfd5] rounded-full px-3 py-1 text-[9px] font-bold tracking-[1.5px] uppercase text-[#1a1a1a] font-sora">
          {cs.badge}
        </span>
        <Image
          src={cs.photo}
          alt={cs.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Body */}
      <div className="p-[18px]">
        <div className="flex items-start justify-between mb-1.5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-[6px] overflow-hidden shrink-0 border border-[#e4dfd5]">
              <Image src={cs.logo} alt={cs.name} width={24} height={24} className="object-contain w-full h-full" />
            </div>
            <div>
              <p className="text-[14px] font-semibold text-[#1a1a1a] leading-tight font-sora">{cs.name}</p>
              <p className="text-[11px] text-[#6b6b6b]">{cs.tagline}</p>
            </div>
          </div>
          <Link
            href={`/case-studies/${cs.slug}`}
            className="text-[#6b6b6b] text-base leading-none hover:text-[#1a1a1a] transition-colors duration-150 no-underline"
          >
            ↗
          </Link>
        </div>

        <p className="text-[12.5px] text-[#6b6b6b] leading-[1.55] my-2.5 mb-3.5">
          {cs.description.map((seg, i) =>
            seg.highlight ? (
              <strong key={i} className="text-[#1a1a1a] font-semibold font-sora">{seg.text}</strong>
            ) : (
              <span key={i}>{seg.text}</span>
            )
          )}
        </p>

        <div className="flex border-t border-[#ede9e0] pt-3.5">
          {cs.stats.map((s, i) => (
            <div key={i} className={`flex-1 text-center ${i > 0 ? 'border-l border-[#ede9e0]' : ''}`}>
              <p className="text-[13px] font-bold text-[#1a1a1a] font-sora">{s.value}</p>
              <p className="text-[9px] tracking-[1.2px] uppercase text-[#6b6b6b] mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── PAGE ── */
export default function CaseStudiesPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [activeIndustry, setActiveIndustry] = useState('All Industries');

  const filtered = caseStudies.filter((cs) => {
    const tabMatch = activeTab === 'All' || cs.category === activeTab;
    const indMatch = activeIndustry === 'All Industries' || cs.industry === activeIndustry;
    return tabMatch && indMatch;
  });

  return (
    <div className="bg-[#F7F5F0] min-h-screen pb-16 pt-12">

      {/* ── HERO ── */}
      <section className="text-center px-4 sm:px-6 pt-10 sm:pt-14 pb-8">
        <span className="inline-block border border-[#1a1a1a] rounded-full px-4 py-[5px] text-[9px] sm:text-[10px] font-semibold tracking-[2px] uppercase text-[#1a1a1a] mb-5 sm:mb-6 font-sora">
          Proven Growth · Real Results
        </span>

        <h1
          className="font-extrabold leading-[1.1] mb-4 text-[#1a1a1a] text-[26px] sm:text-[40px] md:text-[52px] lg:text-[64px]"
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          Our Work{' '}
          <span className="text-[#E8C547]">Speaks For Itself.</span>
        </h1>

        <p className="text-[13px] sm:text-[15px] text-[#6b6b6b] max-w-sm sm:max-w-md mx-auto mb-8 sm:mb-10 leading-[1.6] px-2 sm:px-0">
          We don&apos;t just build beautiful interfaces — we engineer product experiences
          that drive user adoption and scale revenue.
        </p>

        <div className="flex justify-center gap-8 sm:gap-12 md:gap-[60px]">
          {[
            { n: '50+', l: 'Projects' },
            { n: '10M+', l: 'Users' },
            { n: '100%', l: 'Success' },
          ].map(({ n, l }) => (
            <div key={l}>
              <p
                className="font-bold text-[28px] sm:text-[36px] md:text-[40px] text-[#E8C547] leading-none"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >{n}</p>
              <p
                className="text-[9px] sm:text-[10px] tracking-[2px] uppercase font-bold mt-1 text-[#6b6b6b]"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FILTERS ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        {/* Tabs — horizontally scrollable on mobile */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-0.5 sm:flex-wrap sm:overflow-visible">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap shrink-0 px-4 sm:px-[18px] py-1.5 sm:py-2 rounded-full text-[12px] sm:text-[13px] font-medium cursor-pointer border-[1.5px] transition-all duration-200 font-sora ${
                activeTab === tab
                  ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
                  : 'bg-transparent text-[#6b6b6b] border-transparent hover:border-[#1a1a1a] hover:text-[#1a1a1a]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dropdown — left-aligned on mobile */}
        <div className="relative self-start sm:self-auto shrink-0">
          <select
            value={activeIndustry}
            onChange={(e) => setActiveIndustry(e.target.value)}
            className="font-sora text-[12px] sm:text-[13px] font-medium text-[#1a1a1a] bg-white border-[1.5px] border-[#e4dfd5] rounded-full py-1.5 sm:py-2 pl-4 sm:pl-[18px] pr-8 cursor-pointer outline-none appearance-none"
          >
            {industries.map((ind) => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
            width="11" height="7" viewBox="0 0 12 8" fill="none"
          >
            <path d="M1 1l5 5 5-5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* ── SECTION LABEL ── */}
      <p className="max-w-6xl mx-auto mt-7 sm:mt-9 mb-4 sm:mb-5 px-4 sm:px-6 text-[11px] tracking-[2.5px] uppercase font-semibold text-[#E8C547] font-sora">
        Case Studies
      </p>

      {/* ── GRID ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {filtered.length === 0 ? (
          <div className="col-span-3 text-center py-24">
            <p className="text-[#6b6b6b] mb-6 font-sora">No case studies match your filters.</p>
            <button
              onClick={() => { setActiveTab('All'); setActiveIndustry('All Industries'); }}
              className="px-6 py-2.5 rounded-full bg-[#1a1a1a] text-white text-sm font-sora font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filtered.map((cs) => <Card key={cs.slug} cs={cs} />)
        )}
      </div>

      {/* ── CTA ── */}
      <section className="px-4 sm:px-6 py-8 sm:py-10 bg-[#faf8f5]">
        <div className="relative max-w-[1100px] mx-auto bg-[#faf8f5] border border-[#e8e2d8] rounded-2xl overflow-hidden py-14 text-center">

          {/* Left diagonal lines decoration */}
          <div className="absolute left-0 top-0 h-full w-48 pointer-events-none overflow-hidden">
            <svg width="180" height="100%" viewBox="0 0 180 220" preserveAspectRatio="xMinYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="-20" y1="200" x2="100" y2="-20" stroke="#E8C547" strokeWidth="1.2" strokeOpacity="0.35"/>
              <line x1="-5"  y1="200" x2="115" y2="-20" stroke="#E8C547" strokeWidth="1.2" strokeOpacity="0.35"/>
              <line x1="10"  y1="200" x2="130" y2="-20" stroke="#E8C547" strokeWidth="1.2" strokeOpacity="0.35"/>
              <line x1="25"  y1="200" x2="145" y2="-20" stroke="#E8C547" strokeWidth="1.2" strokeOpacity="0.35"/>
              <line x1="40"  y1="200" x2="160" y2="-20" stroke="#E8C547" strokeWidth="1.2" strokeOpacity="0.35"/>
              <line x1="55"  y1="200" x2="175" y2="-20" stroke="#E8C547" strokeWidth="1.2" strokeOpacity="0.35"/>
              <line x1="70"  y1="200" x2="190" y2="-20" stroke="#E8C547" strokeWidth="1.2" strokeOpacity="0.35"/>
              <line x1="85"  y1="200" x2="205" y2="-20" stroke="#E8C547" strokeWidth="1.2" strokeOpacity="0.35"/>
            </svg>
          </div>

          {/* Right dot grid decoration */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              {[0,1,2,3].map(row =>
                [0,1,2,3].map(col => (
                  <circle
                    key={`${row}-${col}`}
                    cx={col * 18 + 4}
                    cy={row * 18 + 4}
                    r="2.5"
                    fill="#E8C547"
                    fillOpacity="0.45"
                  />
                ))
              )}
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 px-6">
            <span className="inline-block border border-[#E8C547] rounded-full px-4 py-1 text-[9px] font-bold tracking-[2px] uppercase text-[#E8C547] mb-5 font-sora">
              Ready To Scale Your Product?
            </span>

            <h2 className="font-extrabold text-[clamp(26px,4vw,44px)] leading-tight mb-3 text-[#1a1a1a]" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
              Let&apos;s build your <span className="text-[#E8C547]">success story.</span>
            </h2>

            <p className="text-[14px] text-[#6b6b6b] mb-8">
              Join the products we&apos;ve scaled from idea to users — we know the path.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-white rounded-full font-bold text-sm transition-colors"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Start Your Project
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
