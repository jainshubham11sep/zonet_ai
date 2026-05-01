'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const allImages = [
  '/images/zonet/screenshot-1.png',
  '/images/zonet/flipshope-1.png',
  '/images/zonet/hyyzo-1.png',
  '/images/zonet/screenshot-2.png',
  '/images/zonet/teacherdekho-1.png',
  '/images/zonet/screenshot-3.png',
  '/images/zonet/flipshope-2.png',
  '/images/zonet/hyyzo-2.png',
  '/images/zonet/screenshot-4.png',
  '/images/zonet/teacherdekho-2.png',
  '/images/zonet/screenshot-5.png',
  '/images/zonet/flipshope-3.png',
  '/images/zonet/hyyzo-3.png',
  '/images/zonet/screenshot-6.png',
  '/images/zonet/teacherdekho-3.png',
];

/* Each column gets a different slice, speed, direction, and vertical offset */
const columns = [
  { images: allImages.slice(0, 6),  duration: 30, reverse: false, offset: 0   },
  { images: allImages.slice(4, 10), duration: 40, reverse: true,  offset: -80 },
  { images: allImages.slice(8, 14), duration: 24, reverse: false, offset: -40 },
  { images: allImages.slice(2, 8),  duration: 36, reverse: true,  offset: -120 },
];

const ProjectsGallery = () => {
  return (
    <section className="bg-[#F7F6F3] border-t border-[#E6E4DF] overflow-hidden">

      {/* ── Section Header ── */}
      <div className="pt-16 pb-12 flex flex-col items-center text-center px-6">
        <div className="inline-flex items-center gap-2 section-label mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8C547] shrink-0" />
          Project Gallery
        </div>

        <h2 className="text-4xl md:text-[52px] font-black text-[#1A1A1A] font-heading tracking-tight leading-[1.1] max-w-2xl mb-4">
          Work that speaks{' '}
          <span className="text-[#E8C547]">for itself</span>
        </h2>

        <p className="text-[#686B6B] text-base leading-relaxed max-w-md">
          A glimpse into the products we&apos;ve designed, built and launched for our clients worldwide.
        </p>
      </div>

      <div className="relative">

        {/* Gallery Stage */}
        <div className="relative h-[520px] md:h-[700px] overflow-hidden">

          {/* Subtle dot-grid texture */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          {/* Inner scroll-edge fades (hide images at top/bottom of stage) */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-linear-to-b from-[#F7F6F3] to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-[#F7F6F3] to-transparent z-10 pointer-events-none" />

          {/* Columns */}
          <div className="flex gap-4 md:gap-5 h-full px-4 md:px-8 items-start">
            {columns.map((col, i) => {
              const imgs = [...col.images, ...col.images];
              return (
                <div
                  key={i}
                  className={`flex-1 min-w-0 overflow-hidden ${i >= 2 ? 'hidden md:block' : ''} ${i >= 3 ? 'hidden lg:block' : ''}`}
                  style={{ marginTop: col.offset }}
                >
                  <motion.div
                    className="flex flex-col gap-4 md:gap-5"
                    initial={{ y: col.reverse ? '-50%' : '0%' }}
                    animate={{ y: col.reverse ? '0%' : '-50%' }}
                    transition={{
                      duration: col.duration,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    {imgs.map((src, idx) => (
                      <div
                        key={idx}
                        className="relative rounded-2xl overflow-hidden bg-white border border-[#E5E5E5] shadow-sm group cursor-pointer"
                        style={{ aspectRatio: '4/3' }}
                      >
                        <Image
                          src={src}
                          alt="Project preview"
                          fill
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-[#E8C547]/0 group-hover:bg-[#E8C547]/5 transition-colors duration-300" />
                      </div>
                    ))}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
};

export default ProjectsGallery;
