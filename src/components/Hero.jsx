import React, { useState, useRef, useEffect } from 'react';
import { ArrowDown, Compass, Sparkles, Anchor, Waves, Clock } from 'lucide-react';
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
    // Attempt audio on first interaction to comply with browser autoplay policies
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

    const handleScroll = () => {
      if (!videoRef.current) return;
      // When user scrolls down past the entrance (scrollY > 100), immediately stop video & audio
      if (window.scrollY > 100) {
        if (!videoRef.current.paused) {
          videoRef.current.pause();
        }
        videoRef.current.muted = true;
      } else {
        // When user scrolls back to the entrance, resume video & audio
        if (videoRef.current.paused) {
          videoRef.current.play().catch(() => {});
        }
        videoRef.current.muted = false;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.5) {
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
          }
          if (videoRef.current) videoRef.current.muted = true;
        } else if (window.scrollY <= 100) {
          if (videoRef.current && videoRef.current.paused) {
            videoRef.current.play().catch(() => {});
          }
          if (videoRef.current) videoRef.current.muted = false;
        }
      },
      { threshold: [0, 0.2, 0.5, 0.8] }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };
  }, []);

  const scrollToExplore = () => {
    const el = document.querySelector('#rides');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isTransposed = rotation === 90 || rotation === 270;

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen flex flex-col items-center justify-center pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-forest-deep flex items-center justify-center">
        <video
          ref={videoRef}
          src={HERO_DATA.videoSrc}
          poster={HERO_DATA.bgImage}
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
          className="filter brightness-[0.75]"
        />
        {/* Cinematic gradient overlays so typography remains readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-charcoal/40 to-forest-deep/75" />
        <div className="absolute inset-0 bg-forest/20 mix-blend-multiply" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-cream flex flex-col items-center my-auto">
        
        {/* Editorial Sub-eyebrow & Boating Hours */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-3 sm:mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/15 backdrop-blur-md border border-sand/30 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-sand" />
            <span className="text-xs md:text-sm uppercase tracking-widest text-sand font-medium">
              Welcome to Mangrove Bay • Pondy Mermaid Boat House
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-forest-deep/80 backdrop-blur-md border border-sand/30 text-sand text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Clock className="w-3.5 h-3.5 text-sunset" />
            <span>Daily 7:00 AM – 5:30 PM</span>
          </div>
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sand/20 backdrop-blur-md border border-sand/40 text-cream text-xs font-semibold uppercase tracking-wider shadow-sm">
            <span className="text-sand font-bold">Couple ₹3,000</span>
            <span className="text-sand/60">•</span>
            <span className="text-sunset font-bold">Separate Boat ₹5,000</span>
            <span className="text-sand/60">•</span>
            <span className="text-cream">Shared ₹500/₹250</span>
            <span className="text-sand/60">•</span>
            <span className="text-sand font-bold">1 Hour Full Ride</span>
          </div>
        </div>

        {/* Brand Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-luxury uppercase text-cream drop-shadow-sm mb-3 sm:mb-4">
          Mangrove Bay
        </h1>

        {/* Tagline */}
        <p className="font-serif text-xl sm:text-2xl md:text-3xl italic text-sand font-light tracking-wide mb-3 sm:mb-4 max-w-3xl">
          {HERO_DATA.tagline}
        </p>

        {/* Welcome Description */}
        <p className="max-w-3xl text-xs sm:text-sm md:text-base font-light text-cream/95 leading-relaxed mb-3 tracking-wide">
          {HERO_DATA.description}
        </p>

        {/* Supporting Perspective Line */}
        <p className="max-w-2xl text-xs sm:text-sm text-cream/80 font-light leading-relaxed mb-3 sm:mb-4 hidden sm:block">
          {HERO_DATA.supportingText}
        </p>

        {/* Visitor Facilities Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-sand font-medium mb-3 sm:mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/15 border border-sand/30 backdrop-blur-sm">
            <span className="text-sunset">✓</span> Free Vehicle Parking
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/15 border border-sand/30 backdrop-blur-sm">
            <span className="text-sunset">✓</span> Clean Restrooms & Toilets
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/15 border border-sand/30 backdrop-blur-sm">
            <span className="text-sunset">✓</span> Dress Changing Facilities
          </span>
        </div>

        {/* Invitation Callout */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-sand/15 backdrop-blur-md border border-sand/30 mb-4 sm:mb-6 text-xs sm:text-sm font-serif italic text-sand tracking-wide">
          {HERO_DATA.invitation}
        </div>

        {/* Experiences Highlight Pill */}
        <div className="mb-6 sm:mb-8 hidden sm:flex flex-col items-center justify-center gap-2.5 text-[11px] text-cream/90 uppercase tracking-wider">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-forest-deep/80 backdrop-blur-md border border-sand/30 font-semibold text-sand">Couples Ride (₹3,000)</span>
            <span className="text-sunset">•</span>
            <span className="px-3.5 py-1.5 rounded-full bg-forest-deep/80 backdrop-blur-md border border-sand/30 font-semibold text-sand">Separate Private Boat (₹5,000)</span>
            <span className="text-sunset">•</span>
            <span className="px-3.5 py-1.5 rounded-full bg-forest-deep/80 backdrop-blur-md border border-sand/30 font-semibold text-sand">Shared Ride (₹500 / ₹250)</span>
          </div>
          <div className="text-[11px] text-sand/90 normal-case tracking-normal font-sans flex items-center gap-2 bg-black/40 px-4 py-1 rounded-full border border-sand/30 backdrop-blur-md">
            <span className="text-sunset font-bold">✨ Every 1-Hour Ride Explores All:</span>
            <span>Mangrove Forests • 2,000-Yr Arikamedu • Beach & River Confluence • Harbour</span>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button
            onClick={() => {
              trackBookingInitiated('Hero Primary CTA');
              onOpenBooking();
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-sand text-forest font-semibold uppercase tracking-luxury text-xs sm:text-sm hover:bg-white hover:shadow-floating transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Book Your Boat Ride (₹500 / 1 Hr)
          </button>

          <button
            onClick={scrollToExplore}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-forest-light/60 backdrop-blur-md border border-sand/40 text-cream font-medium uppercase tracking-luxury text-xs sm:text-sm hover:bg-forest-light/90 hover:border-sand transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Explore 7 Signature Rides ↓
          </button>
        </div>
      </div>

      {/* Redesigned Sleek Coastal Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 text-center">
        <button
          onClick={scrollToExplore}
          className="group flex flex-col items-center gap-1.5 text-[10px] sm:text-xs tracking-widest uppercase text-sand/80 hover:text-sand transition-all duration-300 focus:outline-none"
          aria-label="Scroll to explore 7 signature boat rides"
        >
          <span className="font-sans tracking-luxury group-hover:tracking-[0.25em] transition-all duration-300">
            Scroll to explore
          </span>
          <div className="w-8 h-8 rounded-full bg-forest-deep/70 backdrop-blur-md border border-sand/30 flex items-center justify-center group-hover:bg-sand group-hover:border-sand transition-all duration-300 shadow-md">
            <ArrowDown className="w-3.5 h-3.5 text-sand group-hover:text-forest transition-colors animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}
