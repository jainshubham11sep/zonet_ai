'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Bot, Smartphone } from 'lucide-react';
import Image from 'next/image';

const tabs = [
  {
    id: 'web',
    label: 'Web Apps',
    icon: Globe,
    heading: 'We Build Web Apps That Drive Revenue',
    desc: 'From marketing sites to complex SaaS dashboards — we design and build pixel-perfect, high-converting web experiences powered by Next.js, Framer, and AI.',
    features: ['Lightning-fast Next.js builds', 'AI-powered UX personalization', 'CRO-optimized landing pages', 'Scalable design systems'],
    visual: '/images/zonet/screenshot-1.png',
  },
  {
    id: 'ai',
    label: 'AI Products',
    icon: Bot,
    heading: 'AI-First Products Built for Scale',
    desc: 'We integrate LLMs, AI agents, and automation pipelines directly into your product — transforming how your users interact with your software.',
    features: ['Custom GPT-4 / Claude integrations', 'AI workflow automation', 'Intelligent chatbots & copilots', 'RAG systems & vector search'],
    visual: '/images/zonet/screenshot-2.png',
  },
  {
    id: 'mobile',
    label: 'Mobile Apps',
    icon: Smartphone,
    heading: 'Mobile Apps Users Love to Use',
    desc: 'We craft beautiful, high-performance iOS and Android apps using React Native. From MVP to App Store launch — we handle the full journey.',
    features: ['React Native cross-platform', 'iOS & Android deployment', 'App Store optimization', 'Push notifications & analytics'],
    visual: '/images/zonet/screenshot-3.png',
  },
];

const AIWhatWeDoTabs = () => {
  const [activeTab, setActiveTab] = useState('web');
  const activeData = tabs.find(t => t.id === activeTab);

  return (
    <section className="section-padding bg-background border-t border-border-custom relative overflow-hidden">
      {/* Background Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="section-label mb-6"
          >
            What We Do
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-foreground tracking-tighter leading-[1] font-heading max-w-3xl"
          >
            Full-Stack AI <br /><span className="text-muted">Product Studio</span>
          </motion.h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-start md:justify-center mb-12 md:mb-16 -mx-6 px-6 overflow-hidden">
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-card/40 backdrop-blur-md border border-border-custom shadow-xl overflow-x-auto no-scrollbar max-w-full touch-pan-x">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2.5 px-5 md:px-6 py-3 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all duration-500 whitespace-nowrap flex-shrink-0 ${
                    isActive
                      ? 'bg-accent text-white shadow-lg shadow-accent/20 translate-y-[-1px]'
                      : 'text-muted hover:text-foreground'
                  }`}
                >
                  <Icon size={14} strokeWidth={ isActive ? 3 : 2 } />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: 'circOut' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto"
          >
            {/* Left: Text */}
            <div className="space-y-8">
              <h3 className="text-3xl md:text-5xl font-black text-foreground leading-[1] tracking-tighter font-heading">
                {activeData.heading}
              </h3>
              <p className="text-lg md:text-xl text-muted leading-relaxed font-medium tracking-tight">
                {activeData.desc}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeData.features.map((f, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-foreground font-black text-xs uppercase tracking-widest"
                  >
                    <div className="w-6 h-6 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 text-accent">
                      <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {f}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right: Visual Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-[40px] w-full aspect-[4/3] flex items-center justify-center bg-card border border-border-custom overflow-hidden shadow-2xl group"
            >
              {/* Decorative grid */}
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `radial-gradient(circle, #6366F1 1px, transparent 1px)`,
                backgroundSize: '32px 32px'
              }} />

              {/* Accent Glow inside card */}
              <div className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 bg-accent/5 rounded-full blur-[80px]" />
              
              <div className="relative z-10 w-[88%] h-[88%] rounded-[24px] overflow-hidden border border-border-custom shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
                <Image 
                  src={activeData.visual} 
                  alt={activeData.heading}
                  fill
                  className="object-cover object-top brightness-[0.9] group-hover:brightness-100 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AIWhatWeDoTabs;
