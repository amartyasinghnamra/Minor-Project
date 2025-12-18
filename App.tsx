import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Analyzer from './components/Analyzer';
import { HomeSection, OverviewSection, MethodologySection, ResultsSection, TeamSection } from './components/ProjectSections';
import { Section } from './types';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<Section>(Section.HOME);
  
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const renderSection = () => {
    switch (currentSection) {
      case Section.HOME:
        return <HomeSection setSection={setCurrentSection} />;
      case Section.ANALYZER:
        return <Analyzer />;
      case Section.OVERVIEW:
        return <OverviewSection />;
      case Section.METHODOLOGY:
        return <MethodologySection />;
      case Section.RESULTS:
        return <ResultsSection />;
      case Section.TEAM:
        return <TeamSection />;
      default:
        return <HomeSection setSection={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a] text-slate-800 dark:text-slate-200 selection:bg-blue-500/30 transition-colors duration-300">
      <Navbar 
        currentSection={currentSection} 
        setSection={setCurrentSection} 
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
      
      <main className="lg:pl-64 min-h-screen flex flex-col">
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 lg:hidden bg-white/80 dark:bg-[#0f172a]/90 backdrop-blur z-40 sticky top-0 transition-colors duration-300">
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
            Amartya
          </span>
        </header>

        <div className="flex-1 p-4 lg:p-12 overflow-y-auto">
          <div className="animate-in fade-in duration-500 h-full">
            {renderSection()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;