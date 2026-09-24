'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  ArrowRight, 
  Play, 
  Activity 
} from 'lucide-react';
import { StatCounter } from './ui/stat-counter';

export const HeroSection: React.FC = () => {
  const [activeHeadlineIdx, setActiveHeadlineIdx] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn('Autoplay prevented or waiting for interaction:', err);
      });
    }
  }, []);

  const headlines = [
    'See the Network. Before It Strikes.',
    'Map the Syndicate. Neutralize the Threat.',
    'From Raw Feeds to Evidentiary Proof.',
  ];

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-defense-950">
      {/* BACKGROUND LAYER 1: Full-Bleed Clean Surveillance Video of People in Public Place */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover filter contrast-110 brightness-95 opacity-80 transition-opacity duration-700"
        >
          <source src="/people-detection.mp4" type="video/mp4" />
        </video>
      </div>

      {/* BACKGROUND LAYER 2: Live OpenCV Computer Vision Overlays Tracking Pedestrians */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden select-none">
        {/* Subtle grid and surveillance scanlines */}
        <div className="absolute inset-0 tech-grid-bg opacity-20" />
        <div className="absolute inset-0 scanlines opacity-25" />

        {/* OpenCV Tracking Bounding Box 1: Pedestrian Walking Tracklet */}
        <div className="absolute top-[26%] right-[12%] sm:right-[18%] w-48 sm:w-56 h-64 sm:h-76 border-2 border-cyan bg-cyan/10 rounded-sm reticle-box transition-all shadow-[0_0_25px_rgba(34,211,199,0.25)]">
          <div className="absolute -top-7 left-0 flex items-center gap-1.5 bg-defense-950/95 border border-cyan px-2 py-0.5 rounded text-[11px] font-mono text-cyan">
            <span className="w-2 h-2 rounded-full bg-cyan animate-ping" />
            <span className="font-bold">PERSON #POI-819</span>
          </div>
          <div className="absolute top-2 right-2 text-[10px] font-mono font-bold text-white bg-defense-950/80 px-1.5 py-0.5 rounded">
            CONF: 98.4% · YOLOV9
          </div>

          {/* Facial Landmark Tracking Points */}
          <div className="absolute top-[28%] left-[32%] w-2 h-2 rounded-full bg-cyan shadow-[0_0_8px_#22D3C7]" />
          <div className="absolute top-[28%] right-[32%] w-2 h-2 rounded-full bg-cyan shadow-[0_0_8px_#22D3C7]" />
          <div className="absolute top-[42%] left-[50%] -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan" />
          <div className="absolute top-[55%] left-[50%] -translate-x-1/2 w-8 h-1 rounded bg-cyan/80" />

          {/* Walking Motion Vector Indicator */}
          <div className="absolute bottom-2 left-2 text-[10px] font-mono text-defense-300 bg-defense-950/90 px-2 py-0.5 rounded flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
            <span>WALKING · 1.4 M/S (TRACKLET ACTIVE)</span>
          </div>
        </div>


        {/* Optical Crosshair Targeting Reticle Center */}
        <div
          className="hidden xl:block absolute top-[42%] right-[36%] w-28 h-28 border border-cyan/30 rounded-full flex items-center justify-center animate-spin pointer-events-none"
          style={{ animationDuration: '30s' }}
        >
          <div className="w-20 h-20 border border-dashed border-cyan/50 rounded-full" />
        </div>
      </div>

      {/* Dark gradient overlay (crafted so walking footage stays vivid while text remains legible) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-defense-950/40 via-defense-950/60 to-defense-950/95 pointer-events-none" />

      {/* Hero Foreground Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Operational Breadcrumb Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded bg-defense-900/90 border border-defense-700 text-xs font-mono text-defense-200 mb-6 backdrop-blur-md shadow-xl"
        >
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
          <span className="text-cyan font-bold tracking-wider">DEFENSE-GRADE INTELLIGENCE</span>
          <span className="text-defense-600">|</span>
          <span className="text-defense-300">NCRB / MHA INVESTIGATION ARCHITECTURE</span>
        </motion.div>

        {/* Rotating/Selectable Hero Headline */}
        <motion.h1
          key={activeHeadlineIdx}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-extrabold tracking-tight text-white mb-6 leading-[1.12]"
        >
          {headlines[activeHeadlineIdx].split('. ')[0]}.
          <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-cyan-bright to-emerald-400">
            {' '}{headlines[activeHeadlineIdx].split('. ')[1]}
          </span>
        </motion.h1>

        {/* Subheadline explaining CV + Graph Analytics + Investigator Support */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-3xl text-base sm:text-lg md:text-xl text-defense-200 font-sans leading-relaxed mb-8 drop-shadow-md"
        >
          Unifying <span className="text-cyan font-bold">OpenCV computer vision</span> across live public CCTV feeds,{' '}
          <span className="text-cyan font-bold">NLP entity extraction</span> from FIRs and CDR logs, and{' '}
          <span className="text-cyan font-bold">graph centrality analytics</span> to uncover concealed criminal syndicates
          and empower investigators with verified, explainable decision support.
        </motion.p>

        {/* Tactical Angle Headline Selectors */}
        <div className="flex items-center gap-2 mb-8 text-[11px] font-mono text-defense-400 bg-defense-900/80 px-3 py-1.5 rounded-full border border-defense-800">
          <span className="text-defense-400">TACTICAL ANGLE:</span>
          {headlines.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveHeadlineIdx(idx)}
              className={`px-2.5 py-0.5 rounded transition-all ${
                activeHeadlineIdx === idx
                  ? 'border border-cyan text-cyan bg-cyan/15 font-bold shadow-[0_0_10px_rgba(34,211,199,0.3)]'
                  : 'border border-defense-750 text-defense-400 hover:text-white'
              }`}
            >
              0{idx + 1}
            </button>
          ))}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-cyan hover:bg-cyan-bright text-defense-950 font-mono font-black text-sm tracking-wider rounded transition-all duration-200 flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(34,211,199,0.35)] hover:shadow-[0_0_35px_rgba(34,211,199,0.55)] hover:scale-[1.02]"
          >
            <ShieldAlert className="w-5 h-5 text-defense-950" />
            <span>REQUEST AGENCY DEMO</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#monitoring-demo"
            className="w-full sm:w-auto px-8 py-4 bg-defense-900/90 hover:bg-defense-850 text-defense-100 hover:text-white border border-defense-700 hover:border-cyan/60 font-mono text-sm tracking-wider rounded transition-all duration-200 flex items-center justify-center gap-2.5 backdrop-blur-sm"
          >
            <Play className="w-4 h-4 text-cyan" />
            <span>WATCH OFFICER WORKFLOW</span>
          </a>
        </motion.div>

        {/* Live-Looking Operational Telemetry Stat Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="w-full max-w-4xl bg-defense-900/95 border border-defense-700 rounded p-4 sm:p-5 backdrop-blur-xl shadow-2xl relative reticle-box"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            {/* Status Beacon */}
            <div className="flex items-center gap-3 border-b sm:border-b-0 sm:border-r border-defense-800 pb-3 sm:pb-0 sm:pr-6 w-full sm:w-auto">
              <div className="w-3 h-3 rounded-full bg-cyan animate-ping" />
              <div>
                <div className="text-[10px] font-mono uppercase text-defense-400">TELEMETRY FEED</div>
                <div className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-cyan" />
                  <span>ACTIVE OPS CLUSTER</span>
                </div>
              </div>
            </div>

            {/* Live Animated Counters */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 w-full sm:w-auto flex-1 text-center sm:text-left">
              {/* Stat 1: Nodes Tracked */}
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-defense-400 uppercase tracking-wider">
                  NODES TRACKED
                </span>
                <span className="text-xl sm:text-2xl font-mono font-black text-cyan">
                  <StatCounter value={3204} />
                </span>
                <span className="text-[9px] font-mono text-defense-500">Across FIR & CDR Graphs</span>
              </div>

              {/* Stat 2: Flagged Entities */}
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-defense-400 uppercase tracking-wider">
                  FLAGGED ENTITIES
                </span>
                <span className="text-xl sm:text-2xl font-mono font-black text-risk-amber">
                  <StatCounter value={142} />
                </span>
                <span className="text-[9px] font-mono text-defense-500">Centrality Deviation &gt;0.75</span>
              </div>

              {/* Stat 3: Active Alerts */}
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-defense-400 uppercase tracking-wider">
                  ACTIVE ALERTS
                </span>
                <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                  <span className="w-2.5 h-2.5 rounded-full bg-risk-red animate-ping" />
                  <span className="text-xl sm:text-2xl font-mono font-black text-risk-red">
                    <StatCounter value={7} />
                  </span>
                </div>
                <span className="text-[9px] font-mono text-defense-500">Evidentiary Action Required</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
