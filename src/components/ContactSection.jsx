import React, { useState } from 'react';
import { BRAND_DATA } from '../data/content';
import { Phone, Mail, MessageSquare, Instagram, Facebook, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ContactSection({ onOpenBooking }) {
  const [inquiryText, setInquiryText] = useState('');
  const [senderContact, setSenderContact] = useState('');
  const [sent, setSent] = useState(false);

  const handleQuickMessage = (e) => {
    e.preventDefault();
    if (!senderContact) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setInquiryText('');
      setSenderContact('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-cream-pure text-forest relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Brand & Direct Contact */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-luxury text-mangrove font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-mangrove inline-block" />
                Intimate Hospitality
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-light leading-tight mb-4">
                Talk to Marina Bay
              </h2>
              <p className="text-sm md:text-base text-charcoal/75 max-w-md font-sans leading-relaxed">
                Whether you are planning an intimate proposal, a private weekend getaway, or seeking tidal arrival advice, our dedicated team is at your service.
              </p>
            </div>

            {/* Contact Placeholders */}
            <div className="space-y-4 pt-4 border-t border-sand/40">
              <div className="flex items-center gap-4 text-sm text-charcoal">
                <div className="w-10 h-10 rounded-full bg-cream border border-sand/40 flex items-center justify-center text-forest shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-charcoal/50">Telephone</span>
                  <span className="font-medium text-forest">{BRAND_DATA.contact.phone}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-charcoal">
                <div className="w-10 h-10 rounded-full bg-cream border border-sand/40 flex items-center justify-center text-forest shrink-0">
                  <MessageSquare className="w-4 h-4 text-mangrove" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-charcoal/50">WhatsApp Concierge</span>
                  <span className="font-medium text-forest">{BRAND_DATA.contact.whatsapp}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-charcoal">
                <div className="w-10 h-10 rounded-full bg-cream border border-sand/40 flex items-center justify-center text-forest shrink-0">
                  <Mail className="w-4 h-4 text-sunset" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-charcoal/50">Email Inquiries</span>
                  <span className="font-medium text-forest">{BRAND_DATA.contact.email}</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-4">
              <span className="text-xs uppercase tracking-luxury text-charcoal/60 font-semibold block mb-3">
                Follow The Story
              </span>
              <div className="flex items-center gap-4">
                <a
                  href={BRAND_DATA.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sand/50 text-xs uppercase tracking-wider font-medium text-forest hover:bg-forest hover:text-sand transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <a
                  href={BRAND_DATA.contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sand/50 text-xs uppercase tracking-wider font-medium text-forest hover:bg-forest hover:text-sand transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Message Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 shadow-luxury border border-sand/40">
            <h3 className="font-serif text-2xl sm:text-3xl text-forest font-light mb-2">
              Send a Note
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/70 mb-6 font-sans">
              Leave your inquiry below. We respect your privacy and respond within hours.
            </p>

            {sent ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-sand/30 border border-sand text-forest mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-forest" />
                </div>
                <h4 className="font-serif text-2xl text-forest mb-2">Message Sent</h4>
                <p className="text-xs text-charcoal/80">
                  Thank you. Our concierge will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuickMessage} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1.5">
                    Your Contact (Phone or Email)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="+91 ... or name@example.com"
                    value={senderContact}
                    onChange={(e) => setSenderContact(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-cream border border-sand/60 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1.5">
                    How can we assist you?
                  </label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Tell us about your proposed dates, group size, or questions about boating and meals..."
                    value={inquiryText}
                    onChange={(e) => setInquiryText(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-cream border border-sand/60 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-forest text-sand hover:bg-forest-deep hover:text-white uppercase tracking-widest text-xs font-semibold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Talk to Marina Bay</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="mt-8 pt-6 border-t border-sand/30 flex items-center justify-between text-xs text-charcoal/60">
              <span>Puducherry, India</span>
              <span className="italic font-serif text-sand-dark text-sm">Escape into the calm.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
