import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SENTINEL-X | AI Criminal Network Analysis & Surveillance Intelligence',
  description:
    'National-security-grade AI intelligence platform combining real-time computer vision (OpenCV), NLP entity extraction, and multi-modal graph analytics to uncover hidden criminal syndicates and surface proactive risk alerts.',
  keywords: [
    'AI criminal network analysis',
    'OpenCV investigation platform',
    'NCRB intelligence system',
    'graph analytics law enforcement',
    'computer vision surveillance',
    'CDR analysis platform',
    'link prediction crime',
  ],
  authors: [{ name: 'SENTINEL-X Intelligence Systems' }],
  openGraph: {
    title: 'SENTINEL-X — AI Criminal Network Analysis Platform',
    description:
      'National-security-grade investigative intelligence platform with real-time OpenCV tracking, multi-hop graph analytics, and explainable human-in-the-loop decision support.',
    url: 'https://sentinel-x.intel',
    siteName: 'SENTINEL-X Intelligence Core',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SENTINEL-X | AI Criminal Network Analysis',
    description: 'Uncover hidden criminal syndicates with multi-modal CV, NLP, and graph analytics.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-defense-900 text-defense-100 antialiased selection:bg-cyan selection:text-defense-950 font-sans min-h-screen">
        {children}
      </body>
    </html>
  );
}
