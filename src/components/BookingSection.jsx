import React, { useState } from 'react';
import { Calendar, Users, Send, CheckCircle2, ShieldCheck, Phone, Mail, Clock, MessageSquare, Anchor, Sparkles } from 'lucide-react';
import { BRAND_DATA, RIDES_AND_EXPERIENCES } from '../data/content';
import { saveNewBooking } from '../utils/bookingStorage';

export default function BookingSection({ onOpenContact }) {
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
  const [inquiryCode, setInquiryCode] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = 'Select preferred ride date';
    if (!formData.fullName.trim()) newErrors.fullName = 'Your name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Valid phone number required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = 'Valid email address required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const randomCode = 'MB-RIDE-' + Math.floor(10000 + Math.random() * 90000);
      setInquiryCode(randomCode);
      saveNewBooking({
        id: randomCode,
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
    setFormData({
      rideType: 'Sunset Ride',
      date: '',
      timeSlot: 'Sunset Golden Hour (05:00 PM - 06:45 PM)',
      passengers: '2 Passengers (Couple)',
      fullName: '',
      phone: '',
      email: '',
      referenceId: '',
      specialRequests: ''
    });
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
            <span>Pondicherry Marina Boathouse Boarding</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-cream font-light leading-tight mb-4">
            Ready for your boat ride?
          </h2>

          <p className="font-serif text-xl sm:text-2xl text-sand italic font-light">
            “Your next quiet morning or golden sunset on the water is closer than you think.”
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
                Your reservation request for <strong>{formData.rideType}</strong> ({formData.date} • {formData.timeSlot}) has been registered under reference <span className="font-mono text-sand font-bold">{inquiryCode}</span>.
              </p>
              {formData.referenceId && (
                <p className="text-xs text-sand/80 font-mono mb-6">
                  Referral / Reference Code: <strong className="text-sand">{formData.referenceId}</strong>
                </p>
              )}

              <div className="p-4 rounded-xl bg-forest/80 border border-sand/20 max-w-md mx-auto text-xs text-sand/90 mb-8 flex items-start gap-3 text-left">
                <Clock className="w-4 h-4 text-sunset shrink-0 mt-0.5" />
                <p>
                  Our team at Pondicherry Marina Boathouse will confirm your ride slot, coordinate jetty arrival, and arrange any special cake or flower requests. No advance payment required online.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleReset}
                  className="px-8 py-3.5 rounded-full bg-forest text-sand hover:bg-forest-light border border-sand/30 uppercase tracking-widest text-xs font-semibold transition-colors"
                >
                  Book Another Ride
                </button>
                <a
                  href={`https://wa.me/917397438874?text=Hello%20Mangroo%20Bay,%20I%20have%20inquiry%20${inquiryCode}%20for%20${encodeURIComponent(formData.rideType)}%20at%20Pondicherry%20Marina%20Boathouse.${formData.referenceId ? `%20Ref/Referral:%20${encodeURIComponent(formData.referenceId)}` : ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-sand text-forest hover:bg-white uppercase tracking-widest text-xs font-semibold transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect on WhatsApp (+91 73974 38874)</span>
                </a>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-sand/20 gap-2">
                <div className="flex items-center gap-2 text-xs text-sand/90">
                  <ShieldCheck className="w-4 h-4 text-sand" />
                  <span>Pondicherry Marina Boathouse • Daily Boating 8:00 AM – 5:30 PM</span>
                </div>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="text-xs text-sand/80 hover:text-white underline underline-offset-4"
                >
                  Special Birthday or Party Request? Contact Us
                </button>
              </div>

              {/* Ride Selection */}
              <div>
                <label className="block text-xs uppercase tracking-luxury text-sand font-semibold mb-2">
                  Select Boating Ride or Celebration
                </label>
                <select
                  value={formData.rideType}
                  onChange={(e) => setFormData({ ...formData, rideType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-forest/80 border border-sand/30 text-sm text-cream focus:outline-none focus:border-sand font-medium"
                >
                  {RIDES_AND_EXPERIENCES.map(r => (
                    <option key={r.id} value={r.title} className="bg-forest-deep text-sand">
                      {r.title} — {r.tagline} ({r.duration})
                    </option>
                  ))}
                  <option value="Private Boathouse Boat Charter" className="bg-forest-deep text-sand">
                    Private Boathouse Boat Charter — Full boat for custom party or family
                  </option>
                </select>
              </div>

              {/* Date, Time Slot & Passengers */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-luxury text-sand font-semibold mb-2">
                    Ride Date *
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-3 py-3 rounded-xl bg-forest/80 border text-sm text-cream focus:outline-none focus:border-sand ${
                      errors.date ? 'border-sunset' : 'border-sand/30'
                    }`}
                  />
                  {errors.date && <p className="text-[11px] text-sunset mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-luxury text-sand font-semibold mb-2">
                    Time Slot (8 AM – 5:30 PM)
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-3 rounded-xl bg-forest/80 border border-sand/30 text-sm text-cream focus:outline-none focus:border-sand"
                  >
                    <option value="Morning Opening (08:00 AM - 10:30 AM)" className="bg-forest-deep">Morning Opening (08:00 AM - 10:30 AM)</option>
                    <option value="Midday Safari (10:30 AM - 01:30 PM)" className="bg-forest-deep">Midday Safari (10:30 AM - 01:30 PM)</option>
                    <option value="Afternoon Cruise (01:30 PM - 04:00 PM)" className="bg-forest-deep">Afternoon Cruise (01:30 PM - 04:00 PM)</option>
                    <option value="Sunset Golden Hour (04:00 PM - 05:30 PM)" className="bg-forest-deep">Sunset Golden Hour (04:00 PM - 05:30 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-luxury text-sand font-semibold mb-2">
                    Passengers
                  </label>
                  <select
                    value={formData.passengers}
                    onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                    className="w-full px-3 py-3 rounded-xl bg-forest/80 border border-sand/30 text-sm text-cream focus:outline-none focus:border-sand"
                  >
                    <option value="2 Passengers (Couple)" className="bg-forest-deep">2 Passengers (Couple Ride)</option>
                    <option value="1 Passenger" className="bg-forest-deep">1 Passenger (Solo)</option>
                    <option value="3-4 Passengers (Small Family)" className="bg-forest-deep">3–4 Passengers (Small Family)</option>
                    <option value="5-8 Passengers (Celebration / Adventure)" className="bg-forest-deep">5–8 Passengers (Birthday / Adventure)</option>
                    <option value="9-15 Passengers (Large Group)" className="bg-forest-deep">9–15 Passengers (Group Party)</option>
                    <option value="16-20 Passengers (Full Charter)" className="bg-forest-deep">16–20 Passengers (Full Boathouse Boat)</option>
                  </select>
                </div>
              </div>

              {/* Guest Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-luxury text-sand font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
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
                  <label className="block text-xs uppercase tracking-luxury text-sand font-semibold mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
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
                <label className="block text-xs uppercase tracking-luxury text-sand font-semibold mb-2">
                  Email Address *
                </label>
                <input
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

              {/* Reference ID / Referral Code (Optional) */}
              <div>
                <label className="block text-xs uppercase tracking-luxury text-sand font-semibold mb-2 flex items-center justify-between">
                  <span>Reference ID / Referral Code</span>
                  <span className="text-[10px] text-sand/60 font-normal lowercase tracking-normal bg-forest-light/60 px-2 py-0.5 rounded-full">Optional</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Previous Booking ID, Friend Referral, or Agent Code"
                  value={formData.referenceId}
                  onChange={(e) => setFormData({ ...formData, referenceId: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-forest/80 border border-sand/30 text-sm text-cream focus:outline-none focus:border-sand"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-luxury text-sand font-semibold mb-2">
                  Special Celebration Requests (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Birthday cake cutting setup, balloon decorations, romantic flower arrangement, photography help, or custom music playlist..."
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
                  className="w-full sm:flex-1 py-4 rounded-full bg-sand text-forest hover:bg-white uppercase tracking-luxury text-xs font-bold transition-all shadow-luxury flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Reserve Boat Ride</span>
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
                <p className="text-[11px] text-sand/60 font-sans">
                  * Exclusively boat ride experiences. Departures from Pondicherry Marina Boathouse Jetty. Life jackets provided.
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
