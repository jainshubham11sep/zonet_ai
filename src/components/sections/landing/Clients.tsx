'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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

const ITEMS_PER_PAGE = 7;

const underlineSvg = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 18' preserveAspectRatio='none'><path d='M3 11 C 60 3, 140 3, 220 8 S 290 14, 297 9' stroke='%23E8C547' stroke-width='6' stroke-linecap='round' fill='none' opacity='0.95'/></svg>")`;

const Clients = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(brands.length / ITEMS_PER_PAGE);
  const currentBrands = brands.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

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

      {/* Client Cards */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Desktop: single flex row with vertical dividers */}
            <div className="hidden lg:flex items-stretch">
              {currentBrands.map((brand, i) => (
                <div key={brand.name} className="flex items-stretch flex-1">
                  <div className="flex-1 flex flex-col items-center justify-center gap-4 py-8">
                    <div className="w-[130px] h-[130px] rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center p-7 shrink-0">
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
                  {i < currentBrands.length - 1 && (
                    <div className="w-px bg-[#E6E4DF] my-6 self-stretch" />
                  )}
                </div>
              ))}
            </div>

            {/* Mobile / Tablet: responsive grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:hidden">
              {currentBrands.map((brand) => (
                <div key={brand.name} className="flex flex-col items-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center p-5">
                    <Image
                      src={brand.src}
                      alt={brand.name}
                      width={56}
                      height={56}
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
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          className="w-11 h-11 rounded-full border border-[#E6E4DF] flex items-center justify-center hover:border-[#1A1A1A] transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous page"
        >
          <ArrowLeft size={16} className="text-[#1A1A1A]" />
        </button>

        <span className="text-sm text-[#1A1A1A] font-medium tabular-nums">
          {page + 1} / {totalPages}
        </span>

        <button
          onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={page === totalPages - 1}
          className="w-11 h-11 rounded-full border border-[#E6E4DF] flex items-center justify-center hover:border-[#1A1A1A] transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next page"
        >
          <ArrowRight size={16} className="text-[#1A1A1A]" />
        </button>
      </div>
    </section>
  );
};

export default Clients;
