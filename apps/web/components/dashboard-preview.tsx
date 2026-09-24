'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  NetworkGraphVisual 
} from './ui/network-graph-visual';
import { 
  Shield, 
  Radio, 
  AlertTriangle, 
  Search, 
  SlidersHorizontal, 
  Layers, 
  Users, 
  Phone, 
  FileText, 
  MapPin, 
  Clock, 
  ExternalLink,
  ChevronRight,
  RefreshCw,
  BellRing
} from 'lucide-react';
import { StatCounter } from './ui/stat-counter';
import { ReticleCard } from './ui/reticle-card';

export const DashboardPreview: React.FC = () => {
  const [activeAlertFilter, setActiveAlertFilter] = useState<'ALL' | 'CRITICAL' | 'WATCH'>('ALL');

  const alerts = [
    {
      id: 'ALT-1094',
      time: '14:22:08 IST',
      severity: 'CRITICAL',
      title: 'Coordinated Burner Activation',
      desc: '3 new SIMs activated within 200m radius of safehouse #LOC-44. Centrality spike detected.',
      target: '#POI-819',
      riskScore: 94,
    },
    {
      id: 'ALT-1093',
      time: '13:58:41 IST',
      severity: 'WATCH',
      title: 'Foreign Hawala Settlement',
      desc: '₹12,40,000 structured wire through shell trading entity to suspect #C-3820.',
      target: '#ACC-094',
      riskScore: 82,
    },
    {
      id: 'ALT-1092',
      time: '11:15:20 IST',
      severity: 'WATCH',
      title: 'ANPR Vehicle Intercept Match',
      desc: 'Sedan DL-3C-9011 detected passing toll camera C-12 heading towards interstate border.',
      target: '#VEH-9011',
      riskScore: 78,
    },
  ];

  const filteredAlerts = alerts.filter(
    (a) => activeAlertFilter === 'ALL' || a.severity === activeAlertFilter
  );

  return (
    <section id="dashboard" className="py-24 bg-defense-900 border-t border-defense-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-defense-850 border border-defense-700 text-[11px] font-mono text-cyan mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
            <span>OPERATIONAL WORKSPACE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-mono font-bold text-white tracking-tight mb-4">
            Investigator Command Center Console
          </h2>
          <p className="text-sm sm:text-base text-defense-300 font-sans leading-relaxed">
            Experience the real-time operational interface utilized by intelligence analysts to interrogate
            cross-jurisdictional syndicate graphs, triage incoming risk alerts, and compile evidentiary dossiers.
          </p>
        </motion.div>

        {/* Framed Browser / Device Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-lg overflow-hidden border border-defense-700/90 bg-defense-950 shadow-2xl shadow-black/80"
        >
          {/* Top Window Chrome Bar */}
          <div className="h-11 bg-defense-900 border-b border-defense-750 px-4 flex items-center justify-between font-mono text-xs select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-risk-red/80 border border-risk-red/40 inline-block" />
              <span className="w-3 h-3 rounded-full bg-risk-amber/80 border border-risk-amber/40 inline-block" />
              <span className="w-3 h-3 rounded-full bg-cyan/80 border border-cyan/40 inline-block" />
              <span className="text-defense-400 text-[11px] ml-2 hidden sm:inline">
                SENTINEL-X INVESTIGATION SUITE · CASE #NCRB-2024-CR-0982
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-defense-850 border border-defense-700 text-[10px] text-cyan flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-ping" />
                <span>FEED: LIVE (12.4K ENTITIES)</span>
              </span>
            </div>
          </div>

          {/* Main Dashboard Workspace Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
            {/* Left Tactical Navigation Sidebar */}
            <div className="lg:col-span-2 bg-defense-950 border-r border-defense-800/80 p-3 flex flex-col justify-between font-mono text-xs">
              <div className="space-y-4">
                <div className="text-[10px] uppercase text-defense-500 font-bold tracking-wider px-2">
                  INVESTIGATIVE MODULES
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 px-2.5 py-2 rounded bg-cyan/15 text-cyan border border-cyan/30 font-semibold cursor-pointer">
                    <Layers className="w-4 h-4" />
                    <span>Graph Matrix</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-2 rounded text-defense-400 hover:text-defense-200 hover:bg-defense-900 transition-colors cursor-pointer">
                    <Users className="w-4 h-4" />
                    <span>Suspect Entities</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-2 rounded text-defense-400 hover:text-defense-200 hover:bg-defense-900 transition-colors cursor-pointer">
                    <Phone className="w-4 h-4" />
                    <span>CDR Correlator</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-2 rounded text-defense-400 hover:text-defense-200 hover:bg-defense-900 transition-colors cursor-pointer">
                    <FileText className="w-4 h-4" />
                    <span>FIR Knowledge Core</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-2 rounded text-defense-400 hover:text-defense-200 hover:bg-defense-900 transition-colors cursor-pointer">
                    <MapPin className="w-4 h-4" />
                    <span>Geofence Clusters</span>
                  </div>
                </div>
              </div>

              {/* Officer Clearance Badge in Sidebar */}
              <div className="pt-4 border-t border-defense-800 p-2 bg-defense-900/60 rounded border border-defense-750">
                <div className="text-[10px] text-defense-500">OFFICER BADGE</div>
                <div className="font-bold text-white text-xs">INSP. R. VERMA</div>
                <div className="text-[9px] text-cyan font-mono">CRIME BRANCH SPECIAL CELL</div>
              </div>
            </div>

            {/* Center: Real-Time Network Graph Canvas */}
            <div className="lg:col-span-7 bg-defense-900/60 p-4 flex flex-col relative border-r border-defense-800/80">
              {/* Graph Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3 bg-defense-950/80 p-2.5 rounded border border-defense-750 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-defense-400">TARGET:</span>
                  <span className="text-cyan font-bold">SYNDICATE #NCRB-S82</span>
                  <span className="text-defense-600">|</span>
                  <span className="text-defense-400">NODES: 32</span>
                  <span className="text-defense-400">EDGES: 58</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-defense-500">INTERACTIVE PREVIEW: HOVER ON NODES</span>
                </div>
              </div>

              {/* Graph Visual Component */}
              <div className="flex-1 min-h-[440px] rounded relative overflow-hidden">
                <NetworkGraphVisual interactive={true} />
              </div>

              {/* Bottom Quick Metric Strip */}
              <div className="grid grid-cols-3 gap-3 mt-3 font-mono text-xs">
                <div className="bg-defense-950 p-2 rounded border border-defense-750 flex items-center justify-between">
                  <span className="text-defense-400 text-[10px]">HOP DEPTH:</span>
                  <span className="text-white font-bold">4 DEGREES</span>
                </div>
                <div className="bg-defense-950 p-2 rounded border border-defense-750 flex items-center justify-between">
                  <span className="text-defense-400 text-[10px]">MAX RISK:</span>
                  <span className="text-risk-red font-bold">94 / 100</span>
                </div>
                <div className="bg-defense-950 p-2 rounded border border-defense-750 flex items-center justify-between">
                  <span className="text-defense-400 text-[10px]">CONFIDENCE:</span>
                  <span className="text-cyan font-bold">98.4% EV</span>
                </div>
              </div>
            </div>

            {/* Right: Live Risk Alerts Feed & Filter */}
            <div className="lg:col-span-3 bg-defense-950 p-4 flex flex-col justify-between font-mono text-xs">
              <div>
                {/* Alert Header */}
                <div className="flex items-center justify-between pb-3 border-b border-defense-800 mb-3">
                  <div className="flex items-center gap-2">
                    <BellRing className="w-4 h-4 text-risk-red animate-pulse" />
                    <span className="font-bold text-white text-xs">RISK ALERT STREAM</span>
                  </div>
                  <span className="px-1.5 py-0.5 rounded bg-risk-red/20 text-risk-red border border-risk-red/40 text-[10px] font-bold">
                    3 UNRESOLVED
                  </span>
                </div>

                {/* Filter Pills */}
                <div className="flex gap-1.5 mb-3 text-[10px]">
                  {(['ALL', 'CRITICAL', 'WATCH'] as const).map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveAlertFilter(filter)}
                      className={`px-2 py-1 rounded border transition-colors ${
                        activeAlertFilter === filter
                          ? 'bg-defense-800 border-cyan text-cyan font-bold'
                          : 'bg-defense-900 border-defense-800 text-defense-400 hover:text-defense-200'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>

                {/* Alert Cards List */}
                <div className="space-y-2.5">
                  {filteredAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className={`p-3 rounded border transition-all ${
                        alert.severity === 'CRITICAL'
                          ? 'bg-risk-red/10 border-risk-red/40 hover:border-risk-red'
                          : 'bg-risk-amber/10 border-risk-amber/40 hover:border-risk-amber'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                            alert.severity === 'CRITICAL'
                              ? 'bg-risk-red text-white'
                              : 'bg-risk-amber text-defense-950'
                          }`}
                        >
                          {alert.severity}
                        </span>
                        <span className="text-[10px] text-defense-400">{alert.time}</span>
                      </div>

                      <div className="font-bold text-white text-xs mb-1">{alert.title}</div>
                      <p className="text-[11px] text-defense-300 font-sans leading-tight mb-2">
                        {alert.desc}
                      </p>

                      <div className="flex items-center justify-between text-[10px] pt-1.5 border-t border-defense-800">
                        <span className="text-cyan font-mono">{alert.target}</span>
                        <span
                          className={`font-bold ${
                            alert.riskScore > 90 ? 'text-risk-red' : 'text-risk-amber'
                          }`}
                        >
                          RISK {alert.riskScore}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Export Dossier Button */}
              <div className="pt-4 border-t border-defense-800">
                <button className="w-full py-2 bg-defense-850 hover:bg-defense-800 text-cyan border border-cyan/40 rounded flex items-center justify-center gap-2 font-mono text-xs transition-colors">
                  <span>COMPILE COURT DOSSIER</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
