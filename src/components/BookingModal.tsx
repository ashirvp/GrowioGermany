import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Video, CheckCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { saveSubmissionToExcel } from '../utils/excelService';
import { useLanguage } from '../context/LanguageContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [selectedDate, setSelectedDate] = useState('Tomorrow at 2:00 PM EST');
  const [selectedTopic, setSelectedTopic] = useState('Website Design & Web App Build');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [booked, setBooked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    saveSubmissionToExcel({
      name,
      email,
      serviceNeeded: selectedTopic,
      message: `Booking call on ${selectedDate}`,
      type: 'Booking',
    });

    setBooked(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#2200EE', '#5533FF', '#38BDF8'],
    });
  };

  const handleClose = () => {
    setBooked(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-lg bg-[#0D0A26] border border-[#2200EE]/50 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {booked ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-extrabold text-white">{t('Strategy Call Confirmed!', 'Strategiegespräch Bestätigt!')}</h3>
              <p className="text-sm text-gray-300">
                {t('Thank you, ', 'Vielen Dank, ')}<span className="text-white font-bold">{name}</span>. {t('A calendar invitation and link have been sent to', 'Die Kalendereinladung wurde gesendet an')} <span className="text-[#5533FF] font-semibold">{email}</span>.
              </p>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-300 text-left space-y-1">
                <div><span className="font-bold text-white">{t('Date:', 'Datum:')}</span> {selectedDate}</div>
                <div><span className="font-bold text-white">{t('Topic:', 'Thema:')}</span> {selectedTopic}</div>
                <div><span className="font-bold text-white">{t('Host:', 'Gastgeber:')}</span> Senior Growth Strategist @ Growio</div>
              </div>
              <button
                onClick={handleClose}
                className="w-full py-3 rounded-xl bg-[#2200EE] text-white font-bold text-sm shadow-[0_0_20px_#2200EE]"
              >
                {t('Back to Site ⚡', 'Zurück zur Website ⚡')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-xl bg-[#2200EE]/20 border border-[#2200EE]/40 text-[#5533FF]">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">{t('Book 15-Min Strategy Session', '15-Min Strategiegespräch Buchen')}</h3>
                  <p className="text-xs text-gray-400">{t('1-on-1 with a Senior Strategist — No fluff.', '1-zu-1 mit einem Senior Strategen — Direkt zum Punkt.')}</p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  {t('Primary Focus:', 'Hauptfokus:')}
                </label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white text-xs focus:outline-none focus:border-[#2200EE]"
                >
                  <option value="Website Design & Web App Build">{t('Website Design & Web App Build', 'Webdesign & Web-App Entwicklung')}</option>
                  <option value="Digital Marketing & Performance SEO">{t('Digital Marketing & Performance SEO', 'Digitales Marketing & Performance SEO')}</option>
                  <option value="Digital Invitation Web Cards">{t('Digital Invitation Web Cards', 'Digitale Einladungskarten')}</option>
                  <option value="Full-Service Agency Package">{t('Full-Service Agency Package', 'Full-Service Paket "Wir Übernehmen Alles"')}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  {t('Preferred Date & Time Slot:', 'Bevorzugter Termin:')}
                </label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white text-xs focus:outline-none focus:border-[#2200EE]"
                >
                  <option value="Tomorrow at 2:00 PM EST">{t('Tomorrow at 2:00 PM', 'Morgen um 14:00 Uhr')}</option>
                  <option value="Thursday at 11:00 AM EST">{t('Thursday at 11:00 AM', 'Donnerstag um 11:00 Uhr')}</option>
                  <option value="Friday at 4:30 PM EST">{t('Friday at 4:30 PM', 'Freitag um 16:30 Uhr')}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">{t('Your Full Name:', 'Ihr Vollständiger Name:')}</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. David Miller"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white text-xs focus:outline-none focus:border-[#2200EE]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">{t('Work Email Address:', 'Arbeits-E-Mail-Adresse:')}</label>
                <input
                  type="email"
                  required
                  placeholder="david@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white text-xs focus:outline-none focus:border-[#2200EE]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#2200EE] hover:bg-[#1C00C8] text-white text-xs font-bold shadow-[0_0_20px_rgba(34,0,238,0.6)] transition-all flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>{t('Confirm Strategy Booking ⚡', 'Strategiegespräch Bestätigen ⚡')}</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
