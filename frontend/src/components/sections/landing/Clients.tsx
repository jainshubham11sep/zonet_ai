"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { SectionBadge } from "@/components/ui";

const brands = [
  {
    name: "Kroolo",
    category: "Productivity",
    src: "/images/clients/kroolo.png",
  },
  {
    name: "My Flipshope",
    category: "HRMS SaaS",
    src: "/images/clients/hrms.png",
  },
  {
    name: "The Best Deals",
    category: "Deals Platform",
    src: "/images/clients/tbd.png",
  },
  {
    name: "HyyFam",
    category: "Social Rewards",
    src: "/images/clients/hyyfam.png",
  },
  {
    name: "Hyzify",
    category: "FinTech",
    src: "/images/clients/hyzify.png",
  },
  {
    name: "Flipshope",
    category: "Shopping AI",
    src: "/images/clients/flipshope.png",
  },
  {
    name: "Hyyzo",
    category: "Cashback & Rewards",
    src: "/images/clients/hyyzo.png",
  },
  {
    name: "TeacherDekho",
    category: "Ed-Tech",
    src: "/images/clients/teacher-dekho.png",
  },
  {
    name: "Puno Games",
    category: "Gaming",
    src: "/images/clients/puno-games.png",
  },
  {
    name: "Karekaisee",
    category: "Consultancy",
    src: "/images/clients/kaise-karen.png",
  },
  {
    name: "Twitch Adblocker",
    category: "Browser Tool",
    src: "/images/clients/twitch.png",
  },
];

const CARD_GAP = 80;

const underlineSvg = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 18' preserveAspectRatio='none'><path d='M3 11 C 60 3, 140 3, 220 8 S 290 14, 297 9' stroke='%23E8C547' stroke-width='6' stroke-linecap='round' fill='none' opacity='0.95'/></svg>")`;

const BrandLogo = ({ brand }: { brand: (typeof brands)[0] }) => (
  <div className="shrink-0 group flex items-center justify-center px-2 cursor-default">
    <Image
      src={brand.src}
      alt={brand.name}
      width={140}
      height={48}
      className="h-9 w-auto max-w-[130px] object-contain group-hover:scale-110 transition-transform duration-300 ease-out"
    />
  </div>
);

const Clients = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    const firstSet = firstSetRef.current;
    if (!track || !firstSet) return;

    let animationId: number;
    let x = 0;
    const speed = 1.2;

    const animate = () => {
      if (!isPausedRef.current) {
        x += speed;
        const setWidth = firstSet.offsetWidth + CARD_GAP;
        if (x >= setWidth) x -= setWidth;
        track.style.transform = `translateX(-${x}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="section-padding bg-[#F7F6F3] border-t border-[#E6E4DF] overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center mb-16">
        <SectionBadge>Our Portfolio</SectionBadge>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-[#1A1A1A] font-sora leading-tight mb-5"
        >
          Trusted by <span className="text-[#E8C547]">Global Brands</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base text-[#686B6B] max-w-lg leading-relaxed"
        >
          We partner with innovative companies across industries to build
          digital products that drive growth and create real impact.
        </motion.p>
      </div>

      {/* Infinite Marquee */}
      <div
        className="marquee-container overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
        onMouseEnter={() => { isPausedRef.current = true; }}
        onMouseLeave={() => { isPausedRef.current = false; }}
      >
        <div
          ref={trackRef}
          className="flex items-center py-4"
          style={{ gap: `${CARD_GAP}px` }}
        >
          <div
            ref={firstSetRef}
            className="flex items-center shrink-0"
            style={{ gap: `${CARD_GAP}px` }}
          >
            {brands.map((brand) => (
              <BrandLogo key={brand.name} brand={brand} />
            ))}
          </div>
          <div
            className="flex items-center shrink-0"
            style={{ gap: `${CARD_GAP}px` }}
          >
            {brands.map((brand) => (
              <BrandLogo key={`clone-${brand.name}`} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
