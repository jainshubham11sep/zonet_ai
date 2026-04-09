'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "ZonetTech helped increase our online presence, attracted the right kind of customers, and increased our sales. Their team uses AI-powered tools to bring the right message to the audience.",
    author: "Verified Client",
    role: "Business Owner",
    initials: "VC",
  },
  {
    text: "The best design agency we've worked with. They truly understand SaaS and the level of polish required for a series A startup.",
    author: "James Miller",
    role: "Founder, SaaSFlow",
    initials: "JM",
  },
  {
    text: "Fast, reliable, and incredibly talented. They converted our complex requirements into a beautiful, functional product.",
    author: "Elena Rodriguez",
    role: "Head of Product, Manyreach",
    initials: "ER",
  },
  {
    text: "Their attention to detail is rare. Our conversion rate improved by 38% after ZonetTech redesigned our landing page.",
    author: "Aarav Mehta",
    role: "CEO, CloudForm",
    initials: "AM",
  },
  {
    text: "We were blown away by how quickly they grasped our vision and turned it into a product our users absolutely love.",
    author: "Priya Nair",
    role: "Product Lead, Finflow AI",
    initials: "PN",
  },
  {
    text: "ZonetTech doesn't just build — they think strategically. They challenged our assumptions in the best way possible.",
    author: "Marcus Lee",
    role: "Co-Founder, Stackify",
    initials: "ML",
  },
];

const Testimonials = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const marqueeItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="section-padding bg-background border-t border-border-custom overflow-hidden relative">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="section-label mb-6"
          >
            Wall of Love
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-foreground tracking-tighter leading-[1] font-heading max-w-3xl"
          >
            Trusted by the World's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-indigo-400 to-accent">Best Founders.</span>
          </motion.h2>
        </div>
      </div>

      <div className="relative overflow-x-hidden group py-8 px-6">
        <motion.div
           className="flex flex-col md:flex-row gap-6 md:gap-8 md:whitespace-nowrap"
           animate={mounted && window.innerWidth >= 768 ? { x: [0, -2000] } : { x: 0 }} 
           transition={{
             repeat: Infinity,
             ease: "linear",
             duration: 50,
           }}
        >
          {marqueeItems.slice(0, mounted && window.innerWidth < 768 ? testimonials.length : marqueeItems.length).map((t, idx) => (
            <div
              key={idx}
              className="w-full md:w-[400px] flex-shrink-0 bg-card/40 backdrop-blur-xl p-8 rounded-[32px] border border-border-custom hover:border-accent/40 hover:bg-card/60 transition-all duration-500 flex flex-col justify-between group/card shadow-sm mx-auto max-w-lg md:max-w-none"
              style={{ whiteSpace: 'normal' }}
            >
              <div>
                <div className="flex gap-0.5 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-foreground text-base md:text-lg leading-relaxed font-medium mb-10 tracking-tight">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-border-custom/50">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-sm font-black text-accent flex-shrink-0 shadow-sm transition-transform duration-300 group-hover/card:scale-110">
                  {t.initials}
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-foreground text-sm tracking-tight font-heading leading-tight">{t.author}</span>
                  <span className="text-[10px] font-black text-muted uppercase tracking-[0.2em] mt-1">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="hidden md:block absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="hidden md:block absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default Testimonials;
