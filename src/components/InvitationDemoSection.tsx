import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, RotateCw, Calendar as CalendarIcon, MapPin, Music, Volume2, VolumeX, CheckCircle, Sparkles, Send, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';

interface EventTemplate {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  title: string;
  hosts: string;
  date: string;
  time: string;
  location: string;
  address: string;
  themeColor: string;
  cardBg: string;
  icon: string;
  musicTrack: string;
}

export const InvitationDemoSection: React.FC = () => {
  const { t } = useLanguage();

  const templates: EventTemplate[] = [
    {
      id: 'wedding',
      name: t('Luxury Royal Wedding', 'Luxus Traumhochzeit'),
      badge: t('Romantic Elegance', 'Romantische Eleganz'),
      tagline: t('Join us for an unforgettable celebration of love.', 'Feiern Sie mit uns ein unvergessliches Fest der Liebe.'),
      title: 'Aurelius & Sophia',
      hosts: 'The Vance & Sterling Families',
      date: t('Saturday, October 24, 2026', 'Samstag, 24. Oktober 2026'),
      time: '16:00 Uhr',
      location: 'The Glass Pavilion at Grand Estate',
      address: '450 Oceanside Drive, Malibu, CA',
      themeColor: '#EC4899',
      cardBg: 'from-slate-900 via-pink-950/40 to-purple-950',
      icon: '💍',
      musicTrack: 'Acoustic Love Symphony',
    },
    {
      id: 'corporate',
      name: t('Cyber Tech VIP Gala', 'Cyber Tech VIP Gala'),
      badge: t('Corporate / VIP', 'Business / VIP'),
      tagline: t('Exclusive networking, keynote showcases & cocktail reception.', 'Exklusives Networking, Keynote Showcases & Empfang.'),
      title: 'GROWIO CYBER SUMMIT',
      hosts: 'Growio Global Agency',
      date: t('Thursday, November 12, 2026', 'Donnerstag, 12. November 2026'),
      time: '18:30 Uhr',
      location: 'Metropolis Tech Center & Rooftop',
      address: '88 Tech Boulevard, San Francisco, CA',
      themeColor: '#2200EE',
      cardBg: 'from-slate-950 via-indigo-950 to-blue-950',
      icon: '⚡',
      musicTrack: 'Future Electronic Chill',
    },
    {
      id: 'birthday',
      name: t('Neon Festival Birthday', 'Neon Festival Geburtstag'),
      badge: t('High Energy', 'High Energy'),
      tagline: t('30 Years of Greatness. DJs, Open Bar & Neon Glow.', '30 Jahre Großartigkeit. DJs, Open Bar & Neon Glow.'),
      title: 'ALEX’S NEON BASH 30',
      hosts: 'Alex & Friends',
      date: t('Friday, December 18, 2026', 'Freitag, 18. Dezember 2026'),
      time: '21:00 Uhr',
      location: 'The Underground Lounge',
      address: '120 Midnight Ave, New York, NY',
      themeColor: '#10B981',
      cardBg: 'from-[#070514] via-emerald-950/40 to-cyan-950',
      icon: '🎉',
      musicTrack: 'High Octane Synthwave',
    },
  ];

  const [selectedTemplate, setSelectedTemplate] = useState<EventTemplate>(templates[0]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [customTitle, setCustomTitle] = useState(selectedTemplate.title);
  const [customDate, setCustomDate] = useState(selectedTemplate.date);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  
  // Interactive RSVP State
  const [guestName, setGuestName] = useState('');
  const [attendance, setAttendance] = useState<'yes' | 'no'>('yes');
  const [guestCount, setGuestCount] = useState('1');
  const [submittedRsvp, setSubmittedRsvp] = useState(false);

  const handleTemplateSelect = (template: EventTemplate) => {
    setSelectedTemplate(template);
    setCustomTitle(template.title);
    setCustomDate(template.date);
    setIsFlipped(false);
    setSubmittedRsvp(false);
  };

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    setSubmittedRsvp(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2200EE', '#5533FF', '#EC4899', '#38BDF8', '#F59E0B'],
    });
  };

  return (
    <section id="invitations" className="relative py-24 bg-[#09071A] border-y border-white/10 overflow-hidden">
      {/* Glow Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#2200EE]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-xs font-bold uppercase tracking-wider text-pink-400 mb-4">
            <PartyPopper className="w-3.5 h-3.5" />
            <span>{t('Interactive Web Cards Line', 'Interaktive Web-Karten')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t('Next-Gen Digital Event', 'Zukunftsweisende Digitale')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-300 to-[#5533FF]">
              {t('Invitation Web Apps', 'Event-Einladungskarten')}
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            {t(
              'Ditch flat paper invitations. We craft immersive 3D web invitation cards complete with live RSVP tracking, custom soundtrack audio, instant calendar links & interactive maps.',
              'Vergessen Sie langweilige Papier-Einladungen. Wir gestalten interaktive 3D-Einladungskarten mit Live-RSVP, Musik, Kalender-Links & Karten.'
            )}
          </p>
        </div>

        {/* Template Selector Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {templates.map((tpl) => (
            <button
              key={tpl.id}
              onClick={() => handleTemplateSelect(tpl)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center space-x-2 ${
                selectedTemplate.id === tpl.id
                  ? 'bg-[#2200EE] text-white shadow-[0_0_20px_rgba(34,0,238,0.6)] border border-[#5533FF]'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>{tpl.icon}</span>
              <span>{tpl.name}</span>
              <span className="px-2 py-0.5 text-[10px] rounded-full bg-white/10 text-gray-300">
                {tpl.badge}
              </span>
            </button>
          ))}
        </div>

        {/* Main Grid: Control Sandbox + 3D Flip Card Demo */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Controls & Customizer Sandbox (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 bg-white/[0.03] border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <h3 className="text-lg font-bold text-white">{t('Live Customizer Sandbox', 'Live Vorschau-Editor')}</h3>
              </div>
              <span className="text-xs text-gray-400">{t('Try Editing Below 👇', 'Unten Bearbeiten 👇')}</span>
            </div>

            {/* Title Input */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                {t('Event Title / Host Name:', 'Event-Titel / Gastgeber:')}
              </label>
              <input
                type="text"
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-sm focus:outline-none focus:border-[#2200EE]"
              />
            </div>

            {/* Date Input */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                {t('Event Schedule / Date:', 'Event-Datum / Uhrzeit:')}
              </label>
              <input
                type="text"
                value={customDate}
                onChange={(e) => setCustomDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-sm focus:outline-none focus:border-[#2200EE]"
              />
            </div>

            {/* Music Audio Toggle */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                  className={`p-2.5 rounded-full transition-all ${
                    isPlayingMusic ? 'bg-[#2200EE] text-white shadow-[0_0_15px_#2200EE]' : 'bg-white/10 text-gray-400'
                  }`}
                >
                  {isPlayingMusic ? <Volume2 className="w-5 h-5 animate-pulse" /> : <VolumeX className="w-5 h-5" />}
                </button>
                <div>
                  <div className="text-xs font-bold text-white flex items-center space-x-1.5">
                    <Music className="w-3.5 h-3.5 text-pink-400" />
                    <span>{selectedTemplate.musicTrack}</span>
                  </div>
                  <div className="text-[11px] text-gray-400">
                    {isPlayingMusic ? t('🎵 Audio Playing Preview...', '🎵 Audio wird abgespielt...') : t('Click to preview ambient track', 'Klicken für Audio-Vorschau')}
                  </div>
                </div>
              </div>
              
              {isPlayingMusic && (
                <div className="flex items-end space-x-1 h-5">
                  <span className="w-1 bg-pink-500 animate-bounce h-full rounded-full" style={{ animationDelay: '0.1s' }} />
                  <span className="w-1 bg-[#2200EE] animate-bounce h-3/4 rounded-full" style={{ animationDelay: '0.3s' }} />
                  <span className="w-1 bg-cyan-400 animate-bounce h-4/5 rounded-full" style={{ animationDelay: '0.2s' }} />
                </div>
              )}
            </div>

            {/* Flip Card Action Trigger */}
            <div className="pt-2">
              <button
                onClick={() => setIsFlipped(!isFlipped)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#2200EE] to-[#5533FF] text-white font-bold text-sm shadow-lg hover:shadow-[0_0_25px_rgba(85,51,255,0.7)] transition-all flex items-center justify-center space-x-2"
              >
                <RotateCw className={`w-4 h-4 transition-transform duration-500 ${isFlipped ? 'rotate-180' : ''}`} />
                <span>{isFlipped ? t('Flip Card to Front Artwork ⚡', 'Karte zur Vorderseite drehen ⚡') : t('Flip Card to RSVP Form Demo ⚡', 'Karte zur RSVP-Zusage drehen ⚡')}</span>
              </button>
            </div>
          </div>

          {/* 3D Flip Card Viewport (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <div className="perspective-1000 w-full max-w-[310px] sm:max-w-md h-[460px] sm:h-[540px]">
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="w-full h-full transform-style-3d relative cursor-pointer"
                onClick={() => setIsFlipped(!isFlipped)}
              >
                {/* FRONT OF THE CARD */}
                <div
                  className={`absolute inset-0 w-full h-full rounded-2xl sm:rounded-3xl p-5 sm:p-8 bg-gradient-to-b ${selectedTemplate.cardBg} border-2 border-white/20 shadow-2xl flex flex-col justify-between overflow-hidden backface-hidden transition-opacity duration-300 ${
                    isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
                  }`}
                >
                  {/* Subtle Shimmer Overlays */}
                  <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                  {/* Top Bar */}
                  <div className="flex items-center justify-between z-10">
                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white/10 text-white border border-white/15">
                      {selectedTemplate.badge}
                    </span>
                    <span className="text-xl sm:text-2xl">{selectedTemplate.icon}</span>
                  </div>

                  {/* Center Main Invitation Info */}
                  <div className="text-center my-auto z-10 space-y-2 sm:space-y-4">
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-300 font-semibold">
                      {t('You Are Cordially Invited To', 'Sie Sind Herzlich Eingeladen Zu')}
                    </p>

                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight leading-tight glow-text-primary">
                      {customTitle}
                    </h3>

                    <p className="text-[11px] sm:text-xs text-indigo-200 italic">
                      "{selectedTemplate.tagline}"
                    </p>

                    <div className="pt-2 sm:pt-4 border-t border-white/10 max-w-xs mx-auto space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs text-gray-200">
                      <div className="flex items-center justify-center space-x-2">
                        <CalendarIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-400" />
                        <span className="font-semibold">{customDate}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5533FF]" />
                        <span>{selectedTemplate.time}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-gray-300">
                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                        <span>{selectedTemplate.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Card Footer */}
                  <div className="z-10 pt-2.5 sm:pt-4 border-t border-white/15 flex items-center justify-between text-[10px] sm:text-xs text-gray-300">
                    <span className="flex items-center space-x-1 text-gray-400">
                      <span>{t('Click card to flip', 'Klicken zum Drehen')}</span>
                      <RotateCw className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#5533FF]" />
                    </span>

                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#2200EE]/60 text-white text-[10px] sm:text-[11px] font-bold shadow-md">
                      {t('RSVP Online Available', 'Online RSVP Verfügbar')}
                    </span>
                  </div>
                </div>

                {/* BACK OF THE CARD (Interactive RSVP Form) */}
                <div
                  className={`absolute inset-0 w-full h-full rounded-2xl sm:rounded-3xl p-5 sm:p-8 bg-[#0D0A26] border-2 border-[#2200EE]/50 shadow-2xl flex flex-col justify-between overflow-hidden rotate-y-180 backface-hidden transition-opacity duration-300 ${
                    !isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
                  }`}
                  onClick={(e) => e.stopPropagation()} // don't flip when filling form
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center space-x-2">
                      <Send className="w-4 h-4 text-[#5533FF]" />
                      <span className="text-sm font-bold text-white">{t('Instant RSVP Portal', 'Sofortiges RSVP Portal')}</span>
                    </div>
                    <button
                      onClick={() => setIsFlipped(false)}
                      className="px-2.5 py-1 text-xs font-semibold rounded-full bg-white/10 text-gray-300 hover:text-white"
                    >
                      {t('Close Back ✕', 'Schließen ✕')}
                    </button>
                  </div>

                  {submittedRsvp ? (
                    <div className="my-auto text-center py-8 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                        <CheckCircle className="w-10 h-10" />
                      </div>
                      <h4 className="text-2xl font-extrabold text-white">{t('RSVP Received!', 'RSVP Erhalten!')}</h4>
                      <p className="text-xs text-gray-300 max-w-xs mx-auto">
                        {t('Thank you, ', 'Vielen Dank, ')}<span className="text-white font-bold">{guestName}</span>! {t('Your attendance status has been saved and synced to event hosts.', 'Ihre Zusage wurde gespeichert und an den Gastgeber übermittelt.')}
                      </p>
                      
                      <div className="pt-2 flex justify-center gap-2">
                        <button
                          onClick={() => alert('Calendar event simulation: Added to Google/Apple Calendar!')}
                          className="px-4 py-2 rounded-full bg-white/10 text-xs text-white font-semibold hover:bg-white/20 transition-all flex items-center space-x-1"
                        >
                          <CalendarIcon className="w-3.5 h-3.5 text-[#5533FF]" />
                          <span>{t('Add to Calendar', 'In Kalender Speichern')}</span>
                        </button>
                        <button
                          onClick={() => setSubmittedRsvp(false)}
                          className="px-4 py-2 rounded-full bg-[#2200EE] text-xs text-white font-semibold"
                        >
                          {t('Reset Demo', 'Demo Zurücksetzen')}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleRsvpSubmit} className="my-auto space-y-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-gray-300 mb-1">
                          {t('Full Name / Guest Name:', 'Vollständiger Name / Gast:')}
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Sarah Jenkins"
                          value={guestName}
                          onChange={(e) => setGuestName(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/15 text-white text-xs focus:outline-none focus:border-[#2200EE]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-gray-300 mb-1">
                          {t('Will You Attend?', 'Teilnahme Bestätigen?')}
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setAttendance('yes')}
                            className={`py-2 rounded-lg text-xs font-bold transition-all ${
                              attendance === 'yes'
                                ? 'bg-emerald-600 text-white shadow-md'
                                : 'bg-white/5 border border-white/10 text-gray-400'
                            }`}
                          >
                            {t('Joyfully Accepts ✨', 'Zusage ✨')}
                          </button>
                          <button
                            type="button"
                            onClick={() => setAttendance('no')}
                            className={`py-2 rounded-lg text-xs font-bold transition-all ${
                              attendance === 'no'
                                ? 'bg-rose-600 text-white shadow-md'
                                : 'bg-white/5 border border-white/10 text-gray-400'
                            }`}
                          >
                            {t('Regretfully Declines', 'Absage')}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-gray-300 mb-1">
                          {t('Number of Guests:', 'Anzahl der Gäste:')}
                        </label>
                        <select
                          value={guestCount}
                          onChange={(e) => setGuestCount(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/15 text-white text-xs focus:outline-none focus:border-[#2200EE]"
                        >
                          <option value="1">{t('1 Person (Just Me)', '1 Person (Nur ich)')}</option>
                          <option value="2">{t('2 Persons (+1 Guest)', '2 Personen (+1 Begleitung)')}</option>
                          <option value="3">{t('3 Persons (Family)', '3 Personen (Familie)')}</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-[#2200EE] to-[#5533FF] text-white font-extrabold text-xs shadow-md hover:shadow-[0_0_20px_#2200EE] transition-all flex items-center justify-center space-x-1.5"
                      >
                        <span>{t('Confirm RSVP Demo', 'RSVP Zusage Bestätigen')}</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  )}

                  <div className="pt-2 border-t border-white/10 text-center text-[10px] text-gray-400">
                    {t('Powered by Growio Digital Experience Engine', 'Powered by Growio Digital Experience Engine')}
                  </div>
                </div>
              </motion.div>
            </div>
            
            <p className="mt-4 text-xs text-gray-400 flex items-center space-x-1">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              <span>Interactive preview: Edit settings on the left & click the card to flip!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
