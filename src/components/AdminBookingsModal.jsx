import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Users, 
  Phone, 
  Mail, 
  MessageSquare, 
  Search, 
  Download, 
  Trash2, 
  CheckCircle, 
  AlertCircle, 
  Sparkles,
  Anchor,
  Filter,
  Check,
  RefreshCw
} from 'lucide-react';
import { getStoredBookings, updateBookingStatus, deleteBooking, exportBookingsToCSV } from '../utils/bookingStorage';

export default function AdminBookingsModal({ isOpen, onClose }) {
  const [bookings, setBookings] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [activeTab, setActiveTab] = useState('all'); // 'all' or 'lookup'
  const [lookupQuery, setLookupQuery] = useState('');
  const [lookupResult, setLookupResult] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setBookings(getStoredBookings());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleStatusChange = (id, newStatus) => {
    const updated = updateBookingStatus(id, newStatus);
    setBookings(updated);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this booking record?")) {
      const updated = deleteBooking(id);
      setBookings(updated);
    }
  };

  const handleLookup = (e) => {
    e.preventDefault();
    if (!lookupQuery.trim()) return;
    const clean = lookupQuery.trim().toLowerCase();
    const found = bookings.find(b => 
      (b.id && b.id.toLowerCase().includes(clean)) || 
      (b.referenceId && b.referenceId.toLowerCase().includes(clean)) ||
      (b.phone && b.phone.includes(clean)) || 
      (b.fullName && b.fullName.toLowerCase().includes(clean))
    );
    setLookupResult(found || 'not_found');
  };

  const filteredBookings = bookings.filter(b => {
    const matchesStatus = selectedStatus === 'All' || (b.status || 'Pending') === selectedStatus;
    const cleanSearch = searchQuery.toLowerCase().trim();
    const matchesSearch = !cleanSearch || 
      (b.fullName && b.fullName.toLowerCase().includes(cleanSearch)) ||
      (b.phone && b.phone.includes(cleanSearch)) ||
      (b.id && b.id.toLowerCase().includes(cleanSearch)) ||
      (b.referenceId && b.referenceId.toLowerCase().includes(cleanSearch)) ||
      (b.rideType && b.rideType.toLowerCase().includes(cleanSearch));
    return matchesStatus && matchesSearch;
  });

  const stats = {
    total: bookings.length,
    pending: bookings.filter(b => (b.status || 'Pending') === 'Pending').length,
    confirmed: bookings.filter(b => b.status === 'Confirmed').length
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-forest-deep/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-scale"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-5xl bg-cream rounded-3xl overflow-hidden shadow-2xl border border-sand/40 my-8 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-forest px-6 sm:px-8 py-5 text-cream flex items-center justify-between border-b border-sand/20">
          <div>
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-luxury text-sand font-semibold mb-1">
              <Anchor className="w-3.5 h-3.5 text-sunset" />
              <span>Mangroo Bay • Pondicherry Marina Boathouse</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-cream">
              Booked Slots & Inquiries Manager
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

        {/* Top Control Bar: Tabs & Quick Stats */}
        <div className="bg-forest-deep/95 p-4 sm:px-8 text-cream border-b border-sand/20 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeTab === 'all'
                  ? 'bg-sand text-forest shadow-sm'
                  : 'bg-forest-light/50 text-sand hover:bg-forest-light'
              }`}
            >
              All Booked Slots ({stats.total})
            </button>
            <button
              onClick={() => setActiveTab('lookup')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeTab === 'lookup'
                  ? 'bg-sand text-forest shadow-sm'
                  : 'bg-forest-light/50 text-sand hover:bg-forest-light'
              }`}
            >
              Lookup Slot By Reference ID
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={exportBookingsToCSV}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-forest-light/80 hover:bg-sand hover:text-forest text-sand text-xs font-medium border border-sand/30 transition-all"
              title="Export all bookings to CSV / Excel"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-cream-warm">
          {activeTab === 'lookup' ? (
            /* Lookup by Reference ID or Phone */
            <div className="max-w-xl mx-auto py-6">
              <div className="text-center mb-6">
                <span className="text-xs uppercase tracking-luxury text-sunset font-semibold block mb-1">
                  Customer Self-Service
                </span>
                <h4 className="font-serif text-3xl text-forest font-light">
                  Find Your Booking Details
                </h4>
                <p className="text-xs text-charcoal/70 mt-1">
                  Enter your Booking Reference (e.g. MB-RIDE-48291) or Phone Number to check your slot time.
                </p>
              </div>

              <form onSubmit={handleLookup} className="flex gap-2 mb-8">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-charcoal/40 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    placeholder="Enter Reference ID (e.g. MB-RIDE-...) or Phone"
                    value={lookupQuery}
                    onChange={(e) => setLookupQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-sand/60 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-forest text-sand hover:bg-forest-deep text-xs font-semibold uppercase tracking-wider"
                >
                  Search
                </button>
              </form>

              {lookupResult === 'not_found' && (
                <div className="p-6 rounded-2xl bg-white border border-sunset/30 text-center">
                  <AlertCircle className="w-8 h-8 text-sunset mx-auto mb-2" />
                  <p className="font-serif text-lg text-forest font-medium">No booking found</p>
                  <p className="text-xs text-charcoal/70 mt-1">
                    Please verify your reference number or phone. You can also call us directly at <strong>+91 73974 38874</strong>.
                  </p>
                </div>
              )}

              {lookupResult && lookupResult !== 'not_found' && (
                <div className="p-6 rounded-2xl bg-white border border-sand/50 shadow-md">
                  <div className="flex items-center justify-between border-b border-sand/30 pb-3 mb-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-sunset font-semibold block">
                        Booking Status
                      </span>
                      <span className="font-mono font-bold text-forest text-base">{lookupResult.id}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                      lookupResult.status === 'Confirmed' 
                        ? 'bg-forest/10 text-forest border border-forest/30' 
                        : 'bg-sunset/15 text-sunset border border-sunset/30'
                    }`}>
                      {lookupResult.status || 'Pending'}
                    </span>
                  </div>

                  <div className="space-y-2 text-xs text-charcoal/80">
                    <div className="flex justify-between py-1 border-b border-sand/20">
                      <span className="text-charcoal/60">Passenger Name:</span>
                      <span className="font-medium text-forest">{lookupResult.fullName}</span>
                    </div>
                    {lookupResult.referenceId && (
                      <div className="flex justify-between py-1 border-b border-sand/20">
                        <span className="text-charcoal/60">Referral / Ref Code:</span>
                        <span className="font-mono font-semibold text-sunset">{lookupResult.referenceId}</span>
                      </div>
                    )}
                    <div className="flex justify-between py-1 border-b border-sand/20">
                      <span className="text-charcoal/60">Ride Experience:</span>
                      <span className="font-medium text-forest">{lookupResult.rideType}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-sand/20">
                      <span className="text-charcoal/60">Preferred Date:</span>
                      <span className="font-semibold text-sunset">{lookupResult.date}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-sand/20">
                      <span className="text-charcoal/60">Time Slot:</span>
                      <span className="font-semibold text-forest">{lookupResult.timeSlot}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-sand/20">
                      <span className="text-charcoal/60">Guests:</span>
                      <span>{lookupResult.guests || lookupResult.passengers}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-charcoal/60">Boarding Point:</span>
                      <span className="font-medium text-forest">Pondicherry Marina Boathouse Jetty</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-sand/30 flex justify-center gap-3">
                    <a
                      href={`https://wa.me/917397438874?text=Hello%20Mangroo%20Bay,%20inquiring%20about%20my%20booking%20${lookupResult.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-sand text-forest hover:bg-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <a
                      href="tel:+917397438874"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-forest text-sand hover:bg-forest-deep text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Concierge</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* All Bookings Admin Table/Cards */
            <>
              {/* Filter & Search Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-charcoal/40 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    placeholder="Search by customer name, phone, or reference ID..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-sand/60 text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest"
                  />
                </div>

                <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                  {['All', 'Pending', 'Confirmed', 'Completed'].map(status => (
                    <button
                      key={status}
                      onClick={() => setSelectedStatus(status)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-colors whitespace-nowrap ${
                        selectedStatus === status
                          ? 'bg-forest text-sand shadow-sm'
                          : 'bg-white text-charcoal/70 border border-sand/40 hover:bg-sand/20'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {filteredBookings.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl border border-sand/30">
                  <Calendar className="w-10 h-10 text-sand-dark mx-auto mb-3" />
                  <p className="font-serif text-xl text-forest font-light">No bookings found</p>
                  <p className="text-xs text-charcoal/60 mt-1">
                    Try adjusting your search query or filter.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredBookings.map((b) => (
                    <div
                      key={b.id}
                      className="bg-white rounded-2xl p-5 sm:p-6 border border-sand/50 shadow-sm hover:shadow-md transition-shadow flex flex-col lg:flex-row lg:items-center justify-between gap-4"
                    >
                      {/* Left: Ride & Customer Details */}
                      <div className="space-y-2 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-xs font-bold text-forest bg-forest/10 px-2.5 py-0.5 rounded-md">
                            {b.id}
                          </span>
                          {b.referenceId && (
                            <span className="font-mono text-[11px] font-medium text-sunset bg-sunset/10 border border-sunset/30 px-2 py-0.5 rounded-md" title="Customer Referral / Reference Code">
                              Ref: {b.referenceId}
                            </span>
                          )}
                          <span className="text-xs uppercase tracking-wider font-semibold text-sunset">
                            {b.rideType}
                          </span>
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider ${
                            b.status === 'Confirmed' 
                              ? 'bg-emerald-100 text-emerald-800' 
                              : b.status === 'Completed'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}>
                            {b.status || 'Pending'}
                          </span>
                        </div>

                        <h4 className="font-serif text-xl text-forest font-medium">
                          {b.fullName}
                        </h4>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 text-xs text-charcoal/75 font-sans">
                          <div className="flex items-center gap-1.5 text-sunset font-medium">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{b.date || 'Flexible Date'}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-forest font-medium">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{b.timeSlot}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Users className="w-3.5 h-3.5 text-charcoal/50" />
                            <span>{b.guests || b.passengers || '1-2 Guests'}</span>
                          </div>
                        </div>

                        {b.notes && (
                          <p className="text-xs text-charcoal/70 bg-cream/70 p-2.5 rounded-lg border border-sand/30 italic">
                            “{b.notes}”
                          </p>
                        )}
                      </div>

                      {/* Right: Contact Actions & Status Modifier */}
                      <div className="flex flex-wrap lg:flex-col items-center lg:items-end justify-between gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-sand/30">
                        {/* 1-tap customer contact buttons */}
                        <div className="flex items-center gap-2">
                          {b.phone && (
                            <>
                              <a
                                href={`tel:${b.phone.replace(/[^0-9+]/g, '')}`}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-forest text-sand hover:bg-forest-deep text-xs font-medium transition-colors shadow-sm"
                                title="Call Customer"
                              >
                                <Phone className="w-3 h-3" />
                                <span>Call</span>
                              </a>
                              <a
                                href={`https://wa.me/${b.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(b.fullName)},%20confirming%20your%20Mangroo%20Bay%20boat%20ride%20for%20${encodeURIComponent(b.rideType)}%20on%20${b.date}%20at%20Pondicherry%20Marina%20Boathouse.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium transition-colors shadow-sm"
                                title="WhatsApp Customer"
                              >
                                <MessageSquare className="w-3 h-3" />
                                <span>WhatsApp</span>
                              </a>
                            </>
                          )}
                        </div>

                        {/* Status Dropdown & Delete */}
                        <div className="flex items-center gap-2">
                          <select
                            value={b.status || 'Pending'}
                            onChange={(e) => handleStatusChange(b.id, e.target.value)}
                            className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-white border border-sand/60 text-forest focus:outline-none focus:ring-1 focus:ring-forest cursor-pointer"
                          >
                            <option value="Pending">Pending</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>

                          <button
                            onClick={() => handleDelete(b.id)}
                            className="p-1.5 rounded-lg text-charcoal/40 hover:text-sunset hover:bg-sunset/10 transition-colors"
                            title="Delete booking"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer Note */}
        <div className="bg-white px-6 py-3 border-t border-sand/30 flex items-center justify-between text-[11px] text-charcoal/60">
          <span>Boarding & departures: Pondicherry Marina Boathouse (Daily 8:00 AM – 5:30 PM)</span>
          <span className="font-mono">Owner Helpline: +91 73974 38874</span>
        </div>

      </div>
    </div>
  );
}
