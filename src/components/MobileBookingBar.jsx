import React, { useState, useEffect } from 'react';
import { Anchor, ArrowRight, MessageSquare } from 'lucide-react';

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
      <div className="max-w-md mx-auto flex items-center justify-between gap-2.5">
        <div className="flex flex-col">
          <span className="font-serif text-sand text-sm font-medium tracking-wide flex items-center gap-1.5">
            <Anchor className="w-3.5 h-3.5 text-sunset" />
            <span>Mangrove Bay</span>
          </span>
          <span className="text-[10px] uppercase tracking-wider text-cream/70 font-sans">
            1 Hr Cruise • Daily 7 AM – 5:30 PM
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/917397438874?text=Hello%20Mangrove%20Bay,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20boat%20ride."
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-emerald-600 text-white shadow-md active:scale-95 transition-transform"
            aria-label="WhatsApp Inquiry"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-sand text-forest font-semibold uppercase tracking-widest text-xs shadow-md active:scale-95 transition-transform"
          >
            <span>Book Ride</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
