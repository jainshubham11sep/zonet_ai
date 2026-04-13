'use client';

import { motion } from 'framer-motion';
import { 
  Globe, Smartphone, Cpu, Layers, Sparkles, 
  Zap, CheckCircle2, ArrowUpRight, Code2, 
  Search, Rocket, MessageSquare, BarChart3, 
  ShieldCheck, Layout, Boxes
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

const services = [
  { 
    title: 'Custom Web Engineering', 
    desc: 'Bespoke Next.js applications engineered for extreme speed, SEO dominance, and high-conversion. We don\'t just build sites; we build scalable digital assets.',
    details: 'From high-performance landing pages that load in milliseconds to complex enterprise dashboards that handle millions of data points, we specialize in the modern web stack.',
    features: ['Next.js 15+ App Router', 'Tailwind CSS Systems', 'SSR & ISR Optimization', 'Headless CMS Integration'],
    icon: Globe,
    accent: 'text-accent',
    bg: 'bg-accent/5'
  },
  { 
    title: 'Mobile App Development', 
    desc: 'Seamless, cross-platform mobile experiences that feel truly native. We leverage React Native to deliver fluid animations and offline-first reliability.',
    details: 'We build utility-first mobile applications with real-time syncing, push notification systems, and smooth biometrics integration, ensuring your users get the best experience on iOS and Android.',
    features: ['React Native & Expo', 'Biometric Auth', 'Offline-First Cache', 'Apple & Play Store SEO'],
    icon: Smartphone,
    accent: 'text-indigo-500',
    bg: 'bg-indigo-500/5'
  },
  { 
    title: 'AI Agents & Automation', 
    desc: 'Autonomous AI agents and custom LLM workflows that automate your business operations and provide intelligent customer interactions around the clock.',
    details: 'We integrate RAG (Retrieval-Augmented Generation) and vector databases to create internal company knowledge bases that your AI can use to solve tasks, draft replies, and analyze data.',
    features: ['Custom RAG Systems', 'Vector Search (Pinecone)', 'OpenAI & Claude Auth', 'Workflow Automation'],
    icon: Cpu,
    accent: 'text-emerald-500',
    bg: 'bg-emerald-500/5'
  },
];

const processes = [
  { title: 'Discovery', desc: 'Deep dive into your business goals and technical requirements.', icon: Search },
  { title: 'Design', desc: 'Premium UI/UX mockups that focus on clarity and conversion.', icon: Layout },
  { title: 'Development', desc: 'Agile sprints with clean, scalable code and real-time updates.', icon: Code2 },
  { title: 'Deployment', desc: 'High-performance launch with global CDN and edge-vitals check.', icon: Rocket },
];

export default function Services() {
  return (
    <div className="relative bg-background overflow-x-clip min-h-screen">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      {/* ───────────────────────────────────────────────────
          HERO
      ─────────────────────────────────────────────────── */}
      <section className="pt-28 pb-12 md:pt-40 md:pb-20 border-b border-border-custom px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="section-label mb-8 bg-accent/10 border-accent/20 text-accent"
            >
              <Sparkles size={11} className="mr-1" />
              Our Core Expertise
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-7xl font-black mb-8 text-foreground leading-[1.05] tracking-tighter font-heading"
            >
              Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-indigo-400 to-accent">Next Frontier</span> of Digital Engineering.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed font-medium"
            >
              Combining software engineering with cutting-edge AI to deliver production-ready 
              solutions that scale alongside your success.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────
          SERVICE VERTICALS
      ─────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container mx-auto px-6 space-y-24 md:space-y-36">
          {services.map((service, idx) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Content Side */}
              <div className="lg:w-1/2 space-y-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border border-border-custom shadow-sm ${service.bg} ${service.accent}`}>
                  <service.icon size={28} strokeWidth={2.5} />
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-5xl font-black text-foreground font-heading tracking-tight leading-[1.1]">
                    {service.title}
                  </h2>
                  <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed opacity-70">
                    {service.desc}
                  </p>
                </div>

                <p className="text-sm md:text-base text-muted leading-relaxed font-medium">
                  {service.details}
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map(f => (
                    <li key={f} className="flex items-start gap-3 p-4 rounded-2xl bg-card border border-border-custom shadow-sm group hover:border-accent/40 transition-all duration-300">
                      <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" strokeWidth={3} />
                      <span className="text-[10px] font-black text-foreground uppercase tracking-wider">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 group text-accent font-black text-base hover:underline underline-offset-8 transition-all"
                >
                  Configure Solution <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>

              {/* Visual Side */}
              <div className="lg:w-1/2 w-full aspect-square md:aspect-video relative rounded-[32px] md:rounded-[48px] border border-border-custom overflow-hidden shadow-2xl group outline outline-4 outline-card/20">
                <div className="absolute inset-0 bg-gradient-to-br from-card to-background flex items-center justify-center">
                  <div className="relative w-full h-full p-10 overflow-hidden">
                    <div className="absolute top-[20%] left-[10%] w-[80%] h-[60%] bg-card border border-border-custom rounded-2xl shadow-xl p-6 transition-transform duration-700 group-hover:scale-[1.02] active:scale-[0.98]">
                      <div className="w-full h-8 flex items-center gap-2 mb-6 border-b border-border-custom/50 pb-4">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        <div className="w-2 h-2 rounded-full bg-amber-400" />
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                      </div>
                      <div className="space-y-4">
                        <div className="h-3 w-[60%] bg-accent/20 rounded-full" />
                        <div className="h-3 w-[40%] bg-muted/20 rounded-full" />
                        <div className="h-24 w-full border border-border-custom rounded-xl flex items-center justify-center">
                           <service.icon size={32} className={service.accent + " opacity-20"} strokeWidth={1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────────────────────────────────────────────
          OUR PROCESS
      ─────────────────────────────────────────────────── */}
      <section className="section-padding border-t border-border-custom bg-card/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <div className="section-label mb-6">Our Workflow</div>
            <h2 className="text-3xl md:text-5xl font-black text-foreground font-heading tracking-tighter leading-tight mb-6">
              Precision from <span className="text-accent underline decoration-accent/20 underline-offset-4">Idea</span> to Impact.
            </h2>
            <p className="text-base text-muted font-medium">
              We follow a rigorous, high-speed development cycle ensure quality and scalability 
              at every milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processes.map((proc, i) => (
              <motion.div 
                key={proc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-[28px] bg-card border border-border-custom hover:border-accent/30 transition-all group shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/5 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <proc.icon size={20} strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-black text-foreground font-heading mb-2.5 tracking-tight">{proc.title}</h3>
                <p className="text-muted text-[13px] font-medium leading-relaxed">{proc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────
          BOTTOM CTA
      ─────────────────────────────────────────────────── */}
      <section className="section-padding border-t border-border-custom text-center bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
           <h2 className="text-4xl md:text-6xl font-black text-foreground font-heading tracking-tighter leading-tight mb-8">
            Ready to <span className="text-accent italic">Configure</span> Your Success?
          </h2>
          <p className="text-lg md:text-xl text-muted font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Stop waiting and start building with the engineering partner that prioritizes your ROI.
          </p>
          
          <Link 
            href="/contact" 
            className="group inline-flex items-center gap-3 px-10 py-5 bg-accent text-white rounded-full font-black text-base transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(99,101,241,0.25)]"
          >
            Start Your Project <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-24">
        <ContactForm />
      </div>
    </div>
  );
}
