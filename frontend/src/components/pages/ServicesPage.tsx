'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Search, Compass, PenLine, Code2, Rocket } from 'lucide-react';
import ContactForm from '@/components/sections/landing/ContactForm';

// ─── Data ────────────────────────────────────────────────────────────────────

const processSteps = [
  { num: '01', title: 'Research & Align', desc: 'We dive deep into your vision, challenges, and growth opportunities.', Icon: Search },
  { num: '02', title: 'Strategy & Roadmapping', desc: 'We build a focused execution plan with clear technical direction.', Icon: Compass },
  { num: '03', title: 'Experience & Prototyping', desc: 'We craft seamless user experiences and validate ideas early.', Icon: PenLine },
  { num: '04', title: 'Development & Deployment', desc: 'We engineer, integrate, and optimize solutions for real-world performance.', Icon: Code2 },
  { num: '05', title: 'Growth & Optimization', desc: 'We launch, refine, and scale your product for long-term success.', Icon: Rocket },
];

const testimonials = [
  {
    text: "I've worked with many developers, but this was the first time a project felt truly stress-free. They took our complex requirements and delivered a high-performance app in record time. The UI is simple, the backend is solid, and the support since launch has been incredible.",
    name: 'Enterprise Client', role: 'Mobile App Project', initials: 'EC',
  },
  {
    text: "It's refreshing to work with a team that actually speaks your language. No confusing jargon, just honest advice and high-quality engineering. They felt more like a partner in our success than just another service provider.",
    name: 'Startup Founder', role: 'Web Engineering Client', initials: 'SF',
  },
  {
    text: "We had so many small, manual tasks that were eating up our team's time. The AI automation tools built by the team completely changed that. Now, everything runs on autopilot, and we can finally focus on growing our brand instead of just managing it.",
    name: 'Operations Manager', role: 'AI Automation Client', initials: 'OM',
  },
];

// ─── SVG Components ──────────────────────────────────────────────────────────

function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto">
      {/* Floating stat cards */}
      <div className="absolute z-10 bg-white rounded-2xl px-[18px] py-3 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-[#E8C547]/15" style={{ top: '8%', left: '-5%' }}>
        <div className="text-[0.62rem] font-semibold uppercase tracking-[1.2px] text-[#aaa] mb-1 flex items-center gap-1.5">
          <motion.span
            className="w-2 h-2 bg-[#22c55e] rounded-full inline-block"
            animate={{ boxShadow: ['0 0 0 0 rgba(34,197,94,0.4)', '0 0 0 6px rgba(34,197,94,0)', '0 0 0 0 rgba(34,197,94,0.4)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          AI Agent
        </div>
        <div className="text-2xl font-extrabold text-[#1a1a1a] tracking-tight">24/7</div>
        <div className="text-[0.68rem] text-[#6b6b6b] font-medium mt-0.5">Digital Employee</div>
      </div>

      <div className="absolute z-10 bg-white rounded-2xl px-[18px] py-3 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-[#E8C547]/15" style={{ top: '10%', right: '0%' }}>
        <div className="text-[0.62rem] font-semibold uppercase tracking-[1.2px] text-[#aaa] mb-1">Automation</div>
        <div className="text-2xl font-extrabold text-[#E8C547] tracking-tight">Workflows</div>
        <div className="text-[0.68rem] text-[#6b6b6b] font-medium mt-0.5">98% Automated</div>
      </div>

      <div className="absolute z-10 bg-white rounded-2xl px-[18px] py-3 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-[#E8C547]/15" style={{ bottom: '30%', left: '2%' }}>
        <div className="text-[0.62rem] font-semibold uppercase tracking-[1.2px] text-[#aaa] mb-1">Performance</div>
        <div className="text-2xl font-extrabold text-[#1a1a1a] tracking-tight">10<span className="text-[#E8C547]">x</span></div>
        <div className="text-[0.68rem] text-[#6b6b6b] font-medium mt-0.5">Faster Delivery</div>
      </div>

      <div className="absolute z-10 bg-white rounded-2xl px-[18px] py-3 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-[#E8C547]/15" style={{ bottom: '20%', right: '-2%' }}>
        <div className="text-[0.62rem] font-semibold uppercase tracking-[1.2px] text-[#aaa] mb-1">Growth</div>
        <div className="text-2xl font-extrabold text-[#1a1a1a] tracking-tight">+<span className="text-[#E8C547]">300%</span></div>
        <div className="text-[0.68rem] text-[#6b6b6b] font-medium mt-0.5">Revenue Impact</div>
      </div>

      <motion.svg
        viewBox="0 0 480 460"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[460px] block mx-auto"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <defs>
          <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E8C547" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#faf8f5" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="faceTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="100%" stopColor="#0e0e0e" />
          </linearGradient>
          <linearGradient id="faceLeft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#111" />
          </linearGradient>
          <linearGradient id="faceRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0d0d0d" />
            <stop offset="100%" stopColor="#181818" />
          </linearGradient>
          <filter id="heroShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="20" stdDeviation="25" floodColor="#E8C547" floodOpacity="0.22" />
          </filter>
          <filter id="innerGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 h12 M28 20 h12 M20 0 v12 M20 28 v12" stroke="#E8C547" strokeWidth="0.5" strokeOpacity="0.3" fill="none" />
            <circle cx="20" cy="20" r="2" fill="#E8C547" fillOpacity="0.3" />
          </pattern>
        </defs>
        <ellipse cx="240" cy="300" rx="210" ry="90" fill="url(#bgGlow)" />
        <ellipse cx="240" cy="370" rx="165" ry="28" fill="#1a1a1a" opacity="0.35" />
        <polygon points="80,340 240,298 400,340 240,382" fill="#111" stroke="#E8C547" strokeWidth="0.5" strokeOpacity="0.3" />
        <polygon points="80,340 240,382 240,402 80,360" fill="#0d0d0d" />
        <polygon points="400,340 240,382 240,402 400,360" fill="#141414" />
        <line x1="80" y1="340" x2="240" y2="298" stroke="#E8C547" strokeWidth="0.6" strokeOpacity="0.4" />
        <line x1="240" y1="298" x2="400" y2="340" stroke="#E8C547" strokeWidth="0.6" strokeOpacity="0.4" />
        <g filter="url(#heroShadow)">
          <polygon points="140,178 240,128 340,178 240,228" fill="url(#faceTop)" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.5" />
          <polygon points="140,178 240,228 240,318 140,268" fill="url(#faceLeft)" stroke="#2a2a2a" strokeWidth="0.5" />
          <polygon points="340,178 240,228 240,318 340,268" fill="url(#faceRight)" stroke="#1a1a1a" strokeWidth="0.5" />
        </g>
        <polygon points="140,178 240,128 340,178 240,228" fill="url(#circuit)" opacity="0.6" />
        <line x1="140" y1="178" x2="240" y2="128" stroke="#E8C547" strokeWidth="1.5" strokeOpacity="0.7" />
        <line x1="240" y1="128" x2="340" y2="178" stroke="#E8C547" strokeWidth="1.5" strokeOpacity="0.7" />
        <line x1="340" y1="178" x2="240" y2="228" stroke="#E8C547" strokeWidth="0.8" strokeOpacity="0.4" />
        <line x1="140" y1="178" x2="240" y2="228" stroke="#E8C547" strokeWidth="0.8" strokeOpacity="0.4" />
        <line x1="140" y1="178" x2="140" y2="268" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="340" y1="178" x2="340" y2="268" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="240" y1="228" x2="240" y2="318" stroke="#E8C547" strokeWidth="0.8" strokeOpacity="0.35" />
        <line x1="140" y1="268" x2="240" y2="318" stroke="#E8C547" strokeWidth="0.8" strokeOpacity="0.35" />
        <line x1="340" y1="268" x2="240" y2="318" stroke="#E8C547" strokeWidth="0.8" strokeOpacity="0.35" />
        <ellipse cx="240" cy="140" rx="60" ry="20" fill="#E8C547" opacity="0.18" filter="url(#innerGlow)" />
        <text x="222" y="208" fontFamily="Inter,sans-serif" fontSize="44" fontWeight="800" fill="#E8C547" opacity="0.9">Z</text>
        <circle cx="240" cy="220" r="140" fill="none" stroke="#E8C547" strokeWidth="0.4" strokeDasharray="4 8" strokeOpacity="0.25" />
        <circle cx="105" cy="175" r="7" fill="#1a1a1a" stroke="#E8C547" strokeWidth="1.5" />
        <circle cx="106" cy="175" r="3" fill="#E8C547" opacity="0.8" />
        <circle cx="375" cy="165" r="7" fill="#1a1a1a" stroke="#E8C547" strokeWidth="1.5" />
        <circle cx="376" cy="165" r="3" fill="#E8C547" opacity="0.8" />
        <circle cx="148" cy="92" r="6" fill="#1a1a1a" stroke="#E8C547" strokeWidth="1.2" />
        <circle cx="149" cy="92" r="2.5" fill="#E8C547" opacity="0.7" />
        <circle cx="330" cy="85" r="6" fill="#1a1a1a" stroke="#E8C547" strokeWidth="1.2" />
        <circle cx="331" cy="85" r="2.5" fill="#E8C547" opacity="0.7" />
        <circle cx="240" cy="58" r="8" fill="#1a1a1a" stroke="#E8C547" strokeWidth="1.5" />
        <circle cx="241" cy="58" r="3.5" fill="#E8C547" opacity="0.85" />
        <line x1="113" y1="175" x2="140" y2="178" stroke="#E8C547" strokeWidth="0.7" strokeOpacity="0.4" />
        <line x1="368" y1="165" x2="340" y2="178" stroke="#E8C547" strokeWidth="0.7" strokeOpacity="0.4" />
        <line x1="153" y1="96" x2="190" y2="150" stroke="#E8C547" strokeWidth="0.7" strokeOpacity="0.3" />
        <line x1="325" y1="89" x2="295" y2="150" stroke="#E8C547" strokeWidth="0.7" strokeOpacity="0.3" />
        <line x1="240" y1="66" x2="240" y2="128" stroke="#E8C547" strokeWidth="0.7" strokeOpacity="0.4" />
        <circle cx="165" cy="130" r="2" fill="#E8C547" opacity="0.45" />
        <circle cx="310" cy="115" r="2" fill="#E8C547" opacity="0.45" />
        <circle cx="185" cy="310" r="1.5" fill="#E8C547" opacity="0.3" />
        <circle cx="300" cy="305" r="1.5" fill="#E8C547" opacity="0.3" />
        <circle cx="130" cy="250" r="1.5" fill="#E8C547" opacity="0.25" />
        <circle cx="355" cy="245" r="1.5" fill="#E8C547" opacity="0.25" />
      </motion.svg>
    </div>
  );
}

function AiAutomationSvg() {
  return (
    <svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" className="w-[90%] max-w-[360px] relative z-[2]">
      <defs>
        <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8C547" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#E8C547" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <line x1="75" y1="110" x2="130" y2="70" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 4" />
      <line x1="75" y1="110" x2="130" y2="110" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="75" y1="110" x2="130" y2="150" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 4" />
      <line x1="175" y1="70" x2="230" y2="110" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="175" y1="110" x2="230" y2="110" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.6" />
      <line x1="175" y1="150" x2="230" y2="110" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="275" y1="110" x2="310" y2="110" stroke="#E8C547" strokeWidth="1.5" strokeOpacity="0.6" />
      <rect x="40" y="90" width="70" height="40" rx="8" fill="url(#nodeGrad)" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.6" />
      <text x="75" y="115" textAnchor="middle" fill="#E8C547" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="600">Trigger</text>
      <rect x="130" y="50" width="45" height="40" rx="8" fill="url(#nodeGrad)" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.5" />
      <text x="152" y="75" textAnchor="middle" fill="#E8C547" fontFamily="Inter,sans-serif" fontSize="9">Filter</text>
      <rect x="130" y="90" width="45" height="40" rx="8" fill="#E8C547" fillOpacity="0.2" stroke="#E8C547" strokeWidth="1.5" strokeOpacity="0.8" />
      <text x="152" y="115" textAnchor="middle" fill="#E8C547" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700">AI</text>
      <rect x="130" y="130" width="45" height="40" rx="8" fill="url(#nodeGrad)" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.5" />
      <text x="152" y="155" textAnchor="middle" fill="#E8C547" fontFamily="Inter,sans-serif" fontSize="9">Route</text>
      <rect x="230" y="88" width="46" height="44" rx="10" fill="url(#nodeGrad)" stroke="#E8C547" strokeWidth="1.2" strokeOpacity="0.6" />
      <text x="253" y="113" textAnchor="middle" fill="#E8C547" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="600">Execute</text>
      <circle cx="320" cy="110" r="18" fill="url(#nodeGrad)" stroke="#E8C547" strokeWidth="1.5" strokeOpacity="0.7" />
      <text x="320" y="114" textAnchor="middle" fill="#E8C547" fontFamily="Inter,sans-serif" fontSize="8" fontWeight="700">Done</text>
    </svg>
  );
}

function WebEngineeringSvg() {
  return (
    <svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" className="w-[90%] max-w-[360px] relative z-[2]">
      <rect x="30" y="25" width="300" height="190" rx="12" fill="#111" stroke="#E8C547" strokeWidth="0.8" strokeOpacity="0.4" />
      <rect x="30" y="25" width="300" height="32" rx="12" fill="#1a1a1a" stroke="#E8C547" strokeWidth="0.8" strokeOpacity="0.3" />
      <circle cx="52" cy="41" r="5" fill="#ff5f57" opacity="0.7" />
      <circle cx="68" cy="41" r="5" fill="#febc2e" opacity="0.7" />
      <circle cx="84" cy="41" r="5" fill="#28c840" opacity="0.7" />
      <rect x="100" y="32" width="180" height="18" rx="5" fill="#222" stroke="#E8C547" strokeWidth="0.5" strokeOpacity="0.3" />
      <rect x="44" y="72" width="120" height="12" rx="3" fill="#E8C547" fillOpacity="0.25" />
      <rect x="44" y="92" width="180" height="6" rx="2" fill="#ffffff" fillOpacity="0.08" />
      <rect x="44" y="104" width="150" height="6" rx="2" fill="#ffffff" fillOpacity="0.06" />
      <rect x="44" y="116" width="80" height="6" rx="2" fill="#ffffff" fillOpacity="0.06" />
      <rect x="44" y="140" width="60" height="24" rx="6" fill="#E8C547" fillOpacity="0.9" />
      <text x="74" y="156" textAnchor="middle" fill="#111" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700">Get Started</text>
      <rect x="195" y="70" width="120" height="100" rx="8" fill="#1e1e1e" stroke="#E8C547" strokeWidth="0.5" strokeOpacity="0.3" />
      <circle cx="255" cy="110" r="25" fill="#E8C547" fillOpacity="0.07" stroke="#E8C547" strokeWidth="0.5" strokeOpacity="0.4" />
      <text x="255" y="115" textAnchor="middle" fill="#E8C547" fillOpacity="0.5" fontFamily="Inter,sans-serif" fontSize="22">⬡</text>
      <rect x="260" y="170" width="62" height="36" rx="8" fill="#fff" fillOpacity="0.95" />
      <text x="291" y="184" textAnchor="middle" fill="#111" fontFamily="Inter,sans-serif" fontSize="7" fontWeight="600">Lighthouse</text>
      <text x="291" y="198" textAnchor="middle" fill="#22c55e" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="800">98</text>
    </svg>
  );
}

function MobileAppSvg() {
  return (
    <svg viewBox="0 0 360 230" xmlns="http://www.w3.org/2000/svg" className="w-[90%] max-w-[360px] relative z-[2]">
      <rect x="155" y="20" width="80" height="155" rx="14" fill="#111" stroke="#E8C547" strokeWidth="0.8" strokeOpacity="0.35" />
      <rect x="160" y="32" width="70" height="120" rx="8" fill="#1a1a1a" />
      <rect x="168" y="40" width="54" height="8" rx="2" fill="#E8C547" fillOpacity="0.3" />
      <rect x="168" y="54" width="54" height="60" rx="4" fill="#222" stroke="#E8C547" strokeWidth="0.4" strokeOpacity="0.3" />
      <rect x="168" y="120" width="25" height="6" rx="2" fill="#E8C547" fillOpacity="0.2" />
      <rect x="197" y="120" width="25" height="6" rx="2" fill="#E8C547" fillOpacity="0.15" />
      <rect x="110" y="38" width="86" height="162" rx="16" fill="#0e0e0e" stroke="#E8C547" strokeWidth="1.2" strokeOpacity="0.55" />
      <rect x="116" y="52" width="74" height="130" rx="9" fill="#181818" />
      <rect x="138" y="44" width="30" height="8" rx="4" fill="#1a1a1a" />
      <rect x="122" y="58" width="62" height="8" rx="2" fill="#E8C547" fillOpacity="0.4" />
      <rect x="122" y="72" width="62" height="50" rx="6" fill="#1e1e1e" stroke="#E8C547" strokeWidth="0.4" strokeOpacity="0.3" />
      <circle cx="153" cy="92" r="14" fill="#E8C547" fillOpacity="0.1" stroke="#E8C547" strokeWidth="0.8" strokeOpacity="0.5" />
      <text x="153" y="96" textAnchor="middle" fill="#E8C547" fillOpacity="0.6" fontFamily="Inter,sans-serif" fontSize="16">Z</text>
      <rect x="122" y="130" width="62" height="5" rx="2" fill="#E8C547" fillOpacity="0.15" />
      <rect x="122" y="141" width="45" height="5" rx="2" fill="#fff" fillOpacity="0.05" />
      <rect x="122" y="155" width="30" height="18" rx="6" fill="#E8C547" fillOpacity="0.85" />
      <text x="137" y="168" textAnchor="middle" fill="#111" fontFamily="Inter,sans-serif" fontSize="7" fontWeight="700">Open</text>
      <rect x="205" y="145" width="76" height="42" rx="10" fill="#fff" fillOpacity="0.95" />
      <text x="243" y="160" textAnchor="middle" fill="#111" fontFamily="Inter,sans-serif" fontSize="7" fontWeight="600">Downloads</text>
      <text x="243" y="178" textAnchor="middle" fill="#E8C547" fontFamily="Inter,sans-serif" fontSize="14" fontWeight="800">250K+</text>
    </svg>
  );
}

function BrandingSvg() {
  return (
    <svg viewBox="0 0 360 230" xmlns="http://www.w3.org/2000/svg" className="w-[90%] max-w-[360px] relative z-[2]">
      <rect x="60" y="100" width="120" height="80" rx="12" fill="#1a1a1a" stroke="#E8C547" strokeWidth="0.6" strokeOpacity="0.3" transform="rotate(-8 120 140)" />
      <rect x="80" y="85" width="120" height="80" rx="12" fill="#141414" stroke="#E8C547" strokeWidth="0.8" strokeOpacity="0.5" transform="rotate(-3 140 125)" />
      <rect x="100" y="75" width="120" height="80" rx="12" fill="#111" stroke="#E8C547" strokeWidth="1.2" strokeOpacity="0.7" />
      <rect x="108" y="83" width="34" height="34" rx="8" fill="#E8C547" fillOpacity="0.15" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.6" />
      <text x="125" y="105" textAnchor="middle" fill="#E8C547" fontFamily="Inter,sans-serif" fontSize="18" fontWeight="800">Z</text>
      <rect x="108" y="124" width="100" height="6" rx="2" fill="#E8C547" fillOpacity="0.35" />
      <rect x="108" y="136" width="70" height="4" rx="2" fill="#fff" fillOpacity="0.1" />
      <rect x="108" y="146" width="50" height="4" rx="2" fill="#fff" fillOpacity="0.07" />
      <circle cx="260" cy="100" r="28" fill="#E8C547" opacity="0.85" />
      <circle cx="295" cy="118" r="20" fill="#1a1a1a" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.5" />
      <circle cx="280" cy="145" r="14" fill="#2a2a2a" stroke="#E8C547" strokeWidth="0.8" strokeOpacity="0.4" />
      <circle cx="310" cy="150" r="10" fill="#111" stroke="#E8C547" strokeWidth="0.8" strokeOpacity="0.3" />
      <rect x="215" y="68" width="70" height="48" rx="10" fill="#fff" fillOpacity="0.95" />
      <text x="250" y="86" textAnchor="middle" fill="#111" fontFamily="Inter,sans-serif" fontSize="7.5" fontWeight="600">Brand Impact</text>
      <text x="250" y="104" textAnchor="middle" fill="#22c55e" fontFamily="Inter,sans-serif" fontSize="16" fontWeight="800">+87%</text>
    </svg>
  );
}

function AiAgentsSvg() {
  return (
    <svg viewBox="0 0 360 230" xmlns="http://www.w3.org/2000/svg" className="w-[90%] max-w-[360px] relative z-[2]">
      <circle cx="180" cy="115" r="36" fill="#1a1a1a" stroke="#E8C547" strokeWidth="1.5" strokeOpacity="0.8" />
      <circle cx="180" cy="115" r="26" fill="#111" stroke="#E8C547" strokeWidth="0.8" strokeOpacity="0.5" />
      <text x="180" y="121" textAnchor="middle" fill="#E8C547" fontFamily="Inter,sans-serif" fontSize="20" fontWeight="800">AI</text>
      <line x1="180" y1="79" x2="180" y2="44" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3 4" />
      <circle cx="180" cy="38" r="12" fill="#1e1e1e" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.6" />
      <text x="180" y="42" textAnchor="middle" fill="#E8C547" fontFamily="Inter,sans-serif" fontSize="8">Find</text>
      <line x1="152" y1="96" x2="112" y2="72" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3 4" />
      <circle cx="104" cy="67" r="14" fill="#1e1e1e" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.6" />
      <text x="104" y="71" textAnchor="middle" fill="#E8C547" fontFamily="Inter,sans-serif" fontSize="8">Plan</text>
      <line x1="144" y1="115" x2="98" y2="115" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3 4" />
      <circle cx="84" cy="115" r="14" fill="#1e1e1e" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.6" />
      <text x="84" y="119" textAnchor="middle" fill="#E8C547" fontFamily="Inter,sans-serif" fontSize="8">Act</text>
      <line x1="152" y1="134" x2="112" y2="160" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3 4" />
      <circle cx="104" cy="166" r="14" fill="#1e1e1e" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.6" />
      <text x="104" y="170" textAnchor="middle" fill="#E8C547" fontFamily="Inter,sans-serif" fontSize="8">Store</text>
      <line x1="216" y1="115" x2="262" y2="115" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3 4" />
      <circle cx="276" cy="115" r="14" fill="#1e1e1e" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.6" />
      <text x="276" y="119" textAnchor="middle" fill="#E8C547" fontFamily="Inter,sans-serif" fontSize="8">Send</text>
      <line x1="208" y1="96" x2="250" y2="72" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3 4" />
      <circle cx="258" cy="66" r="14" fill="#1e1e1e" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.6" />
      <text x="258" y="70" textAnchor="middle" fill="#E8C547" fontFamily="Inter,sans-serif" fontSize="8">Code</text>
      <rect x="215" y="155" width="80" height="44" rx="10" fill="#fff" fillOpacity="0.95" />
      <text x="255" y="172" textAnchor="middle" fill="#111" fontFamily="Inter,sans-serif" fontSize="7.5" fontWeight="600">Tasks Completed</text>
      <text x="255" y="189" textAnchor="middle" fill="#E8C547" fontFamily="Inter,sans-serif" fontSize="14" fontWeight="800">10K+</text>
    </svg>
  );
}

function WebsiteUpgradesSvg() {
  return (
    <svg viewBox="0 0 360 230" xmlns="http://www.w3.org/2000/svg" className="w-[90%] max-w-[360px] relative z-[2]">
      <rect x="30" y="20" width="300" height="190" rx="12" fill="#111" stroke="#E8C547" strokeWidth="0.8" strokeOpacity="0.4" />
      <rect x="30" y="20" width="300" height="28" rx="12" fill="#1a1a1a" />
      <circle cx="50" cy="34" r="4" fill="#ff5f57" opacity="0.7" />
      <circle cx="64" cy="34" r="4" fill="#febc2e" opacity="0.7" />
      <circle cx="78" cy="34" r="4" fill="#28c840" opacity="0.7" />
      <rect x="44" y="60" width="100" height="8" rx="3" fill="#E8C547" fillOpacity="0.3" />
      <rect x="44" y="76" width="160" height="5" rx="2" fill="#fff" fillOpacity="0.08" />
      <rect x="44" y="87" width="130" height="5" rx="2" fill="#fff" fillOpacity="0.06" />
      <rect x="44" y="98" width="90" height="5" rx="2" fill="#fff" fillOpacity="0.05" />
      <rect x="44" y="115" width="70" height="22" rx="6" fill="#E8C547" fillOpacity="0.9" />
      <text x="79" y="130" textAnchor="middle" fill="#111" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700">Upgrade Now</text>
      <g>
        <rect x="190" y="55" width="120" height="90" rx="8" fill="#1a1a1a" stroke="#E8C547" strokeWidth="0.5" strokeOpacity="0.35" />
        <rect x="198" y="63" width="104" height="6" rx="2" fill="#E8C547" fillOpacity="0.2" />
        <rect x="198" y="75" width="80" height="4" rx="2" fill="#fff" fillOpacity="0.07" />
        <rect x="198" y="85" width="95" height="4" rx="2" fill="#fff" fillOpacity="0.05" />
        <rect x="198" y="95" width="60" height="4" rx="2" fill="#fff" fillOpacity="0.05" />
        <line x1="198" y1="110" x2="302" y2="110" stroke="#E8C547" strokeWidth="0.4" strokeOpacity="0.2" />
        <rect x="198" y="118" width="50" height="18" rx="5" fill="#E8C547" fillOpacity="0.15" stroke="#E8C547" strokeWidth="0.5" strokeOpacity="0.4" />
        <text x="223" y="130" textAnchor="middle" fill="#E8C547" fontFamily="Inter,sans-serif" fontSize="7" fontWeight="600">Modern</text>
      </g>
      <g transform="translate(30,0)">
        <line x1="170" y1="95" x2="188" y2="95" stroke="#E8C547" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3 3" />
        <polygon points="186,91 192,95 186,99" fill="#E8C547" fillOpacity="0.6" />
      </g>
      <rect x="44" y="152" width="70" height="28" rx="6" fill="#fff" fillOpacity="0.95" />
      <text x="79" y="163" textAnchor="middle" fill="#111" fontFamily="Inter,sans-serif" fontSize="6.5" fontWeight="600">Performance</text>
      <text x="79" y="175" textAnchor="middle" fill="#22c55e" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="800">+40%</text>
      <rect x="125" y="152" width="65" height="28" rx="6" fill="#fff" fillOpacity="0.95" />
      <text x="157" y="163" textAnchor="middle" fill="#111" fontFamily="Inter,sans-serif" fontSize="6.5" fontWeight="600">Bounce Rate</text>
      <text x="157" y="175" textAnchor="middle" fill="#E8C547" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="800">-35%</text>
    </svg>
  );
}

function ConversionAuditSvg() {
  return (
    <svg viewBox="0 0 360 230" xmlns="http://www.w3.org/2000/svg" className="w-[90%] max-w-[360px] relative z-[2]">
      <rect x="30" y="20" width="300" height="190" rx="12" fill="#111" stroke="#E8C547" strokeWidth="0.8" strokeOpacity="0.4" />
      <rect x="44" y="36" width="272" height="14" rx="4" fill="#1e1e1e" stroke="#E8C547" strokeWidth="0.4" strokeOpacity="0.25" />
      <rect x="44" y="36" width="190" height="14" rx="4" fill="#E8C547" fillOpacity="0.18" />
      <text x="139" y="47" textAnchor="middle" fill="#E8C547" fontFamily="Inter,sans-serif" fontSize="7" fontWeight="700">Funnel Progress</text>
      <rect x="44" y="60" width="272" height="18" rx="5" fill="#1e1e1e" stroke="#E8C547" strokeWidth="0.4" strokeOpacity="0.2" />
      <rect x="44" y="60" width="240" height="18" rx="5" fill="#E8C547" fillOpacity="0.22" />
      <text x="58" y="73" fill="#E8C547" fontFamily="Inter,sans-serif" fontSize="7.5" fontWeight="600">Visit</text>
      <text x="290" y="73" textAnchor="end" fill="#aaa" fontFamily="Inter,sans-serif" fontSize="7">12,400</text>
      <rect x="44" y="84" width="272" height="18" rx="5" fill="#1e1e1e" stroke="#E8C547" strokeWidth="0.4" strokeOpacity="0.2" />
      <rect x="44" y="84" width="180" height="18" rx="5" fill="#E8C547" fillOpacity="0.16" />
      <text x="58" y="97" fill="#E8C547" fontFamily="Inter,sans-serif" fontSize="7.5" fontWeight="600">Engaged</text>
      <text x="290" y="97" textAnchor="end" fill="#aaa" fontFamily="Inter,sans-serif" fontSize="7">8,100</text>
      <rect x="44" y="108" width="272" height="18" rx="5" fill="#1e1e1e" stroke="#E8C547" strokeWidth="0.4" strokeOpacity="0.2" />
      <rect x="44" y="108" width="110" height="18" rx="5" fill="#E8C547" fillOpacity="0.12" />
      <text x="58" y="121" fill="#E8C547" fontFamily="Inter,sans-serif" fontSize="7.5" fontWeight="600">Add to Cart</text>
      <text x="290" y="121" textAnchor="end" fill="#aaa" fontFamily="Inter,sans-serif" fontSize="7">4,900</text>
      <rect x="44" y="132" width="272" height="18" rx="5" fill="#1e1e1e" stroke="#E8C547" strokeWidth="0.4" strokeOpacity="0.2" />
      <rect x="44" y="132" width="60" height="18" rx="5" fill="#E8C547" fillOpacity="0.08" />
      <text x="58" y="145" fill="#E8C547" fontFamily="Inter,sans-serif" fontSize="7.5" fontWeight="600">Checkout</text>
      <text x="290" y="145" textAnchor="end" fill="#aaa" fontFamily="Inter,sans-serif" fontSize="7">2,100</text>
      <rect x="44" y="156" width="272" height="18" rx="5" fill="#1e1e1e" stroke="#E8C547" strokeWidth="0.4" strokeOpacity="0.2" />
      <rect x="44" y="156" width="30" height="18" rx="5" fill="#22c55e" fillOpacity="0.35" />
      <text x="58" y="169" fill="#22c55e" fontFamily="Inter,sans-serif" fontSize="7.5" fontWeight="700">Convert</text>
      <text x="290" y="169" textAnchor="end" fill="#22c55e" fontFamily="Inter,sans-serif" fontSize="7" fontWeight="700">870</text>
      <rect x="190" y="178" width="80" height="22" rx="6" fill="#fff" fillOpacity="0.95" />
      <text x="230" y="188" textAnchor="middle" fill="#111" fontFamily="Inter,sans-serif" fontSize="6.5" fontWeight="600">CVR Lift</text>
      <text x="230" y="197" textAnchor="middle" fill="#22c55e" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="800">+2.4x</text>
    </svg>
  );
}

function SaasSvg() {
  return (
    <svg viewBox="0 0 360 230" xmlns="http://www.w3.org/2000/svg" className="w-[90%] max-w-[360px] relative z-[2]">
      <rect x="30" y="28" width="300" height="185" rx="12" fill="#111" stroke="#E8C547" strokeWidth="0.8" strokeOpacity="0.4" />
      <rect x="30" y="28" width="300" height="28" rx="12" fill="#1a1a1a" />
      <rect x="40" y="38" width="50" height="10" rx="3" fill="#E8C547" fillOpacity="0.7" />
      <rect x="96" y="38" width="40" height="10" rx="3" fill="#fff" fillOpacity="0.07" />
      <rect x="142" y="38" width="40" height="10" rx="3" fill="#fff" fillOpacity="0.07" />
      <rect x="42" y="70" width="190" height="100" rx="8" fill="#141414" stroke="#E8C547" strokeWidth="0.5" strokeOpacity="0.25" />
      <polyline points="52,150 82,130 112,140 142,100 172,115 202,80 222,90" fill="none" stroke="#E8C547" strokeWidth="1.5" strokeOpacity="0.7" />
      <polygon points="52,150 82,130 112,140 142,100 172,115 202,80 222,90 222,158 52,158" fill="#E8C547" fillOpacity="0.06" />
      <line x1="42" y1="120" x2="232" y2="120" stroke="#fff" strokeOpacity="0.04" strokeWidth="0.5" />
      <line x1="42" y1="100" x2="232" y2="100" stroke="#fff" strokeOpacity="0.04" strokeWidth="0.5" />
      <rect x="244" y="68" width="74" height="44" rx="8" fill="#1a1a1a" stroke="#E8C547" strokeWidth="0.6" strokeOpacity="0.35" />
      <text x="281" y="86" textAnchor="middle" fill="#E8C547" fontFamily="Inter,sans-serif" fontSize="16" fontWeight="800">+215%</text>
      <text x="281" y="102" textAnchor="middle" fill="#aaa" fontFamily="Inter,sans-serif" fontSize="8">MRR Growth</text>
      <rect x="244" y="120" width="74" height="44" rx="8" fill="#1a1a1a" stroke="#E8C547" strokeWidth="0.6" strokeOpacity="0.35" />
      <text x="281" y="138" textAnchor="middle" fill="#fff" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="800">99.9%</text>
      <text x="281" y="154" textAnchor="middle" fill="#aaa" fontFamily="Inter,sans-serif" fontSize="8">Uptime SLA</text>
      <rect x="42" y="178" width="52" height="26" rx="6" fill="#1a1a1a" stroke="#E8C547" strokeWidth="0.5" strokeOpacity="0.3" />
      <text x="68" y="195" textAnchor="middle" fill="#E8C547" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="700">SaaS</text>
      <rect x="100" y="178" width="72" height="26" rx="6" fill="#1a1a1a" stroke="#E8C547" strokeWidth="0.5" strokeOpacity="0.3" />
      <text x="136" y="195" textAnchor="middle" fill="#fff" fillOpacity="0.5" fontFamily="Inter,sans-serif" fontSize="9">Multi-tenant</text>
      <rect x="178" y="178" width="54" height="26" rx="6" fill="#1a1a1a" stroke="#E8C547" strokeWidth="0.5" strokeOpacity="0.3" />
      <text x="205" y="195" textAnchor="middle" fill="#fff" fillOpacity="0.5" fontFamily="Inter,sans-serif" fontSize="9">Secure</text>
    </svg>
  );
}

function CtaCubesSvg() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ width: 200, height: 200, display: 'block' }}>
      <defs>
        <linearGradient id="cubeTopA" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fde9b0" />
          <stop offset="100%" stopColor="#f5c842" />
        </linearGradient>
        <linearGradient id="cubeLeftA" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e8a820" />
          <stop offset="100%" stopColor="#d4900a" />
        </linearGradient>
        <linearGradient id="cubeRightA" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c97d08" />
          <stop offset="100%" stopColor="#b86e05" />
        </linearGradient>
        <linearGradient id="cubeTopB" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fde9b0" />
          <stop offset="100%" stopColor="#f5c842" />
        </linearGradient>
        <linearGradient id="cubeLeftB" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e8a820" />
          <stop offset="100%" stopColor="#d4900a" />
        </linearGradient>
        <linearGradient id="cubeRightB" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c97d08" />
          <stop offset="100%" stopColor="#b86e05" />
        </linearGradient>
        <filter id="ctaShadow">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#d4900a" floodOpacity="0.2" />
        </filter>
        <linearGradient id="fadeLeft" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fef3e2" stopOpacity="1" />
          <stop offset="40%" stopColor="#fef3e2" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g filter="url(#ctaShadow)" opacity="0.92">
        <polygon points="100,28 148,52 100,76 52,52" fill="url(#cubeTopA)" />
        <polygon points="52,52 100,76 100,118 52,94" fill="url(#cubeLeftA)" />
        <polygon points="148,52 100,76 100,118 148,94" fill="url(#cubeRightA)" />
        <line x1="100" y1="28" x2="148" y2="52" stroke="#fde9b0" strokeWidth="1" strokeOpacity="0.7" />
        <line x1="100" y1="28" x2="52" y2="52" stroke="#fde9b0" strokeWidth="1" strokeOpacity="0.5" />
      </g>
      <g filter="url(#ctaShadow)" opacity="0.75">
        <polygon points="66,102 102,120 66,138 30,120" fill="url(#cubeTopB)" />
        <polygon points="30,120 66,138 66,168 30,150" fill="url(#cubeLeftB)" />
        <polygon points="102,120 66,138 66,168 102,150" fill="url(#cubeRightB)" />
      </g>
      <g opacity="0.45">
        <polygon points="42,58 66,70 42,82 18,70" fill="url(#cubeTopA)" />
        <polygon points="18,70 42,82 42,104 18,92" fill="url(#cubeLeftA)" />
        <polygon points="66,70 42,82 42,104 66,92" fill="url(#cubeRightA)" />
      </g>
      <rect x="130" y="0" width="70" height="200" fill="url(#fadeLeft)" transform="scale(-1,1) translate(-200,0)" />
    </svg>
  );
}

// ─── Service Row ─────────────────────────────────────────────────────────────

interface ServiceRowProps {
  num: string;
  title: string;
  desc: string;
  bullets: string[];
  metric: { val: string; label: string };
  imgLeft: boolean;
  svg: React.ReactNode;
}

function ServiceRow({ num, title, desc, bullets, metric, imgLeft, svg }: ServiceRowProps) {
  console.log(num)
  const textCell = (
    <div className={`bg-[#faf8f5] px-10 lg:px-[52px] py-10 lg:py-[48px] flex flex-col justify-center border border-black/[0.06] ${num == '01' ? 'rounded-tl-xl' : 'rounded-tl-none'} ${num == '08' ? 'rounded-br-xl' : 'rounded-bl-none'}`}>
      <div className="text-[0.72rem] font-bold text-[#E8C547] tracking-[2px] mb-[14px]">{num}</div>
      <h3 className="text-[1.55rem] font-extrabold text-[#1a1a1a] tracking-tight mb-3">{title}</h3>
      <p className="text-[0.875rem] text-[#6b6b6b] leading-[1.7] mb-5 max-w-[340px]">{desc}</p>
      <ul className="flex flex-col gap-2">
        {bullets.map((b) => (
          <li key={b} className="flex items-center gap-2.5 text-[0.82rem] font-medium text-[#1a1a1a]">
            <span className="w-[18px] h-[18px] rounded-full flex-shrink-0 border border-[#E8C547] bg-[#E8C547]/15 flex items-center justify-center">
              <svg viewBox="0 0 10 10" className="w-2.5 h-2.5">
                <path d="M2 5l2.5 2.5L8 3" stroke="#E8C547" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );

  const imgCell = (
    <div className={`bg-[#111111] relative overflow-hidden min-h-[300px] flex items-center justify-center border border-black/[0.06] ${num == '01' ? 'rounded-tr-xl' : 'rounded-tr-none'} ${num == '08' ? 'rounded-bl-xl' : 'rounded-br-none'}`}
      style={{
        backgroundImage: 'linear-gradient(rgba(232,197,71,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(232,197,71,0.04) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(232,197,71,0.18) 0%, transparent 70%)', width: 200, height: 200, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      {svg}
      <div className="absolute bottom-6 left-6 bg-white rounded-xl px-4 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
        <div className="text-[1.2rem] font-extrabold text-[#1a1a1a] tracking-tight">{metric.val}</div>
        <div className="text-[0.62rem] font-semibold text-[#6b6b6b] uppercase tracking-[1px]">{metric.label}</div>
      </div>
    </div>
  );

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      {imgLeft ? <>{imgCell}{textCell}</> : <>{textCell}{imgCell}</>}
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <div className="bg-[#faf8f5] overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="pt-[70px] pb-[60px] min-h-[88vh] flex flex-col justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-[0.72rem] font-semibold text-[#6b6b6b] uppercase tracking-[1.5px] mb-6">
            <span className="w-1.5 h-1.5 bg-[#E8C547] rounded-full inline-block" />
            AI · Automation · Digital Products
          </div>
          <h1 className="text-[clamp(2.8rem,5vw,4.2rem)] font-extrabold leading-[1.08] tracking-[-2px] text-[#0e0e0e] mb-5" style={{ fontFamily: 'Sora'}}>
            From Vision To <span className="text-[#E8C547]">Digital Reality.</span>
          </h1>
          <p className="text-base text-[#6b6b6b] font-normal max-w-[420px] leading-[1.7] mb-9">
            We offer AI software development services that help your business to launch fast, stay secure, and remain ahead in the market.
          </p>
          <div className="flex gap-4 items-center flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E8C547] text-[#1a1a1a] text-[0.85rem] font-bold px-7 py-[13px] rounded-full transition-all duration-200 hover:bg-[#c9a82e] hover:-translate-y-px">
              Start Your Project →
            </Link>
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-[#1a1a1a] text-[0.85rem] font-semibold px-6 py-[13px] rounded-full border border-black/15 transition-all duration-200 hover:border-[#E8C547] hover:text-[#E8C547]">
              View Our Work →
            </Link>
          </div>
          <div className="mt-12 flex items-center gap-7 flex-wrap">
            <span className="text-[0.68rem] font-semibold uppercase tracking-[1.5px] text-[#aaa]">Trusted by innovative companies</span>
            <div className="flex gap-6 items-center flex-wrap">
              {['⬡ linear', '≋ RIPPLING', '◈ Webflow', '✦ tally', '⌭ Framer'].map((logo) => (
                <span key={logo} className="text-[0.8rem] font-bold text-[#bbb] tracking-tight">{logo}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <HeroIllustration />
        </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="py-16 lg:py-[80px] bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="text-[0.68rem] font-bold uppercase tracking-[2px] text-[#E8C547] mb-[14px]">What We Do</div>
        <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-extrabold tracking-[-1.5px] text-[#1a1a1a] leading-[1.1]">
          Turning Complex Ideas into Digital Solutions<br /><span className="text-[#E8C547]">With AI Integration</span>
        </h2>
        <p className="text-[0.95rem] text-[#6b6b6b] leading-[1.7] max-w-[500px] mx-auto mt-[14px]">
          From AI &amp; Custom Software Development Services to digital product engineering, we help startups and enterprises build, scale, and lead.
        </p>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="max-w-7xl mx-auto px-6">
        <ServiceRow
          num="01" title="AI-Automation"
          desc="Reduce manual efforts, streamline workflows, and boost productivity with custom AI solutions."
          bullets={['Workflow Automation', 'AI-Driven Integrations', 'Advanced Data Processing']}
          metric={{ val: '1,200+', label: 'Automation Saves Hours This Month' }}
          imgLeft={false}
          svg={<AiAutomationSvg />}
        />
        <ServiceRow
          num="02" title="Web Engineering"
          desc="Build fast, scalable websites and web apps using modern technologies and best practices."
          bullets={['Tailored Web Applications', 'Flexible & Scalable Design', 'Speed and Performance Focused']}
          metric={{ val: '98', label: 'Lighthouse Score Performance' }}
          imgLeft={true}
          svg={<WebEngineeringSvg />}
        />
        <ServiceRow
          num="03" title="Mobile App Development"
          desc="Design powerful, user-friendly and custom mobile apps for iOS and Android platforms."
          bullets={['Native iOS & Android Platforms', 'Seamless Cross-Platform Builds', 'High-Performance App Solutions']}
          metric={{ val: '250K+', label: 'Active Platform Downloads' }}
          imgLeft={false}
          svg={<MobileAppSvg />}
        />
        <ServiceRow
          num="04" title="Branding & Product Design"
          desc="Our team designs identities and digital products that connect, engage, and leave a lasting impact."
          bullets={['Brand Strategy & Identity', 'UI/UX Design', 'Product Design']}
          metric={{ val: '+87%', label: 'Increased Brand Recall' }}
          imgLeft={true}
          svg={<BrandingSvg />}
        />
        <ServiceRow
          num="05" title="AI-Agents & Workflow"
          desc="Build intelligent AI agents that think, act, and automate complex business processes."
          bullets={['Custom AI Agents', 'Workflow Automation', 'Smart Decision Systems']}
          metric={{ val: '10K+', label: 'Tasks Completed by AI Agents' }}
          imgLeft={false}
          svg={<AiAgentsSvg />}
        />
        <ServiceRow
          num="06" title="MVP Development"
          desc="Launch your core product quickly, validate your ideas, and scale efficiently with real user feedback."
          bullets={['Rapid Prototype Engineering', 'Core Feature Prioritisation', 'Lean Agile Deployment']}
          metric={{ val: '7-30', label: 'Days to Launch Your MVP' }}
          imgLeft={true}
          svg={<SaasSvg />}
        />
        <ServiceRow
          num="07" title="Website Upgrades"
          desc="Keep your digital presence fresh, modern, and perfectly aligned with your evolving business goals."
          bullets={['Legacy Redesign Systems', 'Feature & Content Iteration', 'Continuous Performance Tuning']}
          metric={{ val: '+40%', label: 'Performance Boost After Upgrade' }}
          imgLeft={false}
          svg={<WebsiteUpgradesSvg />}
        />
        <ServiceRow
          num="08" title="Conversion Audit"
          desc="Analyse user behaviour, eliminate friction points, and optimise your funnels to turn traffic into revenue."
          bullets={['User Behaviour Analytics', 'Friction Point Identification', 'Funnel Drop-off Optimisation']}
          metric={{ val: '+2.4x', label: 'Average Conversion Rate Lift' }}
          imgLeft={true}
          svg={<ConversionAuditSvg />}
        />
      </section>

      {/* ── PROCESS ── */}
      <section className="py-16 lg:py-[80px] bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="text-[0.68rem] font-bold uppercase tracking-[2px] text-[#E8C547] mb-[14px]">Our Process</div>
        <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-extrabold tracking-[-1.5px] text-[#1a1a1a] leading-[1.1]">
          Our Trusted Process To Bring<br />The Best Results To Life
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.num}
              className="flex flex-col items-center gap-3 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-7 -right-3 w-6 h-px bg-gradient-to-r from-[#E8C547]/50 to-transparent" />
              )}
              <div className="w-14 h-14 rounded-2xl bg-[#E8C547]/10 border border-[#E8C547]/25 flex items-center justify-center">
                <step.Icon size={22} className="text-[#E8C547]" strokeWidth={1.5} />
              </div>
              <div className="text-[0.65rem] font-bold tracking-[2px] text-[#E8C547]">{step.num}</div>
              <div className="text-[0.9rem] font-bold text-[#1a1a1a]">{step.title}</div>
              <p className="text-[0.75rem] text-[#6b6b6b] text-center leading-[1.6]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
        </div>
      </section>

      {/* ── FEATURED WORK ── */}
      <section className="py-16 lg:py-[80px] bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="text-[0.68rem] font-bold uppercase tracking-[2px] text-[#E8C547] mb-[14px]">Featured Work</div>
        <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-extrabold tracking-[-1.5px] text-[#1a1a1a] leading-[1.1]">
          Digital Projects That Showcase<br />Real-Time Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-left">
          {/* Card 1 */}
          <motion.div
            className="bg-[#111111] rounded-[20px] overflow-hidden border border-[#E8C547]/10 transition-transform duration-300 hover:-translate-y-1.5"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }}
          >
            <div className="h-[180px] bg-[#0e0e0e] relative overflow-hidden flex items-center justify-center"
              style={{ backgroundImage: 'linear-gradient(rgba(232,197,71,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(232,197,71,0.04) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
            >
              <svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" className="w-[85%] relative z-[2]">
                <rect x="10" y="10" width="260" height="120" rx="10" fill="#111" stroke="#E8C547" strokeWidth="0.6" strokeOpacity="0.3" />
                <polyline points="20,90 60,70 100,80 140,45 180,60 220,30 260,40" fill="none" stroke="#E8C547" strokeWidth="2" strokeOpacity="0.8" />
                <polygon points="20,90 60,70 100,80 140,45 180,60 220,30 260,40 260,120 20,120" fill="#E8C547" fillOpacity="0.05" />
                <circle cx="220" cy="30" r="4" fill="#E8C547" opacity="0.9" />
              </svg>
              <div className="absolute top-[14px] left-[14px] text-[0.62rem] font-bold uppercase tracking-[1.5px] text-[#E8C547] bg-[#E8C547]/10 border border-[#E8C547]/20 px-2.5 py-1 rounded-full">AI Automation</div>
            </div>
            <div className="p-5 pb-6">
              <div className="text-base font-bold text-white mb-3.5 tracking-tight">AI Workflow Automation Platform</div>
              <div className="flex gap-6 mb-4">
                <div><div className="text-xl font-extrabold text-[#E8C547] tracking-tight">90%</div><div className="text-[0.65rem] font-semibold text-[#666] uppercase tracking-[1px]">Time Saved</div></div>
                <div><div className="text-xl font-extrabold text-[#E8C547] tracking-tight">$2.4M+</div><div className="text-[0.65rem] font-semibold text-[#666] uppercase tracking-[1px]">Cost Reduction</div></div>
              </div>
              <Link href="/case-studies" className="text-[0.78rem] font-semibold text-[#E8C547] flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200">View Case Study →</Link>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-[#111111] rounded-[20px] overflow-hidden border border-[#E8C547]/10 transition-transform duration-300 hover:-translate-y-1.5"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            <div className="h-[180px] bg-[#0e0e0e] relative overflow-hidden flex items-center justify-center"
              style={{ backgroundImage: 'linear-gradient(rgba(232,197,71,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(232,197,71,0.04) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
            >
              <svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" className="w-[85%] relative z-[2]">
                <rect x="10" y="10" width="260" height="120" rx="10" fill="#111" stroke="#E8C547" strokeWidth="0.6" strokeOpacity="0.3" />
                <rect x="10" y="10" width="260" height="24" rx="10" fill="#1a1a1a" />
                <circle cx="26" cy="22" r="4" fill="#ff5f57" opacity="0.7" />
                <circle cx="38" cy="22" r="4" fill="#febc2e" opacity="0.7" />
                <circle cx="50" cy="22" r="4" fill="#28c840" opacity="0.7" />
                <rect x="24" y="44" width="90" height="8" rx="2" fill="#E8C547" fillOpacity="0.25" />
                <rect x="24" y="58" width="130" height="5" rx="1.5" fill="#fff" fillOpacity="0.07" />
                <rect x="24" y="68" width="110" height="5" rx="1.5" fill="#fff" fillOpacity="0.05" />
                <rect x="24" y="84" width="48" height="18" rx="5" fill="#E8C547" fillOpacity="0.85" />
                <rect x="148" y="42" width="100" height="76" rx="6" fill="#1e1e1e" stroke="#E8C547" strokeWidth="0.5" strokeOpacity="0.3" />
                <rect x="258" y="100" width="50" height="28" rx="6" fill="#fff" fillOpacity="0.95" />
                <text x="283" y="111" textAnchor="middle" fill="#111" fontFamily="Inter,sans-serif" fontSize="6" fontWeight="600">Lighthouse</text>
                <text x="283" y="122" textAnchor="middle" fill="#22c55e" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="800">98</text>
              </svg>
              <div className="absolute top-[14px] left-[14px] text-[0.62rem] font-bold uppercase tracking-[1.5px] text-[#E8C547] bg-[#E8C547]/10 border border-[#E8C547]/20 px-2.5 py-1 rounded-full">Web Engineering</div>
            </div>
            <div className="p-5 pb-6">
              <div className="text-base font-bold text-white mb-3.5 tracking-tight">High-Performance E-Commerce Platform</div>
              <div className="flex gap-6 mb-4">
                <div><div className="text-xl font-extrabold text-[#E8C547] tracking-tight">98</div><div className="text-[0.65rem] font-semibold text-[#666] uppercase tracking-[1px]">Lighthouse Score</div></div>
                <div><div className="text-xl font-extrabold text-[#E8C547] tracking-tight">3x</div><div className="text-[0.65rem] font-semibold text-[#666] uppercase tracking-[1px]">Conversion Rate</div></div>
              </div>
              <Link href="/case-studies" className="text-[0.78rem] font-semibold text-[#E8C547] flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200">View Case Study →</Link>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-[#111111] rounded-[20px] overflow-hidden border border-[#E8C547]/10 transition-transform duration-300 hover:-translate-y-1.5"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            <div className="h-[180px] bg-[#0e0e0e] relative overflow-hidden flex items-center justify-center"
              style={{ backgroundImage: 'linear-gradient(rgba(232,197,71,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(232,197,71,0.04) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
            >
              <svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" className="w-[85%] relative z-[2]">
                <rect x="84" y="8" width="55" height="100" rx="12" fill="#111" stroke="#E8C547" strokeWidth="0.8" strokeOpacity="0.5" />
                <rect x="90" y="20" width="43" height="75" rx="7" fill="#181818" />
                <rect x="96" y="26" width="31" height="5" rx="2" fill="#E8C547" fillOpacity="0.3" />
                <rect x="96" y="36" width="31" height="28" rx="4" fill="#1e1e1e" stroke="#E8C547" strokeWidth="0.4" strokeOpacity="0.4" />
                <circle cx="111" cy="50" r="8" fill="#E8C547" fillOpacity="0.12" stroke="#E8C547" strokeWidth="0.5" strokeOpacity="0.5" />
                <text x="111" y="54" textAnchor="middle" fill="#E8C547" fillOpacity="0.6" fontFamily="Inter,sans-serif" fontSize="10">Z</text>
                <rect x="145" y="24" width="55" height="100" rx="12" fill="#1a1a1a" stroke="#E8C547" strokeWidth="0.6" strokeOpacity="0.35" />
                <rect x="150" y="36" width="45" height="75" rx="7" fill="#141414" />
                <rect x="156" y="44" width="33" height="5" rx="2" fill="#E8C547" fillOpacity="0.25" />
                <rect x="156" y="54" width="33" height="28" rx="4" fill="#1e1e1e" stroke="#E8C547" strokeWidth="0.3" strokeOpacity="0.3" />
                <rect x="200" y="60" width="60" height="35" rx="8" fill="#fff" fillOpacity="0.95" />
                <text x="230" y="72" textAnchor="middle" fill="#111" fontFamily="Inter,sans-serif" fontSize="6" fontWeight="600">Downloads</text>
                <text x="230" y="87" textAnchor="middle" fill="#E8C547" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="800">250K+</text>
              </svg>
              <div className="absolute top-[14px] left-[14px] text-[0.62rem] font-bold uppercase tracking-[1.5px] text-[#E8C547] bg-[#E8C547]/10 border border-[#E8C547]/20 px-2.5 py-1 rounded-full">Mobile App</div>
            </div>
            <div className="p-5 pb-6">
              <div className="text-base font-bold text-white mb-3.5 tracking-tight">On-Demand Service Mobile App</div>
              <div className="flex gap-6 mb-4">
                <div><div className="text-xl font-extrabold text-[#E8C547] tracking-tight">4.8+</div><div className="text-[0.65rem] font-semibold text-[#666] uppercase tracking-[1px]">App Store Rating</div></div>
                <div><div className="text-xl font-extrabold text-[#E8C547] tracking-tight">250K+</div><div className="text-[0.65rem] font-semibold text-[#666] uppercase tracking-[1px]">Downloads</div></div>
              </div>
              <Link href="/case-studies" className="text-[0.78rem] font-semibold text-[#E8C547] flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200">View Case Study →</Link>
            </div>
          </motion.div>
        </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 lg:py-[80px] bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-[0.68rem] font-bold uppercase tracking-[2px] text-[#E8C547] mb-[14px]">What Our Clients Say</div>
          <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-extrabold tracking-[-1.5px] text-[#1a1a1a] leading-[1.1]">
            Trusted by Founders<br />& Enterprises
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-left">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="bg-white rounded-[20px] p-7 border border-black/[0.07] shadow-[0_2px_16px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(232,197,71,0.1)]"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              >
                <p className="text-[0.875rem] text-[#1a1a1a] leading-[1.75] mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E8C547] to-[#c9a82e] flex items-center justify-center text-[0.85rem] font-bold text-[#1a1a1a] flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[0.85rem] font-bold text-[#1a1a1a]">{t.name}</div>
                    <div className="text-[0.72rem] text-[#6b6b6b]">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="max-w-7xl mx-auto px-6 pb-[60px] pt-10">
        <div className="bg-[#fef3e2] rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden pr-0 lg:pr-[56px]">
          <div className="flex-shrink-0">
            <CtaCubesSvg />
          </div>
          <div className="flex-1 px-6 lg:px-0 pb-6 lg:pb-0">
            <div className="text-[0.62rem] font-bold uppercase tracking-[2px] text-[#b07d2e] bg-[#E8C547]/18 border border-[#E8C547]/35 px-3 py-1 rounded-full inline-block mb-3.5">
              Ready to Build Something Amazing?
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold text-[#1a1a1a] tracking-[-1.5px] leading-[1.1]">
              Let&apos;s Build Your Next<br />Big Thing <span className="text-[#d4900a]">Together.</span>
            </h2>
            <p className="text-[0.82rem] text-[#888] mt-2.5">Book a call with our experts and take the first step today.</p>
          </div>
          <Link
            href="/strategy-call"
            className="flex-shrink-0 mx-6 lg:mx-0 mb-6 lg:mb-0 inline-flex items-center gap-2.5 bg-gradient-to-br from-[#f0a430] to-[#e8921a] text-white text-[0.875rem] font-bold px-8 py-4 rounded-full shadow-[0_6px_24px_rgba(232,146,26,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(232,146,26,0.45)] whitespace-nowrap"
          >
            Schedule a Free Call
            <span className="w-7 h-7 bg-white/25 rounded-full flex items-center justify-center text-[0.85rem]">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
