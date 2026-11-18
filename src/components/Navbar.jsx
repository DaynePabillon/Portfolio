import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0B0F17]/95 backdrop-blur-md border-b border-[#1E293B] shadow-md py-3.5'
          : 'bg-[#0B0F17] py-5 border-b border-[#1E293B]/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-3 transition-transform duration-150 active:scale-95"
          >
            <div className="w-10 h-10 rounded-xl bg-[#111827] border border-[#1E293B] group-hover:border-sky-500/50 flex items-center justify-center font-bold text-base text-sky-400 transition-colors">
              DP
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white tracking-tight text-base group-hover:text-sky-400 transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Junior Backend & AI Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#111827] p-1.5 rounded-xl border border-[#1E293B]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-[#1E293B] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm active:scale-95 transition-all shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-[#111827] border border-[#1E293B] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-[#111827] rounded-2xl border border-[#1E293B] shadow-2xl space-y-2 animate-in fade-in duration-150">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-[#1E293B] rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-[#1E293B]">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block py-2.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-sm font-semibold transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
