'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const CreativesGrid = () => {
  const images = [
    '/images/zonet/screenshot-1.png',
    '/images/zonet/screenshot-2.png',
    '/images/zonet/screenshot-3.png',
    '/images/zonet/screenshot-4.png',
    '/images/zonet/screenshot-5.png',
    '/images/zonet/screenshot-6.png',
    '/images/zonet/screenshot-1.png',
    '/images/zonet/screenshot-2.png',
    '/images/zonet/screenshot-3.png',
  ];

  const columns = [
    { images: [...images, ...images].slice(0, 8), duration: 25, reverse: false },
    { images: [...images, ...images].slice(2, 10), duration: 32, reverse: true },
    { images: [...images, ...images].slice(4, 12), duration: 28, reverse: false },
    { images: [...images, ...images].slice(6, 14), duration: 35, reverse: true },
  ];

  return (
    <section className="bg-[#F7F6F3] overflow-hidden relative border-t border-border-custom">
      {/* Section label - in normal flow */}
      <div className="pt-16 pb-8 flex justify-center">
        <div className="section-label">
          Project Gallery
        </div>
      </div>

      <div className="h-[450px] md:h-[580px] flex items-center justify-center overflow-hidden relative">
      <div className="flex gap-4 md:gap-6 w-full max-w-[1400px] px-4">
        {columns.map((col, i) => (
          <motion.div 
            key={i}
            initial={{ y: col.reverse ? "-50%" : "0%" }}
            animate={{ y: col.reverse ? "0%" : "-50%" }}
            transition={{ 
              duration: col.duration, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className={`flex flex-col gap-4 md:gap-6 flex-1 min-w-0 ${i > 1 ? 'hidden md:flex' : ''} ${i > 2 ? 'hidden lg:flex' : ''}`}
          >
            {col.images.map((src, idx) => (
              <div 
                key={idx} 
                className="relative aspect-[1.3] bg-card rounded-[16px] md:rounded-[24px] overflow-hidden border border-border-custom shadow-sm"
              >
                <Image 
                  src={src} 
                  alt="Work mockup" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default CreativesGrid;
