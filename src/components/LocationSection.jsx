import React, { useState } from 'react';
import { LOCATION_DATA, BRAND_DATA } from '../data/content';
import { MapPin, Navigation, ExternalLink, Compass, ShieldCheck, Anchor, Waves } from 'lucide-react';

export default function LocationSection({ onOpenContact }) {
  const [activePin, setActivePin] = useState('Mangrove Bay');

  return (
    <section id="location" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <a
            href={BRAND_DATA.contact.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Click to view Mangrove Bay on Google Maps"
            className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest hover:bg-forest-deep text-sand hover:text-white text-xs font-semibold uppercase tracking-luxury mb-4 shadow-sm transition-all"
          >
            <Anchor className="w-3.5 h-3.5 text-sunset group-hover:rotate-12 transition-transform" />
            <span>Marina Boating in Pondy • Boating Near Me</span>
            <ExternalLink className="w-3 h-3 text-sand/80 ml-1 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-light leading-tight">
            Boating Near Me in Pondicherry
          </h2>

          <p className="mt-4 text-base text-charcoal/75 max-w-xl font-sans">
            Looking for the famous Marina boating in Pondy (Merina boating) or boating near me in Pondicherry? Depart directly from Pondy Boating (Mangrove Bay) at Marina, Vambakeerapalayam — featuring 100% free car parking, clean restrooms, and changing rooms right at the boarding jetty.
          </p>
        </div>

        {/* Map & Guide Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Styled Interactive Coastal Estuary Map */}
          <div className="lg:col-span-7 bg-forest-deep rounded-3xl overflow-hidden shadow-luxury border border-sand/30 p-6 sm:p-8 flex flex-col justify-between relative min-h-[500px]">
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
                <text x="630" y="280" fill="#E9D8B8" opacity="0.5" fontSize="16" letterSpacing="4" fontFamily="sans-serif">BAY OF BENGAL</text>
                <text x="500" y="420" fill="#D9825B" opacity="0.6" fontSize="12" letterSpacing="2" fontFamily="sans-serif">SEA MOUTH CONFLUENCE</text>
                <text x="180" y="240" fill="#E9D8B8" opacity="0.4" fontSize="14" letterSpacing="3" fontFamily="sans-serif">MANGROVE BIO-RESERVE</text>
              </svg>
            </div>

            {/* Map Header Overlay */}
            <div className="relative z-10 flex items-center justify-between">
              <a
                href={BRAND_DATA.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Click to view location in Google Maps"
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/90 hover:bg-forest backdrop-blur-md border border-sand/30 text-xs text-sand uppercase tracking-wider transition-all"
              >
                <Anchor className="w-3.5 h-3.5 text-sunset group-hover:scale-110 transition-transform" />
                <span className="font-medium">Mangrove Bay</span>
                <ExternalLink className="w-3 h-3 text-sand/70 group-hover:text-sand" />
              </a>
              <span className="text-[11px] text-sand/70 tracking-widest uppercase">Puducherry, India</span>
            </div>

            {/* Interactive Clickable Pin on Map - Redirects directly to Google Maps */}
            <div className="relative z-10 my-auto py-8 flex flex-col items-center">
              
              <a
                href={BRAND_DATA.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Click to open Mangrove Bay on Google Maps"
                className="relative group cursor-pointer block transform hover:scale-105 transition-all duration-300"
              >
                {/* Pulsing ring indicator */}
                <div className="absolute -inset-3 bg-sand/20 rounded-full animate-ping pointer-events-none" />

                {/* Pin Circle */}
                <div className="relative w-16 h-16 rounded-full bg-sand text-forest flex items-center justify-center shadow-floating border-4 border-forest-deep group-hover:bg-white group-hover:shadow-2xl transition-all">
                  <Anchor className="w-8 h-8 text-forest group-hover:text-forest-deep transition-colors" />
                </div>

                {/* Pin Tooltip Card */}
                <div className="relative mt-3 -translate-x-1/2 left-1/2 bg-forest-deep/95 backdrop-blur-md border border-sand/50 p-3.5 rounded-2xl text-center shadow-luxury w-64 group-hover:border-sand group-hover:bg-forest transition-all">
                  <div className="flex items-center justify-center gap-1.5 mb-0.5">
                    <p className="font-serif text-sand text-sm font-semibold tracking-wide">Mangrove Bay</p>
                    <ExternalLink className="w-3.5 h-3.5 text-sunset shrink-0" />
                  </div>
                  <p className="text-[11px] text-cream/90 font-light">Mangrove Bay Official Boarding Jetty</p>
                  <div className="mt-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sunset text-forest text-[10px] font-semibold tracking-wider uppercase shadow-sm">
                    <MapPin className="w-3 h-3" />
                    <span>Click to Open in Maps</span>
                  </div>
                </div>
              </a>

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

            {/* Map Footer Action Bar */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-sand/20">
              <div>
                <p className="text-xs text-sand font-medium uppercase tracking-wider">Navigation Destination</p>
                <p className="text-xs text-cream/90 font-mono">Mangrove Bay • Puducherry</p>
              </div>

              <a
                href={BRAND_DATA.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sand text-forest hover:bg-white hover:text-forest-deep text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-95"
              >
                <MapPin className="w-3.5 h-3.5 text-forest" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Address, Key Amenities & Directions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Box */}
            <div className="p-8 rounded-2xl bg-white border border-sand/40 shadow-luxury">
              <span className="text-[11px] uppercase tracking-luxury text-sunset font-semibold block mb-1">
                Official Boarding Destination
              </span>
              <h3 className="font-serif text-2xl text-forest font-light mb-3">
                Mangrove Bay
              </h3>
              
              <div className="flex items-start gap-3 text-sm text-charcoal/80 mb-6">
                <MapPin className="w-5 h-5 text-sunset shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-forest">Mangrove Bay Boarding Jetty</p>
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
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-forest text-sand hover:bg-forest-deep hover:text-white uppercase tracking-widest text-xs font-semibold transition-all shadow-md group"
              >
                <span>Get Directions to Mangrove Bay</span>
                <Navigation className="w-4 h-4 text-sunset group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Amenities List */}
            <div className="p-6 rounded-2xl bg-white border border-sand/40 shadow-sm">
              <h4 className="font-serif text-lg text-forest font-medium mb-3">
                Visitor Amenities & Facilities
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

            {/* Nearby Proximity */}
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
