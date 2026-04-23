'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const partners = [
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', desc: 'E-commerce' },
  { name: 'Flipkart', logo: 'https://www.vectorlogo.zone/logos/flipkart/flipkart-ar21.svg', desc: 'Marketplace' },
  { name: 'Myntra', logo: 'https://constant.myntassets.com/web/assets/img/MyntraLogo.png', desc: 'Fashion Tech' },
  { name: 'Play Store', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg', desc: 'Android' },
  { name: 'App Store', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg', desc: 'iOS' },
  { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg', desc: 'Advertising' },
  { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg', desc: 'Intelligence' },
  { name: 'Anthropic', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Anthropic_logo.svg', desc: 'AI Safety' },
  { name: 'Pinecone', logo: 'https://raw.githubusercontent.com/pinecone-io/pinecone-python-client/main/logo.png', desc: 'Vector DB' },
  { name: 'LangChain', logo: 'https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/langchain_logo.png', desc: 'Automation' },
  { name: 'Stripe', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg', desc: 'Payments' },
  { name: 'Vercel', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg', desc: 'Infrastructure' },
];

const consumerPartners = partners.slice(0, 6);
const aiPartners = partners.slice(6, 12);

const Marquee = ({ items, reverse = false }) => (
  <div className="flex overflow-hidden select-none gap-2 group py-2">
    <motion.div
      animate={{ x: reverse ? [0, -1920] : [-1920, 0] }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="flex flex-none gap-2 items-center min-w-full"
    >
      {[...items, ...items, ...items].map((partner, idx) => (
        <div key={`${partner.name}-${idx}`} className="flex flex-col items-center gap-2 px-2 min-w-[140px]">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-white border border-border-custom flex items-center justify-center p-6 shadow-sm group-hover:scale-105 transition-transform duration-500 overflow-hidden">
            <img 
              src={partner.logo}
              alt={partner.name}
              className="w-full h-full object-contain pointer-events-none"
            />
          </div>
          <span className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">{partner.name}</span>
        </div>
      ))}
    </motion.div>
  </div>
);

const Partners = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-24 bg-card-alt/30 border-y border-border-custom relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 mb-20">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-4 mx-auto"
          >
            Trusted Integrations
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground font-heading tracking-tighter">
            The <span className="text-accent italic">Technology</span> We Power.
          </h2>
        </div>
      </div>

      <div className="space-y-4 relative">
        {/* Masking gradients for smooth marquee edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <Marquee items={consumerPartners} />
        <Marquee items={aiPartners} reverse={true} />
      </div>
    </section>
  );
};

export default Partners;
