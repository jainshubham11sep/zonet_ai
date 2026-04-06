'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center py-4 px-6 mt-4"
    >
      <div className={`flex items-center justify-between w-full max-w-7xl px-6 py-3 rounded-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-card/80 backdrop-blur-md shadow-lg border border-border-custom' 
          : 'bg-card/40 backdrop-blur-sm border border-transparent'
      }`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-button-bg flex items-center justify-center">
            <span className="text-button-fg font-bold text-xl">Z</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            ZonetTech
          </span>
        </Link>

        {/* Center Desktop Nav (Pill Style) */}
        <nav className="hidden md:flex items-center bg-background/50 rounded-full p-1 border border-border-custom">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="px-5 py-2 text-[14px] font-medium text-secondary hover:text-foreground transition-all rounded-full hover:bg-card"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side: Theme Toggle + Social + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-icon-bg border border-border-custom text-foreground hover:bg-card-alt transition-all"
              aria-label="Toggle theme"
            >
              {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <Link 
            href="https://wa.me/yourphone" 
            target="_blank"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-accent text-white hover:opacity-90 transition-all"
          >
            <Phone size={18} fill="white" />
          </Link>
          <Link 
            href="/contact" 
            className="px-6 py-2.5 rounded-full bg-button-bg text-button-fg text-sm font-semibold hover:opacity-90 transition-all"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-icon-bg border border-border-custom text-foreground"
              aria-label="Toggle theme"
            >
              {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button 
            className="text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-6 right-6 mt-2 bg-card rounded-3xl shadow-2xl border border-border-custom p-6 animate-in slide-in-from-top duration-300 overflow-hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-lg font-semibold text-foreground px-4 py-2 hover:bg-background rounded-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-border-custom" />
            <Link 
              href="/contact" 
              className="w-full py-4 rounded-2xl bg-button-bg text-button-fg text-center font-bold hover:opacity-90 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
