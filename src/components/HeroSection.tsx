import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const { t, language } = useLanguage();

  const words = language === 'de'
    ? [
        'Webdesign & Entw.',
        'Performance Marketing',
        'Digitale Event-Karten',
        'Full-Service Wachstum',
      ]
    : [
        'Web Design & Dev',
        'Performance Marketing',
        'Digital Event Invites',
        'Full-Service Growth',
      ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setFadeState(true);
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#070514]">
      {/* Background Animated Gradient Mesh Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#2200EE]/30 via-[#5533FF]/20 to-[#8B5CF6]/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#2200EE]/20 rounded-full blur-[120px] pointer-events-none animate-float" />
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Lightning Bolt Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 left-[15%] text-[#5533FF]/40"
        >
          <Zap className="w-10 h-10 transform -rotate-12" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 40, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/2 right-[12%] text-[#2200EE]/50"
        >
          <Zap className="w-14 h-14 transform rotate-45" />
        </motion.div>
        <motion.div
          animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 left-[20%] text-yellow-400/30"
        >
          <Zap className="w-8 h-8" />
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]"
          >
            {t('We Power High-Octane Growth Through', 'Wir Treiben Ihr Wachstum Voran Durch')}{' '}
            <span className="relative inline-block mt-2 sm:mt-0">
              <span
                className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-[#5533FF] transition-all duration-300 ${
                  fadeState ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95'
                }`}
              >
                {words[currentWordIndex]}
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#2200EE] rounded-full shadow-[0_0_12px_#2200EE]" />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-3 sm:mt-6 text-xs xs:text-sm sm:text-xl text-gray-300 font-normal leading-snug sm:leading-relaxed max-w-2xl mx-auto px-2 sm:px-0"
          >
            {t(
              'From bespoke high-converting websites and performance ad campaigns to hyper-engaging digital invitation web cards — we handle everything so your brand dominates.',
              'Von hochkonvertierenden Websites und Performance-Werbekampagnen bis hin zu interaktiven digitalen Einladungskarten — wir übernehmen alles, damit Ihre Marke dominiert.'
            )}
          </motion.p>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 sm:mt-10 flex flex-row items-center justify-center gap-1.5 sm:gap-4 max-w-md sm:max-w-2xl mx-auto w-full px-1 sm:px-0"
          >
            <a
              href="#contact"
              className="flex-1 sm:flex-initial sm:w-72 min-h-[34px] sm:min-h-[56px] px-2 sm:px-6 py-1.5 sm:py-4 text-[10px] xs:text-[11px] sm:text-base font-extrabold text-white bg-[#2200EE] hover:bg-[#1C00C8] rounded-full shadow-[0_0_20px_rgba(34,0,238,0.5)] hover:shadow-[0_0_50px_rgba(85,51,255,0.9)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-1 sm:space-x-3 group whitespace-nowrap"
            >
              <span>{t('Launch Your Project', 'Projekt Starten')}</span>
              <Zap className="w-2.5 h-2.5 sm:w-5 sm:h-5 text-yellow-300 fill-yellow-300 group-hover:rotate-12 transition-transform shrink-0" />
            </a>

            <a
              href="#invitations"
              className="flex-1 sm:flex-initial sm:w-72 min-h-[34px] sm:min-h-[56px] px-2 sm:px-6 py-1.5 sm:py-4 text-[10px] xs:text-[11px] sm:text-base font-bold text-gray-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-[#2200EE] rounded-full backdrop-blur-md transition-all duration-300 flex items-center justify-center space-x-1 sm:space-x-2 group whitespace-nowrap"
            >
              <span>{t('Explore Digital Invites', 'Digitale Einladungen')}</span>
              <ArrowRight className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-gray-400 group-hover:translate-x-1 group-hover:text-[#5533FF] transition-all shrink-0" />
            </a>
          </motion.div>

          {/* Feature Badges under CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-5 sm:mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 text-[10px] sm:text-sm text-gray-300 font-medium"
          >
            <div className="flex items-center space-x-1.5 px-2.5 py-1 sm:px-4 sm:py-2.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md min-w-0 sm:min-w-[170px] justify-center text-center">
              <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-[#5533FF] shrink-0" />
              <span>{t('Full-Service Agency', 'Full-Service Agentur')}</span>
            </div>
            <div className="flex items-center space-x-1.5 px-2.5 py-1 sm:px-4 sm:py-2.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md min-w-0 sm:min-w-[170px] justify-center text-center">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 shrink-0" />
              <span>{t('Tailor-Made Digital Cards', 'Maßgeschneiderte Karten')}</span>
            </div>
            <div className="flex items-center space-x-1.5 px-2.5 py-1 sm:px-4 sm:py-2.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md min-w-0 sm:min-w-[170px] justify-center text-center">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
              <span>{t('Data-Driven Campaigns', 'Datengetriebene Kampagnen')}</span>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-[#2200EE]/30 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight flex items-center justify-center">
              <span>$3M+</span>
            </div>
            <div className="mt-1 text-xs uppercase tracking-wider font-semibold text-gray-400">
              {t('Revenue Generated', 'Umsatz Generiert')}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-[#2200EE]/30 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight flex items-center justify-center">
              <span>250+</span>
            </div>
            <div className="mt-1 text-xs uppercase tracking-wider font-semibold text-gray-400">
              {t('Projects Shipped', 'Projekte Umgesetzt')}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-[#2200EE]/30 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight flex items-center justify-center">
              <span>99.4%</span>
            </div>
            <div className="mt-1 text-xs uppercase tracking-wider font-semibold text-gray-400">
              {t('Client Satisfaction', 'Kundenzufriedenheit')}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-[#2200EE]/30 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight flex items-center justify-center">
              <span>15+</span>
            </div>
            <div className="mt-1 text-xs uppercase tracking-wider font-semibold text-gray-400">
              {t('Design & Growth Awards', 'Auszeichnungen')}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
