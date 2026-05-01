'use client';

import { caseStudies } from '@/lib/case-studies';
import { motion } from 'motion/react';
import { 
  Globe, Zap, ArrowUpRight, CheckCircle2, 
  Layers, Code2, Rocket, BarChart3, 
  Search, Layout, Boxes, ShieldCheck,
  Server, Cpu, Database
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/sections/landing/ContactForm';

const webCaseStudies = caseStudies.filter(cs => cs.category === 'Websites' || cs.slug === 'hyyzo');

const features = [
  {
    title: 'Next.js 15+ Core',
    desc: 'Leveraging the latest App Router, Server Components, and Streaming SSR for unparalleled performance.',
    icon: Zap
  },
  {
    title: 'Tailwind Design Systems',
    desc: 'Custom-built, scalable CSS architectures that ensure visual consistency across thousands of pages.',
    icon: Layout
  },
  {
    title: 'SEO Dominance',
    desc: 'Automated schema markup, lightning-fast Core Web Vitals, and structural optimization for organic growth.',
    icon: BarChart3
  },
  {
    title: 'Headless Scalability',
    desc: 'Decoupled architectures using Sanity, Contentful, or Strapi for content-heavy enterprise platforms.',
    icon: Database
  }
];

const techStack = [
  { name: 'Next.js', icon: Globe },
  { name: 'TypeScript', icon: Code2 },
  { name: 'Tailwind CSS', icon: Layers },
  { name: 'Node.js', icon: Server },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Vercel', icon: Rocket }
];

export default function WebEngineering() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="section-label mb-6">Service Vertical</div>
              <h1 className="text-5xl md:text-7xl font-black text-foreground font-heading tracking-tighter leading-[1] mb-8">
                Custom Web <br />
                <span className="text-accent italic">Engineering</span>
              </h1>
              <p className="text-xl text-muted font-medium leading-relaxed mb-10 max-w-lg">
                We don't just build websites; we engineer high-performance digital engines 
                designed for extreme speed, security, and conversion.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-accent/20"
              >
                Start Engineering <ArrowUpRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square md:aspect-video lg:aspect-square rounded-[40px] overflow-hidden border border-border-custom shadow-2xl"
            >
              <Image 
                src="/images/zonet/web-engineering.png"
                alt="Web Engineering"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee-like section */}
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
              Full-Stack <span className="text-muted">Capabilities</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto font-medium">
              Our engineering team specializes in the modern web ecosystem, delivering 
              applications that are as robust as they are beautiful.
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
                className="p-8 rounded-[32px] bg-card border border-border-custom hover:border-accent/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/5 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <feature.icon size={22} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black text-foreground font-heading mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-muted leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works / Process */}
      <section className="section-padding bg-section-alt border-y border-border-custom">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="section-label">The Process</div>
                <h2 className="text-4xl md:text-5xl font-black text-foreground font-heading tracking-tighter leading-tight">
                  How We <span className="text-accent italic">Engineer</span> Success
                </h2>
              </div>

              <div className="space-y-10">
                {[
                  { step: '01', title: 'Architecture Planning', desc: 'We design the system schema, database models, and API structures before writing a single line of code.' },
                  { step: '02', title: 'Agile Development', desc: 'Bi-weekly sprints with clear milestones and live preview environments for your feedback.' },
                  { step: '03', title: 'Vitals Optimization', desc: 'Rigorous performance auditing to ensure 95+ scores on all Google Lighthouse metrics.' }
                ].map((item) => (
                  <div key={item.step} className="flex gap-6">
                    <div className="text-4xl font-black text-accent/20 font-heading leading-none">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-black text-foreground font-heading mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-muted leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative p-2 rounded-[40px] border border-border-custom bg-card/50 backdrop-blur-xl">
               <div className="p-8 rounded-[36px] bg-card border border-border-custom shadow-2xl">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[9px] font-black uppercase tracking-widest">
                      Live Environment
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 w-3/4 bg-foreground/5 rounded-full" />
                    <div className="h-4 w-1/2 bg-foreground/5 rounded-full" />
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div className="aspect-square rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <Cpu className="text-accent opacity-40" />
                      </div>
                      <div className="aspect-square rounded-2xl bg-foreground/5" />
                      <div className="aspect-square rounded-2xl bg-foreground/5" />
                    </div>
                    <div className="h-32 w-full border border-dashed border-border-custom rounded-2xl mt-4 flex items-center justify-center">
                      <Code2 className="text-muted opacity-20" size={32} />
                    </div>
                  </div>
               </div>
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
                Web <span className="text-muted">Success Stories</span>
              </h2>
            </div>
            <Link href="/case-studies" className="text-accent font-black uppercase tracking-widest text-[11px] hover:underline underline-offset-8">
              View All Projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webCaseStudies.slice(0, 2).map((project) => (
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
                <h3 className="text-2xl font-black text-foreground font-heading mb-2 group-hover:text-accent transition-colors">{project.name}</h3>
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
