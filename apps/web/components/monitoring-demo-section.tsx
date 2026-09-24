'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  ShieldCheck, 
  Radio, 
  Eye, 
  Database, 
  Layers, 
  Cpu, 
  PhoneCall, 
  FileText, 
  CreditCard, 
  Camera, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { ReticleCard } from './ui/reticle-card';

export const MonitoringDemoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeTab, setActiveTab] = useState<'MONITORING' | 'INGESTION'>('MONITORING');
  const [activeFeed, setActiveFeed] = useState('CAM-01 [INTERSECTION 9]');

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  // How police officers monitor
  const officerSteps = [
    {
      title: '1. Automated Threat Surfacing',
      desc: 'OpenCV runs continuous face recognition, license plate OCR, and group velocity tracking on incoming feeds. High-probability matches instantly ping the officer.',
      badge: 'AUTOMATED DETECTION',
      badgeColor: 'text-cyan bg-cyan/10 border-cyan/30',
    },
    {
      title: '2. Multi-Camera Cross-ReID Tracking',
      desc: 'As a target walks or drives between sectors, Deep Re-ID models maintain identity continuity across blind spots without requiring manual camera switching.',
      badge: 'SEAMLESS HANDOFF',
      badgeColor: 'text-cyan bg-cyan/10 border-cyan/30',
    },
    {
      title: '3. Human-in-the-Loop Verification',
      desc: 'The officer reviews the side-by-side evidence dossier (CCTV capture vs criminal record database) before authorizing an alert or dispatch.',
      badge: 'OFFICER SIGN-OFF',
      badgeColor: 'text-risk-amber bg-risk-amber/10 border-risk-amber/30',
    },
    {
      title: '4. Instant Field Tactical Dispatch',
      desc: 'With one click, confirmed target coordinates and vehicle vectors are transmitted securely to nearest PCR patrol vans via encrypted CAD dispatch.',
      badge: 'TACTICAL DISPATCH',
      badgeColor: 'text-risk-red bg-risk-red/10 border-risk-red/30',
    },
  ];

  // How the system gets and ingests data
  const ingestionSources = [
    {
      icon: Camera,
      title: 'Municipal & Police CCTV (RTSP)',
      protocol: 'RTSP / WebRTC @ 60 FPS',
      desc: 'Ingests live video feeds from traffic junctions, airports, metro stations, and highway toll cameras. OpenCV decodes frame batches with hardware GPU acceleration.',
    },
    {
      icon: FileText,
      title: 'Police FIRs & Diary Logs (CCTNS)',
      protocol: 'REST / OCR / Multilingual NLP',
      desc: 'Extracts accused names, aliases, vehicle numbers, and crime modus operandi from unstructured FIR PDFs using fine-tuned transformer Named Entity Recognition.',
    },
    {
      icon: PhoneCall,
      title: 'Telecom CDR & Tower Dumps',
      protocol: 'CSV / SFTP Automated Pipeline',
      desc: 'Parses millions of telecom call detail records (CDRs), IMEI changes, and cell tower triangulation dumps to detect late-night syndicate conference calls.',
    },
    {
      icon: CreditCard,
      title: 'Financial & Hawala Wire Feeds',
      protocol: 'FIU / Bank API Encrypted Webhooks',
      desc: 'Maps rapid sequential UPI transactions, structured cash withdrawals, and shell company transfers that correlate with extortion call timestamps.',
    },
  ];

  return (
    <section id="monitoring-demo" className="py-24 bg-defense-950 border-t border-defense-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-defense-850 border border-defense-700 text-xs font-mono text-cyan mb-3">
            <Radio className="w-3.5 h-3.5 text-cyan animate-pulse" />
            <span>OPERATIONAL DEMO & DATA PIPELINE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-mono font-bold text-white tracking-tight mb-4">
            Live Surveillance & Officer Monitoring In Action
          </h2>
          <p className="text-sm sm:text-base text-defense-300 font-sans leading-relaxed">
            Witness how field officers monitor live tactical feeds in real time, and how SENTINEL-X ingests
            and correlates disparate data sources across the investigative lifecycle.
          </p>
        </motion.div>

        {/* View Switcher Tabs (Officer Monitoring vs Data Ingestion) */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-lg bg-defense-900 border border-defense-750 font-mono text-xs">
            <button
              onClick={() => setActiveTab('MONITORING')}
              className={`px-5 py-2 rounded-md transition-all flex items-center gap-2 ${
                activeTab === 'MONITORING'
                  ? 'bg-cyan text-defense-950 font-bold shadow-[0_0_15px_rgba(34,211,199,0.3)]'
                  : 'text-defense-400 hover:text-white'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>OFFICER MONITORING WORKFLOW</span>
            </button>
            <button
              onClick={() => setActiveTab('INGESTION')}
              className={`px-5 py-2 rounded-md transition-all flex items-center gap-2 ${
                activeTab === 'INGESTION'
                  ? 'bg-cyan text-defense-950 font-bold shadow-[0_0_15px_rgba(34,211,199,0.3)]'
                  : 'text-defense-400 hover:text-white'
              }`}
            >
              <Database className="w-4 h-4" />
              <span>HOW THE SYSTEM GETS DATA</span>
            </button>
          </div>
        </div>

        {/* Main Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Command-Center Tactical Video Terminal (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-defense-900 rounded-lg border border-defense-700 overflow-hidden shadow-2xl relative"
          >
            {/* Terminal Header Chrome */}
            <div className="bg-defense-950 border-b border-defense-750 px-4 py-3 flex items-center justify-between font-mono text-xs select-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-risk-red animate-ping" />
                <span className="text-white font-bold tracking-wider">LIVE OPERATIONAL FEED</span>
                <span className="text-defense-600">|</span>
                <span className="text-cyan text-[11px]">{activeFeed}</span>
              </div>

              <div className="flex items-center gap-3 text-[11px] text-defense-400">
                <span className="hidden sm:inline">OFFICER: INSP. R. VERMA</span>
                <span className="px-2 py-0.5 rounded bg-defense-850 text-cyan border border-defense-700 text-[10px]">
                  1080P 60FPS
                </span>
              </div>
            </div>

            {/* Video Player Container */}
            <div className="relative aspect-video bg-black overflow-hidden group">
              <video
                ref={videoRef}
                src="/demovideo.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Tactical Camera HUD Overlay on Video */}
              <div className="absolute top-3 left-3 flex items-center gap-2 bg-defense-950/80 border border-defense-700 px-2.5 py-1 rounded text-[11px] font-mono backdrop-blur-sm pointer-events-none">
                <span className="text-risk-red font-bold">● REC</span>
                <span className="text-defense-400">00:14:28:09 IST</span>
              </div>

              <div className="absolute top-3 right-3 bg-defense-950/80 border border-cyan/40 px-2.5 py-1 rounded text-[10px] font-mono text-cyan backdrop-blur-sm pointer-events-none">
                OPENCV TRACKING: ENGAGED
              </div>

              {/* Dynamic Bounding Box Overlay for Target Tracking */}
              <div className="absolute top-[30%] left-[42%] w-36 h-48 border-2 border-cyan bg-cyan/10 rounded reticle-box pointer-events-none shadow-[0_0_15px_rgba(34,211,199,0.3)]">
                <div className="absolute -top-6 left-0 bg-defense-950 border border-cyan px-1.5 py-0.2 rounded text-[9px] font-mono text-cyan font-bold whitespace-nowrap">
                  POI #882: 98.4% MATCH
                </div>
                <div className="absolute bottom-1 right-1 text-[8px] font-mono text-defense-300 bg-defense-950/80 px-1 rounded">
                  V: 1.2 M/S
                </div>
              </div>

              {/* Hover Video Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-defense-950 via-defense-950/80 to-transparent flex items-center justify-between text-white font-mono text-xs opacity-90 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded bg-defense-850 hover:bg-defense-800 border border-defense-700 text-cyan transition-colors"
                    aria-label="Play or Pause"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded bg-defense-850 hover:bg-defense-800 border border-defense-700 text-defense-300 hover:text-white transition-colors"
                    aria-label="Mute or Unmute"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <span className="text-[11px] text-defense-400">
                    STATUS: <span className="text-cyan font-bold">STREAMING ACTIVE</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleFullScreen}
                    className="p-1.5 rounded bg-defense-850 hover:bg-defense-800 border border-defense-700 text-defense-300 hover:text-white transition-colors"
                    title="Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Stream Selector Strip */}
            <div className="p-3 bg-defense-950 border-t border-defense-750 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
              <span className="text-defense-400 text-[11px]">SELECT SURVEILLANCE FEED:</span>
              <div className="flex flex-wrap gap-2">
                {[
                  'CAM-01 [INTERSECTION 9]',
                  'CAM-04 [TERMINAL 3]',
                  'DRONE-02 [PERIMETER]',
                ].map((feed) => (
                  <button
                    key={feed}
                    onClick={() => setActiveFeed(feed)}
                    className={`px-2.5 py-1 rounded text-[10px] border transition-colors ${
                      activeFeed === feed
                        ? 'bg-cyan/15 border-cyan text-cyan font-bold'
                        : 'bg-defense-900 border-defense-800 text-defense-400 hover:text-white'
                    }`}
                  >
                    {feed}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Tabbed Workflow Details (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <AnimatePresence mode="wait">
              {activeTab === 'MONITORING' ? (
                /* TAB 1: HOW POLICE OFFICERS MONITOR */
                <motion.div
                  key="monitoring"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="p-4 rounded-lg bg-defense-900 border border-defense-750">
                    <div className="flex items-center gap-2 text-cyan font-mono text-xs font-bold mb-1">
                      <ShieldCheck className="w-4 h-4" />
                      <span>INVESTIGATOR COMMAND PROTOCOL</span>
                    </div>
                    <p className="text-xs text-defense-300 leading-relaxed font-sans">
                      The monitoring console provides continuous decision support without overwhelming the officer
                      with false alarms. Every detection is matched against national databases with an explainable confidence trail.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {officerSteps.map((step, idx) => (
                      <ReticleCard key={step.title} className="p-4 bg-defense-900/90 border-defense-750">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-mono text-xs font-bold text-white">
                            {step.title}
                          </h4>
                          <span className={`text-[9px] font-mono px-2 py-0.5 rounded border font-semibold ${step.badgeColor}`}>
                            {step.badge}
                          </span>
                        </div>
                        <p className="text-xs text-defense-300 leading-relaxed font-sans mt-1">
                          {step.desc}
                        </p>
                      </ReticleCard>
                    ))}
                  </div>

                  {/* Officer Action Trigger Demo */}
                  <div className="p-3 bg-defense-900/60 rounded border border-defense-750 flex items-center justify-between text-xs font-mono">
                    <span className="text-defense-400">DISPATCH PROTOCOL:</span>
                    <a
                      href="#contact"
                      className="px-3 py-1.5 bg-cyan hover:bg-cyan-bright text-defense-950 font-bold rounded flex items-center gap-1.5 transition-colors"
                    >
                      <span>TEST CAD DISPATCH</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              ) : (
                /* TAB 2: HOW THE SYSTEM GETS DATA */
                <motion.div
                  key="ingestion"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="p-4 rounded-lg bg-defense-900 border border-defense-750">
                    <div className="flex items-center gap-2 text-cyan font-mono text-xs font-bold mb-1">
                      <Layers className="w-4 h-4" />
                      <span>MULTI-SOURCE INGESTION ARCHITECTURE</span>
                    </div>
                    <p className="text-xs text-defense-300 leading-relaxed font-sans">
                      SENTINEL-X connects directly to legacy police infrastructure, municipal sensors, and telecom providers
                      to ingest structured and unstructured telemetry into a unified graph.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {ingestionSources.map((source, idx) => {
                      const Icon = source.icon;
                      return (
                        <ReticleCard key={source.title} className="p-4 bg-defense-900/90 border-defense-750">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded bg-defense-850 border border-defense-700 flex items-center justify-center text-cyan flex-shrink-0 mt-0.5">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="font-mono text-xs font-bold text-white">
                                  {source.title}
                                </h4>
                              </div>
                              <div className="text-[10px] font-mono text-cyan/90 mb-1">
                                {source.protocol}
                              </div>
                              <p className="text-xs text-defense-300 leading-relaxed font-sans">
                                {source.desc}
                              </p>
                            </div>
                          </div>
                        </ReticleCard>
                      );
                    })}
                  </div>

                  {/* Schema Compatibility Callout */}
                  <div className="p-3 bg-defense-900/60 rounded border border-defense-750 flex items-center justify-between text-xs font-mono">
                    <span className="text-defense-400">INGESTION COMPLIANCE:</span>
                    <span className="text-cyan font-bold">NCRB CCTNS &amp; NATGRID COMPATIBLE</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
