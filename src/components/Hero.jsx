import React, { useState, useRef, useEffect } from 'react';
import { ArrowDown, Compass, Sparkles, Anchor, Waves, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { HERO_DATA, BRAND_DATA, STANDARD_PRICING } from '../data/content';
import { trackBookingInitiated } from '../utils/analytics';

export default function Hero({ onOpenBooking }) {
  const [rotation] = useState(() => {
    const saved = localStorage.getItem('mb_hero_video_rotation_v2');
    return saved !== null ? parseInt(saved, 10) : 270; // Maintain upright video orientation
  });
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  // Automatically handle video and audio playback: plays on entrance, stops on scroll
  useEffect(() => {
    const handleFirstGesture = () => {
      if (videoRef.current && window.scrollY <= 100) {
        videoRef.current.muted = false;
        videoRef.current.volume = 0.7;
      }
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };

    window.addEventListener('click', handleFirstGesture, { passive: true });
    window.addEventListener('touchstart', handleFirstGesture, { passive: true });
    window.addEventListener('keydown', handleFirstGesture, { passive: true });

    return () => {
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };
  }, []);

  useEffect(() => {
    const handleScrollPlayback = () => {
      if (!videoRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.bottom > 150;

      if (inView) {
        if (videoRef.current.paused) {
          videoRef.current.play().catch(() => {});
        }
      } else {
        if (!videoRef.current.paused) {
          videoRef.current.pause();
        }
      }
    };

    window.addEventListener('scroll', handleScrollPlayback, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollPlayback);
  }, []);

  const scrollToExplore = () => {
    const el = document.querySelector('#rides');
    if (el) {
      const navOffset = 80;
      const elPos = el.getBoundingClientRect().top;
      const offsetPos = elPos + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPos, behavior: 'smooth' });
    }
  };

  const isTransposed = rotation === 90 || rotation === 270;

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-deep pt-24 pb-16"
    >
      {/* Background Entrance Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src={HERO_DATA.videoSrc}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: isTransposed ? '100vh' : '100vw',
            height: isTransposed ? '100vw' : '100vh',
            minWidth: isTransposed ? '100vh' : '100%',
            minHeight: isTransposed ? '100vw' : '100%',
            transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
            objectFit: 'cover'
          }}
          className="filter brightness-[0.70]"
        />
        {/* Cinematic gradient overlays so typography remains readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-charcoal/45 to-forest-deep/80" />
        <div className="absolute inset-0 bg-forest/20 mix-blend-multiply" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-cream flex flex-col items-center my-auto">
        
        {/* Sleek Single Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-sand/30 shadow-sm mb-4">
          <Clock className="w-3.5 h-3.5 text-sunset" />
          <span className="text-xs uppercase tracking-widest text-sand font-medium">
            Puducherry Boating • Daily 7:00 AM – 5:30 PM
          </span>
        </div>

        {/* Brand Title */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-luxury uppercase text-cream drop-shadow-md mb-2">
          Mangrove Bay
        </h1>

        {/* Tagline */}
        <p className="font-serif text-xl sm:text-2xl md:text-3xl italic text-sand font-light tracking-wide mb-4 max-w-2xl">
          Escape into the calm.
        </p>

        {/* Description */}
        <p className="max-w-2xl text-xs sm:text-sm md:text-base font-light text-cream/90 leading-relaxed mb-6 font-sans">
          Discover peaceful mangrove canals, historic 2,000-year-old Arikamedu ruins, and the breathtaking Bay of Bengal sea confluence on an authentic 1-hour cruise.
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
            <MessageSquare className="w-4 h-4" />
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
