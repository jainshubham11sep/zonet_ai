'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone, Globe, Share2, MessageSquare, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-footer-bg text-footer-fg pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Logo & Intro */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-footer-fg flex items-center justify-center">
                <span className="text-footer-bg font-bold text-2xl">Z</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-footer-fg transition-colors">
                ZonetTech
              </span>
            </Link>
            <p className="text-footer-fg/50 text-lg leading-relaxed max-w-sm">
              The #1 Rated Fastest Website & UX Agency For B2B & AI SaaS. We build websites & products for fast-moving companies.
            </p>
            <div className="flex items-center gap-6">
              {[Globe, Share2, MessageSquare, Send].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="text-footer-fg/40 hover:text-footer-fg transition-all transform hover:scale-110"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-footer-fg font-bold text-lg mb-8 font-heading">Company</h4>
            <ul className="space-y-4">
              {['Home', 'Case Studies', 'Services', 'Resources', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-footer-fg/50 hover:text-footer-fg transition-colors text-base"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-footer-fg font-bold text-lg mb-8 font-heading">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-footer-fg/50 group cursor-pointer hover:text-footer-fg transition-colors">
                <Mail size={20} className="mt-1" />
                <span className="text-base">hello@zonettech.ai</span>
              </li>
              <li className="flex items-start gap-3 text-footer-fg/50 group cursor-pointer hover:text-footer-fg transition-colors">
                <MapPin size={20} className="mt-1" />
                <span className="text-base">San Francisco, CA</span>
              </li>
              <li className="flex items-start gap-3 text-footer-fg/50 group cursor-pointer hover:text-footer-fg transition-colors">
                <Phone size={20} className="mt-1" />
                <span className="text-base">+1 (555) 000-0000</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-footer-fg font-bold text-lg mb-8 font-heading">Our Expertise</h4>
            <p className="text-footer-fg/50 text-sm mb-6 leading-relaxed">
              We leverage AI to build projects in 7-30 days with premium quality.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-footer-fg text-footer-bg font-bold text-sm hover:opacity-90 transition-all"
            >
              Book a Call 
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-footer-fg/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-footer-fg/30">
             <p>© {new Date().getFullYear()} ZonetTech. Built with ❤️ for SaaS.</p>
             <div className="hidden md:block w-px h-4 bg-footer-fg/10"></div>
             <div className="flex gap-6">
                <a href="#" className="hover:text-footer-fg transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-footer-fg transition-colors">Terms</a>
             </div>
          </div>
          
          <div className="flex items-center gap-2 text-xs font-bold text-footer-fg/30 tracking-widest uppercase">
             <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
             Availability: 2 Slots Open
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
