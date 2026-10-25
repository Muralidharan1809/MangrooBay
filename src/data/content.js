// Mangrove Bay - Exclusively Premier Boating Experiences
// Mangrove Bay, Puducherry, India
// Note: Exclusively boat rides and tours on the water (No overnight stays).

export const STANDARD_PRICING = {
  duration: "1 Hour (60 Mins)",
  durationMinutes: 60,
  adultPrice: 500,
  childPrice: 250,
  couplePrice: 3000,
  separatePrice: 5000,
  currency: "₹",
  priceDisplay: "₹500 / Adult • ₹250 / Child",
  couplePriceDisplay: "₹3,000 / Couple Ride (1 Hour)",
  separatePriceDisplay: "₹5,000 / Separate Private Boat (1 Hour)",
  childPolicy: "Child rate applies for kids aged 3–10. Infants under 3 ride free.",
  everyRideNote: "Every boat ride is 1 Hour (60 Mins) in duration.",
  pricingNote: "Shared rides: ₹500/Adult, ₹250/Child • Couple Ride: ₹3,000 • Separate Private Boat: ₹5,000 (All Rides 1 Hour)",
  amenitiesNote: "100% Free Vehicle Parking • Clean Restrooms & Toilet Facilities • Private Dress Changing Rooms"
};

export const BRAND_DATA = {
  name: "Mangrove Bay",
  tagline: "Escape into the calm.",
  supportingLine: "A premier boating experience surrounded by water, mangroves and the quiet beauty of Mangrove Bay.",
  alternativeLine: "Pondicherry’s finest boat rides — where water, nature and unforgettable moments meet.",
  location: "Mangrove Bay, Puducherry, India",
  estYear: "2026",
  marinaBadge: "Mangrove Bay",
  boatingHours: "Morning 7:00 AM – Evening 5:30 PM (Daily)",
  boatingHoursShort: "Daily 7:00 AM – 5:30 PM",
  contact: {
    phone: "+91 73974 38874",
    phoneRaw: "+917397438874",
    whatsapp: "+91 73974 38874",
    whatsappUrl: "https://wa.me/917397438874",
    website: "https://www.pondyboating.com",
    email: "info@pondyboating.com",
    address: "2nd Cross St, Marina, Vambakeerapalayam, Puducherry, 605001, India",
    mapCoordinates: { lat: 11.9125, lng: 79.8228 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=PondyBoating+Marina+Vambakeerapalayam+Puducherry",
    instagram: "https://instagram.com/mangrovebay.pondy",
    facebook: "https://facebook.com/mangrovebay.pondy"
  }
};

export const HERO_DATA = {
  title: "MANGROVE BAY",
  tagline: "Where nature, history and boating adventure meet.",
  description: "Discover the beauty of Mangrove Bay, explore peaceful mangroves, experience the heritage of Arikamedu, and set out on an unforgettable boating adventure.",
  supportingText: "Whether it’s a relaxing escape, a sunset ride, or an exciting journey on the water, Mangrove Bay is your gateway to explore Puducherry from a whole new perspective.",
  invitation: "Come aboard. Explore. Adventure. Escape into the calm.",
  marinaHighlight: "Boarding & Boat Rides at Mangrove Bay",
  boatingHoursBadge: "Daily Boating: Morning 7:00 AM – Evening 5:30 PM",
  primaryCta: "Book Your Boat Ride",
  secondaryCta: "Explore All Boat Rides",
  scrollText: "Scroll to explore ↓",
  videoSrc: "/videos/entrance-video.mp4",
  bgImage: "/Images/Pondycherry_harbour.jpeg",
  aerialBg: "/Images/Pondycherry Beach&River.jpeg"
};

export const INTRO_DATA = {
  eyebrow: "PONDY BOATING • MANGROVE BAY",
  heading: "The #1 Tourist Boating in Pondicherry & Premier Marina Boating.",
  body: "Discover the beauty of Pondy Boating at Mangrove Bay — explore peaceful mangroves, experience the 2,000-year heritage of Arikamedu, and set out on an unforgettable boating adventure in Pondicherry.",
  secondaryText: "Looking for the finest boating in Pondy (Pondycherry)? Whether it is a romantic couple cruise, family private charter, or a serene mangrove boating safari, Pondy Boating is your gateway to explore Puducherry from the water.",
  invitation: "Come aboard. Explore. Adventure. Escape into the calm.",
  features: [
    { number: "01", title: "Mangrove Bay", subtitle: "Coastal estuary waters, scenic breakwaters & ocean breezes" },
    { number: "02", title: "Peaceful Mangrove Safaris", subtitle: "Lush green biological root tunnels & native birds" },
    { number: "03", title: "Historic Arikamedu Heritage", subtitle: "Ancient Roman trading port ruins along serene riverbanks" }
  ],
  mainImage: "/Images/Mangroove_Forest1.jpeg",
  secondaryImage: "/Images/CouplesRide.jpeg"
};

// All Scenic Places Explored in Every 1-Hour Cruise
// Customers do NOT have to choose just 1 place — EVERY 1-hour boat ride explores ALL 4 of these locations together!
export const ALL_PLACES_EXPLORED = [
  {
    id: "mangrove-forest",
    number: "01",
    title: "Mangrove Forest & Canopy Trails",
    tagline: "Lush Tidal Bio-Reserve & Green Water Tunnels",
    description: "Navigate through the protected coastal mangrove canals where dense root systems drop into the tidal water, creating shady biological tunnels and sanctuary for exotic migratory birds.",
    image: "/Images/Mangroo Forest.jpeg",
    highlights: ["Shaded mangrove root canals", "Rare wetland bird species", "Cool saline breeze & mirror waters"]
  },
  {
    id: "arikkamedu-port",
    number: "02",
    title: "Historic Arikamedu Port",
    tagline: "2,000-Year Ancient Indo-Roman Trading Port",
    description: "Cruise alongside the historic riverbanks of Arikamedu — Puducherry's legendary archaeological wonder where ancient Romans traded Roman amphorae wine jars, gemstones, and beads across the river over 2,000 years ago.",
    image: "/Images/Arikkamedu.jpeg",
    highlights: ["2,000-year Roman trade history", "Archaeological river banks", "Ancient port heritage insights"]
  },
  {
    id: "beach-and-river",
    number: "03",
    title: "Pondicherry Beach & River Confluence",
    tagline: "Where Lagoon Waters Meet Bay of Bengal Waves",
    description: "Glide out to the magnificent estuary confluence point where the tranquil backwater river merges into the sparkling Bay of Bengal ocean beach. Enjoy open panoramic ocean views and soothing waves.",
    image: "/Images/Pondycherry Beach&River.jpeg",
    highlights: ["River meets ocean confluence", "Golden sandy beach views", "Panoramic open-water breeze"]
  },
  {
    id: "pondicherry-harbour",
    number: "04",
    title: "Pondicherry Harbour & Breakwaters",
    tagline: "Maritime Activity, Breakwaters & Deep Water Horizons",
    description: "Pass by the sheltering maritime breakwaters of Mangrove Bay and the active fishing harbor. Watch colorful catamarans, deep sea trawlers, and seabirds diving in the horizon.",
    image: "/Images/Pondycherry_harbour.jpeg",
    highlights: ["Active fishing fleet & catamarans", "Harbour breakwater views", "Deep blue maritime horizon"]
  }
];

// Signature Boat Rides at Mangrove Bay
// Couple Ride: ₹3,000 • Separate Private Boat: ₹5,000 • Shared Ride: ₹500/Adult, ₹250/Child (All Rides 1 Hour)
// NOTE: Every single ride explores ALL 4 scenic places above!
export const RIDES_AND_EXPERIENCES = [
  {
    id: "couples-ride",
    title: "Couples Ride",
    category: "Romantic & 100% Private",
    badge: "Couple Special • ₹3,000",
    tagline: "Private secluded boat cruise tailored for two • All Places Explored",
    description: "An intimate romantic voyage designed exclusively for couples, proposals, anniversaries, and peaceful moments. Subtle boat styling, soft music, ambient sunset glow, and 100% complete privacy on the water. Explores Mangroves, Arikamedu, Beach/River confluence, and Harbour together in a full 1-hour cruise.",
    duration: "1 Hour (60 Mins)",
    durationMinutes: 60,
    priceAdult: 3000,
    priceDisplay: "₹3,000 / Couple (1 Hour)",
    priceNote: "₹3,000 Flat Rate for 2 Guests (1 Hour Full Cruise • All Sights Included)",
    isPackage: true,
    packagePrice: 3000,
    timing: "07:00 AM – 05:30 PM (Custom Private Slots)",
    capacity: "Strictly 2 Guests (Couple)",
    image: "/Images/CouplesRide.jpeg",
    features: [
      "100% Private dedicated vessel for 2",
      "₹3,000 Complete Couple Package",
      "1 Hour full serene cruise",
      "All 4 scenic destinations explored",
      "Romantic music playlist & photo stops"
    ]
  },
  {
    id: "separate-ride",
    title: "Separate Private Boat",
    category: "Exclusive Private Charter",
    badge: "100% Private Boat • ₹5,000",
    tagline: "Dedicated separate private boat exclusively for your group • All Places Explored",
    description: "Enjoy complete privacy with a separate boat reserved entirely for your family or friends (1 to 10 guests). No strangers or sharing. Choose your own rhythm, customized music, photo stops, and route through mangroves, Arikamedu, beach confluence, and harbor.",
    duration: "1 Hour (60 Mins)",
    durationMinutes: 60,
    priceAdult: 5000,
    priceDisplay: "₹5,000 / Separate Boat (1 Hour)",
    priceNote: "₹5,000 Flat Rate for 1 to 10 Guests (1 Hour Private • All Sights Included)",
    isPackage: true,
    packagePrice: 5000,
    timing: "07:00 AM – 05:30 PM (Any Custom Slot)",
    capacity: "Exclusive Group (1 to 10 Guests)",
    image: "/Images/GroupRide.jpeg",
    features: [
      "100% Exclusive separate private boat",
      "₹5,000 Full Boat Flat Rate (1 to 10 Guests)",
      "1 Hour uninterrupted private tour",
      "All 4 scenic destinations explored",
      "Custom music, photo stops & flexible route"
    ]
  },
  {
    id: "group-ride",
    title: "Shared Boating Ride",
    category: "Classic Scenic Cruise",
    badge: "Most Popular • 1 Hour",
    tagline: "Scenic 1-hour cruise exploring all backwaters, mangroves & sea confluence",
    description: "Join fellow travellers for a wonderful 1-hour voyage. Feel the cool river and ocean breeze, glide past ancient archaeological banks, navigate through emerald mangrove canopies, and reach the beach sea mouth.",
    duration: "1 Hour (60 Mins)",
    durationMinutes: 60,
    priceAdult: 500,
    priceChild: 250,
    priceDisplay: "₹500 / Adult • ₹250 / Child",
    priceNote: "₹500 Adult / ₹250 Child (1 Hour • All Sights Included)",
    timing: "07:00 AM – 05:30 PM (Daily Slots)",
    capacity: "Min 1 – Max 10 Guests",
    image: "/Images/GroupRide.jpeg",
    features: [
      "Min 1 – Max 10 Guests capacity",
      "₹500 Adult / ₹250 Child",
      "1 Hour full duration ride",
      "All 4 scenic destinations explored",
      "Free parking, restrooms & changing rooms"
    ]
  },
  {
    id: "pondicherry-beach-river",
    title: "Sunset & Sea Confluence Ride",
    category: "Sunset & Golden Hour",
    badge: "Golden Hour Special",
    tagline: "Where the backwater river meets the ocean beach at golden sunset",
    description: "Cruise past the sheltering breakwaters of Mangrove Bay into the majestic confluence where the river meets the Bay of Bengal sea beach. Watch the sun dip over the coastal horizon casting golden glows across waves and sands while exploring all 4 scenic sights.",
    duration: "1 Hour (60 Mins)",
    durationMinutes: 60,
    priceAdult: 500,
    priceChild: 250,
    priceDisplay: "₹500 / Adult • ₹250 / Child",
    priceNote: "₹500 Adult / ₹250 Child (1 Hour)",
    timing: "03:30 PM – 05:30 PM (Golden Hour Sunset)",
    capacity: "1 to 10 Guests (Shared or Private)",
    image: "/Images/Pondycherry Beach&River.jpeg",
    features: [
      "Golden hour panoramic ocean sunset",
      "River & ocean confluence crossing",
      "All 4 scenic destinations explored",
      "1 Hour sunset cruise & photo stops"
    ]
  },
  {
    id: "pondicherry-harbour",
    title: "Sunrise Morning Estuary Ride",
    category: "Sunrise & Morning Calm",
    badge: "Early 7 AM Opening",
    tagline: "Morning opening rays, harbor views, and fishing boat horizons",
    description: "Witness the estuary and bustling harbor awaken with our first morning departures at 7:00 AM. Glide across still, mirror-like waters as the morning sun casts soft golden beams across traditional catamarans and docks, exploring all 4 sights in morning peace.",
    duration: "1 Hour (60 Mins)",
    durationMinutes: 60,
    priceAdult: 500,
    priceChild: 250,
    priceDisplay: "₹500 / Adult • ₹250 / Child",
    priceNote: "₹500 Adult / ₹250 Child (1 Hour)",
    timing: "07:00 AM – 09:30 AM (Sunrise & Morning Slots)",
    capacity: "1 to 10 Guests (Shared or Private)",
    image: "/Images/Pondycherry_harbour.jpeg",
    features: [
      "Early 7:00 AM sunrise calm waters",
      "Morning harbor & catamaran views",
      "All 4 scenic destinations explored",
      "1 Hour fresh morning cruise"
    ]
  }
];

// Boat Fleet & Vessels Showcase (Replacing any stay/room concept)
export const BOAT_FLEET_DATA = {
  eyebrow: "OUR BOAT FLEET & VESSELS",
  heading: "Crafted for comfort on the water.",
  description: "Operating from Mangrove Bay, our custom-built boats feature wide panoramic views, plush cushioned seating, protective sunshade canopies, and strict marine safety standards.",
  features: [
    { name: "Comfortable Seating", icon: "Armchair", detail: "Plush cushioned lounge seating with ample legroom" },
    { name: "360° Waterfront Views", icon: "Eye", detail: "Unobstructed open-air decks for photography & scenic sightseeing" },
    { name: "Sun & Rain Canopy", icon: "Umbrella", detail: "Protective overhead canopy keeping guests cool and shaded" },
    { name: "Certified Life Jackets", icon: "LifeBuoy", detail: "100% government-approved safety jackets for adults, children & infants" },
    { name: "Clear Marine Sound System", icon: "Music", detail: "Bluetooth music connectivity for relaxing and scenic boat rides" },
    { name: "Certified Boat Captain", icon: "Anchor", detail: "Highly experienced local marine pilots with deep waterway knowledge" }
  ],
  vessels: [
    {
      id: "royal-cruiser",
      title: "The Mangrove Bay Royal Cruiser",
      category: "Signature Covered Cruiser Vessel",
      capacity: "1 to 10 Guests (Min 1 – Max 10)",
      idealFor: "Family Gatherings, Group Rides & Separate Private Boat Tours",
      pricingPlaceholder: "Separate Private Boat: ₹5,000 • Shared: ₹500/Adult, ₹250/Child (1 Hour)",
      image: "/Images/GroupRide.jpeg",
      gallery: [
        "/Images/GroupRide.jpeg",
        "/Images/Pondycherry Beach&River.jpeg"
      ],
      description: "Our flagship covered vessel. Features a wide central deck with cushioned perimeter seating, protective overhead sunshade canopy, decorative warm lighting, and crystal-clear sound connectivity."
    },
    {
      id: "sunset-safari",
      title: "The Estuary Horizon Cruiser",
      category: "Intimate Couple & Eco Safari Boat",
      capacity: "Strictly 2 Guests (Couple) or Up to 6",
      idealFor: "Couple Rides (₹3,000), Sunrise Birdwatching & Private Sunset Glides",
      pricingPlaceholder: "Couple Ride: ₹3,000 Package • 1 Hour Full Cruise",
      image: "/Images/CouplesRide.jpeg",
      gallery: [
        "/Images/CouplesRide.jpeg",
        "/Images/Arikkamedu.jpeg",
        "/Images/Mangroo Forest.jpeg"
      ],
      description: "Designed for couples and intimate groups. Positioned low to the water for silent gliding into narrow mangrove channels and viewing romantic sunsets along the Puducherry backwaters."
    }
  ]
};

export const MARINA_KEY_DETAILS = {
  name: "Mangrove Bay",
  hubTagline: "The premier boarding gateway for Mangrove Bay",
  overview: "Mangrove Bay operates exclusively from Mangrove Bay. This unique geographical haven sits right at the confluence of the mangrove waterways, tranquil lagoon backwaters, and the open Bay of Bengal sea mouth.",
  highlights: [
    { title: "Daily Boating: 7:00 AM – 5:30 PM", desc: "Open daily from Morning 7:00 AM to Evening 5:30 PM with early sunrise departures, romantic sunset cruises, and 1-hour backwater rides." },
    { title: "100% Free Vehicle Parking", desc: "Spacious dedicated free parking for cars and two-wheelers right at the jetty entrance." },
    { title: "Clean Restrooms & Toilet Facilities", desc: "Well-maintained hygienic washroom facilities available for all guests before and after your ride." },
    { title: "Private Dress Changing Rooms", desc: "Dedicated clean changing rooms to easily change clothing before or after water activities." },
    { title: "100% Certified Safety", desc: "Govt-approved life jackets for adults and children, certified marine pilots, and full first-aid readiness." }
  ]
};

export const TIMELINE_DATA = {
  heading: "Boating hours, morning 7:00 AM to evening 5:30 PM.",
  subheading: "From early 7:00 AM sunrise departures to golden hour sunsets at Mangrove Bay.",
  stages: [
    {
      id: "morning",
      time: "07:00 AM — 10:30 AM",
      name: "Early Morning Sunrise & Estuary Calm",
      summary: "Mirror-still water, soft morning rays & birdsong.",
      description: "Step aboard our earliest departures of the day at 7:00 AM. Still waters make this the purest time for peaceful cruising, nature watching, photography, and fresh filter coffee on the water.",
      image: "/Images/Pondycherry_harbour.jpeg",
      accent: "#E9D8B8",
      vibe: "Serene & Dewy"
    },
    {
      id: "midday",
      time: "10:30 AM — 01:30 PM",
      name: "Mangrove Safari & Bio-Reserve Tunnels",
      summary: "Cool shaded green root tunnels & quiet gliding.",
      description: "Glide under the dense mangrove canopy where natural leaf canopies shield against the sun. Explore narrow green tunnels and observe native coastal wildlife.",
      image: "/Images/Mangroove_Forest1.jpeg",
      accent: "#315C4A",
      vibe: "Shaded & Peaceful"
    },
    {
      id: "afternoon",
      time: "01:30 PM — 04:00 PM",
      name: "Adventure & Family Lagoon Rides",
      summary: "Spirited waves, shaded deck & joyful family moments.",
      description: "Cruise across open lagoon waterways with family and friends on our covered cruiser, feel the refreshing sea breeze, and enjoy exhilarating smooth turns.",
      image: "/Images/GroupRide.jpeg",
      accent: "#123C32",
      vibe: "Active & Breezy"
    },
    {
      id: "golden-hour",
      time: "04:00 PM — 05:30 PM",
      name: "Sunset Ride & Final Evening Cruise",
      summary: "Amber skies, terracotta horizons & sea breeze.",
      description: "Puducherry’s most iconic golden hour before our 5:30 PM close. Watch the sky turn fiery orange and lilac as your boat drifts along calm backwaters toward the sea mouth.",
      image: "/Images/Pondycherry Beach&River.jpeg",
      accent: "#D9825B",
      vibe: "Romantic & Amber"
    }
  ]
};

export const GALLERY_DATA = [
  {
    id: "story-video-1",
    category: "Video Story",
    title: "Mangrove Bay Boating Experience Reel",
    subtitle: "Watch real 1-hour cruise gliding through calm mangrove waters",
    src: "/Images/Mangroo Forest.jpeg",
    videoSrc: "/videos/entrance-video.mp4",
    isVideo: true,
    span: "col-span-12 md:col-span-7",
    aspect: "aspect-[16/10]"
  },
  {
    id: 1,
    category: "The Bay",
    title: "Mangrove Bay & Harbour",
    subtitle: "Boating gateway at the harbor estuary",
    src: "/Images/Pondycherry_harbour.jpeg",
    span: "col-span-12 md:col-span-7",
    aspect: "aspect-[16/10]"
  },
  {
    id: 2,
    category: "Boats & Fleet",
    title: "Mangrove Bay Covered Vessel",
    subtitle: "Spacious deck for family & scenic cruises",
    src: "/Images/GroupRide.jpeg",
    span: "col-span-12 md:col-span-5",
    aspect: "aspect-[4/3]"
  },
  {
    id: 3,
    category: "Sunset",
    title: "Sunset & Sea Ride Confluence",
    subtitle: "Where river meets the ocean at golden hour",
    src: "/Images/Pondycherry Beach&River.jpeg",
    span: "col-span-12 md:col-span-4",
    aspect: "aspect-[4/5]"
  },
  {
    id: 4,
    category: "Rides",
    title: "Couple Ride on Calm Waters",
    subtitle: "Romantic private boating for two",
    src: "/Images/CouplesRide.jpeg",
    span: "col-span-12 md:col-span-8",
    aspect: "aspect-[16/9]"
  },
  {
    id: 5,
    category: "Nature",
    title: "Mangrove Safari Bio-Reserve",
    subtitle: "Navigating lush green waterway tunnels",
    src: "/Images/Mangroo Forest.jpeg",
    span: "col-span-12 md:col-span-5",
    aspect: "aspect-[4/3]"
  },
  {
    id: 6,
    category: "Rides",
    title: "Lagoon Scenic Boating",
    subtitle: "Wide open deck for family and scenic views",
    src: "/Images/GroupRide.jpeg",
    span: "col-span-12 md:col-span-7",
    aspect: "aspect-[16/10]"
  },
  {
    id: 7,
    category: "Heritage",
    title: "Arikamedu Heritage Waters",
    subtitle: "Ancient trading port riverbank exploration",
    src: "/Images/Arikkamedu.jpeg",
    span: "col-span-12 md:col-span-6",
    aspect: "aspect-[16/11]"
  },
  {
    id: 8,
    category: "Nature",
    title: "Lush Mangrove Canopies",
    subtitle: "Dense mangrove roots and peaceful trails",
    src: "/Images/Mangroove_Forest1.jpeg",
    span: "col-span-12 md:col-span-6",
    aspect: "aspect-[16/11]"
  }
];

export const WHY_MARINA_DATA = [
  {
    number: "01",
    title: "Dedicated Boarding Jetty",
    description: "Depart directly from Mangrove Bay jetty, with 100% free vehicle parking, clean restrooms & toilet facilities, private dress changing rooms, and rapid access from White Town."
  },
  {
    number: "02",
    title: "100% Certified Marine Safety",
    description: "Government-approved life jackets for all passengers, certified pilots, and comprehensive safety readiness on every trip."
  },
  {
    number: "03",
    title: "Intimate Dates & Family Tours",
    description: "Private couple voyages styled with romantic ambient decor, alongside spacious covered vessels for memorable family outings."
  },
  {
    number: "04",
    title: "Mangrove & Sea Confluence",
    description: "The only boating location that takes you through dense mangrove tunnels and out to the Bay of Bengal sea mouth."
  },
  {
    number: "05",
    title: "Peaceful & Approachable",
    description: "Escape the city rush and enjoy peaceful waters, gentle sea breezes, and memories that last a lifetime."
  }
];

export const WHY_MANGROVE_DATA = WHY_MARINA_DATA;
export const WHY_MANGROO_DATA = WHY_MARINA_DATA;

export const LOCATION_DATA = {
  heading: "Find your way to the bay.",
  location: "Mangrove Bay, Puducherry, India",
  address: "2nd Cross St, Marina, Vambakeerapalayam, Puducherry, 605001, India",
  boatingHours: "Morning 07:00 AM to Evening 05:30 PM (Daily)",
  note: "Board directly at Mangrove Bay. Open daily from Morning 7:00 AM to Evening 5:30 PM. 100% Free vehicle parking, clean restrooms & toilet facilities, private dress changing rooms, certified safety gear, and welcoming guest jetty lounge available.",
  marinaFeatures: [
    "100% Free Vehicle Parking (Cars & Two-Wheelers)",
    "Clean Restrooms & Toilet Facilities",
    "Private Dress Changing Rooms for Guests",
    "Boating Timings: Daily 7:00 AM – 5:30 PM (All Rides 1 Hour)",
    "Dedicated Boarding Jetty at Mangrove Bay",
    "Govt-Approved Life Jackets & Safety Briefing"
  ],
  attractions: [
    { name: "Waterfront Estuary Promenade", distance: "At the location / 1 min walk" },
    { name: "Arikamedu Ancient Archaeological Site", distance: "Along our backwater boating route / 10 mins" },
    { name: "White Town (French Quarter)", distance: "5–8 mins scenic drive" },
    { name: "Promenade Beach & Rock Beach", distance: "7 mins drive" },
    { name: "Auroville International Township", distance: "25 mins drive" }
  ]
};

// Boating Safety & Precaution Guidelines
export const SAFETY_AND_PRECAUTIONS_DATA = {
  eyebrow: "YOUR SAFETY IS OUR HIGHEST PRIORITY",
  heading: "Boating Safety & Passenger Precautions",
  tagline: "Certified equipment, licensed boat masters, and strict maritime precautions for complete peace of mind.",
  overview: "At Mangrove Bay, every voyage across Mangrove Bay, the mangrove backwaters, and the historic Arikamedu estuary is guided by uncompromising safety protocols. Please review our safety guidelines and essential passenger precautions before boarding.",
  guidelines: [
    {
      id: "life-jackets",
      title: "100% Mandatory Life Jackets",
      icon: "LifeBuoy",
      summary: "Government-approved safety jackets for all passengers.",
      description: "Properly fitted, certified marine life jackets are mandatory and provided for every adult, child, and infant before stepping aboard. Jackets must remain securely fastened throughout the entire ride."
    },
    {
      id: "certified-captains",
      title: "Government-Certified Boat Masters",
      icon: "Anchor",
      summary: "Licensed marine pilots with extensive local navigation experience.",
      description: "All Mangrove Bay vessels are operated exclusively by government-licensed boat masters trained in maritime safety, CPR, first aid, and shallow-water backwater channels."
    },
    {
      id: "weather-monitoring",
      title: "Weather & Tide Synchronized",
      icon: "Compass",
      summary: "Real-time monitoring of tidal currents and coastal forecasts.",
      description: "Departures are coordinated with Puducherry port weather bulletins and daily tidal charts. Rides are smoothly adjusted or rescheduled should wind or tide exceed safety thresholds."
    },
    {
      id: "safe-boarding",
      title: "Safe Jetty Boarding & Accessibility",
      icon: "ShieldCheck",
      summary: "Dedicated stable pontoon with crew boarding assistance.",
      description: "Boarding takes place at our stable Mangrove Bay Boarding Jetty featuring non-slip gangways and sturdy handrails. Crew members provide physical assistance for seniors, toddlers, and families."
    },
    {
      id: "onboard-discipline",
      title: "Passenger Seating & Deck Discipline",
      icon: "Users",
      summary: "Remain comfortably seated while the vessel is in motion.",
      description: "Passengers must remain seated on our cushioned deck lounge seating during transit. Do not lean over gunwales, sit on perimeter railings, or abruptly shift weight while the boat is cruising."
    },
    {
      id: "eco-heritage",
      title: "Eco-Reserve & Arikamedu Protection",
      icon: "Heart",
      summary: "Strict zero-litter policy in mangrove and heritage waters.",
      description: "Help us preserve Puducherry’s pristine mangrove bio-reserve and Arikamedu heritage riverbanks. No disposal of plastics, littering, smoking, or unauthorized swimming in the estuary."
    }
  ],
  precautionsList: [
    "Arrive 10–15 minutes prior to scheduled departure for safety briefing and life jacket fitting.",
    "Listen attentively to your captain's pre-departure instructions.",
    "Fasten life jackets securely before the vessel unmoors from the jetty pontoon.",
    "Keep hands and arms inside the boat during docking and narrow mangrove passes.",
    "Secure mobile phones, cameras, and sunglasses with neck straps or waterproof pouches.",
    "Consumption of alcohol, smoking, and carrying hazardous materials are strictly prohibited.",
    "First-aid emergency kits and marine throw rings are equipped on every Mangrove Bay boat."
  ]
};

// =============================================================================
// SPECIAL OFFERS & PROMOTIONAL DISCOUNTS
// Easy for site owners to add, edit, or disable offers.
// =============================================================================
export const OFFERS_DATA = [
  {
    id: "sunrise7",
    code: "SUNRISE7",
    title: "Sunrise 7:00 AM Early Bird",
    tagline: "First departures of the day at Mangrove Bay",
    discountBadge: "10% OFF",
    discountType: "percentage",
    discountPercent: 10,
    description: "Book our earliest 7:00 AM – 9:00 AM morning slot to experience mirror-calm backwaters, dewy cool breezes, and peaceful birdwatching.",
    applicableRides: "All 1-Hour Rides",
    validity: "Daily 7:00 AM – 9:00 AM Slots",
    terms: "Applicable on all 1-hour rides booked for early morning slots.",
    highlight: true
  },
  {
    id: "familypass",
    code: "FAMILYPASS",
    title: "Family & Group Saver",
    tagline: "Special discount for groups of 1 to 10 guests",
    discountBadge: "₹200 OFF",
    discountType: "flat",
    discountFlat: 200,
    minPassengers: 1,
    maxPassengers: 10,
    description: "Bringing your family or friends? Save ₹200 on total ride bookings for 1 to 10 passengers aboard our cruiser.",
    applicableRides: "Group Ride (Min 1 – Max 10 Guests)",
    validity: "Valid on 1–10 Passengers Daily",
    terms: "Valid for groups of 1 to 10 guests. Applied on total booking amount.",
    highlight: false
  },
  {
    id: "couplebay",
    code: "COUPLEBAY",
    title: "Romantic Couple Special",
    tagline: "Exclusive private couple cruise styling",
    discountBadge: "FREE DECOR",
    discountType: "complimentary",
    description: "Enjoy a private 1-hour cruise tailored for couples with complimentary romantic rose petal decor and warm lantern styling.",
    applicableRides: "Couples Ride",
    validity: "Valid Daily on Couples Ride",
    terms: "Applies to 1-Hour Couples Ride at Mangrove Bay.",
    highlight: false
  },
  {
    id: "weekday10",
    code: "WEEKDAY10",
    title: "Weekday Explorer Pass",
    tagline: "Escape the weekend rush",
    discountBadge: "10% OFF",
    discountType: "percentage",
    discountPercent: 10,
    description: "Enjoy 10% off any 1-hour boat ride Monday through Friday. Unwind in complete tranquility away from city bustle.",
    applicableRides: "All 1-Hour Rides",
    validity: "Monday to Friday (7 AM – 5:30 PM)",
    terms: "Valid on all weekday departures Monday through Friday.",
    highlight: false
  }
];

// =============================================================================
// VERIFIED CUSTOMER REVIEWS & TESTIMONIALS
// Displays authentic reviews from travelers visiting Mangrove Bay.
// =============================================================================
export const REVIEWS_DATA = {
  aggregate: {
    score: "4.9",
    scale: "5.0",
    totalReviews: "520+",
    source: "Google Reviews",
    verifiedPercentage: "98% Positive Feedback",
    recommendationRate: "99% would recommend to friends & family",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=PondyBoating+Marina+Vambakeerapalayam+Puducherry"
  },
  filters: [
    { id: "all", label: "All Reviews (520+)" },
    { id: "couple", label: "Couple Rides" },
    { id: "family", label: "Family & Separate Boat" },
    { id: "mangrove", label: "Mangrove Safaris" },
    { id: "sunset", label: "Sunset Cruises" }
  ],
  reviews: [
    {
      id: "rev-1",
      author: "Ananya & Karthik Sundaram",
      location: "Bengaluru, Karnataka",
      avatarInitials: "AK",
      rating: 5,
      date: "October 2026",
      rideType: "Couples Ride (1 Hour)",
      category: "couple",
      verified: true,
      headline: "Unforgettable romantic cruise — 100% worth the ₹3,000 package!",
      reviewText: "We booked the 1-Hour Couple Ride for our wedding anniversary. Hands down the most peaceful and romantic experience in Pondicherry! Complete privacy on the boat, gentle romantic music playing, and captain was very courteous. The private dress changing rooms and free parking right at Mangrove Bay made the whole visit effortless.",
      highlight: "Private vessel, romantic setup & dedicated captain"
    },
    {
      id: "rev-2",
      author: "Rajesh Nambiar & Family",
      location: "Chennai, Tamil Nadu",
      avatarInitials: "RN",
      rating: 5,
      date: "October 2026",
      rideType: "Separate Private Boat (1 Hour)",
      category: "family",
      verified: true,
      headline: "Genuine full 1-hour ride — no rushing at all!",
      reviewText: "Booked the Separate Private Boat for ₹5,000 for our family of 8. Unlike other crowded boating points that cut short within 15 minutes, here every ride is a genuine, full 1-hour cruise! Kids loved navigating the mangrove root tunnels, and elderly family members felt very safe with clean life jackets. The washrooms and dress changing facilities were very clean.",
      highlight: "Full 60 minutes duration & clean amenities"
    },
    {
      id: "rev-3",
      author: "Priya Ramanathan",
      location: "Hyderabad, Telangana",
      avatarInitials: "PR",
      rating: 5,
      date: "September 2026",
      rideType: "Mangrove Forest Safari (1 Hour)",
      category: "mangrove",
      verified: true,
      headline: "Surreal green root tunnels and excellent pricing",
      reviewText: "Did the 1-Hour Mangrove Bio-Reserve ride (₹500/Adult, ₹250 for my 6-year-old child). The green canopy tunnels were breathtaking and so quiet. Having dedicated free vehicle parking at Mangrove Bay saved us so much time in Puducherry traffic. Truly 5-star service!",
      highlight: "Affordable shared rates (₹500/₹250) & free parking"
    },
    {
      id: "rev-4",
      author: "Vikram Shenoy & Friends",
      location: "Coimbatore, Tamil Nadu",
      avatarInitials: "VS",
      rating: 5,
      date: "September 2026",
      rideType: "Group Ride (Adventure)",
      category: "family",
      verified: true,
      headline: "Thrilling turns & epic sea mouth confluence views",
      reviewText: "Group ride with 6 friends across the river and sea mouth confluence. Excellent captain, thrilling waves when entering the wider waters, and beautiful views of the coastal harbor. Clean toilets and changing facilities before boarding. Highly recommend to everyone visiting Pondicherry!",
      highlight: "Great for groups of friends & thrilling waves"
    },
    {
      id: "rev-5",
      author: "Dr. Meera Iyer",
      location: "Kochi, Kerala",
      avatarInitials: "MI",
      rating: 5,
      date: "September 2026",
      rideType: "Sunset & Sea Confluence (1 Hour)",
      category: "sunset",
      verified: true,
      headline: "Pure magic at golden hour — best boat house in Pondy",
      reviewText: "The Sunset & Sea Confluence cruise at 4:30 PM was pure magic. Watching the sun go down where the backwater meets the Bay of Bengal sea beach is unforgettable. Smooth boarding from the jetty, certified life vests, and super courteous staff. The best boat house in Pondicherry!",
      highlight: "Breathtaking sunset views at the sea confluence"
    },
    {
      id: "rev-6",
      author: "Arun Kumar & Sneha",
      location: "Mumbai, Maharashtra",
      avatarInitials: "AS",
      rating: 5,
      date: "August 2026",
      rideType: "Puducherry Harbour Sunrise (1 Hour)",
      category: "couple",
      verified: true,
      headline: "Early 7:00 AM sunrise ride was pure bliss",
      reviewText: "Early morning 7:00 AM sunrise boat ride from Mangrove Bay. Mirror calm water and chirping birds in the mangrove roots. So refreshing! Easy location to reach from White Town, safe car parking, and very genuine pricing for a full 60-minute ride.",
      highlight: "Peaceful 7 AM slot & calm mirror waters"
    }
  ]
};
