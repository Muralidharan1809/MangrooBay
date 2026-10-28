import React, { useState, useEffect } from 'react';
import { GALLERY_DATA } from '../data/content';
import { X, ChevronLeft, ChevronRight, Maximize2, Play, Sparkles, Film } from 'lucide-react';

export default function GallerySection({ selectedImage, setSelectedImage }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filters = ['All', 'Video Story', 'The Bay', 'Boats & Fleet', 'Sunset', 'Nature', 'Heritage'];

  const filteredImages = activeFilter === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(img => img.category.toLowerCase() === activeFilter.toLowerCase());

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const showNext = (e) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
    }
  };

  const showPrev = (e) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages.length]);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-cream relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-luxury text-mangrove font-semibold mb-3 inline-block">
            Visual & Story Gallery
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-light leading-tight mb-4">
            A glimpse of Mangrove Bay
          </h2>
          <p className="text-sm md:text-base text-charcoal/70 leading-relaxed font-sans">
            Gently drifting between calm waters, golden skies, lush coastal greenery, and authentic boating stories.
          </p>
          <div className="w-16 h-[1px] bg-sand/60 mx-auto mt-6" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm uppercase tracking-widest font-medium transition-all duration-300 flex items-center gap-1.5 ${
                activeFilter === filter
                  ? 'bg-forest text-cream shadow-md scale-105'
                  : 'bg-white/80 text-charcoal/70 hover:bg-sand/30 hover:text-forest border border-sand/40'
              }`}
            >
              {filter === 'Video Story' && <Film className="w-3.5 h-3.5 text-sunset" />}
              <span>{filter}</span>
            </button>
          ))}
        </div>

        {/* Masonry / Grid with varied sizes */}
        <div className="grid grid-cols-12 gap-5 sm:gap-6">
          {filteredImages.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className={`${item.span} relative group rounded-2xl overflow-hidden shadow-luxury border border-sand/30 cursor-pointer bg-sand/20 ${item.aspect}`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
                loading="lazy"
              />

              {/* Video Play Overlay Indicator if it's a video story */}
              {item.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-sand/90 text-forest flex items-center justify-center shadow-floating group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                    <Play className="w-7 h-7 sm:w-9 sm:h-9 text-forest fill-forest ml-1" />
                  </div>
                </div>
              )}

              {/* Subtle hover gradient and info card */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 p-6 flex flex-col justify-between" />
              
              {/* Hover Badge Top */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-400 transform -translate-y-2 group-hover:translate-y-0">
                <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-forest-deep/80 text-sand border border-sand/30 backdrop-blur-md flex items-center gap-1">
                  {item.isVideo && <Play className="w-3 h-3 fill-sunset text-sunset" />}
                  <span>{item.category}</span>
                </span>
              </div>

              {/* Hover Badge Expand Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-400">
                <div className="w-8 h-8 rounded-full bg-forest-deep/80 text-sand border border-sand/30 flex items-center justify-center backdrop-blur-md">
                  {item.isVideo ? <Play className="w-4 h-4 text-sunset fill-sunset" /> : <Maximize2 className="w-4 h-4" />}
                </div>
              </div>

              {/* Hover Caption Bottom */}
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-y-2 group-hover:translate-y-0 text-cream">
                <h3 className="font-serif text-xl sm:text-2xl text-cream font-light">{item.title}</h3>
                <p className="text-xs text-sand/80 font-sans">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-forest-deep/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fade-scale"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery Lightbox"
        >
          {/* Top Bar with Counter & Close */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20 text-cream" onClick={(e) => e.stopPropagation()}>
            <div className="text-xs tracking-widest uppercase text-sand flex items-center gap-2">
              <span>{lightboxIndex + 1} / {filteredImages.length} • {filteredImages[lightboxIndex].category}</span>
            </div>
            <button
              onClick={closeLightbox}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-cream transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Prev */}
          <button
            onClick={showPrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-forest/80 hover:bg-forest text-sand border border-sand/30 z-20 transition-all hover:scale-110"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={showNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-forest/80 hover:bg-forest text-sand border border-sand/30 z-20 transition-all hover:scale-110"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Media Container */}
          <div
            className="max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center relative z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {filteredImages[lightboxIndex].isVideo ? (
              <div className="w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-sand/30 p-1">
                <video
                  src={filteredImages[lightboxIndex].videoSrc}
                  controls
                  autoPlay
                  playsInline
                  className="w-full max-h-[70vh] rounded-xl object-contain bg-black mx-auto"
                />
              </div>
            ) : (
              <img loading="lazy" decoding="async" src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].title}
                className="max-h-[72vh] max-w-full rounded-2xl object-contain shadow-2xl border border-sand/30"
              />
            )}
            <div className="mt-4 text-center">
              <h4 className="font-serif text-2xl text-cream font-light">{filteredImages[lightboxIndex].title}</h4>
              <p className="text-sm text-sand/80 font-sans">{filteredImages[lightboxIndex].subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
