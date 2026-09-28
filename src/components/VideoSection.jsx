import React, { useState } from 'react';
import { Play, X, Sparkles, Anchor } from 'lucide-react';

export default function VideoSection() {
  const [isPlayingModal, setIsPlayingModal] = useState(false);

  return (
    <section className="relative w-full py-28 md:py-40 bg-forest-deep overflow-hidden">
      {/* Background Visual Layer */}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/entrance-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center filter brightness-[0.35] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest-deep/50 to-forest-deep/90" />
      </div>

      {/* Center Cinematic Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-cream flex flex-col items-center">
        
        {/* Play Button with Pulsing Wave Rings */}
        <div className="relative mb-8">
          <span className="absolute -inset-4 rounded-full bg-sand/20 animate-ping" />
          <button
            onClick={() => setIsPlayingModal(true)}
            className="group relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-sand/90 hover:bg-white text-forest flex items-center justify-center shadow-floating transition-all duration-300 transform hover:scale-110 active:scale-95"
            aria-label="Play Mangroo Bay Experience Video"
          >
            <Play className="w-8 h-8 sm:w-10 sm:h-10 text-forest fill-forest ml-1 transition-transform group-hover:scale-110" />
          </button>
        </div>

        {/* Editorial Text Overlay */}
        <span className="text-xs uppercase tracking-luxury text-sand font-medium mb-3">
          Cinematic Boating Glimpse
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-cream font-light italic leading-tight mb-4 max-w-2xl">
          “Some places are meant to be felt.”
        </h2>

        <p className="text-sm md:text-base text-cream/80 max-w-xl font-sans font-light leading-relaxed mb-8">
          Watch our boats glide across the calm waterways and lush mangrove channels of Pondicherry Marina Boathouse.
        </p>

        <button
          onClick={() => setIsPlayingModal(true)}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-sand/40 text-sand hover:bg-sand/15 transition-colors uppercase tracking-widest text-xs font-semibold"
        >
          <span>Watch Real Video</span>
        </button>
      </div>

      {/* Video Modal Player with User's Real Boating Video */}
      {isPlayingModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fade-scale"
          onClick={() => setIsPlayingModal(false)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative w-full max-w-4xl bg-forest-deep rounded-2xl overflow-hidden shadow-2xl border border-sand/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-forest-deep/90 border-b border-sand/20 text-cream">
              <div className="flex items-center gap-2">
                <Anchor className="w-4 h-4 text-sunset" />
                <span className="font-serif text-lg text-sand">Mangroo Bay • Pondicherry Marina Boat Ride</span>
              </div>
              <button
                onClick={() => setIsPlayingModal(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-cream"
                aria-label="Close video"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Player Container */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <video
                src="/videos/entrance-video.mp4"
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
