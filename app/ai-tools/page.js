'use client';

import { motion } from 'framer-motion';
import { Cpu, Terminal, Zap, Bot, Code, Layout } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const tools = [
  { 
    title: 'CodeAgent XL', 
    desc: 'Autonomous coding agent that handles complex refactors and boilerplate generation in seconds.', 
    icon: Code,
    status: 'Stable',
    type: 'LLM Agent'
  },
  { 
    title: 'UI Synth', 
    desc: 'Generative UI engine that transforms wireframes into production-ready React components.', 
    icon: Layout,
    status: 'Beta',
    type: 'Vision Engine'
  },
  { 
    title: 'Zonet Assistant', 
    desc: 'A full-stack project context manager that stays in sync with your codebase and design files.', 
    icon: Bot,
    status: 'Stable',
    type: 'Context AI'
  },
  { 
    title: 'OptiDeploy', 
    desc: 'Automated CI/CD optimization layer that predicts and prevents deployment failures.', 
    icon: Zap,
    status: 'Internal',
    type: 'DevOps AI'
  },
];

export default function AITools() {
  return (
    <div className="bg-background min-h-screen font-sans">
      
      {/* Header Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 border-b border-border-custom relative overflow-hidden">
        {/* Background visual detail */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="section-label mb-8"
          >
            Engineering Excellence
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl lg:text-8xl font-black mb-8 text-foreground tracking-tighter leading-[1] font-heading"
          >
            Proprietary <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-indigo-400 to-accent">AI Technology</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed font-medium"
          >
            We don't just use AI; we build it. Our proprietary suite of tools 
            allows our team to deliver agency-grade results at 10x the speed.
          </motion.p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {tools.map((tool, idx) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 bg-card border border-border-custom rounded-[40px] group hover:border-accent/40 transition-all duration-500 shadow-sm flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="w-16 h-16 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <tool.icon size={28} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`px-3 py-1 rounded-lg text-[9px] font-black tracking-widest uppercase border ${
                    tool.status === 'Stable' 
                      ? 'border-emerald-500/30 text-emerald-500 bg-emerald-500/5' 
                      : tool.status === 'Beta' 
                        ? 'border-accent/30 text-accent bg-accent/5'
                        : 'border-border-custom text-muted bg-card-alt'
                  }`}>
                    {tool.status}
                  </span>
                  <span className="text-[10px] font-bold text-muted/60 uppercase tracking-widest">{tool.type}</span>
                </div>
              </div>

              <h3 className="text-3xl font-black text-foreground font-heading mb-4 tracking-tight leading-tight group-hover:text-accent transition-colors">
                {tool.title}
              </h3>
              <p className="text-lg text-muted leading-relaxed font-medium mb-12 flex-grow">
                {tool.desc}
              </p>
              
              <div className="pt-8 border-t border-border-custom/50 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs font-black text-muted uppercase tracking-widest">
                  <Terminal size={16} className="text-accent" />
                  <span>Proprietary Logic</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse delay-75" />
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse delay-150" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="bg-card border border-border-custom p-10 md:p-20 rounded-[56px] text-center relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-accent/[0.02] group-hover:bg-accent/[0.04] transition-colors duration-700" />
            <h2 className="text-3xl md:text-6xl font-black text-foreground font-heading tracking-tighter mb-8 relative z-10">
              Need a Custom <span className="text-accent italic">AI Solution</span>?
            </h2>
            <p className="text-lg md:text-xl text-muted mb-12 max-w-xl mx-auto relative z-10 font-medium leading-relaxed">
              We leverage these proprietary tools to build high-performance software 
              for enterprise partners looking to lead their industries.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 rounded-2xl bg-accent text-white font-black text-xs uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-accent/20 relative z-10"
            >
              Start Your AI Roadmap
            </button>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
