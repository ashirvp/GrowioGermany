import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Megaphone, PartyPopper, Rocket, Zap, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  tagline: string;
  description: string;
  features: string[];
  gradient: string;
  accentColor: string;
  popular?: boolean;
}

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const { t } = useLanguage();

  const servicesData: ServiceItem[] = [
    {
      id: 'web-dev',
      title: t('Website Design & Development', 'Webdesign & Entwicklung'),
      category: t('Engineering & UI/UX', 'Entwicklung & UI/UX'),
      icon: <Layout className="w-7 h-7 text-indigo-400" />,
      tagline: t('High-performance bespoke web apps & digital flagships built to convert.', 'Hochleistungs-Web-Apps & Flaggschiff-Websites zur Konvertierung.'),
      description: t('We build ultra-fast, motion-rich websites tailored to your brand identity. Using cutting-edge tech stacks like React, Next.js, and Framer Motion, we turn visitors into high-value clients.', 'Wir entwickeln ultraschnelle, animationsreiche Websites, die perfekt auf Ihre Marke abgestimmt sind.'),
      features: [
        t('Custom React & Next.js Web Architectures', 'Individuelle React & Next.js Architekturen'),
        t('3D Visuals & Framer Motion Micro-Interactions', '3D-Visuals & Framer Motion Interaktionen'),
        t('Sub-Second Page Load Optimization & SEO', 'Sub-Sekunden Ladezeit-Optimierung & SEO'),
        t('Headless CMS & E-Commerce Integration', 'Headless CMS & E-Commerce Anbindung'),
        t('100% Mobile Responsive & Accessible UI', '100% Responsive & Barrierefreie UI'),
      ],
      gradient: 'from-blue-600/20 via-indigo-600/10 to-transparent',
      accentColor: '#2200EE',
    },
    {
      id: 'digital-marketing',
      title: t('Digital Marketing & Growth Campaigns', 'Digitales Marketing & Wachstum'),
      category: t('Acquisition & Branding', 'Kundenakquise & Branding'),
      icon: <Megaphone className="w-7 h-7 text-purple-400" />,
      tagline: t('Precision SEO, paid ad engines, and social branding that scales revenue.', 'Präzisions-SEO, Werbeanzeigen und Social Branding.'),
      description: t('Data-fueled marketing engineered for rapid growth. We optimize every dollar across Google Search, Meta Ads, TikTok, LinkedIn, and influencer channels.', 'Datengestütztes Marketing für schnelles Wachstum auf Meta, Google & TikTok.'),
      features: [
        t('High-Intent Performance SEO & Content Engines', 'High-Intent SEO & Content Motoren'),
        t('Omnichannel Paid Ads (Meta, Google, LinkedIn)', 'Omnichannel Ads (Meta, Google, LinkedIn)'),
        t('Brand Strategy, Positioning & Visual Identity', 'Markenstrategie, Positionierung & Identität'),
        t('Conversion Rate Optimization (CRO)', 'Conversion-Rate-Optimierung (CRO)'),
        t('Real-Time ROI Analytics Dashboards', 'Echtzeit ROI-Analyse Dashboards'),
      ],
      gradient: 'from-purple-600/20 via-pink-600/10 to-transparent',
      accentColor: '#7C3AED',
    },
    {
      id: 'digital-invitations',
      title: t('Digital Invitation Web Cards & Event Sites', 'Digitale Einladungskarten & Event-Sites'),
      category: t('Event Experiences', 'Event-Erlebnisse'),
      icon: <PartyPopper className="w-7 h-7 text-yellow-400" />,
      tagline: t('Interactive web cards for weddings, galas & corporate VIP events.', 'Interaktive Web-Karten für Hochzeiten, Galas & VIP-Events.'),
      description: t('Transform event invites into memorable digital experiences. Features live RSVP tracking, custom music background audio, interactive venue maps, countdowns, and gift registries.', 'Verwandeln Sie Einladungen in unvergessliche digitale Erlebnisse mit Live-RSVP & Musik.'),
      features: [
        t('Live Instant RSVP & Guest Management System', 'Live Instant-RSVP & Gästeverwaltung'),
        t('Interactive 3D Flippable Web Cards', 'Interaktive 3D-Drehbare Webkarten'),
        t('Embedded Music, Video & Gallery Previews', 'Integrierte Musik, Videos & Galerie'),
        t('Add-to-Calendar & GPS Navigation Maps', 'Kalender-Export & GPS-Navigation'),
        t('Custom Event Branding & Password Protection', 'Individuelles Branding & Passwortschutz'),
      ],
      gradient: 'from-yellow-500/20 via-amber-600/10 to-transparent',
      accentColor: '#EAB308',
      popular: true,
    },
    {
      id: 'full-service',
      title: t('Full-Service "We Handle Everything" Growth', 'Full-Service Paket "Wir Übernehmen Alles"'),
      category: t('360° Partner Package', '360° Partner-Paket'),
      icon: <Rocket className="w-7 h-7 text-cyan-400" />,
      tagline: t('Your outsourced growth team — from creative direction to daily execution.', 'Ihr externes Wachstumsteam — von Design bis täglicher Umsetzung.'),
      description: t('Stop juggling 5 different agencies. We take full ownership of your web engineering, content creation, ad spend, and brand design under one unified high-octane team.', 'Wir übernehmen die volle Verantwortung für Ihre Website, Inhalte und Werbeanzeigen.'),
      features: [
        t('Dedicated Senior Strategist & Creative Team', 'Dedizierte Strategen & Kreativteam'),
        t('End-to-End Campaign Production & Management', 'End-to-End Kampagnen-Produktion'),
        t('Weekly Growth Experiments & Strategy Sprints', 'Wöchentliche Wachstums-Sprints'),
        t('Unlimited Minor Revisions & Rapid Support', 'Schneller Support & Überarbeitungen'),
        t('Predictable Monthly Investment, No Hidden Fees', 'Planbare monatliche Investition'),
      ],
      gradient: 'from-cyan-600/20 via-blue-600/10 to-transparent',
      accentColor: '#06B6D4',
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-[#070514] overflow-hidden">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#2200EE]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#2200EE]/10 border border-[#2200EE]/30 text-xs font-bold uppercase tracking-wider text-[#5533FF] mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>{t('Our Core Capabilities', 'Unsere Kernkompetenzen')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t('High-Impact Services Built for', 'High-Impact Services für')}{' '}
            <span className="text-[#5533FF]">{t('Market Leadership', 'Marktführerschaft')}</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            {t(
              'Whether you need a flagship web platform, viral marketing campaigns, or unforgettable digital event cards, Growio powers end-to-end execution.',
              'Egal ob Flaggschiff-Website, Performance-Kampagnen oder digitale Einladungen — Growio übernimmt die volle Umsetzung.'
            )}
          </p>
        </div>

        {/* Services 2x2 Grid (2 cards per row on mobile & desktop) */}
        <div className="mt-10 sm:mt-16 grid grid-cols-2 gap-3 sm:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="relative group rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-[#2200EE]/60 p-4 sm:p-8 transition-all duration-300 shadow-xl overflow-hidden cursor-pointer flex flex-col justify-between"
              onClick={() => onSelectService(service)}
            >
              {/* Background Highlight Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-3 right-3 sm:top-6 sm:right-6 inline-flex items-center space-x-1 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#2200EE] text-white text-[9px] sm:text-xs font-bold shadow-[0_0_15px_#2200EE]">
                  <Sparkles className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-yellow-300" />
                  <span className="hidden xs:inline sm:inline">Trending Choice</span>
                  <span className="xs:hidden sm:hidden">HOT</span>
                </div>
              )}

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Category Pill + Icon */}
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-6">
                    <div className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-white/10 group-hover:scale-110 transition-transform shrink-0 [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-7 sm:[&>svg]:h-7">
                      {service.icon}
                    </div>
                    <span className="text-[9px] sm:text-xs uppercase font-bold tracking-wider text-gray-400 line-clamp-1">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-sm sm:text-2xl font-bold text-white group-hover:text-white transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-[#5533FF] font-medium leading-snug">
                    {service.tagline}
                  </p>
                  <p className="mt-2 sm:mt-3 text-[11px] sm:text-sm text-gray-300 leading-snug sm:leading-relaxed hidden xs:block sm:block">
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="mt-3 sm:mt-6 space-y-1.5 sm:space-y-2.5">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start sm:items-center text-[10px] sm:text-xs text-gray-300 space-x-1.5">
                        <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#5533FF] shrink-0 mt-0.5 sm:mt-0" />
                        <span className="line-clamp-2 sm:line-clamp-none">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action Link */}
                <div className="mt-4 sm:mt-8 pt-3 sm:pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-gray-400 group-hover:text-white transition-colors flex items-center space-x-1">
                    <span>Specs</span>
                    <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-400" />
                  </span>
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#2200EE] group-hover:border-[#2200EE] flex items-center justify-center transition-all">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
