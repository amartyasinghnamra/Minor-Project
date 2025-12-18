import React from 'react';
import { Section } from '../types';
import { ArrowRight, Database, Code2, Cpu, LineChart, ShieldCheck, Target, Layers, Search, BookOpen } from 'lucide-react';

export const HomeSection = ({ setSection }: { setSection: (s: Section) => void }) => (
  <div className="flex flex-col justify-center h-full max-w-4xl mx-auto text-center lg:text-left space-y-8">
    <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide mb-4">
      Department of Artificial Intelligence & Machine Learning
    </div>
    <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
      <span className="block text-slate-900 dark:text-white">A Dataset-Driven</span>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500">
        Emotion Analyzer
      </span>
    </h1>
    <div className="space-y-4">
      <p className="text-xl text-slate-600 dark:text-slate-400 font-medium italic">Session 2025-26</p>
      <div className="text-slate-700 dark:text-slate-300">
        <p className="font-bold uppercase tracking-widest text-sm mb-2 opacity-50">Presented By</p>
        <p className="text-lg">AMARTYA SINGH NAMRA (0131CL231016)</p>
        <p className="text-lg">PRIYANSHU TIWARI (0131CL231070)</p>
        <p className="text-lg">SAURABH PANDEY (0131CL2381)</p>
      </div>
      <div className="pt-4 border-t border-slate-200 dark:border-slate-800 inline-block">
        <p className="text-sm font-bold uppercase opacity-50 mb-1">Guided By / HOD</p>
        <p className="text-xl font-bold text-blue-600 dark:text-blue-400">AYONIJA PATHRE</p>
        <p className="text-xs">Assistant Professor (AIML)</p>
      </div>
    </div>
    
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
      <button 
        onClick={() => setSection(Section.ANALYZER)}
        className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 group"
      >
        Live Dashboard 
        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
      </button>
      <button 
        onClick={() => setSection(Section.OVERVIEW)}
        className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 dark:border-slate-700 rounded-xl font-bold transition-all"
      >
        View Presentation
      </button>
    </div>
  </div>
);

export const OverviewSection = () => (
  <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="text-center space-y-4">
      <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Introduction</h2>
      <p className="text-slate-500 dark:text-slate-400 max-w-3xl mx-auto">Understanding human communication in digital spaces through computational study.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
          <BookOpen size={80} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">What is Emotion Analysis?</h3>
        <ul className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
          <li className="flex gap-3 items-start">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
            Computational study of identifying and categorizing emotions expressed in text using NLP.
          </li>
          <li className="flex gap-3 items-start">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
            Critical component of understanding human communication in digital spaces.
          </li>
          <li className="flex gap-3 items-start">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
            Goes beyond simple positive/negative sentiment to identify specific emotions.
          </li>
          <li className="flex gap-3 items-start">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
            Applications in customer service, mental health monitoring, and social media analysis.
          </li>
        </ul>
      </div>

      <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
          <Target size={80} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Problem Statement</h3>
        <ul className="space-y-3 text-slate-600 dark:text-slate-400 leading-relaxed">
          <li className="flex gap-3 items-start">
            <span className="font-bold text-red-500 shrink-0">!</span>
            Traditional sentiment analysis only captures polarity (positive/negative) but misses emotional nuances.
          </li>
          <li className="flex gap-3 items-start">
            <span className="font-bold text-red-500 shrink-0">!</span>
            Most systems struggle with context, sarcasm, and multi-label emotion detection.
          </li>
          <li className="flex gap-3 items-start">
            <span className="font-bold text-blue-500 shrink-0">+</span>
            Gap: Need for robust, dataset-driven approaches using modern NLP to classify multiple categories.
          </li>
          <li className="flex gap-3 items-start">
            <span className="font-bold text-blue-500 shrink-0">+</span>
            Need for interpretable and efficient emotion detection systems.
          </li>
        </ul>
      </div>
    </div>

    <div className="glass-panel p-8 rounded-2xl">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
        <Target className="text-blue-500" />
        Project Objectives
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "Build a dataset-driven emotion classifier for multi-class detection.",
          "Implement comprehensive NLP preprocessing pipeline for normalization.",
          "Utilize TF-IDF vectorization combined with ML models (SGD).",
          "Achieve high accuracy across diverse text samples.",
          "Evaluate performance using standard metrics and confusion matrices.",
          "Create an interpretable system with probability-based predictions."
        ].map((obj, idx) => (
          <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
            <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">0{idx + 1}. {obj}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const MethodologySection = () => (
  <div className="max-w-6xl mx-auto space-y-12">
    <div className="text-center space-y-4">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Proposed System & Methodology</h2>
      <p className="text-slate-500 dark:text-slate-400">Lightweight, efficient combining classical NLP with modern ML techniques.</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
       <div className="lg:col-span-2 glass-panel p-8 rounded-2xl">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">System Design Flow</h3>
          <div className="flex flex-col gap-4 relative">
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-blue-500/30"></div>
            {[
              { title: "GoEmotions Dataset", desc: "Large-scale dataset with 345+ emotion categories." },
              { title: "Data Cleaning", desc: "Split text, remove extraneous words, simplify vocabulary." },
              { title: "NLP Preprocessing", desc: "Tokenization, Stopword Removal, Stemming (Porter)." },
              { title: "Text Vectorization", desc: "TF-IDF Weighting conversion to numerical features." },
              { title: "Training SGD Classifier", desc: "Efficient Stochastic Gradient Descent training." },
              { title: "Probability Model", desc: "CalibratedClassifierCV for reliable confidence." },
              { title: "Prediction Results", desc: "Interpretable emotion probabilities output." }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 items-center group relative z-10">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 border-2 border-blue-500 rounded-full flex items-center justify-center font-bold text-blue-600 shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  {idx + 1}
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 flex-1">
                  <h4 className="font-bold text-slate-900 dark:text-white">{step.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
       </div>

       <div className="space-y-8">
          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Literature Review</h3>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400 italic">
              <p>"Demszky et al. (2020) provided GoEmotions, a fine-grained dataset crucial for training."</p>
              <p>"Studies highlight TF-IDF as an effective method for converting text into numerical features."</p>
              <p>"Scikit-Learn models like Logistic Regression and SVM are standard for multi-class detection."</p>
            </div>
          </div>
          
          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Technologies Used</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Python 3.x", "NLTK", "Scikit-Learn", "TF-IDF Vectorizer",
                "SGDClassifier", "Pandas", "NumPy", "Porter Stemmer"
              ].map(tech => (
                <span key={tech} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 text-xs font-semibold rounded-lg border border-blue-200 dark:border-blue-800">
                  {tech}
                </span>
              ))}
            </div>
          </div>
       </div>
    </div>
  </div>
);

export const ResultsSection = () => (
  <div className="max-w-5xl mx-auto space-y-12">
    <div className="text-center space-y-4">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Results & Output</h2>
      <p className="text-slate-500 dark:text-slate-400">High-performance classification with interpretable metrics.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="glass-panel p-8 rounded-2xl space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Model Performance</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Accuracy</span>
            <span className="text-green-500 font-bold">High on test set</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Precision & Recall</span>
            <span className="text-blue-500 font-bold">Balanced performance</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-slate-700 dark:text-slate-300">F1-Score</span>
            <span className="text-purple-500 font-bold">Strong harmonic mean</span>
          </div>
        </div>
        <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
           <h4 className="font-bold text-sm uppercase tracking-wider mb-2 opacity-50">Key Features</h4>
           <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
             <li>• Top emotion prediction with probability scores.</li>
             <li>• Multi-label detection capability.</li>
             <li>• Real-time processing with low latency.</li>
           </ul>
        </div>
      </div>

      <div className="glass-panel p-8 rounded-2xl space-y-6 bg-blue-500/5 dark:bg-transparent">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Future Scope</h3>
        <div className="grid grid-cols-1 gap-4">
          {[
            { title: "Deep Learning", desc: "LSTM and Transformer-based models (BERT, RoBERTa)." },
            { title: "Real-Time Processing", desc: "Deploy as REST API for external applications." },
            { title: "Multi-Language", desc: "Extend using multilingual models." },
            { title: "Cloud Scale", desc: "AWS, Azure, or GCP for high volume processing." }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center shrink-0 font-bold text-xs">
                {idx + 1}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const TeamSection = () => (
  <div className="max-w-5xl mx-auto space-y-12">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Project Team & References</h2>
      <p className="text-slate-600 dark:text-slate-400">Department of AI & ML (2025-26)</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { name: "Amartya Singh Namra", id: "0131CL231016", role: "Presenter" },
        { name: "Priyanshu Tiwari", id: "0131CL231070", role: "Team Member" },
        { name: "Saurabh Pandey", id: "0131CL2381", role: "Team Member" }
      ].map((member) => (
        <div key={member.id} className="glass-panel p-8 rounded-2xl text-center border-t-4 border-blue-500">
          <div className="w-20 h-20 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-slate-700 dark:text-white">
            {member.name.charAt(0)}
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{member.name}</h3>
          <p className="text-blue-600 dark:text-blue-400 text-sm font-mono">{member.id}</p>
          <p className="text-xs text-slate-500 mt-2 uppercase tracking-widest">{member.role}</p>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      <div className="glass-panel p-8 rounded-2xl">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">References</h3>
        <ul className="space-y-4 text-xs text-slate-500 dark:text-slate-400">
          <li>• Demszky et al., "GoEmotions: A Dataset of Fine-Grained Emotions", ACL 2020.</li>
          <li>• Poria et al., "Emotion Recognition in Conversation", IEEE Access 2019.</li>
          <li>• Mohammad & Turney, "Crowdsourcing a Word-Emotion Association Lexicon", 2013.</li>
          <li>• Libraries: NLTK, Scikit-Learn, Pandas, NumPy.</li>
        </ul>
      </div>
      <div className="glass-panel p-8 rounded-2xl flex flex-col items-center justify-center text-center">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">HOD / Guidance</h3>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">AYONIJA PATHRE</h2>
        <p className="text-blue-600 dark:text-blue-400 font-semibold">Assistant Professor (AIML)</p>
        <div className="mt-8 px-6 py-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-full font-bold text-sm tracking-widest animate-pulse">
           THANK YOU
        </div>
      </div>
    </div>
  </div>
);