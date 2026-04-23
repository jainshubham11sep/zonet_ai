'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const brands = [
  { name: 'Flipshope', category: 'Shopping AI', src: '/images/clients/flipshope-logo.png' },
  { name: 'Hyyzo', category: 'Cashback & Rewards', src: '/images/clients/hyyzo-logo.png' },
  { name: 'TeacherDekho', category: 'Ed-Tech', src: '/images/clients/teacherdekho-logo.png' },
  { name: 'Puno Games', category: 'Gaming', src: '/images/clients/punogames-logo.png', href: 'https://punogames.com' },
  { name: 'Karekaisee', category: 'Consultancy', src: '/images/zonet/logo-light.png', href: 'https://karekaisee.com' }, 
  { name: 'Twitch Adblocker', category: 'Browser Tool', src: '/images/zonet/logo-light.png', href: 'https://chromewebstore.google.com/detail/twitch-adblock/hmaahgcbijnfogbgmnnjmlbfjoncneff' }, 
  { name: 'Kroolo', category: 'Productivity', src: '/images/clients/kroolo-logo.png', href: 'https://kroolo.com' },
  { name: 'My Flipshope', category: 'HRMS SaaS', src: '/images/clients/flipshope-logo.png' },
  { name: 'The Best Deals', category: 'Deals Platform', src: '/images/clients/thebestdeals-logo.png', href: 'https://thebestdeals.app' },
  { name: 'HyyFam', category: 'Social Rewards', src: '/images/clients/hyyfam-logo.png', href: 'https://hyyfam.com' },
  { name: 'Hyzify', category: 'FinTech', src: '/images/clients/hyzify-logo.png', href: 'https://hyzify.in' },
];

const Clients = () => {
  return (
    <section className="section-padding bg-background overflow-hidden flex flex-col items-center border-t border-border-custom">
      <div className="container mx-auto px-6 mb-16 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="section-label mb-6"
        >
          Our Portfolio
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-foreground tracking-tighter font-heading leading-tight"
        >
          Trusted by <span className="text-muted">Global Brands</span>
        </motion.h2>
      </div>

      <div className="relative w-full flex overflow-x-clip group">
        <motion.div 
          className="flex whitespace-nowrap gap-12 md:gap-20 items-center py-6"
          animate={{ x: [0, -1500] }}
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...brands, ...brands, ...brands].map((client, idx) => {
            const Wrapper = client.href ? Link : 'div';
            return (
              <Wrapper 
                key={idx} 
                href={client.href || '#'}
                target={client.href ? "_blank" : undefined}
                className={`flex flex-col items-center gap-5 flex-shrink-0 min-w-[140px] group/card ${client.href ? 'cursor-pointer' : ''}`}
              >
                {/* Circular Logo Container */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-white dark:bg-white/90 border-2 border-border-custom shadow-lg flex items-center justify-center p-5 md:p-8 overflow-hidden transition-all duration-500 group-hover/card:scale-110 group-hover/card:border-accent/30 group-hover/card:shadow-[0_0_30px_rgba(99,102,241,0.15)]">
                  <Image 
                    src={client.src} 
                    alt={client.name} 
                    width={80}
                    height={80}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Client Info */}
                <div className="text-center">
                  <h4 className={`text-foreground font-black text-sm md:text-base tracking-tight font-heading mb-1 ${client.href ? 'group-hover/card:text-accent transition-colors' : ''}`}>
                    {client.name}
                  </h4>
                  <p className="text-muted text-[10px] md:text-xs font-black uppercase tracking-widest opacity-60">
                    {client.category}
                  </p>
                </div>
              </Wrapper>
            );
          })}
        </motion.div>

        {/* Improved Deep Gradient Overlays for smooth entry/exit */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Clients;
