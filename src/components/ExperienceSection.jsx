import React, { useState } from 'react';
import { ArrowUpRight, Compass, Sun, Anchor, Heart, Waves } from 'lucide-react';

export default function ExperienceSection({ onSelectExperience }) {
  const [hoveredId, setHoveredId] = useState(null);

  const experiences = [
    {
      id: "glide-on-water",
      title: "Glide on the Water",
      description: "Feel the peaceful rhythm of calm tides and the soothing whisper of mangrove breezes.",
      tag: "Pure Serenity",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
      highlight: "Panoramic open-air water vistas on every ride"
    },
    {
      id: "sunset-on-bay",
      title: "Sunset on the Bay",
      description: "Experience warm golden-hour skies reflected across the water as your boat drifts gently.",
      tag: "Golden Hour",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=85",
      highlight: "Private boat sunset cruising & evening tea"
    },
    {
      id: "explore-by-boat",
      title: "Explore by Boat",
      description: "Discover hidden mangrove channels and the confluence where the lagoon meets the sea.",
      tag: "Eco-Discovery",
      image: "https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=1000&q=85",
      highlight: "Guided boating through scenic Puducherry waterways"
    },
    {
      id: "slow-down",
      title: "Slow Down",
      description: "Disconnect from the everyday rush and create unforgettable memories on the calm water.",
      tag: "Mindful Boating",
      image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=85",
      highlight: "Celebrations, romantic rides & joyful family laughter"
    }
  ];

  const getIcon = (id) => {
    switch (id) {
      case 'glide-on-water': return <Anchor className="w-5 h-5 text-sand" />;
      case 'sunset-on-bay': return <Sun className="w-5 h-5 text-sunset" />;
      case 'explore-by-boat': return <Compass className="w-5 h-5 text-sand" />;
      case 'slow-down': return <Heart className="w-5 h-5 text-sunset" />;
      default: return <Compass className="w-5 h-5 text-sand" />;
    }
  };

  return (
    <section id="experience" className="py-24 md:py-32 bg-forest text-cream relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-mangrove/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-luxury text-sand/80 font-semibold mb-3 inline-block">
            Pondicherry Marina Boating
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-cream font-light leading-tight">
            More than a boat ride.<br />
            <span className="italic text-sand">It’s a feeling.</span>
          </h2>
          <div className="w-16 h-[1px] bg-sand/40 mx-auto mt-6" />
        </div>

        {/* 4 Visually Rich Experience Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative h-[420px] sm:h-[480px] rounded-2xl overflow-hidden shadow-luxury border border-sand/15 transition-all duration-700 bg-forest-deep flex flex-col justify-end p-8 sm:p-10 cursor-pointer"
              onClick={() => onSelectExperience && onSelectExperience(exp.title)}
            >
              {/* Background Image with Slow Zoom */}
              <div className="absolute inset-0 z-0">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-forest/20 mix-blend-color" />
              </div>

              {/* Top Tag & Icon Badge */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-deep/70 backdrop-blur-md border border-sand/25 text-xs text-sand font-medium tracking-wider uppercase">
                  {getIcon(exp.id)}
                  <span>{exp.tag}</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-sand/15 backdrop-blur-md border border-sand/30 flex items-center justify-center text-sand group-hover:bg-sand group-hover:text-forest transition-colors duration-300">
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 transform transition-transform duration-500">
                <div className="text-xs uppercase tracking-luxury text-sunset mb-2 font-medium">
                  Experience 0{index + 1}
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-cream font-light mb-3 group-hover:text-sand transition-colors">
                  {exp.title}
                </h3>
                <p className="text-sm sm:text-base text-cream/85 font-light leading-relaxed mb-4 max-w-lg">
                  {exp.description}
                </p>
                <div className="pt-3 border-t border-sand/20 flex items-center text-xs text-sand/90 tracking-wide font-sans">
                  <span className="w-2 h-2 rounded-full bg-sunset mr-2 inline-block animate-ping" />
                  {exp.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
