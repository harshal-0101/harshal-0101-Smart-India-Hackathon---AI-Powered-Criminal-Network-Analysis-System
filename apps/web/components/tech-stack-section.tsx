'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Database, 
  Server, 
  Terminal, 
  GitBranch, 
  Zap, 
  Shield, 
  Code2 
} from 'lucide-react';
import { ReticleCard } from './ui/reticle-card';

export const TechStackSection: React.FC = () => {
  const stack = [
    {
      name: 'OpenCV & Deep Learning',
      category: 'COMPUTER VISION',
      desc: 'Real-time CCTV face detection, Re-ID feature embeddings, and Kalman-filter motion vector tracking at 60 FPS.',
      spec: 'YOLOv9 + ONNX Runtime',
      icon: Cpu,
    },
    {
      name: 'Neo4j Enterprise Graph',
      category: 'RELATIONSHIP KNOWLEDGE CORE',
      desc: 'Native property graph engine executing multi-hop Cypher queries, PageRank, and betweenness centrality over millions of nodes.',
      spec: '<180ms Multi-Hop Traversals',
      icon: GitBranch,
    },
    {
      name: 'Next.js 14 App Router',
      category: 'OPERATIONS FRONTEND',
      desc: 'High-performance React Server Components, zero-compromise responsive layout, and Framer Motion hardware-accelerated telemetry.',
      spec: 'Sub-second UI Rendering',
      icon: Code2,
    },
    {
      name: 'Node.js & Express REST Layer',
      category: 'API & INTAKE MICROSERVICE',
      desc: 'Decoupled high-concurrency event-driven REST architecture for secure agency lead ingestion, webhooks, and audit logging.',
      spec: 'Horizontally Scalable Cluster',
      icon: Server,
    },
    {
      name: 'MongoDB (Mongoose)',
      category: 'CONTENT & LEAD CAPTURE',
      desc: 'Resilient schema-validated storage for case study metadata, agency credentials, and public-facing investigative dispatches.',
      spec: 'Document Schema Validation',
      icon: Database,
    },
    {
      name: 'Hugging Face & spaCy NLP',
      category: 'ENTITY EXTRACTION',
      desc: 'Fine-tuned multilingual transformer models for named entity recognition (NER) across Indic police FIR terminology.',
      spec: '96.2% Precision on Case Files',
      icon: Zap,
    },
  ];

  const scaleSpecs = [
    { label: 'CONCURRENT VIDEO STREAMS', value: '64+ RTSP Feeds / Node' },
    { label: 'GRAPH TRAVERSAL CAPACITY', value: '50,000,000+ Relationships' },
    { label: 'DEPLOYMENT TOPOLOGY', value: 'On-Premises / Air-Gapped Cloud' },
    { label: 'COMPLIANCE BENCHMARK', value: 'NCRB CCTNS Compatible' },
  ];

  return (
    <section id="tech-stack" className="py-24 bg-defense-900 border-t border-defense-800/80 relative">
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
            <span>SOVEREIGN ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-mono font-bold text-white tracking-tight mb-4">
            Engineered for National-Scale Throughput
          </h2>
          <p className="text-sm sm:text-base text-defense-300 font-sans leading-relaxed">
            Built on proven, battle-tested open standards. No brittle proprietary dependencies — deployable on sovereign
            cloud or completely air-gapped agency infrastructure.
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stack.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <ReticleCard className="bg-defense-850/90 border-defense-750 p-5 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded bg-defense-900 border border-defense-700 flex items-center justify-center text-cyan">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-defense-900 text-defense-400 border border-defense-750">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="font-mono text-base font-bold text-white mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs text-defense-300 leading-relaxed font-sans mb-4">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-defense-800 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-defense-500">BENCHMARK:</span>
                    <span className="text-cyan font-semibold">{item.spec}</span>
                  </div>
                </ReticleCard>
              </motion.div>
            );
          })}
        </div>

        {/* Specifications Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-5 rounded bg-defense-950/80 border border-defense-750 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs"
        >
          {scaleSpecs.map((spec) => (
            <div key={spec.label} className="border-l-2 border-cyan/60 pl-3">
              <div className="text-[10px] text-defense-400 uppercase">{spec.label}</div>
              <div className="text-white font-bold text-sm mt-0.5">{spec.value}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
