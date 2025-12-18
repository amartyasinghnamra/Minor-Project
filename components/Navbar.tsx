import React from 'react';
import { Section } from '../types';
import { BrainCircuit, Activity, Users, FileText, BarChart3, Home, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  currentSection: Section;
  setSection: (s: Section) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentSection, setSection, isDark, toggleTheme }) => {
  const navItems = [
    { id: Section.HOME, label: 'Home', icon: Home },
    { id: Section.ANALYZER, label: 'Live Analyzer', icon: Activity },
    { id: Section.ABOUT, label: 'About Project', icon: FileText },
    { id: Section.METHODOLOGY, label: 'Methodology', icon: BrainCircuit },
    { id: Section.RESULTS, label: 'Results', icon: BarChart3 },
    { id: Section.TEAM, label: 'Team', icon: Users },
  ];

  return (
    <nav className="fixed top-0 left-0 h-full w-20 lg:w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-50 flex flex-col transition-colors duration-300 shadow-lg lg:shadow-none">
      <div className="p-6 flex items-center justify-center lg:justify-start gap-3 border-b border-slate-200 dark:border-slate-800">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30">
          <span className="font-bold text-white">A</span>
        </div>
        <span className="hidden lg:block font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
          Amartya
        </span>
      </div>

      <div className="flex-1 py-6 flex flex-col gap-2 px-3 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setSection(item.id)}
            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group relative
              ${currentSection === item.id 
                ? 'bg-blue-50 text-blue-600 border border-blue-200 dark:bg-blue-600/10 dark:text-blue-400 dark:border-blue-500/30' 
                : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
              }`}
          >
             {currentSection === item.id && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-500 rounded-r-full hidden lg:block"></div>
            )}
            <item.icon className={`w-6 h-6 transition-colors ${currentSection === item.id ? 'text-blue-600 dark:text-blue-400' : 'group-hover:text-slate-700 dark:group-hover:text-white'}`} />
            <span className="hidden lg:block font-medium">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="p-4 lg:p-6 border-t border-slate-200 dark:border-slate-800">
        <div 
          onClick={toggleTheme}
          className="w-full cursor-pointer flex items-center justify-center lg:justify-between p-3 lg:p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 group shadow-sm hover:shadow-md"
        >
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isDark ? 'bg-slate-700 text-blue-400 shadow-inner shadow-black/20' : 'bg-amber-100 text-amber-500 shadow-sm'}`}>
              {isDark ? <Moon size={16} /> : <Sun size={16} />}
            </div>
            <div className="hidden lg:flex flex-col text-left">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                {isDark ? 'Dark Mode' : 'Light Mode'}
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                {isDark ? 'Switch to Light' : 'Switch to Dark'}
              </span>
            </div>
          </div>

          {/* Custom Visual Switch */}
          <div className="hidden lg:block w-10 h-5 rounded-full bg-slate-300 dark:bg-slate-600 relative transition-colors duration-300 group-hover:bg-slate-400 dark:group-hover:bg-slate-500">
            <div className={`absolute top-1 left-1 w-3 h-3 rounded-full bg-white shadow-sm transition-transform duration-300 ${isDark ? 'translate-x-5' : 'translate-x-0'}`}></div>
          </div>
        </div>

        <p className="hidden lg:block text-[10px] text-slate-400 dark:text-slate-600 text-center mt-4 font-medium uppercase tracking-wider">
          AIML • 2025-26
        </p>
      </div>
    </nav>
  );
};

export default Navbar;