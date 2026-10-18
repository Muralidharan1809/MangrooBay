import React, { useState } from 'react';
import { BRAND_DATA } from '../data/content';
import { Phone, MessageSquare, Instagram, Facebook, Send, CheckCircle2, ArrowRight, Anchor, Clock } from 'lucide-react';
import { saveNewBooking } from '../utils/bookingStorage';

export default function ContactSection({ onOpenBooking }) {
  const [inquiryText, setInquiryText] = useState('');
  const [senderContact, setSenderContact] = useState('');
  const [sent, setSent] = useState(false);
  const [submittedId, setSubmittedId] = useState('');
  const [waUrl, setWaUrl] = useState('');

  const handleQuickMessage = (e) => {
    e.preventDefault();
    if (!senderContact.trim() || !inquiryText.trim()) return;

    const noteId = 'MB-NOTE-' + Math.floor(10000 + Math.random() * 90000);
    setSubmittedId(noteId);

    // 1. Save directly into Admin Manager storage for records
    saveNewBooking({
      id: noteId,
      createdAt: new Date().toISOString(),
      fullName: `Visitor Inquiry (${senderContact.trim()})`,
      phone: senderContact.trim(),
      email: '',
      rideType: 'Direct WhatsApp Inquiry',
      duration: '1 Hour Boat Ride Inquiry',
      date: new Date().toISOString().split('T')[0],
      timeSlot: 'Direct Inquiry',
      guests: '1+ Guests',
      notes: inquiryText.trim(),
      status: 'Inquiry',
      isContactNote: true
    });

    // 2. Prepare direct WhatsApp dispatch to jetty (+91 73974 38874)
    const waText = encodeURIComponent(
      `*New Customer Inquiry via Website - Mangrove Bay*\n\n` +
      `• *Inquiry Ref:* ${noteId}\n` +
      `• *From:* ${senderContact.trim()}\n` +
      `• *Message:* ${inquiryText.trim()}\n\n` +
      `*Boarding Jetty:* Pondy Mermaid Boat House\n` +
      `*Boating Hours:* Daily 7:00 AM – 5:30 PM`
    );
    const generatedWaUrl = `https://wa.me/917397438874?text=${waText}`;
    setWaUrl(generatedWaUrl);
    setSent(true);

    // 3. Immediately dispatch directly to WhatsApp
    try {
      const win = window.open(generatedWaUrl, '_blank');
      if (!win) {
        window.location.href = generatedWaUrl;
      }
    } catch (err) {
      window.location.href = generatedWaUrl;
    }
  };

  const handleResetForm = () => {
    setSent(false);
    setInquiryText('');
    setSenderContact('');
    setSubmittedId('');
    setWaUrl('');
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
                Direct Concierge & Help
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest font-light leading-tight mb-4">
                Talk to Mangrove Bay
              </h2>
              <p className="text-sm md:text-base text-charcoal/75 max-w-md font-sans leading-relaxed">
                Connect directly with our boat house staff via WhatsApp or Phone for real-time slot availability, tidal guidance, weather updates, and custom boat charters.
              </p>
            </div>

            {/* Direct Contact Options (No Email) */}
            <div className="space-y-4 pt-4 border-t border-sand/40">
              {/* WhatsApp Direct */}
              <a 
                href={BRAND_DATA.contact.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-sm text-charcoal hover:text-emerald-700 transition-colors group p-3 rounded-2xl hover:bg-emerald-50/60 border border-transparent hover:border-emerald-200"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0 shadow-sm">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-emerald-800 font-bold">Direct WhatsApp Chat (Instant Reply)</span>
                  <span className="font-semibold text-base text-forest group-hover:text-emerald-700 transition-colors">{BRAND_DATA.contact.whatsapp}</span>
                </div>
              </a>

              {/* Telephone Direct */}
              <a 
                href={`tel:${BRAND_DATA.contact.phoneRaw}`} 
                className="flex items-center gap-4 text-sm text-charcoal hover:text-sunset transition-colors group p-3 rounded-2xl hover:bg-sand/20 border border-transparent hover:border-sand/40"
              >
                <div className="w-12 h-12 rounded-full bg-cream border border-sand/60 flex items-center justify-center text-forest group-hover:border-sunset group-hover:text-sunset transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-charcoal/60 font-semibold">Jetty Phone Line</span>
                  <span className="font-semibold text-base text-forest group-hover:text-sunset transition-colors">{BRAND_DATA.contact.phone}</span>
                </div>
              </a>

              {/* Boarding Point & Hours */}
              <div className="flex items-center gap-4 text-sm text-charcoal p-3 rounded-2xl bg-sand/15 border border-sand/30">
                <div className="w-12 h-12 rounded-full bg-forest text-sand flex items-center justify-center shrink-0">
                  <Anchor className="w-5 h-5 text-sunset" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-forest font-bold">Boarding Jetty & Hours</span>
                  <span className="font-medium text-xs text-charcoal/80">Pondy Mermaid Boat House • Daily 7:00 AM – 5:30 PM</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
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

          {/* Right Column: Direct WhatsApp Note Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 shadow-luxury border border-sand/40">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-serif text-2xl sm:text-3xl text-forest font-light">
                Send a WhatsApp Note
              </h3>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 border border-emerald-300">
                <MessageSquare className="w-3 h-3 text-emerald-700" />
                Direct WhatsApp
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-charcoal/70 mb-6 font-sans">
              Leave your inquiry below. It directly opens on WhatsApp with our jetty team for an immediate reply!
            </p>

            {sent ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-600 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9 text-emerald-600" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-luxury text-emerald-700 block mb-1">
                    WhatsApp Chat Ready
                  </span>
                  <h4 className="font-serif text-2xl text-forest font-light">
                    Message Dispatched to WhatsApp!
                  </h4>
                  <p className="text-xs text-charcoal/75 max-w-sm mx-auto mt-1 font-sans">
                    Reference ID: <strong className="font-mono text-forest">{submittedId}</strong>. If WhatsApp did not open automatically, click the green button below:
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-sand/20 border border-sand/40 max-w-md mx-auto text-left text-xs space-y-1 text-charcoal/80">
                  <p><strong>From:</strong> {senderContact}</p>
                  <p><strong>Message:</strong> “{inquiryText}”</p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  {waUrl && (
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-widest font-bold transition-all shadow-md hover:scale-105"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Open WhatsApp Chat Now</span>
                    </a>
                  )}

                  <a
                    href="tel:+917397438874"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-forest text-sand hover:bg-forest-deep text-xs uppercase tracking-widest font-semibold transition-colors shadow-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Jetty</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="w-full sm:w-auto px-5 py-3 rounded-full bg-white border border-sand/60 text-charcoal hover:bg-sand/20 text-xs uppercase tracking-widest font-semibold transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleQuickMessage} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1.5">
                    Your Name & Phone / WhatsApp Number *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar, +91 98765 43210"
                    value={senderContact}
                    onChange={(e) => setSenderContact(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-cream border border-sand/60 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-1.5">
                    How can we assist you? *
                  </label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Tell us your preferred date, time slot, group size, couple ride, or any questions about your 1-hour boat ride..."
                    value={inquiryText}
                    onChange={(e) => setInquiryText(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-cream border border-sand/60 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-emerald-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white uppercase tracking-widest text-xs font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Directly to WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-center text-charcoal/60 pt-1">
                  ⚡ Directly opens WhatsApp chat with our Pondy Mermaid Boat House jetty (+91 73974 38874)
                </p>
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
