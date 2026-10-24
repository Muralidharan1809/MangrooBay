import React, { useState } from 'react';
import { Tag, Sparkles, Copy, Check, Clock, Users, ArrowRight, Gift } from 'lucide-react';
import { OFFERS_DATA } from '../data/content';
import { trackOfferApplied } from '../utils/analytics';

export default function OffersSection({ onSelectOffer }) {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code, discount) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    trackOfferApplied(code, discount);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2500);
  };

  const handleBookWithOffer = (offer) => {
    trackOfferApplied(offer.code, offer.discountBadge);
    if (onSelectOffer) {
      onSelectOffer(offer.code);
    }
  };

  return (
    <section id="offers" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Soft background ambient gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sand/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-mangrove/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest text-sand text-xs font-semibold uppercase tracking-luxury shadow-sm mb-4">
            <Gift className="w-3.5 h-3.5 text-sunset" />
            <span>Special Passes & Promotions</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-light leading-tight mb-4">
            Exclusive Boating Offers
          </h2>

          <p className="text-sm sm:text-base text-charcoal/75 leading-relaxed max-w-2xl mx-auto font-sans">
            Make your 1-hour backwater voyage even sweeter. Use any active promo code during booking or click below to claim your offer directly.
          </p>
          <div className="w-16 h-[1px] bg-sand/60 mx-auto mt-6" />
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {OFFERS_DATA.map((offer) => {
            const isCopied = copiedCode === offer.code;

            return (
              <div
                key={offer.id}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  offer.highlight
                    ? 'bg-gradient-to-b from-forest to-forest-deep text-cream shadow-floating border-2 border-sand'
                    : 'bg-white text-charcoal border border-sand/50 shadow-luxury hover:shadow-floating'
                }`}
              >
                {offer.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-sunset text-cream text-[10px] uppercase font-bold tracking-luxury shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Top Badge & Discount Pill */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider ${
                        offer.highlight
                          ? 'bg-sand text-forest'
                          : 'bg-sand/30 text-forest'
                      }`}
                    >
                      {offer.applicableRides}
                    </span>
                    <span className="text-xs font-serif font-bold px-3 py-1 rounded-full bg-sunset text-white shadow-sm">
                      {offer.discountBadge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3
                    className={`font-serif text-2xl font-light mb-1 ${
                      offer.highlight ? 'text-cream' : 'text-forest'
                    }`}
                  >
                    {offer.title}
                  </h3>
                  <p
                    className={`text-xs italic mb-4 ${
                      offer.highlight ? 'text-sand' : 'text-charcoal/70'
                    }`}
                  >
                    “{offer.tagline}”
                  </p>

                  <p
                    className={`text-xs leading-relaxed mb-6 ${
                      offer.highlight ? 'text-cream/80' : 'text-charcoal/75'
                    }`}
                  >
                    {offer.description}
                  </p>

                  {/* Validity Info */}
                  <div
                    className={`p-2.5 rounded-xl text-[11px] mb-6 flex items-center gap-2 ${
                      offer.highlight
                        ? 'bg-white/10 text-sand/90'
                        : 'bg-cream text-charcoal/70 border border-sand/40'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5 text-sunset shrink-0" />
                    <span>{offer.validity}</span>
                  </div>
                </div>

                <div>
                  {/* Coupon Code Pill with Copy Action */}
                  <div
                    className={`p-3 rounded-2xl mb-4 border flex items-center justify-between gap-2 ${
                      offer.highlight
                        ? 'bg-forest-light/60 border-sand/30'
                        : 'bg-cream-warm border-sand/50'
                    }`}
                  >
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-sunset font-bold block">
                        Promo Code
                      </span>
                      <span
                        className={`font-mono text-sm font-bold tracking-wider ${
                          offer.highlight ? 'text-sand' : 'text-forest'
                        }`}
                      >
                        {offer.code}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopy(offer.code, offer.discountBadge)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all active:scale-95 ${
                        isCopied
                          ? 'bg-emerald-600 text-white'
                          : offer.highlight
                          ? 'bg-sand text-forest hover:bg-white'
                          : 'bg-forest text-sand hover:bg-forest-deep'
                      }`}
                      title="Copy promo code"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Apply & Book CTA */}
                  <button
                    onClick={() => handleBookWithOffer(offer)}
                    className={`w-full py-3 rounded-full text-xs uppercase font-semibold tracking-widest transition-all shadow-md flex items-center justify-center gap-2 active:scale-95 ${
                      offer.highlight
                        ? 'bg-sand text-forest hover:bg-white'
                        : 'bg-forest text-sand hover:bg-forest-deep hover:text-white'
                    }`}
                  >
                    <span>Apply & Book</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent Rates & How to Redeem Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-forest-deep text-cream border border-sand/30 shadow-floating flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-luxury text-sunset font-semibold block">
              100% Transparent Boating
            </span>
            <h4 className="font-serif text-2xl text-cream font-light">
              1-Hour Boating • Couple Ride ₹3,000 • Separate Boat ₹5,000
            </h4>
            <p className="text-xs sm:text-sm text-cream/75 max-w-xl">
              Shared rides ₹500/Adult & ₹250/Child. Includes 100% free vehicle parking, hygienic restrooms & toilets, and private dress changing rooms right at Mangrove Bay!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => onSelectOffer && onSelectOffer('SUNRISE7')}
              className="px-6 py-3.5 rounded-full bg-sand text-forest hover:bg-white text-xs uppercase tracking-widest font-semibold transition-all shadow-md active:scale-95"
            >
              Book with Sunrise Offer
            </button>
            <a
              href="https://wa.me/917397438874?text=Hello%20Mangrove%20Bay,%20I%20would%20like%20to%20know%20about%20current%20boating%20offers%20at%20Pondy%20Mangrove Bay%20Boat%20House."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-cream border border-sand/30 text-xs uppercase tracking-widest font-semibold transition-all"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
