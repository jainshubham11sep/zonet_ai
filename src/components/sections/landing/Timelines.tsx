'use client';

import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { Search, PenTool, Code, Rocket, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const steps = [
  { 
    id: '01', 
    duration: 'Days 1-3',
    title: 'Rapid Blueprinting', 
    desc: 'Deep AI-audit & strategy. We define your competitive edge and engineering roadmap.',
    icon: Search,
    details: ['Market Gap Analysis', 'Tech Stack Selection', 'AI Model Strategy']
  },
  { 
    id: '02', 
    duration: 'Days 4-7',
    title: 'High-Velocity UI/UX', 
    desc: 'Functional mockups & interactive prototypes optimized for rapid conversion.',
    icon: PenTool,
    details: ['User Flow Design', 'Visual System', 'Prototype Testing']
  },
  { 
    id: '03', 
    duration: 'Days 8-25',
    title: 'AI Integration', 
    desc: 'Production-ready code with custom LLM integrations and high-scale infrastructure.',
    icon: Code,
    details: ['Next.js 15 Implementation', 'API Development', 'Model Fine-Tuning']
  },
  { 
    id: '04', 
    duration: 'Days 26-30',
    title: 'Deployment & Scale', 
    desc: 'Seamless production launch with performance monitoring and immediate scaling.',
    icon: Rocket,
    details: ['Cloud Deployment', 'QA & Speed Audit', 'Growth Monitoring']
  }
];

const Timelines = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F8F6F0] overflow-hidden relative border-t border-[#E5E5E5]">
      
      {/* Background Shapes */}
      <div className="absolute top-[5%] right-0 w-[40%] lg:w-[35%] h-[60%] bg-[#D1AC45] rounded-l-[40px] md:rounded-l-[80px] z-0" />
      <div className="absolute -bottom-[5%] -right-[5%] w-[60%] lg:w-[45%] h-[60%] bg-[#1A1A1A] rounded-tl-[60px] md:rounded-tl-[100px] z-0 overflow-hidden shadow-2xl">
         {/* Subtle abstract lines in the black shape */}
         <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none" viewBox="0 0 1000 500">
            <path d="M-200,200 Q200,300 500,100 T1200,150" fill="none" stroke="white" strokeWidth="2" />
            <path d="M-200,300 Q300,400 600,200 T1300,250" fill="none" stroke="white" strokeWidth="2" />
            <path d="M-200,400 Q400,500 700,300 T1400,350" fill="none" stroke="white" strokeWidth="2" />
         </svg>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10 flex flex-col h-full">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8 mb-16 md:mb-20">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-[#D1AC45]" />
              <span className="text-[10px] font-black text-[#1A1A1A] tracking-[0.2em] uppercase">
                Our Process
              </span>
            </div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-[60px] font-medium text-[#1A1A1A] tracking-tight leading-[1.1] font-heading max-w-2xl"
            >
              Launch Your Product <br />
              <span className="relative inline-block">
                <em className="italic pr-2">in 7 to 30 Days</em>
                <svg className="absolute -bottom-1 left-0 w-full h-[12px] text-[#D1AC45]" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M2,10 Q50,0 100,5 T198,8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h2>
          </div>
          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:mt-10"
          >
            <p className="text-[14px] md:text-[15px] text-[#6A6A6A] max-w-[320px] leading-relaxed">
              A proven process that takes your idea from concept to market-ready product—fast.
            </p>
          </motion.div>
        </div>

        {/* Timeline Grid */}
        <motion.div
          className="flex flex-col lg:grid lg:grid-cols-4 rounded-[24px] overflow-hidden shadow-sm border border-[#E5E5E5] bg-white"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              variants={fadeUp}
              className={`flex flex-col h-full bg-white ${i !== steps.length - 1 ? 'lg:border-r lg:border-[#E5E5E5]' : ''}`}
            >
              {/* Top White Section */}
              <div className="flex-1 p-8 lg:p-10 flex flex-col">
                <span className="text-[#D1AC45] text-[24px] font-light mb-5 tracking-tight">{step.id}</span>
                
                <div className="w-full h-px bg-[#E5E5E5] mb-8" />
                
                <div className="w-10 h-10 rounded-full bg-[#D1AC45] flex items-center justify-center mb-6 shadow-sm hover:scale-105 transition-transform">
                  <step.icon size={18} className="text-[#1A1A1A]" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-[#1A1A1A] font-medium text-[20px] font-heading mb-4 tracking-tight">{step.title}</h3>
                <p className="text-[#6A6A6A] text-[13px] leading-relaxed mb-10 flex-1">{step.desc}</p>
                
                <ul className="flex flex-col gap-3">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-[5px] h-[5px] rounded-full bg-[#D1AC45] flex-shrink-0" />
                      <span className="text-[#888888] text-[11px] font-medium">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Bottom Black Section */}
              <div className="bg-[#1A1A1A] py-5 flex items-center justify-center">
                <span className="text-white text-[9px] font-black uppercase tracking-[0.2em]">{step.duration}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Area */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          {/* Stats Box */}
          <div className="flex items-center gap-5 px-6 py-4 rounded-[16px] bg-white border border-[#E5E5E5] shadow-sm">
            <div className="flex -space-x-3">
              <div className="w-9 h-9 rounded-full bg-[#D1AC45] opacity-90 mix-blend-multiply" />
              <div className="w-9 h-9 rounded-full bg-[#D1AC45] opacity-80 mix-blend-multiply" />
              <div className="w-9 h-9 rounded-full bg-[#D1AC45] opacity-70 mix-blend-multiply" />
            </div>
            <div className="flex flex-col justify-center gap-0.5">
              <span className="text-[#1A1A1A] text-[18px] font-medium leading-none tracking-tight">240+</span>
              <span className="text-[#6A6A6A] text-[9px] font-bold uppercase tracking-[0.2em]">PRODUCTS LAUNCHED</span>
            </div>
          </div>

          {/* CTA Button */}
          <Link 
            href="/contact" 
            className="flex items-center gap-3 px-8 py-[20px] rounded-[12px] bg-[#1A1A1A] text-white hover:bg-black transition-colors hover:scale-[1.02] active:scale-95 shadow-lg group"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Launch Your Idea</span>
            <ArrowUpRight size={16} className="text-[#D1AC45] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Timelines;
