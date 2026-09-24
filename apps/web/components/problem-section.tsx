'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  PhoneCall, 
  Camera, 
  CreditCard, 
  MapPin, 
  Share2, 
  AlertTriangle, 
  CheckCircle2, 
  Cpu, 
  Layers 
} from 'lucide-react';
import { ReticleCard } from './ui/reticle-card';

export const ProblemSection: React.FC = () => {
  const dataSources = [
    {
      id: 'FIR',
      name: 'Unstructured FIRs',
      desc: 'Manual police diary logs in vernacular regional scripts.',
      icon: FileText,
      color: 'text-amber-400',
      tag: 'CCTNS SILO',
    },
    {
      id: 'CDR',
      name: 'Telecom CDR Logs',
      desc: 'Millions of call detail records, cell tower pings, IMEI changes.',
      icon: PhoneCall,
      color: 'text-blue-400',
      tag: 'TELCO RAW',
    },
    {
      id: 'CCTV',
      name: 'Live CCTV Feeds',
      desc: 'Petabytes of footage without automated cross-camera re-identification.',
      icon: Camera,
      color: 'text-cyan',
      tag: 'STREAM RAW',
    },
    {
      id: 'FIN',
      name: 'Financial Trails',
      desc: 'Layered UPI transactions, hawala ledgers, shell bank accounts.',
      icon: CreditCard,
      color: 'text-emerald-400',
      tag: 'FIU/BANK SILO',
    },
    {
      id: 'GEO',
      name: 'Geofence Pings',
      desc: 'Cell tower dumps and ANPR toll scans with missing temporal linkage.',
      icon: MapPin,
      color: 'text-rose-400',
      tag: 'SPATIAL LOGS',
    },
    {
      id: 'INTEL',
      name: 'Field Informant Intel',
      desc: 'Subjective field reports lacking verified relationship corroboration.',
      icon: Share2,
      color: 'text-purple-400',
      tag: 'HUMINT',
    },
  ];

  return (
    <section id="problem" className="py-24 bg-defense-950 border-t border-defense-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-defense-850 border border-defense-700 text-[11px] font-mono text-cyan mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
            <span>OPERATIONAL BOTTLENECK</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-mono font-bold text-white tracking-tight mb-4">
            The Fragmentation Trap: High Data, Zero Synthesis
          </h2>
          <p className="text-sm sm:text-base text-defense-300 font-sans leading-relaxed">
            Law enforcement agencies are flooded with terabytes of data daily. But without automated cross-modal
            linkage, critical syndicate relationships remain buried across disconnected departmental silos.
          </p>
        </motion.div>

        {/* Scattered Sources Converging Toward Core Architecture Visual */}
        <div className="relative mb-16 p-6 sm:p-10 rounded-lg bg-defense-900/60 border border-defense-800 backdrop-blur-sm">
          <div className="absolute top-3 left-4 text-[10px] font-mono text-defense-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span>CONVERGENCE MATRIX: 6 DISPARATE TELEMETRY FEEDS → 1 UNIFIED KNOWLEDGE GRAPH</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mt-6">
            {/* Left: Scattered Data Feeds */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              {dataSources.map((source, index) => {
                const Icon = source.icon;
                return (
                  <motion.div
                    key={source.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="p-3 bg-defense-850/80 border border-defense-750 rounded relative group hover:border-cyan/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <Icon className={`w-4 h-4 ${source.color}`} />
                      <span className="text-[9px] font-mono text-defense-400 bg-defense-900 px-1.5 py-0.5 rounded border border-defense-750">
                        {source.tag}
                      </span>
                    </div>
                    <div className="font-mono text-xs font-semibold text-white group-hover:text-cyan transition-colors">
                      {source.name}
                    </div>
                    <div className="text-[10px] text-defense-400 leading-tight mt-1 line-clamp-2">
                      {source.desc}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Center: Convergence Vector Animation */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center py-4">
              <div className="w-full flex lg:flex-col items-center justify-center gap-2">
                <div className="h-px lg:h-12 w-12 lg:w-px bg-gradient-to-r lg:bg-gradient-to-b from-defense-700 via-cyan to-defense-700" />
                <div className="p-3 rounded-full bg-defense-850 border border-cyan/60 text-cyan shadow-[0_0_20px_rgba(34,211,199,0.3)]">
                  <Cpu className="w-6 h-6 animate-pulse" />
                </div>
                <div className="h-px lg:h-12 w-12 lg:w-px bg-gradient-to-r lg:bg-gradient-to-b from-defense-700 via-cyan to-defense-700" />
              </div>
              <span className="text-[10px] font-mono text-cyan text-center mt-2 tracking-widest uppercase">
                AI Pipeline & Graph Core
              </span>
            </div>

            {/* Right: Unified Operational Outcome */}
            <div className="lg:col-span-5">
              <ReticleCard className="bg-defense-850/90 border-cyan/30">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded bg-cyan/10 border border-cyan/40 text-[10px] font-mono text-cyan font-bold">
                    UNIFIED INTELLIGENCE
                  </span>
                  <span className="text-[10px] font-mono text-defense-400">
                    SINGLE PANE OF GLASS
                  </span>
                </div>

                <h3 className="font-mono text-lg font-bold text-white mb-2">
                  SENTINEL-X Consolidated Entity Graph
                </h3>

                <p className="text-xs text-defense-300 leading-relaxed mb-4">
                  Multi-modal records are resolved in real time into an interconnected Neo4j graph. A phone number
                  in a 2-year-old FIR instantly connects to a face detected at an airport CCTV feed and an overseas wire transfer.
                </p>

                <div className="space-y-2 border-t border-defense-750 pt-3 text-xs font-mono">
                  <div className="flex items-center justify-between text-defense-300">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan" />
                      Cross-jurisdiction entity resolution
                    </span>
                    <span className="text-cyan font-bold">100%</span>
                  </div>
                  <div className="flex items-center justify-between text-defense-300">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan" />
                      Multi-hop syndicate link revelation
                    </span>
                    <span className="text-cyan font-bold">&lt;180ms</span>
                  </div>
                  <div className="flex items-center justify-between text-defense-300">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan" />
                      Evidentiary audit trail for court submission
                    </span>
                    <span className="text-cyan font-bold">VERIFIED</span>
                  </div>
                </div>
              </ReticleCard>
            </div>
          </div>
        </div>

        {/* Comparison Summary: Traditional vs SENTINEL-X */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ReticleCard reticleVariant="alert" className="border-risk-red/30">
            <div className="flex items-center gap-2 mb-2 text-risk-red font-mono text-xs font-bold">
              <AlertTriangle className="w-4 h-4" />
              <span>TRADITIONAL INVESTIGATIVE PARADIGM</span>
            </div>
            <ul className="space-y-2 text-xs text-defense-300 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-risk-red font-mono">✕</span>
                Manual cross-checking of Excel sheets and PDFs takes 3 to 6 weeks per syndicate case.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-risk-red font-mono">✕</span>
                Critical kingpins insulate themselves through 4–5 intermediaries and remain invisible in flat spreadsheets.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-risk-red font-mono">✕</span>
                Reactive investigation begins only after an organized crime incident has occurred.
              </li>
            </ul>
          </ReticleCard>

          <ReticleCard reticleVariant="cyan" className="border-cyan/30">
            <div className="flex items-center gap-2 mb-2 text-cyan font-mono text-xs font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>THE SENTINEL-X DEFENSE-GRADE ADVANTAGE</span>
            </div>
            <ul className="space-y-2 text-xs text-defense-300 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-cyan font-mono">✓</span>
                Sub-second graph queries uncover multi-tier connections across disparate databases instantaneously.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan font-mono">✓</span>
                Betweenness centrality algorithms expose kingpins even if they never communicate directly with foot soldiers.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan font-mono">✓</span>
                Pre-incident risk alerts trigger when coordinated operational precursors are detected across feeds.
              </li>
            </ul>
          </ReticleCard>
        </div>
      </div>
    </section>
  );
};
