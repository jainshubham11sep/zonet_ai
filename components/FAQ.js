'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

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

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`transition-all duration-300 border-b border-border-custom last:border-0 ${isOpen ? 'bg-accent/5' : 'hover:bg-card/40'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 md:py-8 px-6 md:px-10 flex items-center justify-between text-left group"
      >
        <span className={`text-lg md:text-xl font-bold font-heading tracking-tight leading-tight transition-colors ${isOpen ? 'text-accent' : 'text-foreground group-hover:text-accent'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg border transition-all flex-shrink-0 flex items-center justify-center ${isOpen ? 'bg-accent text-white border-accent rotate-180 shadow-md shadow-accent/20' : 'text-muted border-border-custom bg-card group-hover:border-accent/30'}`}>
          {isOpen ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="pb-8 px-6 md:px-10 text-muted text-sm md:text-base leading-relaxed max-w-2xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-background relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-label mb-6 w-fit"
            >
              Support & Insights
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] font-heading text-foreground mb-8"
            >
              Everything You <br />
              <span className="text-muted">Need To Know</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-muted text-lg mb-10 max-w-md leading-relaxed"
            >
              Explore our most common inquiries and learn how Zonet leverages AI to build the future of digital products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[32px] bg-card border border-border-custom backdrop-blur-sm hidden lg:block"
            >
              <h4 className="text-xl font-bold mb-3">Still have questions?</h4>
              <p className="text-muted text-sm mb-6">Our senior engineers are ready to discuss your custom roadmap today.</p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-accent font-bold uppercase tracking-widest text-[11px] flex items-center gap-2 hover:gap-3 transition-all"
              >
                Connect With Us <span>→</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: FAQ List */}
          <div className="lg:col-span-7">
            <div className="w-full bg-card backdrop-blur-xl rounded-[40px] border border-border-custom overflow-hidden shadow-2xl">
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} {...faq} />
              ))}
            </div>
            
            {/* Mobile-only CTA */}
            <div className="mt-10 lg:hidden text-center">
              <p className="text-muted mb-4">Still have questions?</p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 rounded-full bg-accent text-white text-[10px] font-black uppercase tracking-widest"
              >
                Contact Support
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
