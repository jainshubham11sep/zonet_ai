'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Calendar } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const contactInfo = [
  { icon: Mail, label: 'Email Us', value: 'hello@zonettech.ai', sub: 'Responsive within 2 hours' },
  { icon: Phone, label: 'Call Us', value: '+1 (555) 000-0000', sub: 'Mon-Fri, 9am - 6pm EST' },
  { icon: MapPin, label: 'Our HQ', value: 'San Francisco, CA', sub: 'The Heart of AI Innovation' },
];

export default function Contact() {
  return (
    <div className="pt-32 bg-black min-h-screen">
      {/* Header */}
      <section className="py-20 border-b border-white/5 relative overflow-hidden text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block p-4 rounded-full glass border border-accent-blue/20 mb-8"
          >
            <Calendar className="text-accent-blue" size={32} />
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 text-white tracking-tight leading-tight">
            Book a <span className="text-accent-blue italic lowercase tracking-widest">Call.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your project to life with AI? Let's discuss your roadmap, 
            technical requirements, and how we can deliver in record time.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {contactInfo.map((info, idx) => (
              <motion.div 
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-10 glass rounded-[40px] border border-white/10 group hover:border-accent-blue transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue group-hover:scale-110 transition-transform mb-8">
                  <info.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{info.label}</h3>
                <p className="text-white font-medium text-lg mb-2">{info.value}</p>
                <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">{info.sub}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center p-12 glass-dark rounded-[56px] border border-white/10 text-center space-y-8 animate-pulse shadow-2xl">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-16 h-16 rounded-full border-4 border-black bg-gray-800 flex items-center justify-center font-bold text-gray-500">
                  Dev
                </div>
              ))}
            </div>
            <h2 className="text-3xl font-black text-white">Our AI Engineers are ready to start.</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
              Current Availability: High (2 Slots Remaining)
            </p>
          </div>
        </div>
      </section>

      <ContactForm />

      <section className="py-20 text-center pb-32">
        <div className="container mx-auto px-6 space-y-8">
          <Clock className="text-accent-blue mx-auto" size={48} />
          <h2 className="text-4xl font-black text-white italic">Time is of the essence.</h2>
          <p className="text-gray-500 text-lg max-w-md mx-auto">
            Most visionary products are built in the first 30 days. Let's make yours one of them.
          </p>
        </div>
      </section>
    </div>
  );
}
