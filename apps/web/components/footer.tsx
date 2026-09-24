'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Terminal, ArrowUp, Github, Disc as Discord, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-defense-950 border-t border-defense-800 text-defense-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Prototype Framing */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-defense-850 border border-cyan/40 flex items-center justify-center text-cyan">
                <Shield className="w-4 h-4 text-cyan" />
              </div>
              <span className="font-mono text-base font-bold tracking-wider text-white">
                SENTINEL<span className="text-cyan">-X</span>
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-defense-850 border border-defense-750 text-cyan">
                v1.0.4-PROTOTYPE
              </span>
            </div>

            <p className="text-defense-400 font-sans text-xs leading-relaxed max-w-md">
              AI-Powered Criminal Network Analysis Platform. Engineered as an investigative decision-support
              prototype for NCRB/MHA-style challenges, utilizing computer vision, NLP entity resolution,
              and graph analytics to map complex criminal syndicates.
            </p>

            {/* Prototype Notice Alert */}
            <div className="p-3 bg-defense-900 border border-defense-800 rounded text-[11px] text-defense-300 font-sans leading-normal">
              <strong className="text-cyan font-mono block mb-0.5">ACADEMIC & HACKATHON RESEARCH SPECIFICATION:</strong>
              This project is a functional architectural demonstration developed for investigative workflow evaluation.
              All data schemas, entities, and synthetic surveillance streams are simulated to showcase platform capabilities.
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              SYSTEM MODULES
            </div>
            <ul className="space-y-2 text-defense-400">
              <li>
                <a href="#problem" className="hover:text-cyan transition-colors">
                  / Problem Analysis
                </a>
              </li>
              <li>
                <a href="#pipeline" className="hover:text-cyan transition-colors">
                  / 5-Stage Pipeline
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-cyan transition-colors">
                  / OpenCV & NLP Features
                </a>
              </li>
              <li>
                <a href="#dashboard" className="hover:text-cyan transition-colors">
                  / Console Interface
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-cyan transition-colors">
                  / Governance & Ethics
                </a>
              </li>
              <li>
                <a href="#tech-stack" className="hover:text-cyan transition-colors">
                  / Architecture Specs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Research & Security Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              GOVERNANCE & STANDARDS
            </div>
            <ul className="space-y-2 text-defense-400">
              <li className="flex items-center gap-1.5 hover:text-cyan transition-colors cursor-pointer">
                <span>NCRB CCTNS Schema Format</span>
              </li>
              <li className="flex items-center gap-1.5 hover:text-cyan transition-colors cursor-pointer">
                <span>Indian Evidence Act Sec 65B</span>
              </li>
              <li className="flex items-center gap-1.5 hover:text-cyan transition-colors cursor-pointer">
                <span>DPDP Act Alignment</span>
              </li>
              <li className="flex items-center gap-1.5 hover:text-cyan transition-colors cursor-pointer">
                <span>Human-in-the-Loop Protocol</span>
              </li>
              <li className="flex items-center gap-1.5 hover:text-cyan transition-colors cursor-pointer">
                <span>Air-Gapped Node Deployment</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-defense-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 text-defense-500 text-[11px]">
            <span>© 2026 SENTINEL-X INTELLIGENCE SYSTEMS</span>
            <span>·</span>
            <span>REST API PORT: 5000</span>
            <span>·</span>
            <span className="text-cyan">STATUS: OPERATIONAL (MOCK/LIVE MONGO)</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded bg-defense-900 border border-defense-750 hover:border-cyan/50 text-defense-300 hover:text-white transition-all text-[11px]"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan" />
          </button>
        </div>
      </div>
    </footer>
  );
};
