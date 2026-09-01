import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Zap, Award, Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: 'web' | 'marketing' | 'invitations' | 'branding';
  categoryLabel: string;
  metric: string;
  metricLabel: string;
  image: string;
  summary: string;
  fullDetails: {
    challenge: string;
    solution: string;
    results: string[];
    techStack: string[];
  };
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 'lumina-saas',
    title: 'Lumina Cloud AI — Next-Gen Platform Launch',
    client: 'Lumina Technologies Inc.',
    category: 'web',
    categoryLabel: 'Website Design & Dev',
    metric: '+340%',
    metricLabel: 'Qualified Lead Conversions',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    summary: 'A futuristic 3D interactive product site featuring WebGL animations and instant demo booking.',
    fullDetails: {
      challenge: 'Lumina was struggling with a slow legacy website that failed to convey their complex AI capabilities.',
      solution: 'We engineered a high-velocity React & Framer Motion web app with custom 3D model viewers and clear funnel CTAs.',
      results: [
        '340% increase in trial signups within 30 days',
        'Average page load time reduced from 4.2s to 0.4s',
        'Featured on Awwwards & SiteOfTheDay',
      ],
      techStack: ['React', 'Three.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    },
  },
  {
    id: 'vance-wedding',
    title: 'Vance & Sterling Royal Wedding Digital Card',
    client: 'Private Luxury Event',
    category: 'invitations',
    categoryLabel: 'Digital Event Invitations',
    metric: '98.6%',
    metricLabel: 'Instant Online RSVP Rate',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    summary: 'Bespoke royal wedding digital invitation web app with live RSVP, orchestral music, and venue GPS map.',
    fullDetails: {
      challenge: 'The couple wanted an eco-friendly luxury alternative to paper invites that could manage 400 VIP guests effortlessly.',
      solution: 'Growio designed an interactive 3D web card with custom background music, dietary selection, and auto calendar sync.',
      results: [
        '98.6% RSVP response rate within 48 hours',
        'Zero lost paper RSVPs, full automated guest list export',
        'Over 12,000 photo gallery views by guests post-event',
      ],
      techStack: ['React', 'Web Audio API', 'Google Maps API', 'CSS 3D', 'Supabase'],
    },
  },
  {
    id: 'hyper-fitness',
    title: 'HyperFit Performance Ad Scale Campaign',
    client: 'HyperFit Apparel & Tech',
    category: 'marketing',
    categoryLabel: 'Digital Marketing & SEO',
    metric: '$4.2M',
    metricLabel: 'Ad Revenue Driven (7.8x ROAS)',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    summary: 'Omnichannel Meta & TikTok paid acquisition engine paired with influencer growth loops.',
    fullDetails: {
      challenge: 'HyperFit faced stagnating return on ad spend (ROAS) and needed a fresh viral campaign framework.',
      solution: 'Deployed high-velocity video ad creative testing and hyper-targeted custom audience funnels.',
      results: [
        '7.8x average return on ad spend across Meta & TikTok',
        '$4.2M gross revenue generated in Q4',
        'Organic brand search volume increased by 210%',
      ],
      techStack: ['Meta Ads Manager', 'TikTok Ads API', 'Klaviyo', 'Shopify Plus', 'Google Analytics 4'],
    },
  },
  {
    id: 'cyber-summit',
    title: 'Growio Cyber Summit VIP Web Experience',
    client: 'Global Tech Network',
    category: 'invitations',
    categoryLabel: 'Digital Event Invitations',
    metric: '2,500+',
    metricLabel: 'Executive VIP Attendees',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    summary: 'High-tech conference digital pass web app with live speaker schedule, QR code entry, and networking chat.',
    fullDetails: {
      challenge: 'Organizers needed a seamless mobile-first VIP invitation and badge portal for international tech executives.',
      solution: 'Created a dark-mode cyber web card with dynamic countdown, schedule bookmarking, and instant wallet pass export.',
      results: [
        '100% digital check-in rate at entrance',
        'Over 2,500 VIP attendees onboarded cleanly',
      ],
      techStack: ['React', 'QR Code Engine', 'Framer Motion', 'Vercel'],
    },
  },
  {
    id: 'solaris-brand',
    title: 'Solaris Energy Rebrand & Web Platform',
    client: 'Solaris Renewable Inc.',
    category: 'branding',
    categoryLabel: 'Branding & Web Dev',
    metric: '12.4K',
    metricLabel: 'Monthly Inbound B2B Leads',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    summary: 'Full corporate rebrand, typography design system, and multi-region web platform build.',
    fullDetails: {
      challenge: 'Solaris needed to position themselves as a modern clean-energy market leader.',
      solution: 'We refreshed their entire visual identity with bold neon accents and launched a multi-language marketing platform.',
      results: [
        '12,400 monthly inbound B2B lead submissions',
        'Ranked #1 for core green energy keywords nationwide',
      ],
      techStack: ['Figma', 'React', 'Contentful CMS', 'Tailwind CSS'],
    },
  },
];

interface PortfolioSectionProps {
  onSelectProject: (project: PortfolioItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'web' | 'marketing' | 'invitations' | 'branding'>('all');

  const filteredProjects = filter === 'all'
    ? portfolioData
    : portfolioData.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="relative py-24 bg-[#070514] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#2200EE]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#2200EE]/10 border border-[#2200EE]/30 text-xs font-bold uppercase tracking-wider text-[#5533FF] mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>{t('Featured Case Studies', 'Ausgewählte Fallstudien')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t('Proof of', 'Nachweisbarer')}{' '}
            <span className="text-[#5533FF]">{t('Outsized Impact', 'Erfolg')}</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            {t(
              'Explore how our high-octane engineering, digital marketing campaigns, and interactive invitation apps drive undeniable revenue and engagement.',
              'Entdecken Sie, wie unsere Web-Entwicklung, Marketing-Kampagnen und interaktiven Einladungen echten Umsatz steigern.'
            )}
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: t('All Projects', 'Alle Projekte') },
            { id: 'web', label: t('Web Design & Dev', 'Webdesign & Dev') },
            { id: 'marketing', label: t('Digital Marketing & SEO', 'Digitales Marketing & SEO') },
            { id: 'invitations', label: t('Digital Event Invites', 'Digitale Einladungen') },
            { id: 'branding', label: t('Branding & Strategy', 'Branding & Strategie') },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-[#2200EE] text-white shadow-[0_0_15px_#2200EE] border border-[#5533FF]'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Showcase Grid (2 cards per row on mobile, 2 on tablet, 3 on desktop) */}
        <div className="mt-8 sm:mt-14 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                onClick={() => onSelectProject(project)}
                className="group relative rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden hover:border-[#2200EE]/60 transition-all duration-300 shadow-xl cursor-pointer flex flex-col justify-between"
              >
                {/* Image Showcase Container */}
                <div className="relative h-36 sm:h-60 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070514] via-[#070514]/40 to-transparent" />

                  {/* Category Pill Overlay */}
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                    <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md border border-white/15 text-white">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Metric Floating Badge */}
                  <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-[#2200EE] text-white px-2 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl shadow-lg border border-[#5533FF] flex items-center space-x-1 sm:space-x-2">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-300 shrink-0" />
                    <div>
                      <div className="text-xs sm:text-sm font-extrabold font-heading leading-none">
                        {project.metric}
                      </div>
                      <div className="text-[7px] sm:text-[9px] uppercase font-medium text-indigo-200 line-clamp-1">
                        {project.metricLabel}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-3 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] sm:text-xs font-semibold text-gray-400">
                      {project.client}
                    </div>
                    <h3 className="mt-1 text-xs sm:text-xl font-bold text-white group-hover:text-[#5533FF] transition-colors leading-snug line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-gray-300 line-clamp-2 leading-tight sm:leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Footer Action */}
                  <div className="mt-3 sm:mt-6 pt-2 sm:pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[9px] sm:text-xs font-bold text-gray-300 group-hover:text-white flex items-center space-x-1">
                      <span className="hidden sm:inline">{t('View Case Study Breakdown', 'Fallstudie Ansehen')}</span>
                      <span className="sm:hidden">{t('Case Study', 'Fallstudie')}</span>
                      <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-400" />
                    </span>
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-[#5533FF] transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
