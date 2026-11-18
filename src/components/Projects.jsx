import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Images, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Info
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const { projects } = portfolioData;
  const filters = ['All', 'Full Stack', 'AI & ML', 'Web App'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const openGallery = (project, startIdx = 0) => {
    setSelectedGallery(project);
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
    <section id="projects" className="py-20 border-b border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Flagship Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-2 max-w-2xl">
              Production-grade software systems demonstrating full-stack architecture, Google Workspace integrations, and private local LLM pipelines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-[#111827] p-1.5 rounded-xl border border-[#1E293B] self-start md:self-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-sky-500 text-slate-950 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-[#1E293B]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col bg-[#111827] rounded-2xl border border-[#1E293B] hover:border-sky-500/50 transition-colors overflow-hidden group"
            >
              {/* Top Hero Thumbnail if project has images */}
              {project.images && project.images.length > 0 && (
                <div 
                  className="relative aspect-video w-full overflow-hidden bg-black/50 cursor-pointer border-b border-[#1E293B]"
                  onClick={() => openGallery(project, 0)}
                >
                  <img 
                    src={project.images[0].url} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80" />
                  
                  {/* Photo count indicator */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-[#0B0F17]/90 border border-[#1E293B] text-slate-200 text-[11px] font-medium flex items-center gap-1.5">
                    <Images className="w-3.5 h-3.5 text-sky-400" />
                    <span>{project.images.length} Screenshots</span>
                  </div>
                </div>
              )}

              {/* Card Header & Badge */}
              <div className="p-6 pb-4 border-b border-[#1E293B]">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    {project.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-1">
                  {project.subtitle}
                </p>

                {/* Status Notice */}
                {project.statusNote && (
                  <div className="mt-3 p-3 rounded-xl text-xs flex items-start gap-2 bg-[#0B0F17] border border-[#1E293B] text-slate-300">
                    <Info className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                    <span className="leading-snug">{project.statusNote}</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Screenshots gallery thumbnails row */}
                  {project.images && project.images.length > 0 && (
                    <div className="mb-5">
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
                        <span>Project Screenshots:</span>
                        <button 
                          onClick={() => openGallery(project, 0)}
                          className="text-sky-400 hover:text-sky-300 text-[11px] underline"
                        >
                          View Full Gallery
                        </button>
                      </div>
                      <div className={`grid gap-1.5 ${
                        project.images.length >= 5 ? 'grid-cols-5' : project.images.length === 4 ? 'grid-cols-4' : 'grid-cols-3'
                      }`}>
                        {project.images.map((img, iIdx) => (
                          <button
                            key={iIdx}
                            onClick={() => openGallery(project, iIdx)}
                            className="relative aspect-video rounded-lg overflow-hidden border border-[#1E293B] hover:border-sky-400 transition-colors"
                            title={img.caption}
                          >
                            <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Engineering Highlights */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2.5">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Badges & Actions */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-[#1E293B]">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#0B0F17] text-slate-300 border border-[#1E293B]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2 pt-2">
                    {project.images && (
                      <button
                        onClick={() => openGallery(project, 0)}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-400 text-xs font-semibold transition-colors"
                      >
                        <Images className="w-3.5 h-3.5 text-sky-400" />
                        <span>Preview Project Screens ({project.images.length})</span>
                      </button>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-[#0B0F17] hover:bg-[#1E293B] text-slate-300 hover:text-white border border-[#1E293B] text-xs font-semibold transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code Repository</span>
                    </a>
                  </div>
                </div>
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
