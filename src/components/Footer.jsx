import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal, socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0F17] text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1E293B]">
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#111827] border border-[#1E293B] text-sky-400 flex items-center justify-center font-bold text-sm">
              DP
            </div>
            <div>
              <div className="font-bold text-white text-base tracking-tight">
                {personal.name}
              </div>
              <div className="text-xs text-slate-400">
                {personal.role} • {personal.location}
              </div>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-lg bg-[#111827] border border-[#1E293B] text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#111827] border border-[#1E293B] text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#111827] border border-[#1E293B] text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-[#111827] border border-[#1E293B] text-slate-400 hover:text-slate-950 hover:bg-sky-500 hover:border-sky-500 transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Engineered with React, Tailwind CSS & Antigravity
          </div>
        </div>
      </div>
    </footer>
  );
}
