'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const CreativesGrid = () => {
  const images = [
    '/images/ub6LKW8jTFqQ6WWiQ8gIr3menBs.png',
    '/images/VTsAFrNs7VOLBmamTaMAupxxj4Q.png',
    '/images/ayLPoJlOL2BmfSdDMrd4w8Bh00.png',
    '/images/ECp03YyC5hERqToL1FhnX3f6ys.png',
    '/images/UN6pyiToPDKCeksYIYjpaMNVaLc.png',
    '/images/5t0RodvqZEk7lkFYbTdxLjGY.png',
    '/images/K2KSO4UKtXImqjy2Ws0Bh2oesCg.png',
    '/images/1XQYyYgSoFYMUzlJHURSyG54.png',
    '/images/pW43owwEJhkOk3Lpkgki4BpmWyo.png',
  ];

  const columns = [
    { images: [...images, ...images].slice(0, 8), duration: 25, reverse: false },
    { images: [...images, ...images].slice(2, 10), duration: 32, reverse: true },
    { images: [...images, ...images].slice(4, 12), duration: 28, reverse: false },
    { images: [...images, ...images].slice(6, 14), duration: 35, reverse: true },
  ];

  return (
    <section className="h-[600px] bg-section-alt overflow-hidden relative flex items-center justify-center border-t border-border-custom">
      {/* Section label overlay */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none">
        <span className="px-4 py-1.5 rounded-full border border-border-custom bg-card/80 backdrop-blur-sm text-[10px] font-bold text-muted uppercase tracking-[0.2em]">
          Project Gallery
        </span>
      </div>

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
    </section>
  );
};

export default CreativesGrid;
