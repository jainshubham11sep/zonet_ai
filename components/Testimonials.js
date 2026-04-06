'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "ZonetTech delivered our MVP in just 14 days. The design quality is unmatched, and the speed is exactly what we needed.",
    author: "Sarah Chen",
    role: "CTO, TechLead AI",
    initials: "SC",
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
  return (
    <section className="py-24 bg-background border-t border-border-custom overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-3 py-1 rounded-full border border-badge-border bg-badge-bg text-[10px] font-bold text-muted mb-4 uppercase tracking-[0.2em]"
          >
            Testimonials
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

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="break-inside-avoid mb-6 bg-card p-8 rounded-[28px] border border-border-custom shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col gap-6"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-4 h-4 fill-foreground" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-foreground text-lg leading-relaxed italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 pt-2 border-t border-border-custom">
                <div className="w-10 h-10 rounded-full bg-icon-bg border border-border-custom flex items-center justify-center text-sm font-bold text-foreground flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{t.author}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
