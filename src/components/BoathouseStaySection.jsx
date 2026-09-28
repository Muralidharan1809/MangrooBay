import React, { useState } from 'react';
import { BOATHOUSE_STAY_DATA } from '../data/content';
import { 
  Bed, 
  Eye, 
  Anchor, 
  Wind, 
  Sparkles, 
  Compass, 
  ArrowRight, 
  Check, 
  ChevronRight, 
  Info,
  Maximize2
} from 'lucide-react';

export default function BoathouseStaySection({ onOpenBooking, onOpenLightbox }) {
  const [activeSuiteIndex, setActiveSuiteIndex] = useState(0);
  const activeSuite = BOATHOUSE_STAY_DATA.suites[activeSuiteIndex];

  const getFeatureIcon = (name) => {
    switch (name) {
      case 'Comfortable stay': return <Bed className="w-5 h-5 text-sand" />;
      case 'Waterfront views': return <Eye className="w-5 h-5 text-sunset" />;
      case 'Private deck': return <Anchor className="w-5 h-5 text-sand" />;
      case 'Air conditioning': return <Wind className="w-5 h-5 text-mangrove" />;
      case 'Premium interiors': return <Sparkles className="w-5 h-5 text-sand" />;
      case 'Natural surroundings': return <Compass className="w-5 h-5 text-forest" />;
      default: return <Sparkles className="w-5 h-5 text-sand" />;
    }
  };

  return (
    <section id="stay" className="py-24 md:py-32 bg-cream-pure relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-luxury text-mangrove font-semibold mb-3 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-mangrove inline-block" />
              {BOATHOUSE_STAY_DATA.eyebrow}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-light leading-tight">
              {BOATHOUSE_STAY_DATA.heading}
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-charcoal/75 leading-relaxed font-sans">
            {BOATHOUSE_STAY_DATA.description}
          </p>
        </div>

        {/* Suite Selection Tabs */}
        <div className="flex gap-4 border-b border-sand/40 pb-4 mb-10 overflow-x-auto">
          {BOATHOUSE_STAY_DATA.suites.map((suite, idx) => (
            <button
              key={suite.id}
              onClick={() => setActiveSuiteIndex(idx)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm uppercase tracking-widest font-medium transition-all whitespace-nowrap ${
                activeSuiteIndex === idx
                  ? 'bg-forest text-cream shadow-md'
                  : 'bg-white/80 text-charcoal/70 hover:bg-sand/30 hover:text-forest border border-sand/40'
              }`}
            >
              {suite.title}
            </button>
          ))}
        </div>

        {/* Main Accommodation Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-luxury border border-sand/30">
          
          {/* Left Column: Suite Photography Showcase */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-sand/20 group">
              <img
                src={activeSuite.image}
                alt={activeSuite.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent opacity-80" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-semibold bg-forest-deep/80 backdrop-blur-md text-sand border border-sand/30">
                  {activeSuite.category}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-cream">
                <div>
                  <p className="font-serif text-xl sm:text-2xl text-cream font-light">{activeSuite.title}</p>
                  <p className="text-xs text-sand/80 font-sans">{activeSuite.capacity}</p>
                </div>
                <button
                  onClick={() => onOpenLightbox && onOpenLightbox(activeSuite.image)}
                  className="p-2.5 rounded-full bg-forest-deep/60 hover:bg-forest text-sand border border-sand/30 transition-colors"
                  title="Expand photo"
                  aria-label="Expand photo"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Thumbnail Preview Strip */}
            <div className="grid grid-cols-3 gap-3">
              {activeSuite.gallery.map((thumb, tIdx) => (
                <div
                  key={tIdx}
                  className="relative rounded-xl overflow-hidden aspect-[16/10] border-2 border-transparent hover:border-sand cursor-pointer transition-all"
                  onClick={() => onOpenLightbox && onOpenLightbox(thumb)}
                >
                  <img
                    src={thumb}
                    alt={`Preview ${tIdx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-forest/20 hover:bg-transparent transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Details & Verified Feature List */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold uppercase tracking-luxury text-sunset">
                  Floating Sanctuaries
                </span>
                <span className="text-xs text-charcoal/40">•</span>
                <span className="text-xs text-charcoal/60">{activeSuite.capacity}</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-forest font-light mb-4">
                {activeSuite.title}
              </h3>

              <p className="text-sm text-charcoal/80 leading-relaxed mb-6">
                {activeSuite.description}
              </p>

              {/* Verified Feature Checklist */}
              <div className="border-t border-sand/40 pt-6 mb-8">
                <p className="text-xs uppercase tracking-luxury text-forest font-semibold mb-4">
                  Signature Inclusions
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {BOATHOUSE_STAY_DATA.features.map((feature) => (
                    <div key={feature.name} className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-cream border border-sand/40 shrink-0">
                        {getFeatureIcon(feature.name)}
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-forest uppercase tracking-wide">
                          {feature.name}
                        </h4>
                        <p className="text-[11px] text-charcoal/65 leading-tight">
                          {feature.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Editable Rate Placeholder */}
              <div className="p-4 rounded-xl bg-sand/20 border border-sand/50 mb-8 flex items-start gap-3">
                <Info className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                <div className="text-xs text-charcoal/80">
                  <span className="font-semibold text-forest">Pricing & Availability: </span>
                  {activeSuite.pricingPlaceholder}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-sand/30">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-forest text-sand hover:bg-forest-deep hover:text-white uppercase tracking-widest text-xs font-semibold transition-all shadow-md"
              >
                <span>Explore the Stay →</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-sand/30 hover:bg-sand/60 text-forest uppercase tracking-widest text-xs font-medium transition-colors"
              >
                Check Dates
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
