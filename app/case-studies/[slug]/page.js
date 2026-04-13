'use client';

import { use, useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, Cpu, Zap, Globe, 
  Smartphone, Puzzle, Rocket, BarChart3, ShieldCheck, 
  Users, Star, TrendingUp, Sparkles, MessageSquare, PlayCircle
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import { caseStudies } from '@/lib/case-studies-data';

const iconMap = {
  Users, Star, TrendingUp, Globe, Smartphone, Puzzle, Rocket, BarChart3, ShieldCheck, Zap, PlayCircle, MessageSquare
};

/* ─────────────────────────────────────────────────────────
   REUSABLE COMPONENTS
───────────────────────────────────────────────────────── */

function Breadcrumbs({ name }) {
  return (
    <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted mb-6">
      <Link href="/" className="hover:text-accent transition-colors">Home</Link>
      <span className="opacity-30">/</span>
      <Link href="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link>
      <span className="opacity-30">/</span>
      <span className="text-foreground">{name}</span>
    </nav>
  );
}

function HighlightCard({ title, desc, icon: iconName, variant = 'indigo' }) {
  const Icon = iconMap[iconName] || Zap;
  const colors = {
    indigo: 'text-indigo-500 bg-indigo-500/5 border-indigo-500/10',
    amber: 'text-amber-500 bg-amber-500/5 border-amber-500/10',
    emerald: 'text-emerald-500 bg-emerald-500/5 border-emerald-500/10',
  };

  return (
    <div className="p-7 rounded-[28px] bg-card/40 backdrop-blur-xl border border-border-custom hover:border-accent/30 transition-all duration-500 group">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${colors[variant]}`}>
        <Icon size={20} strokeWidth={2.5} />
      </div>
      <h3 className="text-lg font-black text-foreground font-heading mb-2.5 tracking-tight">{title}</h3>
      <p className="text-muted text-sm leading-relaxed font-medium">
        {desc}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────────────── */

export default function CaseStudyDetail({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams?.slug;
  const project = caseStudies.find(p => p.slug === slug) || caseStudies[0];
  
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 800], [1, 1.02]);
  const heroY = useTransform(scrollY, [0, 800], [0, 50]);

  // Next/Prev Project Navigation
  const currentIndex = caseStudies.findIndex(p => p.slug === project.slug);
  const nextProject = caseStudies[(currentIndex + 1) % caseStudies.length];

  if (!project) return null;

  return (
    <div className="relative bg-background overflow-x-clip min-h-screen">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/5 rounded-full blur-[140px] -z-10 pointer-events-none" />

      {/* ───────────────────────────────────────────────────
          HERO SECTION
      ─────────────────────────────────────────────────── */}
      <section className="pt-28 md:pt-40 pb-16 border-b border-border-custom relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <Breadcrumbs name={project.name} />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-3xl space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="section-label bg-accent/10 border-accent/20 text-accent inline-flex items-center gap-2"
              >
                <Sparkles size={11} className="mr-1" />
                Case Study · {project.industry}
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground leading-[1.05] tracking-tighter font-heading"
              >
                {project.name.split(' ')[0]} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-indigo-400 to-accent">
                  {project.name.split(' ').slice(1).join(' ')}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-2xl text-muted font-medium leading-normal max-w-2xl"
              >
                {project.tagline}.
              </motion.p>
            </div>

            {/* Metrics Row */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3 lg:mb-2"
            >
              {project.stats.slice(0, 3).map((stat, i) => (
                <div key={i} className="px-6 py-4 rounded-[24px] bg-card border border-border-custom shadow-lg flex flex-col justify-center min-w-[160px] group hover:border-accent/40 transition-all">
                  <span className="text-2xl font-black text-accent font-heading tracking-tight group-hover:scale-105 transition-transform origin-left">{stat.value}</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-muted mt-1">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────
          DEVICE MOCKUP SECTION
      ─────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-card/5">
        <div className="container mx-auto px-6">
          <motion.div 
            style={{ y: heroY, scale: 1 }}
            className="relative max-w-5xl mx-auto"
          >
            {/* Professional Mac-style Mockup Header */}
            <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)] border border-border-custom bg-card outline outline-4 outline-card/20">
              <div className="w-full h-8 md:h-11 bg-card-alt border-b border-border-custom flex items-center px-6 gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                <div className="mx-auto text-[10px] font-black text-muted uppercase tracking-[0.2em] opacity-40">
                  {project.slug}.bricxlabs.com
                </div>
              </div>
              <div className="relative aspect-[16/10] bg-card-alt overflow-hidden">
                 <Image 
                  src={project.photo} 
                  alt={`${project.name} interface`} 
                  fill
                  className="object-cover object-top hover:scale-[1.02] transition-transform duration-[2000ms]"
                  priority
                />
              </div>
            </div>

            {/* Decorative Side Accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-[60px] -z-10" />
            <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-indigo-500/5 rounded-full blur-[60px] -z-10" />
          </motion.div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────
          CONTENT GRID
      ─────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Story Side */}
            <div className="lg:col-span-7 space-y-24">
              
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-xl font-black text-foreground font-heading uppercase tracking-widest text-accent flex items-center gap-4">
                    <span className="w-10 h-0.5 bg-accent rounded-full" />
                    The Challenge
                  </h2>
                  <p className="text-2xl md:text-3xl font-black text-foreground font-heading leading-snug tracking-tight">
                    {project.detail.problem}
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="text-xl font-black text-foreground font-heading uppercase tracking-widest text-indigo-500 flex items-center gap-4">
                    <span className="w-10 h-0.5 bg-indigo-500 rounded-full" />
                    The Strategy
                  </h2>
                  <p className="text-lg text-muted leading-relaxed font-medium">
                    {project.detail.solution}
                  </p>
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.detail.features.map((f, i) => (
                  <HighlightCard 
                    key={i} 
                    title={f.title} 
                    desc={f.desc} 
                    icon={f.icon}
                    variant={i % 3 === 0 ? 'indigo' : i % 3 === 1 ? 'emerald' : 'amber'}
                  />
                ))}
              </div>

              {/* Result List */}
              <div className="p-10 md:p-14 rounded-[48px] bg-card border border-border-custom shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] -z-10" />
                
                <h2 className="text-xl font-black text-foreground font-heading uppercase tracking-widest mb-12 flex items-center gap-4">
                   <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <CheckCircle2 size={22} strokeWidth={3} />
                   </div>
                   Verified Impact
                </h2>

                <div className="space-y-0">
                  {project.detail.results.map((result, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="border-b border-border-custom/50 py-8 last:border-0 last:pb-0 first:pt-0"
                    >
                      <p className="text-2xl md:text-4xl font-black text-foreground font-heading leading-tight tracking-tight">
                        {result}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar Details */}
            <aside className="lg:col-span-5 space-y-10">
              <div className="lg:sticky lg:top-36 space-y-8">
                
                {/* Tech Stack Card */}
                <div className="p-10 rounded-[40px] bg-card border border-border-custom shadow-xl space-y-10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent to-indigo-500" />
                  
                  <div>
                    <h3 className="text-[10px] font-black text-muted uppercase tracking-[0.3em] mb-6">Expertise Stack</h3>
                    <div className="flex flex-wrap gap-2.5">
                      {project.detail.tech.map((t) => (
                        <span key={t} className="px-5 py-2.5 rounded-[14px] bg-background border border-border-custom text-[10px] font-black uppercase tracking-widest text-foreground hover:border-accent/30 transition-all cursor-default shadow-sm font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8 pt-8 border-t border-border-custom">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-[20px] bg-indigo-500/5 flex items-center justify-center text-indigo-500 border border-indigo-500/10">
                        <Cpu size={24} strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-0.5">Timeline</p>
                        <p className="text-lg font-black text-foreground font-heading">30 Days Launch</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-[20px] bg-emerald-500/5 flex items-center justify-center text-emerald-500 border border-emerald-500/10">
                        <Globe size={24} strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-0.5">Industry</p>
                        <p className="text-lg font-black text-foreground font-heading">{project.industry}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link 
                      href="/contact" 
                      className="group flex items-center justify-center gap-3 w-full py-6 rounded-[22px] bg-accent text-white font-black text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-accent/20"
                    >
                      Build Yours <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Next Project Nav */}
                <Link 
                  href={`/case-studies/${nextProject.slug}`}
                  className="block p-8 rounded-[40px] border border-border-custom bg-card shadow-lg hover:border-accent transition-all group overflow-hidden relative"
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="space-y-1.5">
                      <p className="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-0.5">Next Case Study</p>
                      <p className="text-2xl font-black text-foreground font-heading tracking-tight group-hover:text-accent transition-colors">{nextProject.name}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-accent/5 border border-border-custom flex items-center justify-center text-muted group-hover:text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                      <ArrowRight size={22} />
                    </div>
                  </div>
                </Link>

              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────
          BOTTOM SECTION
      ─────────────────────────────────────────────────── */}
      <ContactForm />
    </div>
  );
}

