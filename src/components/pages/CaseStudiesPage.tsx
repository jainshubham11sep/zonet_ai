'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ChevronDown, Sparkles, TrendingUp, Users, Star, Smartphone, Globe, Puzzle, Rocket, BarChart3, ShieldCheck, Zap } from 'lucide-react';
import { caseStudies, categories, industries } from '@/lib/case-studies';

const iconMap = {
  Users, Star, TrendingUp, Globe, Smartphone, Puzzle, Rocket, BarChart3, ShieldCheck, Zap
};

/* ─────────────────────────────────────────────────────────
   STAT BOX
───────────────────────────────────────────────────────── */
function StatBox({ value, label, icon: iconName, delay = 0 }: { value: string | number; label: string; icon: keyof typeof iconMap | string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const Icon = iconMap[iconName as keyof typeof iconMap] || Star;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className="flex flex-col items-center justify-center gap-1 rounded-[16px] border border-border-custom bg-card/50 px-3 py-3.5 text-center hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 shadow-sm"
    >
      <Icon size={13} className="text-accent opacity-80 mb-0.5" />
      <span className="text-lg font-black text-foreground font-heading tracking-tight leading-none">
        {value}
      </span>
      <span className="text-[8px] font-black uppercase tracking-[0.15em] text-muted">
        {label}
      </span>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   INDUSTRY SELECT DROPDOWN
───────────────────────────────────────────────────────── */
function Select({ value, onChange, options }: { value: string; onChange: (val: string) => void; options: string[] }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none pl-4 pr-9 py-2 rounded-full text-[10px] font-black uppercase tracking-widest cursor-pointer outline-none transition-all bg-card border border-border-custom text-muted hover:border-accent/40 hover:text-foreground focus:border-accent/50"
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted" />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   CASE STUDY CARD
───────────────────────────────────────────────────────── */
function CaseStudyCard({ cs, idx }: { cs: any; idx: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
      className="group flex flex-col bg-card/40 backdrop-blur-xl border border-border-custom rounded-[28px] overflow-hidden hover:border-accent/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 shadow-sm"
    >
      <Link href={`/case-studies/${cs.slug}`} className="relative block w-full overflow-hidden" style={{ aspectRatio: '16/10' }}>
        <Image
          src={cs.photo}
          alt={cs.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <span className="absolute top-4 left-4 px-3 py-1.5 text-[8px] font-black uppercase tracking-widest rounded-full bg-accent text-white shadow-lg">
          {cs.badge}
        </span>
        <div className="absolute bottom-4 left-5">
          <span className="block text-2xl font-black font-heading text-white leading-none">
            {cs.heroStat.value}
          </span>
          <span className="block text-[8px] font-black uppercase tracking-[0.18em] text-white/75 mt-0.5">
            {cs.heroStat.label}
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
          <span className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black text-white bg-accent shadow-xl border border-white/10">
            View Story <ArrowUpRight size={14} />
          </span>
        </div>
      </Link>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden bg-white border border-border-custom p-1.5 shadow-sm">
              <Image src={cs.logo} alt={`${cs.name} logo`} width={28} height={28} className="object-contain w-full h-full" />
            </div>
            <div>
              <h3 className="text-base font-black text-foreground font-heading leading-tight tracking-tight">{cs.name}</h3>
              <p className="text-[10px] font-bold text-accent mt-0.5">{cs.tagline}</p>
            </div>
          </div>
          <Link href={`/case-studies/${cs.slug}`} className="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center border border-border-custom bg-card-alt text-muted hover:bg-accent hover:text-white transition-all shadow-sm">
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <p className="text-sm text-muted leading-relaxed font-medium mb-6 flex-1">
          {cs.description.map((seg: any, i: number) =>
            seg.highlight ? (
              <strong key={i} className="font-black text-foreground">{seg.text}</strong>
            ) : (
              <span key={i}>{seg.text}</span>
            )
          )}
        </p>

        <div className="border-t border-border-custom/60 mb-5" />

        <div className="grid grid-cols-3 gap-2">
          {cs.stats.map((stat: any, i: number) => (
            <StatBox key={i} {...stat} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────── */
export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeIndustry, setActiveIndustry] = useState('All Industries');

  const filteredStudies = caseStudies.filter((cs) => {
    const matchesCat = activeCategory === 'All' || cs.category === activeCategory;
    const matchesInd = activeIndustry === 'All Industries' || cs.industry === activeIndustry;
    return matchesCat && matchesInd;
  });

  return (
    <div className="relative bg-background overflow-x-clip min-h-screen">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pb-16 text-center border-b border-border-custom">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="section-label mb-6 bg-accent/10 border-accent/20 text-accent"
          >
            <Sparkles size={11} className="mr-1" />
            Proven Growth · Real Results
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl font-black text-foreground leading-[1.1] tracking-tighter font-heading mb-6"
          >
            Our Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-indigo-400 to-accent">Speaks For Itself.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
          >
            We don't just build beautiful interfaces — we engineer product experiences that drive user adoption and scale revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-8"
          >
            {[
              { n: '50+', l: 'Projects' },
              { n: '10M+', l: 'Users' },
              { n: '100%', l: 'Success' },
            ].map(({ n, l }) => (
              <div key={l} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-accent font-heading tracking-tight">{n}</div>
                <div className="text-[9px] font-black uppercase tracking-widest text-muted mt-0.5">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <div className="relative z-20 bg-background/80 backdrop-blur-md border-b border-border-custom py-2.5 sticky top-16 md:top-20">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-3 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-accent text-white border-accent shadow-lg shadow-accent/20'
                    : 'bg-card border-border-custom text-muted hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <Select value={activeIndustry} onChange={setActiveIndustry} options={industries} />
        </div>
      </div>

      {/* Cards Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <p className="text-[9px] font-black uppercase tracking-widest text-muted mb-8 opactiy-60">
            Viewing {filteredStudies.length} {filteredStudies.length === 1 ? 'case study' : 'case studies'}
          </p>

          <AnimatePresence mode="popLayout">
            {filteredStudies.length === 0 ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24">
                <div className="text-4xl mb-6">🔍</div>
                <h3 className="text-xl font-black text-foreground font-heading">No case studies matching your filter</h3>
                <button onClick={() => { setActiveCategory('All'); setActiveIndustry('All Industries'); }} className="mt-8 px-6 py-2 rounded-full text-xs font-black bg-accent text-white hover:opacity-90 transition-opacity">
                  Reset Filters
                </button>
              </motion.div>
            ) : (
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {filteredStudies.map((cs, idx) => (
                  <CaseStudyCard key={cs.slug} cs={cs} idx={idx} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding border-t border-border-custom text-center relative overflow-hidden bg-card/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="section-label mb-6">
            Ready to scale your product?
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-black text-foreground tracking-tighter leading-tight font-heading mb-6">
            Let's build your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-indigo-400 to-accent">success story.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-base text-muted max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Join the products we've scaled from idea to users — we know the path.
          </motion.p>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-full font-black text-base transition-all hover:scale-105 shadow-xl shadow-accent/20">
              Start Your Project <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
