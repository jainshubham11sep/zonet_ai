'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, BarChart3, Plug, ShieldCheck, Search, TestTubes, Activity, MessageSquare, Workflow, PieChart, Lock } from 'lucide-react';

const tabs = [
  {
    id: 'build',
    label: 'Build with AI',
    heading: 'AI-accelerated development at 3× speed',
    desc: 'We use AI to compress development timelines without compromising quality. What takes others 3 months takes us 30 days.',
    visual: 'timeline',
  },
  {
    id: 'optimize',
    label: 'Optimize with AI',
    heading: 'Continuous AI-driven performance gains',
    desc: 'AI constantly monitors and improves your product\'s performance, SEO, and UX — even after launch. Our agents detect bottlenecks before they affect your users.',
    visual: 'metrics',
  },
  {
    id: 'integrate',
    label: 'Integrate AI',
    heading: 'Embed intelligence directly into your product',
    desc: 'From simple chatbots to advanced LLM pipelines — we embed AI where it drives the most value. Our integrations are designed to scale with your user base.',
    visual: 'integration',
  },
];

const TimelineCompare = () => (
  <div className="space-y-5">
    {/* Traditional Agency */}
    <div className="flex items-center gap-4">
      <span className="text-xs font-medium text-muted whitespace-nowrap w-36 text-right">Traditional Agency</span>
      <div className="flex-1 h-10 rounded-lg bg-border-custom/30 relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="h-full rounded-lg bg-gradient-to-r from-red-600/60 to-red-500/40 flex items-center justify-end pr-4"
        >
          <span className="text-xs font-bold text-foreground">90 days</span>
        </motion.div>
      </div>
    </div>
    {/* Zonet */}
    <div className="flex items-center gap-4">
      <span className="text-xs font-medium text-muted whitespace-nowrap w-36 text-right">Zonet (AI-Powered)</span>
      <div className="flex-1 h-10 rounded-lg bg-border-custom/30 relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '35%' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
          className="h-full rounded-lg bg-gradient-to-r from-accent/80 to-accent/50 flex items-center justify-end pr-4"
        >
          <span className="text-xs font-bold text-white">30 days</span>
        </motion.div>
      </div>
    </div>
    {/* Badges */}
    <div className="flex flex-wrap gap-2 mt-3">
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border-custom text-[10px] font-bold text-muted">
        <Zap size={12} className="text-amber-500" /> 3× Faster Delivery
      </span>
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border-custom text-[10px] font-bold text-muted">
        💰 40% Cost Savings
      </span>
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border-custom text-[10px] font-bold text-muted">
        🎯 Same Quality Standard
      </span>
    </div>
  </div>
);

const MetricsGrid = () => {
  const metrics = [
    { value: 97, label: 'Performance', color: '#6366F1' },
    { value: 94, label: 'SEO Score', color: '#8B5CF6' },
    { value: 98, label: 'Accessibility', color: '#A78BFA' },
    { value: 92, label: 'Conversion', color: '#00ff88' },
  ];

  const features = [
    { icon: Activity, text: 'Real-time Performance Monitoring' },
    { icon: Search, text: 'AI-Driven SEO Adjustments' },
    { icon: TestTubes, text: 'Automated A/B Testing' },
    { icon: ShieldCheck, text: 'Predictive Security Patches' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((m, i) => {
          const circumference = 2 * Math.PI * 42;
          const offset = circumference - (m.value / 100) * circumference;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-card/60 border border-border-custom"
            >
              <div className="relative w-20 h-20">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="var(--border-custom)" strokeWidth="6" />
                  <motion.circle
                    cx="50" cy="50" r="42"
                    fill="none"
                    stroke={m.color}
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset: offset }}
                    transition={{ duration: 1, delay: i * 0.15 }}
                    viewport={{ once: true }}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-lg font-black text-foreground">{m.value}</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted">{m.label}</span>
            </motion.div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <div key={i} className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-card/40 border border-border-custom/50">
              <Icon size={14} className="text-accent shrink-0" />
              <span className="text-xs font-medium text-muted">{f.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const IntegrationFlow = () => {
  const nodes = [
    { icon: MessageSquare, text: 'AI Chatbot', sub: '24/7 Support' },
    { icon: Workflow, text: 'Auto-Task', sub: 'Workflow AI' },
    { icon: PieChart, text: 'Analytics', sub: 'Predictive Insights' },
    { icon: Lock, text: 'Security', sub: 'Anomaly Detection' },
  ];

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="px-6 py-3 rounded-2xl bg-accent/15 border border-accent/25 text-sm font-bold text-foreground">
        Your Product
      </div>
      <div className="w-px h-6 bg-border-custom" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {nodes.map((n, i) => {
          const Icon = n.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-card/60 border border-border-custom text-center"
            >
              <Icon size={20} className="text-accent" />
              <span className="text-xs font-bold text-foreground">{n.text}</span>
              <span className="text-[9px] text-muted">{n.sub}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const AIWhatWeDoTabs = () => {
  const [activeTab, setActiveTab] = useState('build');
  const activeData = tabs.find(t => t.id === activeTab);

  return (
    <section className="section-padding bg-section-alt border-t border-border-custom relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-start mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="section-label mb-4"
          >
            What We Do
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-foreground tracking-tight leading-[1.1] font-heading max-w-3xl"
          >
            We don&apos;t just build products. We make them <span className="text-accent">intelligent.</span>
          </motion.h2>
        </div>

        {/* Tab Switcher */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-center gap-0 border-b border-border-custom">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-5 py-3 text-xs md:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'text-foreground'
                      : 'text-muted hover:text-foreground'
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="whatwedo-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
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
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Visual Panel */}
            <div className="rounded-2xl bg-card/50 border border-border-custom p-6 md:p-10">
              {activeData.visual === 'timeline' && <TimelineCompare />}
              {activeData.visual === 'metrics' && <MetricsGrid />}
              {activeData.visual === 'integration' && <IntegrationFlow />}
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-muted font-medium leading-relaxed max-w-2xl">
              {activeData.desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AIWhatWeDoTabs;
