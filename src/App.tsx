import { useState, lazy, Suspense } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import type { ServiceItem } from './components/ServicesSection';
import { InvitationDemoSection } from './components/InvitationDemoSection';
import { PortfolioSection } from './components/PortfolioSection';
import type { PortfolioItem } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';

// Modals lazy loaded silently in background when triggered
const BookingModal = lazy(() => import('./components/BookingModal').then(m => ({ default: m.BookingModal })));
const CaseStudyModal = lazy(() => import('./components/CaseStudyModal').then(m => ({ default: m.CaseStudyModal })));
const ServiceModal = lazy(() => import('./components/ServiceModal').then(m => ({ default: m.ServiceModal })));

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#070514] text-white selection:bg-[#2200EE] selection:text-white font-sans antialiased overflow-x-hidden">
        {/* Navigation Bar */}
        <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Main Page Content */}
        <main>
          <HeroSection onOpenBooking={() => setIsBookingOpen(true)} />
          <ServicesSection onSelectService={(service) => setSelectedService(service)} />
          <InvitationDemoSection />
          <PortfolioSection onSelectProject={(project) => setSelectedProject(project)} />
          <ProcessSection />
          <TestimonialsSection />
          <ContactSection onOpenBooking={() => setIsBookingOpen(true)} />
        </main>

        {/* Modals */}
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
