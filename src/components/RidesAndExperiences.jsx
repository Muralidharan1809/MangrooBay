import React, { useState } from 'react';
import { RIDES_AND_EXPERIENCES, ALL_PLACES_EXPLORED, MARINA_KEY_DETAILS, STANDARD_PRICING } from '../data/content';
import { trackBookingInitiated } from '../utils/analytics';
import { 
  Sun, 
  Sunrise, 
  Heart, 
  Sparkles, 
  Compass, 
  Waves, 
  Clock, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  MapPin,
  Anchor,
  Navigation
} from 'lucide-react';

export default function RidesAndExperiences({ onBookRide }) {
  const [selectedCategory, setSelectedCategory] = useState('All Packages');

  const categories = [
    'All Packages',
    'Couples (₹3,000)',
    'Private Boat (₹5,000)',
    'Shared Ride (₹500/₹250)',
    'Sunset & Sunrise'
  ];

  const filterMatches = (ride, cat) => {
    if (cat === 'All Packages') return true;
    if (cat === 'Couples (₹3,000)') return ride.id === 'couples-ride';
    if (cat === 'Private Boat (₹5,000)') return ride.id === 'separate-ride';
    if (cat === 'Shared Ride (₹500/₹250)') return ride.id === 'group-ride';
    if (cat === 'Sunset & Sunrise') return ride.id === 'pondicherry-beach-river' || ride.id === 'pondicherry-harbour';
    return true;
  };

  const filteredRides = RIDES_AND_EXPERIENCES.filter(r => filterMatches(r, selectedCategory));

  const getRideIcon = (id) => {
    switch (id) {
      case 'couples-ride': return <Heart className="w-5 h-5 text-sunset" />;
      case 'separate-ride': return <Anchor className="w-5 h-5 text-sunset" />;
      case 'group-ride': return <Sparkles className="w-5 h-5 text-sand" />;
      case 'pondicherry-beach-river': return <Sun className="w-5 h-5 text-sunset" />;
      case 'pondicherry-harbour': return <Sunrise className="w-5 h-5 text-sand" />;
      default: return <Waves className="w-5 h-5 text-sand" />;
    }
  };

  return (
    <section id="rides" className="py-24 md:py-32 bg-cream-warm relative overflow-hidden">
      {/* Background organic glow */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-sand/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-mangrove/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest text-sand text-xs font-semibold uppercase tracking-luxury shadow-sm">
              <Anchor className="w-3.5 h-3.5 text-sunset" />
              <span>Pondy Mermaid Boat House</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand/40 border border-sand/80 text-forest text-xs font-semibold uppercase tracking-luxury shadow-sm">
              <Clock className="w-3.5 h-3.5 text-forest" />
              <span>Boating: Morning 7:00 AM – Evening 5:30 PM</span>
            </div>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-light leading-tight mb-4">
            Signature Boat Rides
          </h2>

          <p className="text-sm sm:text-base text-charcoal/75 leading-relaxed max-w-2xl mx-auto font-sans">
            Every 1-hour cruise explores all iconic Puducherry sights together — from tranquil mangrove tunnels and 2,000-year Arikamedu ruins to beach sea mouth confluence and harbor views.
          </p>
          <div className="w-16 h-[1px] bg-sand/60 mx-auto mt-6" />
        </div>

        {/* Highlight Pricing & Duration Ribbon */}
        <div className="max-w-4xl mx-auto mb-12 p-5 sm:p-6 rounded-2xl bg-white border border-sand/60 shadow-luxury space-y-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-forest text-sand flex items-center justify-center shrink-0 shadow-sm">
                <Clock className="w-5 h-5 text-sunset" />
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  <p className="text-xs sm:text-sm uppercase tracking-wider font-bold text-forest">
                    All Rides: 1 Hour (60 Mins) Complete Tour
                  </p>
                  <span className="px-2.5 py-0.5 rounded-full bg-sand/30 border border-sand/60 text-forest text-[10px] font-bold uppercase tracking-wider">
                    Official Fixed Pricing
                  </span>
                </div>
                <p className="text-xs text-charcoal/70 mt-0.5">
                  Certified life jackets & licensed boat master included on every ride.
                </p>
              </div>
            </div>

            {/* Price Tags */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <div className="px-3 py-1.5 rounded-xl bg-forest-deep text-cream text-xs font-semibold shrink-0 shadow-sm">
                <span className="text-[10px] text-sand/70 block uppercase">Shared Ride</span>
                <span className="text-sand font-bold text-sm">₹500 <span className="text-[10px] font-normal text-cream/70 font-sans">/ Adult</span></span>
                <span className="text-sand/40 mx-1">•</span>
                <span className="text-sunset font-bold text-sm">₹250 <span className="text-[10px] font-normal text-cream/70 font-sans">/ Child</span></span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-sand/30 border border-sand/60 text-forest text-xs font-semibold shrink-0">
                <span className="text-[10px] text-charcoal/60 block uppercase">Couple Ride</span>
                <span className="text-forest font-bold text-sm">₹3,000 <span className="text-[10px] font-normal text-charcoal/70 font-sans">/ 2 Guests</span></span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-sunset/15 border border-sunset/40 text-forest text-xs font-semibold shrink-0">
                <span className="text-[10px] text-sunset font-bold block uppercase">Separate Private Boat</span>
                <span className="text-forest font-bold text-sm">₹5,000 <span className="text-[10px] font-normal text-charcoal/70 font-sans">/ Full Boat</span></span>
              </div>
            </div>
          </div>

          {/* Pricing Guarantee Banner */}
          <div className="p-2.5 rounded-xl bg-sand/20 border border-sand/40 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-forest">
            <span className="font-semibold text-center sm:text-left">
              ⭐ <strong>Pondy Mermaid Boat House:</strong> Genuine 1-Hour Full Duration Rides with Certified Captains!
            </span>
            <span className="text-[11px] font-medium text-sunset font-mono">
              Couple ₹3,000 • Separate Boat ₹5,000 • Shared ₹500/₹250
            </span>
          </div>

          {/* Key Visitor Facilities */}
          <div className="pt-2 border-t border-sand/30 flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6 text-xs text-forest font-medium">
            <span className="inline-flex items-center gap-1.5 bg-sand/15 px-3 py-1 rounded-full">
              <Check className="w-3.5 h-3.5 text-mangrove shrink-0" />
              <span><strong>Free Vehicle Parking</strong> (Cars & Bikes)</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-sand/15 px-3 py-1 rounded-full">
              <Check className="w-3.5 h-3.5 text-mangrove shrink-0" />
              <span><strong>Clean Restrooms & Toilet</strong> Facilities</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-sand/15 px-3 py-1 rounded-full">
              <Check className="w-3.5 h-3.5 text-mangrove shrink-0" />
              <span><strong>Dress Changing Rooms</strong> Available</span>
            </span>
          </div>
        </div>

        {/* All Sights Explored in Every Ride - Route Showcase */}
        <div className="max-w-6xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-forest text-cream border border-sand/30 shadow-floating relative overflow-hidden">
          {/* Subtle ambient lighting */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-mangrove/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-sunset/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Header Badge & Title */}
            <div className="text-center max-w-3xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sunset/20 border border-sunset/40 text-sunset text-xs font-semibold uppercase tracking-luxury mb-3">
                <Navigation className="w-3.5 h-3.5 text-sunset" />
                <span>All 4 Sights Included In Every 1-Hour Cruise</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-cream font-light mb-3">
                No need to choose — <span className="italic text-sand font-normal">Every ride explores all destinations!</span>
              </h3>
              <p className="text-xs sm:text-sm text-sand/80 max-w-2xl mx-auto leading-relaxed">
                Whether you choose a <strong>Couples Ride (₹3,000)</strong>, <strong>Separate Private Boat (₹5,000)</strong>, or <strong>Shared Ride (₹500/₹250)</strong>, your 1-hour cruise navigates the entire waterway route covering all 4 scenic Puducherry highlights:
              </p>
            </div>

            {/* 4 Destination Route Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {ALL_PLACES_EXPLORED.map((place, idx) => (
                <div
                  key={place.id}
                  className="rounded-2xl overflow-hidden bg-forest-deep/90 border border-sand/20 flex flex-col justify-between group hover:border-sand/50 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={place.image}
                      alt={place.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/30 to-transparent" />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-forest-deep/80 text-sand text-[10px] font-mono font-bold border border-sand/30">
                      Stop {place.number}
                    </span>
                    <span className="absolute bottom-2 left-2.5 right-2.5 text-xs font-serif font-light text-cream line-clamp-1">
                      {place.title}
                    </span>
                  </div>
                  <div className="p-3.5 space-y-2 text-xs flex-1 flex flex-col justify-between">
                    <p className="text-[11px] text-sand/70 line-clamp-2 leading-relaxed">
                      {place.description}
                    </p>
                    <div className="pt-2 border-t border-sand/20 flex items-center justify-between text-[10px] text-sunset font-medium">
                      <span>✓ Included in 1-Hr Ride</span>
                      <span className="text-sand/50">Stop #{idx + 1}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Route Flow Ribbon */}
            <div className="p-3 sm:p-4 rounded-xl bg-forest-light/60 border border-sand/20 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-sand text-center">
              <span className="font-bold text-sunset">Complete 1-Hour Cruise Route:</span>
              <span className="text-white">Pondy Mermaid Jetty</span>
              <span className="text-sunset">➔</span>
              <span className="text-white">1. Mangrove Canopies</span>
              <span className="text-sunset">➔</span>
              <span className="text-white">2. 2,000-Yr Arikamedu</span>
              <span className="text-sunset">➔</span>
              <span className="text-white">3. Beach & River Confluence</span>
              <span className="text-sunset">➔</span>
              <span className="text-white">4. Harbour Breakwaters</span>
              <span className="text-sunset">➔</span>
              <span className="text-white">Return to Jetty</span>
            </div>
          </div>
        </div>

        {/* Section Subtitle for Packages */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs uppercase tracking-luxury text-forest font-semibold block mb-1">
            Choose How You Want To Cruise
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-forest font-light">
            Boating Packages & Pricing
          </h3>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-forest text-sand shadow-md scale-105'
                  : 'bg-white/80 text-charcoal/70 hover:bg-sand/30 hover:text-forest border border-sand/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Rides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredRides.map((ride) => (
            <div
              key={ride.id}
              className="bg-white rounded-3xl overflow-hidden shadow-luxury border border-sand/40 flex flex-col justify-between group hover:shadow-floating transition-all duration-500 transform hover:-translate-y-1"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-sand/30">
                  <img
                    src={ride.image}
                    alt={ride.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/20 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-forest-deep/85 text-sand border border-sand/30 backdrop-blur-md">
                      {ride.badge}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-forest-deep/80 text-sand border border-sand/30 flex items-center justify-center backdrop-blur-md">
                      {getRideIcon(ride.id)}
                    </div>
                  </div>

                  {/* Bottom Image Overlay Title */}
                  <div className="absolute bottom-4 left-4 right-4 text-cream">
                    <span className="text-[10px] uppercase tracking-luxury text-sunset font-semibold block mb-0.5">
                      {ride.category}
                    </span>
                    <h3 className="font-serif text-2xl text-cream font-light group-hover:text-sand transition-colors">
                      {ride.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <p className="font-serif text-base italic text-forest font-light">
                    “{ride.tagline}”
                  </p>

                  <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed font-sans">
                    {ride.description}
                  </p>

                  {/* Explicit Pricing & Duration Badge */}
                  <div className="p-3.5 rounded-xl bg-sand/15 border border-sand/50 space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-forest font-bold block">1 Hour Complete Ride</span>
                        {ride.id === 'couples-ride' ? (
                          <div className="flex items-baseline gap-1.5 mt-0.5">
                            <span className="text-base sm:text-lg font-serif font-bold text-forest">
                              ₹3,000
                            </span>
                            <span className="text-[11px] font-sans text-charcoal/70">/ Couple (2 Guests)</span>
                          </div>
                        ) : ride.id === 'separate-ride' ? (
                          <div className="flex items-baseline gap-1.5 mt-0.5">
                            <span className="text-base sm:text-lg font-serif font-bold text-forest">
                              ₹5,000
                            </span>
                            <span className="text-[11px] font-sans text-charcoal/70">/ Full Private Boat (1–10 Guests)</span>
                          </div>
                        ) : (
                          <div className="flex items-baseline gap-2 mt-0.5">
                            <span className="text-sm sm:text-base font-serif font-bold text-forest">
                              ₹500 <span className="text-[10px] font-sans font-normal text-charcoal/60">Adult</span>
                            </span>
                            <span className="text-xs sm:text-sm font-serif font-semibold text-sunset">
                              ₹250 <span className="text-[10px] font-sans font-normal text-charcoal/60">Child</span>
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-forest text-sand text-[10px] font-semibold uppercase tracking-wider">
                          <Clock className="w-3 h-3 text-sunset" />
                          <span>60 Mins</span>
                        </span>
                      </div>
                    </div>

                    <div className="pt-1.5 border-t border-sand/40 flex items-center justify-between text-[10px]">
                      <span className="text-forest font-semibold uppercase tracking-wider">
                        ✓ All 4 Sights Included
                      </span>
                      <span className="text-mangrove font-semibold uppercase tracking-wider">
                        Free Parking & Restrooms
                      </span>
                    </div>
                  </div>

                  {/* Meta Timing & Capacity Chips */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cream border border-sand/50 text-[11px] text-charcoal/80">
                      <Clock className="w-3.5 h-3.5 text-mangrove" />
                      <span>{ride.timing}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cream border border-sand/50 text-[11px] text-charcoal/80">
                      <Users className="w-3.5 h-3.5 text-sunset" />
                      <span>{ride.capacity}</span>
                    </div>
                  </div>

                  {/* Feature Bullets */}
                  <div className="pt-3 border-t border-sand/30 space-y-2">
                    {ride.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-charcoal/70">
                        <Check className="w-3.5 h-3.5 text-mangrove shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    trackBookingInitiated(ride.title, 'Ride Card');
                    onBookRide && onBookRide(ride);
                  }}
                  className="w-full py-3.5 rounded-full bg-forest text-sand hover:bg-forest-deep hover:text-white uppercase tracking-widest text-xs font-semibold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Book {ride.title}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pondy Mermaid Boat House Information Spotlight Box */}
        <div className="bg-forest text-cream rounded-3xl p-8 sm:p-12 shadow-floating border border-sand/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-mangrove/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-luxury text-sunset font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sunset" />
                Boarding Hub: Pondy Mermaid Boat House
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl text-cream font-light">
                Where Backwaters, Mangroves & Sea Meet
              </h3>

              <p className="text-sm text-cream/80 leading-relaxed font-sans">
                {MARINA_KEY_DETAILS.overview} Whether you wish to enjoy a peaceful scenic cruise, a romantic couple sunset date, or experience thrilling water splashes, all journeys begin smoothly from our dedicated marina jetty.
              </p>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => onBookRide && onBookRide({ title: "Custom Experience at Pondy Mermaid Boat House" })}
                  className="px-6 py-3 rounded-full bg-sand text-forest hover:bg-white text-xs uppercase tracking-widest font-semibold transition-colors shadow-md"
                >
                  Reserve Your Ride
                </button>
                <a
                  href="#location"
                  className="text-xs uppercase tracking-widest text-sand hover:text-white underline underline-offset-4"
                >
                  View Jetty Map & Directions
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MARINA_KEY_DETAILS.highlights.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-forest-deep/80 border border-sand/20">
                  <div className="w-8 h-8 rounded-full bg-sand/15 text-sand flex items-center justify-center mb-3">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-lg text-sand font-medium mb-1">{item.title}</h4>
                  <p className="text-xs text-cream/75 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
