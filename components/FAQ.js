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
    <div className="border-b border-border-custom last:border-0 overflow-hidden px-4 md:px-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className={`text-xl md:text-2xl font-bold font-heading transition-colors ${isOpen ? 'text-foreground' : 'text-secondary hover:text-foreground'}`}>
          {question}
        </span>
        <div className={`p-2 rounded-full border transition-all flex-shrink-0 ${isOpen ? 'bg-button-bg text-button-fg border-button-bg' : 'text-muted border-border-custom'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="pb-8 text-muted text-lg leading-relaxed max-w-2xl">
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
    <section className="py-16 bg-background border-t border-border-custom">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-3 py-1 rounded-full border border-badge-border bg-badge-bg text-[10px] font-bold text-muted mb-4 uppercase tracking-widest"
          >
            Support
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight leading-tight font-heading text-foreground"
          >
            Common Questions
          </motion.h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="w-full bg-card rounded-[40px] border border-border-custom shadow-sm">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
