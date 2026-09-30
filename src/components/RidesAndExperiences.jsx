import React, { useState } from 'react';
import { RIDES_AND_EXPERIENCES, MARINA_KEY_DETAILS } from '../data/content';
import { 
  Sun, 
  Sunrise, 
  Heart, 
  Cake, 
  Sparkles, 
  Compass, 
  Waves, 
  Clock, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  MapPin,
  Anchor
} from 'lucide-react';

export default function RidesAndExperiences({ onBookRide }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Couples & Sunset',
    'Celebrations',
    'Group & Adventure',
    'Mangrove & Nature',
    'Arikamedu Heritage'
  ];

  const filterMatches = (ride, cat) => {
    if (cat === 'All') return true;
    if (cat === 'Couples & Sunset') return ride.id === 'couples-ride' || ride.id === 'pondicherry-beach-river';
    if (cat === 'Celebrations') return ride.id === 'birthday-celebration';
    if (cat === 'Group & Adventure') return ride.id === 'group-ride' || ride.id === 'pondicherry-beach-river';
    if (cat === 'Mangrove & Nature') return ride.id === 'mangroo-forest' || ride.id === 'mangroove-forest';
    if (cat === 'Arikamedu Heritage') return ride.id === 'arikkamedu';
    return true;
  };

  const filteredRides = RIDES_AND_EXPERIENCES.filter(r => filterMatches(r, selectedCategory));

  const getRideIcon = (id) => {
    switch (id) {
      case 'couples-ride': return <Heart className="w-5 h-5 text-sunset" />;
      case 'birthday-celebration': return <Cake className="w-5 h-5 text-sand" />;
      case 'group-ride': return <Sparkles className="w-5 h-5 text-sand" />;
      case 'mangroo-forest': return <Compass className="w-5 h-5 text-mangrove" />;
      case 'mangroove-forest': return <Waves className="w-5 h-5 text-sand" />;
      case 'arikkamedu': return <Anchor className="w-5 h-5 text-sunset" />;
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
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest text-sand text-xs font-semibold uppercase tracking-luxury shadow-sm">
              <Anchor className="w-3.5 h-3.5 text-sunset" />
              <span>Pondicherry Marina Boathouse</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand/40 border border-sand/80 text-forest text-xs font-semibold uppercase tracking-luxury shadow-sm">
              <Clock className="w-3.5 h-3.5 text-forest" />
              <span>Boating: Morning 8:00 AM – Evening 5:30 PM</span>
            </div>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-light leading-tight mb-4">
            Signature Rides & Celebrations
          </h2>

          <p className="text-sm sm:text-base text-charcoal/75 leading-relaxed max-w-2xl mx-auto font-sans">
            From romantic sunset reflections and private couple voyages to joyful birthday celebrations, high-energy happy rides, coastal sea cruises, and quiet mangrove safaris.
          </p>
          <div className="w-16 h-[1px] bg-sand/60 mx-auto mt-6" />
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

                  {/* Meta Timing & Capacity Chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cream border border-sand/50 text-[11px] text-charcoal/80">
                      <Clock className="w-3.5 h-3.5 text-mangrove" />
                      <span>{ride.duration}</span>
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
                  onClick={() => onBookRide && onBookRide(ride)}
                  className="w-full py-3.5 rounded-full bg-forest text-sand hover:bg-forest-deep hover:text-white uppercase tracking-widest text-xs font-semibold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Book {ride.title}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pondicherry Marina Boathouse Information Spotlight Box */}
        <div className="bg-forest text-cream rounded-3xl p-8 sm:p-12 shadow-floating border border-sand/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-mangrove/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-luxury text-sunset font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sunset" />
                Boarding Hub: Pondicherry Marina Boathouse
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl text-cream font-light">
                Where Backwaters, Mangroves & Sea Meet
              </h3>

              <p className="text-sm text-cream/80 leading-relaxed font-sans">
                {MARINA_KEY_DETAILS.overview} Whether you wish to cut birthday cakes floating on calm waters, enjoy a romantic couple sunset date, or experience thrilling water splashes, all journeys begin smoothly from our dedicated marina jetty.
              </p>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => onBookRide && onBookRide({ title: "Custom Experience at Pondicherry Marina" })}
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
