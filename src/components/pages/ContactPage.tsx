'use client';

import ContactForm from '@/components/sections/landing/ContactForm';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Calendar } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email Us', value: 'business@zonettech.com', sub: 'Responsive within 2 hours' },
  { icon: Phone, label: 'Call Us', value: '+91 9166572332', sub: 'Mon-Fri, 10am - 7pm IST' },
  { icon: MapPin, label: 'Our HQ', value: 'Jaipur Rajasthan, India', sub: 'The Heart of Tech Innovation' },
];

export default function Contact() {
  return (
    <div className="bg-background min-h-screen font-sans">
      
      {/* Header Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 border-b border-border-custom relative overflow-hidden">
        {/* Background visual detail */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="section-label mb-8"
          >
            Start a Conversation
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl lg:text-8xl font-black mb-8 text-foreground tracking-tighter leading-[1] font-heading"
          >
            Book a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#D4A830] to-accent italic">Consultation.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Ready to bring your project to life with AI? Let's discuss your roadmap, 
            technical requirements, and how we can deliver in record time.
          </motion.p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {contactInfo.map((info, idx) => (
              <motion.div 
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-10 bg-card border border-border-custom rounded-[40px] group hover:border-accent/40 transition-all duration-500 shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 mb-8">
                  <info.icon size={28} strokeWidth={2.5} />
                </div>
                <h3 className="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-3">{info.label}</h3>
                <p className="text-2xl font-black text-foreground font-heading tracking-tight mb-2">{info.value}</p>
                <p className="text-muted text-sm font-bold uppercase tracking-wider opacity-60">{info.sub}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center p-12 bg-card-alt border border-border-custom rounded-[56px] text-center space-y-8 shadow-sm">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-16 h-16 rounded-full border-4 border-card bg-accent/10 flex items-center justify-center font-black text-accent text-xs uppercase tracking-widest">
                  AI
                </div>
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-foreground font-heading tracking-tight">Our AI Engineers are ready to start.</h2>
            <p className="text-accent font-black uppercase tracking-widest flex items-center gap-2 text-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(232,197,71,0.5)]"></span>
              Current Availability: High (2 Slots Remaining)
            </p>
          </div>
        </div>
      </section>

      <ContactForm />

      <section className="py-20 text-center pb-40 px-6">
        <div className="container mx-auto space-y-8">
          <Clock className="text-accent mx-auto" size={48} strokeWidth={2.5} />
          <h2 className="text-4xl md:text-5xl font-black text-foreground font-heading italic tracking-tighter">Time is of the essence.</h2>
          <p className="text-muted text-lg md:text-xl max-w-md mx-auto font-medium leading-relaxed">
            Most visionary products are built in the first 30 days. Let's make yours one of them.
          </p>
        </div>
      </section>
    </div>
  );
}
