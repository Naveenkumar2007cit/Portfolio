import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Sparkles, 
  Code2, 
  Terminal, 
  Cpu, 
  Layers, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for rotating titles
  useEffect(() => {
    const currentTitle = PERSONAL_INFO.rotatingTitles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % PERSONAL_INFO.rotatingTitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/15 to-violet-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -top-10 right-10 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-600/10 blur-[110px] rounded-full pointer-events-none" />

      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-sm shadow-cyan-500/20 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Open for Software Engineering Internships & Roles</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
                  {PERSONAL_INFO.name}
                </span>
              </h1>

              {/* Dynamic Typewriter Role */}
              <div className="h-10 sm:h-12 flex items-center text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300">
                <span className="text-slate-400 mr-2 font-mono text-lg sm:text-xl">&gt;</span>
                <span className="text-white font-mono">{displayText}</span>
                <span className="w-2.5 h-6 ml-1 bg-cyan-400 animate-pulse inline-block" />
              </div>
            </div>

            {/* Professional Introduction */}
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              {PERSONAL_INFO.roleHeadline}
            </p>

            {/* Quick credentials chip */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-400 font-mono">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                B.Tech IT @ Chennai Institute of Technology
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                CGPA: 8.40
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                600+ DSA Problems Solved
              </span>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Naveen_Kumar_S_Resume.pdf"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </a>

              {/* Social Buttons */}
              <div className="flex items-center gap-2 sm:ml-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all duration-300"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-[#0077b5] hover:border-[#0077b5]/50 hover:bg-slate-800 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Developer Themed Visual & Photo Placeholder */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 rounded-3xl blur-xl opacity-30 animate-pulse" />

              {/* The Main Container Card */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-2xl backdrop-blur-xl">
                
                {/* Window header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>naveen@dev-box: ~/portfolio</span>
                  </div>
                  <div className="w-3" />
                </div>

                {/* Profile Placeholder Avatar Card */}
                <div className="relative mb-6 rounded-xl overflow-hidden bg-gradient-to-b from-slate-800/80 to-slate-900 border border-slate-700/60 p-6 flex flex-col items-center text-center group">
                  
                  {/* Avatar Frame with Easy Photo Replacement guide */}
                  <div className="relative w-32 h-32 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[2px] shadow-lg shadow-cyan-500/20 mb-4">
                    <div className="w-full h-full rounded-[14px] bg-slate-950 flex flex-col items-center justify-center overflow-hidden relative">
                      {/* Placeholder Visual: Developer Monogram */}
                      <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-950 flex flex-col items-center justify-center p-3 text-center">
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-1 text-cyan-400 font-bold text-xl font-mono">
                          NK
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                          Naveen Kumar S
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-wide">
                    Naveen Kumar S
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono mt-0.5">
                    B.Tech IT • Chennai Institute of Tech
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400 bg-slate-950/60 px-3 py-1 rounded-full border border-slate-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>CGPA: 8.40 / 10.0</span>
                  </div>
                </div>

                {/* Live Code Snippet Display */}
                <div className="rounded-xl bg-slate-950 border border-slate-800/90 p-4 font-mono text-xs text-slate-300 space-y-2">
                  <div className="text-slate-500 flex justify-between">
                    <span>// developer.json</span>
                    <span className="text-emerald-400">● ready</span>
                  </div>
                  <div className="space-y-1 text-[11px] leading-relaxed">
                    <p>
                      <span className="text-purple-400">const</span> developer = &#123;
                    </p>
                    <p className="pl-4">
                      name: <span className="text-emerald-300">"Naveen Kumar S"</span>,
                    </p>
                    <p className="pl-4">
                      role: <span className="text-cyan-300">"Full Stack & AI/ML"</span>,
                    </p>
                    <p className="pl-4">
                      skills: [<span className="text-amber-300">"React"</span>, <span className="text-amber-300">"Python"</span>, <span className="text-amber-300">"Node.js"</span>],
                    </p>
                    <p className="pl-4">
                      passion: <span className="text-emerald-300">"Building Real-World Impact"</span>
                    </p>
                    <p>&#125;;</p>
                  </div>
                </div>

                {/* Floating Metric Badges */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-md bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-mono">600+</div>
                      <div className="text-[10px] text-slate-400">Problems Solved</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-md bg-violet-500/10 flex items-center justify-center text-violet-400">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-mono">5 Major</div>
                      <div className="text-[10px] text-slate-400">AI & Web Projects</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
