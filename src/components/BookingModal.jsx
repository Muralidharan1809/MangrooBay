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
  Anchor,
  Waves
} from 'lucide-react';
import { BRAND_DATA, RIDES_AND_EXPERIENCES } from '../data/content';
import { saveNewBooking } from '../utils/bookingStorage';

export default function BookingModal({ isOpen, onClose, initialExperience }) {
  const [formData, setFormData] = useState({
    rideType: 'Sunset Ride',
    date: '',
    timeSlot: 'Sunset Golden Hour (04:00 PM - 05:30 PM)',
    passengers: '2 Passengers (Couple)',
    fullName: '',
    phone: '',
    email: '',
    referenceId: '',
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  useEffect(() => {
    if (initialExperience) {
      const title = typeof initialExperience === 'string' ? initialExperience : initialExperience.title;
      setFormData(prev => ({
        ...prev,
        rideType: title
      }));
    }
  }, [initialExperience, isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = 'Please select a preferred date for the boat ride';
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const randomId = 'MB-RIDE-' + Math.floor(10000 + Math.random() * 90000);
      setInquiryId(randomId);
      saveNewBooking({
        id: randomId,
        createdAt: new Date().toISOString(),
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        rideType: formData.rideType,
        date: formData.date,
        timeSlot: formData.timeSlot,
        guests: formData.passengers,
        referenceId: formData.referenceId.trim(),
        notes: formData.specialRequests,
        status: 'Pending'
      });
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-forest-deep/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-scale"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-cream rounded-3xl overflow-hidden shadow-floating border border-sand/40 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-forest px-8 py-6 text-cream flex items-center justify-between border-b border-sand/20">
          <div>
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-luxury text-sand font-semibold mb-1">
              <Anchor className="w-3.5 h-3.5 text-sunset" />
              <span>Pondicherry Marina Boathouse</span>
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
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {isSuccess ? (
            /* Success State */
            <div className="text-center py-6 px-2">
              <div className="w-16 h-16 rounded-full bg-forest/10 border-2 border-forest text-forest mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10 text-forest" />
              </div>

              <span className="text-xs uppercase tracking-luxury text-sunset font-semibold block mb-1">
                Ride Booking Requested
              </span>
              <h4 className="font-serif text-3xl text-forest font-light mb-3">
                Your boat is being prepared!
              </h4>
              
              <p className="text-sm text-charcoal/80 max-w-md mx-auto leading-relaxed mb-6 font-sans">
                Thank you, <strong>{formData.fullName}</strong>. We have registered your boat ride request for <strong>{formData.rideType}</strong> at Pondicherry Marina Boathouse.
              </p>

              <div className="max-w-md mx-auto p-4 rounded-2xl bg-white border border-sand/50 text-left text-xs space-y-2 mb-6 shadow-sm">
                <div className="flex justify-between border-b border-sand/30 pb-2">
                  <span className="text-charcoal/60">Booking Reference:</span>
                  <span className="font-mono font-semibold text-forest">{inquiryId}</span>
                </div>
                {formData.referenceId && (
                  <div className="flex justify-between border-b border-sand/30 pb-2">
                    <span className="text-charcoal/60">Referral / Ref Code:</span>
                    <span className="font-mono font-semibold text-sunset">{formData.referenceId}</span>
                  </div>
                )}
                <div className="flex justify-between border-b border-sand/30 pb-2">
                  <span className="text-charcoal/60">Experience:</span>
                  <span className="font-medium text-charcoal">{formData.rideType}</span>
                </div>
                <div className="flex justify-between border-b border-sand/30 pb-2">
                  <span className="text-charcoal/60">Date & Slot:</span>
                  <span className="font-medium text-charcoal">{formData.date} • {formData.timeSlot}</span>
                </div>
                <div className="flex justify-between border-b border-sand/30 pb-2">
                  <span className="text-charcoal/60">Passengers:</span>
                  <span className="font-medium text-charcoal">{formData.passengers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal/60">Boarding Jetty:</span>
                  <span className="font-medium text-forest">Pondicherry Marina Boathouse</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-sand/20 border border-sand/40 max-w-md mx-auto text-xs text-charcoal/80 mb-6 flex items-start gap-3 text-left">
                <Clock className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                <p>
                  Our team at Pondicherry Marina will contact you via WhatsApp/Call to confirm slot availability, safety guidelines, and jetty arrival timing. No advance payment required online.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-full bg-forest text-sand hover:bg-forest-deep text-xs uppercase tracking-widest font-semibold transition-colors"
                >
                  Back to Website
                </button>
                <a
                  href={`https://wa.me/917397438874?text=Hello%20Mangroo%20Bay,%20I%20have%20boat%20ride%20inquiry%20${inquiryId}%20for%20${encodeURIComponent(formData.rideType)}%20at%20Pondicherry%20Marina%20Boathouse.${formData.referenceId ? `%20Referral/Ref:%20${encodeURIComponent(formData.referenceId)}` : ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-sand hover:bg-white text-forest text-xs uppercase tracking-widest font-semibold transition-colors border border-sand/50 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp (+91 73974 38874)</span>
                </a>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Boarding Point Banner */}
              <div className="p-3.5 rounded-xl bg-sand/20 border border-sand/50 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-charcoal/85 gap-1.5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-forest shrink-0" />
                  <span><strong>Boarding:</strong> Pondicherry Marina Boathouse Jetty</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold text-sunset tracking-wider">8:00 AM – 5:30 PM Daily</span>
                  <span className="text-[10px] uppercase font-bold text-mangrove tracking-wider">• Boat Rides Only</span>
                </div>
              </div>

              {/* Ride Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-2">
                  Select Boating Ride or Celebration
                </label>
                <select
                  value={formData.rideType}
                  onChange={(e) => setFormData({ ...formData, rideType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-sand/60 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest font-medium"
                >
                  {RIDES_AND_EXPERIENCES.map((r) => (
                    <option key={r.id} value={r.title}>
                      {r.title} — {r.tagline}
                    </option>
                  ))}
                  <option value="Private Boathouse Boat Charter">
                    Private Boathouse Boat Charter (Full Boat for Custom Group)
                  </option>
                </select>
              </div>

              {/* Date & Time Slot */}
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
                    Preferred Time Slot (8 AM – 5:30 PM)
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-sand/60 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest"
                  >
                    <option value="Morning Opening (08:00 AM - 10:30 AM)">Morning Opening (08:00 AM - 10:30 AM)</option>
                    <option value="Midday Safari (10:30 AM - 01:30 PM)">Midday Safari (10:30 AM - 01:30 PM)</option>
                    <option value="Afternoon Cruise (01:30 PM - 04:00 PM)">Afternoon Cruise (01:30 PM - 04:00 PM)</option>
                    <option value="Sunset Golden Hour (04:00 PM - 05:30 PM)">Sunset Golden Hour (04:00 PM - 05:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Passengers Count */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-2">
                  Number of Passengers / Guests
                </label>
                <select
                  value={formData.passengers}
                  onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-sand/60 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest"
                >
                  <option value="2 Passengers (Couple)">2 Passengers (Couple Ride / Romantic Date)</option>
                  <option value="1 Passenger">1 Passenger (Solo Nature Ride)</option>
                  <option value="3-4 Passengers (Small Family / Friends)">3–4 Passengers (Small Family / Friends)</option>
                  <option value="5-8 Passengers (Celebration / Adventure)">5–8 Passengers (Birthday / Happy Ride)</option>
                  <option value="9-15 Passengers (Large Group / Party)">9–15 Passengers (Large Party / Royal Boat)</option>
                  <option value="16-20 Passengers (Full Boathouse Boat Charter)">16–20 Passengers (Full Boathouse Boat Charter)</option>
                </select>
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
                  Email Address *
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

              {/* Reference ID / Referral Code (Optional) */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-2 flex items-center justify-between">
                  <span>Reference ID / Referral Code</span>
                  <span className="text-[10px] text-charcoal/50 font-normal lowercase tracking-normal bg-sand/30 px-2 py-0.5 rounded-full">Optional</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Previous Booking ID, Friend Referral, or Agent Code"
                  value={formData.referenceId}
                  onChange={(e) => setFormData({ ...formData, referenceId: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-sand/60 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-forest mb-2">
                  Special Celebration Requests (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Birthday cake cutting table, balloons & fairy lights, romantic rose petals & lantern decor, or custom music playlist..."
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
                  className="w-full py-4 rounded-full bg-forest text-sand hover:bg-forest-deep hover:text-white uppercase tracking-widest text-xs font-semibold transition-all shadow-luxury flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registering Boat Ride Request...</span>
                  ) : (
                    <>
                      <span>Reserve Boat Ride</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-[11px] text-charcoal/60 text-center mt-3 font-sans">
                  * All rides depart from Pondicherry Marina Boathouse Jetty. Life jackets and certified marine pilots provided.
                </p>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
