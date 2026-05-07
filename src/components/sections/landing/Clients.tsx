'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

const brands = [
  { name: 'Kroolo', category: 'Productivity', src: '/images/clients/kroolo-logo.png' },
  { name: 'My Flipshope', category: 'HRMS SaaS', src: '/images/clients/flipshope-logo.png' },
  { name: 'The Best Deals', category: 'Deals Platform', src: '/images/clients/thebestdeals-logo.png' },
  { name: 'HyyFam', category: 'Social Rewards', src: '/images/clients/hyyfam-logo.png' },
  { name: 'Hyzify', category: 'FinTech', src: '/images/clients/hyzify-logo.png' },
  { name: 'Flipshope', category: 'Shopping AI', src: '/images/clients/flipshope-logo.png' },
  { name: 'Hyyzo', category: 'Cashback & Rewards', src: '/images/clients/hyyzo-logo.png' },
  { name: 'TeacherDekho', category: 'Ed-Tech', src: '/images/clients/teacherdekho-logo.png' },
  { name: 'Puno Games', category: 'Gaming', src: '/images/clients/punogames-logo.png' },
  { name: 'Karekaisee', category: 'Consultancy', src: '/images/zonet/logo-light.png' },
  { name: 'Twitch Adblocker', category: 'Browser Tool', src: '/images/zonet/logo-light.png' },
];

const CARD_GAP = 32;

const underlineSvg = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 18' preserveAspectRatio='none'><path d='M3 11 C 60 3, 140 3, 220 8 S 290 14, 297 9' stroke='%23E8C547' stroke-width='6' stroke-linecap='round' fill='none' opacity='0.95'/></svg>")`;

const BrandCard = ({ brand }: { brand: typeof brands[0] }) => (
  <div className="flex flex-col items-center gap-4 shrink-0">
    <div className="w-[130px] h-[130px] rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center p-7">
      <Image
        src={brand.src}
        alt={brand.name}
        width={72}
        height={72}
        className="object-contain w-full h-full"
      />
    </div>
    <div className="text-center">
      <h4 className="text-[#1A1A1A] font-bold text-sm font-heading leading-tight mb-1">
        {brand.name}
      </h4>
      <p className="text-[#686B6B] text-[10px] font-black uppercase tracking-[0.15em]">
        {brand.category}
      </p>
    </div>
  </div>
);

const Clients = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const firstSet = firstSetRef.current;
    if (!track || !firstSet) return;

    let animationId: number;
    let x = 0;
    const speed = 0.8;

    const animate = () => {
      x += speed;
      const setWidth = firstSet.offsetWidth + CARD_GAP;
      if (x >= setWidth) x -= setWidth;
      track.style.transform = `translateX(-${x}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="section-padding bg-[#F7F6F3] border-t border-[#E6E4DF] overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center mb-16">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] text-[#686B6B] mb-6"
          style={{ border: '1.5px solid #E8C547' }}
        >
          Our Portfolio
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-[#1A1A1A] font-heading leading-tight mb-5"
        >
          Trusted by{' '}
          <em
            style={{
              backgroundImage: underlineSvg,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0 95%',
              backgroundSize: '100% 0.45em',
              paddingBottom: '0.1em',
            }}
          >
            Global Brands
          </em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base text-[#686B6B] max-w-lg leading-relaxed"
        >
          We partner with innovative companies across industries to build digital
          products that drive growth and create real impact.
        </motion.p>
      </div>

      {/* Infinite Marquee */}
      <div
        className="marquee-container overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <div ref={trackRef} className="flex items-start" style={{ gap: `${CARD_GAP}px` }}>
          {/* First set — measured for loop reset */}
          <div ref={firstSetRef} className="flex items-start shrink-0" style={{ gap: `${CARD_GAP}px` }}>
            {brands.map((brand) => (
              <BrandCard key={brand.name} brand={brand} />
            ))}
          </div>
          {/* Second set — identical clone */}
          <div className="flex items-start shrink-0" style={{ gap: `${CARD_GAP}px` }}>
            {brands.map((brand) => (
              <BrandCard key={`clone-${brand.name}`} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
