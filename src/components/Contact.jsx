import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#38BDF8', '#0EA5E9', '#FFFFFF']
      });
    } catch (err) {}
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 border-b border-[#1E293B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider mb-6">
          <Mail className="w-3.5 h-3.5" />
          Direct Line
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
          Have an open role or technical challenge? Let's chat.
        </h2>

        {/* Subtitle */}
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          I am actively seeking software engineering opportunities and practical projects. Reach out straight to my inbox.
        </p>

        {/* Direct Email Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#111827] border border-[#1E293B] hover:border-sky-500/50 transition-colors shadow-2xl max-w-2xl mx-auto text-center">
          
          <div className="w-14 h-14 rounded-2xl bg-[#0B0F17] border border-[#1E293B] text-sky-400 flex items-center justify-center mx-auto mb-5 shadow-inner">
            <Mail className="w-7 h-7" />
          </div>

          <div className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
            Direct Email Address
          </div>

          <a
            href={`mailto:${personal.email}`}
            className="text-xl sm:text-3xl font-extrabold text-white hover:text-sky-400 transition-colors tracking-tight block truncate mb-6"
          >
            {personal.email}
          </a>

          {/* Action Button */}
          <div className="flex items-center justify-center">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm active:scale-95 transition-all shadow-md"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-slate-950" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-950" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Location details */}
          <div className="mt-8 pt-6 border-t border-[#1E293B] text-xs text-slate-400">
            Location: <strong className="text-white">Cebu, Philippines (Remote / Relocation)</strong>
          </div>

        </div>

      </div>
    </section>
  );
}
