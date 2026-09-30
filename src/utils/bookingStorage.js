// Mangroo Bay - Booking Storage & Slot Management Utility

const STORAGE_KEY = 'mangroo_bay_bookings';

// Pre-seeded sample bookings for demonstration so the dashboard has rich data right away
const INITIAL_SAMPLE_BOOKINGS = [
  {
    id: "MB-RIDE-48291",
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    fullName: "Priya & Karthik",
    phone: "+91 98401 23456",
    email: "karthik.p@example.com",
    rideType: "Couples Ride",
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: "Golden Hour Sunset (04:00 PM – 05:30 PM)",
    guests: "2 Guests (Couple)",
    notes: "Anniversary surprise ride. Requested rose petal decor.",
    status: "Confirmed"
  },
  {
    id: "MB-RIDE-71934",
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
    fullName: "Venkatesh Raman",
    phone: "+91 94432 87654",
    email: "venkat.raman@example.com",
    rideType: "Birthday Celebration",
    date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    timeSlot: "Afternoon Celebration (02:00 PM – 03:45 PM)",
    guests: "12 Guests",
    notes: "10th Birthday party for our daughter. Bringing a cake.",
    status: "Pending"
  },
  {
    id: "MB-RIDE-83920",
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    fullName: "Dr. Ananya Sen",
    phone: "+91 98840 55667",
    email: "ananya.sen@example.com",
    rideType: "Mangrove & Arikamedu Heritage Safari",
    date: new Date().toISOString().split('T')[0],
    timeSlot: "Morning Calm (08:00 AM – 10:00 AM)",
    guests: "4 Guests (Family)",
    notes: "Interested in the ancient Roman bead trading history.",
    status: "Confirmed"
  }
];

export function getStoredBookings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_SAMPLE_BOOKINGS));
      return INITIAL_SAMPLE_BOOKINGS;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error("Failed to load bookings from localStorage", err);
    return INITIAL_SAMPLE_BOOKINGS;
  }
}

export function saveNewBooking(booking) {
  try {
    const existing = getStoredBookings();
    const updated = [booking, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error("Failed to save booking to localStorage", err);
    return [];
  }
}

export function updateBookingStatus(id, newStatus) {
  try {
    const existing = getStoredBookings();
    const updated = existing.map(b => b.id === id ? { ...b, status: newStatus } : b);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error("Failed to update booking status", err);
    return [];
  }
}

export function deleteBooking(id) {
  try {
    const existing = getStoredBookings();
    const updated = existing.filter(b => b.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error("Failed to delete booking", err);
    return [];
  }
}

export function exportBookingsToCSV() {
  const bookings = getStoredBookings();
  if (!bookings || bookings.length === 0) return;

  const headers = ["Reference ID", "Date", "Time Slot", "Customer Name", "Phone", "Email", "Ride Type", "Guests", "Status", "Notes", "Created At"];
  const rows = bookings.map(b => [
    `"${b.id || ''}"`,
    `"${b.date || ''}"`,
    `"${b.timeSlot || ''}"`,
    `"${b.fullName || ''}"`,
    `"${b.phone || ''}"`,
    `"${b.email || ''}"`,
    `"${b.rideType || ''}"`,
    `"${b.guests || b.passengers || ''}"`,
    `"${b.status || 'Pending'}"`,
    `"${(b.notes || b.specialRequests || '').replace(/"/g, '""')}"`,
    `"${b.createdAt || ''}"`
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `mangroo_bay_bookings_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
