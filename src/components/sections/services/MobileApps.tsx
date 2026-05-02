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
                <Smartphone size={14} /> Mobile Apps
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
                Mobile App <br />
                <span className="text-[#E8C547]">Development</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
                We design and build fluid, high-performance mobile experiences that 
                engage users and drive long-term retention on every platform.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#E8C547] hover:bg-[#d4b33c] text-slate-900 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(232,197,71,0.2)] hover:shadow-[0_0_30px_rgba(232,197,71,0.4)]"
              >
                Start Building <ArrowUpRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square md:aspect-video lg:aspect-square rounded-[32px] overflow-hidden border border-slate-200 shadow-2xl shadow-[#E8C547]/5"
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
      <section className="py-20 md:py-32 px-6 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Native-Grade <span className="text-slate-400">Performance</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
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

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-slate-50 border-y border-slate-200 relative">
        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="inline-block px-4 py-1.5 rounded-full bg-slate-200 border border-slate-300 text-slate-600 font-bold uppercase tracking-wider text-xs">
                  Mobile Lifecycle
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  From Design to <span className="text-[#E8C547]">App Store</span>
                </h2>
              </div>

              <div className="space-y-10">
                {[
                  { step: '01', title: 'UX/UI Prototyping', desc: 'Interactive high-fidelity prototypes focused on mobile navigation patterns and gesture interactions.' },
                  { step: '02', title: 'Cross-Platform Dev', desc: 'Building with React Native to ensure speed-to-market without compromising on native functionality.' },
                  { step: '03', title: 'Store Submission', desc: 'Handling the entire process of Apple App Store and Google Play Store reviews and optimization.' }
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

            <div className="relative flex justify-center">
               <div className="relative w-[280px] h-[580px] bg-slate-800 rounded-[3rem] border-[8px] border-slate-100 shadow-2xl overflow-hidden ring-1 ring-slate-200">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20" />
                  <div className="relative w-full h-full bg-white p-6 pt-12">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                         <div className="w-12 h-12 rounded-2xl bg-[#E8C547]/10 flex items-center justify-center text-[#E8C547]">
                            <Zap size={20} />
                         </div>
                         <div className="flex -space-x-3">
                            <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />
                            <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white" />
                            <div className="w-8 h-8 rounded-full bg-[#E8C547]/20 border-2 border-white" />
                         </div>
                      </div>
                      <div className="space-y-3">
                         <div className="h-4 w-full bg-slate-100 rounded-full" />
                         <div className="h-4 w-3/4 bg-slate-100 rounded-full" />
                      </div>
                      <div className="aspect-[4/3] rounded-3xl bg-[#E8C547]/5 border border-[#E8C547]/10 flex items-center justify-center">
                         <Map className="text-[#E8C547]/30" size={40} />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                         <div className="h-20 rounded-2xl bg-slate-100" />
                         <div className="h-20 rounded-2xl bg-slate-100" />
                      </div>
                    </div>
                  </div>
               </div>
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
                Mobile <span className="text-slate-400">Success Stories</span>
              </h2>
            </div>
            <Link href="/case-studies" className="text-[#E8C547] font-bold uppercase tracking-widest text-xs hover:text-[#d4b33c] transition-colors flex items-center gap-2 group">
              View All Projects <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mobileCaseStudies.slice(0, 2).map((project) => (
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
