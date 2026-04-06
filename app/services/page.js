'use client';

import { motion } from 'framer-motion';
import { Globe, Smartphone, Cpu, Layers, Sparkles, Zap, CheckCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const services = [
  { 
    title: 'Web Development', 
    desc: 'Bespoke Next.js applications optimized for speed, SEO, and conversion. We build everything from high-performance landing pages to complex enterprise dashboards.',
    features: ['Next.js 16 App Router', 'Tailwind CSS Styling', 'Server-side Rendering', 'Headless CMS Integration'],
    icon: Globe,
    color: 'text-blue-400'
  },
  { 
    title: 'App Development', 
    desc: 'Modern mobile experiences built with React Native and Expo. We deliver cross-platform apps that feel truly native, from smooth animations to offline-first capabilities.',
    features: ['iOS & Android Apps', 'Push Notifications', 'Real-time Syncing', 'App Store Optimization'],
    icon: Smartphone,
    color: 'text-purple-400'
  },
  { 
    title: 'AI Tools & Agents', 
    desc: 'Custom LLM integrations and autonomous agents to automate your business. We build the intelligence layer that powers modern digital transformation.',
    features: ['Custom GPTs & Agents', 'Vector Database Search', 'Automation Workflows', 'AI Chatbot Interfaces'],
    icon: Cpu,
    color: 'text-green-400'
  },
];

export default function Services() {
  return (
    <div className="pt-32 bg-black min-h-screen">
      {/* Header */}
      <section className="py-20 border-b border-white/5">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black mb-8 text-white leading-tight"
          >
            Our <span className="text-accent-blue">Expertise.</span>
          </motion.h1>


          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            We combine high-level engineering with cutting-edge AI to build 
            the digital future in record time.
          </motion.p>
        </div>
      </section>

      {/* Service Listings */}
      <section className="py-32">
        <div className="container mx-auto px-6 space-y-32">
          {services.map((service, idx) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2 space-y-8">
                <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 ${service.color}`}>
                  <service.icon size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white">{service.title}</h2>
                <p className="text-xl text-gray-400 leading-relaxed">{service.desc}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle size={18} className="text-accent-blue" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 w-full aspect-video glass rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 flex items-center justify-center text-white/10 italic text-4xl font-black">
                  [Interactive Demo Placeholder]
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
