'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "Zonet is pretty good at the business level, Zonet helped increase our online presence, attracted the right kind of customers, and increased our sales. I like how their team of specialists uses AI-powered tools to bring the right message to the audience.",
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
  // We duplicate the array to create a seamless infinite marquee effect
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-background border-t border-border-custom overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header (BricxLabs Style) */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-3 py-1 rounded-full border border-badge-border bg-badge-bg text-[10px] font-bold text-muted mb-4 uppercase tracking-[0.2em]"
          >
            Wall of Love
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-foreground tracking-tighter leading-[1.1] font-heading"
          >
            Loved by <span className="text-muted">Founders.</span>
          </motion.h2>
        </div>
      </div>

      {/* Infinite Horizontal Marquee (Bricxlabs design but minimal cards) */}
      <div className="relative flex overflow-x-hidden group">
        <motion.div
           className="flex gap-6 whitespace-nowrap py-4 px-3"
           animate={{ x: [0, -1035] }} // Move left continuously
           transition={{
             repeat: Infinity,
             ease: "linear",
             duration: 25, // Adjust speed
           }}
        >
          {marqueeItems.map((t, idx) => (
            <div
              key={idx}
              className="w-[320px] md:w-[400px] flex-shrink-0 bg-card p-6 md:p-8 rounded-[24px] border border-border-custom shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
              style={{ whiteSpace: 'normal' }}
            >
              <div>
                {/* Minimal Stars */}
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-4 h-4 fill-emerald-500" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-foreground text-sm md:text-base leading-relaxed font-medium mb-6">
                  "{t.text}"
                </p>
              </div>

              {/* Minimal Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-border-custom mt-auto">
                <div className="w-9 h-9 rounded-full bg-button-bg flex items-center justify-center text-xs font-bold text-button-fg flex-shrink-0">
                  {t.initials}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-foreground text-sm">{t.author}</span>
                  <span className="text-xs text-muted">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
