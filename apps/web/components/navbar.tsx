'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Radio, Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Problem', href: '#problem' },
    { label: 'Pipeline', href: '#pipeline' },
    { label: 'Capabilities', href: '#features' },
    { label: 'Live Demo', href: '#monitoring-demo' },
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Impact & Ethics', href: '#impact' },
    { label: 'Tech Stack', href: '#tech-stack' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-defense-950/95 backdrop-blur-md border-b border-defense-700/80 shadow-2xl shadow-black/60'
          : 'bg-defense-950/80 backdrop-blur-md border-b border-defense-800/60'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Emblem */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="relative w-10 h-10 rounded bg-defense-850 border border-cyan/40 flex items-center justify-center text-cyan group-hover:border-cyan transition-colors shadow-[0_0_15px_rgba(34,211,199,0.15)]">
            <Shield className="w-5 h-5 text-cyan" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan animate-ping" />
          </div>

          <div className="flex items-center gap-2.5">
            <span className="font-mono text-lg font-black tracking-widest text-white whitespace-nowrap">
              SENTINEL<span className="text-cyan">-X</span>
            </span>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 text-[10px] font-mono font-semibold tracking-wider bg-cyan/10 text-cyan border border-cyan/30 rounded whitespace-nowrap">
              NCRB SPEC
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links - Clean Single-Line Alignment */}
        <nav className="hidden xl:flex items-center gap-7 text-xs font-mono tracking-wider text-defense-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-cyan transition-colors py-2 flex items-center gap-1 group whitespace-nowrap"
            >
              <span className="text-cyan/50 group-hover:text-cyan font-bold transition-colors">/</span>
              <span className="group-hover:translate-x-0.5 transition-transform">{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Status Indicator & Primary CTA */}
        <div className="hidden sm:flex items-center gap-4 flex-shrink-0">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-defense-850/90 border border-defense-750 text-[11px] font-mono text-defense-300 whitespace-nowrap">
            <Radio className="w-3.5 h-3.5 text-cyan animate-pulse" />
            <span>NODE: ACTIVE · 12ms</span>
          </div>

          <a
            href="#contact"
            className="group relative px-5 py-2.5 text-xs font-mono font-bold tracking-wider text-defense-950 bg-cyan hover:bg-cyan-bright transition-all duration-200 rounded flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,199,0.3)] hover:shadow-[0_0_28px_rgba(34,211,199,0.5)] whitespace-nowrap"
          >
            <span>REQUEST BRIEFING</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="xl:hidden flex items-center gap-3">
          <a
            href="#contact"
            className="px-3 py-2 text-xs font-mono font-bold text-defense-950 bg-cyan rounded sm:hidden whitespace-nowrap"
          >
            DEMO
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-defense-300 hover:text-white rounded border border-defense-700 bg-defense-850 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-defense-950/98 border-b border-defense-700 px-5 pt-3 pb-6 space-y-3 font-mono text-sm shadow-2xl backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 text-defense-300 hover:text-cyan hover:bg-defense-900 rounded border-b border-defense-850 transition-colors"
            >
              <span className="text-cyan mr-2">/</span>
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 px-4 block text-xs font-bold text-defense-950 bg-cyan hover:bg-cyan-bright rounded tracking-wider transition-colors"
            >
              REQUEST BRIEFING & CLEARANCE
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
