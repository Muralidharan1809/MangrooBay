import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsAppButton() {
  const waUrl = "https://wa.me/917397438874?text=Hello%20Mangrove%20Bay,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20boat%20ride.";

  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-20 sm:bottom-6 right-5 sm:right-6 z-40">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-floating hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
        title="Chat with Mangrove Bay on WhatsApp (+91 73974 38874)"
        aria-label="Direct WhatsApp Chat"
      >
        {/* Soft pulse effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        {/* Official WhatsApp Symbol */}
        <WhatsAppIcon className="w-5 h-5 text-white fill-white shrink-0" />

        {/* Text Label on hover / desktop */}
        <span className="text-xs font-semibold tracking-wide uppercase hidden sm:inline-block">
          WhatsApp Us
        </span>
      </a>
    </aside>
  );
}
