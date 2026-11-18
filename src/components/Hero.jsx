import React, { useState } from 'react';
import { 
  ArrowDown, 
  Copy, 
  Check, 
  MapPin, 
  GraduationCap, 
  Mail, 
  Bot,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Zap,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenProjectPreview }) {
  const [copied, setCopied] = useState(false);
  const { personal, proofMetrics, caseStudies } = portfolioData;
  const flagship = caseStudies[0];

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#38BDF8', '#0EA5E9', '#FFFFFF']
      });
    } catch (err) {}

    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 border-b border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 5-Second Hook Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: Value Proposition & Identity */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs sm:text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
              </span>
              <span>{personal.statusText}</span>
            </div>

            {/* The Hook Headline: Solution-oriented, not generic */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
              {personal.hookHeadline}
            </h1>

            {/* Subheadline: Proof & Capabilities */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              Hi, I'm <strong className="text-white font-bold">{personal.name}</strong>. {personal.hookSubheadline}
            </p>

            {/* Credibility Chips */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-300 mb-8">
              <span className="px-3 py-1.5 rounded-lg bg-[#111827] border border-[#1E293B] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                {personal.location}
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#111827] border border-[#1E293B] flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
                BSIT • CIT-U
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#111827] border border-[#1E293B] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                AWS & IBM Certified
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#111827] border border-[#1E293B] flex items-center gap-1.5 text-sky-400 font-medium">
                Node.js • PostgreSQL • Ollama
              </span>
            </div>

            {/* Action Buttons (Frictionless CTAs) */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm active:scale-95 transition-all shadow-sm w-full sm:w-auto"
              >
                <span>Read Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#111827] border border-[#1E293B] hover:border-sky-500/50 text-slate-300 hover:text-white font-medium text-sm active:scale-95 transition-all w-full sm:w-auto"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-sky-400" />
                    <span className="text-sky-400 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-sky-400" />
                    <span>{personal.email}</span>
                    <Copy className="w-3.5 h-3.5 text-slate-500 ml-1" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right: Strongest Visual Above the Fold (Flagship Case Study Anchor) */}
          <div className="lg:col-span-5">
            <div className="bg-[#111827] rounded-2xl border border-[#1E293B] hover:border-sky-500/50 transition-colors p-4 sm:p-5 shadow-2xl relative overflow-hidden group">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-sky-500/10 text-sky-400 border border-sky-500/20 uppercase tracking-wide">
                  Flagship Case Study #01
                </span>
                <span className="text-xs text-slate-400">Next.js + PostgreSQL + AI</span>
              </div>

              {/* High impact screenshot */}
              <a 
                href="#skyflow"
                className="block relative aspect-video rounded-xl overflow-hidden bg-black/60 border border-[#1E293B] cursor-pointer"
              >
                <img 
                  src={flagship.heroImage} 
                  alt={flagship.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="font-bold tracking-tight">{flagship.title}</span>
                  <span className="text-sky-400 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Explore Problem & Solution →
                  </span>
                </div>
              </a>

              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                <strong className="text-slate-200">The Problem Solved:</strong> Replaced fragmented student spreadsheets and chaotic group chats with a single command center featuring automated Google Workspace sync and Gemini AI health diagnostics.
              </p>
            </div>
          </div>

        </div>

        {/* Proof & Transformation Metrics Strip */}
        <div className="mt-14 pt-10 border-t border-[#1E293B] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {proofMetrics.map((metric, idx) => (
            <div 
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-[#111827] border border-[#1E293B] hover:border-sky-500/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-sky-400 mt-1">
                {metric.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
