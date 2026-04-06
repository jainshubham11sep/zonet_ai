'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Cpu, Zap, Globe } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

const projects = {
  'ai-dashboard': { 
    title: 'Enterprise AI Dashboard', 
    problem: 'The client needed a way to visualize complex real-time data from 50+ sources with AI-driven insights.', 
    solution: 'We built a high-performance Next.js dashboard with a custom AI aggregation layer and real-time visualization.',
    tech: ['Next.js', 'PostgreSQL', 'OpenAI API', 'Framer Motion'],
    results: ['400% faster data processing', 'Real-time anomalies detection', '30-day delivery'],
    img: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=1200&auto=format&fit=crop&q=60'
  },
  'crypto-app': { 
    title: 'Next-Gen Crypto Exchange', 
    problem: 'A startup needed a secure, low-latency trading platform that could scale to millions of users.', 
    solution: 'We developed a robust React application with an AI-powered risk management engine and sub-100ms trade execution.',
    tech: ['React Native', 'Redis', 'TensorFlow', 'WebSockets'],
    results: ['Sub-100ms latency', '99.99% uptime', '20-day build'],
    img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&auto=format&fit=crop&q=60'
  }
};

export default function CaseStudyDetail({ params }) {
  const { slug } = params || { slug: 'ai-dashboard' };
  const project = projects[slug] || projects['ai-dashboard'];

  return (
    <div className="pt-32 bg-black min-h-screen">
      <div className="container mx-auto px-6 mb-20">
        <Link href="/case-studies" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12">
          <ArrowLeft size={18} /> Back to Case Studies
        </Link>

        {/* Hero */}
        <section className="space-y-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tight"
          >
            {project.title}
          </motion.h1>
          
          <div className="aspect-video w-full rounded-[48px] overflow-hidden glass border border-white/10 relative">
            <img 
              src={project.img} 
              alt={project.title}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </section>

        {/* Content */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <span className="w-8 h-px bg-accent-blue inline-block"></span>
                The Problem
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed font-medium">
                {project.problem}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <span className="w-8 h-px bg-accent-purple inline-block"></span>
                The AI Solution
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed font-medium">
                {project.solution}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <span className="w-8 h-px bg-green-400 inline-block"></span>
                Key Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.results.map((r, i) => (
                  <div key={i} className="p-6 rounded-3xl glass border border-white/5 space-y-4">
                    <CheckCircle className="text-accent-blue" size={24} />
                    <p className="text-white font-bold text-lg leading-snug">{r}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-12">
            <div className="p-8 rounded-[40px] glass border border-white/10 space-y-8">
              <h3 className="text-2xl font-bold text-white">Project Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue border border-accent-blue/20">
                    <Cpu size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Tech Stack</p>
                    <p className="text-white font-medium">{project.tech.join(', ')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center text-accent-purple border border-accent-purple/20">
                    <Zap size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Timeline</p>
                    <p className="text-white font-medium">30 Days (Completed early)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 border border-green-500/20">
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Industry</p>
                    <p className="text-white font-medium">Enterprise SaaS</p>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="block w-full py-4 rounded-2xl bg-white text-black text-center font-black hover:bg-accent-blue transition-all">
                Let's Build Yours
              </Link>
            </div>
          </div>
        </section>
      </div>

      <ContactForm />
    </div>
  );
}
