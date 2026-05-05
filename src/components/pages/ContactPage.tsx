'use client';

import { motion } from 'motion/react';
import { Zap, Shield, Users } from 'lucide-react';
import Image from 'next/image';
import ContactForm from '@/components/sections/landing/ContactForm';

const valueProps = [
  { icon: Zap, title: 'Quick Response', desc: 'We reply within 24 hours' },
  { icon: Shield, title: 'Confidential', desc: 'Your information is always safe' },
  { icon: Users, title: 'Expert Team', desc: 'Talk to real people who care' },
];


export default function Contact() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-10 sm:pt-24 sm:pb-14 lg:pt-28 lg:pb-24 flex flex-col gap-10 sm:gap-14 lg:gap-20">
        
        {/* Header / Hero Section */}
        <section className="flex flex-col lg:flex-row items-center gap-6 sm:gap-10 lg:gap-16">
          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col gap-6"
          >
            <div className="flex items-center gap-2 px-4 py-1.5 bg-[#FFFBEB] border border-[#FFEDD5] rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-[#E8A020]"></span>
              <span className="text-[11px] sm:text-[12px] font-semibold text-[#E8A020] tracking-wider">LET'S CONNECT</span>
            </div>

            <h1 className="text-[26px] sm:text-[34px] md:text-[42px] lg:text-[54px] leading-[1.18] font-bold text-[#1A1A1A] font-serif">
              Let&apos;s Build Something<br />
              <span className="text-[#E8A020]">Amazing Together.</span>
            </h1>

            <div className="flex flex-col gap-1 text-sm sm:text-[15px] md:text-[17px] text-[#4B5563]">
              <p>Have a project in mind or want to explore how we can help?</p>
              <p>We&apos;d love to hear from you.</p>
            </div>

            {/* Value Props Row */}
            <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
              {valueProps.map((prop, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#FEF3DC] flex items-center justify-center shrink-0">
                    <prop.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8A020]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-semibold text-[#1A1A1A]">{prop.title}</span>
                    <span className="text-[12px] text-[#6B7280]">{prop.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Hero Visual - World Map Network */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div className="relative w-full aspect-3/2">
              {/* World Map Background */}
              <Image
                src="/images/zonet/world-map.png"
                alt="World Map"
                fill
                className="object-contain"
                priority
              />

              {/* SVG Connecting Lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {/* center (50,45) → top-left (19,17) */}
                <path d="M 50 45 Q 37 29 19 17" fill="none" stroke="#C8A832" strokeWidth="0.35" strokeLinecap="round" />
                {/* center → top-right (71,10) */}
                <path d="M 50 45 Q 58 25 71 10" fill="none" stroke="#C8A832" strokeWidth="0.35" strokeLinecap="round" />
                {/* center → bottom-left (12,68) */}
                <path d="M 50 45 Q 34 55 12 68" fill="none" stroke="#C8A832" strokeWidth="0.35" strokeLinecap="round" />
                {/* center → bottom-right (72,74) */}
                <path d="M 50 45 Q 65 56 72 74" fill="none" stroke="#C8A832" strokeWidth="0.35" strokeLinecap="round" />
              </svg>

              {/* Center Logo Circle */}
              <div
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ left: '50%', top: '45%' }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-full shadow-xl border border-[#E6E4DF] flex items-center justify-center">
                  <Image
                    src="/images/zonet/logo-icon.png"
                    alt="Zonet"
                    width={48}
                    height={48}
                    className="object-contain w-7 h-7 sm:w-9 sm:h-9 lg:w-12 lg:h-12"
                  />
                </div>
              </div>

              {/* Avatar — Top Left */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute z-10 w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-2 border-white shadow-lg overflow-hidden"
                style={{ left: '14%', top: '10%' }}
              >
                <Image src="https://i.pravatar.cc/150?img=11" alt="Team member" fill className="object-cover" />
              </motion.div>

              {/* Avatar — Top Right */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                className="absolute z-10 w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-2 border-white shadow-lg overflow-hidden"
                style={{ left: '66%', top: '3%' }}
              >
                <Image src="https://i.pravatar.cc/150?img=32" alt="Team member" fill className="object-cover" />
              </motion.div>

              {/* Avatar — Bottom Left */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
                className="absolute z-10 w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-2 border-white shadow-lg overflow-hidden"
                style={{ left: '7%', top: '61%' }}
              >
                <Image src="https://i.pravatar.cc/150?img=44" alt="Team member" fill className="object-cover" />
              </motion.div>

              {/* Avatar — Bottom Right */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 1.5 }}
                className="absolute z-10 w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-2 border-white shadow-lg overflow-hidden"
                style={{ left: '67%', top: '67%' }}
              >
                <Image src="https://i.pravatar.cc/150?img=68" alt="Team member" fill className="object-cover" />
              </motion.div>
            </div>
          </motion.div>
        </section>

        <ContactForm />
      </div>
    </div>
  );
}
