'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket, Star, Clock, Zap, Users, Globe, TrendingUp, BadgeCheck } from 'lucide-react';

const INDIGO = '#4F46E5';
const ICON_BG = '#EDEEFF';
const SUBLABEL = '#8588C2';

const primaryStats = [
  {
    icon: Rocket,
    value: 50,
    suffix: '+',
    label: 'Projects Shipped',
    desc: 'Across Web, AI & Mobile',
    isDecimal: false,
  },
  {
    icon: Star,
    value: 4.9,
    suffix: '/5',
    label: 'Average Rating',
    desc: 'Verified Client Reviews',
    isDecimal: true,
  },
  {
    icon: Clock,
    value: 7,
    suffix: ' Days',
    label: 'Avg. First Delivery',
    desc: 'From Kickoff to Live MVP',
    isDecimal: false,
  },
  {
    icon: Zap,
    value: 3,
    suffix: 'x',
    label: 'Faster Than Agencies',
    desc: 'Thanks to AI Workflows',
    isDecimal: false,
  },
];

const secondaryStats = [
  {
    icon: Users,
    value: 30,
    suffix: '+',
    label: 'Expert Engineers',
    desc: 'Designers, Engineers &\nAI Specialists',
    isDecimal: false,
  },
  {
    icon: Globe,
    value: 10,
    suffix: '+',
    label: 'Industries Served',
    desc: 'From Startups to\nEnterprises',
    isDecimal: false,
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: '%',
    label: 'Client Retention',
    desc: 'Long-term Partnerships\nThat Grow',
    isDecimal: false,
  },
  {
    icon: BadgeCheck,
    value: 100,
    suffix: '%',
    label: 'Quality Commitment',
    desc: 'Testing, Security &\nPerformance Focused',
    isDecimal: false,
  },
];

function CountUp({
  target,
  suffix,
  isDecimal,
}: {
  target: number;
  suffix: string;
  isDecimal: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1600;
    const steps = 55;
    const increment = target / steps;
    const interval = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(start.toFixed(1)) : Math.floor(start));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView, target, isDecimal]);

  return (
    <span ref={ref} className="tabular-nums">
      {isDecimal ? count.toFixed(1) : count}
      {suffix}
    </span>
  );
}

function IconCircle({ Icon }: { Icon: React.ComponentType<{ size?: number; strokeWidth?: number; color?: string }> }) {
  return (
    <div className="relative w-11 h-11 flex-shrink-0">
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center"
        style={{ backgroundColor: ICON_BG }}
      >
        <Icon size={20} color={INDIGO} strokeWidth={1.75} />
      </div>
      {/* Decorative dot */}
      <div
        className="absolute top-0.5 right-0.5 w-[7px] h-[7px] rounded-full border-2 border-white"
        style={{ backgroundColor: INDIGO }}
      />
    </div>
  );
}

const DataDrivenStats = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F7F6F3] border-t border-[#E6E4DF] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#E8C547]" />
            <span className="text-[11px] font-black text-[#1A1A1A] tracking-[0.15em] uppercase">
              Data Driven
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[60px] lg:text-[68px] font-bold text-[#1A1A1A] tracking-tight leading-[1.1] font-heading mb-5"
          >
            Numbers That{' '}
            <em
              className="italic"
              style={{
                backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 14' preserveAspectRatio='none'><path d='M2 9 C 55 2, 130 2, 210 7 S 272 12, 278 7' stroke='%23E8C547' stroke-width='5.5' stroke-linecap='round' fill='none' opacity='0.95'/></svg>")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0 100%',
                backgroundSize: '100% 0.32em',
                paddingBottom: '0.08em',
              }}
            >
              Actualize
            </em>{' '}
            Our Impact
          </motion.h2>

          <p className="text-[15px] md:text-[16px] text-[#686B6B] leading-relaxed max-w-[520px] mx-auto">
            We combine creativity, engineering, and AI to deliver measurable results that drive real business growth.
          </p>
        </div>

        {/* Top row — 4 white cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {primaryStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-40px' }}
              className="bg-white border border-[#E8E6E1] rounded-2xl p-6 flex flex-col gap-0"
            >
              <IconCircle Icon={stat.icon} />

              <div className="mt-5 mb-1">
                <p
                  className="text-[40px] font-bold leading-none tracking-tight"
                  style={{ color: INDIGO }}
                >
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    isDecimal={stat.isDecimal}
                  />
                </p>
              </div>

              <p className="text-[14px] font-bold text-[#1A1A1A] mt-2 leading-snug">
                {stat.label}
              </p>
              <p className="text-[13px] mt-1 leading-snug" style={{ color: SUBLABEL }}>
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar — lavender background, 4 items */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-40px' }}
          className="rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#C8C4F0]"
          style={{ background: 'linear-gradient(135deg, #E2DEFF 0%, #E8E5FF 50%, #E0DCFF 100%)' }}
        >
          {secondaryStats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 px-8 py-7"
            >
              <IconCircle Icon={stat.icon} />

              <div className="flex flex-col">
                <p
                  className="text-[28px] font-bold leading-none tracking-tight"
                  style={{ color: INDIGO }}
                >
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    isDecimal={stat.isDecimal}
                  />
                </p>
                <p className="text-[13px] font-bold text-[#1A1A1A] mt-1.5 leading-snug">
                  {stat.label}
                </p>
                <p className="text-[12px] mt-0.5 leading-snug whitespace-pre-line" style={{ color: SUBLABEL }}>
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default DataDrivenStats;
