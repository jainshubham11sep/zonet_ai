'use client';

import { caseStudies } from '@/lib/case-studies';
import { motion } from 'motion/react';
import { 
  Smartphone, Zap, ArrowUpRight, CheckCircle2, 
  Layers, Code2, Rocket, BarChart3, 
  Search, Layout, Boxes, ShieldCheck,
  Server, Cpu, Database, Wifi, Tablet, Map
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/sections/landing/ContactForm';

const mobileCaseStudies = caseStudies.filter(cs => cs.category === 'Applications' || cs.slug === 'hyyfam');

const features = [
  {
    title: 'React Native & Expo',
    desc: 'Cross-platform applications that share 90%+ code between iOS and Android without sacrificing native performance.',
    icon: Smartphone
  },
  {
    title: 'Offline-First Reliability',
    desc: 'Advanced caching and background sync ensuring your app works perfectly even in zero-connectivity environments.',
    icon: Wifi
  },
  {
    title: 'Biometric Security',
    desc: 'FaceID, TouchID, and Fingerprint integration for bank-grade security and frictionless user authentication.',
    icon: ShieldCheck
  },
  {
    title: 'Real-time Sync',
    desc: 'Powered by WebSockets and Supabase/Firebase for instantaneous data updates across all user devices.',
    icon: Zap
  }
];

const techStack = [
  { name: 'React Native', icon: Smartphone },
  { name: 'Expo', icon: Layers },
  { name: 'Firebase', icon: Database },
  { name: 'Node.js', icon: Server },
  { name: 'Redux/Zustand', icon: Boxes },
  { name: 'App Store SEO', icon: Search }
];

export default function MobileApps() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="section-label mb-6">Service Vertical</div>
              <h1 className="text-5xl md:text-7xl font-black text-foreground font-heading tracking-tighter leading-[1] mb-8">
                Mobile App <br />
                <span className="text-indigo-500 italic">Development</span>
              </h1>
              <p className="text-xl text-muted font-medium leading-relaxed mb-10 max-w-lg">
                We design and build fluid, high-performance mobile experiences that 
                engage users and drive long-term retention on every platform.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-indigo-500/20"
              >
                Start Building <ArrowUpRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square md:aspect-video lg:aspect-square rounded-[40px] overflow-hidden border border-border-custom shadow-2xl"
            >
              <Image 
                src="/images/zonet/mobile-app.png"
                alt="Mobile Development"
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
              Native-Grade <span className="text-muted">Performance</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto font-medium">
              From complex fintech apps to social reward ecosystems, we build mobile 
              solutions that thrive in the competitive app marketplace.
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
                className="p-8 rounded-[32px] bg-card border border-border-custom hover:border-indigo-500/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/5 flex items-center justify-center text-indigo-500 mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                  <feature.icon size={22} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black text-foreground font-heading mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-muted leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-section-alt border-y border-border-custom">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="section-label">Mobile Lifecycle</div>
                <h2 className="text-4xl md:text-5xl font-black text-foreground font-heading tracking-tighter leading-tight">
                  From Design to <span className="text-indigo-500 italic">App Store</span>
                </h2>
              </div>

              <div className="space-y-10">
                {[
                  { step: '01', title: 'UX/UI Prototyping', desc: 'Interactive high-fidelity prototypes focused on mobile navigation patterns and gesture interactions.' },
                  { step: '02', title: 'Cross-Platform Dev', desc: 'Building with React Native to ensure speed-to-market without compromising on native functionality.' },
                  { step: '03', title: 'Store Submission', desc: 'Handling the entire process of Apple App Store and Google Play Store reviews and optimization.' }
                ].map((item) => (
                  <div key={item.step} className="flex gap-6">
                    <div className="text-4xl font-black text-indigo-500/20 font-heading leading-none">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-black text-foreground font-heading mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-muted leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center">
               <div className="relative w-[280px] h-[580px] bg-foreground rounded-[3rem] border-[8px] border-card shadow-2xl overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground rounded-b-2xl z-20" />
                  <div className="relative w-full h-full bg-card p-6">
                    <div className="mt-8 space-y-6">
                      <div className="flex items-center justify-between">
                         <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                            <Zap size={20} />
                         </div>
                         <div className="flex -space-x-3">
                            <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-card" />
                            <div className="w-8 h-8 rounded-full bg-indigo-200 border-2 border-card" />
                            <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-card" />
                         </div>
                      </div>
                      <div className="space-y-3">
                         <div className="h-4 w-full bg-foreground/5 rounded-full" />
                         <div className="h-4 w-3/4 bg-foreground/5 rounded-full" />
                      </div>
                      <div className="aspect-[4/3] rounded-3xl bg-indigo-500/5 border border-indigo-500/10 flex items-center justify-center">
                         <Map className="text-indigo-500/20" size={40} />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                         <div className="h-20 rounded-2xl bg-foreground/5" />
                         <div className="h-20 rounded-2xl bg-foreground/5" />
                      </div>
                    </div>
                  </div>
               </div>
               {/* Decorative floating elements */}
               <div className="absolute -top-10 -right-10 w-24 h-24 bg-indigo-500/10 rounded-3xl blur-xl animate-pulse" />
               <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
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
                Mobile <span className="text-muted">Success Stories</span>
              </h2>
            </div>
            <Link href="/case-studies" className="text-indigo-500 font-black uppercase tracking-widest text-[11px] hover:underline underline-offset-8">
              View All Projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mobileCaseStudies.slice(0, 2).map((project) => (
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
                <h3 className="text-2xl font-black text-foreground font-heading mb-2 group-hover:text-indigo-500 transition-colors">{project.name}</h3>
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
