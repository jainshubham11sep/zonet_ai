'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ChevronUp, ChevronDown, MessageSquare, ArrowRight } from 'lucide-react';

const faqs = [
  { 
    question: 'How do you deliver so fast?', 
    answer: 'We leverage advanced AI agents to automate the tedious parts of development (boilerplate, testing, deployment). This allows our senior engineers to focus purely on business logic and custom features, delivering 10x faster than traditional agencies.' 
  },
  { 
    question: 'Is your code secure?', 
    answer: 'Absolutely. We use AI to assist in writing code, but every line is reviewed, tested, and audited by our senior human engineers. We also use AI security scanners to ensure there are no vulnerabilities.' 
  },
  { 
    question: 'Can you handle custom designs?', 
    answer: 'Yes, we specialize in custom UI/UX. We can take your existing Figma designs and turn them into high-performance code, or our design team can create a brand new identity for you.' 
  },
  { 
    question: 'What happens after the launch?', 
    answer: 'We offer maintenance packages and ongoing support. Since we build with modern, scalable architectures (Next.js, Tailwind), your site is easy to hand over to your internal team if needed.' 
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isDefaultOpen?: boolean;
}

const FAQItem = ({ question, answer, isDefaultOpen = false }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);

  return (
    <div className={`transition-all duration-300 border-b border-[#E6E4DF] last:border-0 bg-[#FCFCF9]`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 md:py-7 px-6 md:px-8 flex items-center gap-4 md:gap-5 text-left group"
      >
        <div className={`w-[24px] h-[24px] rounded-full flex-shrink-0 flex items-center justify-center transition-colors bg-[#E8C547] text-[#1A1A1A]`}>
          {isOpen ? <Minus size={14} strokeWidth={3} /> : <Plus size={14} strokeWidth={3} />}
        </div>
        <span className={`text-[15px] md:text-[17px] font-bold font-heading tracking-tight leading-tight transition-colors text-[#1A1A1A]`}>
          {question}
        </span>
        <div className="ml-auto flex-shrink-0 text-[#1A1A1A]">
          {isOpen ? <ChevronUp size={20} strokeWidth={2} /> : <ChevronDown size={20} strokeWidth={2} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-7 pl-[64px] md:pl-[76px] pr-6 md:pr-12 text-[#686B6B] text-[13px] md:text-[14px] leading-relaxed max-w-[500px]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQs = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F7F6F3] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-5 flex flex-col justify-start relative z-10 pt-4">
            {/* Yellow Dot Badge */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2.5 h-2.5 rounded-full bg-[#E8C547]"></div>
              <span className="text-[11px] font-black text-[#1A1A1A] tracking-[0.15em] uppercase">
                Support & Insights
              </span>
            </div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl xl:text-[64px] font-bold text-[#1A1A1A] leading-[1.1] font-heading mb-8 tracking-[-0.02em]"
            >
              Everything you <br />
              <em
                className="italic relative inline-block pr-2"
                style={{
                  backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 18' preserveAspectRatio='none'><path d='M3 11 C 60 3, 140 3, 220 8 S 290 14, 297 9' stroke='%23F5C518' stroke-width='6' stroke-linecap='round' fill='none' opacity='0.95'/></svg>")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0 95%",
                  backgroundSize: "100% 0.3em",
                  paddingBottom: "0.05em",
                }}
              >
                need to know.
              </em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#686B6B] text-[15px] mb-12 max-w-[380px] leading-relaxed"
            >
              Explore common questions, get expert guidance, and discover how Zonet leverages AI to build the future of digital products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-[24px] bg-[#FCFCF9] border border-[#E6E4DF] shadow-sm hidden lg:block"
            >
              <div className="flex gap-5">
                <div className="w-[48px] h-[48px] rounded-full bg-[#E8C547] flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={22} className="text-[#1A1A1A] fill-transparent" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-[#1A1A1A] mb-2 font-heading">Still have questions?</h4>
                  <p className="text-[13px] text-[#686B6B] mb-5 leading-relaxed max-w-[240px]">Our senior engineers are ready to discuss your custom roadmap today.</p>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-[13px] font-bold text-[#1A1A1A] hover:text-[#E8C547] transition-colors flex items-center gap-1.5 border-b border-[#1A1A1A] pb-0.5 max-w-fit"
                  >
                    Connect with us <ArrowRight size={14} className="-rotate-45" strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: FAQ List */}
          <div className="lg:col-span-7 relative w-full pt-10 lg:pt-0">
            {/* The Black Background Area */}
            <div className="absolute top-[-60px] right-[-50vw] bottom-[-60px] left-8 md:left-[10%] bg-[#1A1A1A] rounded-tl-[32px] rounded-bl-[32px] z-0 hidden lg:block">
              {/* Thin white lines */}
              <div className="absolute left-[30%] top-[40%] w-px h-[60%] bg-white/20"></div>
              <div className="absolute left-[30%] top-[40%] w-[70%] h-px bg-white/20"></div>
              <svg className="absolute left-[calc(30%-60px)] top-[calc(40%-60px)] w-[60px] h-[60px]" viewBox="0 0 100 100">
                <line x1="0" y1="0" x2="100" y2="100" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              </svg>
            </div>
            
            <div className="relative z-10 w-full bg-[#FCFCF9] rounded-[24px] border border-[#E6E4DF] shadow-xl overflow-hidden">
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} {...faq} isDefaultOpen={idx === 0} />
              ))}
            </div>
            
            {/* Mobile-only CTA */}
            <div className="mt-12 lg:hidden text-center bg-[#FCFCF9] p-6 rounded-[24px] border border-[#E6E4DF] shadow-sm">
              <div className="w-[48px] h-[48px] rounded-full bg-[#E8C547] flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={22} className="text-[#1A1A1A] fill-transparent" strokeWidth={1.5} />
              </div>
              <h4 className="text-[17px] font-bold text-[#1A1A1A] mb-2 font-heading">Still have questions?</h4>
              <p className="text-[13px] text-[#686B6B] mb-5 leading-relaxed">Our senior engineers are ready to discuss your custom roadmap today.</p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[13px] font-bold text-[#1A1A1A] hover:text-[#E8C547] transition-colors flex items-center gap-1.5 border-b border-[#1A1A1A] pb-0.5 mx-auto"
              >
                Connect with us <ArrowRight size={14} className="-rotate-45" strokeWidth={2.5} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQs;
