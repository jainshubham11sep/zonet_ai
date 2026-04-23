'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Sun, Moon, ChevronDown, Globe, Smartphone, Cpu, LayoutGrid } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
// import { PopupModal } from 'react-calendly';

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
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Web Engineering', href: '/services/web-engineering', icon: Globe },
        { name: 'Mobile Apps', href: '/services/mobile-apps', icon: Smartphone },
        { name: 'AI Automation', href: '/services/ai-automation', icon: Cpu },
        { name: 'View All', href: '/services', icon: LayoutGrid },
      ]
    },
    { name: 'AI Tools', href: '/ai-tools' },
  ];

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center py-4 px-4 md:px-6 mt-2 md:mt-4"
    >
      <div className={`flex items-center justify-between w-full max-w-7xl px-4 md:px-8 py-3 rounded-3xl md:rounded-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-card shadow-2xl border border-border-custom' 
          : 'bg-card/90 backdrop-blur-md border border-border-custom/30'
      }`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-[1.02] drop-shadow-sm">
          {mounted ? (
            <Image 
              src={resolvedTheme === 'dark' ? "/images/zonet/logo-white.png" : "/images/zonet/logo-black.png"} 
              alt="ZonetTech Logo" 
              width={140} 
              height={35} 
              className="w-auto h-6 md:h-7 object-contain" 
              priority 
            />
          ) : (
            <Image 
              src="/images/zonet/logo-black.png" 
              alt="ZonetTech Logo" 
              width={140} 
              height={35} 
              className="w-auto h-6 md:h-7 object-contain" 
              priority 
            />
          )}
        </Link>

        {/* Center Desktop Nav (Pill Style) */}
        <nav className="hidden md:flex items-center bg-background rounded-full p-1 border border-border-custom relative">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
            >
              <Link 
                href={link.href}
                className={`px-6 py-2 text-[15px] font-black uppercase tracking-widest transition-all rounded-full hover:bg-card font-heading flex items-center gap-1.5 ${
                  activeDropdown === link.name ? 'text-accent bg-card' : 'text-foreground/70 hover:text-accent'
                }`}
              >
                {link.name}
                {link.dropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
              </Link>

              {/* Dropdown Menu */}
              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-card border border-border-custom rounded-[24px] shadow-2xl p-3 z-[100] overflow-hidden"
                    >
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="flex items-center gap-4 p-3.5 rounded-[18px] hover:bg-accent/5 hover:text-accent text-foreground/80 transition-all group/item"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center text-accent group-hover/item:bg-accent group-hover/item:text-white transition-all">
                            <sub.icon size={18} />
                          </div>
                          <span className="text-sm font-black tracking-tight">{sub.name}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
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
            className="px-8 py-4 rounded-[20px] bg-accent text-white text-[13px] font-black uppercase tracking-[0.2em] hover:bg-accent/90 transition-all flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:scale-[1.02] active:scale-[0.98]"
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
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-card rounded-[32px] shadow-2xl border border-border-custom p-8 overflow-hidden z-[100]"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <Link 
                      href={link.href}
                      className="text-2xl font-black text-foreground hover:text-accent font-heading tracking-tighter"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <button 
                        onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === link.name ? null : link.name)}
                        className={`p-2 rounded-xl bg-card border border-border-custom transition-all ${mobileSubmenuOpen === link.name ? 'bg-accent text-white border-accent' : ''}`}
                      >
                        <ChevronDown size={20} className={`transition-transform ${mobileSubmenuOpen === link.name ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  
                  {link.dropdown && mobileSubmenuOpen === link.name && (
                    <div className="grid grid-cols-1 gap-3 pl-4">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="flex items-center gap-4 p-4 rounded-2xl bg-card/50 border border-border-custom text-foreground/80 font-bold"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <sub.icon size={18} className="text-accent" />
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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

      {/* {mounted && typeof document !== 'undefined' && (
        <PopupModal
          url="https://calendly.com/zonettech/30min"
          onModalClose={() => setIsCalendlyOpen(false)}
          open={isCalendlyOpen}
          rootElement={document.body}
        />
      )} */}
    </header>
  );
};

export default Header;
