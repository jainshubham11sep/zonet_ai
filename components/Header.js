'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { PopupModal } from 'react-calendly';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Services', href: '/services' },
    { name: 'Resources', href: '/resources' },
  ];

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center py-4 px-4 md:px-6 mt-2 md:mt-4"
    >
      <div className={`flex items-center justify-between w-full max-w-7xl px-4 md:px-8 py-3 rounded-3xl md:rounded-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-card/80 md:bg-card/40 backdrop-blur-2xl md:backdrop-blur-xl shadow-2xl border border-border-custom' 
          : 'bg-card/60 md:bg-card/20 backdrop-blur-xl md:backdrop-blur-md border border-border-custom/30'
      }`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-[1.02] drop-shadow-sm">
          <Image src="/images/zonet/logo-dark.png" alt="ZonetTech Logo" width={140} height={35} className="w-auto h-6 md:h-7 object-contain dark:hidden" priority />
          <Image src="/images/zonet/logo-light.png" alt="ZonetTech Logo" width={140} height={35} className="w-auto h-6 md:h-7 object-contain hidden dark:block" priority />
        </Link>

        {/* Center Desktop Nav (Pill Style) */}
        <nav className="hidden md:flex items-center bg-background/30 rounded-full p-1 border border-border-custom/50">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="px-6 py-2 text-[15px] font-black uppercase tracking-widest text-muted hover:text-accent transition-all rounded-full hover:bg-card/60 font-heading"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side: Theme Toggle + Social + CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-2xl bg-card border border-border-custom text-foreground hover:border-accent/40 hover:text-accent transition-all group shadow-sm"
              aria-label="Toggle theme"
            >
              {resolvedTheme === 'dark' ? <Sun size={18} className="group-hover:rotate-45 transition-transform" /> : <Moon size={18} className="group-hover:-rotate-12 transition-transform" />}
            </button>
          )}

          <button 
            onClick={() => setIsCalendlyOpen(true)}
            className="px-8 py-4 rounded-[20px] bg-accent text-white text-[13px] font-black uppercase tracking-[0.2em] hover:bg-accent/90 transition-all flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(99,102,241,0.25)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Book a call
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-card border border-border-custom text-foreground"
              aria-label="Toggle theme"
            >
              {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button 
            className="text-foreground p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-card/95 backdrop-blur-2xl rounded-[32px] shadow-2xl border border-border-custom p-8 overflow-hidden z-[100]"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-2xl font-black text-foreground hover:text-accent font-heading tracking-tighter"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-border-custom/50" />
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsCalendlyOpen(true);
                }}
                className="w-full py-5 rounded-2xl bg-accent text-white text-center font-black uppercase tracking-widest text-sm hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-xl"
              >
                <Phone size={18} /> Book a call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {mounted && typeof document !== 'undefined' && (
        <PopupModal
          url="https://calendly.com/zonettech/30min"
          onModalClose={() => setIsCalendlyOpen(false)}
          open={isCalendlyOpen}
          rootElement={document.body}
        />
      )}
    </header>
  );
};

export default Header;
