import React, { useState, useEffect } from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { Menu, X, Waves, ArrowRight, MessageSquare } from 'lucide-react';

export default function Navbar({ onOpenBooking, onOpenContact, onOpenBookingsManager }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Boat Rides", href: "#rides" },
    { label: "Offers", href: "#offers" },
    { label: "Fleet", href: "#fleet" },
    { label: "Safety", href: "#safety" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-forest/95 backdrop-blur-md shadow-luxury py-3 border-b border-sand/15'
            : 'bg-gradient-to-b from-charcoal/80 via-charcoal/40 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sand"
            aria-label="Mangrove Bay Home"
          >
            <div className="w-9 h-9 rounded-full bg-forest-light/60 border border-sand/30 flex items-center justify-center text-sand group-hover:border-sand transition-colors">
              <Waves className="w-5 h-5 text-sand transition-transform group-hover:scale-110" />
            </div>
            <div>
              <span className="font-serif text-2xl md:text-3xl font-medium tracking-luxury text-cream uppercase transition-colors group-hover:text-sand">
                Mangrove Bay
              </span>
              <span className="block text-[9px] tracking-widest text-sand/80 uppercase font-sans -mt-0.5">
                Puducherry Boating
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-sans tracking-widest uppercase">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-sand hover:after:w-full after:transition-all after:duration-300 ${
                  link.label === "Offers"
                    ? "text-sunset font-bold hover:text-white"
                    : "text-cream/90 hover:text-sand"
                }`}
              >
                {link.label === "Offers" ? "✨ Offers" : link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Group */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://wa.me/917397438874?text=Hello%20Mangrove%20Bay,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20boat%20ride."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-emerald-600/80 hover:bg-emerald-600 text-white transition-all shadow-sm"
              title="Chat on WhatsApp (+91 73974 38874)"
              aria-label="WhatsApp Inquiry"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-sand text-forest hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
            >
              <span>Book Boat Ride</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-cream hover:text-sand focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-forest-deep/95 backdrop-blur-xl transition-all duration-500 lg:hidden flex flex-col justify-between p-8 pt-24 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col space-y-4 text-center">
          <p className="text-xs uppercase tracking-luxury text-sunset font-semibold">
            Mangrove Bay • Puducherry Boating
          </p>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-serif text-2xl text-cream hover:text-sand transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3 items-center border-t border-sand/20 pt-6">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full max-w-xs py-3.5 rounded-full bg-sand text-forest font-semibold uppercase tracking-widest text-sm hover:bg-cream transition-colors text-center shadow-lg"
          >
            Book Boat Ride (1 Hr)
          </button>
          <a
            href="https://wa.me/917397438874?text=Hello%20Mangrove%20Bay,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20boat%20ride."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full max-w-xs py-3 rounded-full bg-emerald-600 text-white font-semibold uppercase tracking-widest text-xs hover:bg-emerald-700 transition-colors text-center flex items-center justify-center gap-2 shadow-md"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBookingsManager && onOpenBookingsManager();
            }}
            className="text-[11px] text-sand/60 hover:text-sand font-medium pt-2"
          >
            🔒 Staff Admin Access
          </button>
        </div>
      </div>
    </>
  );
}
