'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Layout, Smartphone, Bot, Rocket, RefreshCw, BarChart3, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: "Web Design",
    desc: "Premium, high-converting websites built with modern frameworks and a severe focus on user experience.",
    tags: ["UI/UX", "Next.js", "Motion"],
    preview: '/images/zonet/screenshot-1.png',
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Sleek, performant mobile applications tailored for iOS and Android platforms.",
    tags: ["React Native", "iOS", "Android"],
    preview: '/images/zonet/screenshot-2.png',
  },
  {
    icon: Bot,
    title: "AI Tools & Agents",
    desc: "Custom AI integrations and autonomous agents designed to revolutionize your workflows.",
    tags: ["LLMs", "Automation", "GPT-4"],
    preview: '/images/zonet/screenshot-3.png',
  },
  {
    icon: Rocket,
    title: "MVP Development",
    desc: "From idea to reality in 7–30 days. Fast, scalable, and production-ready architectures.",
    tags: ["Speed", "Scalability", "Launch"],
    preview: '/images/zonet/flipshope-1.png',
  },
  {
    icon: RefreshCw,
    title: "Website Upgrades",
    desc: "Modernizing legacy systems into lightning-fast, highly optimized digital experiences.",
    tags: ["Refactoring", "Speed"],
    preview: '/images/zonet/hyyzo-1.png',
  },
  {
    icon: BarChart3,
    title: "Conversion Audit",
    desc: "Data-driven analysis and meticulous optimization to skyrocket your website's overall ROI.",
    tags: ["Data", "CRO", "Audit"],
    preview: '/images/zonet/teacherdekho-1.png',
  }
];

const ServicesGrid = () => {
  return (
    <section className="section-padding bg-background border-t border-border-custom relative overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 mb-12 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="section-label mb-6"
        >
          Our Expertise
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-foreground tracking-tighter leading-[1.1] font-heading max-w-4xl"
        >
          We Build <span className="text-transparent bg-clip-text bg-linear-to-r from-accent via-indigo-400 to-accent">Scaling Machines</span>{' '}
          For Modern Brands
        </motion.h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative bg-card/60 backdrop-blur-xl rounded-[28px] border border-border-custom hover:border-accent/30 transition-all duration-500 overflow-hidden flex flex-col h-full shadow-sm hover:shadow-xl"
              >
                {/* ── Folder Tab ── */}
                <div className="relative">
                  <div className="absolute top-0 left-0 z-10 flex items-center">
                    <div className="bg-card backdrop-blur-sm border-b border-r border-border-custom rounded-br-2xl px-4 py-2 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <Icon size={12} className="text-accent" strokeWidth={2.5} />
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-muted">{service.title}</span>
                    </div>
                  </div>

                  {/* ── Preview Image Area (Folder body) ── */}
                  <div className="relative h-[180px] md:h-[200px] bg-card-alt overflow-hidden">
                    {/* Decorative dot grid */}
                    <div className="absolute inset-0 opacity-[0.04]" style={{
                      backgroundImage: `radial-gradient(circle, var(--accent) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }} />
                    
                    {/* Screenshot that pops out on hover */}
                    <div className="absolute inset-x-4 top-10 bottom-0 rounded-t-xl overflow-hidden shadow-lg border border-border-custom/60 border-b-0 transition-all duration-700 ease-out group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:scale-[1.02]">
                      <Image
                        src={service.preview}
                        alt={`${service.title} preview`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 350px"
                      />
                    </div>

                    {/* Subtle gradient fade at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-card/80 to-transparent z-10 pointer-events-none" />
                  </div>
                </div>

                {/* ── Card Content ── */}
                <div className="px-6 pt-5 pb-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-black mb-2 text-foreground font-heading tracking-tight leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted leading-relaxed font-medium text-sm mb-5 flex-grow">
                    {service.desc}
                  </p>
                  
                  {/* Bottom Row: Tags + Arrow */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border-custom/30">
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 text-[8px] font-black uppercase tracking-widest rounded-md border border-border-custom bg-background/50 text-muted group-hover:text-accent transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="w-7 h-7 flex-shrink-0 rounded-full flex items-center justify-center bg-card-alt border border-border-custom group-hover:rotate-45 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 shadow-sm">
                      <ArrowUpRight size={12} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
