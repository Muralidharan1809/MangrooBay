import React from 'react';
import { WHY_MARINA_DATA } from '../data/content';
import { Sparkles, ShieldCheck, Heart, Sunset, Compass, Anchor } from 'lucide-react';

export default function WhyMarinaBay() {
  const getIcon = (idx) => {
    switch (idx) {
      case 0: return <Anchor className="w-5 h-5 text-forest" />;
      case 1: return <Compass className="w-5 h-5 text-mangrove" />;
      case 2: return <Heart className="w-5 h-5 text-sunset" />;
      case 3: return <Sunset className="w-5 h-5 text-sunset-glow" />;
      case 4: return <Sparkles className="w-5 h-5 text-sand-dark" />;
      default: return <Sparkles className="w-5 h-5 text-forest" />;
    }
  };

  return (
    <section className="py-24 md:py-32 bg-cream-warm relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-luxury text-mangrove font-semibold mb-3 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-mangrove inline-block" />
            The Marina Bay Distinction
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-light leading-tight">
            Why choose our<br />
            <span className="italic text-sunset">waterfront boat rides?</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-charcoal/75 max-w-xl font-sans">
            Crafted for travelers who seek genuine tranquility, natural wonders, and uninterrupted serenity in Puducherry.
          </p>
        </div>

        {/* 5 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_MARINA_DATA.map((item, index) => (
            <div
              key={item.number}
              className={`p-8 sm:p-10 rounded-2xl bg-white border border-sand/40 shadow-luxury hover:shadow-floating transition-all duration-300 flex flex-col justify-between group ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl font-light text-sand-dark group-hover:text-sunset transition-colors">
                    {item.number}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-cream border border-sand/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(index)}
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-forest font-medium mb-3 group-hover:text-mangrove transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-charcoal/75 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-sand/30 flex items-center text-[11px] uppercase tracking-wider text-mangrove font-semibold">
                <span>Marina Bay Promise</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
