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
    <section className="section-padding bg-background border-y border-border-custom overflow-hidden relative">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="section-label mb-6"
          >
            Data Driven
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-foreground tracking-tighter leading-[1] font-heading"
          >
            Numbers That <span className="text-muted italic select-none">Actualize</span> Our Impact
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-50px' }}
              className="flex flex-col gap-3 text-center lg:text-left relative group bg-card hover:bg-card-alt backdrop-blur-sm border border-border-custom p-8 rounded-[32px] transition-all duration-500"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-accent font-heading tracking-tighter drop-shadow-sm transition-transform duration-500 group-hover:scale-105 origin-left">
                <CountUp 
                  target={stat.value} 
                  suffix={stat.suffix}
                  isDecimal={!Number.isInteger(stat.value)}
                />
              </div>
              <div className="mt-2">
                <p className="text-lg md:text-xl font-black text-foreground tracking-tight leading-tight font-heading">{stat.label}</p>
                <p className="text-xs text-muted mt-2 font-bold uppercase tracking-widest leading-relaxed">{stat.desc}</p>
              </div>
              <div className="absolute bottom-6 right-8 w-8 h-8 rounded-full bg-accent/5 border border-accent/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataDrivenStats;
