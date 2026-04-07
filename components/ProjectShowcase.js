'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Star, Globe, Smartphone, Puzzle, Timer, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    id: 'flipshope',
    logo: '/images/clients/flipshope-logo.png',
    name: 'Flipshope',
    location: 'India',
    badges: ['Shopping AI'],
    platforms: ['Web', 'App', 'Extension'],
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
    client: { name: 'Ashutosh Singh', role: 'Founder @ Flipshope' },
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
    client: { name: 'Hitesh Sharma', role: 'Product Head @ Hyyzo' },
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
    platforms: ['Web', 'App'],
    timeline: '5 Weeks Build',
    description: [
      { text: 'Architected a ' },
      { text: 'verified mentor network', highlight: true },
      { text: ' for 50k+ students, delivering ' },
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
    client: { name: 'Priya Verma', role: 'Operations Lead @ TeacherDekho' },
    mainImg: '/images/zonet/teacherdekho-1.png',
    subImg1: '/images/zonet/teacherdekho-2.png',
    subImg2: '/images/zonet/screenshot-3.png',
  },
];

// Unified, premium styles
const highlightClass = 'text-foreground font-semibold border-b-2 border-accent-blue/30 pb-0.5';
const statBoxClass = 'bg-card-alt border border-border-custom hover:border-accent-blue/30 transition-colors shadow-sm';

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
              <div className="w-full lg:w-[45%] h-fit lg:sticky lg:top-28 flex flex-col gap-10">

                {/* 1. Logo + Company info */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-[18px] bg-white border border-gray-100 shadow-sm flex items-center justify-center flex-shrink-0 p-2.5 overflow-hidden">
                      <Image
                        src={project.logo}
                        alt={`${project.name} logo`}
                        width={44}
                        height={44}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-foreground font-heading tracking-tight leading-none mb-1">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-2 text-muted text-xs font-bold uppercase tracking-widest opacity-60">
                        <span>{project.location}</span>
                        <span className="w-1 h-1 rounded-full bg-border-custom" />
                        <span className="text-accent-blue">{project.badges[0]}</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/case-studies/${project.id}`}
                    className="w-11 h-11 flex-shrink-0 rounded-full border border-border-custom bg-card-alt flex items-center justify-center text-muted hover:bg-foreground hover:text-background transition-all"
                  >
                    <ArrowUpRight size={20} />
                  </Link>
                </div>

                {/* 2. Timeline & Platforms Bar (New) */}
                <div className="grid grid-cols-2 gap-4 py-6 border-y border-border-custom/50">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[10px] font-black text-muted uppercase tracking-[0.2em] opacity-50">
                      <Timer size={12} /> Timeline
                    </div>
                    <div className="space-y-2">
                       <p className="text-sm font-bold text-foreground">{project.timeline}</p>
                       <div className="h-1.5 w-full bg-card-alt rounded-full overflow-hidden border border-border-custom">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: '100%' }}
                           transition={{ duration: 1, delay: 0.5 }}
                           className="h-full bg-accent-blue rounded-full"
                         />
                       </div>
                    </div>
                  </div>
                  <div className="space-y-3 border-l border-border-custom/50 pl-6">
                    <div className="flex items-center gap-2 text-[10px] font-black text-muted uppercase tracking-[0.2em] opacity-50">
                      <Smartphone size={12} /> Platforms
                    </div>
                    <div className="flex gap-4">
                      {project.platforms.map(p => (
                        <div key={p} className="group relative">
                          {p === 'Web' && <Globe size={18} className="text-foreground hover:text-accent-blue transition-colors cursor-help" />}
                          {p === 'App' && <Smartphone size={18} className="text-foreground hover:text-accent-blue transition-colors cursor-help" />}
                          {p === 'Extension' && <Puzzle size={18} className="text-foreground hover:text-accent-blue transition-colors cursor-help" />}
                          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-[9px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            {p} Available
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. Description (Unified highlight) */}
                <p className="text-secondary text-lg md:text-xl leading-relaxed font-medium">
                  {project.description.map((seg, i) =>
                    seg.highlight ? (
                      <span key={i} className={highlightClass}>
                        {seg.text}
                      </span>
                    ) : (
                      <span key={i}>{seg.text}</span>
                    )
                  )}
                </p>

                {/* 4. Stat Metric Boxes (Unified Design) */}
                <div className="grid grid-cols-3 gap-4">
                  {project.stats.map((stat, i) => (
                    <div
                      key={i}
                      className={`rounded-[22px] px-4 py-5 flex flex-col items-center justify-center gap-1.5 ${statBoxClass}`}
                    >
                      <span className="text-2xl md:text-3xl font-black text-foreground leading-none font-heading tracking-tight">
                        {stat.value}
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-muted text-center leading-tight">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 5. Compact Review Section */}
                <div className="p-8 rounded-[32px] bg-card-alt border border-border-custom relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <CheckCircle2 size={40} className="text-accent-blue" />
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} className="fill-accent-blue text-accent-blue" />
                    ))}
                    <span className="text-[10px] font-black text-accent-blue ml-2 uppercase tracking-widest">Verified Result</span>
                  </div>

                  <p className="text-base md:text-lg text-foreground font-medium leading-relaxed mb-6 italic">
                    "{project.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-xs font-black text-accent-blue flex-shrink-0">
                      {project.client.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <p className="font-black text-foreground text-sm tracking-tight">{project.client.name}</p>
                      <p className="text-xs font-bold text-muted uppercase tracking-widest opacity-60">{project.client.role}</p>
                    </div>
                  </div>
                </div>

                {/* CTA button - visible only on mobile */}
                <Link
                  href={`/case-studies/${project.id}`}
                  className="lg:hidden px-6 py-4 rounded-full bg-foreground text-background text-sm font-black hover:bg-accent-blue hover:text-background transition-all flex items-center justify-center gap-2 group w-full"
                >
                  Full Case Study <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
