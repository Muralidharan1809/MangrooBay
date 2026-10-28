import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { Clock, ArrowRight } from 'lucide-react';
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
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-forest-deep pt-20 pb-12 sm:pt-24 sm:pb-16"
    >
      {/* Background High-Resolution Still Image (LCP element with high fetch priority) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/Images/Mangroo%20Forest.jpeg"
          alt="Pondicherry Boating - Mangrove Bay boat rides"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width="1200"
          height="800"
          className="w-full h-full object-cover filter brightness-[0.52] scale-105 transition-transform duration-1000"
        />
        {/* Cinematic gradient overlays so typography remains crisp & readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-forest-deep/80" />
        <div className="absolute inset-0 bg-forest/25 mix-blend-multiply" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-cream flex flex-col items-center my-auto w-full">
        
        {/* Sleek Single Eyebrow Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-sand/30 shadow-sm mb-3 sm:mb-4 max-w-full">
          <Clock className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-sunset shrink-0" />
          <span className="text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-sand font-medium truncate">
            Marina & Mangrove Tours • Daily 7 AM – 5:30 PM
          </span>
        </div>

        {/* Brand Title: Prominent "Mangrove Bay" Title with rich SEO H1 content */}
        <h1 className="font-serif font-light text-cream drop-shadow-md mb-2 sm:mb-3 leading-tight">
          <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-luxury uppercase">
            Mangrove Bay
          </span>
          <span className="block font-sans text-xs sm:text-sm md:text-base font-medium text-sand tracking-widest uppercase mt-2">
            Mangrove Forest Boating • Pondy Marina Boating • Backwater Rides
          </span>
        </h1>
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-sand font-semibold mb-2 sm:mb-3">
          Pondy Boating • Premier Boarding Jetty Puducherry
        </p>

        {/* Tagline */}
        <p className="font-serif text-lg sm:text-2xl italic text-sand font-light tracking-wide mb-3 sm:mb-4">
          Escape into the calm.
        </p>

        {/* Description: High-search SEO body content */}
        <p className="max-w-2xl text-xs sm:text-sm md:text-base font-light text-cream/95 leading-relaxed mb-5 sm:mb-6 font-sans px-2">
          Experience authentic <strong>mangrove forest boating</strong> and scenic <strong>Pondy Marina boating</strong> with Pondy Boating (Mangrove Bay). 1-hour backwater cruises through protected mangrove canopy tunnels, 2,000-year historic Arikamedu ruins, and the Bay of Bengal sea confluence with 100% private boat options.
        </p>

        {/* Mobile-Perfect Pricing Card */}
        <div className="mb-5 sm:mb-6 p-3 sm:p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-sand/35 max-w-2xl w-full shadow-luxury">
          <div className="grid grid-cols-3 divide-x divide-sand/25 text-center">
            <div className="px-1 sm:px-2">
              <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-sand font-medium">Shared</span>
              <span className="font-serif text-sm sm:text-xl font-bold text-cream block mt-0.5">
                ₹500 <span className="text-[9px] sm:text-[10px] font-sans font-normal text-sand">/ ₹250</span>
              </span>
            </div>
            <div className="px-1 sm:px-2">
              <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-amber-300 font-semibold">Couple</span>
              <span className="font-serif text-sm sm:text-xl font-bold text-sand block mt-0.5">
                ₹3,000 <span className="text-[9px] sm:text-[10px] font-sans font-normal text-sand">flat</span>
              </span>
            </div>
            <div className="px-1 sm:px-2">
              <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-sand font-medium">Private</span>
              <span className="font-serif text-sm sm:text-xl font-bold text-cream block mt-0.5">
                ₹5,000 <span className="text-[9px] sm:text-[10px] font-sans font-normal text-sand">10 Pax</span>
              </span>
            </div>
          </div>
          <div className="mt-2.5 pt-2 border-t border-sand/20 text-[10px] sm:text-[11px] text-cream flex items-center justify-center gap-1.5 font-sans">
            <span className="text-amber-300 font-bold">✨ Every Ride:</span>
            <span>1-Hr Full Cruise • Mangroves, Arikamedu, Beach & Harbour</span>
          </div>
        </div>

        {/* Call to Actions (stacked on mobile with full touch targets) */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4 w-full sm:w-auto mb-5 sm:mb-6">
          <button
            onClick={() => {
              trackBookingInitiated('Hero Primary CTA');
              onOpenBooking();
            }}
            className="w-full sm:w-auto min-h-[46px] px-7 py-3 rounded-full bg-sand hover:bg-white text-forest font-semibold uppercase tracking-widest text-xs transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Book Your Boat Ride</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/917397438874?text=Hello%20Mangrove%20Bay,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20boat%20ride."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[46px] px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold uppercase tracking-widest text-xs backdrop-blur-md border border-emerald-400/40 transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 text-white fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Clean Amenities Trust Strip (2x2 on mobile for balanced symmetry) */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-1.5 sm:gap-y-2 text-[11px] sm:text-xs text-sand font-medium">
          <span className="inline-flex items-center gap-1.5 justify-center sm:justify-start">
            <span className="text-amber-300 font-bold">✓</span> Free Parking
          </span>
          <span className="inline-flex items-center gap-1.5 justify-center sm:justify-start">
            <span className="text-amber-300 font-bold">✓</span> Clean Toilets
          </span>
          <span className="inline-flex items-center gap-1.5 justify-center sm:justify-start">
            <span className="text-amber-300 font-bold">✓</span> Changing Rooms
          </span>
          <span className="inline-flex items-center gap-1.5 justify-center sm:justify-start">
            <span className="text-amber-300 font-bold">✓</span> Life Jackets
          </span>
        </div>

      </div>

      {/* Sleek Coastal Scroll Indicator */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-10 text-center hidden xs:block">
        <button
          onClick={scrollToExplore}
          className="group flex flex-col items-center gap-1 text-[10px] tracking-widest uppercase text-sand/80 hover:text-sand transition-all duration-300 focus:outline-none"
          aria-label="Scroll to explore boat rides"
        >
          <span className="font-mono text-[9px] text-sand">Explore Sights</span>
        </button>
      </div>
    </section>
  );
}
