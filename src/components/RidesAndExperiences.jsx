import React, { useState } from 'react';
import { RIDES_AND_EXPERIENCES, ALL_PLACES_EXPLORED } from '../data/content';
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
  Anchor,
  Navigation,
  MapPin
} from 'lucide-react';

export default function RidesAndExperiences({ onBookRide }) {
  const [selectedCategory, setSelectedCategory] = useState('All Packages');

  const categories = [
    'All Packages',
    'Couples (₹3,000)',
    'Separate Boat (₹5,000)',
    'Shared Ride (₹500/₹250)',
    'Sunset & Sunrise'
  ];

  const filterMatches = (ride, cat) => {
    if (cat === 'All Packages') return true;
    if (cat === 'Couples (₹3,000)') return ride.id === 'couples-ride';
    if (cat === 'Separate Boat (₹5,000)') return ride.id === 'separate-ride';
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
    <section id="rides" className="py-20 md:py-28 bg-cream-warm relative overflow-hidden">
      {/* Background organic glow */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-sand/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-mangrove/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Clean Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest text-sand text-xs font-semibold uppercase tracking-luxury shadow-sm mb-3">
            <Anchor className="w-3.5 h-3.5 text-sunset" />
            <span>Pondicherry Boating Booking & Price • All 4 Sights in 1 Hour</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-light leading-tight mb-3">
            Pondicherry Mangrove Boating
          </h2>

          <p className="text-sm sm:text-base text-charcoal/90 leading-relaxed max-w-2xl mx-auto font-sans">
            Check Pondicherry boat ride price and packages. Experience the premier mangrove boating Pondicherry adventure with 100% private boat rides or shared family tours exploring all 4 iconic sights in 1 full hour.
          </p>
        </div>

        {/* Visual Route Showcase (The 4 Sights in Every Ride) */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-forest text-cream border border-sand/30 shadow-luxury">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-5 border-b border-sand/20">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-sunset font-bold block mb-1">
                Unified 1-Hour Cruise Route
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-cream">
                All 4 Sights Explored in Every Ride
              </h3>
            </div>
            <div className="px-4 py-2 rounded-full bg-sand/20 border border-sand/40 text-sand text-xs font-medium self-start md:self-auto">
              ✓ No separate tickets needed — all included in 1 hour
            </div>
          </div>

          {/* 4 Places Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ALL_PLACES_EXPLORED.map((place) => (
              <div
                key={place.id}
                className="rounded-2xl overflow-hidden bg-forest-deep/90 border border-sand/20 group hover:border-sand/50 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/20 to-transparent" />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-forest-deep/80 text-sand text-[10px] font-mono font-bold border border-sand/30">
                    Stop {place.number}
                  </span>
                </div>
                <div className="p-3.5 space-y-1.5 flex-1 flex flex-col justify-between">
                  <h4 className="font-serif text-base text-sand font-medium leading-snug">
                    {place.title}
                  </h4>
                  <p className="text-[11px] text-cream/75 leading-relaxed font-sans line-clamp-2">
                    {place.description}
                  </p>
                  <span className="text-[10px] text-sunset font-medium block pt-1 border-t border-sand/15">
                    ✓ Included in 1-Hour Cruise
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Route Flow Line */}
          <div className="mt-6 pt-4 border-t border-sand/15 flex flex-wrap items-center justify-center gap-2 text-xs text-sand/90 text-center">
            <span className="text-sunset font-bold">Cruise Path:</span>
            <span>Mangrove Bay Jetty</span>
            <span className="text-sunset">➔</span>
            <span>1. Mangroves</span>
            <span className="text-sunset">➔</span>
            <span>2. 2,000-Yr Arikamedu</span>
            <span className="text-sunset">➔</span>
            <span>3. Beach & River Mouth</span>
            <span className="text-sunset">➔</span>
            <span>4. Harbour</span>
            <span className="text-sunset">➔</span>
            <span>Return to Jetty</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-forest text-sand shadow-md scale-105'
                  : 'bg-white text-charcoal/90 hover:bg-sand/30 hover:text-forest border border-sand/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Rides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredRides.map((ride) => (
            <div
              key={ride.id}
              className="bg-white rounded-3xl overflow-hidden shadow-luxury border border-sand/40 flex flex-col justify-between group hover:shadow-floating transition-all duration-300"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-sand/30">
                  <img
                    src={ride.image}
                    alt={ride.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/20 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-forest-deep/85 text-sand border border-sand/30 backdrop-blur-md">
                      {ride.badge}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-forest-deep/80 text-sand border border-sand/30 flex items-center justify-center backdrop-blur-md">
                      {getRideIcon(ride.id)}
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-cream">
                    <span className="text-[10px] uppercase tracking-luxury text-sunset font-semibold block">
                      {ride.category}
                    </span>
                    <h3 className="font-serif text-2xl text-cream font-light group-hover:text-sand transition-colors">
                      {ride.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  <p className="font-serif text-sm italic text-forest font-light">
                    “{ride.tagline}”
                  </p>

                  <p className="text-xs text-charcoal/90 leading-relaxed font-sans line-clamp-3">
                    {ride.description}
                  </p>

                  {/* Pricing Badge */}
                  <div className="p-3.5 rounded-2xl bg-sand/15 border border-sand/50 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-forest/70 font-bold block">1 Hour Full Cruise</span>
                      {ride.id === 'couples-ride' ? (
                        <div className="flex items-baseline gap-1 mt-0.5">
                          <span className="text-lg font-serif font-bold text-forest">₹3,000</span>
                          <span className="text-[11px] text-charcoal/90">/ Couple (2 Guests)</span>
                        </div>
                      ) : ride.id === 'separate-ride' ? (
                        <div className="flex items-baseline gap-1 mt-0.5">
                          <span className="text-lg font-serif font-bold text-forest">₹5,000</span>
                          <span className="text-[11px] text-charcoal/90">/ Separate Boat (1–10 Guests)</span>
                        </div>
                      ) : (
                        <div className="flex items-baseline gap-2 mt-0.5">
                          <span className="text-base font-serif font-bold text-forest">
                            ₹500 <span className="text-[10px] font-sans font-normal text-charcoal/90">Adult</span>
                          </span>
                          <span className="text-sm font-serif font-semibold text-sunset">
                            ₹250 <span className="text-[10px] font-sans font-normal text-charcoal/90">Child</span>
                          </span>
                        </div>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-forest text-sand text-[10px] font-semibold uppercase tracking-wider">
                      <Clock className="w-3 h-3 text-sunset" />
                      <span>60 Mins</span>
                    </span>
                  </div>

                  {/* Feature Bullets */}
                  <div className="pt-2 space-y-1.5 text-xs text-charcoal/90 font-sans">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-mangrove shrink-0" />
                      <span>Explores Mangroves, Arikamedu, Beach & Harbour</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-mangrove shrink-0" />
                      <span>1 Hour full duration ride</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-mangrove shrink-0" />
                      <span>Free parking, clean restrooms & changing rooms</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 sm:p-6 pt-0">
                <button
                  onClick={() => {
                    trackBookingInitiated(ride.title, 'Ride Card');
                    onBookRide && onBookRide(ride);
                  }}
                  className="w-full py-3 rounded-full bg-forest text-sand hover:bg-forest-deep hover:text-white uppercase tracking-widest text-xs font-semibold transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Book {ride.title}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Amenities Trust Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-sand/50 shadow-sm flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-forest font-medium">
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-4 h-4 text-mangrove" />
            <span><strong>Free Vehicle Parking</strong> (Cars & Bikes)</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-4 h-4 text-mangrove" />
            <span><strong>Clean Restrooms & Toilet</strong> Facilities</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-4 h-4 text-mangrove" />
            <span><strong>Private Dress Changing Rooms</strong></span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-4 h-4 text-mangrove" />
            <span><strong>Govt-Approved Safety Gear</strong> & Pilots</span>
          </span>
        </div>

      </div>
    </section>
  );
}
