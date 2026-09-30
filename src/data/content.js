// Mangroo Bay - Exclusively Premier Boating Experiences
// Pondicherry Marina Boathouse, Puducherry, India
// Note: Exclusively boat rides and celebrations on the water (No overnight stays).

export const BRAND_DATA = {
  name: "Mangroo Bay",
  tagline: "Escape into the calm.",
  supportingLine: "A premier boating experience surrounded by water, mangroves and the quiet beauty of Pondicherry Marina.",
  alternativeLine: "Pondicherry’s finest boat rides — where water, nature and unforgettable moments meet.",
  location: "Pondicherry Marina Boathouse, Puducherry, India",
  estYear: "2026",
  marinaBadge: "Pondicherry Marina Boathouse Hub",
  boatingHours: "Morning 8:00 AM – Evening 5:30 PM (Daily)",
  boatingHoursShort: "Daily 8:00 AM – 5:30 PM",
  contact: {
    phone: "+91 73974 38874",
    phoneRaw: "+917397438874",
    whatsapp: "+91 73974 38874",
    whatsappUrl: "https://wa.me/917397438874",
    email: "rides@mangroobay.com",
    address: "Pondicherry Marina Boathouse Jetty, Coastal Estuary & Mangrove Backwaters, Puducherry 605001, India",
    mapCoordinates: { lat: 11.9125, lng: 79.8228 },
    googleMapsUrl: "https://maps.google.com/?q=Pondicherry+Marina+Boathouse+Puducherry",
    instagram: "https://instagram.com/mangroobay.pondy",
    facebook: "https://facebook.com/mangroobay.pondy"
  }
};

export const HERO_DATA = {
  title: "MANGROO BAY",
  tagline: "Where nature, history and boating adventure meet.",
  description: "Discover the beauty of Puducherry Marina, explore peaceful mangroves, experience the heritage of Arikamedu, and set out on an unforgettable boating adventure.",
  supportingText: "Whether it’s a relaxing escape, a sunset ride, or an exciting journey on the water, Mangroo Bay is your gateway to explore Puducherry from a whole new perspective.",
  invitation: "Come aboard. Explore. Adventure. Escape into the calm.",
  marinaHighlight: "Boarding & Boat Rides at Pondicherry Marina Boathouse",
  boatingHoursBadge: "Daily Boating: Morning 8:00 AM – Evening 5:30 PM",
  primaryCta: "Book Your Boat Ride",
  secondaryCta: "Explore All Boat Rides",
  scrollText: "Scroll to discover ↓",
  videoSrc: "/videos/entrance-video.mp4",
  bgImage: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=2000&q=85",
  aerialBg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85"
};

export const INTRO_DATA = {
  eyebrow: "WELCOME TO MANGROO BAY",
  heading: "Where nature, history and boating adventure meet.",
  body: "Discover the beauty of Puducherry Marina, explore peaceful mangroves, experience the heritage of Arikamedu, and set out on an unforgettable boating adventure.",
  secondaryText: "Whether it’s a relaxing escape, a sunset ride, or an exciting journey on the water, Mangroo Bay is your gateway to explore Puducherry from a whole new perspective.",
  invitation: "Come aboard. Explore. Adventure. Escape into the calm.",
  features: [
    { number: "01", title: "Puducherry Marina Boathouse", subtitle: "Coastal estuary waters, scenic breakwaters & ocean breezes" },
    { number: "02", title: "Peaceful Mangrove Safaris", subtitle: "Lush green biological root tunnels & native birds" },
    { number: "03", title: "Historic Arikamedu Heritage", subtitle: "Ancient Roman trading port ruins along serene riverbanks" }
  ],
  mainImage: "/Images/Mangroove_Forest1.jpeg",
  secondaryImage: "/Images/CouplesRide.jpeg"
};

// 7 Signature Boat Rides at Pondicherry Marina Boathouse
export const RIDES_AND_EXPERIENCES = [
  {
    id: "couples-ride",
    title: "Couples Ride",
    category: "Romantic & Private Boating",
    badge: "Couples Special",
    tagline: "Private secluded boat cruise tailored for two",
    description: "An intimate voyage designed exclusively for couples, proposals, anniversaries, and romantic dates. Features subtle boat styling, fresh floral arrangements, warm lantern glow, soft background music, and absolute privacy on the water.",
    duration: "60–90 Mins",
    timing: "08:00 AM – 05:30 PM (Custom Private Slots)",
    capacity: "Strictly 2 Guests (Couple)",
    image: "/Images/CouplesRide.jpeg",
    features: ["100% Private vessel", "Floral & lantern decoration option", "Romantic music playlist", "Dedicated private boat master"]
  },
  {
    id: "birthday-celebration",
    title: "Birthday Celebration",
    category: "Celebrations & Parties",
    badge: "Party on the Water",
    tagline: "Celebrate your special day on the floating boathouse boat",
    description: "Make birthdays unforgettable on the water. Enjoy a private celebratory cruise with cake cutting on the open deck, customized balloons & fairy light decor, party music, and picture-perfect memories with friends and family.",
    duration: "1.5 – 2 Hours",
    timing: "08:00 AM – 05:30 PM (Flexible Slots)",
    capacity: "Groups up to 20 Guests",
    image: "/Images/BirthdayCelepraion.jpeg",
    features: ["Cake-cutting table & stand", "Balloon & fairy light styling", "High-clarity Bluetooth sound system", "Spacious open deck for group photos"]
  },
  {
    id: "group-ride",
    title: "Group Ride",
    category: "Adventure & Family Joy",
    badge: "Adventure & Happy Ride",
    tagline: "Spirited group boating, thrilling turns & family joy",
    description: "An exhilarating ride across the open lagoon and wide waterways. Feel the wind rush with spirited throttle bursts, playful wave-splashing curves, and endless smiles for families, youth groups, and children.",
    duration: "30–45 Mins",
    timing: "09:00 AM – 05:00 PM (Daily Slots)",
    capacity: "Groups of 4–20 Guests",
    image: "/Images/GroupRide.jpeg",
    features: ["Spirited boating speed & turns", "Certified life jackets for all ages", "High fun factor for youth & kids", "Exciting water spray action"]
  },
  {
    id: "mangroo-forest",
    title: "Mangroo Forest",
    category: "Eco Safari & Wildlife",
    badge: "Bio-Reserve Safari",
    tagline: "Navigate through dense mangrove waterways and wildlife",
    description: "Gliding silently into the protected coastal mangrove forests. Discover dense aerial root formations touching the tidal waters, exotic birds, and the pristine natural biodiversity of Puducherry.",
    duration: "45–60 Mins",
    timing: "08:00 AM – 04:30 PM (Eco Hours)",
    capacity: "Private or Group",
    image: "/Images/Mangroo Forest.jpeg",
    features: ["Protected mangrove bio-reserve tunnels", "Quiet eco-friendly cruising", "Birdwatching binoculars", "Scenic photography points"]
  },
  {
    id: "mangroove-forest",
    title: "Mangroove Forest",
    category: "Nature & Canopy Trail",
    badge: "Canopy Trail",
    tagline: "Lush green tree root tunnels & peaceful serene waters",
    description: "Deep exploration of the green canopy waterways. Breathe in the cool sea breezes filtered through the thick mangrove leaves as your boat gently navigates calm sheltered canals.",
    duration: "45–60 Mins",
    timing: "08:00 AM – 05:00 PM (Daily Slots)",
    capacity: "Small & Large Groups",
    image: "/Images/Mangroove_Forest1.jpeg",
    features: ["Lush biological mangrove root tunnels", "Calm sheltered waters", "Natural shade & cooling breezes", "Experienced nature guide pilot"]
  },
  {
    id: "arikkamedu",
    title: "Arikkamedu",
    category: "Historic Heritage Boating",
    badge: "Heritage Discovery",
    tagline: "Ancient Roman trading port ruins along serene riverbanks",
    description: "Cruise along the banks of historic Arikamedu — an ancient Indo-Roman trading port dating back over 2,000 years. Learn the rich archaeological history where ancient Roman pottery, beads, and gems were traded along the river waters.",
    duration: "60 Mins",
    timing: "08:00 AM – 04:30 PM (Heritage Slots)",
    capacity: "Private or Group",
    image: "/Images/Arikkamedu.jpeg",
    features: ["Ancient Arikamedu heritage riverbank", "Historical narrative & guide", "Calm backwater cruise", "Panoramic river views"]
  },
  {
    id: "pondicherry-beach-river",
    title: "Pondycherry Beach & River",
    category: "Sunset & Sea Confluence",
    badge: "Sunset & Sea Ride",
    tagline: "Where the backwater river meets the ocean beach and golden sunset",
    description: "Cruise past the sheltering breakwaters of Pondicherry Marina into the majestic confluence where the river meets the Bay of Bengal sea beach. Watch the sun dip over the coastal horizon casting golden glows across waves and sands.",
    duration: "45–60 Mins",
    timing: "04:00 PM – 05:30 PM (Golden Hour Sunset)",
    capacity: "Private or Group (Up to 15)",
    image: "/Images/Pondycherry Beach&River.jpeg",
    features: ["Golden hour panoramic sunset", "River & ocean confluence", "Coastal breeze & wave vistas", "Sunset photo stop points"]
  },
  {
    id: "pondicherry-harbour",
    title: "Pondycherry Harbour",
    category: "Sunrise & Marina Experience",
    badge: "Sunrise & Harbour Ride",
    tagline: "Morning opening rays, harbor views, and fishing boat horizons",
    description: "Witness the estuary and bustling harbor awaken with our first morning departures. Glide across still, mirror-like waters as the morning sun casts soft golden beams across traditional catamarans and modern marina docks.",
    duration: "45–60 Mins",
    timing: "08:00 AM – 10:00 AM (Sunrise & Morning Slots)",
    capacity: "Private or Group",
    image: "/Images/Pondycherry_harbour.jpeg",
    features: ["Morning harbor & marina views", "Early morning sunrise calm", "Fresh South Indian filter coffee", "Birdwatching along jetty docks"]
  }
];

// Boat Fleet & Vessels Showcase (Replacing any stay/room concept)
export const BOAT_FLEET_DATA = {
  eyebrow: "OUR BOAT FLEET & VESSELS",
  heading: "Crafted for comfort on the water.",
  description: "Operating from Pondicherry Marina Boathouse, our custom-built boats feature wide panoramic views, plush cushioned seating, protective sunshade canopies, and strict marine safety standards.",
  features: [
    { name: "Comfortable Seating", icon: "Armchair", detail: "Plush cushioned lounge seating with ample legroom" },
    { name: "360° Waterfront Views", icon: "Eye", detail: "Unobstructed open-air decks for photography & scenic sightseeing" },
    { name: "Sun & Rain Canopy", icon: "Umbrella", detail: "Protective overhead canopy keeping guests cool and shaded" },
    { name: "Certified Life Jackets", icon: "LifeBuoy", detail: "100% government-approved safety jackets for adults, children & infants" },
    { name: "Celebration Sound System", icon: "Music", detail: "Bluetooth music connectivity for birthdays & party vibes" },
    { name: "Certified Boat Captain", icon: "Anchor", detail: "Highly experienced local marine pilots with deep waterway knowledge" }
  ],
  vessels: [
    {
      id: "royal-cruiser",
      title: "The Mangroo Bay Royal Boathouse Boat",
      category: "Signature Covered Boathouse Vessel",
      capacity: "Up to 20 Guests (Perfect for Parties & Families)",
      idealFor: "Birthday Celebrations, Family Gatherings & Group Sunset Rides",
      pricingPlaceholder: "Standard group & private charter rates [ADD PRICING]",
      image: "/Images/GroupRide.jpeg",
      gallery: [
        "/Images/GroupRide.jpeg",
        "/Images/BirthdayCelepraion.jpeg",
        "/Images/Pondycherry Beach&River.jpeg"
      ],
      description: "Our flagship covered boathouse vessel. Features a wide central deck with cushioned perimeter seating, a dedicated center table for birthday cake cutting, decorative fairy lighting, and crystal-clear sound connectivity."
    },
    {
      id: "sunset-safari",
      title: "The Estuary Horizon Cruiser",
      category: "Intimate Couple & Eco Safari Boat",
      capacity: "2 to 6 Guests (Private & Romantic)",
      idealFor: "Couple Rides, Sunrise Birdwatching & Private Sunset Glides",
      pricingPlaceholder: "Private couple & small group rates [ADD PRICING]",
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
  name: "Pondicherry Marina Boathouse",
  hubTagline: "The premier boarding gateway for Mangroo Bay",
  overview: "Mangroo Bay operates exclusively from Pondicherry Marina Boathouse. This unique geographical haven sits right at the confluence of the mangrove waterways, tranquil lagoon backwaters, and the open Bay of Bengal sea mouth.",
  highlights: [
    { title: "Daily Boating: 8:00 AM – 5:30 PM", desc: "Open daily from Morning 8:00 AM to Evening 5:30 PM with regular departures, romantic sunset cruises, and private charters." },
    { title: "Strategic Marina Boarding", desc: "Easily accessible from White Town, Promenade Beach, and harbor area with smooth jetty boarding." },
    { title: "Triple-Water Geographic Splendor", desc: "Experience the rare intersection where Mangrove forest tunnels, serene lagoon waters, and sea waves meet." },
    { title: "100% Certified Safety", desc: "Govt-approved life jackets for adults and children, certified marine pilots, and full first-aid readiness." },
    { title: "Visitor Amenities", desc: "Spacious vehicle parking, comfortable boarding lounge, refreshment kiosks, and dedicated concierge desk." }
  ]
};

export const TIMELINE_DATA = {
  heading: "Boating hours, morning 8:00 AM to evening 5:30 PM.",
  subheading: "From calm morning departures to golden hour sunsets at Pondicherry Marina Boathouse.",
  stages: [
    {
      id: "morning",
      time: "08:00 AM — 10:30 AM",
      name: "Morning Calm & Sunrise Glides",
      summary: "Mirror-still water, soft morning rays & birdsong.",
      description: "Step aboard our first departures of the day at 8:00 AM. Still waters make this the purest time for peaceful cruising, nature watching, photography, and fresh filter coffee on the water.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85",
      accent: "#E9D8B8",
      vibe: "Serene & Dewy"
    },
    {
      id: "midday",
      time: "10:30 AM — 01:30 PM",
      name: "Mangrove Safari & Bio-Reserve Tunnels",
      summary: "Cool shaded green root tunnels & quiet gliding.",
      description: "Glide under the dense mangrove canopy where natural leaf canopies shield against the sun. Explore narrow green tunnels and observe native coastal wildlife.",
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1000&q=85",
      accent: "#315C4A",
      vibe: "Shaded & Peaceful"
    },
    {
      id: "afternoon",
      time: "01:30 PM — 04:00 PM",
      name: "Adventure, Family & Birthday Celebrations",
      summary: "Spirited waves, birthday party deck & joyful laughter.",
      description: "Celebrate birthdays and milestones on our covered cruiser with cake cutting and music, or feel the wind with fun adventure glides across open lagoon waterways.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=85",
      accent: "#123C32",
      vibe: "Festive & Breezy"
    },
    {
      id: "golden-hour",
      time: "04:00 PM — 05:30 PM",
      name: "Sunset Ride & Final Evening Cruise",
      summary: "Amber skies, terracotta horizons & sea breeze.",
      description: "Puducherry’s most iconic golden hour before our 5:30 PM close. Watch the sky turn fiery orange and lilac as your boat drifts along calm backwaters toward the sea mouth.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1000&q=85",
      accent: "#D9825B",
      vibe: "Romantic & Amber"
    }
  ]
};

export const GALLERY_DATA = [
  {
    id: 1,
    category: "The Bay",
    title: "Pondicherry Marina & Harbour",
    subtitle: "Boating gateway at the harbor estuary",
    src: "/Images/Pondycherry_harbour.jpeg",
    span: "col-span-12 md:col-span-7",
    aspect: "aspect-[16/10]"
  },
  {
    id: 2,
    category: "Boats & Fleet",
    title: "Mangroo Bay Covered Boathouse Boat",
    subtitle: "Spacious deck for celebrations & scenic cruises",
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
    category: "Celebrations",
    title: "Birthday Celebration on the Water",
    subtitle: "Floating deck festivities & party vibes",
    src: "/Images/BirthdayCelepraion.jpeg",
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
    title: "Pondicherry Marina Location",
    description: "Depart directly from Pondicherry Marina Boathouse jetty, with dedicated parking and rapid access from White Town."
  },
  {
    number: "02",
    title: "100% Certified Marine Safety",
    description: "Government-approved life jackets for all passengers, certified pilots, and comprehensive safety readiness on every trip."
  },
  {
    number: "03",
    title: "Tailored Celebrations & Dates",
    description: "Custom setups for birthday celebrations with cake cutting and music, plus private couple rides with floral & lantern decor."
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

export const WHY_MANGROO_DATA = WHY_MARINA_DATA;

export const LOCATION_DATA = {
  heading: "Find your way to the bay.",
  location: "Pondicherry Marina Boathouse, Puducherry, India",
  address: "Pondicherry Marina Boathouse Jetty, Estuary Backwaters, Puducherry 605001 [ADD EXACT ADDRESS]",
  boatingHours: "Morning 08:00 AM to Evening 05:30 PM (Daily)",
  note: "Board directly at Pondicherry Marina Boathouse. Open daily from Morning 8:00 AM to Evening 5:30 PM. Ample vehicle parking, certified safety gear, and welcoming guest jetty lounge available.",
  marinaFeatures: [
    "Boating Timings: Daily 8:00 AM – 5:30 PM",
    "Dedicated Boarding Jetty at Pondicherry Marina",
    "Govt-Approved Life Jackets & Safety Briefing",
    "Meeting Point of Mangrove Reserve, Lagoon & Sea Mouth",
    "Spacious Parking & Refreshment Promenade"
  ],
  attractions: [
    { name: "Pondicherry Marina Promenade", distance: "At the location / 1 min walk" },
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
  overview: "At Mangroo Bay, every voyage across Pondicherry Marina, the mangrove backwaters, and the historic Arikamedu estuary is guided by uncompromising safety protocols. Please review our safety guidelines and essential passenger precautions before boarding.",
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
      description: "All Mangroo Bay vessels are operated exclusively by government-licensed boat masters trained in maritime safety, CPR, first aid, and shallow-water backwater channels."
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
      description: "Boarding takes place at our stable Pondicherry Marina Boathouse Jetty featuring non-slip gangways and sturdy handrails. Crew members provide physical assistance for seniors, toddlers, and families."
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
    "First-aid emergency kits and marine throw rings are equipped on every Mangroo Bay boat."
  ]
};
