import React, { useState, useEffect } from 'react';
import { Anchor, ArrowRight } from 'lucide-react';

export default function MobileBookingBar({ onOpenBooking }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past the hero (450px)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-forest-deep/95 backdrop-blur-xl border-t border-sand/30 shadow-floating animate-fade-scale">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="font-serif text-sand text-sm font-medium tracking-wide flex items-center gap-1.5">
            <Anchor className="w-3.5 h-3.5 text-sunset" />
            <span>Mangroo Bay Boat Rides</span>
          </span>
          <span className="text-[10px] uppercase tracking-wider text-cream/70 font-sans">
            Pondicherry Marina Boathouse
          </span>
        </div>

        <button
          onClick={onOpenBooking}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-sand text-forest font-semibold uppercase tracking-widest text-xs shadow-md active:scale-95 transition-transform"
        >
          <span>Book Ride</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
