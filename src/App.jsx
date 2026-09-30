import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import RidesAndExperiences from './components/RidesAndExperiences';
import ExperienceSection from './components/ExperienceSection';
import BoatFleetSection from './components/BoatFleetSection';
import SafetySection from './components/SafetySection';
import SignatureTimeline from './components/SignatureTimeline';
import GallerySection from './components/GallerySection';
import VideoSection from './components/VideoSection';
import WhyMarinaBay from './components/WhyMarinaBay';
import LocationSection from './components/LocationSection';
import BookingSection from './components/BookingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import MobileBookingBar from './components/MobileBookingBar';
import AdminBookingsModal from './components/AdminBookingsModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isBookingsManagerOpen, setIsBookingsManagerOpen] = useState(false);

  const handleOpenBooking = (experience = null) => {
    setSelectedExperience(experience);
    setIsBookingOpen(true);
  };

  const handleOpenContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-cream text-charcoal font-sans selection:bg-sand selection:text-forest">
      
      {/* Sticky Translucent to Solid Header Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenContact={handleOpenContact}
        onOpenBookingsManager={() => setIsBookingsManagerOpen(true)}
      />

      {/* 01 Full-screen Cinematic Hero */}
      <Hero
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 02 Editorial Introduction Section */}
      <Introduction />

      {/* 03 Signature Boating Rides & Celebrations (Pondicherry Marina Boathouse) */}
      <RidesAndExperiences
        onBookRide={(ride) => handleOpenBooking(ride)}
      />

      {/* 04 Experience Atmosphere Overview (4 Blocks) */}
      <ExperienceSection
        onSelectExperience={(exp) => handleOpenBooking(exp)}
      />

      {/* 05 Boat Fleet & Covered Boathouse Vessels Showcase */}
      <BoatFleetSection
        onOpenBooking={(vessel) => handleOpenBooking(vessel)}
      />

      {/* 06 Safety & Passenger Precautions */}
      <SafetySection
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 07 Signature Boating Hours Timeline */}
      <SignatureTimeline />

      {/* 07 Masonry Gallery with Lightbox */}
      <GallerySection />

      {/* 08 Cinematic Full-width Video Section */}
      <VideoSection />

      {/* 09 Why Mangroo Bay Boat Rides */}
      <WhyMarinaBay />

      {/* 10 Destination & Pondicherry Marina Boathouse Location Map */}
      <LocationSection
        onOpenContact={handleOpenContact}
      />

      {/* 11 Boat Ride Booking Section */}
      <BookingSection
        onOpenContact={handleOpenContact}
      />

      {/* 12 Minimal Elegant Contact Area */}
      <ContactSection
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 13 Forest Green Luxury Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenBookingsManager={() => setIsBookingsManagerOpen(true)}
      />

      {/* Floating Sticky Mobile Booking Bar */}
      <MobileBookingBar
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Full Boat Ride Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialExperience={selectedExperience}
      />

      {/* Admin Booked Slots & Inquiries Manager Modal */}
      <AdminBookingsModal
        isOpen={isBookingsManagerOpen}
        onClose={() => setIsBookingsManagerOpen(false)}
      />

    </div>
  );
}
