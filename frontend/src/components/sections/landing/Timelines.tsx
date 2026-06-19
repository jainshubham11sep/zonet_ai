'use client';

import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { Search, PenTool, Code, Rocket, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { SectionBadge } from '@/components/ui';

const steps = [
  {
    id: '01',
    duration: 'Days 1–3',
    title: 'Detailed Blueprinting',
    desc: 'We conduct a deep AI audit to define your competitive edge and build a technical roadmap for success.',
    icon: Search,
    details: ['Market Analysis', 'Future-Ready Tech Planning', 'AI-Model Strategy'],
  },
  {
    id: '02',
    duration: 'Days 4–7',
    title: 'Scalable Design',
    desc: 'We build easy-to-use interfaces that stay fast and look great as your user base grows.',
    icon: PenTool,
    details: ['User Flow Optimization', 'Scalable Visual Identity', 'UX Validation Testing'],
  },
  {
    id: '03',
    duration: 'Days 8–25',
    title: 'AI-Integration',
    desc: 'We ship high-performance code with custom AI features — a foundation built to handle millions of users.',
    icon: Code,
    details: ['Fast Next.js Website Delivery', 'Seamless API Connections', 'Custom AI Fine-Tuning'],
  },
  {
    id: '04',
    duration: 'Days 26–30',
    title: 'Optimization',
    desc: 'A smooth production go-live, backed by real-time performance tracking to maintain stability during rapid growth.',
    icon: Rocket,
    details: ['Global Launch Support', 'Speed & Quality Check', 'Real-Time Performance'],
  },
];

const Timelines = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F8F6F0] overflow-hidden relative border-t border-[#E5E5E5]">

      {/* Background Shapes */}
      <div className="absolute top-[5%] right-0 w-[40%] lg:w-[35%] h-[60%] bg-[#D1AC45] rounded-l-[40px] md:rounded-l-[80px] z-0" />
      <div className="absolute -bottom-[5%] -right-[5%] w-[60%] lg:w-[45%] h-[60%] bg-[#1A1A1A] rounded-tl-[60px] md:rounded-tl-[100px] z-0 overflow-hidden shadow-2xl">
        <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none" viewBox="0 0 1000 500">
          <path d="M-200,200 Q200,300 500,100 T1200,150" fill="none" stroke="white" strokeWidth="2" />
          <path d="M-200,300 Q300,400 600,200 T1300,250" fill="none" stroke="white" strokeWidth="2" />
          <path d="M-200,400 Q400,500 700,300 T1400,350" fill="none" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-14 md:mb-20">
          <div className="flex flex-col">
            <SectionBadge variant="dot" className="mb-5">Our Process</SectionBadge>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight leading-[1.1] max-w-2xl"
            >
              Launch Your Product{' '}
              <br className="hidden sm:block" />
              <span className="relative inline-block">
                <em className="italic pr-2">in 7 to 30 Days</em>
                <svg className="absolute -bottom-1 left-0 w-full h-[12px] text-[#D1AC45]" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M2,10 Q50,0 100,5 T198,8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h2>
          </div>

         
        </div>

        {/* Timeline Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-[24px] overflow-hidden shadow-sm border border-[#E5E5E5] bg-white"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              variants={fadeUp}
              className={`flex flex-col bg-white
                ${i % 2 === 0 && i !== steps.length - 1 ? 'sm:border-r sm:border-[#E5E5E5]' : ''}
                ${i < 2 ? 'border-b sm:border-b border-[#E5E5E5] lg:border-b-0' : ''}
                ${i !== steps.length - 1 ? 'lg:border-r lg:border-[#E5E5E5]' : ''}
              `}
            >
              {/* Card Body */}
              <div className="flex-1 p-7 md:p-8 lg:p-9 flex flex-col">
                <span className="font-sans text-[#D1AC45] text-2xl font-light mb-5 tracking-tight">{step.id}</span>

                <div className="w-full h-px bg-[#E5E5E5] mb-7" />

                <div className="w-10 h-10 rounded-full bg-[#D1AC45] flex items-center justify-center mb-5 shadow-sm">
                  <step.icon size={17} className="text-[#1A1A1A]" strokeWidth={2.5} />
                </div>

                <h3 className="font-sans text-[#1A1A1A] font-bold text-[18px] mb-3 leading-snug">{step.title}</h3>
                <p className="font-sans text-[#6A6A6A] text-[13px] leading-relaxed mb-8 flex-1">{step.desc}</p>

                <ul className="flex flex-col gap-2.5">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D1AC45] shrink-0" />
                      <span className="font-sans text-[#888] text-[12px]">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Duration Footer */}
              <div className="bg-[#1A1A1A] py-4 flex items-center justify-center">
                <span className="font-sans text-white text-[9px] font-black uppercase tracking-[0.2em]">{step.duration}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="flex items-center gap-4 px-6 py-4 rounded-[16px] bg-white border border-[#E5E5E5] shadow-sm">
            <div className="flex -space-x-2.5">
              {[
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
              ].map((src, i) => (
                <img key={i} src={src} alt="client" className="w-8 h-8 rounded-full object-cover border-2 border-white" />
              ))}
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-sans text-[#1A1A1A] text-lg font-bold leading-none">240+</span>
              <span className="font-sans text-[#6A6A6A] text-[9px] font-black uppercase tracking-[0.2em]">Products Launched</span>
            </div>
          </div>

          <Link
            href="/contact"
            className="flex items-center gap-3 px-7 py-5 rounded-[12px] bg-[#1A1A1A] text-white hover:bg-black transition-all hover:scale-[1.02] active:scale-95 shadow-lg group"
          >
            <span className="font-sans text-[10px] font-black uppercase tracking-[0.2em]">Launch Your Idea</span>
            <ArrowUpRight size={15} className="text-[#D1AC45] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Timelines;
