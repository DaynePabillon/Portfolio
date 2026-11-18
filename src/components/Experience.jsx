import React from 'react';
import { Briefcase, Building2, MapPin, Calendar, Award, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 border-b border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Career Milestone
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-2 max-w-2xl">
            Real-world international remote experience delivering web modernization, performance optimization, and cross-border digital initiatives.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#111827] rounded-2xl border border-[#1E293B] p-6 sm:p-8 hover:border-sky-500/40 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold">
                      {exp.type}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 bg-[#0B0F17] px-2.5 py-1 rounded-full border border-[#1E293B]">
                      <MapPin className="w-3 h-3 text-sky-400" />
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-2 mt-1 text-sky-400 font-medium text-sm">
                    <Building2 className="w-4 h-4 text-sky-400" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 bg-[#0B0F17] px-3.5 py-1.5 rounded-xl border border-[#1E293B] self-start">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Commendation Highlight Card */}
              {exp.commendation && (
                <div className="mb-6 p-4 rounded-xl bg-[#0B0F17] border border-[#1E293B] text-slate-200 flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0 mt-0.5 border border-sky-500/20">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-0.5">
                      Team Leader Commendation
                    </div>
                    <blockquote className="text-xs sm:text-sm italic text-slate-300 font-medium leading-relaxed">
                      "{exp.commendation.replace(/^Commended by the Team Leader as /, '').replace(/\.$/, '')}"
                    </blockquote>
                  </div>
                </div>
              )}

              {/* Bullet Points */}
              <div className="space-y-3 mb-6">
                {exp.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-slate-300 text-sm leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-[#1E293B] flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md text-xs font-medium bg-[#0B0F17] text-slate-300 border border-[#1E293B]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
