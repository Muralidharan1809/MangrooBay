import React, { useState } from 'react';
import { LOCATION_DATA, BRAND_DATA, MARINA_KEY_DETAILS } from '../data/content';
import { MapPin, Navigation, ExternalLink, Compass, Phone, Mail, Clock, ShieldCheck, Anchor, Waves } from 'lucide-react';

export default function LocationSection({ onOpenContact }) {
  const [activePin, setActivePin] = useState('marina');

  return (
    <section id="location" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest text-sand text-xs font-semibold uppercase tracking-luxury mb-4 shadow-sm">
            <Anchor className="w-3.5 h-3.5 text-sunset" />
            <span>Pondicherry Marina Boathouse</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-light leading-tight">
            Find your way to the bay.
          </h2>

          <p className="mt-4 text-base text-charcoal/75 max-w-xl font-sans">
            Departing directly from the iconic <strong>Pondicherry Marina Boathouse</strong> — the rare coastal intersection where serene mangrove tunnels, backwaters, and the Bay of Bengal sea mouth meet.
          </p>
        </div>

        {/* Map & Guide Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Styled Interactive Coastal Estuary Map */}
          <div className="lg:col-span-7 bg-forest-deep rounded-3xl overflow-hidden shadow-luxury border border-sand/30 p-6 sm:p-8 flex flex-col justify-between relative min-h-[480px]">
            {/* SVG Coastal Topography & Waterways Map */}
            <div className="absolute inset-0 opacity-40">
              <svg className="w-full h-full object-cover" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Coastal coastline */}
                <path d="M550 0 C540 180 570 320 620 600 L800 600 L800 0 Z" fill="#1B4D41" opacity="0.6" />
                {/* Backwater lagoon & mangrove estuary curves */}
                <path d="M200 600 C250 480 320 380 400 320 C480 260 520 200 500 100 C480 40 450 10 400 0 L320 0 C380 40 390 120 330 200 C280 260 210 320 180 440 Z" fill="#315C4A" opacity="0.8" />
                {/* Sea Mouth Confluence channel */}
                <path d="M380 340 C430 350 510 370 580 390" stroke="#D9825B" strokeWidth="3" strokeDasharray="6 6" opacity="0.7" />
                <path d="M380 340 C320 360 270 410 240 500" stroke="#E9D8B8" strokeWidth="2" strokeDasharray="6 6" opacity="0.5" />
                
                <circle cx="380" cy="330" r="140" fill="#E9D8B8" opacity="0.04" />
                <circle cx="380" cy="330" r="90" fill="#E9D8B8" opacity="0.06" />

                {/* Ocean and Estuary Labels */}
                <text x="640" y="280" fill="#E9D8B8" opacity="0.5" fontSize="16" letterSpacing="4" fontFamily="sans-serif">BAY OF BENGAL</text>
                <text x="500" y="420" fill="#D9825B" opacity="0.6" fontSize="12" letterSpacing="2" fontFamily="sans-serif">SEA MOUTH CONFLUENCE</text>
                <text x="180" y="240" fill="#E9D8B8" opacity="0.4" fontSize="14" letterSpacing="3" fontFamily="sans-serif">MANGROVE BIO-RESERVE</text>
              </svg>
            </div>

            {/* Map Header Overlay */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/90 backdrop-blur-md border border-sand/30 text-xs text-sand uppercase tracking-wider">
                <Anchor className="w-3.5 h-3.5 text-sunset" />
                <span>Pondicherry Marina Boathouse</span>
              </div>
              <span className="text-[11px] text-sand/70 tracking-widest uppercase">Puducherry, India</span>
            </div>

            {/* Interactive Pins on Map */}
            <div className="relative z-10 my-auto py-10 flex flex-col items-center">
              
              {/* Marina Boathouse Pin */}
              <div className="relative group cursor-pointer" onClick={() => setActivePin('marina')}>
                <div className="w-16 h-16 rounded-full bg-sand text-forest flex items-center justify-center shadow-floating border-4 border-forest-deep animate-bounce">
                  <Anchor className="w-8 h-8 text-forest" />
                </div>
                <div className="absolute top-18 left-1/2 -translate-x-1/2 bg-forest-deep/95 backdrop-blur-md border border-sand/40 p-3 rounded-xl text-center shadow-luxury w-56 pointer-events-none mt-2">
                  <p className="font-serif text-sand text-sm font-semibold">Pondicherry Marina Boathouse</p>
                  <p className="text-[10px] text-cream/80">Marina Bay Boarding Jetty</p>
                </div>
              </div>

              {/* Waterways feature tags */}
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs text-sand border border-sand/20 flex items-center gap-1.5">
                  <Waves className="w-3.5 h-3.5 text-sunset" />
                  <span>Sea Mouth Ride Point</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs text-cream/90 border border-sand/20 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-mangrove-light" />
                  <span>Mangrove Safari Hub</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs text-sand border border-sand/20">
                  White Town ~ 5 mins
                </span>
              </div>
            </div>

            {/* Map Footer Action */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-sand/20">
              <div>
                <p className="text-xs text-sand font-medium uppercase tracking-wider">Navigation Destination</p>
                <p className="text-xs text-cream/80 font-mono">Pondicherry Marina Boathouse • Puducherry</p>
              </div>

              <a
                href={BRAND_DATA.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sand text-forest hover:bg-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Address, Key Marina Highlights & Directions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Box */}
            <div className="p-8 rounded-2xl bg-white border border-sand/40 shadow-luxury">
              <span className="text-[11px] uppercase tracking-luxury text-sunset font-semibold block mb-1">
                Official Boarding Destination
              </span>
              <h3 className="font-serif text-2xl text-forest font-light mb-3">
                Pondicherry Marina Boathouse
              </h3>
              
              <div className="flex items-start gap-3 text-sm text-charcoal/80 mb-6">
                <MapPin className="w-5 h-5 text-sunset shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-forest">Marina Bay Boarding Jetty</p>
                  <p className="text-xs text-charcoal/70 mt-1">
                    {LOCATION_DATA.address}
                  </p>
                  <p className="text-[11px] text-mangrove mt-2 leading-relaxed">
                    {LOCATION_DATA.note}
                  </p>
                </div>
              </div>

              {/* Get Directions CTA */}
              <a
                href={BRAND_DATA.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-forest text-sand hover:bg-forest-deep hover:text-white uppercase tracking-widest text-xs font-semibold transition-all shadow-md"
              >
                <span>Get Directions to Marina Boathouse →</span>
                <Navigation className="w-4 h-4" />
              </a>
            </div>

            {/* Marina Facilities List */}
            <div className="p-6 rounded-2xl bg-white border border-sand/40 shadow-sm">
              <h4 className="font-serif text-lg text-forest font-medium mb-3">
                Boathouse & Marina Amenities
              </h4>
              <div className="space-y-2.5">
                {LOCATION_DATA.marinaFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-charcoal/80">
                    <ShieldCheck className="w-4 h-4 text-mangrove shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Distances */}
            <div className="p-6 rounded-2xl bg-cream-warm border border-sand/40">
              <h4 className="font-serif text-lg text-forest font-light mb-3">
                Proximity from Puducherry City
              </h4>
              <ul className="space-y-2">
                {LOCATION_DATA.attractions.map((attraction, i) => (
                  <li key={i} className="flex items-center justify-between text-xs py-1.5 border-b border-sand/30 last:border-0">
                    <span className="text-forest font-medium">{attraction.name}</span>
                    <span className="text-charcoal/60 italic">{attraction.distance}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
