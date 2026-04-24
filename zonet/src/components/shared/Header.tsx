'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: 'Work', href: '/case-studies' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'About', href: '/about' },
    { name: 'Insights', href: '/insights' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F6F3] border-b border-[#E6E4DF]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          {mounted ? (
            <Image
              src={resolvedTheme === 'dark' ? '/images/zonet/logo-white.png' : '/images/zonet/logo-black.png'}
              alt="ZonetTech"
              width={140}
              height={35}
              className="w-auto h-7"
              priority
            />
          ) : (
            <Image
              src="/images/zonet/logo-black.png"
              alt="ZonetTech"
              width={140}
              height={35}
              className="w-auto h-7"
              priority
            />
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-14">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold! tracking-tight text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-border-custom text-foreground hover:bg-card transition-colors"
              aria-label="Toggle theme"
            >
              {resolvedTheme === 'dark' ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>
          )}

          {/* CTA Button - Desktop */}
          <Link
            href="/"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-[#111111] text-white rounded-full font-bold text-sm hover:bg-[#1a1a1a] transition-colors"
          >
            Start a Project <ArrowRight size={16} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 border border-border-custom rounded-lg text-foreground hover:bg-card transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-[#E6E4DF] bg-[#F7F6F3]"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors py-2"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-[#E6E4DF] my-2" />
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#111111] text-white rounded-full font-bold text-sm w-full hover:bg-[#1a1a1a] transition-colors"
              >
                Start a Project <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
