'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Search, Filter } from 'lucide-react';

// BricxLabs + GoGrowth + AdYogi combined data schema
const caseStudies = [
  {
    slug: 'writesonic',
    category: 'AI Services',
    logo: '/images/Oj0hkdK9UWGd1CwTPer0RKGsgYQ.png',
    name: 'Writesonic',
    location: 'San Francisco, USA',
    photo: '/images/zonet/screenshot-1.png',
    badges: ['AI SaaS', 'Content', 'VC Backed'],
    description: [
      { text: "Designed the world's first " },
      { text: 'GEO-optimized dashboard', highlight: 'green' },
      { text: ' for 1M+ users, driving a ' },
      { text: '3x increase in feature adoption', highlight: 'blue' },
      { text: ' and securing the ' },
      { text: '#1 AI ranking', highlight: 'yellow' },
      { text: '.' },
    ],
    stats: [
      { value: '3x', label: 'Adoption', color: 'green' },
      { value: '#1', label: 'AI Rank', color: 'blue' },
      { value: '1M+', label: 'Users', color: 'yellow' },
    ],
  },
  {
    slug: 'sybill',
    category: 'Applications',
    logo: '/images/iM9Iux2j56q05nR8KbQ8xubLATc.png',
    name: 'Sybill AI',
    location: 'Palo Alto, USA',
    photo: '/images/zonet/screenshot-4.png',
    badges: ['Sales AI', 'Series A'],
    description: [
      { text: 'Rebuilt the entire product UI for a ' },
      { text: 'Series A AI sales platform', highlight: 'green' },
      { text: ', achieving ' },
      { text: '47% faster onboarding', highlight: 'blue' },
      { text: ' and a confirmed ' },
      { text: '5-star rating', highlight: 'yellow' },
      { text: '.' },
    ],
    stats: [
      { value: '47%', label: 'Onboarding', color: 'green' },
      { value: '5★', label: 'Rating', color: 'blue' },
      { value: '2x', label: 'Revenue', color: 'yellow' },
    ],
  },
  {
    slug: 'manyreach',
    category: 'Websites',
    logo: '/images/KH6um2ORF1x7FHcn5pq9LinIs.png',
    name: 'Manyreach',
    location: 'Europe',
    photo: '/images/zonet/screenshot-5.png',
    badges: ['B2B SaaS', 'Bootstrapped'],
    description: [
      { text: 'Built the ' },
      { text: '#1 cold email automation product', highlight: 'green' },
      { text: ' from zero to ' },
      { text: '10k active users', highlight: 'blue' },
      { text: ', powered by a full ' },
      { text: 'conversion-first design system', highlight: 'yellow' },
      { text: '.' },
    ],
    stats: [
      { value: '10k', label: 'Active Users', color: 'green' },
      { value: '60', label: 'Days Live', color: 'blue' },
      { value: '#1', label: 'Category', color: 'yellow' },
    ],
  },
  {
    slug: 'instadapp',
    category: 'Applications',
    logo: '/images/mTd8zLlvXduYRNhaJAYMBmnLTRg.png',
    name: 'Instadapp',
    location: 'Global',
    photo: '/images/zonet/screenshot-2.png',
    badges: ['DeFi', 'Web3'],
    description: [
      { text: 'Redesigned the DeFi dashboard handling ' },
      { text: '$2B+ TVL', highlight: 'green' },
      { text: ' with a full ' },
      { text: 'mobile-first responsive UI', highlight: 'blue' },
      { text: ', cutting support tickets by ' },
      { text: '62%', highlight: 'yellow' },
      { text: '.' },
    ],
    stats: [
      { value: '$2B+', label: 'TVL', color: 'green' },
      { value: '62%', label: 'Less Tickets', color: 'blue' },
      { value: '30d', label: 'Delivery', color: 'yellow' },
    ],
  },
  {
    slug: 'joyhealth',
    category: 'Websites',
    logo: '/images/brKMfWJ5jHeMsNAWwyFABDqRo6c.png', // reusing socialsonic logo as mockup
    name: 'JoyHealth',
    location: 'New York, USA',
    photo: '/images/zonet/screenshot-6.png',
    badges: ['HealthTech', 'B2C'],
    description: [
      { text: 'Revamped the patient portal leading to ' },
      { text: '3x higher engagement', highlight: 'green' },
      { text: ' and ' },
      { text: '40% fewer no-shows', highlight: 'blue' },
      { text: ' through an intuitive ' },
      { text: 'AI scheduling assistant', highlight: 'yellow' },
      { text: '.' },
    ],
    stats: [
      { value: '3x', label: 'Engagement', color: 'green' },
      { value: '40%', label: 'No-Shows', color: 'blue' },
      { value: '24/7', label: 'AI Booking', color: 'yellow' },
    ],
  },
  {
    slug: 'scale-jobs',
    category: 'Websites',
    logo: '/images/pfA9SX6jwreKWvbr4PZSURK0m8.png', // Kearney logo as mockup
    name: 'Scale Jobs',
    location: 'London, UK',
    photo: '/images/zonet/screenshot-3.png',
    badges: ['Ed-Tech', 'Marketplace'],
    description: [
      { text: 'Redesigned landing pages yielding ' },
      { text: '2x more sales calls', highlight: 'green' },
      { text: ' in 30 days and reduced ' },
      { text: 'Customer Acquisition Cost (CAC) by 45%', highlight: 'blue' },
      { text: ' across all ' },
      { text: 'Meta Ad campaigns', highlight: 'yellow' },
      { text: '.' },
    ],
    stats: [
      { value: '2x', label: 'Sales Calls', color: 'green' },
      { value: '45%', label: 'Lower CAC', color: 'blue' },
      { value: '30d', label: 'Timeframe', color: 'yellow' },
    ],
  }
];

const categories = ['All', 'Websites', 'Applications', 'AI Services'];

const highlightText = {
  green:  'text-emerald-500 dark:text-emerald-400',
  blue:   'text-blue-500   dark:text-blue-400',
  yellow: 'text-amber-500  dark:text-amber-400',
};

const statBox = {
  green:  'bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-300/40 dark:border-emerald-700/50 text-emerald-600 dark:text-emerald-400',
  blue:   'bg-blue-500/10   dark:bg-blue-500/15   border-blue-300/40   dark:border-blue-700/50   text-blue-600   dark:text-blue-400',
  yellow: 'bg-amber-500/10  dark:bg-amber-500/15  border-amber-300/40  dark:border-amber-700/50  text-amber-600  dark:text-amber-400',
};

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStudies = caseStudies.filter(cs => {
    const matchesCategory = activeCategory === 'All' || cs.category === activeCategory;
    const matchesSearch = cs.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          cs.description.some(d => d.text.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 bg-background min-h-screen pb-24">

      {/* ── Page Hero: AdYogi + BricxLabs Style ── */}
      <section className="pt-12 pb-20 border-b border-border-custom bg-card/30">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-badge-border bg-badge-bg text-[11px] font-bold text-muted mb-8 uppercase tracking-[0.2em]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Proven Growth, Real Results
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 text-foreground tracking-tight font-heading leading-[1.05]"
          >
            Our Work <br className="hidden md:block" />
            <span className="text-muted">Speaks For Itself.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted leading-relaxed"
          >
            We don’t just build beautiful interfaces. We engineer product experiences 
            that drive user adoption, slash acquisition costs, and scale revenue.
          </motion.p>
        </div>
      </section>

      {/* ── Filters & Search (AdYogi Style) ── */}
      <section className="sticky top-[72px] z-30 bg-background/80 backdrop-blur-xl border-b border-border-custom py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
              <Filter size={16} className="text-muted mr-2 flex-shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all border ${
                    activeCategory === cat 
                      ? 'bg-foreground text-background border-foreground shadow-md' 
                      : 'bg-card border-border-custom text-muted hover:text-foreground hover:border-foreground/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="w-full md:w-auto relative group">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-foreground transition-colors" />
              <input 
                type="text" 
                placeholder="Search case studies..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 pl-11 pr-4 py-2.5 rounded-full bg-input-bg border border-input-border text-sm font-medium text-foreground outline-none focus:border-foreground/40 transition-all placeholder:text-muted/60"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── Case Study Cards (GoGrowth + BricxLabs Style) ── */}
      <section className="pt-12">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="popLayout">
            {filteredStudies.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-32"
              >
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-foreground">No case studies found</h3>
                <p className="text-muted mt-2">Try adjusting your filters or search query.</p>
                <button 
                  onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                  className="mt-6 px-6 py-2 bg-button-bg text-button-fg rounded-full font-bold"
                >
                  Clear Filters
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {filteredStudies.map((cs, idx) => (
                  <motion.div
                    key={cs.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="group flex flex-col bg-card border border-border-custom rounded-[32px] overflow-hidden hover:border-foreground/30 hover:shadow-2xl transition-all duration-500"
                  >
                    {/* Visual Header (BricxLabs Image Layout) */}
                    <Link href={`/case-studies/${cs.slug}`} className="relative w-full aspect-[16/9] overflow-hidden bg-card-alt block cursor-pointer">
                      <Image
                        src={cs.photo}
                        alt={cs.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-bold tracking-wide border border-white/20 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all">
                          Read Case Study <ArrowUpRight size={18} />
                        </div>
                      </div>
                      
                      {/* Badges */}
                      <div className="absolute top-5 left-5 flex gap-2">
                        {cs.badges.map((b, i) => (
                          <span key={i} className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20 shadow-sm">
                            {b}
                          </span>
                        ))}
                      </div>
                    </Link>

                    {/* Data Body (GoGrowth layout: Logo + Text + 3 Stats) */}
                    <div className="flex flex-col flex-1 p-6 md:p-8">
                      
                      {/* Company Info */}
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-[14px] bg-white border border-gray-200 shadow-sm flex items-center justify-center flex-shrink-0 p-1.5">
                            <Image
                              src={cs.logo}
                              alt={`${cs.name} logo`}
                              width={40}
                              height={40}
                              className="object-contain w-full h-full"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground font-heading leading-tight">
                              {cs.name}
                            </h3>
                            <p className="text-sm font-medium text-muted mt-1">{cs.location}</p>
                          </div>
                        </div>
                        <Link
                          href={`/case-studies/${cs.slug}`}
                          className="w-10 h-10 flex-shrink-0 rounded-full border border-border-custom bg-card-alt flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all shadow-sm"
                        >
                          <ArrowUpRight size={18} />
                        </Link>
                      </div>

                      {/* GoGrowth Highlighted Description */}
                      <p className="text-secondary text-base md:text-lg leading-relaxed mb-8 flex-1">
                        {cs.description.map((seg, i) =>
                          seg.highlight ? (
                            <strong key={i} className={`font-bold ${highlightText[seg.highlight]}`}>
                              {seg.text}
                            </strong>
                          ) : (
                            <span key={i}>{seg.text}</span>
                          )
                        )}
                      </p>

                      {/* 3 Stat Boxes Data Row */}
                      <div className="grid grid-cols-3 gap-3 md:gap-4 mt-auto">
                        {cs.stats.map((stat, i) => (
                          <div
                            key={i}
                            className={`rounded-[20px] border px-4 py-5 flex flex-col items-center justify-center gap-1.5 transition-all hover:scale-[1.02] ${statBox[stat.color]}`}
                          >
                            <span className="text-2xl md:text-3xl font-black leading-none font-heading tracking-tight">
                              {stat.value}
                            </span>
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-80 text-center leading-tight">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>
      
    </div>
  );
}
