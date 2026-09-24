import React from 'react';
import { Navbar } from '../components/navbar';
import { HeroSection } from '../components/hero-section';
import { ProblemSection } from '../components/problem-section';
import { PipelineSection } from '../components/pipeline-section';
import { FeaturesGrid } from '../components/features-grid';
import { DashboardPreview } from '../components/dashboard-preview';
import { MonitoringDemoSection } from '../components/monitoring-demo-section';
import { ImpactSection } from '../components/impact-section';
import { TechStackSection } from '../components/tech-stack-section';
import { ContactSection } from '../components/contact-section';
import { Footer } from '../components/footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-defense-950 text-white selection:bg-cyan selection:text-defense-950 font-sans">
      {/* Fixed Tactical Navigation */}
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Problem Section */}
        <ProblemSection />

        {/* 3. Pipeline / How It Works Section */}
        <PipelineSection />

        {/* 4. Core Capabilities & Features Grid */}
        <FeaturesGrid />

        {/* 5. Live Dashboard Preview Mockup */}
        <DashboardPreview />

        {/* 6. Live Officer Monitoring & Data Ingestion Demo */}
        <MonitoringDemoSection />

        {/* 7. Why This Matters / Impact & Ethics Section */}
        <ImpactSection />

        {/* 7. Tech Stack & Production Scale Section */}
        <TechStackSection />

        {/* 8. Official Clearance & Demo Ingestion Request */}
        <ContactSection />
      </main>

      {/* 9. Operations & Compliance Footer */}
      <Footer />
    </div>
  );
}
