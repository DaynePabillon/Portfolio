import React, { useState } from 'react';
import { 
  Images, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  AlertCircle,
  Wrench,
  CheckCircle2,
  Award,
  ArrowRight,
  ExternalLink,
  Info
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function CaseStudies() {
  const { caseStudies } = portfolioData;
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const openGallery = (study, startIdx = 0) => {
    setSelectedGallery(study);
    setCurrentImageIdx(startIdx);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    setCurrentImageIdx(0);
  };

  const nextImage = () => {
    if (selectedGallery && selectedGallery.images) {
      setCurrentImageIdx((prev) => (prev + 1) % selectedGallery.images.length);
    }
  };

  const prevImage = () => {
    if (selectedGallery && selectedGallery.images) {
      setCurrentImageIdx((prev) => 
        (prev - 1 + selectedGallery.images.length) % selectedGallery.images.length
      );
    }
  };

  return (
    <section id="case-studies" className="py-20 border-b border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider mb-3">
            Case Studies Over Galleries
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Solve Problems: The PAR Method
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3 leading-relaxed">
            Anyone can show a finished interface. What matters is the architectural thinking: the <strong>Problem</strong> that existed, the specific <strong>Action</strong> taken, and the measurable <strong>Result</strong> delivered.
          </p>
        </div>

        {/* Case Studies Stack */}
        <div className="space-y-16">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              id={study.id}
              className="bg-[#111827] rounded-3xl border border-[#1E293B] overflow-hidden hover:border-sky-500/40 transition-colors"
            >
              {/* Header Strip */}
              <div className="p-6 sm:p-8 border-b border-[#1E293B] bg-[#0F172A]/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs font-bold text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded border border-sky-500/20">
                      CASE STUDY {study.number}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {study.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {study.title}
                  </h3>
                  <p className="text-sm sm:text-base text-sky-400 font-medium mt-1">
                    {study.tagline}
                  </p>
                </div>

                {study.githubUrl && (
                  <div className="flex items-center gap-3 shrink-0">
                    <a
                      href={study.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B0F17] hover:bg-[#1E293B] text-slate-200 border border-[#1E293B] text-xs font-semibold transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Code Repository</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Case Study Content Grid */}
              <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: PAR Story Breakdown */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* 1. The Problem */}
                  <div className="p-5 rounded-2xl bg-[#0B0F17] border border-[#1E293B]">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
                      <AlertCircle className="w-4 h-4 text-rose-400" />
                      The Problem (Before)
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {study.par.problem}
                    </p>
                  </div>

                  {/* 2. The Action */}
                  <div className="p-5 rounded-2xl bg-[#0B0F17] border border-[#1E293B]">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
                      <Wrench className="w-4 h-4 text-sky-400" />
                      The Engineering Action (Architecture)
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {study.par.action}
                    </p>
                  </div>

                  {/* 3. The Result */}
                  <div className="p-5 rounded-2xl bg-[#0B0F17] border border-sky-500/30">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      The Tangible Result (After)
                    </div>
                    <p className="text-sm text-slate-200 leading-relaxed font-medium">
                      {study.par.result}
                    </p>
                  </div>

                  {/* Testimonial / Social Proof (if present) */}
                  {study.testimonial && (
                    <div className="p-5 rounded-2xl bg-sky-500/5 border border-sky-500/20 text-slate-200">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
                        <Award className="w-4 h-4" />
                        Verified Leadership Proof
                      </div>
                      <blockquote className="text-sm italic text-slate-200 font-medium leading-relaxed mb-3">
                        "{study.testimonial.quote}"
                      </blockquote>
                      <div className="text-xs text-slate-400">
                        Verified by <strong className="text-white">{study.testimonial.author}</strong>, {study.testimonial.company}
                      </div>
                    </div>
                  )}

                  {/* Technologies Used */}
                  <div className="pt-2">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                      Core Stack & Infrastructure:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-[#0B0F17] text-slate-300 border border-[#1E293B]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right Column: Visual Proof & Screenshots */}
                <div className="lg:col-span-5">
                  {study.images && study.images.length > 0 ? (
                    <div className="space-y-4">
                      {/* Main Featured Interactive Screen */}
                      <div 
                        onClick={() => openGallery(study, 0)}
                        className="relative aspect-video rounded-2xl overflow-hidden bg-black/60 border border-[#1E293B] cursor-pointer group/preview"
                      >
                        <img 
                          src={study.images[0].url} 
                          alt={study.images[0].caption}
                          className="w-full h-full object-cover object-top opacity-90 group-hover/preview:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent opacity-80" />
                        
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                          <span className="font-semibold text-slate-200 truncate pr-2">
                            {study.images[0].caption}
                          </span>
                          <span className="px-2.5 py-1 rounded-lg bg-sky-500 text-slate-950 font-bold shrink-0 flex items-center gap-1 shadow-md">
                            <Images className="w-3.5 h-3.5" />
                            Zoom ({study.images.length})
                          </span>
                        </div>
                      </div>

                      {/* Thumbnail row */}
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                          <span className="font-semibold">All UI & Architecture Screens:</span>
                          <button
                            onClick={() => openGallery(study, 0)}
                            className="text-sky-400 hover:text-sky-300 underline"
                          >
                            Click to View All
                          </button>
                        </div>
                        <div className={`grid gap-2 ${
                          study.images.length >= 6 ? 'grid-cols-6' : study.images.length === 5 ? 'grid-cols-5' : study.images.length === 4 ? 'grid-cols-4' : 'grid-cols-3'
                        }`}>
                          {study.images.map((img, iIdx) => (
                            <button
                              key={iIdx}
                              onClick={() => openGallery(study, iIdx)}
                              className="relative aspect-video rounded-xl overflow-hidden border border-[#1E293B] hover:border-sky-400 transition-colors"
                              title={img.caption}
                            >
                              <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Status Note */}
                      {study.statusNote && (
                        <div className="p-3.5 rounded-xl bg-[#0B0F17] border border-[#1E293B] text-xs text-slate-300 flex items-start gap-2.5">
                          <Info className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{study.statusNote}</span>
                        </div>
                      )}

                    </div>
                  ) : (
                    /* Fallback visual card for SSGC remote work */
                    <div className="p-6 rounded-2xl bg-[#0B0F17] border border-[#1E293B] flex flex-col justify-between h-full space-y-4">
                      <div>
                        <div className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">
                          Engagement Overview
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">
                          500 Hours Remote Delivery
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed mb-4">
                          Operated as an autonomous remote web engineer for The SSGC Group in Singapore, collaborating across time zones to ship production improvements.
                        </p>
                        <div className="space-y-2 text-xs text-slate-300">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                            <span>Modernized legacy WordPress HTML structures</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                            <span>Executed on-page SEO across target courses</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                            <span>Maintained rigorous international deliverables</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-[#1E293B] flex items-center justify-between text-xs text-slate-400">
                        <span>Period: <strong className="text-white">Aug to Nov 2026</strong></span>
                        <span className="text-sky-400 font-semibold">500 Hours Complete</span>
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* Frictionless Case Study Footer CTA */}
              <div className="p-5 bg-[#0B0F17] border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <span className="text-slate-400">
                  Have a similar platform challenge or AI integration project?
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-semibold transition-colors"
                >
                  <span>Let's talk about building a solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Fullscreen Screenshot Gallery Lightbox */}
      {selectedGallery && (
        <div className="fixed inset-0 z-50 bg-[#0B0F17]/95 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
          <div className="relative max-w-5xl w-full flex flex-col items-center">
            
            {/* Modal Header */}
            <div className="w-full flex items-center justify-between pb-4 border-b border-[#1E293B] mb-4 text-white">
              <div>
                <h3 className="font-bold text-lg sm:text-xl text-white">
                  {selectedGallery.title}
                </h3>
                <p className="text-xs text-sky-400 mt-0.5">
                  {selectedGallery.images[currentImageIdx].caption} ({currentImageIdx + 1} of {selectedGallery.images.length})
                </p>
              </div>
              <button
                onClick={closeGallery}
                className="p-2 rounded-xl bg-[#1E293B] hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image Display with Navigation */}
            <div className="relative w-full aspect-video max-h-[70vh] bg-black rounded-2xl overflow-hidden border border-[#1E293B] flex items-center justify-center shadow-2xl">
              <img
                src={selectedGallery.images[currentImageIdx].url}
                alt={selectedGallery.images[currentImageIdx].caption}
                className="w-full h-full object-contain"
              />

              {/* Prev / Next Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#111827]/90 text-white hover:bg-sky-500 hover:text-slate-950 transition-colors border border-[#1E293B]"
                title="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#111827]/90 text-white hover:bg-sky-500 hover:text-slate-950 transition-colors border border-[#1E293B]"
                title="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnail Navigation Strip */}
            <div className="flex gap-2.5 mt-4 overflow-x-auto max-w-full pb-2">
              {selectedGallery.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIdx(idx)}
                  className={`relative w-20 sm:w-28 aspect-video rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                    currentImageIdx === idx
                      ? 'border-sky-400 scale-105'
                      : 'border-[#1E293B] opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

