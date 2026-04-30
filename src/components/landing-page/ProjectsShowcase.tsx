'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Globe, Smartphone, Puzzle } from 'lucide-react';
import { useState, useEffect } from 'react';

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
      { text: ' and the ' },
      { text: '#1 auto-coupon engine', highlight: true },
      { text: ' in the region.' },
    ],
    stats: [
      { value: '1.5M+', label: 'Active Users' },
      { value: '4.5/5', label: 'Store Rating' },
      { value: '10+', label: 'Retailers' },
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
      { value: '100k+', label: 'Earners' },
      { value: '200+', label: 'Brands' },
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
    platforms: ['Web', 'App'],
    platformLinks: {
      web: 'https://dev.thebestdeals.app',
      app: 'https://dev.thebestdeals.app',
    },
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
      { value: '2k+', label: 'Mentors' },
      { value: '4.8★', label: 'Rating' },
    ],
    quote: "Finding quality education shouldn't be a luxury. Zonet helped us build a platform that democratizes access to expert mentors.",
    client: { name: 'Himanshu Jain', role: 'Operations Lead @ TeacherDekho' },
    mainImg: '/images/zonet/teacherdekho-1.png',
    subImg1: '/images/zonet/teacherdekho-2.png',
    subImg2: '/images/zonet/teacherdekho-3.png',
  },
];

const ProjectImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full rounded-3xl overflow-hidden shadow-sm border border-[#E5E5E5] bg-white group">
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
    />
  </div>
);

const MobileImageCarousel = ({ images, projectName }: { images: string[]; projectName: string }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-[#E5E5E5] bg-white lg:hidden mb-8 shadow-sm">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
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
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 bg-black/20 backdrop-blur-md px-3 py-2 rounded-full">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-4 bg-[#D1AC45]' : 'w-1.5 bg-white/70'}`}
          />
        ))}
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
    <section id="work" className="py-24 md:py-32 bg-[#F8F6F0] relative border-t border-[#E5E5E5]">
      
      <div className="max-w-[1300px] mx-auto px-6">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8 mb-20 md:mb-28">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-[#D1AC45]" />
              <span className="text-[10px] font-black text-[#1A1A1A] tracking-[0.2em] uppercase">
                Featured Work
              </span>
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-[60px] font-medium text-[#1A1A1A] tracking-tight leading-[1.1] font-heading max-w-2xl"
            >
              Building Iconic Products <br />
              <span className="relative inline-block">
                <em className="italic pr-2 text-[#6A6A6A]">For Visionary Founders</em>
                <svg className="absolute -bottom-1 left-0 w-full h-[12px] text-[#D1AC45]" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M2,10 Q50,0 100,5 T198,8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h2>
          </div>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >

              {/* ── LEFT: Sticky unified Card ── */}
              <div className="w-full lg:w-[45%] h-fit lg:sticky lg:top-[88px] flex flex-col gap-8 bg-white p-8 lg:p-10 rounded-[32px] border border-[#E5E5E5] shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                  <div className="flex items-center gap-5">
                    <div className="w-[68px] h-[68px] rounded-[20px] bg-white border border-[#E5E5E5] shadow-sm flex items-center justify-center shrink-0 p-3 overflow-hidden">
                      <Image
                        src={project.logo}
                        alt={`${project.name} logo`}
                        width={60}
                        height={60}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-[28px] lg:text-[32px] font-heading font-medium text-[#1A1A1A] leading-none tracking-tight">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[9.5px] font-black uppercase tracking-[0.2em] text-[#6A6A6A]">{project.location}</span>
                        <div className="w-[3px] h-[3px] rounded-full bg-[#D1AC45]" />
                        <span className="text-[9.5px] font-black uppercase tracking-[0.2em] text-[#D1AC45]">{project.badges[0]}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Platform Links */}
                  <div className="flex gap-2">
                    {project.platformLinks.web && (
                      <Link href={project.platformLinks.web} target="_blank" className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center text-[#1A1A1A] hover:bg-[#F8F6F0] transition-colors" aria-label="Website">
                        <Globe size={16} />
                      </Link>
                    )}
                    {project.platformLinks.app && (
                      <Link href={project.platformLinks.app} target="_blank" className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center text-[#1A1A1A] hover:bg-[#F8F6F0] transition-colors" aria-label="Mobile App">
                        <Smartphone size={16} />
                      </Link>
                    )}
                    {project.platformLinks.extension && (
                      <Link href={project.platformLinks.extension} target="_blank" className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center text-[#1A1A1A] hover:bg-[#F8F6F0] transition-colors" aria-label="Browser Extension">
                        <Puzzle size={16} />
                      </Link>
                    )}
                  </div>
                </div>

                {/* ── MOBILE CAROUSEL ── */}
                {mounted && <MobileImageCarousel images={[project.mainImg, project.subImg1, project.subImg2]} projectName={project.name} />}

                {/* Description */}
                <p className="text-[14.5px] leading-[1.8] text-[#6A6A6A]">
                  {project.description.map((seg, i) =>
                    seg.highlight ? (
                      <span key={i} className="text-[#1A1A1A] font-bold">
                        {seg.text}
                      </span>
                    ) : (
                      <span key={i}>{seg.text}</span>
                    )
                  )}
                </p>

                {/* Stats Grid */}
                <div className="w-full h-px bg-[#E5E5E5]" />
                <div className="grid grid-cols-3 gap-4">
                  {project.stats.map((stat, i) => (
                    <div key={i} className={`flex flex-col gap-1.5 ${i !== project.stats.length - 1 ? 'border-r border-[#E5E5E5]' : ''}`}>
                      <span className="text-[22px] font-heading font-medium text-[#1A1A1A] leading-none">{stat.value}</span>
                      <span className="text-[8.5px] font-black uppercase tracking-[0.2em] text-[#6A6A6A] leading-tight">{stat.label}</span>
                    </div>
                  ))}
                </div>
                <div className="w-full h-px bg-[#E5E5E5]" />

                {/* Quote Box */}
                <div className="bg-[#F8F6F0] rounded-[24px] p-7 flex flex-col gap-5 border border-[#E5E5E5]/50">
                  <p className="text-[14px] italic text-[#1A1A1A] leading-relaxed">
                    "{project.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#D1AC45] text-white flex items-center justify-center text-[11px] font-black shadow-sm">
                      {project.client.name.charAt(0)}
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[11px] font-bold text-[#1A1A1A] mb-0.5">{project.client.name}</span>
                      <span className="text-[8.5px] font-black text-[#6A6A6A] uppercase tracking-widest">{project.client.role}</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <Link 
                    href={`/case-studies/${project.id}`} 
                    className="w-full flex items-center justify-center gap-3 px-8 py-[22px] rounded-[16px] bg-[#1A1A1A] text-white hover:bg-black transition-all group shadow-xl shadow-black/5"
                  >
                    <span className="text-[10px] font-black uppercase tracking-[0.25em]">Read Case Study</span>
                    <ArrowUpRight size={16} className="text-[#D1AC45] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* ── RIGHT: 3 Scrolling Images (Hidden on Mobile) ── */}
              <div className="hidden lg:flex w-full lg:w-[55%] flex-col gap-4">
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
          className="mt-32 flex flex-col items-center gap-6 text-center"
        >
          <div className="flex items-center gap-3">
            <div className="w-[3px] h-[3px] rounded-full bg-[#D1AC45]" />
            <span className="text-[10px] font-black text-[#6A6A6A] tracking-[0.2em] uppercase">
              Ready to be our next success story?
            </span>
            <div className="w-[3px] h-[3px] rounded-full bg-[#D1AC45]" />
          </div>
          
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-3 px-10 py-[22px] rounded-[16px] bg-[#1A1A1A] text-white font-black uppercase tracking-[0.2em] text-[11px] hover:bg-black active:scale-95 transition-all shadow-xl shadow-black/10 group"
          >
            Discover All Projects
            <ArrowUpRight size={18} className="text-[#D1AC45] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;