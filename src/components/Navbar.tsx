import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Menu, X, ArrowUpRight, Calendar, Sparkles, Languages } from 'lucide-react';
import { GrowioLogo } from './GrowioLogo';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('Services', 'Dienstleistungen'), href: '#services' },
    { name: t('Digital Invites', 'Digitale Einladungen'), href: '#invitations' },
    { name: t('Portfolio', 'Portfolio'), href: '#portfolio' },
    { name: t('Our Process', 'Unser Prozess'), href: '#process' },
    { name: t('Testimonials', 'Kundenstimmen'), href: '#testimonials' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3 bg-[#070514]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#" className="group flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
              <GrowioLogo size="sm" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group flex items-center space-x-1.5"
                >
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#2200EE] transition-all duration-300 group-hover:w-3/4 shadow-[0_0_8px_#2200EE]" />
                </a>
              ))}
            </nav>

            {/* Actions & Language Switcher */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Language Switcher Pill */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#2200EE]/30 border border-white/20 hover:border-[#5533FF] text-xs font-extrabold text-white transition-all shadow-md active:scale-95 cursor-pointer"
                title={language === 'en' ? 'Auf Deutsch wechseln' : 'Switch to English'}
              >
                <Languages className="w-3.5 h-3.5 text-yellow-300" />
                <span>{language === 'en' ? '🇩🇪 DE' : '🇬🇧 EN'}</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="flex items-center space-x-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-300 hover:text-white rounded-full border border-white/15 hover:border-[#2200EE] hover:bg-[#2200EE]/10 transition-all duration-300"
              >
                <Calendar className="w-3.5 h-3.5 text-[#5533FF]" />
                <span>{t('Book Call', 'Termin Buchen')}</span>
              </button>

              <a
                href="#contact"
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-[#2200EE] hover:bg-[#1C00C8] rounded-full shadow-[0_0_20px_rgba(34,0,238,0.5)] hover:shadow-[0_0_30px_rgba(85,51,255,0.8)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 overflow-hidden group"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{t('Start Project', 'Projekt Starten')}</span>
                  <Zap className="w-4 h-4 text-yellow-300 fill-yellow-300 group-hover:scale-125 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#5533FF] via-[#7C3AED] to-[#2200EE] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            {/* Mobile Actions: Language Toggle + Hamburger */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 px-2.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-white transition-all active:scale-95"
                title={language === 'en' ? 'Auf Deutsch wechseln' : 'Switch to English'}
              >
                <Languages className="w-3.5 h-3.5 text-yellow-300" />
                <span>{language === 'en' ? '🇩🇪 DE' : '🇬🇧 EN'}</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-[65px] left-0 right-0 z-40 bg-[#070514]/95 backdrop-blur-2xl border-b border-white/10 lg:hidden overflow-hidden shadow-2xl"
          >
            <div className="px-6 pt-4 pb-8 space-y-4">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-base font-semibold text-gray-200 hover:text-white hover:bg-[#2200EE]/20 hover:border-[#2200EE]/40 transition-all"
                  >
                    <span className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-[#2200EE]" />
                      <span>{link.name}</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-gray-500" />
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-full border border-white/20 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[#5533FF]" />
                  <span>Book 15-min Strategy Call</span>
                </button>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-full bg-[#2200EE] text-sm font-bold text-white shadow-[0_0_20px_rgba(34,0,238,0.5)]"
                >
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  <span>Launch Your Project ⚡</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
