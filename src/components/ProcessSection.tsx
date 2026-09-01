import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Palette, Cpu, Rocket, Zap, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ProcessSection: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      title: t('Discovery & Strategy Blueprint', 'Entdeckung & Strategie-Blaupause'),
      icon: <Compass className="w-6 h-6 text-[#5533FF]" />,
      tagline: t('We reverse-engineer your growth goals into an airtight digital roadmap.', 'Wir wandeln Ihre Wachstumsziele in einen erstklassigen digitalen Fahrplan um.'),
      description: t('We analyze your market, competitors, target audience, and brand positioning. From user journeys to ad campaign funnels, we map out every conversion milestone before writing code.', 'Wir analysieren Ihren Markt, Ihre Zielgruppe und Markenpositionierung für maximale Konvertierung.'),
      deliverables: [
        t('Growth Architecture Map', 'Wachstums-Architekturkarte'),
        t('UI/UX Wireframes & Moodboards', 'UI/UX Wireframes & Moodboards'),
        t('Ad Funnel Blueprint', 'Anzeigen-Funnel Blaupause'),
      ],
    },
    {
      number: '02',
      title: t('High-Octane Design & Prototyping', 'High-Octane Design & Prototyping'),
      icon: <Palette className="w-6 h-6 text-pink-400" />,
      tagline: t('Crafting bold aesthetics, liquid micro-interactions, and 3D event cards.', 'Gestaltung kühner Ästhetiken, flüssiger Mikrointeraktionen und 3D-Karten.'),
      description: t('Our design team crafts bespoke visual identities, interactive web prototypes, and immersive invitation cards. You review live 3D models and interactive prototypes in real-time.', 'Unser Design-Team entwickelt maßgeschneiderte Markenidentitäten und interaktive Webkarten.'),
      deliverables: [
        t('Custom UI Component Library', 'UI-Komponentenbibliothek'),
        t('3D Interactive Flip Card Design', 'Interaktives 3D-Karten-Design'),
        t('Brand Guidelines', 'Marken-Richtlinien'),
      ],
    },
    {
      number: '03',
      title: t('Precision Build & Campaign Launch', 'Präzisions-Entwicklung & Kampagnen-Start'),
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      tagline: t('Sub-second React web apps paired with multi-channel ad launch engines.', 'Sub-Sekunden React Web-Apps gekoppelt mit Multi-Channel Ads.'),
      description: t('Engineered using modern React, Tailwind, and Framer Motion. We deploy your site on global edge servers, activate live RSVP event systems, and launch targeted paid campaigns.', 'Entwickelt mit modernstem React & Framer Motion. Wir aktivieren Live-RSVP & Werbekampagnen.'),
      deliverables: [
        t('High-Velocity Web App', 'High-Velocity Web-App'),
        t('Live RSVP & Calendar Sync Engine', 'Live RSVP & Kalender-Sync'),
        t('Omnichannel Paid Ad Launch', 'Omnichannel Werbeanzeigen-Start'),
      ],
    },
    {
      number: '04',
      title: t('Optimization, Scaling & Domination', 'Optimierung, Skalierung & Marktführerschaft'),
      icon: <Rocket className="w-6 h-6 text-yellow-400" />,
      tagline: t('Daily performance tracking, A/B creative testing, and scaling ad spend.', 'Tägliches Performance-Tracking, A/B-Tests und Ad-Skalierung.'),
      description: t('We don’t just launch and walk away. We analyze heatmaps, conversion drop-offs, and ROAS daily — iterating rapidly to maximize ROI and keep your brand ahead of the competition.', 'Wir analysieren täglich Conversions & ROAS, um Ihren ROI kontinuierlich zu maximieren.'),
      deliverables: [
        t('Weekly CRO & Heatmap Sprints', 'Wöchentliche CRO-Sprints'),
        t('Automated ROI Analytics Dashboard', 'Echtzeit ROI Analytics Dashboard'),
        t('Dedicated Account Growth Lead', 'Dedizierter Ansprechpartner'),
      ],
    },
  ];

  return (
    <section id="process" className="relative py-24 bg-[#09071A] border-t border-white/10 overflow-hidden">
      {/* Background Motion Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#2200EE]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#2200EE]/10 border border-[#2200EE]/30 text-xs font-bold uppercase tracking-wider text-[#5533FF] mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>{t('The Growio Engine', 'Der Growio Motor')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t('How We Take You From', 'Wie wir Sie vom')}{' '}
            <span className="text-[#5533FF]">{t('Concept to Market Domination', 'Konzept zur Marktführerschaft bringen')}</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            {t(
              'A battle-tested 4-step framework designed for rapid execution, flawless quality, and predictable ROI.',
              'Ein bewährtes 4-Schritte-System für schnelle Umsetzung, erstklassige Qualität und planbaren ROI.'
            )}
          </p>
        </div>

        {/* Process Step Grid (2 cards per row on mobile & desktop) */}
        <div className="mt-10 sm:mt-20 grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#2200EE]/50 p-4 sm:p-8 backdrop-blur-xl transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Top Step Badge + Icon */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-4xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                    {step.number}
                  </span>
                  <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-white/10 group-hover:scale-110 transition-transform shrink-0 [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-sm sm:text-2xl font-bold text-white group-hover:text-[#5533FF] transition-colors leading-snug">
                  {step.title}
                </h3>
                <p className="mt-1 text-[10px] sm:text-xs font-semibold text-[#5533FF] leading-tight">
                  {step.tagline}
                </p>
                <p className="mt-2 text-[11px] sm:text-sm text-gray-300 leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {step.description}
                </p>
              </div>

              {/* Deliverables Pills */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10 space-y-1.5 sm:space-y-2">
                <div className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  {t('Deliverables:', 'Leistungen:')}
                </div>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {step.deliverables.map((del, dIdx) => (
                    <span
                      key={dIdx}
                      className="inline-flex items-center space-x-1 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/[0.05] border border-white/10 text-[9px] sm:text-xs font-medium text-gray-300"
                    >
                      <CheckCircle2 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#5533FF] shrink-0" />
                      <span className="line-clamp-1">{del}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
