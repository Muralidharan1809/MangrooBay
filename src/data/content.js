// Marina Bay - Exclusively Premier Boating Experiences
// Pondicherry Marina Boathouse, Puducherry, India
// Note: Exclusively boat rides and celebrations on the water (No overnight stays).

export const BRAND_DATA = {
  name: "Marina Bay",
  tagline: "Escape into the calm.",
  supportingLine: "A premier boating experience surrounded by water, mangroves and the quiet beauty of Pondicherry Marina.",
  alternativeLine: "Pondicherry’s finest boat rides — where water, nature and unforgettable moments meet.",
  location: "Pondicherry Marina Boathouse, Puducherry, India",
  estYear: "2026",
  marinaBadge: "Pondicherry Marina Boathouse Hub",
  contact: {
    phone: "+91 [ADD PHONE]",
    whatsapp: "+91 [ADD WHATSAPP]",
    email: "rides@marinabay.com",
    address: "Pondicherry Marina Boathouse Jetty, Coastal Estuary & Mangrove Backwaters, Puducherry 605001, India [ADD EXACT ADDRESS]",
    mapCoordinates: { lat: 11.9125, lng: 79.8228 },
    googleMapsUrl: "https://maps.google.com/?q=Pondicherry+Marina+Boathouse+Puducherry",
    instagram: "https://instagram.com/marinabay.pondy",
    facebook: "https://facebook.com/marinabay.pondy"
  }
};

export const HERO_DATA = {
  title: "MARINA BAY",
  tagline: "Escape into the calm.",
  description: "A premier boat ride experience surrounded by water, mangroves and the quiet beauty of Pondicherry Marina.",
  marinaHighlight: "Boarding & Boat Rides at Pondicherry Marina Boathouse",
  primaryCta: "Book Your Boat Ride",
  secondaryCta: "Explore All Boat Rides",
  scrollText: "Scroll to discover ↓",
  videoSrc: "/videos/entrance-video.mp4",
  bgImage: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=2000&q=85",
  aerialBg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85"
};

export const INTRO_DATA = {
  eyebrow: "WELCOME TO MARINA BAY",
  heading: "Where the water becomes your escape.",
  body: "Leave the noise behind and slow down. Marina Bay offers premier boat rides at Pondicherry Marina Boathouse, designed for peaceful mornings, golden sunsets, private couple cruises, and memorable celebrations surrounded by nature.",
  features: [
    { number: "01", title: "Scenic Waterway Glides", subtitle: "Tranquil backwater & lagoon boating" },
    { number: "02", title: "Mangrove Bio-Safaris", subtitle: "Lush green root tunnels & native birds" },
    { number: "03", title: "Sunset & Sea Rides", subtitle: "Golden hours & open ocean breezes at Pondy Marina" }
  ],
  mainImage: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=85",
  secondaryImage: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=85"
};

// 7 Signature Boat Rides at Pondicherry Marina Boathouse
export const RIDES_AND_EXPERIENCES = [
  {
    id: "sunset-ride",
    title: "Sunset Ride",
    category: "Romantic & Golden Hour",
    badge: "Most Iconic Ride",
    tagline: "Golden hour magic mirrored across the water",
    description: "Experience the transition of Puducherry skies into amber and blush violet. As the sun dips over the mangrove horizon, the calm estuary glows in breathtaking hues — ideal for evening tea, peaceful cruising, and stunning photography.",
    duration: "45–60 Mins",
    timing: "05:00 PM – 06:45 PM",
    capacity: "Private or Group (Up to 15)",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
    features: ["Golden hour panoramic views", "Calm tidal backwaters", "Sunset photo stop points", "Complimentary cool drinks"]
  },
  {
    id: "sunrise-ride",
    title: "Sunrise Ride (Sun Rice)",
    category: "Peaceful & Awakening",
    badge: "Pure Serenity",
    tagline: "Dawn mist, soft golden rays & morning bird calls",
    description: "Witness the estuary awaken. Glide across still, mirror-like waters as the morning sun casts soft golden beams through the mangrove mist. Spot kingfishers, egrets, and coastal cormorants embarking on their morning flight.",
    duration: "45–60 Mins",
    timing: "06:00 AM – 08:30 AM",
    capacity: "Private or Group",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
    features: ["Morning birdwatching safari", "Dewy mangrove mist", "Fresh South Indian filter coffee", "Undisturbed tranquil waters"]
  },
  {
    id: "couple-ride",
    title: "Couple Ride",
    category: "Romantic Date on Water",
    badge: "Intimate & Private",
    tagline: "Private secluded boat cruise tailored for two",
    description: "An intimate voyage designed exclusively for couples, proposals, anniversaries, and romantic dates. Features subtle boat styling, fresh floral arrangements, warm lantern glow, soft background music, and absolute privacy on the water.",
    duration: "60–90 Mins",
    timing: "Custom (Sunrise, Sunset or Twilight)",
    capacity: "Strictly 2 Guests (Couple)",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85",
    features: ["100% Private vessel", "Floral & lantern decoration option", "Romantic music playlist", "Dedicated private boat master"]
  },
  {
    id: "birthday-celebration",
    title: "Birthday Celebration Ride",
    category: "Celebrations & Parties",
    badge: "Party on the Water",
    tagline: "Celebrate your special day on the floating boathouse boat",
    description: "Make birthdays unforgettable on the water. Enjoy a private celebratory cruise with cake cutting on the open deck, customized balloons & fairy light decor, party music, and picture-perfect memories with friends and family.",
    duration: "1.5 – 2 Hours",
    timing: "Flexible slots (Day & Evening)",
    capacity: "Groups up to 20 Guests",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=85",
    features: ["Cake-cutting table & stand", "Balloon & fairy light styling", "High-clarity Bluetooth sound system", "Spacious open deck for group photos"]
  },
  {
    id: "adventure-happy-ride",
    title: "Adventure & Happy Ride",
    category: "Thrills & Family Joy",
    badge: "High Energy & Fun",
    tagline: "Thrilling turns, fun splashes & joyful memories",
    description: "An exhilarating ride across the open lagoon and wide waterways. Feel the wind rush with spirited throttle bursts, playful wave-splashing curves, and endless smiles for families, youngsters, and children.",
    duration: "30–45 Mins",
    timing: "All Day Slots (09:00 AM – 05:00 PM)",
    capacity: "Groups of 4–12",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85",
    features: ["Spirited boating speed & turns", "Certified life jackets for all ages", "High fun factor for youth & kids", "Exciting water spray action"]
  },
  {
    id: "sea-ride",
    title: "Sea Ride (Estuary Mouth)",
    category: "Ocean & Coastal",
    badge: "Coastal Adventure",
    tagline: "Where the tranquil backwaters meet the Bay of Bengal",
    description: "Cruise past the sheltering breakwaters of Pondicherry Marina into the majestic confluence where the lagoon meets the open sea. Feel the fresh oceanic breeze and watch traditional catamarans navigate wide horizons.",
    duration: "45–60 Mins",
    timing: "Morning & Afternoon (Subject to tide)",
    capacity: "Small & Large Groups",
    image: "https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=1200&q=85",
    features: ["Sea mouth & breakwater crossing", "Oceanic sea breeze", "Marine harbor views", "Coastline panorama of Puducherry"]
  },
  {
    id: "mangrove-ride",
    title: "Mangrove Ride (Eco Safari)",
    category: "Eco Bio-Reserve Safari",
    badge: "Eco Discovery",
    tagline: "Glide quietly through dense mangrove tunnels",
    description: "An eco-safari deep into the protected coastal mangrove forests. Glide through narrow green tunnels where twisted root systems touch the water and silence is broken only by the calls of rare migratory birds.",
    duration: "60 Mins",
    timing: "07:00 AM – 04:30 PM",
    capacity: "Private or Group",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=85",
    features: ["Bio-reserve natural tunnel route", "Quiet eco-friendly cruising", "Birdwatching binoculars guide", "Authentic coastal ecology"]
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
      title: "The Marina Bay Royal Boathouse Boat",
      category: "Signature Covered Boathouse Vessel",
      capacity: "Up to 20 Guests (Perfect for Parties & Families)",
      idealFor: "Birthday Celebrations, Family Gatherings & Group Sunset Rides",
      pricingPlaceholder: "Standard group & private charter rates [ADD PRICING]",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=85"
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
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85"
      ],
      description: "Designed for couples and intimate groups. Positioned low to the water for silent gliding into narrow mangrove channels and viewing romantic sunsets along the Puducherry backwaters."
    }
  ]
};

export const MARINA_KEY_DETAILS = {
  name: "Pondicherry Marina Boathouse",
  hubTagline: "The premier boarding gateway for Marina Bay",
  overview: "Marina Bay operates exclusively from Pondicherry Marina Boathouse. This unique geographical haven sits right at the confluence of the mangrove waterways, tranquil lagoon backwaters, and the open Bay of Bengal sea mouth.",
  highlights: [
    { title: "Strategic Marina Boarding", desc: "Easily accessible from White Town, Promenade Beach, and harbor area with smooth jetty boarding." },
    { title: "Triple-Water Geographic Splendor", desc: "Experience the rare intersection where Mangrove forest tunnels, serene lagoon waters, and sea waves meet." },
    { title: "100% Certified Safety", desc: "Govt-approved life jackets for adults and children, certified marine pilots, and full first-aid readiness." },
    { title: "Visitor Amenities", desc: "Spacious vehicle parking, comfortable boarding lounge, refreshment kiosks, and dedicated concierge desk." }
  ]
};

export const TIMELINE_DATA = {
  heading: "Boating hours, at your own pace.",
  subheading: "From misty dawn glides to starlit evening cruises at Pondicherry Marina Boathouse.",
  stages: [
    {
      id: "morning",
      time: "06:00 AM — 09:00 AM",
      name: "Sunrise Ride (Sun Rice)",
      summary: "Calm water, morning mist and dewy light.",
      description: "Witness the first golden rays breaking through the mangrove canopy. Still mirror-like waters make this the perfect time for nature lovers, bird photography, and fresh filter coffee on the water.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85",
      accent: "#E9D8B8",
      vibe: "Serene & Dewy"
    },
    {
      id: "afternoon",
      time: "09:30 AM — 04:30 PM",
      name: "Mangrove Safari & Happy Ride",
      summary: "Shaded green tunnels & exhilarating splashes.",
      description: "Glide under the cool green arches of coastal mangroves, or take an energetic adventure ride across open lagoon channels with fun turns and refreshing water sprays.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=85",
      accent: "#315C4A",
      vibe: "Breezy & Spirited"
    },
    {
      id: "golden-hour",
      time: "05:00 PM — 06:45 PM",
      name: "Sunset Ride & Couple Cruise",
      summary: "Terracotta skies & golden water reflections.",
      description: "Puducherry’s most iconic boating hour. Watch the sky turn fiery orange and lilac as your boat drifts along calm backwaters toward the sea mouth.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1000&q=85",
      accent: "#D9825B",
      vibe: "Romantic & Amber"
    },
    {
      id: "night",
      time: "07:00 PM — 08:30 PM",
      name: "Birthday Celebrations & Twilight",
      summary: "Fairy lights, music and water breeze.",
      description: "Celebrate birthdays and special milestones under the evening sky. Lanterns and fairy lights sparkle on the boat deck as celebratory music floats across the bay.",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=85",
      accent: "#123C32",
      vibe: "Festive & Intimate"
    }
  ]
};

export const GALLERY_DATA = [
  {
    id: 1,
    category: "The Bay",
    title: "Pondicherry Marina Estuary",
    subtitle: "Calm morning waters at the boathouse jetty",
    src: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85",
    span: "col-span-12 md:col-span-7",
    aspect: "aspect-[16/10]"
  },
  {
    id: 2,
    category: "Boats & Fleet",
    title: "Marina Bay Covered Boathouse Boat",
    subtitle: "Spacious deck for celebrations & scenic cruises",
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=85",
    span: "col-span-12 md:col-span-5",
    aspect: "aspect-[4/3]"
  },
  {
    id: 3,
    category: "Sunset",
    title: "Sunset Ride Golden Glow",
    subtitle: "Terracotta horizons meeting calm tides",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=85",
    span: "col-span-12 md:col-span-4",
    aspect: "aspect-[4/5]"
  },
  {
    id: 4,
    category: "Rides",
    title: "Couple Ride on Calm Waters",
    subtitle: "Romantic private boating for two",
    src: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85",
    span: "col-span-12 md:col-span-8",
    aspect: "aspect-[16/9]"
  },
  {
    id: 5,
    category: "Nature",
    title: "Mangrove Safari Bio-Reserve",
    subtitle: "Navigating lush green waterway tunnels",
    src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=900&q=85",
    span: "col-span-12 md:col-span-5",
    aspect: "aspect-[4/3]"
  },
  {
    id: 6,
    category: "Celebrations",
    title: "Birthday Celebration on the Water",
    subtitle: "Floating deck festivities & party vibes",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=85",
    span: "col-span-12 md:col-span-7",
    aspect: "aspect-[16/10]"
  },
  {
    id: 7,
    category: "Rides",
    title: "Sea Ride Confluence",
    subtitle: "Where estuary backwaters meet the sea",
    src: "https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=900&q=85",
    span: "col-span-12 md:col-span-6",
    aspect: "aspect-[16/11]"
  },
  {
    id: 8,
    category: "Nature",
    title: "Sunrise Birdwatch (Sun Rice)",
    subtitle: "Herons and egrets feeding along the shores",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
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
  note: "Board directly at Pondicherry Marina Boathouse. Ample vehicle parking, certified safety gear, and welcoming guest jetty lounge available.",
  marinaFeatures: [
    "Dedicated Boarding Jetty at Pondicherry Marina",
    "Govt-Approved Life Jackets & Safety Briefing",
    "Meeting Point of Mangrove Reserve, Lagoon & Sea Mouth",
    "Spacious Parking & Refreshment Promenade"
  ],
  attractions: [
    { name: "Pondicherry Marina Promenade", distance: "At the location / 1 min walk" },
    { name: "White Town (French Quarter)", distance: "5–8 mins scenic drive" },
    { name: "Promenade Beach & Rock Beach", distance: "7 mins drive" },
    { name: "Auroville International Township", distance: "25 mins drive" }
  ]
};
