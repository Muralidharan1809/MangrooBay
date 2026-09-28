import React, { useState } from 'react';
import { Waves, ArrowUp, Shield, FileText, X, Anchor } from 'lucide-react';
import { BRAND_DATA } from '../data/content';

export default function Footer({ onOpenBooking }) {
  const [modalType, setModalType] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: "Rides & Celebrations", href: "#rides" },
    { label: "Boat Fleet", href: "#fleet" },
    { label: "Gallery", href: "#gallery" },
    { label: "Pondicherry Marina", href: "#location" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <footer className="bg-forest text-cream pt-20 pb-12 border-t border-sand/20 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Main Footer Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-sand/15">
            
            {/* Brand Column */}
            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest-light border border-sand/30 flex items-center justify-center text-sand">
                  <Waves className="w-5 h-5 text-sand" />
                </div>
                <div>
                  <span className="font-serif text-3xl font-medium tracking-luxury uppercase text-cream">
                    {BRAND_DATA.name}
                  </span>
                  <span className="block text-[10px] tracking-widest uppercase text-sand/80 font-sans">
                    Pondicherry Marina Boathouse
                  </span>
                </div>
              </div>
              <p className="font-serif text-xl italic text-sand font-light">
                “{BRAND_DATA.tagline}”
              </p>
              <p className="text-sm text-cream/70 max-w-sm font-sans font-light leading-relaxed">
                Premier boat rides, sunset cruises, romantic couple dates, birthday celebrations on the water, sea rides, and mangrove safaris.
              </p>
            </div>

            {/* Quick Navigation Links */}
            <div className="md:col-span-3 space-y-3">
              <p className="text-xs uppercase tracking-luxury text-sand font-semibold mb-4">
                Explore Boating
              </p>
              <ul className="space-y-2.5 text-sm font-sans">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-cream/80 hover:text-sand transition-colors block py-0.5"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <button
                    onClick={onOpenBooking}
                    className="text-sand hover:text-white font-medium transition-colors block py-0.5 text-left"
                  >
                    Book Boat Ride →
                  </button>
                </li>
              </ul>
            </div>

            {/* Retreat Details & Region */}
            <div className="md:col-span-3 space-y-3">
              <p className="text-xs uppercase tracking-luxury text-sand font-semibold mb-4">
                Pondicherry Marina Boathouse
              </p>
              <p className="text-xs text-cream/70 leading-relaxed font-sans">
                Waterfront Boarding Jetty<br />
                Estuary & Mangrove Backwaters<br />
                Puducherry 605001, India<br />
                [ADD EXACT ADDRESS]
              </p>
              <div className="pt-2 text-xs">
                <span className="text-[11px] uppercase tracking-wider text-sunset font-semibold block">Boating Hours:</span>
                <span className="text-sand font-medium">Morning 8:00 AM – Evening 5:30 PM (Daily)</span>
              </div>
              <p className="text-xs text-sand/80 pt-1 font-mono">
                {BRAND_DATA.contact.email}
              </p>
              <div className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-sand/80 hover:text-sand"
                >
                  <span>Back to Top</span>
                  <ArrowUp className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Legal Links */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60 font-sans">
            <p>© 2026 Marina Bay • Pondicherry Marina Boathouse. All rights reserved.</p>
            
            <div className="flex items-center gap-6">
              <button
                onClick={() => setModalType('privacy')}
                className="hover:text-sand transition-colors"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                onClick={() => setModalType('terms')}
                className="hover:text-sand transition-colors"
              >
                Boating Safety & Terms
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Policy / Terms Modal */}
      {modalType && (
        <div
          className="fixed inset-0 z-50 bg-forest-deep/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setModalType(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-cream rounded-3xl p-6 sm:p-8 max-w-lg w-full text-charcoal border border-sand shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-sand/40 mb-4">
              <h3 className="font-serif text-2xl text-forest font-light">
                {modalType === 'privacy' ? 'Privacy Policy' : 'Boating Safety & Terms'}
              </h3>
              <button
                onClick={() => setModalType(null)}
                className="p-1 rounded-full hover:bg-sand/30 text-charcoal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-charcoal/80 space-y-3 max-h-[60vh] overflow-y-auto pr-2 leading-relaxed">
              {modalType === 'privacy' ? (
                <>
                  <p>
                    Marina Bay at Pondicherry Marina Boathouse is committed to protecting your personal information. Any details shared during boat ride inquiries (names, contacts, celebration preferences) are utilized strictly for coordinating your boating reservation in Puducherry.
                  </p>
                  <p>
                    We never sell, distribute, or lease guest information to third parties. Communications are handled directly by our private boating concierge.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    All boat rides depart from the Pondicherry Marina Boathouse Jetty. Life jackets are mandatory and provided for every passenger (adults and children) prior to boarding.
                  </p>
                  <p>
                    Rides are operated by government-certified boat masters. Departure timings are synchronized with weather conditions and tidal safety. Guests are requested to respect the quiet coastal bird sanctuary and mangrove reserve.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-sand/40 text-right">
              <button
                onClick={() => setModalType(null)}
                className="px-5 py-2 rounded-full bg-forest text-sand text-xs uppercase tracking-wider font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
