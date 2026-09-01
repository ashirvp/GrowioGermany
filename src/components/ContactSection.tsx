import React, { useState } from 'react';
import { Zap, Send, CheckCircle2, Sparkles, Mail, Phone, Calendar, Globe, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GrowioLogo } from './GrowioLogo';
import { saveSubmissionToExcel } from '../utils/excelService';
import { useLanguage } from '../context/LanguageContext';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState('Website Design & Web App Build');
  const [selectedBudget, setSelectedBudget] = useState('$1,000 – $3,000');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    // Save submission details into Excel (.xlsx) spreadsheet
    saveSubmissionToExcel({
      name,
      email,
      company: company || 'N/A',
      serviceNeeded: selectedService,
      budget: selectedBudget,
      message: message || 'N/A',
      type: 'Inquiry',
    });

    setIsSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#2200EE', '#5533FF', '#EC4899', '#38BDF8', '#F59E0B'],
    });
  };

  return (
    <footer id="contact" className="relative pt-24 pb-12 bg-[#05030D] border-t border-white/10 overflow-hidden">
      {/* Background Lighting Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2200EE]/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Banner Grid: Call Out + Kickoff Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Agency Value Pitch (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#2200EE]/10 border border-[#2200EE]/30 text-xs font-bold uppercase tracking-wider text-[#5533FF]">
              <Zap className="w-3.5 h-3.5" />
              <span>{t('Full-Service Agency Kickoff', 'Full-Service Agentur Start')}</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {t('Ready to Scale Your Brand with', 'Bereit, Ihre Marke zu skalieren mit')}{' '}
              <span className="text-[#5533FF]">Growio?</span>
            </h2>

            <p className="text-base text-gray-300 leading-relaxed">
              {t(
                'Whether you’re launching a high-converting web app, scaling paid campaigns, or hosting an exclusive event with digital invitation cards — we handle everything under one roof.',
                'Egal ob Sie eine hochkonvertierende Web-App starten, bezahlte Kampagnen skalieren oder ein exklusives Event veranstalten — wir übernehmen alles aus einer Hand.'
              )}
            </p>

            {/* Value Guarantees */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-sm text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#5533FF] shrink-0" />
                <span>{t('End-to-End Execution — Design, Dev, Ads & Copy', 'End-to-End Umsetzung — Design, Dev, Ads & Texting')}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#5533FF] shrink-0" />
                <span>{t('Dedicated Senior Growth Strategist & Account Lead', 'Dedizierter Senior Wachstumsspezialist & Ansprechpartner')}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#5533FF] shrink-0" />
                <span>{t('Rapid Turnaround Time', 'Schnelle Umsetzungszeiten')}</span>
              </div>
            </div>

            {/* Quick Contact, Social & Calendar Option */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <a
                href="mailto:growio.eu@gmail.com"
                className="flex items-center space-x-3 text-sm text-gray-300 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#5533FF] group-hover:scale-110 transition-transform" />
                <span>growio.eu@gmail.com</span>
              </a>
              <a
                href="tel:+4917667454311"
                className="flex items-center space-x-3 text-sm text-gray-300 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#5533FF] group-hover:scale-110 transition-transform" />
                <span>+49 176 67454311</span>
              </a>
              <a
                href="https://www.instagram.com/growio.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm text-gray-300 hover:text-pink-400 transition-colors group"
              >
                <InstagramIcon className="w-4 h-4 text-pink-500 group-hover:scale-110 transition-transform" />
                <span>@growio.eu</span>
              </a>

              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-white/5 border border-white/15 hover:border-[#2200EE] text-xs font-bold text-gray-200 hover:text-white transition-all"
                >
                  <Calendar className="w-4 h-4 text-pink-400" />
                  <span>{t('Prefer a live call? Schedule meeting ⚡', 'Bevorzugen Sie ein Gespräch? Termin buchen ⚡')}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Interactive Form (7 Cols) */}
          <div className="lg:col-span-7 bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-xl shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-extrabold text-white">{t('Project Inquiry Received & Saved!', 'Projektanfrage Erhalten & Gespeichert!')}</h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  {t('Thank you, ', 'Vielen Dank, ')}<span className="text-white font-bold">{name}</span>! {t('Your details have been saved directly to your ', 'Ihre Daten wurden direkt in Ihr ')}<span className="text-emerald-400 font-bold">Google Sheet</span> {t('and our lead strategist will respond within 4 business hours.', 'gespeichert und wir melden uns innerhalb von 4 Stunden.')}
                </p>
                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2.5 rounded-full bg-[#2200EE] text-white text-xs font-bold shadow-[0_0_15px_#2200EE]"
                  >
                    {t('Submit Another Project Inquiry', 'Weitere Anfrage Senden')}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-yellow-300" />
                  <h3 className="text-xl font-bold text-white">{t('Launch Your Project Inquiry', 'Projektanfrage Starten')}</h3>
                </div>

                {/* Service Selection Pills */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    {t('1. Which service do you need?', '1. Welchen Service benötigen Sie?')}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      t('Website Design & Web App Build', 'Webdesign & Web-App Entwicklung'),
                      t('Digital Marketing & Paid Ads', 'Digitales Marketing & Werbeanzeigen'),
                      t('Digital Invitation Cards / Event App', 'Digitale Einladungskarten / Event-App'),
                      t('Full-Service "We Handle Everything"', 'Full-Service "Wir Übernehmen Alles"'),
                    ].map((srv) => (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => setSelectedService(srv)}
                        className={`p-3 rounded-xl text-xs font-bold text-left transition-all ${
                          selectedService === srv
                            ? 'bg-[#2200EE] text-white shadow-[0_0_15px_#2200EE] border border-[#5533FF]'
                            : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Selection Pills */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    {t('2. Estimated Project Budget:', '2. Geschätztes Projektbudget:')}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['< $1,000', '$1,000 – $3,000', '$3,000 – $7,500', '$7,500+'].map((bgt) => (
                      <button
                        key={bgt}
                        type="button"
                        onClick={() => setSelectedBudget(bgt)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold text-center transition-all ${
                          selectedBudget === bgt
                            ? 'bg-[#2200EE] text-white shadow-[0_0_15px_#2200EE] border border-[#5533FF]'
                            : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
                        }`}
                      >
                        {bgt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* User Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">{t('Your Name *', 'Ihr Name *')}</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-xs focus:outline-none focus:border-[#2200EE]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">{t('Work Email *', 'Arbeits-E-Mail *')}</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-xs focus:outline-none focus:border-[#2200EE]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">{t('Company / Event Name', 'Unternehmen / Event-Name')}</label>
                  <input
                    type="text"
                    placeholder={t('Acme Corp or Sterling Wedding', 'z.B. Acme GmbH oder Traumhochzeit')}
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-xs focus:outline-none focus:border-[#2200EE]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">{t('Project Notes / Goals', 'Projektnotizen / Ziele')}</label>
                  <textarea
                    rows={3}
                    placeholder={t('Tell us about your project goals, timelines, or specific feature requests...', 'Beschreiben Sie Ihre Projektziele, Zeitpläne oder Wünsche...')}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-xs focus:outline-none focus:border-[#2200EE]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#2200EE] hover:bg-[#1C00C8] text-white font-extrabold text-sm shadow-[0_0_30px_rgba(34,0,238,0.7)] hover:shadow-[0_0_45px_rgba(85,51,255,0.9)] transition-all flex items-center justify-center space-x-2 group"
                >
                  <span>{t('Submit Inquiry & Activate Growth ⚡', 'Anfrage Absenden & Wachstum Aktivieren ⚡')}</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Navigation & Copyright */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <GrowioLogo size="sm" />
            <span className="text-xs text-gray-400 font-medium border-l border-white/10 pl-4">
              Full-Service Marketing Agency
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#invitations" className="hover:text-white transition-colors">Digital Invites</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#process" className="hover:text-white transition-colors">Our Process</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3 text-gray-400">
            <a
              href="https://www.instagram.com/growio.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-1.5 border border-white/10 hover:border-transparent group"
              title="Follow @growio.eu on Instagram"
            >
              <InstagramIcon className="w-4 h-4 text-pink-400 group-hover:text-white transition-colors" />
              <span className="text-xs font-semibold pr-1">@growio.eu</span>
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition-colors border border-white/10">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition-colors border border-white/10">
              <Share2 className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-[11px] text-gray-500">
          © {new Date().getFullYear()} Growio Agency Inc. All rights reserved. Powered by High-Octane Motion & Web Engineering.
        </div>
      </div>
    </footer>
  );
};
