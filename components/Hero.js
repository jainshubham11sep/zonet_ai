'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import Link from 'next/link';
import WebGLBackground from './WebGLBackground';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] bg-background pt-32 pb-20 overflow-hidden flex flex-col items-center">
      <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10">
        {/* Rating Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-badge-border bg-badge-bg mb-8 mb:mb-12 shadow-sm"
        >
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={14} className="fill-foreground text-foreground" />
            ))}
          </div>
          <span className="text-[10px] sm:text-xs font-bold text-foreground">
            Average 4.9/5 Verified Ratings →
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight max-w-4xl mb-8 font-heading"
        >
          The #1 Rated Agency For <br className="hidden md:block" />
          B2B & AI SaaS Products
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted max-w-2xl mb-12 leading-relaxed"
        >
          We design high-converting websites & products for <br className="hidden md:block" /> fast-moving companies who want to scale with speed.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center gap-6"
        >
          <Link 
            href="/contact" 
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-button-bg text-button-fg rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl"
          >
            Try ZonetTech for 1 Week <ArrowUpRight size={20} />
          </Link>
          <p className="text-xs font-bold text-muted uppercase tracking-widest">7-30 Days Fast Delivery</p>
        </motion.div>

        {/* Our Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 flex flex-col items-center gap-8 w-full"
        >
          <p className="text-[10px] font-bold text-muted uppercase tracking-[0.3em] opacity-80">Our Stack</p>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl px-4">
            {/* Antigravity */}
            <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border-custom bg-card-alt/50 backdrop-blur-sm hover:border-foreground/20 transition-all group cursor-default">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/70 group-hover:text-amber-400 transition-colors">
                <path d="M12 2v20M2 12h20" />
                <path d="m17 7-5-5-5 5" />
                <path d="m17 17-5 5-5-5" />
              </svg>
              <span className="text-sm font-bold text-foreground">Antigravity</span>
            </div>

            {/* Gemini */}
            <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border-custom bg-card-alt/50 backdrop-blur-sm hover:border-foreground/20 transition-all group cursor-default">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/70 group-hover:text-blue-400 transition-colors">
                <path d="m12 3-1.912 5.813a2.001 2.001 0 0 1-1.275 1.275L3 12l5.813 1.912a2.001 2.001 0 0 1 1.275 1.275L12 21l1.912-5.813a2.001 2.001 0 0 1 1.275-1.275L21 12l-5.813-1.912a2.001 2.001 0 0 1-1.275-1.275L12 3Z" />
              </svg>
              <span className="text-sm font-bold text-foreground">Gemini</span>
            </div>

            {/* ChatGPT */}
            <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border-custom bg-card-alt/50 backdrop-blur-sm hover:border-foreground/20 transition-all group cursor-default">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/70 group-hover:text-emerald-400 transition-colors">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
                <circle cx="12" cy="7" r="1.5" fill="currentColor" />
                <circle cx="12" cy="17" r="1.5" fill="currentColor" />
                <circle cx="7" cy="12" r="1.5" fill="currentColor" />
                <circle cx="17" cy="12" r="1.5" fill="currentColor" />
              </svg>
              <span className="text-sm font-bold text-foreground">ChatGPT</span>
            </div>

            {/* Claude */}
            <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border-custom bg-card-alt/50 backdrop-blur-sm hover:border-foreground/20 transition-all group cursor-default">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/70 group-hover:text-orange-400 transition-colors">
                <path d="M12 2L4.5 12l7.5 10l7.5-10L12 2z" />
                <path d="M12 12l4-4" />
                <path d="M12 12l-4-4" />
                <path d="M12 12l4 4" />
                <path d="M12 12l-4 4" />
              </svg>
              <span className="text-sm font-bold text-foreground">Claude</span>
            </div>

            {/* Cursor */}
            <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border-custom bg-card-alt/50 backdrop-blur-sm hover:border-foreground/20 transition-all group cursor-default">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/70 group-hover:text-indigo-400 transition-colors">
                <rect x="9" y="9" width="6" height="6" rx="1" />
                <path d="M15 9h-6v6h6V9z" />
                <path d="M9 15v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3" />
                <path d="M9 9V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
              </svg>
              <span className="text-sm font-bold text-foreground">Cursor</span>
            </div>

            {/* Stitch */}
            <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border-custom bg-card-alt/50 backdrop-blur-sm hover:border-foreground/20 transition-all group cursor-default">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/70 group-hover:text-purple-400 transition-colors">
                <path d="M12 2L2 12l10 10l10-10L12 2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span className="text-sm font-bold text-foreground">Stitch</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      {/* 3D WebGL Background Component injected globally into the Hero section */}
      <WebGLBackground />
    </section>
  );
};

export default Hero;
