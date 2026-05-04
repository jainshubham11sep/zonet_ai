'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Calendar, Zap, Shield, Users, ArrowRight } from 'lucide-react';

import Image from 'next/image';

const valueProps = [
  { icon: Zap, title: 'Quick Response', desc: 'We reply within 24 hours' },
  { icon: Shield, title: 'Confidential', desc: 'Your information is always safe' },
  { icon: Users, title: 'Expert Team', desc: 'Talk to real people who care' },
];

const contactCards = [
  { icon: Mail, title: 'Email Us', line1: 'hello@zonnetech.com', line2: "We'll get back to you shortly" },
  { icon: Phone, title: 'Call Us', line1: '+91 98765 43210', line2: 'Mon - Sat, 10:00 AM - 7:00 PM IST' },
  { icon: MapPin, title: 'Visit Us', line1: 'Zonnetech Solutions Pvt. Ltd.', line2: 'Ahmedabad, Gujarat, India' },
  { icon: Calendar, title: 'Schedule a Meeting', line1: 'Book a call with our experts', line2: "Let's discuss your project" },
];

const inputBase =
  'w-full pl-10 pr-3.5 py-[11px] text-sm text-[#1A1A1A] bg-[#FAFAF8] border border-[#E5E1DA] rounded-lg outline-none transition-all duration-200 placeholder:text-[#BBBBBB] focus:border-[#E8A020] focus:shadow-[0_0_0_3px_rgba(232,160,32,0.18)] focus:bg-white';

const selectBase =
  'w-full px-3.5 pr-10 py-[11px] text-sm text-[#888888] bg-[#FAFAF8] border border-[#E5E1DA] rounded-lg outline-none appearance-none cursor-pointer transition-all duration-200 focus:border-[#E8A020] focus:shadow-[0_0_0_3px_rgba(232,160,32,0.18)] focus:bg-white';

const ChevronDown = () => (
  <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 5 L7 9 L11 5" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

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

        {/* Main Content Area */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
          {/* Left Column — Get In Touch Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <h2 className="font-serif text-[22px] sm:text-[28px] font-semibold text-[#1A1A1A]">Get In Touch</h2>
            <div className="flex flex-col gap-3">
              {contactCards.map((card, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 sm:p-4 bg-white border border-[#E5E1DA] rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#FEF3DC] flex items-center justify-center shrink-0">
                      <card.icon className="w-5 h-5 text-[#E8A020]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[14px] font-semibold text-[#1A1A1A] group-hover:text-[#E8A020] transition-colors">{card.title}</span>
                      <span className="text-[13px] text-[#4A4A4A]">{card.line1}</span>
                      <span className="text-[12px] text-[#888888]">{card.line2}</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#FAFAF8] flex items-center justify-center group-hover:bg-[#FEF3DC] transition-colors">
                    <ArrowRight className="w-4 h-4 text-[#888888] group-hover:text-[#E8A020]" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-stretch"
          >
            <div className="w-full bg-white rounded-[16px] sm:rounded-[20px] shadow-[0_8px_48px_rgba(0,0,0,0.10),0_2px_12px_rgba(0,0,0,0.06)] border border-[#E5E1DA]/50 px-4 sm:px-8 pt-6 sm:pt-8 pb-5 sm:pb-7">

              {/* Card header */}
              <div className="mb-7">
                <h2 className="font-serif text-[28px] font-normal leading-[1.15] tracking-[-0.3px] text-[#1A1A1A] mb-1.5">
                  Send us a message
                </h2>
                <p className="text-sm text-[#4A4A4A]">
                  We&apos;ll get back to you within <span className="text-[#E8A020] font-medium">24 hours.</span>
                </p>
              </div>

              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>

                {/* Row 1 — Name + Email */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label className="text-[13px] font-medium text-[#1A1A1A] tracking-[0.01em]">
                      Full Name <span className="text-[#E8A020]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="5.5" r="3" stroke="#BBBBBB" strokeWidth="1.4" />
                          <path d="M2 14 C2 10.5 4.5 8.5 8 8.5 C11.5 8.5 14 10.5 14 14" stroke="#BBBBBB" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                      </span>
                      <input type="text" required placeholder="John Doe" className={inputBase} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label className="text-[13px] font-medium text-[#1A1A1A] tracking-[0.01em]">
                      Work Email <span className="text-[#E8A020]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="#BBBBBB" strokeWidth="1.4" />
                          <path d="M1.5 5.5 L8 9 L14.5 5.5" stroke="#BBBBBB" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                      </span>
                      <input type="email" required placeholder="name@company.com" className={inputBase} />
                    </div>
                  </div>
                </div>

                {/* Company */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#1A1A1A] tracking-[0.01em]">Company Name</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect x="2" y="4" width="12" height="10" rx="1" stroke="#BBBBBB" strokeWidth="1.4" />
                        <path d="M5 4 V2.5 Q5 1.5 6 1.5 H10 Q11 1.5 11 2.5 V4" stroke="#BBBBBB" strokeWidth="1.4" />
                        <path d="M6 8 H10 M6 11 H10" stroke="#BBBBBB" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                    </span>
                    <input type="text" placeholder="Acme Inc. (optional)" className={inputBase} />
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#1A1A1A] tracking-[0.01em]">
                    Project Details <span className="text-[#E8A020]">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3.5 pointer-events-none">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 3.5 L3 12.5 M3 3.5 L13 3.5 M3 8 L10 8" stroke="#BBBBBB" strokeWidth="1.4" strokeLinecap="round" />
                      </svg>
                    </span>
                    <textarea
                      required
                      rows={3}
                      placeholder="Tell us about your project, goals, and requirements..."
                      className={`${inputBase} resize-y min-h-[88px] pt-3 leading-normal`}
                    />
                  </div>
                </div>

                {/* Row 3 — Project Type + Timeline */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label className="text-[13px] font-medium text-[#1A1A1A] tracking-[0.01em]">Project Type</label>
                    <div className="relative">
                      <select defaultValue="" className={selectBase}>
                        <option value="" disabled>Select a type</option>
                        <option>Web Development</option>
                        <option>Mobile App</option>
                        <option>AI Integration</option>
                        <option>Other</option>
                      </select>
                      <ChevronDown />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label className="text-[13px] font-medium text-[#1A1A1A] tracking-[0.01em]">Timeline</label>
                    <div className="relative">
                      <select defaultValue="" className={selectBase}>
                        <option value="" disabled>Select timeline</option>
                        <option>Less than 1 month</option>
                        <option>1–3 months</option>
                        <option>3–6 months</option>
                        <option>Flexible</option>
                      </select>
                      <ChevronDown />
                    </div>
                  </div>
                </div>

                {/* Budget */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#1A1A1A] tracking-[0.01em]">Budget Range</label>
                  <div className="relative">
                    <select defaultValue="" className={selectBase}>
                      <option value="" disabled>Select your budget range</option>
                      <option>Under ₹10,000</option>
                      <option>₹10,000 – ₹50,000</option>
                      <option>₹50,000 – ₹2,00,000</option>
                      <option>₹2,00,000+</option>
                    </select>
                    <ChevronDown />
                  </div>
                </div>

                {/* CTA */}
                <button
                  type="submit"
                  className="mt-1 w-full flex items-center justify-center gap-2.5 py-4 px-6 bg-linear-to-br from-[#F5C030] via-[#E8A020] to-[#D48818] text-white text-base font-semibold rounded-xl shadow-[0_4px_24px_rgba(232,160,32,0.45)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(232,160,32,0.55)] hover:brightness-105 active:translate-y-0 transition-all duration-200 tracking-[0.01em]"
                >
                  Send Message
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 shrink-0">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10 H16 M11 5 L16 10 L11 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>

                {/* Security note */}
                <div className="flex items-center justify-center gap-1.5 text-[12.5px] text-[#888888]">
                  <svg width="13" height="14" viewBox="0 0 13 14" fill="none">
                    <path d="M6.5 1 L11.5 3 V7.5 C11.5 10.5 9 12.5 6.5 13.5 C4 12.5 1.5 10.5 1.5 7.5 V3 Z" stroke="#AAAAAA" strokeWidth="1.2" fill="none" />
                    <rect x="4.5" y="7" width="4" height="3.5" rx="0.7" stroke="#AAAAAA" strokeWidth="1.1" />
                    <path d="M5 7 V5.5 Q5 4 6.5 4 Q8 4 8 5.5 V7" stroke="#AAAAAA" strokeWidth="1.1" />
                  </svg>
                  Your information is secure and never shared.
                </div>
              </form>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
