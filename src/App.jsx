import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import EducationAbout from './components/EducationAbout';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivateInsights from './components/PrivateInsights';

const SECRET_HASH = '#/dp-vault-94k';

export default function App() {
  const [isPrivateView, setIsPrivateView] = useState(
    () => typeof window !== 'undefined' && window.location.hash === SECRET_HASH
  );

  useEffect(() => {
    const handleHashChange = () => {
      setIsPrivateView(window.location.hash === SECRET_HASH);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    // Do not track admin's own visits to the secret route, and only track once per browser session
    if (isPrivateView) return;
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('dp_v_sent')) return;

    sessionStorage.setItem('dp_v_sent', '1');

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown';
    const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
    const device = isMobile ? 'Mobile' : 'Desktop';
    const referrer = document.referrer || 'Direct';

    fetch('/api/visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ timezone, device, referrer }),
      keepalive: true,
    }).catch(() => {});
  }, [isPrivateView]);

  if (isPrivateView) {
    return (
      <PrivateInsights
        onExit={() => {
          window.location.hash = '';
          setIsPrivateView(false);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-slate-950">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CaseStudies />
        <Certifications />
        <Skills />
        <EducationAbout />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
