import { useState } from 'react';
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
import { BookingModal } from './components/BookingModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ServiceModal } from './components/ServiceModal';

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
        {/* Hero Section with animated typography & particles */}
        <HeroSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Services Grid with 3D tilt cards */}
        <ServicesSection onSelectService={(service) => setSelectedService(service)} />

        {/* Interactive Digital Invitation Web Cards Live Sandbox */}
        <InvitationDemoSection />

        {/* Portfolio Showcase with live metric overlays */}
        <PortfolioSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Process Step Timeline */}
        <ProcessSection />

        {/* Testimonials Carousel */}
        <TestimonialsSection />

        {/* Contact & Footer Kickoff */}
        <ContactSection onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      {/* Strategy Call Booking Popup Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Case Study Detail Popup Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Service Detail Specifications Popup Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
    </div>
    </LanguageProvider>
  );
}

export default App;
