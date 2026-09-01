import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Zap, ShieldCheck, Clock } from 'lucide-react';
import type { ServiceItem } from './ServicesSection';
import { useLanguage } from '../context/LanguageContext';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onOpenBooking }) => {
  const { t } = useLanguage();
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-[#0D0A26] border border-[#2200EE]/50 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-all z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10">
              {service.icon}
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-gray-400">
                {service.category}
              </span>
              <h3 className="text-2xl font-extrabold text-white leading-tight">
                {service.title}
              </h3>
            </div>
          </div>

          <p className="text-sm font-semibold text-[#5533FF] mb-4">
            {service.tagline}
          </p>

          <p className="text-xs text-gray-300 leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Deliverables Checklist */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 mb-6">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              {t('Included Deliverables & Scope:', 'Enthaltene Leistungen & Umfang:')}
            </div>
            <ul className="space-y-2.5">
              {service.features.map((feat, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-xs text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#5533FF] shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SLA & Timeline Info */}
          <div className="grid grid-cols-2 gap-3 text-xs mb-6">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <div>
                <div className="font-bold text-white">{t('Estimated Timeline', 'Geschätzte Dauer')}</div>
                <div className="text-[11px] text-gray-400">{t('2 to 4 Weeks Sprint', '2 bis 4 Wochen Sprint')}</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <div>
                <div className="font-bold text-white">{t('Quality Guarantee', 'Qualitätsgarantie')}</div>
                <div className="text-[11px] text-gray-400">{t('100% Satisfaction SLA', '100% Zufriedenheits-SLA')}</div>
              </div>
            </div>
          </div>

          {/* Bottom Action */}
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full py-3.5 rounded-full bg-[#2200EE] hover:bg-[#1C00C8] text-white text-xs sm:text-sm font-extrabold shadow-[0_0_20px_rgba(34,0,238,0.6)] transition-all flex items-center justify-center space-x-2 whitespace-nowrap"
          >
            <span>{t('Request Proposal ⚡', 'Angebot Anfordern ⚡')}</span>
            <Zap className="w-4 h-4 text-yellow-300 fill-yellow-300 group-hover:scale-125 transition-transform" />
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
