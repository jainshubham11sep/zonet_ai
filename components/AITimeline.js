'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const steps = [
  { id: '01', title: 'Strategy & Audit', desc: 'We analyze your current product and define a clear AI-first roadmap for growth.' },
  { id: '02', title: 'UX/UI Design', desc: 'High-fidelity mockups and prototypes built for conversion and speed.' },
  { id: '03', title: 'Development', desc: 'Next.js & Tailwind implementation with seamless AI integrations.' },
  { id: '04', title: 'Launch & Scale', desc: 'We deploy your product and provide ongoing support for 24/7 success.' }
];

const AITimeline = () => {
  return (
    <section className="py-16 bg-card overflow-hidden border-t border-border-custom">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-3 py-1 rounded-full border border-badge-border bg-badge-bg text-[10px] font-bold text-muted mb-4 uppercase tracking-widest"
          >
            Our Process
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight leading-tight font-heading text-foreground"
          >
            Launch in <span className="text-muted">7 to 30 Days</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative flex flex-col gap-6 group"
            >
              {/* Number Background */}
              <div className="text-[120px] font-black leading-none text-border-custom group-hover:text-foreground/5 transition-colors absolute -top-12 -left-4 pointer-events-none z-0 select-none">
                {step.id}
              </div>
              
              {/* Content */}
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-bold text-foreground font-heading tracking-tight mt-8">
                  {step.title}
                </h3>
                <p className="text-muted text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Divider Line */}
              <div className="w-12 h-1 bg-border-custom group-hover:bg-foreground transition-all duration-500 rounded-full"></div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <Link 
            href="/contact" 
            className="px-8 py-4 rounded-full bg-button-bg text-button-fg font-bold hover:opacity-90 transition-all shadow-lg text-lg"
          >
            Learn About Our Process
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AITimeline;
