import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Users, 
  CheckCircle2, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  MessageSquare,
  Phone,
  Anchor,
  Compass,
  Tag,
  Check,
  Percent
} from 'lucide-react';
import { BRAND_DATA, RIDES_AND_EXPERIENCES, OFFERS_DATA, STANDARD_PRICING } from '../data/content';
import { saveNewBooking } from '../utils/bookingStorage';
import { trackBookingSubmitted, trackWhatsAppClick, trackOfferApplied } from '../utils/analytics';

export default function BookingModal({ isOpen, onClose, initialExperience, initialPromoCode = '' }) {
  const [formData, setFormData] = useState({
    rideType: 'Couples Ride',
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
  const [inquiryId, setInquiryId] = useState('');

  // Handle initial experience or promo code when opened
  useEffect(() => {
    if (isOpen) {
      if (initialExperience) {
        const title = typeof initialExperience === 'string' ? initialExperience : initialExperience.title;
        setFormData(prev => ({
          ...prev,
          rideType: title
        }));
      }

      if (initialPromoCode) {
        const found = OFFERS_DATA.find(o => o.code.toUpperCase() === initialPromoCode.toUpperCase());
        if (found) {
          setFormData(prev => ({ ...prev, promoCode: found.code }));
          setAppliedOffer(found);
          setPromoMessage({ type: 'success', text: `Offer Applied: ${found.discountBadge} (${found.title})` });
        }
      }
    }
  }, [initialExperience, initialPromoCode, isOpen]);

  if (!isOpen) return null;

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
      setPromoMessage({ type: 'error', text: 'Invalid promo code. Check active offers below.' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = 'Please select a preferred date for the boat ride';
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (formData.email && formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
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
    const randomId = 'MB-RIDE-' + Math.floor(10000 + Math.random() * 90000);
    setInquiryId(randomId);

    const passengerSummary = `${formData.adults} Adult${formData.adults > 1 ? 's' : ''}${
      formData.children > 0 ? `, ${formData.children} Child${formData.children > 1 ? 'ren' : ''}` : ''
    }`;

    // Save booking to storage
    saveNewBooking({
      id: randomId,
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

    // Track analytics
    trackBookingSubmitted({
      id: randomId,
      rideType: formData.rideType,
      passengers: passengerSummary,
      date: formData.date,
      timeSlot: formData.timeSlot,
      promoCode: appliedOffer ? appliedOffer.code : ''
    });

    const waText = encodeURIComponent(
      `*New Boat Ride Booking Request - Mangrove Bay*\n\n` +
      `• *Booking ID:* ${randomId}\n` +
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
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-forest-deep/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-scale"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-cream rounded-3xl overflow-hidden shadow-floating border border-sand/40 my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-forest px-6 sm:px-8 py-5 text-cream flex items-center justify-between border-b border-sand/20">
          <div>
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-luxury text-sand font-semibold mb-1">
              <Anchor className="w-3.5 h-3.5 text-sunset" />
              <span>Mangrove Bay</span>
              <span className="text-sand/50">•</span>
              <span className="text-sunset">Daily 7:00 AM – 5:30 PM</span>
            </div>
            <h3 id="booking-modal-title" className="font-serif text-2xl sm:text-3xl font-light text-cream">
              Book Your Boat Ride
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-forest-light/60 hover:bg-forest-light text-sand transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 max-h-[82vh] overflow-y-auto">
          {isSuccess ? (
            /* Success State */
            <div className="text-center py-6 px-2">
              <div className="w-16 h-16 rounded-full bg-forest/10 border-2 border-forest text-forest mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10 text-forest" />
              </div>

              <span className="text-xs uppercase tracking-luxury text-sunset font-semibold block mb-1">
                Booking Request Registered
              </span>

              <h4 className="font-serif text-2xl sm:text-3xl font-light text-forest mb-2">
                Thank you, {formData.fullName}!
              </h4>

              <p className="text-xs sm:text-sm text-charcoal/80 max-w-md mx-auto mb-4 font-sans leading-relaxed">
                Your request for <strong>{formData.rideType}</strong> (1 Hour • {formData.date} • {formData.timeSlot}) has been registered with reference ID:
              </p>

              <div className="inline-block px-5 py-2 rounded-full bg-sand/30 border border-sand/60 font-mono text-forest font-bold text-base mb-6 tracking-wider">
                {inquiryId}
              </div>

              {/* Price & Passenger Summary Box */}
              <div className="p-4 rounded-2xl bg-white border border-sand/60 max-w-md mx-auto text-xs text-charcoal/80 mb-6 text-left space-y-1.5">
                <div className="flex justify-between border-b border-sand/30 pb-1.5 font-semibold text-forest">
                  <span>Ride Duration:</span>
                  <span>1 Hour (60 Mins)</span>
                </div>
                <div className="flex justify-between">
                  <span>Guests:</span>
                  <span>{formData.adults} Adults, {formData.children} Children</span>
                </div>
                {appliedOffer && (
                  <div className="flex justify-between text-sunset font-semibold">
                    <span>Applied Offer ({appliedOffer.code}):</span>
                    <span>-{appliedOffer.discountBadge}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-bold text-forest pt-1.5 border-t border-sand/30">
                  <span>Estimated Total:</span>
                  <span>₹{finalPrice}</span>
                </div>
                <div className="flex justify-between text-[11px] text-charcoal/60 pt-1">
                  <span>Boarding Point:</span>
                  <span className="font-medium text-forest">Mangrove Bay</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-sand/20 border border-sand/40 max-w-md mx-auto text-xs text-charcoal/80 mb-6 flex items-start gap-3 text-left">
                <Clock className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                <p>
                  Our jetty team at Mangrove Bay will contact you via WhatsApp/Call to confirm your 1-hour slot availability and guide you on arrival. No advance online payment required.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/917397438874?text=${encodeURIComponent(
                    `*New Boat Ride Booking Request - Mangrove Bay*\n\n` +
                    `• *Booking ID:* ${inquiryId}\n` +
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
                  onClick={() => trackWhatsAppClick('Booking Modal Success')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-widest font-semibold transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Confirm on WhatsApp</span>
                </a>

                <a
                  href="tel:+917397438874"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-forest text-sand hover:bg-forest-deep text-xs uppercase tracking-widest font-semibold transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Jetty</span>
                </a>

                <button
                  onClick={handleReset}
                  className="px-5 py-3.5 rounded-full bg-white border border-sand/60 text-charcoal/80 hover:bg-sand/20 text-xs uppercase tracking-widest font-semibold transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Boarding Point, Amenities & Uniform Rates Ribbon */}
              <div className="p-4 rounded-2xl bg-sand/25 border border-sand/60 space-y-2.5 text-xs text-charcoal/85">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-forest shrink-0" />
                    <span><strong>Boarding:</strong> Mangrove Bay Boarding Jetty</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] uppercase font-bold text-sunset tracking-wider bg-white/70 px-2 py-0.5 rounded">
                      Daily 7:00 AM – 5:30 PM
                    </span>
                    <span className="text-[10px] uppercase font-bold text-forest tracking-wider bg-sand/40 px-2 py-0.5 rounded">
                      ⏱ 1 Hour Complete Ride
                    </span>
                  </div>
                </div>
                {/* On-site Amenities Callout */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-forest pt-1 border-t border-sand/40 font-medium">
                  <span className="inline-flex items-center gap-1">
                    <span className="text-emerald-700 font-bold">✓</span> Free Vehicle Parking (Cars & Bikes)
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="text-emerald-700 font-bold">✓</span> Clean Restrooms & Toilets
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="text-emerald-700 font-bold">✓</span> Private Dress Changing Rooms
                  </span>
                </div>
              </div>

              {/* Ride Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-2">
                  Select 1-Hour Boating Ride
                </label>
                <select
                  value={formData.rideType}
                  onChange={(e) => setFormData({ ...formData, rideType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-sand/60 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest font-medium"
                >
                  {RIDES_AND_EXPERIENCES.map((r) => (
                    <option key={r.id} value={r.title}>
                      {r.title} — 1 Hour ({r.id === 'couples-ride' ? '₹3,000 Flat / Couple • All Places Explored' : r.id === 'separate-ride' ? '₹5,000 Full Private Boat • All Places Explored' : '₹500 Adult / ₹250 Child • All Places Explored'})
                    </option>
                  ))}
                </select>
                <div className="mt-2 p-2.5 rounded-xl bg-forest/5 border border-forest/15 flex items-start sm:items-center gap-2 text-[11px] text-forest">
                  <Compass className="w-3.5 h-3.5 text-sunset shrink-0 mt-0.5 sm:mt-0" />
                  <span>
                    <strong>All 4 Sights Included:</strong> Every 1-hour cruise explores Mangrove Canopies, Historic 2,000-Yr Arikamedu, Beach/River Confluence & Harbour!
                  </span>
                </div>
              </div>

              {/* Date & Time Slot (7 AM to 5:30 PM) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-2">
                    Ride Date *
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest ${
                      errors.date ? 'border-sunset' : 'border-sand/60'
                    }`}
                  />
                  {errors.date && <p className="text-[11px] text-sunset mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-2">
                    Time Slot (7:00 AM – 5:30 PM)
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-sand/60 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest"
                  >
                    <option value="Early Sunrise Opening (07:00 AM - 09:30 AM)">
                      Early Sunrise Opening (07:00 AM - 09:30 AM)
                    </option>
                    <option value="Morning Scenic (09:30 AM - 12:00 PM)">
                      Morning Scenic (09:30 AM - 12:00 PM)
                    </option>
                    <option value="Afternoon Eco Cruise (12:00 PM - 03:30 PM)">
                      Afternoon Eco Cruise (12:00 PM - 03:30 PM)
                    </option>
                    <option value="Sunset Golden Hour (03:30 PM - 05:30 PM)">
                      Sunset Golden Hour (03:30 PM - 05:30 PM)
                    </option>
                  </select>
                </div>
              </div>

              {/* Passenger Counter (Adults ₹500, Children ₹250) */}
              <div className="p-4 rounded-2xl bg-white border border-sand/60 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-bold text-forest">
                    Number of Passengers
                  </span>
                  <span className="text-[11px] text-charcoal/60">
                    Duration: 1 Hour (60 Mins)
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Adults */}
                  <div className="p-3 rounded-xl bg-cream border border-sand/40 flex items-center justify-between">
                    <div>
                      <span className="block text-xs font-bold text-forest">Adults</span>
                      <span className="text-[11px] text-charcoal/60">₹500 each</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData(p => ({ ...p, adults: Math.max(1, p.adults - 1) }))}
                        className="w-8 h-8 rounded-lg bg-white border border-sand/60 text-forest font-bold hover:bg-sand/30"
                      >
                        -
                      </button>
                      <span className="w-6 text-center font-bold text-forest text-sm">{formData.adults}</span>
                      <button
                        type="button"
                        onClick={() => setFormData(p => ({ ...p, adults: p.adults + 1 }))}
                        className="w-8 h-8 rounded-lg bg-white border border-sand/60 text-forest font-bold hover:bg-sand/30"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="p-3 rounded-xl bg-cream border border-sand/40 flex items-center justify-between">
                    <div>
                      <span className="block text-xs font-bold text-forest">Children</span>
                      <span className="text-[11px] text-charcoal/60">₹250 (3–10 yrs)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData(p => ({ ...p, children: Math.max(0, p.children - 1) }))}
                        className="w-8 h-8 rounded-lg bg-white border border-sand/60 text-forest font-bold hover:bg-sand/30"
                      >
                        -
                      </button>
                      <span className="w-6 text-center font-bold text-forest text-sm">{formData.children}</span>
                      <button
                        type="button"
                        onClick={() => setFormData(p => ({ ...p, children: p.children + 1 }))}
                        className="w-8 h-8 rounded-lg bg-white border border-sand/60 text-forest font-bold hover:bg-sand/30"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Group Ride Capacity Indicator */}
                {formData.rideType && formData.rideType.toLowerCase().includes('group') && (
                  <div className="pt-2 border-t border-sand/40 flex items-center justify-between text-xs">
                    <span className="text-forest font-semibold">
                      Group Ride Capacity: <span className="text-sunset font-bold">1 to 10 Guests</span>
                    </span>
                    <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                      formData.adults + formData.children >= 1 && formData.adults + formData.children <= 10
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-sunset/15 text-sunset'
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

              {/* Promo Code Input & Available Offers */}
              <div className="p-4 rounded-2xl bg-white border border-sand/60 space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs uppercase tracking-wider font-semibold text-forest flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-sunset" />
                    <span>Have a Promo Code or Offer?</span>
                  </label>
                  <span className="text-[10px] text-charcoal/50 uppercase">Optional</span>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="e.g. SUNRISE7, FAMILYPASS"
                    value={formData.promoCode}
                    onChange={(e) => setFormData({ ...formData, promoCode: e.target.value.toUpperCase() })}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-cream-warm border border-sand/60 text-xs font-mono uppercase tracking-wider text-charcoal focus:outline-none focus:ring-2 focus:ring-forest"
                  />
                  <button
                    type="button"
                    onClick={() => handleApplyPromo()}
                    className="px-5 py-2.5 rounded-xl bg-forest text-sand hover:bg-forest-deep text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Apply
                  </button>
                </div>

                {/* Promo Status Message */}
                {promoMessage && (
                  <p className={`text-xs flex items-center gap-1.5 font-medium ${
                    promoMessage.type === 'success' ? 'text-emerald-700' : 'text-sunset'
                  }`}>
                    {promoMessage.type === 'success' && <Check className="w-3.5 h-3.5" />}
                    <span>{promoMessage.text}</span>
                  </p>
                )}

                {/* Quick Offer Chips */}
                <div className="pt-1 flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] text-charcoal/60 uppercase">Quick Apply:</span>
                  {OFFERS_DATA.map((off) => (
                    <button
                      key={off.id}
                      type="button"
                      onClick={() => handleApplyPromo(off.code)}
                      className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border transition-all ${
                        appliedOffer?.code === off.code
                          ? 'bg-forest text-sand border-forest'
                          : 'bg-sand/20 text-forest border-sand/60 hover:bg-sand/40'
                      }`}
                    >
                      {off.code} ({off.discountBadge})
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Calculation Summary Banner */}
              <div className="p-4 rounded-2xl bg-forest-deep text-cream border border-sand/30 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-sand block font-bold">
                      Estimated Boating Fare (1 Hour Complete)
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
                    <span className="text-[10px] text-cream/60">Pay on jetty arrival</span>
                  </div>
                </div>

                <div className="pt-1.5 border-t border-sand/20 flex flex-wrap items-center justify-between gap-1 text-[11px] text-sand/90">
                  <span className="text-emerald-400 font-medium">✓ 1-Hour Full Duration Ride</span>
                  <span className="text-sand/80 font-medium">Free Parking & Changing Rooms</span>
                </div>
              </div>

              {/* Passenger Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Karthik & Sneha"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest ${
                      errors.fullName ? 'border-sunset' : 'border-sand/60'
                    }`}
                  />
                  {errors.fullName && <p className="text-[11px] text-sunset mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest ${
                      errors.phone ? 'border-sunset' : 'border-sand/60'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-sunset mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-2">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest ${
                    errors.email ? 'border-sunset' : 'border-sand/60'
                  }`}
                />
                {errors.email && <p className="text-[11px] text-sunset mt-1">{errors.email}</p>}
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Arrival preferences, couple romantic decor, photography assistance, or questions..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-sand/60 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-forest text-sand hover:bg-forest-deep hover:text-white uppercase tracking-widest text-xs font-semibold transition-all shadow-luxury flex items-center justify-center gap-2 disabled:opacity-50 active:scale-98"
                >
                  {isSubmitting ? (
                    <span>Registering Boat Ride Request...</span>
                  ) : (
                    <>
                      <span>Reserve 1-Hour Boat Ride (₹{finalPrice})</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-[11px] text-charcoal/60 text-center mt-3 font-sans">
                  * All rides depart from Mangrove Bay. Life jackets and certified marine pilots provided.
                </p>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
