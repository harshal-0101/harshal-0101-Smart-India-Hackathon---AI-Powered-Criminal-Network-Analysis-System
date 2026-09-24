'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Lock, 
  Building2, 
  User, 
  Mail, 
  FileText, 
  HelpCircle 
} from 'lucide-react';
import { ReticleCard } from './ui/reticle-card';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    agency: '',
    role: '',
    officialEmail: '',
    investigationScope: 'Cross-Jurisdiction Syndicate Mapping',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');
  const [ticketId, setTicketId] = useState('');

  const scopes = [
    'Cross-Jurisdiction Syndicate Mapping',
    'OpenCV CCTV Face & Motion Tracking',
    'Telecom CDR & Cell Tower Linkage',
    'Hawala / Money Mule Financial Trails',
    'Academic / National Security Research Evaluation',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setResponseMsg('');

    try {
      // Direct POST to Express REST API Layer
      // Next.js client interacts with the independent Node/Express backend at port 5000
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setTicketId(data.leadId || `REF-${Math.floor(100000 + Math.random() * 900000)}`);
        setResponseMsg(
          data.message || 'Briefing request submitted. Official credential verification initiated.'
        );
        // Clear form
        setFormData({
          fullName: '',
          agency: '',
          role: '',
          officialEmail: '',
          investigationScope: scopes[0],
          message: '',
        });
      } else {
        setStatus('error');
        const errDetails = data.errors
          ? data.errors.map((e: any) => e.message).join(', ')
          : data.message || 'Submission verification failed.';
        setResponseMsg(errDetails);
      }
    } catch (err: any) {
      console.error('API submission failed:', err);
      // Even if network fails, provide graceful message pointing to API service
      setStatus('error');
      setResponseMsg(
        'Could not establish connection to SENTINEL-X REST API (port 5000). Ensure the backend service is running.'
      );
    }
  };

  return (
    <section id="contact" className="py-24 bg-defense-950 border-t border-defense-800/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-defense-850 border border-defense-700 text-[11px] font-mono text-cyan mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
            <span>CREDENTIALED ACCESS BRIEFING</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-mono font-bold text-white tracking-tight mb-4">
            Request an Institutional Demonstration
          </h2>
          <p className="text-sm sm:text-base text-defense-300 font-sans leading-relaxed">
            Reserved strictly for <span className="text-cyan font-semibold">law enforcement agencies</span>,
            prosecution directorates, and accredited national security research institutions.
          </p>
        </motion.div>

        {/* Form Container */}
        <ReticleCard className="bg-defense-900/90 border-defense-750 p-6 sm:p-8 backdrop-blur-md">
          {status === 'success' ? (
            <div className="py-12 text-center flex flex-col items-center justify-center font-mono">
              <div className="w-16 h-16 rounded-full bg-cyan/20 border border-cyan/60 flex items-center justify-center text-cyan mb-4 shadow-[0_0_25px_rgba(34,211,199,0.3)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                BRIEFING REQUISITION REGISTERED
              </h3>
              <p className="text-xs text-defense-300 max-w-md font-sans mb-4">
                {responseMsg}
              </p>

              <div className="p-3 bg-defense-850 border border-defense-700 rounded text-xs text-defense-400 mb-6">
                CLEARANCE DOSSIER TICKET:{' '}
                <span className="text-cyan font-bold">{ticketId}</span>
              </div>

              <button
                onClick={() => setStatus('idle')}
                className="px-6 py-2.5 bg-defense-800 hover:bg-defense-750 text-cyan border border-cyan/40 rounded text-xs font-mono transition-colors"
              >
                SUBMIT ANOTHER REQUISITION
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === 'error' && (
                <div className="p-3 bg-risk-red/10 border border-risk-red/40 rounded flex items-center gap-3 text-xs font-mono text-risk-red">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{responseMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-mono text-defense-300 uppercase tracking-wider mb-2">
                    Investigator / Analyst Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-defense-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. ACP Rajesh Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-defense-950 border border-defense-750 focus:border-cyan rounded pl-10 pr-4 py-2.5 text-xs font-mono text-white placeholder-defense-600 focus:outline-none focus:ring-1 focus:ring-cyan transition-all"
                    />
                  </div>
                </div>

                {/* Organization / Agency */}
                <div>
                  <label className="block text-xs font-mono text-defense-300 uppercase tracking-wider mb-2">
                    Agency / Police Department *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-defense-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. State CID / Crime Branch Special Cell"
                      value={formData.agency}
                      onChange={(e) => setFormData({ ...formData, agency: e.target.value })}
                      className="w-full bg-defense-950 border border-defense-750 focus:border-cyan rounded pl-10 pr-4 py-2.5 text-xs font-mono text-white placeholder-defense-600 focus:outline-none focus:ring-1 focus:ring-cyan transition-all"
                    />
                  </div>
                </div>

                {/* Role / Rank */}
                <div>
                  <label className="block text-xs font-mono text-defense-300 uppercase tracking-wider mb-2">
                    Official Designation / Rank *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Senior Cyber Analyst / DySP"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-defense-950 border border-defense-750 focus:border-cyan rounded px-4 py-2.5 text-xs font-mono text-white placeholder-defense-600 focus:outline-none focus:ring-1 focus:ring-cyan transition-all"
                  />
                </div>

                {/* Official Email */}
                <div>
                  <label className="block text-xs font-mono text-defense-300 uppercase tracking-wider mb-2">
                    Institutional Email (.gov / .in / .org) *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-defense-500 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="analyst@police.gov.in"
                      value={formData.officialEmail}
                      onChange={(e) => setFormData({ ...formData, officialEmail: e.target.value })}
                      className="w-full bg-defense-950 border border-defense-750 focus:border-cyan rounded pl-10 pr-4 py-2.5 text-xs font-mono text-white placeholder-defense-600 focus:outline-none focus:ring-1 focus:ring-cyan transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Investigation Scope */}
              <div>
                <label className="block text-xs font-mono text-defense-300 uppercase tracking-wider mb-2">
                  Primary Investigative Scope / Ingestion Requirement *
                </label>
                <select
                  value={formData.investigationScope}
                  onChange={(e) => setFormData({ ...formData, investigationScope: e.target.value })}
                  className="w-full bg-defense-950 border border-defense-750 focus:border-cyan rounded px-4 py-2.5 text-xs font-mono text-white focus:outline-none focus:ring-1 focus:ring-cyan transition-all cursor-pointer"
                >
                  {scopes.map((s) => (
                    <option key={s} value={s} className="bg-defense-900 text-white">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message / Objectives */}
              <div>
                <label className="block text-xs font-mono text-defense-300 uppercase tracking-wider mb-2">
                  Case Scale & Evaluation Objectives (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Outline active ingestion volume, synthetic data requirements, or specific syndicate topology questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-defense-950 border border-defense-750 focus:border-cyan rounded p-4 text-xs font-mono text-white placeholder-defense-600 focus:outline-none focus:ring-1 focus:ring-cyan transition-all"
                />
              </div>

              {/* Submit Button & Security Note */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[11px] font-mono text-defense-400">
                  <Lock className="w-3.5 h-3.5 text-cyan" />
                  <span>SECURE 256-BIT ENCRYPTED REST TRANSMISSION</span>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto px-8 py-3 bg-cyan hover:bg-cyan-bright text-defense-950 font-mono font-bold text-xs tracking-wider rounded transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(34,211,199,0.3)] disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <span>PROCESSING CREDENTIALS...</span>
                  ) : (
                    <>
                      <span>TRANSMIT DEMO REQUISITION</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </ReticleCard>
      </div>
    </section>
  );
};
