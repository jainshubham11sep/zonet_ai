'use client';

import { motion } from 'motion/react';
import { 
  Cpu, Zap, ArrowUpRight, CheckCircle2, 
  Layers, Code2, Rocket, BarChart3, 
  Search, Layout, Boxes, ShieldCheck,
  Server, Database, BrainCircuit, Bot, 
  Network, Sparkles, MessageSquare, Terminal
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/sections/landing/ContactForm';
import { caseStudies } from '@/lib/case-studies';

const aiCaseStudies = caseStudies.filter(cs => cs.category === 'AI Services' || cs.slug === 'hyzify');

const features = [
  {
    title: 'Custom RAG Systems',
    desc: 'Retrieval-Augmented Generation that allows AI agents to provide accurate answers based on your internal private company data.',
    icon: Database
  },
  {
    title: 'Autonomous Agents',
    desc: 'Intelligent agents that can perform multi-step tasks, interact with APIs, and manage complex business workflows without human intervention.',
    icon: Bot
  },
  {
    title: 'LLM Fine-Tuning',
    desc: 'Optimizing open-source models like Llama or Mistral for specific industry terminology and highly specialized task performance.',
    icon: BrainCircuit
  },
  {
    title: 'Vector Search Logic',
    desc: 'High-speed semantic search using Pinecone or Milvus to find relevant information across millions of documents in milliseconds.',
    icon: Network
  }
];

const techStack = [
  { name: 'OpenAI / Claude', icon: Sparkles },
  { name: 'LangChain', icon: Layers },
  { name: 'Pinecone', icon: Database },
  { name: 'Python / FastAPI', icon: Terminal },
  { name: 'Node.js', icon: Server },
  { name: 'AI Security', icon: ShieldCheck }
];

export default function Automation() {
  return (
    <div className="bg-[#faf8f5] min-h-screen font-['Sora',_sans-serif] text-slate-800 selection:bg-[#E8C547]/30">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#E8C547]/10 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8C547]/10 border border-[#E8C547]/20 text-[#E8C547] font-bold uppercase tracking-wider text-xs mb-8">
                <BrainCircuit size={14} /> AI Services
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
                AI Agents & <br />
                <span className="text-[#E8C547]">Automation</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
                We build intelligent autonomous agents and AI workflows that handle 
                your operations, support, and data analysis 24/7.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#E8C547] hover:bg-[#d4b33c] text-slate-900 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(232,197,71,0.2)] hover:shadow-[0_0_30px_rgba(232,197,71,0.4)]"
              >
                Deploy AI Today <ArrowUpRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square md:aspect-video lg:aspect-square rounded-[32px] overflow-hidden border border-slate-200 shadow-2xl shadow-[#E8C547]/5"
            >
              <Image 
                src="/images/zonet/ai-automation.png"
                alt="AI Automation"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack section */}
      <section className="py-10 border-y border-slate-200 bg-white/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {techStack.map(tech => (
              <div key={tech.name} className="flex items-center gap-3 group">
                <tech.icon size={20} className="text-slate-700 group-hover:text-[#E8C547] transition-colors" />
                <span className="font-bold uppercase tracking-widest text-[11px] text-slate-700 group-hover:text-[#E8C547] transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              The <span className="text-slate-400">AI-First</span> Enterprise
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              We leverage the latest advancements in LLMs and generative AI to create 
              customized solutions that solve real-world business problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-[24px] bg-white border border-slate-200 hover:border-[#E8C547]/40 hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E8C547]/10 flex items-center justify-center text-[#E8C547] mb-6 group-hover:scale-110 group-hover:bg-[#E8C547] group-hover:text-white transition-all duration-300">
                  <feature.icon size={22} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Process Section */}
      <section className="py-20 md:py-32 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
        {/* Background Visual */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E8C547]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="inline-block px-4 py-1.5 rounded-full bg-slate-200 border border-slate-300 text-slate-600 font-bold uppercase tracking-wider text-xs">
                  AI Roadmap
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Deploying <span className="text-[#E8C547]">Intelligence</span>
                </h2>
              </div>

              <div className="space-y-10">
                {[
                  { step: '01', title: 'Data Audit & RAG Prep', desc: 'Analyzing your company data structures to prepare them for seamless AI retrieval and context injection.' },
                  { step: '02', title: 'Agent Logic Design', desc: 'Crafting the prompt engineering and tool-use logic that defines how your AI agent acts and thinks.' },
                  { step: '03', title: 'Security & Red-Teaming', desc: 'Rigorous testing to prevent prompt injection and ensure your AI data remains private and secure.' }
                ].map((item) => (
                  <div key={item.step} className="flex gap-6">
                    <div className="text-4xl font-extrabold text-[#E8C547]/30 leading-none">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
               <div className="p-10 rounded-[32px] bg-white border border-slate-200 shadow-xl relative z-10 overflow-hidden group">
                  <div className="absolute inset-0 bg-[#E8C547]/[0.02] group-hover:bg-[#E8C547]/[0.04] transition-colors" />
                  <div className="relative space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#E8C547]/10 flex items-center justify-center text-[#E8C547] shadow-[0_0_15px_rgba(232,197,71,0.1)]">
                        <MessageSquare size={24} />
                      </div>
                      <div className="h-4 w-32 bg-slate-100 rounded-full" />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 max-w-[80%]">
                        <div className="h-3 w-full bg-slate-200 rounded-full mb-2" />
                        <div className="h-3 w-1/2 bg-slate-200 rounded-full" />
                      </div>
                      <div className="p-4 rounded-2xl bg-[#E8C547]/10 border border-[#E8C547]/20 max-w-[90%] ml-auto shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                          <Sparkles size={14} className="text-[#E8C547]" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8C547]">Autonomous Thinking</span>
                        </div>
                        <div className="h-3 w-full bg-[#E8C547]/20 rounded-full mb-2" />
                        <div className="h-3 w-3/4 bg-[#E8C547]/20 rounded-full mb-2" />
                        <div className="h-3 w-1/2 bg-[#E8C547]/20 rounded-full" />
                      </div>
                    </div>

                    <div className="pt-6 flex justify-center">
                       <div className="px-6 py-3 rounded-full bg-[#E8C547]/10 border border-[#E8C547]/30 text-[#E8C547] font-bold text-[10px] uppercase tracking-[0.2em] shadow-sm">
                          Task Executed Successfully
                       </div>
                    </div>
                  </div>
               </div>
               {/* Decorative background glow */}
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#E8C547]/20 rounded-full blur-3xl opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-xl">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-xs mb-4">
                Case Studies
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                AI <span className="text-slate-400">Impact Stories</span>
              </h2>
            </div>
            <Link href="/case-studies" className="text-[#E8C547] font-bold uppercase tracking-widest text-xs hover:text-[#d4b33c] transition-colors flex items-center gap-2 group">
              View All Projects <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiCaseStudies.slice(0, 2).map((project) => (
              <Link key={project.slug} href={`/case-studies/${project.slug}`} className="group">
                <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden border border-slate-200 mb-6 shadow-md">
                  <Image 
                    src={project.photo}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md text-slate-900 shadow-sm text-[10px] font-bold uppercase tracking-widest">
                      {project.industry}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#E8C547] transition-colors tracking-tight">{project.name}</h3>
                <p className="text-slate-600 line-clamp-2">{project.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-slate-200 bg-white">
        <div className="[&>div]:bg-transparent [&>div]:border-none [&_h2]:text-slate-900 [&_p]:text-slate-600 [&_label]:text-slate-700 [&_input]:bg-slate-50 [&_input]:border-slate-200 [&_input]:text-slate-900 [&_textarea]:bg-slate-50 [&_textarea]:border-slate-200 [&_textarea]:text-slate-900">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
