'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ClientMarquee = () => {
  const logos = [
    { name: 'Sybill', src: '/images/iM9Iux2j56q05nR8KbQ8xubLATc.png' },
    { name: 'Hobbes', src: '/images/ggPryskIM2YvgwtACdwewmm34.png' },
    { name: 'Writesonic', src: '/images/Oj0hkdK9UWGd1CwTPer0RKGsgYQ.png' },
    { name: 'Thrust', src: '/images/uOW0hjypMCFsQj7FIg7RYBfpUbQ.png' },
    { name: 'Manyreach', src: '/images/KH6um2ORF1x7FHcn5pq9LinIs.png' },
    { name: 'Gigamind', src: '/images/6dXLBGvMjuKhK4CigtS9xqKQk.png' },
    { name: 'Camb', src: '/images/iVoATJDfLsbfwmt2SJ1YPU3e70.png' },
    { name: 'Socialsonic', src: '/images/brKMfWJ5jHeMsNAWwyFABDqRo6c.png' },
    { name: 'Kearney', src: '/images/pfA9SX6jwreKWvbr4PZSURK0m8.png' },
    { name: 'Instadapp', src: '/images/mTd8zLlvXduYRNhaJAYMBmnLTRg.png' },
    { name: 'PunoGames', href: 'https://punogames.com' },
    { name: 'KareKaisee', href: 'https://karekaisee.com' },
    { name: 'Twitch Adblock', href: 'https://chromewebstore.google.com/detail/twitch-adblock/hmaahgcbijnfogbgmnnjmlbfjoncneff' },
    { name: 'Kroolo', href: 'https://kroolo.com' },
    { name: 'The Best Deals', href: 'https://thebestdeals.app' },
    { name: 'Hyyfam', href: 'https://hyyfam.com' },
    { name: 'Hyzify', href: 'https://hyzify.in', src: '/images/hyzify-logo.png' },
  ];

  return (
    <section className="py-20 bg-background overflow-hidden border-b border-border-custom">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h6 className="text-[10px] font-black text-muted uppercase tracking-[0.3em] font-sans">
          Trusted by Industry Giants & Scaling Startups
        </h6>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <motion.div 
          className="flex whitespace-nowrap gap-16 md:gap-24 py-8 items-center"
          animate={{ x: [0, -2000] }}
          transition={{ 
            duration: 60, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...logos, ...logos, ...logos].map((logo, idx) => {
            const Wrapper = logo.href ? Link : 'div';
            return (
              <Wrapper 
                key={idx} 
                href={logo.href || '#'}
                target={logo.href ? "_blank" : undefined}
                className="relative h-7 md:h-8 w-32 md:w-40 flex items-center justify-center flex-shrink-0 grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer dark:invert dark:opacity-20 dark:hover:opacity-60"
              >
                {logo.src ? (
                  <Image 
                    src={logo.src} 
                    alt={logo.name} 
                    fill 
                    className="object-contain"
                  />
                ) : (
                  <span className="font-black text-lg md:text-xl text-foreground font-heading tracking-tighter whitespace-nowrap">{logo.name}</span>
                )}
              </Wrapper>
            );
          })}
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default ClientMarquee;
