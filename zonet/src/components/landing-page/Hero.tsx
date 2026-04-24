'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-[#F7F6F3] pt-24 md:pt-32 pb-0 overflow-visible">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-start md:items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="pt-8"
          >
            {/* Yellow Dot Badge */}
            <div className="flex items-center gap-2 mb-12">
              <div className="w-2.5 h-2.5 rounded-full bg-[#E8C547]"></div>
              <span className="text-[11px] font-black text-[#1A1A1A] tracking-[0.15em] uppercase">
                Digital Products. Real Impact.
              </span>
            </div>

            {/* Heading with inline underline */}
            <div className="mb-8">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-[#1A1A1A] leading-[1.1] font-heading">
                We turn bold ideas<br />
                into <span className="italic relative">
                  digital products
                  <svg className="absolute bottom-0 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0,8 Q50,0 100,8 T200,8" stroke="#E8C547" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
                <br />
                that scale.
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base lg:text-lg text-[#686B6B] mb-12 leading-relaxed max-w-xl">
              Zonettech is a digital product agency for fast-moving companies. We blend strategy, design and engineering to build products people love and businesses rely on.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 md:gap-6">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#1A1A1A] text-white font-bold text-sm rounded-full hover:bg-[#2A2A2A] transition-all hover:scale-105 active:scale-95"
              >
                See Our Work <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 text-[#1A1A1A] font-bold text-sm hover:underline"
              >
                Explore Services <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Hidden on Mobile */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:block relative h-[550px] -mr-32 mt-0"
          >
            {/* Main Illustration Placeholder */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              {/* Gradient background mimicking the 3D illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#B8C9E8] via-[#7A8DB0] to-[#1A1A1A]"></div>

              {/* Placeholder for illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white/30 font-bold text-lg">3D Illustration</p>
                  <p className="text-white/20 text-sm">Replace with your design</p>
                </div>
              </div>

              {/* Black accent shape bottom left */}
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black rounded-tr-full opacity-60"></div>

              {/* "Built for Growth" Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute top-12 right-8 w-72 bg-white rounded-2xl p-6 shadow-2xl z-10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#E8C547] flex items-center justify-center text-xl">
                    📈
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-3 font-heading">
                  Built for Growth
                </h3>
                <p className="text-sm text-[#686B6B] mb-4 leading-relaxed">
                  Digital products engineered to scale with your business.
                </p>
                <a href="#" className="text-sm font-bold text-[#1A1A1A] hover:text-[#E8C547] transition-colors inline-flex items-center gap-1.5">
                  Learn more <ArrowRight size={16} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom divider line */}
      <div className="border-t border-[#E6E4DF]"></div>
    </section>
  );
};

export default Hero;
