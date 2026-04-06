'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 50, suffix: '+', label: 'Projects Shipped', desc: 'Across Web, AI & Mobile' },
  { value: 4.9, suffix: '/5', label: 'Average Rating', desc: 'Verified Client Reviews' },
  { value: 7, suffix: ' Days', label: 'Avg. First Delivery', desc: 'From kickoff to live MVP' },
  { value: 3, suffix: 'x', label: 'Faster Than Agencies', desc: 'Thanks to AI workflows' },
];

const CountUp = ({ target, suffix, isDecimal }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const steps = 60;
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
      {isDecimal ? count.toFixed(1) : count}{suffix}
    </span>
  );
};

const DataDrivenStats = () => {
  return (
    <section className="py-24 bg-button-bg text-button-fg border-t border-border-custom overflow-hidden relative">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full border border-button-fg/20 text-[10px] font-bold text-button-fg/60 mb-4 uppercase tracking-[0.2em]"
          >
            Data Driven
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-button-fg tracking-tighter leading-[1.1] font-heading"
          >
            Numbers That <span className="opacity-40">Speak</span>
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-3 text-center lg:text-left"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-black text-button-fg font-heading tracking-tighter">
                <CountUp 
                  target={stat.value} 
                  suffix={stat.suffix}
                  isDecimal={!Number.isInteger(stat.value)}
                />
              </div>
              <div>
                <p className="text-lg md:text-xl font-bold text-button-fg">{stat.label}</p>
                <p className="text-sm text-button-fg/50 mt-1">{stat.desc}</p>
              </div>
              <div className="w-12 h-0.5 bg-button-fg/20 mx-auto lg:mx-0 mt-2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataDrivenStats;
