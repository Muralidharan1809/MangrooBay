import React, { useState } from 'react';
import { TIMELINE_DATA } from '../data/content';
import { Sunrise, Sun, Sunset, Moon, Clock, ChevronRight } from 'lucide-react';

export default function SignatureTimeline() {
  const [activeStageId, setActiveStageId] = useState('morning');
  const activeStage = TIMELINE_DATA.stages.find(s => s.id === activeStageId) || TIMELINE_DATA.stages[0];

  const getStageIcon = (id) => {
    switch (id) {
      case 'morning': return <Sunrise className="w-5 h-5 text-sand" />;
      case 'afternoon': return <Sun className="w-5 h-5 text-sunset" />;
      case 'golden-hour': return <Sunset className="w-5 h-5 text-sunset-glow" />;
      case 'night': return <Moon className="w-5 h-5 text-sand" />;
      default: return <Clock className="w-5 h-5 text-sand" />;
    }
  };

  return (
    <section id="activities" className="py-24 md:py-32 bg-forest text-cream relative overflow-hidden">
      {/* Ambient background glow matching stage color */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[150px] opacity-25 transition-colors duration-1000 pointer-events-none"
        style={{ backgroundColor: activeStage.accent }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-luxury text-sand/80 font-semibold mb-3 inline-block">
            The Flow of Time
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-cream font-light leading-tight mb-4">
            {TIMELINE_DATA.heading}
          </h2>
          <p className="text-base text-cream/70 font-light font-serif italic">
            “{TIMELINE_DATA.subheading}”
          </p>
          <div className="w-16 h-[1px] bg-sand/30 mx-auto mt-6" />
        </div>

        {/* Interactive Desktop Timeline Bar & Mobile Scroll */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-2 rounded-2xl bg-forest-deep/80 backdrop-blur-md border border-sand/20">
            {TIMELINE_DATA.stages.map((stage) => {
              const isActive = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-500 relative ${
                    isActive
                      ? 'bg-forest-light text-cream shadow-floating border border-sand/40'
                      : 'text-cream/60 hover:text-cream hover:bg-forest/40'
                  }`}
                >
                  <div className="mb-2 p-2 rounded-full bg-forest-deep/60 border border-sand/20">
                    {getStageIcon(stage.id)}
                  </div>
                  <span className="font-serif text-xl sm:text-2xl font-light text-cream mb-0.5">
                    {stage.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-sand/70 font-sans">
                    {stage.time}
                  </span>
                  {isActive && (
                    <div 
                      className="absolute -bottom-2 w-8 h-1 rounded-full"
                      style={{ backgroundColor: stage.accent }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Interactive Stage Card */}
        <div className="bg-forest-deep/90 border border-sand/25 rounded-3xl overflow-hidden shadow-floating backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Visual Photo on One Side */}
            <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-[480px] overflow-hidden">
              <img
                src={activeStage.image}
                alt={activeStage.name}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                key={activeStage.id}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-transparent to-transparent opacity-80" />
              
              <div className="absolute top-6 left-6">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-deep/80 backdrop-blur-md border border-sand/30 text-xs text-sand font-medium uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  {activeStage.time}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <span className="text-xs uppercase tracking-luxury text-sand/90 font-medium">
                  Atmosphere: <strong className="text-cream">{activeStage.vibe}</strong>
                </span>
              </div>
            </div>

            {/* Narrative & Details on the Other Side */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-b from-forest-deep to-forest/90">
              <div>
                <div className="flex items-center gap-2 text-sunset text-xs uppercase tracking-luxury font-semibold mb-3">
                  <span>Mangroo Bay Ritual</span>
                  <span>•</span>
                  <span>{activeStage.name}</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-cream font-light mb-4 leading-tight">
                  {activeStage.summary}
                </h3>

                <p className="text-sm sm:text-base text-cream/80 leading-relaxed font-sans mb-8">
                  {activeStage.description}
                </p>
              </div>

              {/* Stage Navigation / Indicator */}
              <div className="pt-6 border-t border-sand/20 flex items-center justify-between text-xs text-sand/70">
                <span>Switch between times above</span>
                <span className="flex items-center gap-1 font-serif text-sand text-sm">
                  {activeStage.name} Flow <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
