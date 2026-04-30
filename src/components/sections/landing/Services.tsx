"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";

const projects = [
  {
    id: 'flipshope',
    logo: '/images/clients/flipshope-logo.png',
    name: 'Flipshope',
    location: 'India',
    badges: ['Shopping AI'],
    platforms: ['Web', 'App', 'Extension'],
    platformLinks: {
      web: 'https://flipshope.com',
      app: 'https://play.google.com/store/apps/details?id=com.flipshopeApp&pcampaignid=web_share',
      extension: 'https://chromewebstore.google.com/detail/adikhbfjdbjkhelbdnffogkobkekkkej?utm_source=item-share-cb'
    },
    timeline: '6 Weeks Build',
    description: [
      { text: "Built an " },
      { text: 'AI-powered shopping assistant', highlight: true },
      { text: ' for 1.5M+ users, featuring ' },
      { text: 'real-time price tracking', highlight: true },
      { text: ' and ' },
      { text: '#1 auto-coupon engine', highlight: true },
      { text: ' in the region.' },
    ],
    stats: [
      { value: '1.5M+', label: 'Active Users' },
      { value: '4.5/5', label: 'Play Store Rating' },
      { value: '10+', label: 'Major Retailers' },
    ],
    quote: "The Zonet team transformed our complex data tracking into a seamless, high-performance UI that our users love.",
    client: { name: 'Ashutosh Goyal', role: 'Founder @ Flipshope' },
    mainImg: '/images/zonet/flipshope-1.png',
    subImg1: '/images/zonet/flipshope-2.png',
    subImg2: '/images/zonet/flipshope-3.png',
  },
  {
    id: 'hyyzo',
    logo: '/images/clients/hyyzo-logo.png',
    name: 'Hyyzo',
    location: 'India',
    badges: ['FinTech'],
    platforms: ['Web', 'App', 'Extension'],
    platformLinks: {
      web: 'https://hyyzo.com',
      app: 'https://play.google.com/store/apps/details?id=com.hyyzoApp&pcampaignid=web_share',
      extension: 'https://chromewebstore.google.com/detail/phcfbbmblbcbchdlfmcfcakhcpdlnhdk?utm_source=item-share-cb'
    },
    timeline: '8 Weeks Build',
    description: [
      { text: 'Developed India\'s ' },
      { text: 'highest-paying cashback platform', highlight: true },
      { text: ' with a robust ' },
      { text: 'Profit Link affiliate engine', highlight: true },
      { text: ' supporting ' },
      { text: '200+ partner stores', highlight: true },
      { text: ' globally.' },
    ],
    stats: [
      { value: '100k+', label: 'Active Earners' },
      { value: '200+', label: 'Partner Brands' },
      { value: '4.4★', label: 'App Rating' },
    ],
    quote: "ZonetTech built our Profit Links feature from scratch, and it's now our highest-converting acquisition channel.",
    client: { name: 'Aarav Jain', role: 'Product Head @ Hyyzo' },
    mainImg: '/images/zonet/hyyzo-1.png',
    subImg1: '/images/zonet/hyyzo-2.png',
    subImg2: '/images/zonet/hyyzo-3.png',
  },
  {
    id: 'teacherdekho',
    logo: '/images/clients/teacherdekho-logo.png',
    name: 'TeacherDekho',
    location: 'India',
    badges: ['Ed-Tech'],
    platforms: ['Web', 'App', 'Extension'],
    platformLinks: {
      web: 'https://dev.thebestdeals.app',
      app: 'https://dev.thebestdeals.app',
    },
    timeline: '5 Weeks Build',
    description: [
      { text: 'Architected a ' },
      { text: 'verified mentor network', highlight: true },
      { text: ' for 50k+ students (live on dev.thebestdeals.app), delivering ' },
      { text: 'personalized learning paths', highlight: true },
      { text: ' and ' },
      { text: 'real-time progress analytics', highlight: true },
      { text: '.' },
    ],
    stats: [
      { value: '50k+', label: 'Students' },
      { value: '2k+', label: 'Verified Mentors' },
      { value: '4.8★', label: 'Learning Rating' },
    ],
    quote: "Finding quality education shouldn't be a luxury. Zonet helped us build a platform that democratizes access to expert mentors.",
    client: { name: 'Himanshu Jain', role: 'Operations Lead @ TeacherDekho' },
    mainImg: '/images/zonet/teacherdekho-1.png',
    subImg1: '/images/zonet/teacherdekho-2.png',
    subImg2: '/images/zonet/teacherdekho-3.png',
  },
];

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const BLOB_PATH =
  "M143.1,54.6 C156.7,60.1 169.3,72.8 173.9,88.6 C178.6,104.3 175.4,123 163.5,130 C151.5,137.1 130.8,132.5 114.8,136.7 C98.7,140.8 87.2,153.8 73.1,156.3 C59,158.8 42.3,150.9 34.8,137.7 C27.2,124.5 28.8,106.1 34.4,90.8 C39.9,75.5 49.5,63.3 61.1,57.4 C72.6,51.5 86.3,52 100.5,51.4 C114.7,50.7 129.4,49.1 143.1,54.6 Z";

const services = [
  {
    image: '/images/zonet/screenshot-1.png',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8901A" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Web Design",
    desc: "Premium, high-converting websites built with modern frameworks and a severe focus on user experience.",
    tags: ["UI/UX", "NEXT.JS", "MOTION"],
  },
  {
    image: '/images/zonet/screenshot-2.png',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8901A" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: "Mobile Apps",
    desc: "Sleek, performant mobile applications tailored for iOS and Android platforms.",
    tags: ["REACT NATIVE", "IOS", "ANDROID"],
  },
  {
    image: '/images/zonet/screenshot-3.png',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8901A" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    title: "AI Tools & Agents",
    desc: "Custom AI integrations and autonomous agents designed to revolutionize your workflows.",
    tags: ["LLMS", "AUTOMATION", "GPT-4"],
  },
  {
    image: '/images/zonet/flipshope-1.png',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8901A" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "MVP Development",
    desc: "From idea to reality in 7–30 days. Fast, scalable, and production-ready architectures.",
    tags: ["REACT", "NODE.JS", "CLOUD"],
  },
  {
    image: '/images/zonet/hyyzo-1.png',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8901A" strokeWidth="2">
        <path d="M21.5 2l-11 20-3-8-8-3 22-9z" />
      </svg>
    ),
    title: "Website Upgrades",
    desc: "Modernizing legacy systems into lightning-fast, highly optimized digital experiences.",
    tags: ["PERFORMANCE", "SEO", "NEXT.JS"],
  },
  {
    image: '/images/zonet/teacherdekho-1.png',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8901A" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Conversion Audit",
    desc: "Data-driven analysis and meticulous optimization to skyrocket your website's overall ROI.",
    tags: ["ANALYTICS", "CRO", "A/B TEST"],
  },
];

/* ─────────────────────────────────────────────
   CARD
───────────────────────────────────────────── */
function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      className="cursor-pointer group relative"
      style={{ borderRadius: 24, overflow: "hidden" }}
    >
      {/* ── Image Section — fully transparent, no bg, no border ── */}
      <div
        className="relative flex justify-center items-end overflow-hidden"
        style={{ height: 260 }}
      >
        {/* Organic amber blob */}
        <div
          className="absolute"
          style={{
            width: 240,
            height: 240,
            top: -20,
            left: 20,
            background: "#F1C21B",
            opacity: 0.35,
            clipPath: `path('${BLOB_PATH}')`,
            zIndex: 0,
          }}
        />

        {/* Screenshot image — floats at bottom, top rounded, slides up on hover */}
        <div
          className="relative overflow-hidden rounded-t-2xl transition-transform duration-500 group-hover:-translate-y-2"
          style={{
            width: "88%",
            height: 240,
            transform: `translateY(18px) rotate(${index % 2 === 0 ? "3deg" : "-4deg"})`,
            zIndex: 2,
          }}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          />
        </div>
      </div>

      {/* ── Content Section — white card, only bottom half ── */}
      <div
        className="relative bg-white -mt-10"
        style={{
          zIndex: 10,
          borderRadius: "0 0 24px 24px",
        }}
      >
        {/* Curved white top edge */}
        <div
          className="absolute bg-white pointer-events-none"
          style={{
            top: -15,
            left: "-10%",
            width: "120%",
            height: 50,
            borderRadius: "50% 50% 0 0",
          }}
        />

        {/* Body */}
        <div className="relative z-10 p-4">
          <h3
            className="font-bold text-slate-900 tracking-tight mb-3"
            style={{ fontSize: 22, lineHeight: 1.3 }}
          >
            {service.title}
          </h3>

          <p className="text-slate-500 text-xs leading-relaxed mb-6">
            {service.desc}
          </p>

          {/* Tags + Arrow */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-semibold text-gray-600"
                  style={{
                    background: "#fcefdc",
                    padding: "4px 10px",
                    borderRadius: 6,
                    fontSize: 11,
                    letterSpacing: "0.02em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <motion.button
              whileHover="hovered"
              className="shrink-0 flex items-center justify-center transition-all duration-300 group-hover:bg-[#E8901A] group-hover:border-[#E8901A] group-hover:text-white"
              style={{
                width: 40,
                height: 40,
                border: "1px solid #fcefdc",
                borderRadius: 100,
                color: "#111",
                background: "transparent",
              }}
            >
              <motion.span
                className="inline-flex"
                variants={{ hovered: { x: 4, y: -4 } }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </motion.span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   SECTION
───────────────────────────────────────────── */
export default function ServicesSection() {
  return (
    <section className="bg-[#f2ede8] py-20 px-6">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="text-center mb-14 max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.15em] text-gray-500 mb-7 bg-white/60 backdrop-blur-sm uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8901A]" />
          Our Services
        </div>
        <h2 className="text-[42px] md:text-5xl font-black text-gray-900 leading-[1.1] mb-5 tracking-tight font-heading">
          Your full-stack design partner to
          <br />
          solve all your{" "}
          <em className="not-italic text-[#E8901A]">creative problems</em>
        </h2>
        <p className="text-gray-500 text-base leading-relaxed max-w-lg mx-auto">
          We combine strategy, design and technology to build digital products
          that are beautiful, functional and built to scale.
        </p>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {services.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </motion.div>
    </section>
  );
}
