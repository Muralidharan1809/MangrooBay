import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { ArrowDown, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { HERO_DATA, STANDARD_PRICING } from '../data/content';
import { trackBookingInitiated } from '../utils/analytics';

export default function Hero({ onOpenBooking }) {
  const scrollToExplore = () => {
    const el = document.querySelector('#rides');
    if (el) {
      const navOffset = 80;
      const elPos = el.getBoundingClientRect().top;
      const offsetPos = elPos + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPos, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-deep pt-24 pb-16"
    >
      {/* Background High-Resolution Still Image (No starting video / zero unwanted audio) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/Images/Mangroo Forest.jpeg"
          alt="Mangrove Bay Puducherry"
          className="w-full h-full object-cover filter brightness-[0.55] scale-105 transition-transform duration-1000"
        />
        {/* Cinematic gradient overlays so typography remains crisp & readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-forest-deep/80" />
        <div className="absolute inset-0 bg-forest/25 mix-blend-multiply" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-cream flex flex-col items-center my-auto">
        
        {/* Sleek Single Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-sand/30 shadow-sm mb-4">
          <Clock className="w-3.5 h-3.5 text-sunset" />
          <span className="text-xs uppercase tracking-widest text-sand font-medium">
            Best Boating in Pondicherry • Mangrove Tours • Daily 7:00 AM – 5:30 PM
          </span>
        </div>

        {/* Brand Title */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-luxury uppercase text-cream drop-shadow-md mb-3 leading-tight">
          Pondicherry Boating – Marina & Mangrove Boat Rides
        </h1>
        <p className="text-xs sm:text-sm uppercase tracking-widest text-sand font-medium mb-3">
          Pondy Boating • Mangrove Bay Boarding Jetty
        </p>

        {/* Tagline */}
        <p className="font-serif text-xl sm:text-2xl md:text-3xl italic text-sand font-light tracking-wide mb-4 max-w-2xl">
          Escape into the calm.
        </p>

        {/* Description */}
        <p className="max-w-2xl text-xs sm:text-sm md:text-base font-light text-cream/90 leading-relaxed mb-6 font-sans">
          Book boating in Pondicherry with Pondy Boating. Enjoy scenic Marina boat rides, mangrove boating, backwater cruises and tourist boat rides with 100% private boat options and transparent boat ride prices.
        </p>

        {/* Clean, Cohesive Pricing Card */}
        <div className="mb-6 p-4 rounded-2xl bg-black/45 backdrop-blur-md border border-sand/30 max-w-2xl w-full shadow-luxury">
          <div className="grid grid-cols-3 divide-x divide-sand/20 text-center">
            <div className="px-2">
              <span className="block text-[10px] uppercase tracking-wider text-sand/80 font-medium">Shared Ride</span>
              <span className="font-serif text-base sm:text-xl font-bold text-cream">
                ₹500 <span className="text-[10px] font-sans font-normal text-sand/70">/ ₹250</span>
              </span>
            </div>
            <div className="px-2">
              <span className="block text-[10px] uppercase tracking-wider text-sunset font-semibold">Couple (Private)</span>
              <span className="font-serif text-base sm:text-xl font-bold text-sand">
                ₹3,000 <span className="text-[10px] font-sans font-normal text-sand/70">flat</span>
              </span>
            </div>
            <div className="px-2">
              <span className="block text-[10px] uppercase tracking-wider text-sand/80 font-medium">Separate Boat</span>
              <span className="font-serif text-base sm:text-xl font-bold text-cream">
                ₹5,000 <span className="text-[10px] font-sans font-normal text-sand/70">1–10 guests</span>
              </span>
            </div>
          </div>
          <div className="mt-2.5 pt-2 border-t border-sand/20 text-[11px] text-sand/90 flex flex-wrap items-center justify-center gap-1.5 font-sans">
            <span className="text-sunset font-bold">✨ Every Ride:</span>
            <span>1 Hour Full Cruise • Explores Mangroves, Arikamedu, Beach & Harbour</span>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mb-6">
          <button
            onClick={() => {
              trackBookingInitiated('Hero Primary CTA');
              onOpenBooking();
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-sand hover:bg-white text-forest font-semibold uppercase tracking-widest text-xs transition-all shadow-lg hover:shadow-2xl active:scale-95 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
          >
            <span>Book Your Boat Ride</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/917397438874?text=Hello%20Mangrove%20Bay,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20boat%20ride."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold uppercase tracking-widest text-xs backdrop-blur-md border border-emerald-400/40 transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Clean Amenities Trust Strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-sand/90 font-medium">
          <span className="inline-flex items-center gap-1.5">
            <span className="text-sunset font-bold">✓</span> Free Vehicle Parking
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="text-sunset font-bold">✓</span> Clean Restrooms & Toilets
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="text-sunset font-bold">✓</span> Dress Changing Rooms
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="text-sunset font-bold">✓</span> Life Jackets Included
          </span>
        </div>

      </div>

      {/* Sleek Coastal Scroll Indicator */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-10 text-center">
        <button
          onClick={scrollToExplore}
          className="group flex flex-col items-center gap-1 text-[10px] sm:text-xs tracking-widest uppercase text-sand/70 hover:text-sand transition-all duration-300 focus:outline-none"
          aria-label="Scroll to explore boat rides"
        >
          <span className="font-sans tracking-luxury group-hover:tracking-[0.25em] transition-all duration-300">
            Scroll to explore
          </span>
          <ArrowDown className="w-3.5 h-3.5 text-sand animate-bounce" />
        </button>
      </div>
    </section>
  );
}
