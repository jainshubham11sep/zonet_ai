'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { fadeUp, fadeIn } from '@/lib/animations';
import { Plus, Minus, MessageSquare, ArrowRight } from 'lucide-react';
import { SectionBadge } from '@/components/ui';

const faqs = [
  {
    question: 'What is your approach to AI integration?',
    answer: 'Our approach to AI integration is simple. Instead of just adding features, we build advanced products that turn complex logic into high-performance tools that lead the market.'
  },
  {
    question: 'How long does it take you to deliver the results?',
    answer: 'We usually take from 7 to 30 days to deliver the final results, depending on the complexity of the project. This timeline ensures every technical detail is precision-engineered, and every user flow is fully validated before you go live.'
  },
  {
    question: 'Can you handle custom designs for websites and apps?',
    answer: 'Yes, we specialise in custom UI/UX. We can take your existing Figma designs and turn them into high-performance code, or our design team can create a brand new identity for you.'
  },
  {
    question: 'Do you work with existing brands or only new startups?',
    answer: 'We work with both. Whether you are building your website or app from scratch or need to refine a complex user flow, we specialise in scalable design and visual identity. We can help reimagine your existing interface to make it faster, more intuitive, and ready for a larger user base. Our custom design service lets you decide what you want to be shown digitally.'
  },
];

const FAQItem = ({ question, answer, isDefaultOpen = false }: { question: string; answer: string; isDefaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);

  return (
    <div className="border-b border-[#E6E4DF] last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 md:py-6 px-6 md:px-8 flex items-center gap-4 text-left group"
      >
        <div className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center transition-colors duration-200 ${isOpen ? 'bg-[#1A1A1A] text-white' : 'bg-[#E8C547] text-[#1A1A1A]'}`}>
          {isOpen ? <Minus size={12} strokeWidth={3} /> : <Plus size={12} strokeWidth={3} />}
        </div>
        <span className="font-sans text-[14px] md:text-[16px] font-semibold text-[#1A1A1A] leading-snug tracking-tight flex-1">
          {question}
        </span>
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
            <div className="pb-6 pl-[64px] pr-6 md:pr-10 font-sans text-[#686B6B] text-[13px] md:text-[14px] leading-relaxed">
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
    <section id="faq" className="py-20 md:py-28 bg-[#F7F6F3] border-t border-[#E6E4DF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* ── RIGHT column in DOM but visually LEFT on mobile via order ── */}
          {/* Heading — renders first on mobile */}
          <div className="lg:col-span-5 order-first lg:order-last flex flex-col justify-start">
            <SectionBadge variant="dot" className="mb-5">FAQs</SectionBadge>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-sora text-4xl lg:text-5xl xl:text-[56px] font-bold text-[#1A1A1A] leading-[1.08] tracking-tight mb-5"
            >
              Everything You <br className="hidden sm:block" />Need To Know
            </motion.h2>

            <motion.p
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-sans text-[#686B6B] text-sm md:text-[15px] leading-relaxed max-w-sm mb-10"
            >
              Explore common questions, get expert guidance, and discover how Zonet works with AI to build the future of your digital products.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 rounded-[20px] bg-white border border-[#E6E4DF] shadow-sm"
            >
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-[#E8C547] flex items-center justify-center shrink-0">
                  <MessageSquare size={18} className="text-[#1A1A1A]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-sans text-[15px] font-bold text-[#1A1A1A] mb-1">Still have questions?</h4>
                  <p className="font-sans text-[12px] text-[#686B6B] mb-4 leading-relaxed">Our senior engineers are ready to discuss your custom roadmap today.</p>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="font-sans text-[12px] font-bold text-[#1A1A1A] hover:text-[#E8C547] transition-colors flex items-center gap-1.5 border-b border-[#1A1A1A] pb-0.5"
                  >
                    Connect with us <ArrowRight size={13} className="-rotate-45" strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ List — renders second on mobile */}
          <div className="lg:col-span-7 order-last lg:order-first">
            <div className="bg-white rounded-[24px] border border-[#E6E4DF] shadow-sm overflow-hidden">
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} {...faq} isDefaultOpen={idx === 0} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQs;
