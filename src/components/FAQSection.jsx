import React, { useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { HelpCircle, ChevronDown, MessageSquare, Phone, Clock, ShieldCheck, MapPin, Anchor } from 'lucide-react';
import { BRAND_DATA } from '../data/content';

export default function FAQSection({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Which is the best boating in Pondicherry (Pondy Boating)?",
      answer: "Pondy Boating (Mangrove Bay) is widely recognized as the premier boating experience in Pondicherry (Pondycherry). Departing from Marina, Vambakeerapalayam, every ride is a genuine 1-hour cruise exploring lush mangrove root canals, ancient 2,000-year Arikamedu ruins, and the breathtaking Bay of Bengal sea confluence, fully equipped with approved life jackets and licensed captains."
    },
    {
      question: "Where can I experience mangrove boating in Pondicherry (Pondycherry)?",
      answer: "The premier location for mangrove boating in Pondicherry is Pondy Boating at Mangrove Bay. We guide you inside the shaded, protected mangrove tunnels and bio-reserves where exotic wetland birds nest. Daily boat rides operate from 7:00 AM to 5:30 PM with shared rides (₹500/adult, ₹250/child) and private boats."
    },
    {
      question: "What are the boat ride timings at Mangrove Bay Puducherry?",
      answer: "Mangrove Bay is open daily from Morning 7:00 AM to Evening 5:30 PM. The first departures start at 7:00 AM for peaceful early morning sunrise cruises with mirror-like waters. Our popular golden hour sunset rides operate between 3:30 PM and 5:30 PM."
    },
    {
      question: "How much does a boat ride cost at Mangrove Bay?",
      answer: "We offer 100% transparent, official fixed rates for a genuine full 1-hour (60 mins) cruise:\n• Shared Boating Ride: ₹500 per Adult, ₹250 per Child (ages 3–10; infants under 3 ride free).\n• Couples Ride: ₹3,000 Flat Rate (100% private boat exclusively for 2 guests).\n• Separate Private Boat: ₹5,000 Flat Rate (dedicated private boat for 1 to 10 guests).\nEvery ride explores all 4 scenic sights!"
    },
    {
      question: "What scenic places are explored during the 1-hour boat ride?",
      answer: "You do not need to choose just one location! Every single 1-hour boat ride explores all 4 iconic Puducherry sights together in one continuous tour: (1) Mangrove Forest & green canopy root tunnels, (2) Historic 2,000-year-old Arikamedu Indo-Roman port ruins, (3) Beach & River sea confluence where the backwater lagoon meets the Bay of Bengal ocean waves, and (4) Puducherry Harbour with traditional fishing catamarans."
    },
    {
      question: "Is free vehicle parking available for cars and bikes?",
      answer: "Yes! We provide 100% free, dedicated vehicle parking for both cars and two-wheelers right at the Mangrove Bay boarding jetty entrance. You won't have to worry about finding paid street parking in city traffic."
    },
    {
      question: "Are restrooms and dress changing facilities available on-site?",
      answer: "Yes, we have clean, well-maintained hygienic restrooms & toilet facilities as well as private dress changing rooms for all visitors before and after your boat ride."
    },
    {
      question: "Are safety life jackets provided and mandatory?",
      answer: "Yes, 100% government-approved marine life jackets are provided and mandatory for all passengers (adults, children, and infants). Jackets are fitted prior to stepping onto the boat. All rides are piloted by government-licensed, experienced boat masters with full first-aid readiness."
    },
    {
      question: "How do I book a boat ride and what is the payment method?",
      answer: "You can book easily online through our website or send an inquiry directly on WhatsApp (+91 73974 38874). No advance online payment is required; your slot is confirmed on WhatsApp, and payment can be made upon arrival at the jetty via Cash or UPI (Google Pay, PhonePe, Paytm)."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-cream relative overflow-hidden border-t border-sand/40">
      {/* Background ambient blur */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-sand/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-forest/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest text-sand text-xs font-semibold uppercase tracking-luxury mb-3 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-sunset" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest font-light leading-tight mb-3">
            Got questions? We've got answers.
          </h2>

          <p className="text-sm text-charcoal/75 leading-relaxed font-sans">
            Everything you need to know about our 1-hour backwater cruises, pricing, tour route, and amenities at Mangrove Bay.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5 mb-12">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-white border-sand shadow-luxury'
                    : 'bg-white/80 border-sand/40 hover:border-sand hover:bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-forest font-medium">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-forest text-sand border-forest rotate-180'
                        : 'bg-sand/20 text-forest border-sand/50'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-sand/20 animate-fade-scale">
                    <div className="pt-3 text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-forest-deep text-cream text-center border border-sand/30 shadow-luxury flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="text-[10px] uppercase font-mono tracking-widest text-sunset font-bold block mb-1">
              Direct Support
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-cream font-light">
              Still have a question before booking?
            </h3>
            <p className="text-xs text-sand/80 mt-1">
              Our jetty staff responds immediately on WhatsApp or Phone!
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="https://wa.me/917397438874?text=Hello%20Mangrove%20Bay,%20I%20have%20a%20question%20about%20your%20boat%20rides."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-widest shadow-md transition-all active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBooking && onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-sand hover:bg-white text-forest text-xs font-semibold uppercase tracking-widest shadow-md transition-all active:scale-95"
            >
              <span>Book Ride (₹500 / 1 Hr)</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
