'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
  ];

  return (
    <section className="py-16 bg-background overflow-hidden border-b border-border-custom">
      <div className="container mx-auto px-6 mb-10 text-center">
        <h6 className="text-sm md:text-base font-semibold text-muted tracking-tight">
          Trusted by Leading Tech Brands to Deliver
        </h6>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <motion.div 
          className="flex whitespace-nowrap gap-16 md:gap-24 py-4 items-center"
          animate={{ x: [0, -1500] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="relative h-8 md:h-10 w-24 md:w-32 flex-shrink-0 grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100 dark:invert dark:opacity-30 dark:hover:opacity-80">
              <Image 
                src={logo.src} 
                alt={logo.name} 
                fill 
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-marquee-fade to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-marquee-fade to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default ClientMarquee;
