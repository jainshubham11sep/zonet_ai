'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Search, Filter } from 'lucide-react';

// BricxLabs + GoGrowth + AdYogi combined data schema
const caseStudies = [
  {
    slug: 'flipshope',
    category: 'Applications',
    logo: '/images/clients/flipshope-logo.png',
    name: 'Flipshope',
    location: 'India',
    photo: '/images/zonet/flipshope-1.png',
    badges: ['AI Shopping', 'Extension', 'SaaS'],
    description: [
      { text: "Built an " },
      { text: 'AI-driven shopping assistant', highlight: 'green' },
      { text: ' with ' },
      { text: 'real-time price tracking', highlight: 'blue' },
      { text: ' for ' },
      { text: '1.5M+ active users', highlight: 'yellow' },
      { text: '.' },
    ],
    stats: [
      { value: '1.5M', label: 'Users', color: 'green' },
      { value: '4.5★', label: 'Rating', color: 'blue' },
      { value: '10+', label: 'Stores', color: 'yellow' },
    ],
  },
  {
    slug: 'hyyzo',
    category: 'AI Services',
    logo: '/images/clients/hyyzo-logo.png',
    name: 'Hyyzo',
    location: 'India',
    photo: '/images/zonet/hyyzo-1.png',
    badges: ['Affiliate AI', 'Rewards', 'FinTech'],
    description: [
      { text: 'Architected India\'s ' },
      { text: 'highest-paying rewards engine', highlight: 'green' },
      { text: ' with ' },
      { text: 'Profit Link automation', highlight: 'blue' },
      { text: ' and ' },
      { text: '200+ store integrations', highlight: 'yellow' },
      { text: '.' },
    ],
    stats: [
      { value: '100k+', label: 'Earners', color: 'green' },
      { value: '200+', label: 'Stores', color: 'blue' },
      { value: '4.4★', label: 'App Rank', color: 'yellow' },
    ],
  },
  {
    slug: 'teacherdekho',
    category: 'Applications',
    logo: '/images/clients/teacherdekho-logo.png',
    name: 'TeacherDekho',
    location: 'India',
    photo: '/images/zonet/teacherdekho-1.png',
    badges: ['Ed-Tech', 'Mentorship', 'Analytics'],
    description: [
      { text: 'Launched a ' },
      { text: 'verified mentor marketplace', highlight: 'green' },
      { text: ' connecting 50k+ students with ' },
      { text: 'AI-powered progress tracking', highlight: 'blue' },
      { text: ' and ' },
      { text: 'personalized learning', highlight: 'yellow' },
      { text: '.' },
    ],
    stats: [
      { value: '50k+', label: 'Students', color: 'green' },
      { value: '2k+', label: 'Mentors', color: 'blue' },
      { value: '4.8★', label: 'Rating', color: 'yellow' },
    ],
  },
  {
    slug: 'punogames',
    category: 'Websites',
    logo: '/images/clients/punogames-logo.png',
    name: 'Puno Games',
    location: 'India',
    photo: '/images/zonet/screenshot-1.png',
    badges: ['Gaming', 'Platform'],
    description: [
      { text: "Scaled a " },
      { text: 'high-performance gaming portal', highlight: 'blue' },
      { text: ' with ' },
      { text: 'real-time multiplayer support', highlight: 'green' },
      { text: '.' },
    ],
    stats: [
      { value: '500k+', label: 'Players', color: 'blue' },
      { value: '99.9%', label: 'Uptime', color: 'green' },
      { value: '4.7★', label: 'Rating', color: 'yellow' },
    ],
  },
  {
    slug: 'karekaisee',
    category: 'Websites',
    logo: '/images/zonet/logo-light.png',
    name: 'Karekaisee',
    location: 'India',
    photo: '/images/zonet/screenshot-2.png',
    badges: ['Consultancy', 'Service'],
    description: [
      { text: "Engineered a " },
      { text: 'digital consultancy platform', highlight: 'green' },
      { text: ' driving ' },
      { text: '3x lead generation', highlight: 'yellow' },
      { text: '.' },
    ],
    stats: [
      { value: '3x', label: 'Leads', color: 'yellow' },
      { value: '50+', label: 'Experts', color: 'blue' },
      { value: '10k+', label: 'Clients', color: 'green' },
    ],
  },
  {
    slug: 'twitch-adblocker',
    category: 'Applications',
    logo: '/images/zonet/logo-light.png',
    name: 'Twitch Adblocker',
    location: 'Global',
    photo: '/images/zonet/screenshot-3.png',
    badges: ['Browser Tool', 'Extension'],
    description: [
      { text: "Developed a " },
      { text: 'robust ad-blocking extension', highlight: 'blue' },
      { text: ' providing a ' },
      { text: 'seamless viewing experience', highlight: 'green' },
      { text: '.' },
    ],
    stats: [
      { value: '1M+', label: 'Installs', color: 'blue' },
      { value: '4.9★', label: 'Rating', color: 'yellow' },
      { value: '0', label: 'Ads', color: 'green' },
    ],
  },
  {
    slug: 'kroolo',
    category: 'Applications',
    logo: '/images/clients/kroolo-logo.png',
    name: 'Kroolo',
    location: 'Global',
    photo: '/images/zonet/screenshot-4.png',
    badges: ['Productivity', 'SaaS'],
    description: [
      { text: "Designed an " },
      { text: 'all-in-one productivity suite', highlight: 'yellow' },
      { text: ' to streamline ' },
      { text: 'team collaboration', highlight: 'blue' },
      { text: '.' },
    ],
    stats: [
      { value: '100k+', label: 'Teams', color: 'blue' },
      { value: '40%', label: 'Efficiency', color: 'green' },
      { value: '5M+', label: 'Tasks', color: 'yellow' },
    ],
  },
  {
    slug: 'my-flipshope',
    category: 'AI Services',
    logo: '/images/clients/flipshope-logo.png',
    name: 'My Flipshope',
    location: 'India',
    photo: '/images/zonet/screenshot-5.png',
    badges: ['HRMS', 'SaaS'],
    description: [
      { text: "Built a " },
      { text: 'comprehensive HRMS SaaS', highlight: 'green' },
      { text: ' to automate ' },
      { text: 'employee management', highlight: 'blue' },
      { text: '.' },
    ],
    stats: [
      { value: '200+', label: 'Companies', color: 'blue' },
      { value: '10k+', label: 'Employees', color: 'green' },
      { value: '24/7', label: 'Support', color: 'yellow' },
    ],
  },
  {
    slug: 'the-best-deals',
    category: 'Websites',
    logo: '/images/clients/thebestdeals-logo.png',
    name: 'The Best Deals',
    location: 'India',
    photo: '/images/zonet/screenshot-6.png',
    badges: ['Deals Platform', 'E-commerce'],
    description: [
      { text: "Launched a " },
      { text: 'dynamic deals aggregator', highlight: 'yellow' },
      { text: ' featuring ' },
      { text: 'real-time offers', highlight: 'blue' },
      { text: '.' },
    ],
    stats: [
      { value: '500k+', label: 'Users', color: 'green' },
      { value: '1M+', label: 'Deals', color: 'blue' },
      { value: '₹1B+', label: 'Savings', color: 'yellow' },
    ],
  },
  {
    slug: 'hyyfam',
    category: 'Applications',
    logo: '/images/clients/hyyfam-logo.png',
    name: 'HyyFam',
    location: 'India',
    photo: '/images/zonet/screenshot-1.png',
    badges: ['Social Rewards', 'Community'],
    description: [
      { text: "Created a " },
      { text: 'vibrant social rewards app', highlight: 'green' },
      { text: ' fostering ' },
      { text: 'community engagement', highlight: 'yellow' },
      { text: '.' },
    ],
    stats: [
      { value: '2M+', label: 'Members', color: 'blue' },
      { value: '10M+', label: 'Posts', color: 'green' },
      { value: '4.6★', label: 'Rating', color: 'yellow' },
    ],
  },
  {
    slug: 'hyzify',
    category: 'AI Services',
    logo: '/images/clients/hyzify-logo.png',
    name: 'Hyzify',
    location: 'India',
    photo: '/images/zonet/screenshot-2.png',
    badges: ['FinTech', 'Payments'],
    description: [
      { text: "Developed a " },
      { text: 'secure FinTech solution', highlight: 'blue' },
      { text: ' for ' },
      { text: 'seamless financial transactions', highlight: 'green' },
      { text: '.' },
    ],
    stats: [
      { value: '100k+', label: 'Merchants', color: 'blue' },
      { value: '₹5B+', label: 'Processed', color: 'green' },
      { value: 'Bank-grade', label: 'Security', color: 'yellow' },
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
