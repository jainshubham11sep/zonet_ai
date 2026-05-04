'use client';

import { use } from 'react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, Calendar, Globe, Target,
  Users, Star, TrendingUp, Puzzle, Smartphone,
  Zap, Rocket, BarChart3, ShieldCheck,
} from 'lucide-react';
import { caseStudies } from '@/lib/case-studies';

const iconMap = {
  Users, Star, TrendingUp, Globe, Smartphone, Puzzle, Rocket, BarChart3, ShieldCheck, Zap,
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-[10px] text-[#E8C547] text-[11px] tracking-[0.2em] font-bold uppercase">
      <span className="w-[22px] h-[2px] bg-[#E8C547] rounded-full shrink-0" />
      {children}
    </div>
  );
}

export default function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = caseStudies.find(p => p.slug === slug) ?? caseStudies[0];
  const currentIndex = caseStudies.findIndex(p => p.slug === project.slug);
  const nextProject = caseStudies[(currentIndex + 1) % caseStudies.length];
  const heroDesc = project.description.map(d => d.text).join('');

  return (
    <div className="bg-[#F7F6F3] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mt-24">

        {/* ── Breadcrumb ── */}
        <nav className="pt-9 pb-12 flex items-center gap-[6px] text-[13px]">
          <Link href="/" className="text-[#9AA1AC] hover:text-[#1A1A1A] transition-colors duration-200 font-medium">Home</Link>
          <svg width="5" height="9" viewBox="0 0 5 9" fill="none" className="shrink-0 text-[#C9C5BB]">
            <path d="M1 1l3 3.5L1 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <Link href="/case-studies" className="text-[#9AA1AC] hover:text-[#1A1A1A] transition-colors duration-200 font-medium">Case Studies</Link>
          <svg width="5" height="9" viewBox="0 0 5 9" fill="none" className="shrink-0 text-[#C9C5BB]">
            <path d="M1 1l3 3.5L1 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[#1A1A1A] font-semibold">{project.name}</span>
        </nav>

        {/* ── Hero ── */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-center pb-14">

          {/* Left: text */}
          <div>
             <div className="inline-flex items-center gap-2 border border-[#E6E4DF] rounded-full px-4 py-1.5 text-[9px] font-semibold tracking-[0.15em] text-[#686B6B] mb-2 bg-white/60 backdrop-blur-sm uppercase">
                <span className="w-1 h-1 rounded-full bg-[#E8C547]" />
                {project.industry} Case Study
              </div>

            <h1 className="font-sora! font-semibold leading-none tracking-tight text-[#0d1424] text-[52px] md:text-[68px] lg:text-[88px] mb-12">
              {project.name}
            </h1>

            <p className="font-semibold text-[18px] text-[#1A1A1A] mb-2">{project.tagline}.</p>
            <p className="text-[#686B6B] text-xs leading-[1.7]">{heroDesc}</p>
          </div>

          {/* Right: 3 stat cards in one horizontal row */}
          <div className="grid grid-cols-3 gap-3">
            {project.stats.slice(0, 3).map((stat, i) => {
              const Icon = iconMap[stat.icon as keyof typeof iconMap] ?? Zap;
              return (
                <div key={i} className="bg-white border border-[#E6E4DF] rounded-2xl p-5 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <div className="w-[42px] h-[42px] rounded-[12px] bg-[#fff7dc] flex items-center justify-center text-[#E8C547]">
                    <Icon size={20} />
                  </div>
                  <div>
                    <b className="block text-[22px] font-bold tracking-tight text-[#0d1424]">{stat.value}</b>
                    <span className="text-[12px] text-[#686B6B] leading-snug">{stat.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Product Mockup ── */}
        <div className="w-full mb-16 rounded-3xl overflow-hidden shadow-sm border border-[#E5E5E5] bg-white group">
            <Image
              src={project.photo}
              alt={`${project.name} product preview`}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>

        {/* ── Content Grid ── */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">

          {/* Left: Challenge + Approach */}
          <div>
            <div className="mb-8">
              <Eyebrow>The Challenge</Eyebrow>
              <h2 className="font-serif text-[26px] leading-[1.35] mt-[14px] mb-7 font-semibold text-[#1A1A1A]">
                {project.detail.problem}
              </h2>
            </div>

            <div>
              <Eyebrow>Our Approach</Eyebrow>
              <p className="text-[#686B6B] text-[14.5px] leading-[1.7] max-w-[560px] mt-[14px] mb-[26px]">
                {project.detail.solution}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px] max-w-[560px]">
                {project.detail.features.map((feat, i) => {
                  const Icon = iconMap[feat.icon as keyof typeof iconMap] ?? Zap;
                  return (
                    <div
                      key={i}
                      className="bg-white border border-[#E6E4DF] rounded-[14px] p-[18px] shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="w-[34px] h-[34px] rounded-[10px] bg-[#fff7dc] flex items-center justify-center text-[#E8C547] mb-[14px]">
                        <Icon size={18} />
                      </div>
                      <h4 className="text-[15px] font-bold text-[#1A1A1A] mb-[6px]">{feat.title}</h4>
                      <p className="text-[13px] text-[#686B6B] leading-[1.6] m-0">{feat.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Sidebar */}
          <aside className="lg:sticky lg:top-6 flex flex-col gap-[18px]">

            {/* Project Overview */}
            <div className="bg-white border border-[#E6E4DF] rounded-[18px] p-[22px] shadow-[0_8px_24px_rgba(15,20,40,0.06)]">
              <p className="text-[#E8C547] text-[11px] tracking-[0.2em] font-bold uppercase">Project Overview</p>
              <hr className="border-t border-[#E6E4DF] my-[18px]" />

              <p className="text-[11px] text-[#686B6B] tracking-[0.18em] font-semibold uppercase mb-3">Expertise Stack</p>
              <div className="flex flex-wrap gap-2 mb-[14px]">
                {project.detail.tech.map(t => (
                  <span key={t} className="border border-[#E6E4DF] rounded-lg px-3 py-2 text-[11px] font-semibold tracking-[0.06em] uppercase text-[#374151] bg-white">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-[14px]">
                <div className="w-9 h-9 rounded-[10px] bg-[#fff7dc] flex items-center justify-center text-[#E8C547] shrink-0">
                  <Calendar size={18} />
                </div>
                <div>
                  <p className="text-[11px] text-[#686B6B] tracking-[0.16em] uppercase font-semibold">Timeline</p>
                  <p className="text-[14px] font-semibold text-[#1A1A1A]">30 Days Launch</p>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-[14px]">
                <div className="w-9 h-9 rounded-[10px] bg-[#fff7dc] flex items-center justify-center text-[#E8C547] shrink-0">
                  <Globe size={18} />
                </div>
                <div>
                  <p className="text-[11px] text-[#686B6B] tracking-[0.16em] uppercase font-semibold">Industry</p>
                  <p className="text-[14px] font-semibold text-[#1A1A1A]">{project.industry}</p>
                </div>
              </div>

              <hr className="border-t border-[#E6E4DF] my-[18px]" />

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full text-white font-semibold rounded-[10px] py-3 px-4 text-[14px] hover:opacity-90 transition-opacity duration-200 shadow-[0_10px_22px_-10px_rgba(230,162,0,0.7)]"
                style={{ background: 'linear-gradient(180deg,#fac11a,#e6a200)' }}
              >
                Build Yours <ArrowRight size={14} />
              </Link>
            </div>

            {/* Next Case Study */}
            <Link
              href={`/case-studies/${nextProject.slug}`}
              className="bg-white border border-[#E6E4DF] rounded-[18px] p-[22px] flex items-center justify-between shadow-sm hover:shadow-md transition-shadow duration-200 group"
            >
              <div>
                <p className="text-[11px] text-[#E8C547] tracking-[0.18em] uppercase font-bold">Next Case Study</p>
                <p className="font-serif text-[18px] font-bold mt-1 text-[#1A1A1A]">{nextProject.name}</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#fff7dc] flex items-center justify-center text-[#E8C547] group-hover:bg-[#E8C547] group-hover:text-white transition-all duration-200 shrink-0">
                <ArrowRight size={14} />
              </div>
            </Link>
          </aside>
        </section>

        {/* ── Verified Impact ── */}
        <section className="mt-[60px] mb-[22px] bg-white border border-[#E6E4DF] rounded-[22px] px-10 py-[38px] relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(700px 220px at 95% 0%,rgba(245,184,0,.07),transparent 60%),radial-gradient(500px 200px at 5% 100%,rgba(245,184,0,.05),transparent 60%)' }}
          />
          {/* Label */}
          <div className="flex items-center gap-[10px] mb-8">
            <span className="w-[28px] h-[28px] rounded-full bg-[#fff7dc] border border-[#E8C547]/30 flex items-center justify-center shrink-0">
              <Target size={13} strokeWidth={2} style={{ color: '#E8C547' }} />
            </span>
            <span
              className="text-[11px] font-bold uppercase tracking-[0.2em]"
              style={{ color: '#E8C547', fontFamily: 'var(--font-inter)' }}
            >
              Verified Impact
            </span>
          </div>

          {/* Stats row */}
          <div className="flex flex-col sm:flex-row sm:items-stretch sm:divide-x sm:divide-[#E6E4DF]">
            {project.detail.impact.map((item, i) => (
              <div
                key={i}
                className={`mb-8 last:mb-0 sm:mb-0 sm:flex-1 ${i === 0 ? 'sm:pr-10' : i === project.detail.impact.length - 1 ? 'sm:pl-10' : 'sm:px-10'}`}
              >
                <p
                  className="leading-none tracking-tight mb-3"
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontWeight: 700,
                    fontSize: '42px',
                    color: '#0d1424',
                  }}
                >
                  {item.value}
                </p>
                <p
                  className="leading-snug"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 400,
                    fontSize: '13px',
                    color: '#6b7280',
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-white border border-[#E6E4DF] rounded-[22px] py-[30px] px-9 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-7 mb-20">
          <div className="w-[140px] h-[120px] hidden md:block shrink-0">
            <svg viewBox="0 0 160 130" width="100%" height="100%">
              <defs>
                <linearGradient id="ctabk" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#ffe79a" /><stop offset="1" stopColor="#f0b300" />
                </linearGradient>
              </defs>
              <g>
                <polygon points="20,80 60,100 100,80 60,60" fill="url(#ctabk)" />
                <polygon points="20,80 60,100 60,118 20,98" fill="#c98c00" />
                <polygon points="100,80 60,100 60,118 100,98" fill="#e0a000" />
              </g>
              <g transform="translate(60,-12)">
                <polygon points="20,80 60,100 100,80 60,60" fill="url(#ctabk)" />
                <polygon points="20,80 60,100 60,118 20,98" fill="#c98c00" />
                <polygon points="100,80 60,100 60,118 100,98" fill="#e0a000" />
              </g>
              <g transform="translate(20,-30) scale(.7)">
                <polygon points="20,80 60,100 100,80 60,60" fill="url(#ctabk)" />
                <polygon points="20,80 60,100 60,118 20,98" fill="#c98c00" />
                <polygon points="100,80 60,100 60,118 100,98" fill="#e0a000" />
              </g>
            </svg>
          </div>

          <div>
            <div className="flex items-center gap-[10px] text-[#E8C547] text-[11px] tracking-[0.2em] font-bold uppercase mb-[14px]">
              <span className="w-[22px] h-[2px] bg-[#E8C547] rounded-full shrink-0" />
              Have a Similar Idea?
            </div>
            <h3 className="font-serif text-[28px] font-semibold tracking-[-0.01em] text-[#1A1A1A] mb-[6px]">
              Let&apos;s build something amazing <em className="not-italic text-[#E8C547]">together.</em>
            </h3>
            <p className="text-[#686B6B] text-[14px]">Book a free strategy call and bring your idea to life.</p>
          </div>

          <Link
            href="/contact"
            className="flex items-center gap-2 text-white font-semibold rounded-[10px] py-3 px-[22px] text-[14px] hover:opacity-90 transition-opacity duration-200 whitespace-nowrap shadow-[0_10px_22px_-10px_rgba(230,162,0,0.7)]"
            style={{ background: 'linear-gradient(180deg,#fac11a,#e6a200)' }}
          >
            Schedule a Free Call <ArrowRight size={14} />
          </Link>
        </section>

      </div>
    </div>
  );
}
