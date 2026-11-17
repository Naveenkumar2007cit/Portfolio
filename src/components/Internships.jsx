import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  Terminal, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { INTERNSHIPS_DATA } from '../data/portfolioData';

export default function Internships() {
  return (
    <section id="internships" className="py-24 relative overflow-hidden border-t border-slate-800/80 bg-slate-950/30">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>04 // INDUSTRY PRACTICUM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Internship <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">Experience Timeline</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Practical development experience gained across virtual internships spanning frontend engineering, data science, and full stack web architecture.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical central timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-slate-800 hidden sm:block" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {INTERNSHIPS_DATA.map((internship, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={internship.role + internship.organization}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Central Timeline Dot on Desktop */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 items-center justify-center z-20 shadow-md shadow-cyan-500/40">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  </div>

                  {/* Content Card Side */}
                  <div className={`w-full sm:w-1/2 ${
                    isEven ? 'sm:pl-10' : 'sm:pr-10'
                  }`}>
                    <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-7 hover:border-slate-700 transition-all duration-300 shadow-xl group hover:shadow-cyan-500/5">
                      
                      {/* Top Meta info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {internship.badge}
                        </span>
                        
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          <span>{internship.duration}</span>
                        </div>
                      </div>

                      {/* Role & Org */}
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {internship.role}
                      </h3>

                      <div className="flex items-center gap-2 mt-1 mb-4 text-sm font-medium text-slate-300">
                        <Building2 className="w-4 h-4 text-blue-400" />
                        <span>{internship.organization}</span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                        {internship.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-5">
                        {internship.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skills Covered Pills */}
                      <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                        {internship.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
