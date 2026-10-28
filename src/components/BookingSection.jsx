import React, { useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { 
  Calendar, 
  Users, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Phone, 
  Clock, 
  MessageSquare, 
  Anchor, 
  Compass,
  Sparkles,
  Tag,
  Check
} from 'lucide-react';
import { BRAND_DATA, RIDES_AND_EXPERIENCES, OFFERS_DATA, STANDARD_PRICING } from '../data/content';
import { saveNewBooking } from '../utils/bookingStorage';
import { trackBookingSubmitted, trackWhatsAppClick, trackOfferApplied } from '../utils/analytics';

export default function BookingSection({ onOpenContact }) {
  const [formData, setFormData] = useState({
    rideType: 'Sunset Ride',
    date: '',
    timeSlot: 'Sunset Golden Hour (03:30 PM - 05:30 PM)',
    adults: 2,
    children: 0,
    fullName: '',
    phone: '',
    email: '',
    promoCode: '',
    referenceId: '',
    specialRequests: ''
  });

  const [appliedOffer, setAppliedOffer] = useState(null);
  const [promoMessage, setPromoMessage] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [inquiryCode, setInquiryCode] = useState('');

  // Pricing calculation (Couple: ₹3,000, Separate: ₹5,000, Shared: ₹500/adult, ₹250/child, 1 Hour)
  const isCoupleRide = formData.rideType?.toLowerCase().includes('couple');
  const isSeparateRide = formData.rideType?.toLowerCase().includes('separate') || formData.rideType?.toLowerCase().includes('private') || formData.rideType?.toLowerCase().includes('charter');

  let basePrice = 0;
  if (isCoupleRide) {
    basePrice = 3000;
  } else if (isSeparateRide) {
    basePrice = 5000;
  } else {
    basePrice = (formData.adults * STANDARD_PRICING.adultPrice) + (formData.children * STANDARD_PRICING.childPrice);
  }
  
  let discountAmount = 0;
  if (appliedOffer) {
    if (appliedOffer.discountType === 'percentage') {
      discountAmount = Math.round((basePrice * appliedOffer.discountPercent) / 100);
    } else if (appliedOffer.discountType === 'flat') {
      discountAmount = appliedOffer.discountFlat;
    }
  }
  const finalPrice = Math.max(0, basePrice - discountAmount);

  const handleApplyPromo = (codeToApply = null) => {
    const code = (codeToApply || formData.promoCode).trim().toUpperCase();
    if (!code) {
      setAppliedOffer(null);
      setPromoMessage({ type: 'error', text: 'Please enter a promo code' });
      return;
    }

    const offer = OFFERS_DATA.find(o => o.code.toUpperCase() === code);
    if (offer) {
      if (offer.minPassengers && (formData.adults + formData.children) < offer.minPassengers) {
        setAppliedOffer(null);
        setPromoMessage({ 
          type: 'error', 
          text: `Code ${offer.code} requires minimum ${offer.minPassengers} passengers.` 
        });
        return;
      }
      setFormData(prev => ({ ...prev, promoCode: offer.code }));
      setAppliedOffer(offer);
      setPromoMessage({ 
        type: 'success', 
        text: `Offer Applied: ${offer.discountBadge} (${offer.title})` 
      });
      trackOfferApplied(offer.code, offer.discountBadge);
    } else {
      setAppliedOffer(null);
      setPromoMessage({ type: 'error', text: 'Invalid promo code. Check active offers.' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = 'Select preferred ride date';
    if (!formData.fullName.trim()) newErrors.fullName = 'Your name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Valid phone number required';
    }
    if (formData.email && formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = 'Valid email address required';
    }
    if (formData.adults < 1) {
      newErrors.passengers = 'At least 1 adult passenger is required';
    }
    const totalGuests = formData.adults + formData.children;
    if (formData.rideType && formData.rideType.toLowerCase().includes('group')) {
      if (totalGuests < 1) {
        newErrors.passengers = 'Group Ride requires at least 1 guest (Min 1 – Max 10 Guests).';
      } else if (totalGuests > 10) {
        newErrors.passengers = 'Group Ride allows a maximum of 10 guests (Min 1 – Max 10 Guests). For larger groups, please select Separate Private Boat.';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const randomCode = 'MB-RIDE-' + Math.floor(10000 + Math.random() * 90000);
    setInquiryCode(randomCode);

    const passengerSummary = `${formData.adults} Adult${formData.adults > 1 ? 's' : ''}${
      formData.children > 0 ? `, ${formData.children} Child${formData.children > 1 ? 'ren' : ''}` : ''
    }`;

    saveNewBooking({
      id: randomCode,
      createdAt: new Date().toISOString(),
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      rideType: formData.rideType,
      duration: "1 Hour (60 Mins)",
      date: formData.date,
      timeSlot: formData.timeSlot,
      guests: passengerSummary,
      adults: formData.adults,
      children: formData.children,
      promoCode: appliedOffer ? appliedOffer.code : formData.promoCode.trim(),
      estimatedTotal: finalPrice,
      referenceId: formData.referenceId.trim(),
      notes: formData.specialRequests,
      status: 'Pending'
    });

    trackBookingSubmitted({
      id: randomCode,
      rideType: formData.rideType,
      passengers: passengerSummary,
      date: formData.date,
      timeSlot: formData.timeSlot,
      promoCode: appliedOffer ? appliedOffer.code : ''
    });

    const waText = encodeURIComponent(
      `*New Boat Ride Booking Request - Mangrove Bay*\n\n` +
      `• *Booking ID:* ${randomCode}\n` +
      `• *Customer:* ${formData.fullName}\n` +
      `• *Phone:* ${formData.phone}\n` +
      `• *Email:* ${formData.email}\n` +
      `• *Ride:* ${formData.rideType}\n` +
      `• *Duration:* 1 Hour (60 Mins) — Explores All 4 Sights (Mangroves, Arikamedu, Beach/River & Harbour)\n` +
      `• *Date:* ${formData.date}\n` +
      `• *Slot:* ${formData.timeSlot}\n` +
      `• *Guests:* ${passengerSummary} (Total: ${formData.adults + formData.children})\n` +
      `• *Fare:* ${isCoupleRide ? '₹3,000 Couple Ride Package (1 Hour)' : isSeparateRide ? '₹5,000 Separate Full Private Boat (1 Hour)' : '₹500/Adult, ₹250/Child'}\n` +
      (appliedOffer ? `• *Applied Offer:* ${appliedOffer.code} (${appliedOffer.discountBadge})\n` : '') +
      `• *Estimated Total:* ₹${finalPrice}\n` +
      (formData.referenceId ? `• *Referral/Ref:* ${formData.referenceId}\n` : '') +
      (formData.specialRequests ? `• *Special Requests:* ${formData.specialRequests}\n` : '') +
      `\n*Boarding Jetty:* Mangrove Bay\n*Hours:* Daily 7:00 AM – 5:30 PM\n*Amenities:* Free Parking • Clean Restrooms • Changing Rooms\nPlease confirm slot availability. Thank you!`
    );

    const waUrl = `https://wa.me/917397438874?text=${waText}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        const win = window.open(waUrl, '_blank');
        if (!win) {
          window.location.href = waUrl;
        }
      } catch (err) {
        window.location.href = waUrl;
      }
    }, 400);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      rideType: 'Sunset Ride',
      date: '',
      timeSlot: 'Sunset Golden Hour (03:30 PM - 05:30 PM)',
      adults: 2,
      children: 0,
      fullName: '',
      phone: '',
      email: '',
      promoCode: '',
      referenceId: '',
      specialRequests: ''
    });
    setAppliedOffer(null);
    setPromoMessage(null);
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-forest text-cream relative overflow-hidden">
      {/* Ambient background water illumination */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-mangrove/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-sunset/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-light border border-sand/30 text-sand text-xs font-semibold uppercase tracking-luxury mb-4">
            <Anchor className="w-3.5 h-3.5 text-sunset" />
            <span>Pondicherry Boating Booking • Instant Confirmation</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-cream font-light leading-tight mb-4">
            Pondicherry Boating Booking & Price
          </h2>

          <p className="font-serif text-xl sm:text-2xl text-sand italic font-light">
            “Book the best boating in Pondicherry with official fixed prices — no advance payment required.”
          </p>
          <div className="w-16 h-[1px] bg-sand/30 mx-auto mt-6" />
        </div>

        {/* Booking Container */}
        <div className="max-w-4xl mx-auto bg-forest-deep/90 border border-sand/30 rounded-3xl p-6 sm:p-10 md:p-12 shadow-floating backdrop-blur-xl">
          
          {isSuccess ? (
            /* Success State */
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-sand/20 border-2 border-sand text-sand mx-auto flex items-center justify-center mb-5">
                <CheckCircle2 className="w-10 h-10 text-sand" />
              </div>
              <span className="text-xs uppercase tracking-luxury text-sunset font-semibold">
                Boat Ride Requested
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-cream font-light mt-1 mb-4">
                Thank you, {formData.fullName}.
              </h3>
              <p className="text-sm md:text-base text-cream/80 max-w-lg mx-auto mb-2 font-sans leading-relaxed">
                Your reservation request for <strong>{formData.rideType}</strong> (1 Hour • {formData.date} • {formData.timeSlot}) has been registered under reference <span className="font-mono text-sand font-bold">{inquiryCode}</span>.
              </p>

              <div className="p-4 rounded-2xl bg-forest/80 border border-sand/20 max-w-md mx-auto text-xs text-sand/90 mb-8 space-y-1.5 text-left">
                <div className="flex justify-between border-b border-sand/20 pb-1.5 font-semibold text-cream">
                  <span>Ride Duration:</span>
                  <span>1 Hour (60 Mins)</span>
                </div>
                <div className="flex justify-between">
                  <span>Guests:</span>
                  <span>{formData.adults} Adults, {formData.children} Children</span>
                </div>
                {appliedOffer && (
                  <div className="flex justify-between text-sunset font-semibold">
                    <span>Applied Offer:</span>
                    <span>{appliedOffer.code} ({appliedOffer.discountBadge})</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-bold text-sand pt-1.5 border-t border-sand/20">
                  <span>Estimated Total:</span>
                  <span>₹{finalPrice}</span>
                </div>
                <div className="flex justify-between text-[11px] text-cream pt-1">
                  <span>Boarding Jetty:</span>
                  <span className="text-sand">Mangrove Bay</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-forest/80 border border-sand/20 max-w-md mx-auto text-xs text-sand/90 mb-8 flex items-start gap-3 text-left">
                <Clock className="w-4 h-4 text-sunset shrink-0 mt-0.5" />
                <p>
                  Our team at Mangrove Bay will confirm your ride slot, coordinate jetty arrival, and guide you on safety precautions. No advance payment required online.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/917397438874?text=${encodeURIComponent(
                    `*New Boat Ride Booking Request - Mangrove Bay*\n\n` +
                    `• *Booking ID:* ${inquiryCode}\n` +
                    `• *Customer:* ${formData.fullName}\n` +
                    `• *Ride:* ${formData.rideType} (1 Hour)\n` +
                    `• *Guests:* ${formData.adults} Adults, ${formData.children} Children\n` +
                    `• *Estimated Total:* ₹${finalPrice}\n` +
                    `• *Date:* ${formData.date}\n` +
                    `• *Slot:* ${formData.timeSlot}\n` +
                    `\n*Boarding Jetty:* Mangrove Bay`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('Booking Section Success')}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white uppercase tracking-widest text-xs font-semibold transition-colors shadow-lg"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Send on WhatsApp (+91 73974 38874)</span>
                </a>

                <a
                  href="tel:+917397438874"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-forest-light border border-sand/40 text-sand hover:bg-forest hover:text-white uppercase tracking-widest text-xs font-semibold transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Jetty</span>
                </a>

                <button
                  onClick={handleReset}
                  className="px-6 py-3.5 rounded-full bg-forest text-sand/80 hover:text-white border border-sand/30 uppercase tracking-widest text-xs font-semibold transition-colors"
                >
                  Book Another Ride
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-sand/20 gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-sand/90 font-medium">
                    <ShieldCheck className="w-4 h-4 text-sand" />
                    <span>Mangrove Bay • Daily Boating 7:00 AM – 5:30 PM • 1 Hour Rides</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-sand/80">
                    <span className="inline-flex items-center gap-1">
                      <span className="text-emerald-400 font-bold">✓</span> Free Vehicle Parking
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="text-emerald-400 font-bold">✓</span> Clean Restrooms & Toilets
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="text-emerald-400 font-bold">✓</span> Dress Changing Rooms
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="text-xs text-sand/80 hover:text-white underline underline-offset-4 shrink-0"
                >
                  Need Assistance? Contact Concierge
                </button>
              </div>

              {/* Ride Selection */}
              <div>
                <label htmlFor="booking-ride-type" className="block text-xs uppercase tracking-luxury text-sand font-semibold mb-2">
                  Select 1-Hour Boating Ride
                </label>
                <select
                  id="booking-ride-type"
                  name="rideType"
                  aria-label="Select 1-Hour Boating Ride"
                  value={formData.rideType}
                  onChange={(e) => setFormData({ ...formData, rideType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-forest/80 border border-sand/30 text-sm text-cream focus:outline-none focus:border-sand font-medium"
                >
                  {RIDES_AND_EXPERIENCES.map(r => (
                    <option key={r.id} value={r.title} className="bg-forest-deep text-sand">
                      {r.title} — 1 Hour ({r.id === 'couples-ride' ? '₹3,000 Flat / Couple • All Places Explored' : r.id === 'separate-ride' ? '₹5,000 Full Private Boat • All Places Explored' : '₹500 Adult / ₹250 Child • All Places Explored'})
                    </option>
                  ))}
                </select>
                <div className="mt-2 p-2.5 rounded-xl bg-sand/15 border border-sand/30 flex items-start sm:items-center gap-2 text-[11px] text-sand">
                  <Compass className="w-3.5 h-3.5 text-sunset shrink-0 mt-0.5 sm:mt-0" />
                  <span>
                    <strong>All 4 Sights Included:</strong> Every 1-hour cruise explores Mangrove Canopies, Historic 2,000-Yr Arikamedu, Beach/River Confluence & Harbour!
                  </span>
                </div>
              </div>

              {/* Date & Time Slot (7:00 AM - 5:30 PM) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-ride-date" className="block text-xs uppercase tracking-luxury text-sand font-semibold mb-2">
                    Ride Date *
                  </label>
                  <input
                    id="booking-ride-date"
                    name="rideDate"
                    aria-label="Ride Date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 rounded-xl bg-forest/80 border text-sm text-cream focus:outline-none focus:border-sand ${
                      errors.date ? 'border-sunset' : 'border-sand/30'
                    }`}
                  />
                  {errors.date && <p className="text-[11px] text-sunset mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label htmlFor="booking-time-slot" className="block text-xs uppercase tracking-luxury text-sand font-semibold mb-2">
                    Time Slot (7:00 AM – 5:30 PM)
                  </label>
                  <select
                    id="booking-time-slot"
                    name="timeSlot"
                    aria-label="Select Preferred Time Slot"
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-forest/80 border border-sand/30 text-sm text-cream focus:outline-none focus:border-sand"
                  >
                    <option value="Early Sunrise Opening (07:00 AM - 09:30 AM)" className="bg-forest-deep">
                      Early Sunrise Opening (07:00 AM - 09:30 AM)
                    </option>
                    <option value="Morning Scenic (09:30 AM - 12:00 PM)" className="bg-forest-deep">
                      Morning Scenic (09:30 AM - 12:00 PM)
                    </option>
                    <option value="Afternoon Eco Cruise (12:00 PM - 03:30 PM)" className="bg-forest-deep">
                      Afternoon Eco Cruise (12:00 PM - 03:30 PM)
                    </option>
                    <option value="Sunset Golden Hour (03:30 PM - 05:30 PM)" className="bg-forest-deep">
                      Sunset Golden Hour (03:30 PM - 05:30 PM)
                    </option>
                  </select>
                </div>
              </div>

              {/* Passenger Counter (Adults ₹500, Children ₹250) */}
              <div className="p-4 rounded-2xl bg-forest/60 border border-sand/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-luxury text-sand font-semibold">
                    Number of Passengers
                  </span>
                  <span className="text-[11px] text-cream font-sans">
                    Duration: 1 Hour (60 Mins)
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Adults */}
                  <div className="p-3 rounded-xl bg-forest-deep/80 border border-sand/30 flex items-center justify-between">
                    <div>
                      <span className="block text-xs font-bold text-cream">Adults</span>
                      <span className="text-[11px] text-sand/80">₹500 each</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        aria-label="Decrease adult passengers"
                        onClick={() => setFormData(p => ({ ...p, adults: Math.max(1, p.adults - 1) }))}
                        className="w-8 h-8 rounded-lg bg-forest border border-sand/40 text-sand font-bold hover:bg-forest-light"
                      >
                        -
                      </button>
                      <span className="w-6 text-center font-bold text-sand text-sm">{formData.adults}</span>
                      <button
                        type="button"
                        aria-label="Increase adult passengers"
                        onClick={() => setFormData(p => ({ ...p, adults: p.adults + 1 }))}
                        className="w-8 h-8 rounded-lg bg-forest border border-sand/40 text-sand font-bold hover:bg-forest-light"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="p-3 rounded-xl bg-forest-deep/80 border border-sand/30 flex items-center justify-between">
                    <div>
                      <span className="block text-xs font-bold text-cream">Children</span>
                      <span className="text-[11px] text-sand/80">₹250 (3–10 yrs)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        aria-label="Decrease child passengers"
                        onClick={() => setFormData(p => ({ ...p, children: Math.max(0, p.children - 1) }))}
                        className="w-8 h-8 rounded-lg bg-forest border border-sand/40 text-sand font-bold hover:bg-forest-light"
                      >
                        -
                      </button>
                      <span className="w-6 text-center font-bold text-sand text-sm">{formData.children}</span>
                      <button
                        type="button"
                        aria-label="Increase child passengers"
                        onClick={() => setFormData(p => ({ ...p, children: p.children + 1 }))}
                        className="w-8 h-8 rounded-lg bg-forest border border-sand/40 text-sand font-bold hover:bg-forest-light"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Group Ride Capacity Indicator */}
                {formData.rideType && formData.rideType.toLowerCase().includes('group') && (
                  <div className="pt-2 border-t border-sand/30 flex items-center justify-between text-xs">
                    <span className="text-sand font-semibold">
                      Group Ride Capacity: <span className="text-sunset font-bold">1 to 10 Guests</span>
                    </span>
                    <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded ${
                      formData.adults + formData.children >= 1 && formData.adults + formData.children <= 10
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-sunset/20 text-sunset border border-sunset/40'
                    }`}>
                      Current: {formData.adults + formData.children} Guests
                    </span>
                  </div>
                )}

                {errors.passengers && (
                  <p className="text-xs text-sunset font-semibold pt-1">
                    {errors.passengers}
                  </p>
                )}
              </div>

              {/* Promo Code Input & Quick Apply */}
              <div className="p-4 rounded-2xl bg-forest/60 border border-sand/30 space-y-2.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="booking-promo-code" className="text-xs uppercase tracking-luxury text-sand font-semibold flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-sunset" />
                    <span>Have a Promo Code or Offer?</span>
                  </label>
                  <span className="text-[10px] text-cream uppercase">Optional</span>
                </div>

                <div className="flex gap-2">
                  <input
                    id="booking-promo-code"
                    name="promoCode"
                    aria-label="Promo code or discount offer"
                    type="text"
                    placeholder="e.g. SUNRISE7, FAMILYPASS"
                    value={formData.promoCode}
                    onChange={(e) => setFormData({ ...formData, promoCode: e.target.value.toUpperCase() })}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-forest-deep border border-sand/30 text-xs font-mono uppercase tracking-wider text-sand focus:outline-none focus:border-sand"
                  />
                  <button
                    type="button"
                    onClick={() => handleApplyPromo()}
                    className="px-5 py-2.5 rounded-xl bg-sand text-forest hover:bg-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Apply
                  </button>
                </div>

                {promoMessage && (
                  <p className={`text-xs flex items-center gap-1.5 font-medium ${
                    promoMessage.type === 'success' ? 'text-emerald-400' : 'text-sunset'
                  }`}>
                    {promoMessage.type === 'success' && <Check className="w-3.5 h-3.5" />}
                    <span>{promoMessage.text}</span>
                  </p>
                )}

                <div className="pt-1 flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] text-cream uppercase">Quick Apply:</span>
                  {OFFERS_DATA.map((off) => (
                    <button
                      key={off.id}
                      type="button"
                      onClick={() => handleApplyPromo(off.code)}
                      className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border transition-all ${
                        appliedOffer?.code === off.code
                          ? 'bg-sand text-forest border-sand'
                          : 'bg-forest-light/60 text-sand border-sand/30 hover:bg-forest-light'
                      }`}
                    >
                      {off.code} ({off.discountBadge})
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Calculation Banner */}
              <div className="p-4 rounded-2xl bg-forest-deep border border-sand/40 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-sand block font-bold">
                      Estimated Boating Fare (1 Hour Complete Ride)
                    </span>
                    <div className="text-xs text-cream/75 mt-0.5">
                      {isCoupleRide ? (
                        <span>Couple Ride: ₹3,000 (Flat 2 Guests)</span>
                      ) : isSeparateRide ? (
                        <span>Separate Private Boat: ₹5,000 (Flat Full Boat)</span>
                      ) : (
                        <span>
                          {formData.adults} Adults × ₹500
                          {formData.children > 0 && ` + ${formData.children} Children × ₹250`}
                        </span>
                      )}
                      {discountAmount > 0 && (
                        <span className="text-sunset font-semibold"> (–₹{discountAmount} Offer)</span>
                      )}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-serif text-2xl font-bold text-sand">
                      ₹{finalPrice}
                    </div>
                    <span className="text-[10px] text-cream">Pay on jetty arrival</span>
                  </div>
                </div>

                <div className="pt-1.5 border-t border-sand/20 flex flex-wrap items-center justify-between gap-1 text-[11px] text-sand/90">
                  <span className="text-emerald-400 font-medium">✓ 1-Hour Full Duration Ride</span>
                  <span className="text-sand/80 font-medium">Free Parking & Changing Rooms</span>
                </div>
              </div>

              {/* Guest Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-full-name" className="block text-xs uppercase tracking-luxury text-sand font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    id="booking-full-name"
                    name="fullName"
                    aria-label="Your Name"
                    type="text"
                    placeholder="e.g. Karthik & Sneha"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-forest/80 border text-sm text-cream focus:outline-none focus:border-sand ${
                      errors.fullName ? 'border-sunset' : 'border-sand/30'
                    }`}
                  />
                  {errors.fullName && <p className="text-[11px] text-sunset mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="booking-phone" className="block text-xs uppercase tracking-luxury text-sand font-semibold mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="booking-phone"
                    name="phone"
                    aria-label="Phone or WhatsApp Number"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-forest/80 border text-sm text-cream focus:outline-none focus:border-sand ${
                      errors.phone ? 'border-sunset' : 'border-sand/30'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-sunset mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="booking-email" className="block text-xs uppercase tracking-luxury text-sand font-semibold mb-2">
                  Email Address (Optional)
                </label>
                <input
                  id="booking-email"
                  name="email"
                  aria-label="Email Address"
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-forest/80 border text-sm text-cream focus:outline-none focus:border-sand ${
                    errors.email ? 'border-sunset' : 'border-sand/30'
                  }`}
                />
                {errors.email && <p className="text-[11px] text-sunset mt-1">{errors.email}</p>}
              </div>

              {/* Special Requests */}
              <div>
                <label htmlFor="booking-special-requests" className="block text-xs uppercase tracking-luxury text-sand font-semibold mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  id="booking-special-requests"
                  name="specialRequests"
                  aria-label="Special Requests"
                  rows="2"
                  placeholder="Arrival preferences, romantic rose decor, photography help, or custom music playlist..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-forest/80 border border-sand/30 text-sm text-cream focus:outline-none focus:border-sand resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-4 rounded-full bg-sand text-forest hover:bg-white uppercase tracking-luxury text-xs font-bold transition-all shadow-luxury flex items-center justify-center gap-2 disabled:opacity-50 active:scale-98"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Reserve 1-Hour Boat Ride (₹{finalPrice})</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={onOpenContact}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-forest-light/60 border border-sand/40 text-sand hover:bg-forest-light hover:text-white uppercase tracking-luxury text-xs font-semibold transition-all"
                >
                  Contact Concierge
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-[11px] text-sand font-sans">
                  * Exclusively boat ride experiences. Departures from Mangrove Bay. Life jackets provided.
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
