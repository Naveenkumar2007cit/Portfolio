import React, { useState } from 'react';
import { 
  Code2, 
  Globe, 
  Database, 
  Wrench, 
  Cpu, 
  Terminal, 
  Check, 
  Layers
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

const ICON_MAP = {
  Code2: Code2,
  Globe: Globe,
  Database: Database,
  Wrench: Wrench,
  Cpu: Cpu,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...SKILLS_DATA.map(c => c.category)];

  const filteredCategories = activeCategory === 'All' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(c => c.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden border-t border-slate-800/80 bg-slate-950/40">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>02 // TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">Technical Skills</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Clean categorization of programming languages, web stacks, data management, and computer science foundations from my verified resume.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 scale-105'
                    : 'bg-slate-900/90 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => {
            const IconComponent = ICON_MAP[group.icon] || Code2;

            return (
              <div 
                key={group.category}
                className="group relative rounded-2xl bg-slate-900/70 border border-slate-800/90 p-6 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-500/5 backdrop-blur-sm"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${group.accent} p-[1px]`}>
                        <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-cyan-400" />
                        </div>
                      </div>
                      <h3 className="font-bold text-white text-base">
                        {group.category}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">
                      {group.skills.length} skills
                    </span>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {group.skills.map((skill) => (
                      <div 
                        key={skill.name}
                        className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/60 hover:border-slate-700 transition-all flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span className="font-semibold text-slate-200 text-sm">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] text-slate-400 font-mono bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                            {skill.tag}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer category badge */}
                <div className="mt-5 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Resume verified</span>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Competencies Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/90 border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base">
                Engineering Discipline & Code Quality
              </h4>
              <p className="text-slate-400 text-sm">
                Clean architectural separation, modular component design, and performance-first engineering across client and server.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="px-3.5 py-1.5 rounded-lg bg-slate-800 text-slate-300 font-mono text-xs border border-slate-700">
              OOP Principles
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-slate-800 text-slate-300 font-mono text-xs border border-slate-700">
              RESTful APIs
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 font-mono text-xs border border-cyan-500/30">
              DSA Problem Solver
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
