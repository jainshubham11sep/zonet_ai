'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const steps = [
  { 
    id: '01', 
    phase: 'Phase 1',
    duration: 'Days 1-3',
    title: 'Rapid Blueprinting', 
    desc: 'Deep AI-audit & strategy. We define your competitive edge and engineering roadmap.',
    icon: Search,
    details: ['Market Gap Analysis', 'Tech Stack Selection', 'AI Model Strategy']
  },
  { 
    id: '02', 
    phase: 'Phase 2',
    duration: 'Days 4-7',
    title: 'High-Velocity UI/UX', 
    desc: 'Functional mockups & interactive prototypes optimized for rapid conversion.',
    icon: PenTool,
    details: ['User Flow Design', 'Visual System', 'Prototype Testing']
  },
  { 
    id: '03', 
    phase: 'Phase 3',
    duration: 'Days 8-25',
    title: 'AI Integration', 
    desc: 'Production-ready code with custom LLM integrations and high-scale infrastructure.',
    icon: Code2,
    details: ['Next.js 15 Implementation', 'API Development', 'Model Fine-Tuning']
  },
  { 
    id: '04', 
    phase: 'Phase 4',
    duration: 'Days 26-30',
    title: 'Deployment & Scale', 
    desc: 'Seamless production launch with performance monitoring and immediate scaling.',
    icon: Rocket,
    details: ['Cloud Deployment', 'QA & Speed Audit', 'Growth Monitoring']
  }
];

const Timelines = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col group p-7 md:p-8 rounded-[36px] bg-card border border-border-custom hover:border-accent/40 transition-all duration-500 overflow-hidden"
              >
                {/* Header: Icon + Phase + Duration in one line */}
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-accent/5 text-accent flex items-center justify-center border border-accent/10 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm">
                    <Icon size={20} strokeWidth={2.5} />
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-center">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-lg bg-accent/5 border border-accent/10 text-accent text-[8px] font-black uppercase tracking-widest">
                        {step.phase}
                      </span>
                      <span className="text-[9px] font-bold text-muted uppercase tracking-widest opacity-60">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-grow">
                  <h3 className="text-lg font-black text-foreground font-heading tracking-tight mb-2 leading-tight group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted text-[14px] leading-relaxed mb-6 font-medium tracking-tight">
                    {step.desc}
                  </p>
                  
                  {/* Technical Tags */}
                  <div className="flex flex-col gap-2 pt-5 border-t border-border-custom/50">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-[9px] font-bold text-muted group-hover:text-foreground transition-colors">
                        <div className="w-1 h-1 rounded-full bg-accent" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle Background Number */}
                <div className="absolute -bottom-10 -right-4 text-[120px] font-black text-foreground opacity-[0.02] font-heading select-none pointer-events-none group-hover:opacity-5 group-hover:-translate-y-2 transition-all duration-700">
                  {step.id}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center gap-8"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-card-alt border border-border-custom shadow-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-card bg-accent/20" />
              ))}
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-muted">
              <span className="text-foreground">240+</span> Products Launched
            </p>
          </div>

          <Link 
            href="/contact" 
            className="flex items-center gap-4 px-10 py-5 rounded-2xl bg-accent text-white font-black uppercase tracking-[0.2em] text-[11px] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-accent/20 group"
          >
            Launch Your Idea <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Timelines;
