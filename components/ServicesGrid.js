'use client';

import { motion } from 'framer-motion';
import { Layout, Smartphone, Bot, Rocket, RefreshCw, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: "Web Design",
    desc: "Premium, high-converting websites built with modern frameworks and a focus on UX.",
    tags: ["UI/UX", "Next.js", "Motion"]
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Sleek, performant mobile applications for iOS and Android.",
    tags: ["React Native", "iOS", "Android"]
  },
  {
    icon: Bot,
    title: "AI Tools & Agents",
    desc: "Custom AI integrations and autonomous agents to automate your workflows.",
    tags: ["LLMs", "Automation", "GPT-4"]
  },
  {
    icon: Rocket,
    title: "MVP Development",
    desc: "From idea to reality in 7–30 days. Fast, scalable, and production-ready.",
    tags: ["Speed", "Scalability", "Launch"]
  },
  {
    icon: RefreshCw,
    title: "Website Upgrades",
    desc: "Modernizing legacy systems into fast, modern AI-first experiences.",
    tags: ["Refactoring", "Optimization"]
  },
  {
    icon: BarChart3,
    title: "Conversion Audit",
    desc: "Data-driven analysis to improve your website's performance and ROI.",
    tags: ["Data", "CRO", "Audit"]
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-16 bg-background border-t border-border-custom">
      <div className="container mx-auto px-6 mb-16 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="px-3 py-1 rounded-full border border-badge-border bg-badge-bg text-[10px] font-bold text-foreground mb-4 shadow-sm uppercase tracking-widest"
        >
          Services
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.1] font-heading max-w-3xl"
        >
          We Build Scaling Machines <br /> <span className="text-muted">For Modern Brands</span>
        </motion.h2>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group bg-card p-8 rounded-[24px] border border-border-custom shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-icon-bg rounded-2xl flex items-center justify-center mb-6 border border-border-custom group-hover:bg-button-bg group-hover:text-button-fg transition-all transform group-hover:rotate-6">
                  <Icon className="w-8 h-8 text-foreground group-hover:text-button-fg transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground font-heading">{service.title}</h3>
                <p className="text-muted mb-6 leading-relaxed text-sm lg:text-base">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold px-2 py-1 bg-card-alt rounded-md text-muted uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
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
