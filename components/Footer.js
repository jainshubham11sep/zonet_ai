'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, Globe, Share2, MessageSquare, Send } from 'lucide-react';
import { PopupModal } from 'react-calendly';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="bg-background text-foreground pt-24 md:pt-32 pb-16 border-t border-border-custom">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-24">
          {/* Logo & Intro */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <Image src="/images/zonet/logo-dark.png" alt="ZonetTech Logo" width={180} height={50} className="w-auto h-8 md:h-10 object-contain dark:hidden" />
              <Image src="/images/zonet/logo-light.png" alt="ZonetTech Logo" width={180} height={50} className="w-auto h-8 md:h-10 object-contain hidden dark:block" />
            </Link>
            <p className="text-muted text-lg leading-relaxed max-w-sm font-medium">
              The #1 Rated Fastest Website & UX Agency For B2B & AI SaaS. We build high-converting products for fast-moving companies.
            </p>
            <div className="flex items-center gap-6">
              {[Globe, Share2, MessageSquare, Send].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="text-muted hover:text-accent transition-all transform hover:scale-110 active:scale-95"
                >
                  <Icon size={20} spellCheck={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-black text-lg mb-8 font-heading uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              {['Home', 'Case Studies', 'Services', 'Resources', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-muted hover:text-accent transition-all text-base font-medium flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-all -ml-3.5" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-foreground font-black text-lg mb-8 font-heading uppercase tracking-widest">Contact</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-muted group cursor-pointer hover:text-accent transition-all">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span className="text-base font-medium">business@zonettech.com</span>
              </li>
              <li className="flex items-start gap-3 text-muted group cursor-pointer hover:text-accent transition-all">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-base font-medium">Jaipur Rajastha,India</span>
              </li>
              <li className="flex items-start gap-3 text-muted group cursor-pointer hover:text-accent transition-all">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span className="text-base font-medium">+91 9166572332</span>
              </li>
            </ul>
          </div>

          {/* Availability & CTA */}
          <div className="lg:pl-4">
            <h4 className="text-foreground font-black text-lg mb-8 font-heading uppercase tracking-widest">Availability</h4>
            <div className="bg-card/40 backdrop-blur-xl border border-border-custom p-6 rounded-3xl space-y-6">
              <div className="flex items-center gap-2 text-xs font-black text-accent tracking-[0.2em] uppercase">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                2 Slots Open
              </div>
              <p className="text-muted text-xs leading-relaxed font-bold">
                We're currently accepting new projects for Q2 2026.
              </p>
              <button
                onClick={() => setIsCalendlyOpen(true)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-accent text-white font-black text-xs uppercase tracking-widest hover:bg-accent/90 transition-all shadow-lg shadow-accent/20"
              >
                Book a call
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border-custom/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-muted font-medium">
            <p>© {new Date().getFullYear()} ZonetTech. All Rights Reserved.</p>
            <div className="hidden md:block w-px h-4 bg-border-custom"></div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
             </div>
          </div>
          
          <div className="flex items-center gap-4 text-[10px] font-black text-muted tracking-widest uppercase ornament-list">
            Made with passion for SaaS
          </div>
        </div>
      </div>
      {mounted && typeof document !== 'undefined' && (
        <PopupModal
          url="https://calendly.com/zonettech/30min"
          onModalClose={() => setIsCalendlyOpen(false)}
          open={isCalendlyOpen}
          rootElement={document.body}
        />
      )}
    </footer>
  );
};

export default Footer;
