import React from 'react';
import { 
  BadgeCheck, 
  Terminal, 
  Award, 
  ShieldCheck, 
  BookOpen, 
  Database, 
  Cpu, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

const CATEGORY_ICONS = {
  'Cloud & AI': Cpu,
  'Machine Learning': Award,
  'Cybersecurity': ShieldCheck,
  'Programming': BookOpen,
  'Systems & DSA': Terminal,
  'Database & Querying': Database
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden border-t border-slate-800/80 bg-slate-950/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>06 // CONTINUOUS LEARNING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Certifications</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Verified credentials earned across cloud engineering, artificial intelligence, security, programming languages, and database querying.
          </p>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 mt-2">
            <BadgeCheck className="w-4 h-4 text-cyan-400" />
            <span>Completed 10+ Technical Certifications & Specializations</span>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {CERTIFICATIONS_DATA.map((cert, idx) => {
            const Icon = CATEGORY_ICONS[cert.category] || BadgeCheck;

            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-slate-900/80 border border-slate-800 p-6 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-cyan-500/5 backdrop-blur-sm"
              >
                <div>
                  {/* Category Pill and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-950 text-slate-400 border border-slate-800">
                      {cert.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-xs text-slate-400 mt-2 font-medium">
                    Issued by <span className="text-slate-200">{cert.issuer}</span>
                  </p>
                </div>

                {/* Footer validation status */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Verified Credential
                  </span>
                  <span className="text-cyan-400 font-semibold">{cert.date}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
