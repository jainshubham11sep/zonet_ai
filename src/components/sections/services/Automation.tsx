'use client';

import { motion } from 'motion/react';
import {
  ArrowRight, Database, BrainCircuit, Bot, Network,
  Sparkles, Layers, Server, Terminal, ShieldCheck, MessageSquare,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/sections/landing/ContactForm';
import { caseStudies } from '@/lib/case-studies';
import CaseStudiesSection, { CaseStudyProject } from '@/components/common/CaseStudiesSection';

const aiCaseStudiesProjects: CaseStudyProject[] = caseStudies
  .filter(cs => cs.category === 'AI Services' || cs.slug === 'hyzify')
  .slice(0, 2)
  .map(cs => ({
    tag: cs.industry,
    name: cs.name,
    desc: cs.tagline,
    href: `/case-studies/${cs.slug}`,
    image: cs.photo,
    stats: cs.stats.slice(0, 3).map((s: { value: string; label: string; icon: string }) => ({
      value: s.value.replace('★', '').trim(),
      label: s.label.toUpperCase(),
      star: s.icon === 'Star',
    })),
  }));

const techStack = [
  { name: 'OPENAI / CLAUDE', Icon: Sparkles },
  { name: 'LANGCHAIN', Icon: Layers },
  { name: 'PINECONE', Icon: Database },
  { name: 'PYTHON / FASTAPI', Icon: Terminal },
  { name: 'NODE.JS', Icon: Server },
  { name: 'AI SECURITY', Icon: ShieldCheck },
];

const features = [
  {
    title: 'Custom RAG Systems',
    desc: 'Retrieval-Augmented Generation that allows AI agents to provide accurate answers based on your internal private company data.',
    Icon: Database,
  },
  {
    title: 'Autonomous Agents',
    desc: 'Intelligent agents that can perform multi-step tasks, interact with APIs, and manage complex business workflows without human intervention.',
    Icon: Bot,
  },
  {
    title: 'LLM Fine-Tuning',
    desc: 'Optimizing open-source models like Llama or Mistral for specific industry terminology and highly specialized task performance.',
    Icon: BrainCircuit,
  },
  {
    title: 'Vector Search Logic',
    desc: 'High-speed semantic search using Pinecone or Milvus to find relevant information across millions of documents in milliseconds.',
    Icon: Network,
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Data Audit & RAG Prep',
    desc: 'Analyzing your company data structures to prepare them for seamless AI retrieval and context injection.',
  },
  {
    num: '02',
    title: 'Agent Logic Design',
    desc: 'Crafting the prompt engineering and tool-use logic that defines how your AI agent acts and thinks.',
  },
  {
    num: '03',
    title: 'Security & Red-Teaming',
    desc: 'Rigorous testing to prevent prompt injection and ensure your AI data remains private and secure.',
  },
];

function AIChatVisual() {
  return (
    <div className="bg-white rounded-[28px] border border-[#E6E4DF] shadow-xl p-8 relative overflow-hidden">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#E8C547]/10 flex items-center justify-center text-[#E8C547]">
            <MessageSquare size={22} />
          </div>
          <div>
            <div className="text-[12px] font-bold text-[#1A1A1A]">AI Agent</div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-[10px] text-[#686B6B]">Processing request…</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="p-4 rounded-2xl bg-[#F9F9F9] border border-[#E6E4DF] max-w-[85%]">
            <div className="h-2.5 w-full bg-[#E6E4DF] rounded-full mb-2" />
            <div className="h-2.5 w-2/3 bg-[#E6E4DF] rounded-full" />
          </div>
          <div className="p-4 rounded-2xl bg-[#E8C547]/10 border border-[#E8C547]/20 max-w-[90%] ml-auto">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={13} className="text-[#E8C547]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8C547]">Autonomous Thinking</span>
            </div>
            <div className="space-y-1.5">
              <div className="h-2.5 w-full bg-[#E8C547]/20 rounded-full" />
              <div className="h-2.5 w-4/5 bg-[#E8C547]/20 rounded-full" />
              <div className="h-2.5 w-3/5 bg-[#E8C547]/20 rounded-full" />
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-2">
          <div className="px-5 py-2.5 rounded-full bg-[#E8C547]/10 border border-[#E8C547]/30 text-[#E8C547] font-bold text-[10px] uppercase tracking-[0.15em]">
            Task Executed Successfully
          </div>
        </div>
      </div>
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#E8C547]/15 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}

export default function Automation() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-screen pb-16 pt-12" style={{ fontFamily: 'var(--font-sora-family)' }}>

      {/* ── HERO ────────────────────────────────── */}
      <section className="pt-16 pb-12 md:pt-24 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-[500px]"
          >
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.12em] uppercase text-[#E8C547] bg-[#E8C547]/10 px-3 py-1 rounded-full mb-6">
              <BrainCircuit size={12} /> AI Services
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.05] text-[#1A1A1A] mb-6">
              AI Agents &<br />
              <em className="text-[#E8C547] not-italic">Automation</em>
            </h1>
            <p className="text-sm sm:text-base md:text-[16px] leading-[1.6] text-[#686B6B] mb-10 max-w-[420px]">
              We build intelligent autonomous agents and AI workflows that handle
              your operations, support, and data analysis 24/7.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 bg-[#E8C547] text-[#1A1A1A] font-bold text-sm rounded-full shadow-[0_4px_14px_rgba(232,197,71,0.35)] hover:bg-[#d4b33c] hover:shadow-[0_6px_20px_rgba(232,197,71,0.45)] hover:-translate-y-0.5 transition-all duration-200"
              >
                Deploy AI Today <ArrowRight size={16} />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-white border border-[#E6E4DF] text-[#1A1A1A] font-bold text-sm rounded-full hover:bg-[#FAFAF8] transition-colors duration-200"
              >
                View Our Work <ArrowRight size={16} className="text-[#999]" />
              </Link>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full flex justify-center"
          >
            <div className="relative w-full max-w-[540px] pt-10 pb-16 px-8 flex justify-center">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[400px] h-[400px] bg-[#E8C547]/3 rounded-full border border-[#E8C547]/10" />
                <div className="absolute w-[300px] h-[300px] bg-[#E8C547]/5 rounded-full" />
              </div>

              <div className="relative w-full aspect-4/3 rounded-[24px] overflow-hidden border border-[#E6E4DF] shadow-[0_24px_64px_rgba(0,0,0,0.1)] z-10">
                <Image
                  src="/images/zonet/ai-automation.png"
                  alt="AI Automation"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute top-6 right-0 bg-white rounded-xl px-4 py-3 shadow-[0_12px_24px_rgba(0,0,0,0.08)] border border-[#E6E4DF] z-20 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E8C547]/10 flex items-center justify-center text-[#E8C547]">
                  <BrainCircuit size={16} />
                </div>
                <div>
                  <div className="text-[12px] font-bold text-[#1A1A1A]">AI Powered</div>
                  <div className="text-[10px] text-[#686B6B]">GPT-4 & Claude</div>
                </div>
              </div>

              <div className="absolute bottom-10 left-0 bg-white rounded-xl px-4 py-3 shadow-[0_12px_24px_rgba(0,0,0,0.08)] border border-[#E6E4DF] z-20 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600">
                  <Bot size={16} />
                </div>
                <div>
                  <div className="text-[12px] font-bold text-[#1A1A1A]">Autonomous</div>
                  <div className="text-[10px] text-[#686B6B]">24/7 Active</div>
                </div>
              </div>

              <div className="absolute top-[42%] left-[-4%] bg-white rounded-xl px-4 py-3 shadow-[0_12px_24px_rgba(0,0,0,0.08)] border border-[#E6E4DF] z-20 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600">
                  <Network size={16} />
                </div>
                <div>
                  <div className="text-[12px] font-bold text-[#1A1A1A]">Vector Search</div>
                  <div className="text-[10px] text-[#686B6B]">Pinecone</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TECH BAR ────────────────────────────── */}
      <section className="border border-[#E6E4DF] py-5 sm:py-6 bg-white rounded-2xl mb-24 shadow-sm">
        <div className="w-full px-4 sm:px-8">
          <div className="flex items-center justify-center sm:justify-between gap-6 sm:gap-8 flex-wrap">
            {techStack.map(({ name, Icon }) => (
              <div key={name} className="flex items-center gap-2 text-[11px] sm:text-[12px] font-bold tracking-wider text-[#1A1A1A] whitespace-nowrap">
                <Icon size={18} className="text-[#1A1A1A]" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ─────────────── */}
      <section className="py-12 sm:py-16 text-center">
        <div className="max-w-[1140px] mx-auto">
          <span className="inline-block text-[10px] font-semibold tracking-[0.12em] uppercase text-[#E8C547] bg-[#E8C547]/10 px-4 py-1.5 rounded-full mb-6">
            What We Build
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1A1A1A] mb-4 tracking-tight">
            The <em className="text-[#E8C547] not-italic">AI-First</em> Enterprise
          </h2>
          <p className="text-sm sm:text-base text-[#686B6B] leading-[1.6] max-w-[560px] mx-auto mb-16">
            We leverage the latest advancements in LLMs and generative AI to create
            customized solutions that solve real-world business problems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {features.map(({ title, desc, Icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 sm:p-10 rounded-2xl border border-[#E6E4DF] shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FFF3DC] flex items-center justify-center mb-6">
                  <Icon size={24} className="text-[#E8C547]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{title}</h3>
                <p className="text-[14px] leading-[1.6] text-[#686B6B]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ─────────────── */}
      <section className="py-16 sm:py-24 bg-[#F9F9F9] rounded-[40px] border border-[#E6E4DF] px-6 sm:px-12 my-12">
        <div className="max-w-[1140px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div>
              <span className="inline-block text-[10px] font-bold tracking-[0.14em] uppercase text-[#E8C547] mb-4">
                AI Roadmap
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1A1A1A] mb-12 tracking-tight">
                Deploying <em className="text-[#E8C547] not-italic">Intelligence</em>
              </h2>
              <div className="flex flex-col gap-8">
                {processSteps.map(({ num, title, desc }) => (
                  <div key={num} className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full border-2 border-[#E8C547] flex items-center justify-center text-[#E8C547] font-bold text-lg shrink-0">
                      {num}
                    </div>
                    <div className="pt-1">
                      <h4 className="text-lg font-bold text-[#1A1A1A] mb-2">{title}</h4>
                      <p className="text-[14px] leading-[1.6] text-[#686B6B] max-w-[400px]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full flex justify-center lg:justify-end"
            >
              <AIChatVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ────────────────────────── */}
      <CaseStudiesSection
        title="AI"
        titleHighlight="Impact Stories"
        projects={aiCaseStudiesProjects}
      />

      {/* ── CONTACT FORM ────────────────────────── */}
      <div className="border-t border-[#E6E4DF] bg-white pt-12 mt-12 rounded-3xl mx-[-16px] sm:mx-[-24px] px-4 sm:px-6">
        <ContactForm />
      </div>
    </div>
  );
}
