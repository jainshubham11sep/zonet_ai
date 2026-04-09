'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const steps = [
  { 
    id: '01', 
    title: 'Strategy & Audit', 
    desc: 'Deep analysis of your product goals to define an AI-first growth roadmap.',
    icon: Search,
  },
  { 
    id: '02', 
    title: 'UX/UI Design', 
    desc: 'High-fidelity mockups optimized for lightning-fast user adoption.',
    icon: PenTool,
  },
  { 
    id: '03', 
    title: 'Development', 
    desc: 'Next.js & Tailwind implementation with seamless AI model integrations.',
    icon: Code2,
  },
  { 
    id: '04', 
    title: 'Launch & Scale', 
    desc: 'Deployment with 24/7 support to ensure continuous product success.',
    icon: Rocket,
  }
];

const AITimeline = () => {
  return (
    <section className="section-padding bg-background overflow-hidden border-t border-border-custom relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="section-label mb-6"
          >
            Our Process
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter leading-[1] font-heading text-foreground max-w-3xl"
          >
            Launch Your Product in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-indigo-400 to-accent">7 to 30 Days</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col group p-8 rounded-[32px] bg-card/40 backdrop-blur-sm border border-border-custom hover:border-accent/40 hover:bg-card/60 transition-all duration-500"
              >
                {/* Outline Number */}
                <div className="text-6xl md:text-8xl font-black leading-none absolute top-6 right-8 pointer-events-none z-0 select-none opacity-[0.03] md:opacity-5 group-hover:opacity-10 transition-opacity font-heading text-foreground" style={{ WebkitTextStroke: '1px currentColor', color: 'transparent' }}>
                  {step.id}
                </div>
                
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-8 border border-accent/20 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm">
                  <Icon size={24} strokeWidth={2.5} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-foreground font-heading tracking-tight mb-4 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted text-base leading-relaxed mb-6 font-medium tracking-tight">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow / Connector (Hidden on mobile/list) */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-[-50%] z-20 text-accent pointer-events-none opacity-20 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-500">
                    <ArrowRight size={24} />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <Link 
            href="/contact" 
            className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-accent text-white font-black uppercase tracking-widest text-[11px] hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 group"
          >
            Start Your Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AITimeline;
