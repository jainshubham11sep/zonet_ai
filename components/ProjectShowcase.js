'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Star } from 'lucide-react';

// Unified project data — images from original showcase + BricxLabs card info mixed in
const projects = [
  {
    id: 'writesonic',
    // Logo
    logo: '/images/Oj0hkdK9UWGd1CwTPer0RKGsgYQ.png',
    name: 'Writesonic',
    location: 'San Francisco, USA',
    badges: ['AI SaaS', 'VC Backed', 'SF'],
    // Highlighted description (BricxLabs style)
    description: [
      { text: "Designed the world's first " },
      { text: 'GEO-optimized dashboard', highlight: 'green' },
      { text: ' for 1M+ users, driving a ' },
      { text: '3x increase in feature adoption', highlight: 'blue' },
      { text: ' and securing the ' },
      { text: '#1 AI product ranking', highlight: 'yellow' },
      { text: ' across all key benchmarks.' },
    ],
    // Stat boxes (BricxLabs style)
    stats: [
      { value: '3x', label: 'Feature Adoption', color: 'green' },
      { value: '#1', label: 'AI Ranking', color: 'blue' },
      { value: '1M+', label: 'Users Served', color: 'yellow' },
    ],
    // Testimonial quote
    quote: "Their designs consistently balanced aesthetics with functionality and business objectives.",
    client: { name: 'Samanyou Garg', role: 'CEO @ Writesonic' },
    // Scrolling images (same as before)
    mainImg: '/images/zonet/screenshot-1.png',
    subImg1: '/images/zonet/screenshot-2.png',
    subImg2: '/images/zonet/screenshot-3.png',
  },
  {
    id: 'sybill',
    logo: '/images/iM9Iux2j56q05nR8KbQ8xubLATc.png',
    name: 'Sybill AI',
    location: 'Palo Alto, USA',
    badges: ['Sales AI', 'Series A', 'Palo Alto'],
    description: [
      { text: 'Rebuilt the entire product UI for a ' },
      { text: 'Series A AI sales platform', highlight: 'green' },
      { text: ', achieving ' },
      { text: '47% faster onboarding', highlight: 'blue' },
      { text: ' and a confirmed ' },
      { text: '5-star rating', highlight: 'yellow' },
      { text: ' within 2 months of launch.' },
    ],
    stats: [
      { value: '47%', label: 'Faster Onboarding', color: 'green' },
      { value: '5★', label: 'Client Rating', color: 'blue' },
      { value: '2x', label: 'Revenue Growth', color: 'yellow' },
    ],
    quote: "ZonetTech is our go-to partner for all things design. They ship fast and at a level of quality we've never seen elsewhere.",
    client: { name: 'Gorish Aggarwal', role: 'CEO @ Sybill' },
    mainImg: '/images/zonet/screenshot-4.png',
    subImg1: '/images/zonet/screenshot-5.png',
    subImg2: '/images/zonet/screenshot-6.png',
  },
  {
    id: 'manyreach',
    logo: '/images/KH6um2ORF1x7FHcn5pq9LinIs.png',
    name: 'Manyreach',
    location: 'Europe',
    badges: ['B2B SaaS', 'Bootstrapped', 'Europe'],
    description: [
      { text: 'Built the ' },
      { text: '#1 cold email automation product', highlight: 'green' },
      { text: ' from zero to ' },
      { text: '10k active users in 60 days', highlight: 'blue' },
      { text: ', powered by a full ' },
      { text: 'conversion-first design system', highlight: 'yellow' },
      { text: '.' },
    ],
    stats: [
      { value: '10k', label: 'Active Users', color: 'green' },
      { value: '60', label: 'Days to Launch', color: 'blue' },
      { value: '#1', label: 'Category Rank', color: 'yellow' },
    ],
    quote: "The level of attention to detail and speed of delivery is unmatched. They understood our vision perfectly.",
    client: { name: 'Elena Rodriguez', role: 'Product Head @ Manyreach' },
    mainImg: '/images/zonet/screenshot-1.png',
    subImg1: '/images/zonet/screenshot-5.png',
    subImg2: '/images/zonet/screenshot-3.png',
  },
];

// Theme-aware highlight text colors
const highlightText = {
  green:  'text-emerald-500 dark:text-emerald-400',
  blue:   'text-blue-500   dark:text-blue-400',
  yellow: 'text-amber-500  dark:text-amber-400',
};

// Theme-aware stat box colors
const statBox = {
  green:  'bg-emerald-500/10 dark:bg-emerald-500/20 border-emerald-300/40 dark:border-emerald-700/50 text-emerald-600 dark:text-emerald-400',
  blue:   'bg-blue-500/10   dark:bg-blue-500/20   border-blue-300/40   dark:border-blue-700/50   text-blue-600   dark:text-blue-400',
  yellow: 'bg-amber-500/10  dark:bg-amber-500/20  border-amber-300/40  dark:border-amber-700/50  text-amber-600  dark:text-amber-400',
};

const ProjectImage = ({ src, alt }) => (
  <div className="relative aspect-[1.3] w-full rounded-[24px] md:rounded-[36px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] border border-border-custom bg-card-alt group">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
    />
  </div>
);

const ProjectShowcase = () => {
  return (
    <section className="py-24 bg-background border-t border-border-custom">

      {/* Section Header */}
      <div className="container mx-auto px-6 mb-24 flex flex-col items-start lg:items-center text-left lg:text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="px-3 py-1 rounded-full border border-badge-border bg-badge-bg text-[10px] font-bold text-muted mb-4 uppercase tracking-[0.2em]"
        >
          Selected Works
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-foreground tracking-tighter leading-[1.1] font-heading"
        >
          We Help Brands Build <br className="hidden lg:block" />
          <span className="text-muted">Iconic Products</span>
        </motion.h2>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-40 lg:gap-56">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >

              {/* ── LEFT: Sticky Text Column ── */}
              <div className="w-full lg:w-[45%] h-fit lg:sticky lg:top-28 flex flex-col gap-7">

                {/* 1. Logo + Company name + Location + Link */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Logo box — forced white bg so logo is ALWAYS visible in any theme */}
                    <div className="w-12 h-12 rounded-[14px] bg-white border border-gray-200 shadow-sm flex items-center justify-center flex-shrink-0 p-2 overflow-hidden">
                      <Image
                        src={project.logo}
                        alt={`${project.name} logo`}
                        width={40}
                        height={40}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground font-heading leading-tight">
                        {project.name}
                      </h3>
                      <p className="text-xs text-muted mt-0.5">{project.location}</p>
                    </div>
                  </div>
                  <Link
                    href={`/case-studies/${project.id}`}
                    className="w-9 h-9 flex-shrink-0 rounded-full border border-border-custom bg-card-alt flex items-center justify-center text-muted hover:bg-button-bg hover:text-button-fg hover:border-transparent transition-all"
                  >
                    <ArrowUpRight size={16} />
                  </Link>
                </div>

                {/* 2. Category Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.badges.map((badge, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full border border-badge-border bg-badge-bg text-[10px] font-bold text-muted uppercase tracking-widest"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* 3. Highlighted description (BricxLabs style) */}
                <p className="text-secondary text-base md:text-lg leading-relaxed">
                  {project.description.map((seg, i) =>
                    seg.highlight ? (
                      <span key={i} className={`font-semibold ${highlightText[seg.highlight]}`}>
                        {seg.text}
                      </span>
                    ) : (
                      <span key={i}>{seg.text}</span>
                    )
                  )}
                </p>

                {/* 4. Stat Metric Boxes (BricxLabs style) */}
                <div className="grid grid-cols-3 gap-3">
                  {project.stats.map((stat, i) => (
                    <div
                      key={i}
                      className={`rounded-[16px] border px-3 py-4 flex flex-col items-center justify-center gap-1 ${statBox[stat.color]}`}
                    >
                      <span className="text-2xl md:text-3xl font-black leading-none font-heading tracking-tight">
                        {stat.value}
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-widest opacity-70 text-center leading-tight">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-border-custom" />

                {/* 5. Star Rating */}
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="fill-foreground text-foreground" />
                  ))}
                  <span className="text-xs font-bold text-muted ml-2 border-b border-muted pb-0.5">Client Review</span>
                </div>

                {/* 6. Testimonial quote */}
                <p className="text-base md:text-lg text-foreground italic font-medium leading-relaxed border-l-4 border-border-custom pl-5">
                  "{project.quote}"
                </p>

                {/* 7. Client profile */}
                <div className="flex items-center gap-4 pt-2">
                  <div className="w-10 h-10 rounded-full border border-border-custom bg-card-alt flex items-center justify-center text-sm font-bold text-secondary flex-shrink-0">
                    {project.client.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{project.client.name}</p>
                    <p className="text-xs text-muted">{project.client.role}</p>
                  </div>
                </div>

                {/* 8. CTA button - visible only on mobile */}
                <Link
                  href={`/case-studies/${project.id}`}
                  className="lg:hidden px-6 py-3 rounded-full border border-border-custom text-foreground text-sm font-bold hover:bg-button-bg hover:text-button-fg transition-all flex items-center justify-center gap-2 group w-full"
                >
                  View Case Study <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              {/* ── RIGHT: 3 Scrolling Images ── */}
              <div className="w-full lg:w-[55%] flex flex-col gap-8 md:gap-14">
                {[project.mainImg, project.subImg1, project.subImg2].map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true, margin: '-10%' }}
                  >
                    <ProjectImage src={img} alt={`${project.name} screenshot ${i + 1}`} />
                  </motion.div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 text-center"
        >
          <Link
            href="/case-studies"
            className="text-xl md:text-2xl font-bold border-b-2 border-foreground pb-2 text-foreground hover:opacity-50 transition-opacity"
          >
            Explore all our work →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
