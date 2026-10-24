import React, { useState, useEffect } from 'react';
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
import OffersSection from './components/OffersSection';
import ReviewsSection from './components/ReviewsSection';
import FAQSection from './components/FAQSection';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [initialPromoCode, setInitialPromoCode] = useState('');
  const [isBookingsManagerOpen, setIsBookingsManagerOpen] = useState(false);

  // Private Admin Access: Open manager via URL parameter (?admin=slots or ?admin=true) or Ctrl+Shift+A
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('admin') === 'slots' || params.get('admin') === 'true') {
        setIsBookingsManagerOpen(true);
      }

      const handleKeyDown = (e) => {
        if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
          e.preventDefault();
          setIsBookingsManagerOpen(prev => !prev);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  const handleOpenBooking = (experience = null, promoCode = '') => {
    setSelectedExperience(experience);
    setInitialPromoCode(promoCode);
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

      {/* 03 Signature Boating Rides (Mangrove Bay) */}
      <RidesAndExperiences
        onBookRide={(ride) => handleOpenBooking(ride)}
      />

      {/* 04 Exclusive Offers & Special Passes */}
      <OffersSection
        onSelectOffer={(promoCode) => handleOpenBooking(null, promoCode)}
      />

      {/* 05 Experience Atmosphere Overview (4 Blocks) */}
      <ExperienceSection
        onSelectExperience={(exp) => handleOpenBooking(exp)}
      />

      {/* 06 Boat Fleet & Covered Vessels Showcase */}
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

      {/* 09 Why Mangrove Bay Boat Rides */}
      <WhyMarinaBay />

      {/* 10 Verified Customer Reviews & Google Rating */}
      <ReviewsSection
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 10.5 Frequently Asked Questions (SEO FAQs) */}
      <FAQSection onOpenBooking={() => handleOpenBooking()} />

      {/* 11 Destination & Dedicated Boarding Jetty Map */}
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
        initialPromoCode={initialPromoCode}
      />

      {/* Admin Booked Slots & Inquiries Manager Modal */}
      <AdminBookingsModal
        isOpen={isBookingsManagerOpen}
        onClose={() => setIsBookingsManagerOpen(false)}
      />

    </div>
  );
}
