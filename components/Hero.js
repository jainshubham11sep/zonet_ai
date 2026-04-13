'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import Link from 'next/link';
import WebGLBackground from './WebGLBackground';
import { PopupModal } from 'react-calendly';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] bg-background glass pt-32 md:pt-40 pb-24 overflow-hidden flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12">
        {/* Rating Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-badge-border bg-badge-bg mb-10 shadow-sm"
        >
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={13} className="fill-accent text-accent" strokeWidth={0} />
            ))}
          </div>
          <span className="text-[10px] sm:text-[11px] font-black text-foreground uppercase tracking-widest">
            Top Rated Agency 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-[1.1] md:leading-[1] tracking-tighter max-w-5xl mb-8 font-heading"
        >
          Scaling Machines <br className="md:hidden" /> For <br className="hidden md:block" />
          High-Growth <span className="text-accent">AI Brands</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mb-12 leading-relaxed font-medium"
        >
          We design high-converting digital products for fast-moving companies who want to scale with technical precision.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-2"
        >
          <button 
            onClick={() => setIsCalendlyOpen(true)}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-accent text-accent-foreground rounded-full font-black text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(99,101,241,0.25)] cursor-pointer"
          >
            Start Your Project <ArrowUpRight size={20} />
          </button>
          <p className="text-[9px] font-black text-muted uppercase tracking-[0.3em] mt-4 opacity-60">Built with ❤️ for Modern Brands</p>
        </motion.div>

        {/* Our Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col items-center gap-6 w-full"
        >
          <p className="section-label">Trusted Tech Stack</p>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl px-4 opacity-70">
            {/* Antigravity */}
            <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border-custom bg-card/30 backdrop-blur-sm hover:border-accent/40 transition-all group cursor-default">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted group-hover:text-accent transition-colors">
                <path d="M12 2v20M2 12h20" />
                <path d="m17 7-5-5-5 5" />
                <path d="m17 17-5 5-5-5" />
              </svg>
              <span className="text-[11px] font-black uppercase tracking-widest text-foreground">Next.js</span>
            </div>

            {/* Gemini */}
            <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border-custom bg-card/30 backdrop-blur-sm hover:border-accent/40 transition-all group cursor-default">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted group-hover:text-accent transition-colors">
                <path d="m12 3-1.912 5.813a2.001 2.001 0 0 1-1.275 1.275L3 12l5.813 1.912a2.001 2.001 0 0 1 1.275 1.275L12 21l1.912-5.813a2.001 2.001 0 0 1 1.275-1.275L21 12l-5.813-1.912a2.001 2.001 0 0 1-1.275-1.275L12 3Z" />
              </svg>
              <span className="text-[11px] font-black uppercase tracking-widest text-foreground">Gemini</span>
            </div>

            {/* Framer */}
            <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border-custom bg-card/30 backdrop-blur-sm hover:border-accent/40 transition-all group cursor-default">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted group-hover:text-accent transition-colors">
                <path d="M5 3h14l-7 7 7 7H5l7-7-7-7Z" />
              </svg>
              <span className="text-[11px] font-black uppercase tracking-widest text-foreground">Framer</span>
            </div>

            {/* Three.js */}
            <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border-custom bg-card/30 backdrop-blur-sm hover:border-accent/40 transition-all group cursor-default">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted group-hover:text-accent transition-colors">
                <path d="m21 16-9 5-9-5V8l9-5 9 5v8Z" />
                <path d="m3 8 9 5 9-5" />
                <path d="M12 21v-8" />
              </svg>
              <span className="text-[11px] font-black uppercase tracking-widest text-foreground">Three.js</span>
            </div>
          </div>
        </motion.div>
      </div>

      <WebGLBackground />

      {mounted && typeof document !== 'undefined' && (
        <PopupModal
          url="https://calendly.com/zonettech/30min"
          onModalClose={() => setIsCalendlyOpen(false)}
          open={isCalendlyOpen}
          rootElement={document.body}
        />
      )}
    </section>
  );
};

export default Hero;
