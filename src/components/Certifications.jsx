import React, { useState, useEffect } from 'react';
import { 
  Award, 
  Cloud, 
  Server, 
  ExternalLink, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  ZoomIn, 
  X,
  ShieldCheck
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  const getIcon = (type) => {
    switch (type) {
      case 'cloud':
        return <Cloud className="w-5 h-5 text-sky-400" />;
      case 'server':
        return <Server className="w-5 h-5 text-sky-400" />;
      default:
        return <Award className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="certifications" className="py-20 border-b border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Accreditations & Badges
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cloud & Professional Certifications
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-2 max-w-2xl leading-relaxed">
            Formal cloud engineering and professional competency credentials with verifiable digital badges on Credly.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#111827] rounded-2xl border border-[#1E293B] overflow-hidden hover:border-sky-500/50 transition-all duration-200 flex flex-col justify-between group shadow-lg"
            >
              {/* Certificate Image Preview Banner */}
              <div 
                onClick={() => setSelectedCert(cert)}
                className="relative aspect-[16/11] bg-[#0B0F17] overflow-hidden border-b border-[#1E293B] cursor-pointer"
                title="Click to enlarge certificate"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs backdrop-blur-[2px]">
                  <ZoomIn className="w-4 h-4 text-sky-400" />
                  <span>Click to Enlarge</span>
                </div>
                
                {/* Issuer Badge Top Left */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/80 border border-white/10 text-white text-[11px] font-semibold backdrop-blur-sm flex items-center gap-1.5 shadow-md">
                  {getIcon(cert.iconType)}
                  <span>{cert.issuer}</span>
                </div>

                {/* Verification Pill Top Right */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-sky-500/90 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-slate-950" />
                  <span>Credly</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-sky-400 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Metadata Chips: Hours & Date */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#0B0F17] border border-[#1E293B] text-sky-400">
                      <Clock className="w-3 h-3" />
                      {cert.hours}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#0B0F17] border border-[#1E293B] text-slate-400">
                      <Calendar className="w-3 h-3" />
                      Issued {cert.issuedOn}
                    </span>
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    {cert.proof}
                  </p>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-[#1E293B] flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="flex-1 py-2 px-3 rounded-xl bg-[#0B0F17] hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-[#1E293B] hover:border-slate-600 transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    <ZoomIn className="w-3.5 h-3.5 text-slate-400" />
                    <span>Preview</span>
                  </button>

                  <a
                    href={cert.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-sky-500/10 hover:bg-sky-500 hover:text-slate-950 text-sky-400 text-xs font-bold border border-sky-500/30 hover:border-sky-500 transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    <span>Verify Credly</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="bg-[#111827] border border-[#1E293B] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#1E293B] bg-[#0B0F17]">
              <div>
                <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                  {selectedCert.issuer}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="w-9 h-9 rounded-xl bg-[#111827] border border-[#1E293B] text-slate-400 hover:text-white hover:border-slate-500 flex items-center justify-center transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="p-4 sm:p-6 overflow-y-auto flex items-center justify-center bg-[#070A0F]">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-h-[60vh] w-auto rounded-lg border border-[#1E293B] shadow-2xl object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-[#1E293B] bg-[#0B0F17] flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slate-400">
                <span className="text-slate-300 font-semibold">{selectedCert.hours}</span> • Issued on {selectedCert.issuedOn}
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Close
                </button>
                <a
                  href={selectedCert.credlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-all shadow-sm"
                >
                  <span>Verify on Credly</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}