import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Internships', href: '#internships' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#030712]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/50 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a 
            href="#home" 
            className="group flex items-center space-x-2 text-white font-bold tracking-tight text-lg"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center p-[1px] shadow-sm shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all duration-300">
              <div className="w-full h-full bg-[#030712] rounded-[11px] flex items-center justify-center">
                <Terminal className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <span className="font-mono text-base font-semibold">
              <span className="text-white">naveen</span>
              <span className="text-cyan-400">.kumar</span>
              <span className="text-slate-500 text-xs ml-1 font-mono">()</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 glass-panel px-3 py-1.5 rounded-full border border-white/5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive 
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-500/20' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Button: Resume */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Naveen_Kumar_S_Resume.pdf"
              className="group relative inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 rounded-lg hover:border-cyan-500/50 hover:text-white transition-all duration-300 shadow-sm hover:shadow-cyan-500/20 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <FileText className="w-3.5 h-3.5 mr-1.5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Resume</span>
              <ChevronRight className="w-3 h-3 ml-1 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#030712]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeSection === link.href.substring(1)
                    ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Naveen_Kumar_S_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm shadow-md shadow-cyan-500/20"
            >
              <FileText className="w-4 h-4" />
              <span>Download Official Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
