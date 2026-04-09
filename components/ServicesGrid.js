'use client';

import { motion } from 'framer-motion';
import { Layout, Smartphone, Bot, Rocket, RefreshCw, BarChart3, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: "Web Design",
    desc: "Premium, high-converting websites built with modern frameworks and a severe focus on user experience.",
    tags: ["UI/UX", "Next.js", "Motion"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Sleek, performant mobile applications tailored for iOS and Android platforms.",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    icon: Bot,
    title: "AI Tools & Agents",
    desc: "Custom AI integrations and autonomous agents designed to revolutionize your workflows.",
    tags: ["LLMs", "Automation", "GPT-4"],
  },
  {
    icon: Rocket,
    title: "MVP Development",
    desc: "From idea to reality in 7–30 days. Fast, scalable, and production-ready architectures.",
    tags: ["Speed", "Scalability", "Launch"],
  },
  {
    icon: RefreshCw,
    title: "Website Upgrades",
    desc: "Modernizing legacy systems into lightning-fast, highly optimized digital experiences.",
    tags: ["Refactoring", "Speed"],
  },
  {
    icon: BarChart3,
    title: "Conversion Audit",
    desc: "Data-driven analysis and meticulous optimization to skyrocket your website's overall ROI.",
    tags: ["Data", "CRO", "Audit"],
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
          className="text-4xl md:text-6xl font-black text-foreground tracking-tighter leading-[1.05] font-heading max-w-4xl"
        >
          We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-indigo-400 to-accent">Scaling Machines</span> <br className="hidden md:block" /> 
          For Modern Brands
        </motion.h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative bg-card/40 backdrop-blur-xl p-8 rounded-[32px] border border-border-custom hover:border-accent/40 hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col h-full shadow-sm"
              >
                {/* Glow Overlay on Hover */}
                <div className="absolute -right-20 -top-20 w-56 h-56 bg-accent rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />

                {/* Compact Icon */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-border-custom bg-accent/5 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                  <Icon className="w-7 h-7 text-accent drop-shadow-sm" strokeWidth={2} />
                </div>

                <h3 className="text-2xl font-black mb-3 text-foreground font-heading tracking-tight leading-none transition-all">
                  {service.title}
                </h3>
                
                <p className="text-muted leading-relaxed font-medium text-sm md:text-base mb-8 flex-grow">
                  {service.desc}
                </p>
                
                {/* Bottom Row: Tags + Icon */}
                <div className="flex items-center justify-between mt-auto pt-5 border-t border-border-custom/20">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 text-[9px] font-black uppercase tracking-widest rounded-lg border border-border-custom bg-background/50 text-muted/80 group-hover:text-accent transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center bg-card-alt border border-border-custom group-hover:rotate-45 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                    <ArrowUpRight size={14} className="group-hover:text-inherit" />
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
