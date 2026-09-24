'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, 
  FileSearch, 
  GitMerge, 
  Crosshair, 
  AlertOctagon, 
  UserCheck, 
  Eye, 
  TrendingUp, 
  ShieldCheck 
} from 'lucide-react';
import { ReticleCard } from './ui/reticle-card';

export const FeaturesGrid: React.FC = () => {
  const features = [
    {
      id: 'cv-tracking',
      title: 'Face, Emotion & Motion Tracking',
      subtitle: 'OpenCV Live Feed Analytics',
      desc: 'Real-time multi-camera tracking with deep metric learning. Tracks suspects across municipal CCTV grids even under partial occlusion and disguise.',
      tag: 'OPENCV PIPELINE',
      icon: Camera,
      // Micro-UI Fragment 1: Camera Feed Simulation
      mockUI: (
        <div className="w-full bg-defense-950 p-3 rounded border border-defense-750 font-mono text-[10px] select-none">
          <div className="flex items-center justify-between border-b border-defense-800 pb-1.5 mb-2">
            <span className="text-cyan flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-ping" />
              CAM-09: METRO CONCOURSE
            </span>
            <span className="text-defense-400">60 FPS · 1080P</span>
          </div>
          <div className="relative h-24 bg-defense-900/80 rounded flex items-center justify-center border border-defense-800 overflow-hidden">
            {/* Camera Viewport Crosshair */}
            <div className="absolute inset-0 tech-dot-bg opacity-30" />
            <div className="relative w-28 h-16 border border-cyan/80 bg-cyan/10 rounded flex flex-col justify-between p-1 reticle-box">
              <div className="flex justify-between items-center text-[8px] text-cyan font-bold">
                <span>PERSON #882</span>
                <span>98.6%</span>
              </div>
              <div className="flex justify-between items-center text-[8px] text-defense-400">
                <span>POSE: WALKING</span>
                <span>V: 1.4 M/S</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-[9px] text-defense-400 mt-1.5">
            <span>RE-ID CONFIDENCE: <strong className="text-cyan">HIGH</strong></span>
            <span>MATCH: ARCHIVED FIR-409</span>
          </div>
        </div>
      ),
    },
    {
      id: 'nlp-extraction',
      title: 'Automatic Entity Extraction',
      subtitle: 'Transformer NLP from Unstructured Case Files',
      desc: 'Parses chaotic police diaries, FIRs, seizure memos, and informant messages to extract phone numbers, aliases, vehicle registrations, and financial handles.',
      tag: 'NLP TRANSFORMER',
      icon: FileSearch,
      // Micro-UI Fragment 2: Highlighted Entity Document
      mockUI: (
        <div className="w-full bg-defense-950 p-3 rounded border border-defense-750 font-mono text-[10px] select-none">
          <div className="flex items-center justify-between border-b border-defense-800 pb-1.5 mb-2">
            <span className="text-defense-300">INGEST: FIR_741_2024.TXT</span>
            <span className="text-cyan text-[9px]">NER COMPLETE</span>
          </div>
          <div className="p-2 bg-defense-900 rounded border border-defense-800 text-[10px] leading-relaxed text-defense-300">
            &quot;...suspect known as{' '}
            <span className="bg-risk-red/20 text-risk-red px-1 py-0.2 rounded border border-risk-red/40 font-bold">
              [PERSON: &apos;KABIR&apos;]
            </span>{' '}
            contacted{' '}
            <span className="bg-cyan/20 text-cyan px-1 py-0.2 rounded border border-cyan/40 font-bold">
              [TEL: +91-98710-XXXXX]
            </span>{' '}
            driving black sedan{' '}
            <span className="bg-risk-amber/20 text-risk-amber px-1 py-0.2 rounded border border-risk-amber/40 font-bold">
              [VEHICLE: DL-3C-9011]
            </span>{' '}
            near{' '}
            <span className="bg-defense-750 text-defense-200 px-1 py-0.2 rounded border border-defense-600">
              [LOC: KASHMERE GATE]
            </span>...&quot;
          </div>
          <div className="flex items-center justify-between text-[9px] text-defense-400 mt-2">
            <span>ENTITIES DISCOVERED: 4</span>
            <span className="text-cyan font-semibold">AUTO-LINKED TO GRAPH</span>
          </div>
        </div>
      ),
    },
    {
      id: 'graph-engine',
      title: 'Relationship Graph Engine',
      subtitle: 'Dynamic Multi-Modal Mapping',
      desc: 'Stores every interaction as a weighted graph edge. Correlates phone calls, bank wire transfers, shared cell towers, and co-travel records into a queryable web.',
      tag: 'NEO4J PROPERTY GRAPH',
      icon: GitMerge,
      // Micro-UI Fragment 3: Weighted Edges Fragment
      mockUI: (
        <div className="w-full bg-defense-950 p-3 rounded border border-defense-750 font-mono text-[10px] select-none">
          <div className="flex items-center justify-between border-b border-defense-800 pb-1.5 mb-2">
            <span className="text-cyan">MULTI-MODAL EDGES</span>
            <span className="text-defense-400">HOP: 2-TIER</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between bg-defense-900 p-1.5 rounded border border-defense-800">
              <span className="text-defense-200">#POI-819 ➔ #ACC-094</span>
              <span className="text-cyan bg-cyan/10 px-1.5 py-0.5 rounded border border-cyan/30 text-[9px]">
                UPI: ₹8,50,000 (3x)
              </span>
            </div>
            <div className="flex items-center justify-between bg-defense-900 p-1.5 rounded border border-defense-800">
              <span className="text-defense-200">#POI-819 ➔ #SIM-211</span>
              <span className="text-risk-amber bg-risk-amber/10 px-1.5 py-0.5 rounded border border-risk-amber/30 text-[9px]">
                CDR: 14 CALLS (MIDNIGHT)
              </span>
            </div>
            <div className="flex items-center justify-between bg-defense-900 p-1.5 rounded border border-defense-800">
              <span className="text-defense-200">#SIM-211 ➔ #LOC-44</span>
              <span className="text-defense-300 bg-defense-800 px-1.5 py-0.5 rounded border border-defense-700 text-[9px]">
                CO-LOCATION: 9 DATES
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'centrality-detection',
      title: 'Key Influencer Detection',
      subtitle: 'Exposing Shadow Kingpins',
      desc: 'Criminal bosses rarely make extortion calls themselves. Betweenness and eigenvector centrality algorithms reveal the hidden orchestrators operating behind cutouts.',
      tag: 'CENTRALITY ALGORITHMS',
      icon: Crosshair,
      // Micro-UI Fragment 4: Centrality Scoreboard
      mockUI: (
        <div className="w-full bg-defense-950 p-3 rounded border border-defense-750 font-mono text-[10px] select-none">
          <div className="flex items-center justify-between border-b border-defense-800 pb-1.5 mb-2">
            <span className="text-risk-red flex items-center gap-1 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-risk-red animate-ping" />
              SURFACED KINGPIN NODE
            </span>
            <span className="text-defense-400">BETWEENNESS</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between bg-risk-red/10 border border-risk-red/40 p-1.5 rounded">
              <div>
                <span className="text-white font-bold block">TARGET #T-9042</span>
                <span className="text-[9px] text-risk-red">0 Direct Calls (Shielded by 3 tiers)</span>
              </div>
              <span className="text-risk-red font-bold text-xs">0.942 / 1.0</span>
            </div>
            <div className="flex items-center justify-between bg-defense-900 border border-defense-800 p-1 rounded text-[9px] text-defense-400">
              <span>CONDUIT #C-3820 (Money Mule)</span>
              <span className="text-defense-300">0.518</span>
            </div>
          </div>
          <div className="text-[9px] text-defense-400 mt-1.5">
            SYNDICATE DEGREE: 28 CONNECTED NODES
          </div>
        </div>
      ),
    },
    {
      id: 'anomaly-scoring',
      title: 'Risk & Anomaly Scoring',
      subtitle: 'Pre-Escalation Behavioral Deviation',
      desc: 'Detects precursor behavior patterns: sudden burner SIM swaps, coordinated late-night tower switches, or rapid cash consolidation before a planned criminal event.',
      tag: 'ANOMALY DETECTOR',
      icon: AlertOctagon,
      // Micro-UI Fragment 5: Telemetry Anomaly Chart
      mockUI: (
        <div className="w-full bg-defense-950 p-3 rounded border border-defense-750 font-mono text-[10px] select-none">
          <div className="flex items-center justify-between border-b border-defense-800 pb-1.5 mb-2">
            <span className="text-risk-amber font-bold">DEVIATION SPIKE</span>
            <span className="text-risk-red font-bold">RISK: 91/100</span>
          </div>
          <div className="h-16 flex items-end justify-between gap-1 px-1 py-1 bg-defense-900/60 rounded border border-defense-800">
            <div className="w-full bg-cyan/40 h-[20%] rounded-t" />
            <div className="w-full bg-cyan/40 h-[25%] rounded-t" />
            <div className="w-full bg-cyan/40 h-[30%] rounded-t" />
            <div className="w-full bg-cyan/50 h-[35%] rounded-t" />
            <div className="w-full bg-risk-amber h-[55%] rounded-t" />
            <div className="w-full bg-risk-red h-[95%] rounded-t animate-pulse" />
          </div>
          <div className="flex justify-between text-[9px] text-defense-400 mt-1.5">
            <span>TRIGGER: 3 BURNER ACTIVATIONS</span>
            <span className="text-risk-red font-semibold">+340% SPIKE</span>
          </div>
        </div>
      ),
    },
    {
      id: 'human-in-the-loop',
      title: 'Human-in-the-Loop Alerts',
      subtitle: 'Explainable Decision Support Dossier',
      desc: 'Never automates police action. Every risk notification generates an auditable, transparent evidence chain with human-in-the-loop investigator sign-off.',
      tag: 'DECISION SUPPORT ONLY',
      icon: UserCheck,
      // Micro-UI Fragment 6: Investigator Sign-Off Card
      mockUI: (
        <div className="w-full bg-defense-950 p-3 rounded border border-defense-750 font-mono text-[10px] select-none">
          <div className="flex items-center justify-between border-b border-defense-800 pb-1.5 mb-2">
            <span className="text-cyan flex items-center gap-1 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan" />
              INVESTIGATOR DOSSIER
            </span>
            <span className="text-defense-400 text-[9px]">OFFICER SIGN-OFF</span>
          </div>
          <div className="bg-defense-900 p-2 rounded border border-defense-800 text-[9px] text-defense-300 leading-relaxed mb-2">
            REASONING: Target #T-9042 matched across 2 FIRs, with cell tower overlap at crime scene and wire transfer to known accomplice.
          </div>
          <div className="flex gap-2">
            <button className="flex-1 bg-cyan/20 hover:bg-cyan/30 text-cyan border border-cyan/40 py-1 rounded text-center font-bold text-[9px]">
              APPROVE LEAD
            </button>
            <button className="flex-1 bg-defense-800 hover:bg-defense-750 text-defense-400 border border-defense-700 py-1 rounded text-center text-[9px]">
              DISMISS
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="py-24 bg-defense-950 border-t border-defense-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-defense-850 border border-defense-700 text-[11px] font-mono text-cyan mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
            <span>CORE INTELLIGENCE CAPABILITIES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-mono font-bold text-white tracking-tight mb-4">
            Specialized Tools for Syndicate Interdiction
          </h2>
          <p className="text-sm sm:text-base text-defense-300 font-sans leading-relaxed">
            Every feature is purpose-built to solve high-friction bottlenecks faced by specialized crime branches,
            anti-terror squads, and intelligence analysts.
          </p>
        </motion.div>

        {/* 3-Column Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="h-full"
              >
                <ReticleCard className="h-full flex flex-col justify-between p-5 bg-defense-850/80 border-defense-750">
                  <div>
                    {/* Top Row: Icon and Category Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded bg-defense-900 border border-defense-700 flex items-center justify-center text-cyan">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-defense-900 text-defense-400 border border-defense-750">
                        {feature.tag}
                      </span>
                    </div>

                    {/* Titles */}
                    <h3 className="font-mono text-base font-bold text-white mb-1">
                      {feature.title}
                    </h3>
                    <div className="text-xs font-mono text-cyan/90 mb-3">
                      {feature.subtitle}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-defense-300 font-sans leading-relaxed mb-5">
                      {feature.desc}
                    </p>
                  </div>

                  {/* Micro-UI Fragment Preview */}
                  <div className="mt-2 pt-3 border-t border-defense-800">
                    {feature.mockUI}
                  </div>
                </ReticleCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
