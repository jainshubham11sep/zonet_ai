'use client';

import { motion } from 'framer-motion';

const TrustedBy = () => {
  const partners = [
    { name: 'lumen', icon: '⚡' },
    { name: 'ProLine', icon: '📋' },
    { name: 'cloudtica', icon: '☁️' },
    { name: 'Brightly', icon: '✨' },
    { name: 'OnPoint', icon: '🎯' },
    { name: 'Leapstack', icon: '🚀' },
  ];

  return (
    <section className="bg-[#F7F6F3] border-t border-[#E6E4DF] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          {/* Left - Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <p className="text-xs font-black text-[#1A1A1A] tracking-[0.1em] uppercase leading-relaxed">
              Trusted by<br />
              Innovative Teams
            </p>
          </motion.div>

          {/* Right - Partners Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="flex flex-wrap gap-8 md:gap-12 items-center justify-start md:justify-start">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-2 group cursor-default"
                >
                  <span className="text-xl text-[#686B6B] group-hover:text-[#E8C547] transition-colors">
                    {partner.icon}
                  </span>
                  <span className="text-sm font-semibold text-[#686B6B] group-hover:text-[#1A1A1A] transition-colors whitespace-nowrap">
                    {partner.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
