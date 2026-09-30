import React, { useState, useRef, useEffect } from 'react';
import { ArrowDown, Compass, Sparkles, Anchor, Waves, Clock } from 'lucide-react';
import { HERO_DATA, BRAND_DATA } from '../data/content';

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
    <section ref={sectionRef} className="relative w-full h-screen min-h-[720px] flex items-center justify-center overflow-hidden">
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

      {/* Floating Marina Badge */}
      <div className="absolute top-24 md:top-28 left-6 md:left-12 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-deep/80 backdrop-blur-md border border-sand/30 text-xs text-sand font-medium tracking-widest uppercase shadow-md">
        <Anchor className="w-3.5 h-3.5 text-sunset" />
        <span>Pondicherry Marina Boathouse</span>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-cream flex flex-col items-center">
        
        {/* Editorial Sub-eyebrow & Boating Hours */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand/15 backdrop-blur-md border border-sand/30">
            <Sparkles className="w-3 h-3 text-sand" />
            <span className="text-xs md:text-sm uppercase tracking-widest text-sand font-medium">
              Welcome to Mangroo Bay • Pondicherry Marina Boathouse
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-forest-deep/80 backdrop-blur-md border border-sand/30 text-sand text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Clock className="w-3.5 h-3.5 text-sunset" />
            <span>Daily 8:00 AM – 5:30 PM</span>
          </div>
        </div>

        {/* Brand Title */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-luxury uppercase text-cream drop-shadow-sm mb-4">
          Mangroo Bay
        </h1>

        {/* Tagline */}
        <p className="font-serif text-2xl sm:text-3xl md:text-4xl italic text-sand font-light tracking-wide mb-4 max-w-3xl">
          {HERO_DATA.tagline}
        </p>

        {/* Welcome Description */}
        <p className="max-w-3xl text-sm sm:text-base md:text-lg font-light text-cream/95 leading-relaxed mb-3 tracking-wide">
          {HERO_DATA.description}
        </p>

        {/* Supporting Perspective Line */}
        <p className="max-w-2xl text-xs sm:text-sm text-cream/80 font-light leading-relaxed mb-4 hidden sm:block">
          {HERO_DATA.supportingText}
        </p>

        {/* Invitation Callout */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-sand/15 backdrop-blur-md border border-sand/30 mb-6 text-xs sm:text-sm font-serif italic text-sand tracking-wide">
          {HERO_DATA.invitation}
        </div>

        {/* Experiences Highlight Pill */}
        <div className="mb-8 hidden sm:flex flex-wrap items-center justify-center gap-2 text-[11px] text-cream/80 uppercase tracking-wider">
          <span className="px-3 py-1 rounded-full bg-forest-deep/70 backdrop-blur-md border border-sand/20">Couples Ride</span>
          <span className="text-sunset">•</span>
          <span className="px-3 py-1 rounded-full bg-forest-deep/70 backdrop-blur-md border border-sand/20">Birthday Celebration</span>
          <span className="text-sunset">•</span>
          <span className="px-3 py-1 rounded-full bg-forest-deep/70 backdrop-blur-md border border-sand/20">Group Ride</span>
          <span className="text-sunset">•</span>
          <span className="px-3 py-1 rounded-full bg-forest-deep/70 backdrop-blur-md border border-sand/20">Mangroo Forest</span>
          <span className="text-sunset">•</span>
          <span className="px-3 py-1 rounded-full bg-forest-deep/70 backdrop-blur-md border border-sand/20">Arikkamedu</span>
          <span className="text-sunset">•</span>
          <span className="px-3 py-1 rounded-full bg-forest-deep/70 backdrop-blur-md border border-sand/20">Beach & River</span>
          <span className="text-sunset">•</span>
          <span className="px-3 py-1 rounded-full bg-forest-deep/70 backdrop-blur-md border border-sand/20">Harbour</span>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-sand text-forest font-semibold uppercase tracking-luxury text-xs sm:text-sm hover:bg-white hover:shadow-floating transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Book Your Boat Ride
          </button>

          <button
            onClick={scrollToExplore}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-forest-light/60 backdrop-blur-md border border-sand/40 text-cream font-medium uppercase tracking-luxury text-xs sm:text-sm hover:bg-forest-light/90 hover:border-sand transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Explore 8 Signature Rides ↓
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center">
        <button
          onClick={scrollToExplore}
          className="group flex flex-col items-center text-xs tracking-widest uppercase text-sand/80 hover:text-sand transition-colors"
          aria-label="Scroll to discover Mangroo Bay"
        >
          <span className="mb-2 font-sans tracking-luxury">{HERO_DATA.scrollText}</span>
          <div className="w-5 h-8 rounded-full border border-sand/40 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-sand rounded-full animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}
