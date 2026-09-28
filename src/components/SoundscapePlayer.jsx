import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function SoundscapePlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const noiseNodeRef = useRef(null);
  const gainNodeRef = useRef(null);
  const intervalRef = useRef(null);

  // Web Audio API generator for gentle water ripples and breeze
  const startWaterSoundscape = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      audioCtxRef.current = ctx;

      // Create pink noise buffer for realistic gentle ocean/river tide
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;
      noiseNodeRef.current = whiteNoise;

      // Low pass filter to simulate deep calm water
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, ctx.currentTime);

      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.01, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 2);
      gainNodeRef.current = gainNode;

      whiteNoise.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      whiteNoise.start(0);

      // Modulate volume gently to simulate slow mangrove tidal laps
      intervalRef.current = setInterval(() => {
        if (ctx && ctx.state === 'running' && gainNodeRef.current) {
          const targetVol = 0.10 + Math.random() * 0.12;
          gainNodeRef.current.gain.setTargetAtTime(targetVol, ctx.currentTime, 1.8);
        }
      }, 3500);

      setIsPlaying(true);
    } catch (e) {
      console.warn("AudioContext not permitted before interaction", e);
    }
  };

  const stopSoundscape = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setTargetAtTime(0.001, audioCtxRef.current.currentTime, 0.4);
      setTimeout(() => {
        if (audioCtxRef.current) {
          audioCtxRef.current.close();
          audioCtxRef.current = null;
        }
      }, 500);
    }
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopSoundscape();
    } else {
      startWaterSoundscape();
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? "Mute Bay Water Sounds" : "Listen to Bay Water Calm"}
      aria-label="Toggle ambient water sounds"
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 border ${
        isPlaying
          ? 'bg-sunset/20 text-sand border-sunset/50 shadow-[0_0_12px_rgba(217,130,91,0.35)]'
          : 'bg-forest-light/40 text-sand/80 hover:text-sand border-sand/20 hover:border-sand/40'
      }`}
    >
      {isPlaying ? (
        <>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sunset opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sunset"></span>
          </span>
          <Volume2 className="w-3.5 h-3.5 text-sunset" />
          <span className="hidden sm:inline">Soundscape Active</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-sand/60" />
          <span className="hidden sm:inline">Bay Sounds</span>
        </>
      )}
    </button>
  );
}
