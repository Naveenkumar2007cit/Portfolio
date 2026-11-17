import React, { useState, useEffect, useRef } from 'react';
import { 
  Trophy, 
  Flame, 
  Code, 
  Target, 
  Medal, 
  Terminal, 
  Sparkles, 
  Zap,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

function CounterCard({ item }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.3 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = item.count;
    const duration = 1800;
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += Math.ceil(end / 40);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, item.count]);

  const ICON_MAP = {
    Code: Code,
    Flame: Flame,
    Trophy: Trophy,
    Target: Target
  };
  const IconComponent = ICON_MAP[item.icon] || Code;

  return (
    <div 
      ref={ref}
      className="relative rounded-2xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col items-center text-center hover:border-slate-700 transition-all duration-300 group hover:shadow-xl hover:shadow-cyan-500/5"
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.color} p-[1px] mb-4`}>
        <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
          <IconComponent className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </div>
      </div>

      <div className="flex items-baseline justify-center gap-0.5 text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
        <span>{count}</span>
        <span className="text-cyan-400">{item.suffix}</span>
      </div>

      <span className="text-xs sm:text-sm font-semibold text-slate-300 mt-2">
        {item.label}
      </span>
      <span className="text-[11px] font-mono text-slate-500 mt-0.5">
        Problems Solved
      </span>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>05 // HONORS & RECOGNITIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Competitive <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">Coding & Hackathons</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Demonstrated stamina in competitive problem solving across global platforms and rapid innovation during competitive hackathons.
          </p>
        </div>

        {/* Animated Problem Solving Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {ACHIEVEMENTS_DATA.counters.map((item) => (
            <CounterCard key={item.label} item={item} />
          ))}
        </div>

        {/* Aggregate Banner */}
        <div className="mb-14 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 p-6 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-1">
            <Zap className="w-4 h-4" />
            <span>Consistent Problem Solving</span>
          </div>
          <h3 className="text-2xl font-bold text-white font-mono">
            600+ Algorithmic Challenges Solved
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Focusing on Arrays, Strings, Trees, Dynamic Programming, Graphs & System Optimization.
          </p>
        </div>

        {/* Hackathons Showcase Cards */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h3 className="text-base font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Hackathon Record</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACHIEVEMENTS_DATA.hackathons.map((hack, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl bg-slate-900/80 border border-slate-800 p-6 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group hover:shadow-lg hover:shadow-violet-500/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                      <Medal className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-violet-500/15 text-violet-300 border border-violet-500/30">
                      {hack.tag}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {hack.title}
                  </h4>

                  <p className="text-xs font-medium text-cyan-400 mt-1">
                    {hack.organization}
                  </p>

                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                    {hack.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{hack.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
