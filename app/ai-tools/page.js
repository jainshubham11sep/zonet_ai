'use client';

import { motion } from 'framer-motion';
import { Cpu, Terminal, Zap, Bot, Code, Layout } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const tools = [
  { 
    title: 'CodeAgent XL', 
    desc: 'Autonomous coding agent that handles complex refactors and boilerplate generation in seconds.', 
    icon: Code,
    status: 'In Production'
  },
  { 
    title: 'UI Synth', 
    desc: 'Generative UI engine that transforms wireframes into production-ready React components.', 
    icon: Layout,
    status: 'BETA'
  },
  { 
    title: 'Zonet Assistant', 
    desc: 'A full-stack project context manager that stays in sync with your codebase and design files.', 
    icon: Bot,
    status: 'In Production'
  },
  { 
    title: 'OptiDeploy', 
    desc: 'Automated CI/CD optimization layer that predicts and prevents deployment failures.', 
    icon: Zap,
    status: 'Internal Use'
  },
];

export default function AITools() {
  return (
    <div className="pt-32 bg-black min-h-screen">
      {/* Header */}
      <section className="py-20 border-b border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center animate-in fade-in duration-1000">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block p-4 rounded-full glass border border-accent-blue/20 mb-8"
          >
            <Cpu className="text-accent-blue animate-pulse" size={32} />
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 text-white tracking-tight leading-tight">
            AI <span className="text-accent-purple italic uppercase tracking-widest">Internal</span> Tools.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We don't just use AI; we build it. Explore the proprietary tools our team uses 
            to deliver projects faster than anyone else in the industry.
          </p>
        </div>

        {/* Floating Matrix Background Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 flex justify-center items-center">
            <div className="w-[1000px] h-[1000px] border border-accent-blue/10 rounded-full animate-spin duration-[100s]"></div>
            <div className="absolute w-[800px] h-[800px] border border-accent-purple/10 rounded-full animate-spin duration-[150s] animation-reverse"></div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {tools.map((tool, idx) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-12 glass rounded-[48px] border border-white/10 group hover:border-accent-blue transition-all duration-700 h-fit"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue/10 transition-colors">
                  <tool.icon size={32} />
                </div>
                <span className={`px-4 py-1 rounded-full text-[10px] font-black tracking-widest border transition-all ${
                  tool.status === 'In Production' 
                    ? 'border-blue-500/50 text-blue-500 bg-blue-500/10' 
                    : tool.status === 'BETA' 
                      ? 'border-accent-blue/50 text-accent-blue bg-accent-blue/10 animate-pulse'
                      : 'border-white/20 text-gray-500 bg-white/5'
                }`}>
                  {tool.status}
                </span>
              </div>
              <h3 className="text-4xl font-bold text-white group-hover:text-accent-blue transition-colors mb-6">{tool.title}</h3>
              <p className="text-xl text-gray-400 leading-relaxed font-medium mb-10">
                {tool.desc}
              </p>
              
              <div className="flex items-center gap-4 text-sm font-bold text-gray-600">
                <Terminal size={18} />
                <span>Proprietary LLM Integration</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center glass-dark p-20 rounded-[64px] border border-white/10 overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10">Want to use our tools?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto relative z-10">
            We selectively license our internal tools to enterprise partners 
            looking to accelerate their internal development speed.
          </p>
          <button className="px-12 py-5 rounded-3xl bg-white text-black font-black text-xl hover:bg-accent-blue transition-all shadow-xl relative z-10">
            Inquire About Licensing
          </button>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
