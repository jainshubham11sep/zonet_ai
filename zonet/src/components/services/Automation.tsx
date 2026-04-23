'use client';

import { motion } from 'framer-motion';
import { 
  Cpu, Zap, ArrowUpRight, CheckCircle2, 
  Layers, Code2, Rocket, BarChart3, 
  Search, Layout, Boxes, ShieldCheck,
  Server, Database, BrainCircuit, Bot, 
  Network, Sparkles, MessageSquare, Terminal
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '../landing-page/ContactForm';
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
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="section-label mb-6">Service Vertical</div>
              <h1 className="text-5xl md:text-7xl font-black text-foreground font-heading tracking-tighter leading-[1] mb-8">
                AI Agents & <br />
                <span className="text-emerald-500 italic">Automation</span>
              </h1>
              <p className="text-xl text-muted font-medium leading-relaxed mb-10 max-w-lg">
                We build intelligent autonomous agents and AI workflows that handle 
                your operations, support, and data analysis 24/7.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-emerald-500/20"
              >
                Deploy AI Today <ArrowUpRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square md:aspect-video lg:aspect-square rounded-[40px] overflow-hidden border border-border-custom shadow-2xl"
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
      <section className="py-10 border-y border-border-custom bg-card/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
            {techStack.map(tech => (
              <div key={tech.name} className="flex items-center gap-3">
                <tech.icon size={20} className="text-foreground" />
                <span className="font-black uppercase tracking-widest text-[11px]">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-foreground font-heading tracking-tighter mb-6">
              The <span className="text-muted">AI-First</span> Enterprise
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto font-medium">
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
                className="p-8 rounded-[32px] bg-card border border-border-custom hover:border-emerald-500/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/5 flex items-center justify-center text-emerald-500 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <feature.icon size={22} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black text-foreground font-heading mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-muted leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Process Section */}
      <section className="section-padding bg-section-alt border-y border-border-custom relative overflow-hidden">
        {/* Background Visual */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="section-label">AI Roadmap</div>
                <h2 className="text-4xl md:text-5xl font-black text-foreground font-heading tracking-tighter leading-tight">
                  Deploying <span className="text-emerald-500 italic">Intelligence</span>
                </h2>
              </div>

              <div className="space-y-10">
                {[
                  { step: '01', title: 'Data Audit & RAG Prep', desc: 'Analyzing your company data structures to prepare them for seamless AI retrieval and context injection.' },
                  { step: '02', title: 'Agent Logic Design', desc: 'Crafting the prompt engineering and tool-use logic that defines how your AI agent acts and thinks.' },
                  { step: '03', title: 'Security & Red-Teaming', desc: 'Rigorous testing to prevent prompt injection and ensure your AI data remains private and secure.' }
                ].map((item) => (
                  <div key={item.step} className="flex gap-6">
                    <div className="text-4xl font-black text-emerald-500/20 font-heading leading-none">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-black text-foreground font-heading mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-muted leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
               <div className="p-10 rounded-[40px] bg-card border border-border-custom shadow-2xl relative z-10 overflow-hidden group">
                  <div className="absolute inset-0 bg-emerald-500/[0.02] group-hover:bg-emerald-500/[0.04] transition-colors" />
                  <div className="relative space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shadow-lg shadow-emerald-500/10">
                        <MessageSquare size={24} />
                      </div>
                      <div className="h-4 w-32 bg-foreground/10 rounded-full" />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-4 rounded-2xl bg-foreground/5 max-w-[80%]">
                        <div className="h-3 w-full bg-foreground/5 rounded-full mb-2" />
                        <div className="h-3 w-1/2 bg-foreground/5 rounded-full" />
                      </div>
                      <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 max-w-[90%] ml-auto">
                        <div className="flex items-center gap-2 mb-3">
                          <Sparkles size={14} className="text-emerald-500" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Autonomous Thinking</span>
                        </div>
                        <div className="h-3 w-full bg-emerald-500/10 rounded-full mb-2" />
                        <div className="h-3 w-3/4 bg-emerald-500/10 rounded-full mb-2" />
                        <div className="h-3 w-1/2 bg-emerald-500/10 rounded-full" />
                      </div>
                    </div>

                    <div className="pt-6 flex justify-center">
                       <div className="px-6 py-3 rounded-full bg-emerald-500 text-white font-black text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-emerald-500/20">
                          Task Executed Successfully
                       </div>
                    </div>
                  </div>
               </div>
               {/* Decorative background glow */}
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-xl">
              <div className="section-label mb-4">Case Studies</div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground font-heading tracking-tighter">
                AI <span className="text-muted">Impact Stories</span>
              </h2>
            </div>
            <Link href="/case-studies" className="text-emerald-500 font-black uppercase tracking-widest text-[11px] hover:underline underline-offset-8">
              View All Projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiCaseStudies.slice(0, 2).map((project) => (
              <Link key={project.slug} href={`/case-studies/${project.slug}`} className="group">
                <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden border border-border-custom mb-6">
                  <Image 
                    src={project.photo}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white border border-white/10 text-[9px] font-black uppercase tracking-widest">
                      {project.industry}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-foreground font-heading mb-2 group-hover:text-emerald-500 transition-colors">{project.name}</h3>
                <p className="text-muted font-medium line-clamp-2">{project.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
