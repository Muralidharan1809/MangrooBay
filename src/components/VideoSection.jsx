import React, { useState } from 'react';
import { Play, X, RotateCw, Anchor, Sparkles } from 'lucide-react';

export default function VideoSection() {
  const [isPlayingModal, setIsPlayingModal] = useState(false);
  const [modalRotation, setModalRotation] = useState(0);

  const rotateVideo = () => {
    setModalRotation((prev) => (prev + 90) % 360);
  };

  return (
    <section className="relative w-full py-28 md:py-40 bg-forest-deep overflow-hidden">
      {/* Background Cinematic Visual (Clean high-res image; no broken autoplay video) */}
      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center pointer-events-none">
        <img loading="lazy" decoding="async" src="/Images/Pondycherry_harbour.jpeg"
          alt="Mangrove Bay Experience Video"
          className="w-full h-full object-cover filter brightness-[0.35] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/95 via-forest-deep/75 to-forest-deep/95" />
      </div>

      {/* Center Cinematic Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-cream flex flex-col items-center">
        
        {/* Play Button with Pulsing Wave Rings */}
        <div className="relative mb-8">
          <span className="absolute -inset-4 rounded-full bg-sand/20 animate-ping pointer-events-none" />
          <button
            onClick={() => setIsPlayingModal(true)}
            className="group relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-sand/90 hover:bg-white text-forest flex items-center justify-center shadow-floating transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Play Mangrove Bay Story Video"
          >
            <Play className="w-8 h-8 sm:w-10 sm:h-10 text-forest fill-forest ml-1 transition-transform group-hover:scale-110" />
          </button>
        </div>

        {/* Editorial Text Overlay */}
        <span className="text-xs uppercase tracking-luxury text-sunset font-semibold mb-3">
          Mangrove Bay Story Video
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-cream font-light italic leading-tight mb-4 max-w-2xl">
          “Some places are meant to be felt.”
        </h2>

        <p className="text-sm md:text-base text-cream/80 max-w-xl font-sans font-light leading-relaxed mb-8">
          Watch our boats glide across calm waterways, lush mangrove tunnels, and peaceful coastal waters of Puducherry.
        </p>

        <button
          onClick={() => setIsPlayingModal(true)}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-sand/50 text-sand hover:bg-sand/15 transition-colors uppercase tracking-widest text-xs font-semibold"
        >
          <Play className="w-3.5 h-3.5 fill-sand" />
          <span>Watch Real Video Story</span>
        </button>
      </div>

      {/* Real Video Modal Player with Standard Clean Playback */}
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
            {/* Header with Title, Rotate Button, and Close */}
            <div className="flex items-center justify-between p-4 bg-forest-deep/90 border-b border-sand/20 text-cream">
              <div className="flex items-center gap-2">
                <Anchor className="w-4 h-4 text-sunset" />
                <span className="font-serif text-lg text-sand">Mangrove Bay Story Video</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={rotateVideo}
                  className="px-3 py-1 rounded-full bg-sand/20 hover:bg-sand/30 text-sand text-xs flex items-center gap-1.5 transition-colors"
                  title="Rotate video orientation"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Rotate {modalRotation > 0 ? `${modalRotation}°` : ''}</span>
                </button>
                <button
                  onClick={() => setIsPlayingModal(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-cream"
                  aria-label="Close video"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Video Player Container */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden p-2">
              <video
                src="/videos/entrance-video.mp4"
                controls
                autoPlay
                playsInline
                style={{
                  transform: modalRotation > 0 ? `rotate(${modalRotation}deg)` : undefined,
                  transition: 'transform 0.3s ease-out',
                  maxHeight: (modalRotation === 90 || modalRotation === 270) ? '80vw' : '100%',
                  maxWidth: (modalRotation === 90 || modalRotation === 270) ? '65vh' : '100%',
                }}
                className="rounded-lg shadow-lg max-h-full max-w-full"
              />
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
