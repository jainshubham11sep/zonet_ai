'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, Globe, MessageSquare, Send, ArrowUpRight, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const XLogo = ({ size = 18, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const LinkedinLogo = ({ size = 18, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="bg-[#FAF9F6] dark:bg-background text-foreground pt-20 md:pt-28 pb-8 border-t border-border-custom">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Logo & Intro */}
          <div className="lg:col-span-4 flex flex-col items-start lg:pr-8">
            <Link href="/" className="flex items-center gap-3 mb-10">
              {mounted ? (
                <Image 
                  src={resolvedTheme === 'dark' ? "/images/zonet/logo-white.png" : "/images/zonet/logo-black.png"} 
                  alt="ZonetTech Logo" 
                  width={180} 
                  height={50} 
                  className="w-auto h-8 md:h-9 object-contain" 
                />
              ) : (
                <Image 
                  src="/images/zonet/logo-black.png" 
                  alt="ZonetTech Logo" 
                  width={180} 
                  height={50} 
                  className="w-auto h-8 md:h-9 object-contain" 
                />
              )}
            </Link>
            
            <h3 className="text-[22px] md:text-[26px] font-serif text-foreground mb-6 leading-snug tracking-tight">
              The #1 Rated Fastest Website<br />
              & UX Agency For <span className="relative inline-block whitespace-nowrap"><span className="italic">B2B & AI SaaS.</span><svg className="absolute w-[105%] h-3 -bottom-1 -left-1 text-[#F4BE37]" viewBox="0 0 100 20" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 15 Q 50 2 98 12" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/></svg></span>
            </h3>
            
            <p className="text-muted text-[15px] leading-relaxed max-w-xs mb-10 font-medium">
              We build high-converting digital products for fast-moving companies.
            </p>
            
            <div className="flex items-center gap-3">
              {[
                { icon: Globe, label: "Website" },
                { icon: LinkedinLogo, label: "LinkedIn" },
                { icon: XLogo, label: "X" },
                { icon: MessageSquare, label: "Messages" },
                { icon: Send, label: "Telegram" }
              ].map((item, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  aria-label={item.label}
                  className="w-11 h-11 flex items-center justify-center rounded-2xl border border-black/5 dark:border-white/10 text-muted hover:text-foreground hover:border-foreground/30 hover:shadow-sm transition-all bg-white dark:bg-transparent"
                >
                  <item.icon size={18} className={item.icon === XLogo ? "" : "stroke-[1.5]"} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:pl-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#EAB308]"></div>
              <h4 className="text-foreground font-black text-xs uppercase tracking-[0.15em]">Company</h4>
            </div>
            <ul className="flex flex-col">
              {['Home', 'Case Studies', 'Services', 'AI Tools', 'Contact'].map((item, idx, arr) => (
                <li key={item} className={`py-3.5 ${idx !== arr.length - 1 ? 'border-b border-black/5 dark:border-white/10' : ''}`}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="flex items-center gap-4 text-muted hover:text-foreground transition-all text-[15px] font-medium"
                  >
                    <div className="w-1.5 h-1.5 rounded-full border-[1.5px] border-muted-foreground/40 shrink-0" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 lg:pl-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#EAB308]"></div>
              <h4 className="text-foreground font-black text-xs uppercase tracking-[0.15em]">Contact</h4>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-[46px] h-[46px] rounded-[18px] border border-black/5 dark:border-white/10 flex items-center justify-center shrink-0 bg-white dark:bg-transparent">
                  <Mail size={20} className="text-muted" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col justify-center pt-1">
                  <span className="text-[15px] font-semibold text-foreground">business@zonettech.com</span>
                  <span className="text-[9px] font-black text-muted uppercase tracking-[0.15em] mt-1">Email</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-[46px] h-[46px] rounded-[18px] border border-black/5 dark:border-white/10 flex items-center justify-center shrink-0 bg-white dark:bg-transparent">
                  <MapPin size={20} className="text-muted" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col justify-center pt-1">
                  <span className="text-[15px] font-semibold text-foreground">Jaipur Rajasthan, India</span>
                  <span className="text-[9px] font-black text-muted uppercase tracking-[0.15em] mt-1">Location</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-[46px] h-[46px] rounded-[18px] border border-black/5 dark:border-white/10 flex items-center justify-center shrink-0 bg-white dark:bg-transparent">
                  <Phone size={20} className="text-muted" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col justify-center pt-1">
                  <span className="text-[15px] font-semibold text-foreground">+91 9166572332</span>
                  <span className="text-[9px] font-black text-muted uppercase tracking-[0.15em] mt-1">Phone</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Availability & CTA */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#EAB308]"></div>
              <h4 className="text-foreground font-black text-xs uppercase tracking-[0.15em]">Availability</h4>
            </div>
            <div className="relative bg-white dark:bg-card/50 border border-black/5 dark:border-white/10 p-7 rounded-[2rem] overflow-hidden shadow-sm">
              {/* Diagonal lines pattern for top right */}
              <div 
                className="absolute -top-16 -right-16 w-48 h-48 opacity-[0.03] dark:opacity-10 pointer-events-none rounded-full" 
                style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #000, #000 1.5px, transparent 1.5px, transparent 8px)' }}
              ></div>
              
              <div className="flex items-center gap-2.5 text-[11px] font-black text-[#EAB308] uppercase tracking-[0.15em] mb-5 pb-5 border-b border-black/5 dark:border-white/10">
                <div className="w-2 h-2 rounded-full bg-[#EAB308]"></div>
                2 Slots Open
              </div>
              <p className="text-foreground text-[15px] leading-relaxed font-semibold mb-6 pr-2">
                We're currently accepting new projects for Q2 2026.
              </p>
              <button
                onClick={() => setIsCalendlyOpen(true)}
                className="w-full flex items-center justify-between px-6 py-4 rounded-[1.25rem] bg-[#111] dark:bg-white text-white dark:text-black font-black text-xs uppercase tracking-[0.15em] hover:opacity-90 transition-all shadow-md group"
              >
                Book a call
                <ArrowUpRight size={18} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-black/5 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-[13px] text-muted font-semibold">
            <p>© {new Date().getFullYear()} ZonetTech. All Rights Reserved.</p>
            <div className="hidden sm:block w-px h-3.5 bg-black/10 dark:bg-white/20"></div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-[10px] font-black text-muted uppercase tracking-[0.15em]">
            <Heart className="w-[14px] h-[14px] text-[#EAB308] fill-[#EAB308]" />
            Made with passion for SaaS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
