'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowDown, 
  Database, 
  Cpu, 
  GitFork, 
  Activity, 
  LayoutDashboard, 
  Check 
} from 'lucide-react';
import { ReticleCard } from './ui/reticle-card';

export const PipelineSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Data Ingestion',
      subtitle: 'Multi-Source Streams',
      desc: 'Ingests RTSP CCTV video, police FIR PDFs, CDR dumps, and banking transaction files.',
      icon: Database,
      tag: 'STREAM INTAKE',
      meta: 'RTSP / Kafka / S3',
    },
    {
      step: '02',
      title: 'AI Processing',
      subtitle: 'Vision & NLP Extraction',
      desc: 'OpenCV detects faces, tracklets, and motion vectors; transformer NLP parses entities & aliases.',
      icon: Cpu,
      tag: 'CV + TRANSFORMER',
      meta: 'OpenCV / spaCy / ONNX',
    },
    {
      step: '03',
      title: 'Graph Knowledge Core',
      subtitle: 'Relationship Mapping',
      desc: 'Maps multi-modal entities into a unified graph with weighted temporal and spatial edges.',
      icon: GitFork,
      tag: 'ONTOLOGY ENGINE',
      meta: 'Neo4j Property Graph',
    },
    {
      step: '04',
      title: 'Algorithmic Analytics',
      subtitle: 'Centrality & Link Scoring',
      desc: 'Executes PageRank, betweenness centrality, and link prediction to surface hidden syndicate leaders.',
      icon: Activity,
      tag: 'GRAPH ALGORITHMS',
      meta: 'Graph Data Science (GDS)',
    },
    {
      step: '05',
      title: 'Investigator Dashboard',
      subtitle: 'Human Decision Support',
      desc: 'Presents verified, explainable risk alerts with complete evidentiary audit trail for officer review.',
      icon: LayoutDashboard,
      tag: 'OPERATIONS CONSOLE',
      meta: 'Next.js / WebSocket',
    },
  ];

  return (
    <section id="pipeline" className="py-24 bg-defense-900 border-t border-defense-800/80 relative">
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
            <span>END-TO-END ARCHITECTURE PIPELINE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-mono font-bold text-white tracking-tight mb-4">
            From Sensor Feeds to Verified Operational Intel
          </h2>
          <p className="text-sm sm:text-base text-defense-300 font-sans leading-relaxed">
            A 5-stage sovereign intelligence pipeline engineered for high-throughput law enforcement workflows.
          </p>
        </motion.div>

        {/* Steps Grid / Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={item.step} className="relative flex flex-col">
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="h-full"
                >
                  <ReticleCard className="h-full flex flex-col justify-between bg-defense-850/90 hover:border-cyan/50 p-4 sm:p-5">
                    <div>
                      {/* Step index & badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-lg font-bold text-cyan">
                          {item.step}
                        </span>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-defense-900 text-defense-400 border border-defense-750">
                          {item.tag}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="w-9 h-9 rounded bg-defense-800 border border-defense-700 flex items-center justify-center text-cyan mb-3 group-hover:border-cyan/50 group-hover:text-cyan-bright transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="font-mono text-sm font-bold text-white mb-0.5">
                        {item.title}
                      </h3>
                      <div className="text-[11px] font-mono text-cyan/90 mb-2">
                        {item.subtitle}
                      </div>

                      {/* Description */}
                      <p className="text-xs text-defense-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Metadata Footer */}
                    <div className="mt-4 pt-3 border-t border-defense-800 flex items-center justify-between text-[10px] font-mono text-defense-500">
                      <span>CORE:</span>
                      <span className="text-defense-300">{item.meta}</span>
                    </div>
                  </ReticleCard>
                </motion.div>

                {/* Arrow Connector between steps (Desktop: Right arrow, Mobile: Down arrow) */}
                {!isLast && (
                  <>
                    <div className="hidden md:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-defense-900 border border-defense-700 items-center justify-center text-cyan">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                    <div className="md:hidden flex justify-center py-2 text-cyan">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Real-Time Processing SLA Benchmark Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 p-4 rounded bg-defense-850/60 border border-defense-750 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs"
        >
          <div className="flex items-center gap-2 text-defense-300">
            <span className="w-2 h-2 rounded-full bg-cyan" />
            <span className="font-bold text-white">PIPELINE SLA SPECIFICATION:</span>
            <span className="text-defense-400 hidden sm:inline">Stream-to-Knowledge latency profile</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-[11px]">
            <div>
              <span className="text-defense-500 mr-1.5">CV FRAME RATE:</span>
              <span className="text-cyan font-bold">60 FPS / Stream</span>
            </div>
            <div>
              <span className="text-defense-500 mr-1.5">GRAPH HOP SPEED:</span>
              <span className="text-cyan font-bold">&lt;140ms (5-Hop)</span>
            </div>
            <div>
              <span className="text-defense-500 mr-1.5">ALERT REASONING:</span>
              <span className="text-cyan font-bold">100% Deterministic</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
