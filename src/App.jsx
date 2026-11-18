import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import EducationAbout from './components/EducationAbout';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
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
    </div>
  );
}
