import React from 'react';
import { GraduationCap, MapPin, Sparkles, Terminal, Heart, Zap, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function EducationAbout() {
  const { education, personal } = portfolioData;

  return (
    <section id="about" className="py-20 border-b border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4">
          Human Proof & Philosophy
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-12">
          Behind the Code: How I Actually Work
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: First-person conversational voice */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed">
            <p className="text-lg text-white font-medium">
              "{personal.humanBio.philosophy}"
            </p>

            <p>
              {personal.humanBio.story}
            </p>

            {/* Core Opinions / Distinct Personality */}
            <div className="pt-4">
              <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-sky-400" />
                Three Things That Define How I Build:
              </h4>

              <div className="space-y-3">
                {personal.humanBio.quirks.map((quirk, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#111827] border border-[#1E293B] flex items-start gap-3 text-sm text-slate-200"
                  >
                    <span className="w-5 h-5 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{quirk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Academic Credibility & CIT-U Foundation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#111827] rounded-3xl border border-[#1E293B] p-6 sm:p-7 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-[#0B0F17] border border-[#1E293B] flex items-center justify-center text-sky-400 mb-5">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-1">
                Academic Foundation
              </div>

              <h3 className="text-xl font-bold text-white leading-snug">
                {education.degree}
              </h3>

              <div className="text-slate-300 font-medium text-sm mt-1">
                {education.institution}
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-400 mt-2 mb-5">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  {education.location}
                </span>
                <span>•</span>
                <span>{education.period}</span>
              </div>

              <p className="p-4 rounded-xl bg-[#0B0F17] border border-[#1E293B] text-xs text-slate-300 leading-relaxed">
                {education.takeaway}
              </p>

              <div className="mt-5 pt-4 border-t border-[#1E293B] flex items-center justify-between text-xs text-slate-400">
                <span className="text-slate-300">Degree Status:</span>
                <span className="px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 font-bold border border-sky-500/20">
                  Graduated (BSIT)
                </span>
              </div>
            </div>

            {/* Quick Contact Prompt */}
            <div className="p-5 rounded-2xl bg-[#111827] border border-[#1E293B] flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-white">Interested in my approach?</div>
                <div className="text-xs text-slate-400 mt-0.5">Reach out directly via email.</div>
              </div>
              <a
                href="#contact"
                className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shrink-0 transition-colors"
              >
                Let's Talk
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
