import React from 'react';
import { INTRO_DATA } from '../data/content';
import { Waves, Sparkles } from 'lucide-react';

export default function Introduction() {
  return (
    <section id="intro" className="relative py-24 md:py-32 bg-cream overflow-hidden">
      {/* Subtle organic watermark / contour line */}
      <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-sand/20 blur-3xl -z-0 pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-80 h-80 rounded-full bg-mangrove/5 blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            <span className="text-xs uppercase tracking-luxury text-mangrove font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-mangrove inline-block" />
              {INTRO_DATA.eyebrow}
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-light leading-[1.15] mb-8">
              {INTRO_DATA.heading}
            </h2>

            <div className="relative pl-6 border-l-2 border-sunset/60 mb-8">
              <p className="text-lg md:text-xl text-charcoal/90 leading-relaxed font-serif italic">
                “{INTRO_DATA.body}”
              </p>
            </div>

            <p className="text-sm md:text-base text-charcoal/75 leading-relaxed mb-12">
              Anchored gently in Puducherry’s sheltered tidal waters, Marina Bay is designed as a sanctuary from the frantic rhythm of modern life. Here, time is measured not by clocks, but by the rise of morning mist and the warm descent of the evening sun.
            </p>

            {/* Feature Row: 01, 02, 03 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-sand/60">
              {INTRO_DATA.features.map((feat) => (
                <div key={feat.number} className="group">
                  <span className="font-serif text-2xl text-sunset font-medium block mb-1 group-hover:translate-x-1 transition-transform">
                    {feat.number}
                  </span>
                  <h3 className="font-sans text-sm font-semibold text-forest uppercase tracking-wider mb-1">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-charcoal/70 leading-normal">
                    {feat.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Asymmetric Overlapping Photography */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Large Photograph */}
              <div className="relative rounded-2xl overflow-hidden shadow-luxury border-4 border-white/80 aspect-[4/5] bg-sand/30">
                <img
                  src={INTRO_DATA.mainImage}
                  alt="Marina Bay boathouse waters and tropical greenery"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-forest-deep/80 backdrop-blur-md border border-sand/20 text-cream">
                  <p className="text-xs tracking-widest uppercase text-sand font-medium">Puducherry Lagoon</p>
                  <p className="font-serif text-sm italic text-cream/90">Serene morning ripples along the mangrove shore</p>
                </div>
              </div>

              {/* Overlapping Secondary Image */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 w-44 sm:w-56 md:w-64 rounded-xl overflow-hidden shadow-floating border-4 border-sand bg-white aspect-[3/4] z-20 hidden xs:block">
                <img
                  src={INTRO_DATA.secondaryImage}
                  alt="Close up of wooden boathouse deck overlooking calm water"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 text-center text-cream">
                  <span className="text-[10px] tracking-widest uppercase text-sand font-semibold">Private Verandah</span>
                </div>
              </div>

              {/* Decorative Accent Seal */}
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-sand text-forest flex flex-col items-center justify-center p-2 text-center shadow-lg border-2 border-white rotate-12">
                <Sparkles className="w-4 h-4 text-forest mb-0.5" />
                <span className="text-[9px] uppercase tracking-wider font-bold leading-tight">100% Eco Sanctuary</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
