import React, { useState, lazy, Suspense } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import type { ServiceItem } from './components/ServicesSection';
import type { PortfolioItem } from './components/PortfolioSection';

// Lazy loaded components for instant initial page render & optimal speed
const ServicesSection = lazy(() => import('./components/ServicesSection').then(m => ({ default: m.ServicesSection })));
const InvitationDemoSection = lazy(() => import('./components/InvitationDemoSection').then(m => ({ default: m.InvitationDemoSection })));
const PortfolioSection = lazy(() => import('./components/PortfolioSection').then(m => ({ default: m.PortfolioSection })));
const ProcessSection = lazy(() => import('./components/ProcessSection').then(m => ({ default: m.ProcessSection })));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const ContactSection = lazy(() => import('./components/ContactSection').then(m => ({ default: m.ContactSection })));

const BookingModal = lazy(() => import('./components/BookingModal').then(m => ({ default: m.BookingModal })));
const CaseStudyModal = lazy(() => import('./components/CaseStudyModal').then(m => ({ default: m.CaseStudyModal })));
const ServiceModal = lazy(() => import('./components/ServiceModal').then(m => ({ default: m.ServiceModal })));

const SectionFallback: React.FC = () => (
  <div className="w-full py-16 flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-[#2200EE] border-t-transparent animate-spin" />
  </div>
);

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#070514] text-white selection:bg-[#2200EE] selection:text-white font-sans antialiased overflow-x-hidden">
        {/* Immediate Above-the-fold Navigation Bar */}
        <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Main Page Content */}
        <main>
          {/* Instant Hero Section */}
          <HeroSection onOpenBooking={() => setIsBookingOpen(true)} />

          {/* Lazy Loaded Below-the-fold Sections */}
          <Suspense fallback={<SectionFallback />}>
            <ServicesSection onSelectService={(service) => setSelectedService(service)} />
            <InvitationDemoSection />
            <PortfolioSection onSelectProject={(project) => setSelectedProject(project)} />
            <ProcessSection />
            <TestimonialsSection />
            <ContactSection onOpenBooking={() => setIsBookingOpen(true)} />
          </Suspense>
        </main>

        {/* Lazy Loaded Popup Modals */}
        <Suspense fallback={null}>
          {isBookingOpen && (
            <BookingModal
              isOpen={isBookingOpen}
              onClose={() => setIsBookingOpen(false)}
            />
          )}

          {selectedProject && (
            <CaseStudyModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
              onOpenBooking={() => setIsBookingOpen(true)}
            />
          )}

          {selectedService && (
            <ServiceModal
              service={selectedService}
              onClose={() => setSelectedService(null)}
              onOpenBooking={() => setIsBookingOpen(true)}
            />
          )}
        </Suspense>
      </div>
    </LanguageProvider>
  );
}

export default App;
