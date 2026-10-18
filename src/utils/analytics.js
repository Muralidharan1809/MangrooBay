// Google Analytics 4 (GA4) Helper Utility for Mangrove Bay
// Safely tracks page views and conversion events (Bookings, WhatsApp clicks, Offers)

export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your real GA4 ID from Google Analytics

/**
 * Send a generic event to Google Analytics
 */
export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, params);
      if (process.env.NODE_ENV === 'development') {
        console.log(`[GA4 Event] ${eventName}:`, params);
      }
    } catch (e) {
      console.warn('Google Analytics event error:', e);
    }
  }
};

/**
 * Track when a user clicks to book a specific ride or opens the booking modal
 */
export const trackBookingInitiated = (rideName = 'General', source = 'button') => {
  trackEvent('begin_checkout', {
    item_name: rideName,
    item_category: 'Boat Ride',
    source: source,
    value: 500,
    currency: 'INR'
  });
};

/**
 * Track when a user successfully submits a booking request
 */
export const trackBookingSubmitted = ({ id, rideType, passengers, date, timeSlot, promoCode }) => {
  trackEvent('generate_lead', {
    transaction_id: id,
    item_name: rideType,
    passengers: passengers,
    booking_date: date,
    time_slot: timeSlot,
    coupon: promoCode || 'none',
    currency: 'INR'
  });
};

/**
 * Track WhatsApp conversation click conversions
 */
export const trackWhatsAppClick = (source = 'direct') => {
  trackEvent('contact_whatsapp', {
    method: 'WhatsApp',
    source: source
  });
};

/**
 * Track phone call click
 */
export const trackPhoneClick = (source = 'direct') => {
  trackEvent('contact_phone', {
    method: 'Phone',
    source: source
  });
};

/**
 * Track when a user copies or applies an offer promo code
 */
export const trackOfferApplied = (promoCode, discount) => {
  trackEvent('apply_promotion', {
    coupon: promoCode,
    discount_description: discount
  });
};
