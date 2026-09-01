import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, CheckCircle } from 'lucide-react';
import kareemAvatar from '../assets/kareem.jpg';
import { useLanguage } from '../context/LanguageContext';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  highlightMetric: string;
  serviceUsed: string;
  rating: number;
}

export const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialsData: Testimonial[] = [
    {
      id: 't1',
      name: 'Kareem Z',
      role: 'CEO',
      company: 'Washengel Nürnberg',
      avatar: kareemAvatar,
      content: t(
        'Growio completely transformed our digital presence and marketing campaigns for Washengel Nuremberg. Their high-performance website and targeted acquisition funnels drove unprecedented customer bookings!',
        'Growio hat unsere digitale Präsenz und Marketingkampagnen für Washengel Nürnberg komplett transformiert. Die High-Performance-Website und gezielten Kampagnen führten zu beispiellosen Buchungen!'
      ),
      highlightMetric: t('+280% Booking Growth', '+280% Buchungswachstum'),
      serviceUsed: t('Website Design & Performance Marketing', 'Webdesign & Performance Marketing'),
      rating: 5,
    },
    {
      id: 't2',
      name: 'Marcus & Sophia Sterling',
      role: t('Event Hosts & Founders', 'Event-Gastgeber & Gründer'),
      company: 'Sterling Global Estate',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      content: t(
        'The digital wedding invitation card Growio built for our Malibu event was stunning! Over 400 VIP guests praised the live RSVP, background soundtrack, and instant calendar syncing. Zero stress!',
        'Die digitale Hochzeitseinladung von Growio war atemberaubend! Über 400 VIP-Gäste waren von Live-RSVP, Musik und Kalender-Sync begeistert. Absolut stressfrei!'
      ),
      highlightMetric: t('98.6% Instant RSVP Rate', '98,6% Sofortige Zusage-Quote'),
      serviceUsed: t('Digital Event Invitations', 'Digitale Event-Einladungen'),
      rating: 5,
    },
    {
      id: 't3',
      name: 'David Vance',
      role: t('Head of Growth', 'Leiter Wachstum'),
      company: 'HyperFit Apparel',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      content: t(
        'Working with Growio is like having an elite internal growth team. They scaled our ad campaigns on Meta and TikTok to a 7.8x ROAS while producing jaw-dropping video creative content.',
        'Die Zusammenarbeit mit Growio ist wie ein internes Elite-Marketingteam. Sie haben unsere Kampagnen auf Meta und TikTok auf einen 7,8x ROAS skaliert!'
      ),
      highlightMetric: t('7.8x ROAS / $4.2M Revenue', '7,8x ROAS / $4,2M Umsatz'),
      serviceUsed: t('Digital Marketing & Paid Ads', 'Digitales Marketing & Performance Ads'),
      rating: 5,
    },
    {
      id: 't4',
      name: 'Samantha Wright',
      role: t('VP of Global Events', 'Leiterin Globale Events'),
      company: 'Cyber Tech Network',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      content: t(
        'Growio’s full-service team handles everything from graphic design and web portals to paid event promotion. They delivered a seamless 2,500-attendee digital pass experience!',
        'Das Full-Service-Team von Growio übernimmt alles von Design und Webportalen bis hin zu Werbung. Sie haben 2.500 Teilnehmer nahtlos begleitet!'
      ),
      highlightMetric: t('2,500+ Executive Attendees', '2.500+ VIP-Teilnehmer'),
      serviceUsed: t('Full-Service 360° Package', 'Full-Service 360° Paket'),
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonialsData.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="relative py-24 bg-[#070514] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#2200EE]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#2200EE]/10 border border-[#2200EE]/30 text-xs font-bold uppercase tracking-wider text-[#5533FF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('Client Testimonials', 'Kundenstimmen')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t('Trusted by', 'Vertraut von')}{' '}
            <span className="text-[#5533FF]">{t('Visionary Brands & Event Hosts', 'führenden Marken & Event-Veranstaltern')}</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            {t(
              'Hear why leading founders, CMOs, and event hosts partner with Growio for high-velocity execution.',
              'Erfahren Sie, warum Gründer, CMOs und Veranstalter mit Growio für schnelle Umsetzung zusammenarbeiten.'
            )}
          </p>
        </div>

        {/* Testimonials Carousel Box */}
        <div className="mt-8 sm:mt-16 max-w-4xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 p-5 sm:p-12 backdrop-blur-xl shadow-2xl overflow-hidden">
            <Quote className="absolute top-4 right-4 sm:top-6 sm:right-8 w-14 h-14 sm:w-24 sm:h-24 text-white/[0.03] pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-3 sm:space-y-6"
              >
                {/* Metric Highlight Badge & Star Rating */}
                <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4">
                  <div className="flex items-center space-x-0.5 sm:space-x-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <span className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#2200EE] text-white text-[10px] sm:text-xs font-bold shadow-[0_0_15px_#2200EE] flex items-center space-x-1 sm:space-x-1.5">
                    <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-300 shrink-0" />
                    <span>Result: {current.highlightMetric}</span>
                  </span>
                </div>

                {/* Quote Content */}
                <p className="text-xs xs:text-sm sm:text-2xl font-medium text-white leading-normal sm:leading-relaxed italic">
                  "{current.content}"
                </p>

                {/* Author Info */}
                <div className="pt-3 sm:pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      loading="lazy"
                      decoding="async"
                      className="w-10 h-10 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-[#2200EE] shrink-0"
                    />
                    <div>
                      <h4 className="text-xs sm:text-lg font-bold text-white leading-tight">{current.name}</h4>
                      <p className="text-[10px] sm:text-xs text-gray-300 leading-tight">
                        {current.role} — <span className="text-[#5533FF] font-semibold">{current.company}</span>
                      </p>
                      <div className="text-[9px] sm:text-[11px] text-gray-400 mt-0.5">
                        Service: {current.serviceUsed}
                      </div>
                    </div>
                  </div>

                  {/* Carousel Controls */}
                  <div className="flex items-center space-x-1.5 sm:space-x-2">
                    <button
                      onClick={prevTestimonial}
                      className="p-2 sm:p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 hover:text-white transition-all"
                      aria-label="Previous Testimonial"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2 sm:p-3 rounded-full bg-[#2200EE] hover:bg-[#1C00C8] text-white shadow-[0_0_15px_#2200EE] transition-all"
                      aria-label="Next Testimonial"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="mt-8 flex justify-center space-x-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-[#2200EE]' : 'w-2 bg-white/20'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
