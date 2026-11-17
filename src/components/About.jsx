import React from 'react';
import { GraduationCap, Award, Brain, Compass, Code, Terminal, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-slate-800/80">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering Solutions with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Passion & Rigor</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            A synthesis of algorithmic foundations, hands-on full-stack development, and machine learning practical exploration.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Academic & Institution Highlights */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Education Card */}
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-7 hover:border-slate-700 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />
              
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Formal Education</span>
                  <h3 className="text-lg font-bold text-white">Bachelor of Technology</h3>
                </div>
              </div>

              <div className="space-y-3 text-slate-300 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Specialization:</span>
                  <span className="font-semibold text-white">Information Technology</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Institution:</span>
                  <span className="font-semibold text-white">Chennai Institute of Technology</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400">Academic Standing:</span>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono font-bold text-xs">
                      CGPA: {PERSONAL_INFO.education.cgpa}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Principles / Core Drivers */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-slate-900/60 border border-slate-800/80 p-5">
                <Brain className="w-6 h-6 text-cyan-400 mb-3" />
                <h4 className="text-white font-semibold text-sm mb-1">AI & ML Focus</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Building NLP & Computer Vision solutions that derive actionable intelligence.
                </p>
              </div>

              <div className="rounded-xl bg-slate-900/60 border border-slate-800/80 p-5">
                <Code className="w-6 h-6 text-blue-400 mb-3" />
                <h4 className="text-white font-semibold text-sm mb-1">Algorithmic Mind</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Consistent problem solver with 600+ problems solved across competitive platforms.
                </p>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="rounded-xl bg-slate-900/40 border border-slate-800/60 px-5 py-4 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Status: Seeking SDE & Full Stack Opportunities</span>
              </div>
              <span className="text-slate-500">Chennai, TN</span>
            </div>
          </div>

          {/* Right Column: Narrative Biography */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/80 border border-slate-800 p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                Professional Profile
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Architecting clean software with modern web standards and applied AI.
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                I am an aspiring Software Developer currently pursuing my Bachelor of Technology in Information Technology at <strong className="text-white font-medium">Chennai Institute of Technology</strong>, maintaining an academic CGPA of <strong className="text-cyan-400 font-mono">8.40</strong>.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                My technical journey combines robust computer science fundamentals—rooted in Object-Oriented Programming and Data Structures & Algorithms—with modern software delivery. I actively design and build full-stack web applications using the JavaScript ecosystem and develop AI/ML pipelines utilizing Python, Scikit-learn, OpenCV, and TensorFlow.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Whether diagnosing real-world challenges like transit gaps for Chennai commuters in my <strong className="text-slate-200">BusBridge</strong> project, detecting digital misinformation with <strong className="text-slate-200">TruthGuard AI</strong>, or analyzing sentiments across media reviews with <strong className="text-slate-200">SentiFlix</strong>, I believe in creating software that is testable, responsive, and genuinely valuable to end users.
              </p>
            </div>

            {/* Highlights bullets */}
            <div className="pt-4 border-t border-slate-800/90 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-xs text-slate-300">Proficient in C, C++, Python, Java & JavaScript</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-xs text-slate-300">Modern Full Stack: React, Node.js, Express, MongoDB</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-xs text-slate-300">Applied Machine Learning & NLP Classification</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-xs text-slate-300">Hands-on Virtual Internships at CodeAlpha & WSA</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
