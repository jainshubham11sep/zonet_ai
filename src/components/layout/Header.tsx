'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { Menu, X, ArrowRight, ChevronDown, Globe, Smartphone, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

const serviceLinks = [
  {
    name: 'Web Engineering',
    href: '/services/web-engineering',
    icon: Globe,
    description: 'Scalable web apps & platforms',
  },
  {
    name: 'Mobile Apps',
    href: '/services/mobile-apps',
    icon: Smartphone,
    description: 'iOS & Android development',
  },
  {
    name: 'AI Automation',
    href: '/services/ai-automation',
    icon: Bot,
    description: 'Workflows powered by AI',
  },
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'AI Tools', href: '/ai-tools' },
  { name: 'Resources', href: '/resources' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openServices() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setIsServicesOpen(true);
  }

  function closeServices() {
    closeTimer.current = setTimeout(() => setIsServicesOpen(false), 120);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]! border-b border-[#E6E4DF]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image
            src="/images/zonet/logo-black.png"
            alt="ZonetTech"
            width={140}
            height={35}
            className="w-auto h-7"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.slice(0, 1).map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold tracking-tight text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            <button className="flex items-center gap-1 text-sm font-bold tracking-tight text-foreground/80 hover:text-foreground transition-colors">
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  onMouseEnter={openServices}
                  onMouseLeave={closeServices}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-2xl border border-[#E6E4DF] shadow-xl overflow-hidden"
                >
                  <div className="p-2">
                    {serviceLinks.map(({ name, href, icon: Icon, description }) => (
                      <Link
                        key={name}
                        href={href}
                        onClick={() => setIsServicesOpen(false)}
                        className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-[#F7F6F3] transition-colors group"
                      >
                        <span className="mt-0.5 w-8 h-8 shrink-0 flex items-center justify-center rounded-lg bg-[#F7F6F3] group-hover:bg-[#E8C547] transition-colors">
                          <Icon size={15} className="text-[#1A1A1A]" />
                        </span>
                        <span>
                          <span className="block text-sm font-bold text-[#1A1A1A] leading-tight">{name}</span>
                          <span className="block text-xs text-[#686B6B] mt-0.5">{description}</span>
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="border-t border-[#E6E4DF] px-4 py-3">
                    <Link
                      href="/services"
                      onClick={() => setIsServicesOpen(false)}
                      className="flex items-center justify-between text-sm font-bold text-[#1A1A1A] hover:text-[#686B6B] transition-colors"
                    >
                      View All Services
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(1).map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold tracking-tight text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Link
            href="/strategy-call"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-[#111111] text-white rounded-full font-bold text-sm hover:bg-[#1a1a1a] transition-colors"
          >
            Start a Project <ArrowRight size={16} />
          </Link>

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
            className="lg:hidden border-t border-[#E6E4DF] bg-[#faf8f5]!"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.slice(0, 1).map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors py-2.5"
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full flex items-center justify-between text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors py-2.5"
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-3 pb-2 flex flex-col gap-1 border-l-2 border-[#E8C547] ml-1 mt-1">
                        {serviceLinks.map(({ name, href }) => (
                          <Link
                            key={name}
                            href={href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-sm text-foreground/60 hover:text-foreground transition-colors py-1.5 pl-2"
                          >
                            {name}
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-sm font-bold text-[#1A1A1A] hover:text-foreground transition-colors py-1.5 pl-2"
                        >
                          View All →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(1).map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors py-2.5"
                >
                  {link.name}
                </Link>
              ))}

              <hr className="border-[#E6E4DF] my-2" />
              <Link
                href="/strategy-call"
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
