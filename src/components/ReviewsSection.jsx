import React, { useState } from 'react';
import { REVIEWS_DATA, BRAND_DATA } from '../data/content';
import { Star, CheckCircle2, MessageSquare, ExternalLink, ThumbsUp, Sparkles, Navigation, Anchor } from 'lucide-react';

export default function ReviewsSection({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredReviews = activeCategory === 'all'
    ? REVIEWS_DATA.reviews
    : REVIEWS_DATA.reviews.filter(r => r.category === activeCategory);

  return (
    <section id="reviews" className="py-24 md:py-32 bg-cream-warm relative overflow-hidden border-t border-sand/40">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-sand/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-forest/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest text-sand text-xs font-semibold uppercase tracking-luxury mb-4 shadow-sm">
              <Star className="w-3.5 h-3.5 fill-sunset text-sunset" />
              <span>Verified Customer Reviews</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-light leading-tight">
              Loved by travelers & locals alike.
            </h2>

            <p className="mt-4 text-base text-charcoal/75 font-sans leading-relaxed">
              Read authentic feedback from couples, families, and travelers who experienced our 1-hour backwater cruises, private charters, and mangrove safaris departing from <strong>Mangrove Bay</strong>.
            </p>
          </div>

          {/* Google Aggregate Rating Card */}
          <div className="p-6 rounded-2xl bg-white border border-sand/50 shadow-luxury flex flex-col sm:flex-row items-center gap-6 shrink-0">
            {/* Score & Stars */}
            <div className="flex items-center gap-4 text-left">
              <div className="w-14 h-14 rounded-2xl bg-forest text-sand flex flex-col items-center justify-center font-serif shadow-sm">
                <span className="text-2xl font-bold leading-none">{REVIEWS_DATA.aggregate.score}</span>
                <span className="text-[10px] text-cream/70">out of 5</span>
              </div>
              <div>
                <div className="flex items-center gap-1 text-sunset mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-sunset text-sunset" />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-charcoal/80 font-medium">
                  {/* Google 'G' stylized text */}
                  <span className="font-semibold text-forest">Google Reviews</span>
                  <span className="text-charcoal/40">•</span>
                  <span className="text-charcoal/70">{REVIEWS_DATA.aggregate.totalReviews} verified ratings</span>
                </div>
              </div>
            </div>

            {/* Direct Google Review CTA Button */}
            <a
              href={REVIEWS_DATA.aggregate.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-forest hover:bg-forest-deep text-sand hover:text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm shrink-0"
              title="View all reviews on Google Maps"
            >
              <ExternalLink className="w-3.5 h-3.5 text-sunset" />
              <span>View on Google</span>
            </a>
          </div>
        </div>

        {/* Highlight Perks Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
          <div className="p-4 rounded-xl bg-white/80 border border-sand/40 text-center">
            <span className="text-xl font-serif text-forest font-semibold block">1 Hour</span>
            <span className="text-[11px] text-charcoal/70 font-medium">Full Duration Every Ride</span>
          </div>
          <div className="p-4 rounded-xl bg-white/80 border border-sand/40 text-center">
            <span className="text-xl font-serif text-forest font-semibold block">100% Free</span>
            <span className="text-[11px] text-charcoal/70 font-medium">Vehicle Parking At Jetty</span>
          </div>
          <div className="p-4 rounded-xl bg-white/80 border border-sand/40 text-center">
            <span className="text-xl font-serif text-forest font-semibold block">Hygienic</span>
            <span className="text-[11px] text-charcoal/70 font-medium">Toilets & Changing Rooms</span>
          </div>
          <div className="p-4 rounded-xl bg-white/80 border border-sand/40 text-center">
            <span className="text-xl font-serif text-forest font-semibold block">₹3K & ₹5K</span>
            <span className="text-[11px] text-charcoal/70 font-medium">Couple & Private Boat Plans</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {REVIEWS_DATA.filters.map(filter => {
            const isActive = activeCategory === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveCategory(filter.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                  isActive
                    ? 'bg-forest text-sand shadow-sm'
                    : 'bg-white text-charcoal/75 hover:bg-sand/30 border border-sand/40'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredReviews.map(rev => (
            <div
              key={rev.id}
              className="p-7 rounded-3xl bg-white border border-sand/40 shadow-sm hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: User Avatar & Info */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-forest text-sand flex items-center justify-center font-medium text-sm shadow-sm">
                      {rev.avatarInitials}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-forest leading-tight">
                        {rev.author}
                      </h4>
                      <p className="text-[11px] text-charcoal/60">
                        {rev.location}
                      </p>
                    </div>
                  </div>

                  {rev.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-mangrove bg-mangrove/10 px-2.5 py-1 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-mangrove" />
                      <span>Verified</span>
                    </span>
                  )}
                </div>

                {/* Stars & Ride Pill */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-sand/30">
                  <div className="flex items-center gap-1 text-sunset">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-sunset text-sunset" />
                    ))}
                  </div>
                  <span className="text-[10px] font-medium text-forest/75 bg-cream px-2.5 py-0.5 rounded-full border border-sand/30">
                    {rev.rideType}
                  </span>
                </div>

                {/* Headline */}
                <h5 className="font-serif text-base text-forest font-medium leading-snug mb-3">
                  "{rev.headline}"
                </h5>

                {/* Review Body */}
                <p className="text-xs text-charcoal/75 leading-relaxed font-sans mb-4">
                  {rev.reviewText}
                </p>
              </div>

              {/* Bottom Card Highlight */}
              <div className="pt-3 border-t border-sand/30 flex items-center justify-between text-[11px] text-charcoal/70">
                <span className="text-[10px] text-sunset font-medium flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {rev.highlight}
                </span>
                <span className="text-[10px] text-charcoal/50">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action for Visitors */}
        <div className="mt-14 p-8 rounded-3xl bg-forest text-sand flex flex-col md:flex-row items-center justify-between gap-6 shadow-luxury">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-sand/15 flex items-center justify-center text-sunset shrink-0">
              <Anchor className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-sand font-light">
                Ready for your 1-hour backwater ride at Mangrove Bay?
              </h3>
              <p className="text-xs text-cream/80 mt-1">
                Open daily 7:00 AM – 5:30 PM • Couple Ride ₹3,000 • Separate Private Boat ₹5,000 • Shared ₹500/Adult, ₹250/Child
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-3 rounded-full bg-sunset text-forest hover:bg-white text-xs font-semibold uppercase tracking-luxury shadow-md transition-all active:scale-95"
            >
              Book Your Boat Ride
            </button>
            <a
              href={REVIEWS_DATA.aggregate.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-sand text-xs font-semibold uppercase tracking-wider border border-sand/30 transition-all flex items-center gap-2"
            >
              <span>Write a Review</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
