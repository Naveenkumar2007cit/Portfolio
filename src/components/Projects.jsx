import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  CheckCircle, 
  Terminal, 
  Layers, 
  Cpu, 
  Clock, 
  MapPin, 
  Flame,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS_DATA } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI & Machine Learning', 'Full Stack & Web', 'Ongoing Project'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === 'All') return true;
    if (filter === 'Ongoing Project') return project.isOngoing;
    if (filter === 'AI & Machine Learning') return project.badge.includes('AI') || project.badge.includes('NLP') || project.badge.includes('Vision');
    if (filter === 'Full Stack & Web') return project.badge.includes('Full Stack') || project.isOngoing;
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-violet-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>03 // FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">Projects & Systems</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Each project is built to solve tangible, real-world problems utilizing applied Machine Learning, Computer Vision, and full-stack web architectures.
          </p>

          {/* Project Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                  filter === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 scale-105'
                    : 'bg-slate-900/90 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Showcase */}
        <div className="space-y-12">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-all duration-300 overflow-hidden shadow-2xl backdrop-blur-md"
              >
                {/* Subtle header accent glow */}
                <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${project.isOngoing ? 'from-amber-400 to-emerald-400' : 'from-cyan-400 via-blue-500 to-violet-500'}`} />

                <div className="p-8 sm:p-10 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* Left Column: Project Overview & Specs */}
                    <div className="lg:col-span-7 space-y-6">
                      
                      {/* Badges & Status */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                          {project.badge}
                        </span>

                        {project.isOngoing ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30 animate-pulse">
                            <Clock className="w-3 h-3 text-amber-400" />
                            Ongoing Internship Project
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                            <CheckCircle className="w-3 h-3" />
                            Completed
                          </span>
                        )}
                      </div>

                      {/* Title & Tagline */}
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm font-mono text-slate-400 mt-1">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {project.description}
                      </p>

                      {/* Problem It Solves Box */}
                      <div className="rounded-xl bg-slate-950/80 border border-slate-800/80 p-4 space-y-1.5">
                        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                          <Cpu className="w-3.5 h-3.5" />
                          <span className="font-semibold uppercase tracking-wider">The Problem It Solves</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {project.problemSolved}
                        </p>
                      </div>

                      {/* Key Features List */}
                      <div className="space-y-2">
                        <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                          Main Engineering Features:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies Stack Tags */}
                      <div className="space-y-2 pt-2">
                        <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                          Technologies Used:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Project Action Buttons */}
                      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800/80">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 transition-all duration-200 shadow-sm"
                        >
                          <GithubIcon className="w-4 h-4 text-cyan-400" />
                          <span>View on GitHub</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                        </a>

                        {project.liveDemo ? (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all duration-200 shadow-md shadow-cyan-500/20"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </a>
                        ) : (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-500 bg-slate-950/60 border border-slate-800/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                            <span>Demo available upon repository build</span>
                          </div>
                        )}
                      </div>

                    </div>

                    {/* Right Column: Custom Designed Visual Showcase Placeholder */}
                    <div className="lg:col-span-5 h-full flex flex-col justify-center">
                      <div className="relative rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800/90 p-6 overflow-hidden shadow-xl group-hover:border-slate-700 transition-all">
                        
                        {/* Decorative background grid inside card */}
                        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
                        <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${project.gradient} rounded-full blur-2xl pointer-events-none`} />

                        {/* Top bar simulating application UI */}
                        <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5 relative z-10">
                          <div className="flex items-center space-x-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                          </div>
                          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                            {project.id}.sys
                          </span>
                        </div>

                        {/* Visual Simulation Display */}
                        <div className="space-y-4 relative z-10 py-2">
                          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2">
                            <FolderGit2 className="w-7 h-7" />
                          </div>

                          <div>
                            <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest">
                              Architecture Blueprint
                            </span>
                            <h4 className="text-lg font-bold text-white mt-0.5">
                              {project.title}
                            </h4>
                          </div>

                          {/* Architecture flow steps */}
                          <div className="space-y-2 font-mono text-xs text-slate-400">
                            <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800/80 flex items-center justify-between">
                              <span className="text-slate-400">01. Pipeline</span>
                              <span className="text-slate-200 font-semibold">{project.badge.split('&')[0]}</span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800/80 flex items-center justify-between">
                              <span className="text-slate-400">02. Primary Framework</span>
                              <span className="text-cyan-400 font-semibold">{project.technologies[0]}</span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800/80 flex items-center justify-between">
                              <span className="text-slate-400">03. Target Environment</span>
                              <span className="text-emerald-400 font-semibold">{project.isOngoing ? 'Chennai Transit Web' : 'Production Web / API'}</span>
                            </div>
                          </div>

                          {/* Interactive preview note */}
                          <div className="pt-2 text-[11px] text-slate-500 font-mono flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Engineered with production-grade standards</span>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
