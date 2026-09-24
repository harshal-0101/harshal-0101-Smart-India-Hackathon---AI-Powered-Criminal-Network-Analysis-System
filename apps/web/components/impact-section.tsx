'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Scale, 
  Lock, 
  FileCheck, 
  Clock, 
  TrendingUp, 
  Layers 
} from 'lucide-react';
import { ReticleCard } from './ui/reticle-card';
import { StatCounter } from './ui/stat-counter';

export const ImpactSection: React.FC = () => {
  const metrics = [
    {
      value: 82,
      suffix: '%',
      label: 'Investigation Cycle Reduction',
      desc: 'Compresses multi-month syndicate mapping from manual phone records into hours.',
    },
    {
      value: 100,
      suffix: '%',
      label: 'Human-in-the-Loop Verification',
      desc: 'Zero automated arrests. Every recommendation requires verified supervisory sign-off.',
    },
    {
      value: 4.2,
      suffix: 'x',
      decimals: 1,
      label: 'Cross-Jurisdiction Leads Surfaced',
      desc: 'Connects disparate state police FIR databases through unified entity resolution.',
    },
    {
      value: 180,
      suffix: 'ms',
      label: 'Average Graph Query Latency',
      desc: 'Traverses up to 6 relational degrees in sub-second timeframes over millions of nodes.',
    },
  ];

  return (
    <section id="impact" className="py-24 bg-defense-950 border-t border-defense-800/80 relative">
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
            <span>OPERATIONAL IMPACT & CONSTITUTIONAL SAFEGUARDS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-mono font-bold text-white tracking-tight mb-4">
            Early Interdiction with Responsible Governance
          </h2>
          <p className="text-sm sm:text-base text-defense-300 font-sans leading-relaxed">
            SENTINEL-X is built strictly as an <span className="text-cyan font-semibold">investigative decision support accelerator</span>, 
            not an autonomous policing black-box. Every flag provides an auditable evidentiary trail.
          </p>
        </motion.div>

        {/* Animated Impact Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
            >
              <ReticleCard className="bg-defense-900/90 border-defense-750 p-5 text-center flex flex-col justify-between h-full">
                <div>
                  <div className="font-mono text-3xl sm:text-4xl font-extrabold text-cyan mb-2">
                    <StatCounter
                      value={metric.value}
                      suffix={metric.suffix}
                      decimals={metric.decimals || 0}
                    />
                  </div>
                  <div className="font-mono text-xs font-bold text-white mb-2">
                    {metric.label}
                  </div>
                </div>
                <p className="text-[11px] text-defense-400 leading-relaxed font-sans mt-2 pt-2 border-t border-defense-800">
                  {metric.desc}
                </p>
              </ReticleCard>
            </motion.div>
          ))}
        </div>

        {/* Three Governance Pillars (Ethical, Legal & Audit Integrity) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ReticleCard className="bg-defense-850/80 border-defense-750">
            <div className="w-10 h-10 rounded bg-defense-900 border border-defense-700 flex items-center justify-center text-cyan mb-4">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="font-mono text-base font-bold text-white mb-2">
              Decision Support vs Predictive Arrests
            </h3>
            <p className="text-xs text-defense-300 leading-relaxed font-sans">
              Algorithms highlight behavioral anomalies and suggest investigation leads. The platform cannot issue warrants, 
              order arrests, or take automated actions without human investigator authorization.
            </p>
            <div className="mt-4 pt-3 border-t border-defense-800 text-[10px] font-mono text-defense-400">
              FRAMEWORK: HUMAN-IN-THE-LOOP MANDATE
            </div>
          </ReticleCard>

          <ReticleCard className="bg-defense-850/80 border-defense-750">
            <div className="w-10 h-10 rounded bg-defense-900 border border-defense-700 flex items-center justify-center text-cyan mb-4">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="font-mono text-base font-bold text-white mb-2">
              Tamper-Proof Evidentiary Audit Trail
            </h3>
            <p className="text-xs text-defense-300 leading-relaxed font-sans">
              Every query, entity linkage, and officer hypothesis is timestamped and cryptographically signed, 
              meeting the Indian Evidence Act Section 65B electronic record admissibility requirements.
            </p>
            <div className="mt-4 pt-3 border-t border-defense-800 text-[10px] font-mono text-defense-400">
              LEGALITY: SEC 65B COMPLIANT DOSSIER
            </div>
          </ReticleCard>

          <ReticleCard className="bg-defense-850/80 border-defense-750">
            <div className="w-10 h-10 rounded bg-defense-900 border border-defense-700 flex items-center justify-center text-cyan mb-4">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-mono text-base font-bold text-white mb-2">
              Data Protection & Privacy Safeguards
            </h3>
            <p className="text-xs text-defense-300 leading-relaxed font-sans">
              Role-based access control (RBAC), multi-tenant compartmentalization across crime branches, and strict data 
              retention schedules aligned with India&apos;s Digital Personal Data Protection (DPDP) Act.
            </p>
            <div className="mt-4 pt-3 border-t border-defense-800 text-[10px] font-mono text-defense-400">
              PRIVACY: DPDP ALIGNED & AIR-GAPPED READY
            </div>
          </ReticleCard>
        </div>
      </div>
    </section>
  );
};
