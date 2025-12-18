import React from 'react';
import { Section } from '../types';
import { ArrowRight, Database, Code2, Cpu, LineChart, ShieldCheck } from 'lucide-react';

export const HomeSection = ({ setSection }: { setSection: (s: Section) => void }) => (
  <div className="flex flex-col justify-center h-full max-w-4xl mx-auto text-center lg:text-left space-y-8">
    <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide mb-4">
      Department of Artificial Intelligence & Machine Learning
    </div>
    <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
      <span className="block text-slate-900 dark:text-white">Dataset-Driven</span>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500">
        Emotion Analyzer
      </span>
    </h1>
    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
      A comprehensive computational study identifying and categorizing emotions in text using Natural Language Processing and the GoEmotions dataset.
    </p>
    
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
      <button 
        onClick={() => setSection(Section.ANALYZER)}
        className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 group"
      >
        Try Live Demo 
        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
      </button>
      <button 
        onClick={() => setSection(Section.ABOUT)}
        className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 dark:border-slate-700 rounded-xl font-bold transition-all"
      >
        Learn More
      </button>
    </div>
  </div>
);

export const AboutSection = () => (
  <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="glass-panel p-8 rounded-2xl border-l-4 border-blue-500">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Problem Statement</h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
          Traditional sentiment analysis often oversimplifies human expression into binary polarities (positive/negative). This lacks the nuance required for effective modern applications.
        </p>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex gap-2"><span className="text-red-500 dark:text-red-400">✖</span> Misses emotional nuances like sarcasm.</li>
          <li className="flex gap-2"><span className="text-red-500 dark:text-red-400">✖</span> Struggles with multi-label emotion detection.</li>
          <li className="flex gap-2"><span className="text-red-500 dark:text-red-400">✖</span> Lack of interpretable systems.</li>
        </ul>
      </div>
      <div className="glass-panel p-8 rounded-2xl border-l-4 border-green-500">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Objective</h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
          To build a robust, dataset-driven classifier utilizing the GoEmotions dataset (345+ categories) and modern NLP techniques to accurately classify complex emotional states.
        </p>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex gap-2"><span className="text-green-500 dark:text-green-400">✔</span> Multi-class emotion detection.</li>
          <li className="flex gap-2"><span className="text-green-500 dark:text-green-400">✔</span> Probability-based predictions.</li>
          <li className="flex gap-2"><span className="text-green-500 dark:text-green-400">✔</span> Comprehensive NLP preprocessing pipeline.</li>
        </ul>
      </div>
    </div>

    <div className="glass-panel p-8 rounded-2xl">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Literature Review Insights</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { icon: Database, title: "GoEmotions", desc: "Demszky et al. (2020) provided a fine-grained dataset crucial for training nuanced models." },
          { icon: Code2, title: "TF-IDF & NLTK", desc: "Proven effectiveness in converting text to numerical features and cleaning noise." },
          { icon: Cpu, title: "SGD Classifier", desc: "Selected for efficiency in high-dimensional sparse data environments." }
        ].map((item, idx) => (
          <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-colors">
            <item.icon className="w-10 h-10 text-blue-500 dark:text-blue-400 mb-4" />
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const MethodologySection = () => (
  <div className="max-w-6xl mx-auto space-y-10">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">System Architecture</h2>
      <p className="text-slate-600 dark:text-slate-400">A lightweight, efficient pipeline transforming raw text into actionable emotional insights.</p>
    </div>

    {/* Flowchart Visualization */}
    <div className="relative">
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-purple-400 dark:from-blue-900 dark:via-blue-600 dark:to-purple-600 -translate-y-1/2 hidden lg:block opacity-50 dark:opacity-30"></div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {[
          { title: "Input", subtitle: "Raw Text Data", icon: Database },
          { title: "Preprocessing", subtitle: "Tokenization & Cleaning", icon: ShieldCheck },
          { title: "Vectorization", subtitle: "TF-IDF Feature Extraction", icon: Code2 },
          { title: "Model", subtitle: "SGD Classifier", icon: Cpu },
          { title: "Output", subtitle: "Emotion Probabilities", icon: LineChart },
        ].map((step, idx) => (
          <div key={idx} className="relative z-10 bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center shadow-lg dark:shadow-xl hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-4">
              <step.icon size={24} />
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">{step.title}</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{step.subtitle}</p>
            {idx < 4 && (
               <div className="lg:hidden mt-4 text-slate-400 dark:text-slate-600">↓</div>
            )}
          </div>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      <div className="glass-panel p-6 rounded-2xl">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">Technologies Used</h3>
        <div className="flex flex-wrap gap-2">
          {['Python 3.x', 'NLTK', 'Scikit-Learn', 'Pandas', 'NumPy', 'TF-IDF Vectorizer', 'CalibratedClassifierCV'].map((tech) => (
            <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-sm text-blue-700 dark:text-blue-200 border border-slate-200 dark:border-slate-600">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="glass-panel p-6 rounded-2xl">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">Preprocessing Pipeline</h3>
        <ul className="space-y-3 text-slate-700 dark:text-slate-300 text-sm">
          <li className="flex items-start gap-2">
            <span className="bg-blue-500 w-1.5 h-1.5 rounded-full mt-2 shrink-0"></span>
            <span><strong>Tokenization:</strong> Breaking text into individual linguistic units.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-blue-500 w-1.5 h-1.5 rounded-full mt-2 shrink-0"></span>
            <span><strong>Stopword Removal:</strong> Eliminating high-frequency noise words.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-blue-500 w-1.5 h-1.5 rounded-full mt-2 shrink-0"></span>
            <span><strong>Stemming:</strong> Normalizing words to their root forms using Porter Stemmer.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export const TeamSection = () => (
  <div className="max-w-5xl mx-auto text-center space-y-12">
    <div>
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Project Team</h2>
      <p className="text-slate-600 dark:text-slate-400">Department of Artificial Intelligence & Machine Learning</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { name: "Amartya Singh Namra", id: "0131CL231016", role: "Presenter" },
        { name: "Priyanshu Tiwari", id: "0131CL231070", role: "Team Member" },
        { name: "Saurabh Pandey", id: "0131CL2381", role: "Team Member" }
      ].map((member) => (
        <div key={member.id} className="glass-panel p-8 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors border-t-4 border-blue-500">
          <div className="w-20 h-20 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-slate-700 dark:text-white">
            {member.name.charAt(0)}
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">{member.name}</h3>
          <p className="text-blue-600 dark:text-blue-400 font-mono text-sm mt-1">{member.id}</p>
          <p className="text-slate-500 text-sm mt-4 uppercase tracking-widest">{member.role}</p>
        </div>
      ))}
    </div>

    <div className="mt-12 glass-panel p-8 rounded-2xl max-w-2xl mx-auto border border-yellow-500/30 bg-yellow-50/50 dark:bg-transparent">
      <h3 className="text-lg font-semibold text-yellow-600 dark:text-yellow-500 uppercase tracking-widest mb-4">Under The Guidance Of</h3>
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Ayonija Pathre</h2>
      <p className="text-slate-600 dark:text-slate-400 mt-2">Assistant Professor (AIML)</p>
    </div>
  </div>
);

export const ResultsSection = () => (
  <div className="max-w-5xl mx-auto space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="glass-panel p-6 rounded-2xl text-center">
        <h3 className="text-4xl font-bold text-green-500 dark:text-green-400 mb-2">High</h3>
        <p className="text-slate-500 dark:text-slate-400 uppercase text-xs font-bold tracking-widest">Accuracy on Test Set</p>
      </div>
      <div className="glass-panel p-6 rounded-2xl text-center">
        <h3 className="text-4xl font-bold text-blue-500 dark:text-blue-400 mb-2">Balanced</h3>
        <p className="text-slate-500 dark:text-slate-400 uppercase text-xs font-bold tracking-widest">Precision & Recall</p>
      </div>
      <div className="glass-panel p-6 rounded-2xl text-center">
        <h3 className="text-4xl font-bold text-purple-500 dark:text-purple-400 mb-2">345+</h3>
        <p className="text-slate-500 dark:text-slate-400 uppercase text-xs font-bold tracking-widest">Emotion Categories</p>
      </div>
    </div>

    <div className="glass-panel p-8 rounded-2xl">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Future Scope & Improvements</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: "Deep Learning Integration", desc: "Implement LSTM and BERT/RoBERTa for improved context understanding." },
          { title: "Real-Time Processing", desc: "Deploy as REST API for real-time applications." },
          { title: "Multi-Language Support", desc: "Extend to multiple languages using multilingual models." },
          { title: "Cloud Deployment", desc: "Scale to AWS/GCP for high volume processing." }
        ].map((item, idx) => (
          <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors">
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 font-bold">
              {idx + 1}
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-white font-semibold">{item.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);