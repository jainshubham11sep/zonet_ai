'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Bot, Smartphone } from 'lucide-react';

const tabs = [
  {
    id: 'web',
    label: 'Web Apps',
    icon: Globe,
    heading: 'We Build Web Apps That Drive Revenue',
    desc: 'From marketing sites to complex SaaS dashboards — we design and build pixel-perfect, high-converting web experiences powered by Next.js, Framer, and AI.',
    features: ['Lightning-fast Next.js builds', 'AI-powered UX personalization', 'CRO-optimized landing pages', 'Scalable design systems'],
    visual: '🌐',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    accentColor: '#3B82F6',
  },
  {
    id: 'ai',
    label: 'AI Products',
    icon: Bot,
    heading: 'AI-First Products Built for Scale',
    desc: 'We integrate LLMs, AI agents, and automation pipelines directly into your product — transforming how your users interact with your software.',
    features: ['Custom GPT-4 / Claude integrations', 'AI workflow automation', 'Intelligent chatbots & copilots', 'RAG systems & vector search'],
    visual: '🤖',
    gradient: 'from-violet-500/10 to-purple-500/10',
    accentColor: '#8B5CF6',
  },
  {
    id: 'mobile',
    label: 'Mobile Apps',
    icon: Smartphone,
    heading: 'Mobile Apps Users Love to Use',
    desc: 'We craft beautiful, high-performance iOS and Android apps using React Native. From MVP to App Store launch — we handle the full journey.',
    features: ['React Native cross-platform', 'iOS & Android deployment', 'App Store optimization', 'Push notifications & analytics'],
    visual: '📱',
    gradient: 'from-emerald-500/10 to-green-500/10',
    accentColor: '#10B981',
  },
];

const AIWhatWeDoTabs = () => {
  const [activeTab, setActiveTab] = useState('web');
  const activeData = tabs.find(t => t.id === activeTab);

  return (
    <section className="py-24 bg-card border-t border-border-custom">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-3 py-1 rounded-full border border-badge-border bg-badge-bg text-[10px] font-bold text-muted mb-4 uppercase tracking-[0.2em]"
          >
            What We Do
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-foreground tracking-tighter leading-[1.1] font-heading max-w-3xl"
          >
            Full-Stack AI <br /><span className="text-muted">Product Studio</span>
          </motion.h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-background border border-border-custom shadow-sm">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-button-bg text-button-fg shadow-md'
                      : 'text-muted hover:text-foreground'
                  }`}
                >
                  <Icon size={16} />
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
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
          >
            {/* Left: Text */}
            <div className="space-y-8">
              <h3 className="text-3xl md:text-5xl font-bold text-foreground leading-[1.1] tracking-tight font-heading">
                {activeData.heading}
              </h3>
              <p className="text-lg text-muted leading-relaxed">
                {activeData.desc}
              </p>
              <ul className="space-y-4">
                {activeData.features.map((f, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3 text-foreground font-medium"
                  >
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: activeData.accentColor + '20', color: activeData.accentColor }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
              transition={{ duration: 0.5 }}
              className={`relative rounded-[40px] aspect-square flex items-center justify-center bg-gradient-to-br ${activeData.gradient} border border-border-custom overflow-hidden`}
            >
              {/* Decorative grid */}
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: `radial-gradient(circle, ${activeData.accentColor}30 1px, transparent 1px)`,
                backgroundSize: '32px 32px'
              }} />
              <div className="relative z-10 text-[120px] select-none">
                {activeData.visual}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AIWhatWeDoTabs;
