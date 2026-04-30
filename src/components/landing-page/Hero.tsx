'use client';

import { motion } from 'motion/react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import Image from 'next/image';
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
              <h1 className="text-4xl lg:text-5xl xl:text-6xl! font-bold! text-[#1A1A1A] leading-[1.1] font-heading">
                We turn bold ideas<br />
                into {" "}
                <em
                  className="italic"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 18' preserveAspectRatio='none'><path d='M3 11 C 60 3, 140 3, 220 8 S 290 14, 297 9' stroke='%23F5C518' stroke-width='6' stroke-linecap='round' fill='none' opacity='0.95'/></svg>")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "0 92%",
                    backgroundSize: "100% 0.5em",
                    paddingBottom: "0.05em",
                  }}
                >
                  digital products
                </em>
                <br />
                that scale.
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xs text-[#686B6B] mb-12 leading-relaxed max-w-sm">
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
            className="hidden md:block relative h-[550px] w-full"
          >
            {/* The Black Background Area */}
            <div className="absolute top-[-54px] right-0 bottom-0 left-32 bg-[#1A1A1A] rounded-bl-2xl rounded-tl-2xl">
              {/* Thin white lines */}
              <div className="absolute left-[35%] top-[60%] w-px h-[40%] bg-white/20"></div>
              <div className="absolute left-[35%] top-[60%] w-[65%] h-px bg-white/20"></div>
              <svg className="absolute left-[calc(35%-60px)] top-[calc(60%-60px)] w-[60px] h-[60px]" viewBox="0 0 100 100">
                <line x1="0" y1="0" x2="100" y2="100" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              </svg>
            </div>

            {/* The Building Image */}
            <div className="absolute w-100 top-10 left-[-64px] right-48 bottom-10 rounded-[24px] overflow-hidden shadow-2xl">
              <Image
                src="/images/zonet/hero-building.jpg"
                alt="Architecture building"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Built for Growth Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute top-20 right-24 w-[240px] bg-[#FCFCF9] rounded-[20px] p-5 shadow-2xl z-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#E8C547] flex items-center justify-center">
                  <TrendingUp size={20} className="text-[#1A1A1A]" strokeWidth={2.5} />
                </div>
              </div>
              <h3 className="text-[17px] font-bold text-[#1A1A1A] mb-2 font-heading">
                Built for Growth
              </h3>
              <p className="text-[13px] text-[#686B6B] mb-5 leading-relaxed">
                Digital products engineered to scale with your business.
              </p>
              <Link href="#" className="text-sm font-bold text-[#1A1A1A] hover:text-[#E8C547] transition-colors inline-flex items-center gap-1.5">
                Learn more <ArrowRight size={16} className="-rotate-45" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom divider line */}
      <div className="border-t border-[#E6E4DF]"></div>
    </section>
  );
};

export default Hero;
