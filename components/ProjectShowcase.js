'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Star, Globe, Smartphone, Puzzle, Timer, CheckCircle2 } from 'lucide-react';
import { useState,useEffect } from 'react';

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

// Unified, premium styles
const highlightClass = 'text-foreground font-black border-b-2 border-accent/40 pb-0.5';
const statBoxClass = 'bg-card border border-border-custom hover:border-accent/30 transition-all duration-300 shadow-sm';

const ProjectImage = ({ src, alt }) => (
  <div className="relative aspect-[1.3] w-full rounded-[24px] md:rounded-[36px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] border border-border-custom bg-card group">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
    />
  </div>
);

const MobileImageCarousel = ({ images, projectName }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-[1.3] rounded-[24px] overflow-hidden border border-border-custom bg-card group lg:hidden mb-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt={`${projectName} screenshot ${index + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 rounded-full transition-all duration-500 ${i === index ? 'w-6 bg-accent' : 'w-1.5 bg-white/40'}`}
          />
        ))}
      </div>

      {/* Glass Overlay for Title (Optional) */}
      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-[9px] font-black text-white uppercase tracking-widest z-20">
        Project Preview
      </div>
    </div>
  );
};

const ProjectShowcase = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="work" className="section-padding bg-background border-t border-border-custom relative">
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-16 md:mb-32 flex flex-col items-start lg:items-center text-left lg:text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="section-label mb-6"
        >
          Featured Success Stories
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl lg:text-8xl font-black text-foreground tracking-tighter leading-[1] font-heading max-w-6xl"
        >
          Building Iconic Products <br className="hidden lg:block" />
          <span className="text-muted">For Visionary Founders</span>
        </motion.h2>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row gap-0 lg:gap-12 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >

              {/* ── LEFT: Sticky Text Column ── */}
              <div className="w-full lg:w-[48%] h-fit lg:sticky lg:top-28 flex flex-col gap-6 md:gap-8">

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-10 border-b border-border-custom/50">
                  {/* Left Side: Logo & Info */}
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-[24px] bg-white border border-gray-100 shadow-md flex items-center justify-center flex-shrink-0 p-3 overflow-hidden">
                      <Image
                        src={project.logo}
                        alt={`${project.name} logo`}
                        width={64}
                        height={64}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 md:gap-3">
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl md:text-4xl font-black text-foreground font-heading tracking-tight leading-none">
                          {project.name}
                        </h3>
                        <Link
                          href={`/case-studies/${project.id}`}
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-border-custom bg-card flex items-center justify-center text-muted hover:bg-accent hover:text-white transition-all shadow-sm"
                        >
                          <ArrowUpRight size={16} />
                        </Link>
                      </div>
                      <div className="flex items-center gap-3 text-muted text-[10px] md:text-xs font-black uppercase tracking-widest">
                        <span>{project.location}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/20" />
                        <span className="text-accent">{project.badges[0]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Timeline & Platforms (Mobile Refined) */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4">
                    <div className="flex flex-col items-start sm:items-end">
                      <div className="flex items-center gap-2 text-[9px] font-black text-muted uppercase tracking-[0.2em] mb-1.5 opacity-60">
                         Timeline
                      </div>
                      <div className="text-xs md:text-sm font-black text-foreground bg-card px-4 py-2 rounded-xl border border-border-custom shadow-sm whitespace-nowrap">
                        {project.timeline}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                        {project.platformLinks.web && (
                          <Link href={project.platformLinks.web} target="_blank" className="flex items-center justify-center w-9 h-9 rounded-xl bg-card border border-border-custom text-foreground hover:bg-accent hover:text-white transition-all shadow-sm">
                            <Globe size={16} />
                          </Link>
                        )}
                        {project.platformLinks.app && (
                          <Link href={project.platformLinks.app} target="_blank" className="flex items-center justify-center w-9 h-9 rounded-xl bg-card border border-border-custom text-foreground hover:bg-accent hover:text-white transition-all shadow-sm">
                            <Smartphone size={16} />
                          </Link>
                        )}
                        {project.platformLinks.extension && (
                          <Link href={project.platformLinks.extension} target="_blank" className="flex items-center justify-center w-9 h-9 rounded-xl bg-card border border-border-custom text-foreground hover:bg-accent hover:text-white transition-all shadow-sm">
                            <Puzzle size={16} />
                          </Link>
                        )}
                    </div>
                  </div>
                </div>

                {/* ── MOBILE CAROUSEL INJECTED HERE (Before Description) ── */}
                {mounted && <MobileImageCarousel images={[project.mainImg, project.subImg1, project.subImg2]} projectName={project.name} />}

                {/* 3. Description */}
                <p className="text-muted text-lg md:text-2xl leading-relaxed font-medium tracking-tight">
                  {project.description.map((seg, i) =>
                    seg.highlight ? (
                      <span key={i} className={highlightClass}>
                        {seg.text}
                      </span>
                    ) : (
                      <span key={i} className="text-foreground">{seg.text}</span>
                    )
                  )}
                </p>

                {/* 4. Stat Metric Boxes (Unified Design) */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.stats.map((stat, i) => (
                    <div
                      key={i}
                      className={`rounded-[28px] px-6 py-7 flex flex-col items-center justify-center gap-2 ${statBoxClass}`}
                    >
                      <span className="text-3xl md:text-4xl font-black text-foreground leading-none font-heading tracking-tighter">
                        {stat.value}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-[0.15em] text-muted text-center leading-tight">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 5. Review Section */}
                <div className="p-8 md:p-10 rounded-[40px] bg-card/40 border border-border-custom/50 flex flex-col gap-6 relative overflow-hidden group/quote">
                   <div className="absolute top-0 right-0 p-8 text-accent/10 group-hover/quote:text-accent/20 transition-colors">
                      <Star size={48} className="fill-current" />
                   </div>
                   <p className="text-lg md:text-xl text-foreground font-medium italic leading-relaxed relative z-10">
                    "{project.quote}"
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-border-custom/50">
                    <div className="flex flex-col">
                      <span className="font-black text-foreground text-sm uppercase tracking-widest">{project.client.name}</span>
                      <span className="text-[10px] font-bold text-muted uppercase tracking-widest mt-1">{project.client.role}</span>
                    </div>
                  </div>
                </div>

                {/* Final Case Study Button */}
                <Link
                  href={`/case-studies/${project.id}`}
                  className="px-8 py-5 rounded-2xl bg-accent text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-xl shadow-accent/20 md:w-fit"
                >
                   View Detailed Case Study <ArrowUpRight size={18} />
                </Link>
              </div>

              {/* ── RIGHT: 3 Scrolling Images (Hidden on Mobile) ── */}
              <div className="hidden lg:flex w-full lg:w-[50%] flex-col gap-6 md:gap-10">
                {[project.mainImg, project.subImg1, project.subImg2].map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
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
          className="mt-40 flex flex-col items-center gap-4 text-center"
        >
          <p className="text-muted text-sm md:text-base font-medium uppercase tracking-widest">
            Ready to be our next success story?
          </p>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-accent text-white font-black uppercase tracking-widest text-sm md:text-base hover:opacity-90 active:scale-95 transition-all duration-200 shadow-xl shadow-accent/25 group"
          >
            Discover All Projects
            <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
