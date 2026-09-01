import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Zap } from 'lucide-react';
import type { PortfolioItem } from './PortfolioSection';
import { useLanguage } from '../context/LanguageContext';

interface CaseStudyModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onOpenBooking }) => {
  const { t } = useLanguage();
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0D0A26] border border-[#2200EE]/50 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-all z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Header */}
          <div className="relative h-52 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A26] via-[#0D0A26]/50 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 border border-white/15 text-white">
                  {project.categoryLabel}
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-2 leading-tight">
                  {project.title}
                </h3>
              </div>
              <div className="bg-[#2200EE] text-white px-3 py-1.5 rounded-xl shadow-lg border border-[#5533FF] shrink-0">
                <div className="text-lg font-bold">{project.metric}</div>
                <div className="text-[9px] uppercase font-semibold text-indigo-200">{project.metricLabel}</div>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-sm text-gray-300">
            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-rose-400">
                  {t('The Client Challenge:', 'Kunden-Herausforderung:')}
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {project.fullDetails.challenge}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  {t('Growio Execution:', 'Growio Umsetzung:')}
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {project.fullDetails.solution}
                </p>
              </div>
            </div>

            {/* Results Bullet Points */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#5533FF]">
                {t('Verified Business Outcomes:', 'Verifizierte Ergebnisse:')}
              </div>
              <ul className="space-y-2">
                {project.fullDetails.results.map((res, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-xs text-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                {t('Technologies & Tools Used:', 'Verwendete Technologien:')}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.fullDetails.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="flex-1 py-3 rounded-full bg-[#2200EE] hover:bg-[#1C00C8] text-white text-xs font-bold shadow-[0_0_20px_#2200EE] transition-all flex items-center justify-center space-x-1.5"
              >
                <Zap className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                <span>{t('Build Similar Experience for Your Brand ⚡', 'Ähnliches Projekt für Ihre Marke Bauen ⚡')}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
