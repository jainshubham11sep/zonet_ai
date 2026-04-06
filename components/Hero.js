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

        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 flex flex-col items-center gap-6"
        >
          <p className="text-xs font-bold text-muted uppercase tracking-[0.2em]">Trusted by 50+ SaaS backed by</p>
          <div className="flex flex-wrap justify-center gap-10 opacity-30 grayscale saturate-0 pointer-events-none">
            <div className="text-xl font-black text-foreground">Y Combinator</div>
            <div className="text-xl font-black text-foreground">A16Z</div>
            <div className="text-xl font-black text-foreground">SEQUOIA</div>
            <div className="text-xl font-black text-foreground">INDEX</div>
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
