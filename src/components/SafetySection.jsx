import React from 'react';
import { SAFETY_AND_PRECAUTIONS_DATA } from '../data/content';
import { 
  LifeBuoy, 
  Anchor, 
  Compass, 
  ShieldCheck, 
  Users, 
  Heart, 
  CheckCircle2, 
  AlertTriangle,
  Clock,
  Waves
} from 'lucide-react';

export default function SafetySection({ onOpenBooking }) {
  const getGuidelineIcon = (id) => {
    switch (id) {
      case 'life-jackets': return <LifeBuoy className="w-6 h-6 text-sunset" />;
      case 'certified-captains': return <Anchor className="w-6 h-6 text-sand" />;
      case 'weather-monitoring': return <Compass className="w-6 h-6 text-mangrove-light" />;
      case 'safe-boarding': return <ShieldCheck className="w-6 h-6 text-sand" />;
      case 'onboard-discipline': return <Users className="w-6 h-6 text-sunset-glow" />;
      case 'eco-heritage': return <Heart className="w-6 h-6 text-sand" />;
      default: return <ShieldCheck className="w-6 h-6 text-sand" />;
    }
  };

  return (
    <section id="safety" className="py-24 md:py-32 bg-forest-deep text-cream relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-mangrove/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-sand/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-light/60 border border-sand/30 text-sand text-xs font-semibold uppercase tracking-luxury mb-4 shadow-sm backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-sunset" />
            <span>{SAFETY_AND_PRECAUTIONS_DATA.eyebrow}</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-cream font-light leading-tight mb-4">
            {SAFETY_AND_PRECAUTIONS_DATA.heading}
          </h2>

          <p className="font-serif text-xl sm:text-2xl text-sand italic font-light mb-4">
            “{SAFETY_AND_PRECAUTIONS_DATA.tagline}”
          </p>

          <p className="text-sm md:text-base text-cream/80 leading-relaxed font-sans max-w-2xl mx-auto">
            {SAFETY_AND_PRECAUTIONS_DATA.overview}
          </p>
          <div className="w-16 h-[1px] bg-sand/40 mx-auto mt-6" />
        </div>

        {/* 6 Core Safety Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {SAFETY_AND_PRECAUTIONS_DATA.guidelines.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-forest/70 backdrop-blur-md border border-sand/20 hover:border-sand/50 transition-all duration-300 shadow-luxury flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-forest-deep border border-sand/30 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:border-sand transition-all">
                  {getGuidelineIcon(item.id)}
                </div>

                <h3 className="font-serif text-2xl text-cream font-medium mb-2 group-hover:text-sand transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs uppercase tracking-wider text-sunset font-semibold mb-3">
                  {item.summary}
                </p>

                <p className="text-sm text-cream/75 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-sand/15 flex items-center gap-2 text-[11px] text-sand/80 uppercase tracking-widest font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-sand" />
                <span>Mangroo Bay Safety Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Essential Passenger Precautions Checklist */}
        <div className="bg-forest-light/40 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-sand/30 shadow-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-luxury text-sunset font-semibold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-sunset" />
                <span>Passenger Advisory</span>
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-cream font-light leading-tight">
                Important Boating Precautions & Etiquette
              </h3>
              <p className="text-sm text-cream/75 leading-relaxed font-sans">
                To guarantee a peaceful and safe cruise for everyone, please observe these simple onboard precautions before and during your ride at Pondicherry Marina.
              </p>
              
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sand text-forest font-semibold uppercase tracking-luxury text-xs hover:bg-white transition-all shadow-md active:scale-95"
                >
                  <span>Book Safe Boat Ride</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {SAFETY_AND_PRECAUTIONS_DATA.precautionsList.map((precaution, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-forest-deep/80 border border-sand/15 flex items-start gap-3 text-xs text-cream/90 leading-relaxed hover:border-sand/40 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sunset shrink-0 mt-0.5" />
                    <span>{precaution}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
