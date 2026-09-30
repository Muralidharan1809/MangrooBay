import React, { useState, useRef, useEffect } from 'react';
import { ArrowDown, Compass, Sparkles, Anchor, Waves, Volume2, VolumeX, RotateCw, Clock } from 'lucide-react';
import { HERO_DATA, BRAND_DATA } from '../data/content';

export default function Hero({ onOpenBooking }) {
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [rotation, setRotation] = useState(() => {
    const saved = localStorage.getItem('mb_hero_video_rotation_v2');
    return saved !== null ? parseInt(saved, 10) : 270; // Default rotated 270 degrees (opposite direction)
  });
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  // Automatically pause video and stop audio when user scrolls away from entrance
  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;
      // When user scrolls down past the entrance (scrollY > 100), immediately stop video & audio
      if (window.scrollY > 100) {
        if (!videoRef.current.paused) {
          videoRef.current.pause();
        }
      } else {
        // When user scrolls back to top, resume video playback
        if (videoRef.current.paused) {
          videoRef.current.play().catch(() => {});
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Also use IntersectionObserver for smooth handling of viewport changes & anchor links
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.5) {
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
          }
        } else if (window.scrollY <= 100) {
          if (videoRef.current && videoRef.current.paused) {
            videoRef.current.play().catch(() => {});
          }
        }
      },
      { threshold: [0, 0.2, 0.5, 0.8] }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Run once on mount in case page reloads mid-scroll
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleVideoSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isVideoMuted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  const handleRotate = () => {
    setRotation(prev => {
      const next = (prev + 90) % 360;
      localStorage.setItem('mb_hero_video_rotation_v2', next.toString());
      return next;
    });
  };

  const scrollToExplore = () => {
    const el = document.querySelector('#rides');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isTransposed = rotation === 90 || rotation === 270;

  return (
    <section ref={sectionRef} className="relative w-full h-screen min-h-[720px] flex items-center justify-center overflow-hidden">
      {/* Background Video Layer with 90° Rotation Support */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-forest-deep flex items-center justify-center">
        <video
          ref={videoRef}
          src={HERO_DATA.videoSrc}
          poster={HERO_DATA.bgImage}
          autoPlay
          loop
          muted={isVideoMuted}
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
            objectFit: 'cover',
            transition: 'transform 0.4s ease-out'
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

      {/* Video Controls: Rotate + Sound */}
      <div className="absolute top-24 md:top-28 right-6 md:right-12 z-20 flex items-center gap-2">
        {/* Rotate Button */}
        <button
          onClick={handleRotate}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-forest-deep/80 hover:bg-forest text-sand border border-sand/30 backdrop-blur-md text-xs font-medium tracking-wide transition-all shadow-md active:scale-95"
          title={`Rotate Video (${rotation}°)`}
          aria-label={`Rotate Video (currently ${rotation} degrees)`}
        >
          <RotateCw className="w-3.5 h-3.5 text-sand" />
          <span>Rotate ({rotation}°)</span>
        </button>

        {/* Audio Toggle */}
        <button
          onClick={toggleVideoSound}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-deep/80 hover:bg-forest text-sand border border-sand/30 backdrop-blur-md text-xs font-medium tracking-wide transition-all shadow-md active:scale-95"
          title={isVideoMuted ? "Unmute Entrance Video Audio" : "Mute Video Audio"}
          aria-label={isVideoMuted ? "Unmute Entrance Video Audio" : "Mute Video Audio"}
        >
          {isVideoMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-sand/70" />
              <span className="hidden sm:inline">Unmute Video</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-sunset animate-bounce" />
              <span className="hidden sm:inline">Sound Active</span>
            </>
          )}
        </button>
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
          <span className="px-3 py-1 rounded-full bg-forest-deep/70 backdrop-blur-md border border-sand/20">Arikamedu Heritage</span>
          <span className="text-sunset">•</span>
          <span className="px-3 py-1 rounded-full bg-forest-deep/70 backdrop-blur-md border border-sand/20">Mangrove Safaris</span>
          <span className="text-sunset">•</span>
          <span className="px-3 py-1 rounded-full bg-forest-deep/70 backdrop-blur-md border border-sand/20">Sunset & Sunrise Rides</span>
          <span className="text-sunset">•</span>
          <span className="px-3 py-1 rounded-full bg-forest-deep/70 backdrop-blur-md border border-sand/20">Couple Rides</span>
          <span className="text-sunset">•</span>
          <span className="px-3 py-1 rounded-full bg-forest-deep/70 backdrop-blur-md border border-sand/20">Birthday Celebrations</span>
          <span className="text-sunset">•</span>
          <span className="px-3 py-1 rounded-full bg-forest-deep/70 backdrop-blur-md border border-sand/20">Adventure & Sea Rides</span>
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
            Explore 7 Signature Rides ↓
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
