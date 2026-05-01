'use client';

import ContactForm from "../sections/landing/ContactForm";

const tools = [
  {
    name: 'CodeAgent XL',
    desc: 'Autonomous coding agent that handles complex refactors and boilerplate generation in seconds.',
    status: 'Stable',
    type: 'LLM Agent',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-none stroke-[#F5A623]" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: 'UI Synth',
    desc: 'Generative UI engine that transforms wireframes into production-ready React components.',
    status: 'Beta',
    type: 'Vision Engine',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-none stroke-[#F5A623]" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    name: 'Zonet Assistant',
    desc: 'A full-stack project context manager that stays in sync with your codebase and design files.',
    status: 'Stable',
    type: 'Context AI',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-none stroke-[#F5A623]" strokeWidth="2">
        <rect x="3" y="3" width="8" height="8" rx="1" />
        <rect x="13" y="3" width="8" height="8" rx="1" />
        <rect x="3" y="13" width="8" height="8" rx="1" />
        <rect x="13" y="13" width="8" height="8" rx="1" />
      </svg>
    ),
  },
  {
    name: 'OptiDeploy',
    desc: 'Automated CI/CD optimization layer that predicts and prevents deployment failures.',
    status: 'Internal',
    type: 'DevOps AI',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-none stroke-[#F5A623]" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

const bottomItems = [
  {
    title: 'Proprietary by Design',
    desc: '100% in-house technology built for reliability and scale.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[19px] h-[19px] fill-none stroke-[#F5A623]" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Secure & Private',
    desc: 'Enterprise-grade security and data privacy built-in.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[19px] h-[19px] fill-none stroke-[#F5A623]" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: 'Built for Results',
    desc: 'Tools designed to deliver real outcomes, not hype.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[19px] h-[19px] fill-none stroke-[#F5A623]" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: 'Always Evolving',
    desc: 'Continuously improving with real-world feedback.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[19px] h-[19px] fill-none stroke-[#F5A623]" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export default function AITools() {
  return (
    <div
      className="bg-[#F7F5F0] min-h-screen pb-16 pt-12"
      style={{ fontFamily: "var(--font-sora), 'Inter', sans-serif" }}
    >
      {/* ── HERO ── */}
      <section className="max-w-7xl mx-auto px-6 pt-[52px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 items-center">

        {/* Left */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-[10.5px] font-bold tracking-[0.13em] text-[#555] uppercase mb-[22px] bg-white border border-[#E0DDD6] rounded-full py-1.5 pr-3.5 pl-2">
            <div className="w-5 h-5 rounded-full bg-[#F5A623] flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 12 12" className="w-[11px] h-[11px] fill-white">
                <path d="M6 1L7.5 4.5H11L8.5 6.8 9.5 10.5 6 8.5 2.5 10.5 3.5 6.8 1 4.5H4.5z" />
              </svg>
            </div>
            Engineering Excellence
          </div>

          {/* Title */}
          <h1
            className="text-[40px] lg:text-[58px] font-extrabold leading-[1.06] text-[#0D0D0D] mb-1"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Proprietary<br />
            <span className="text-[#F5A623]">AI Technology</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-[14.5px] text-[#6B7280] leading-[1.65] max-w-[400px] mt-[18px] mb-[34px]"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            We don&apos;t just use AI; we build it. Our proprietary suite of tools allows our team to deliver agency-grade results at 10x the speed.
          </p>

          {/* Stats */}
          <div className="flex items-stretch">
            <div className="flex items-center gap-3.5 pr-[30px] mr-[30px] border-r border-[#DDD9CF]">
              <div className="w-10 h-10 bg-[#FEF3DC] rounded-[10px] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-[#F5A623]" strokeWidth="2.2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <div>
                <div className="text-[28px] font-extrabold text-[#F5A623] leading-none">10x</div>
                <div
                  className="text-[12px] text-[#777] mt-[3px]"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Faster Delivery
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 bg-[#FEF3DC] rounded-[10px] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-[#F5A623]" strokeWidth="2.2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <div className="text-[28px] font-extrabold text-[#F5A623] leading-none">100%</div>
                <div
                  className="text-[12px] text-[#777] mt-[3px]"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Proprietary &amp; Secure
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — 3D Cube Visual */}
        <div className="relative h-[380px] flex items-center justify-center">
          {/* dot-grid background */}
          <div
            className="absolute inset-0 rounded-[20px] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(213,144,10,0.18) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          <div className="relative w-[230px] h-[260px]">

            {/* Floating panel — Code Logic */}
            <div
              className="absolute top-3.5 -left-2.5 bg-white border border-[#E8E4DC] rounded-[14px] flex items-center gap-2 px-4 py-2.5 z-10"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
            >
              <div className="w-8 h-8 bg-[#1e1a0e] rounded-[8px] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] fill-none stroke-[#F5A623]" strokeWidth="2.5">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <div>
                <div className="text-[12px] font-bold text-[#111] leading-none">Code Logic</div>
                <div className="text-[10px] text-[#999] mt-0.5">Proprietary Engine</div>
              </div>
            </div>

            {/* Floating panel — 10x Faster */}
            <div
              className="absolute top-3.5 -right-2.5 bg-white border border-[#E8E4DC] rounded-[14px] text-center px-[18px] py-3 z-10"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
            >
              <div className="text-[32px] font-extrabold text-[#111] leading-none">
                <span className="text-[#F5A623]">10</span>x
              </div>
              <div className="text-[10px] text-[#999] mt-0.5 tracking-[0.05em]">Faster</div>
            </div>

            {/* Floating panel — Performance chart */}
            <div
              className="absolute bg-white border border-[#E8E4DC] rounded-[14px] p-3.5 min-w-[120px] z-10"
              style={{ bottom: '90px', left: '-30px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
            >
              <div className="text-[11px] font-semibold text-[#555] mb-1.5">Performance</div>
              <div className="flex items-end gap-[3px] h-7">
                {[
                  { h: 35, o: 0.5 },
                  { h: 55, o: 0.5 },
                  { h: 70, o: 0.5 },
                  { h: 50, o: 0.65 },
                  { h: 88, o: 1 },
                ].map(({ h, o }, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-[#F5A623] rounded-sm"
                    style={{ height: `${h}%`, opacity: o }}
                  />
                ))}
              </div>
              <div className="mt-1 flex items-center gap-1 text-[10px] text-[#F5A623] font-semibold">
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-[#F5A623]" strokeWidth="2.5">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
                +48% this month
              </div>
            </div>

            {/* Floating panel — Secure */}
            <div
              className="absolute flex flex-col items-center gap-1.5 px-[18px] py-3.5 rounded-[14px] border z-10"
              style={{
                bottom: '30px',
                right: '-10px',
                background: '#1e1a0e',
                borderColor: 'rgba(213,144,10,0.2)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              }}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#F5A623]" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-[10px] text-[#c8a84b] tracking-[0.08em] font-semibold">Secure</span>
            </div>

            {/* Cube body */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-[160px] h-[160px] rounded-[18px] flex items-center justify-center overflow-hidden"
              style={{
                bottom: '40px',
                background: 'linear-gradient(145deg, #3a3020 0%, #1e1a0e 40%, #0d0b06 100%)',
                boxShadow: '0 0 0 1px rgba(213,144,10,0.25), 0 0 50px rgba(213,144,10,0.2), inset 0 1px 0 rgba(255,255,255,0.04)',
              }}
            >
              {/* grid lines on cube face */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(213,144,10,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(213,144,10,0.08) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
              <span
                className="relative z-10 text-[#F5A623] font-extrabold"
                style={{
                  fontSize: '68px',
                  letterSpacing: '-2px',
                  textShadow: '0 0 30px rgba(213,144,10,0.9), 0 0 60px rgba(213,144,10,0.4)',
                }}
              >
                AI
              </span>
            </div>

            {/* Amber glow under cube */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-[165px] h-2 rounded-full"
              style={{
                bottom: '36px',
                background: '#F5A623',
                filter: 'blur(6px)',
                boxShadow: '0 0 20px 6px rgba(213,144,10,0.55)',
              }}
            />

            {/* Platform layer 1 (top-most, narrowest) */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-[168px] h-4"
              style={{
                bottom: '26px',
                background: 'linear-gradient(180deg, #251f10 0%, #131008 100%)',
                borderRadius: '4px 4px 2px 2px',
              }}
            />
            {/* Platform layer 2 */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-[195px] h-[18px]"
              style={{
                bottom: '14px',
                background: 'linear-gradient(180deg, #2e2518 0%, #1a1408 100%)',
                borderRadius: '5px 5px 2px 2px',
                boxShadow: '0 0 20px rgba(213,144,10,0.2)',
              }}
            />
            {/* Platform layer 3 (widest, base) */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-[220px] h-[18px]"
              style={{
                bottom: '0px',
                background: 'linear-gradient(180deg, #3a3020 0%, #1e1a0e 100%)',
                borderRadius: '6px 6px 3px 3px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4), 0 0 30px rgba(213,144,10,0.3)',
              }}
            />
          </div>
        </div>
      </section>

      {/* ── TOOLS GRID ── */}
      <section className="max-w-7xl mx-auto mt-[52px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-white rounded-[20px] border border-[#EDEBE5] transition-all duration-200 hover:-translate-y-0.5 cursor-default"
              style={{
                padding: '26px 28px 22px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  '0 8px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(213,144,10,0.12)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  '0 1px 4px rgba(0,0,0,0.04)';
              }}
            >
              {/* Card header */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-[50px] h-[50px] bg-[#FEF3DC] rounded-[13px] flex items-center justify-center border border-[#F5D98A]">
                  {tool.icon}
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="inline-block px-[11px] py-1 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase border border-[#F5C97A] bg-[#FEF3DC] text-[#D4900A]">
                    {tool.status}
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.12em] text-[#9CA3AF] uppercase">
                    {tool.type}
                  </span>
                </div>
              </div>

              <h3 className="text-[22px] font-extrabold text-[#0D0D0D] mb-2.5 leading-[1.1]">
                {tool.name}
              </h3>
              <p
                className="text-[14px] text-[#6B7280] leading-[1.65] mb-[26px]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {tool.desc}
              </p>

              {/* Card footer */}
              <div className="flex items-center justify-between border-t border-[#F0EDE6] pt-4">
                <div className="flex items-center gap-[7px] text-[10px] font-bold tracking-[0.13em] text-[#F5A623] uppercase">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-[#F5A623]" strokeWidth="2.2">
                    <polyline points="4 17 10 11 4 5" />
                    <line x1="12" y1="19" x2="20" y2="19" />
                  </svg>
                  Proprietary Logic
                </div>
                <div className="flex gap-[5px]">
                  <div className="w-[5px] h-[5px] rounded-full bg-[#D8D4CC]" />
                  <div className="w-[5px] h-[5px] rounded-full bg-[#D8D4CC]" />
                  <div className="w-[5px] h-[5px] rounded-full bg-[#BDB9B1]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM BAR ── */}
      <section className="max-w-7xl mx-auto mt-[18px] px-6">
        <div
          className="bg-white rounded-[20px] px-6 lg:px-9 py-7 grid grid-cols-2 lg:grid-cols-4 gap-5 border border-[#EDEBE5]"
          style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
        >
          {bottomItems.map((item) => (
            <div key={item.title} className="flex items-start gap-3.5">
              <div className="w-[42px] h-[42px] bg-[#FEF3DC] rounded-[11px] flex items-center justify-center flex-shrink-0 border border-[#F5D98A]">
                {item.icon}
              </div>
              <div>
                <div className="text-[13px] font-bold text-[#111] mb-1.5">{item.title}</div>
                <div
                  className="text-[12px] text-[#9CA3AF] leading-[1.55]"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
