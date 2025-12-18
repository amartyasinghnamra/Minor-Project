import React, { useState } from 'react';
import { analyzeTextEmotion } from '../services/geminiService';
import { AnalysisResponse } from '../types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Loader2, Send, AlertCircle, RefreshCw, BarChart3 } from 'lucide-react';

const Analyzer: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResponse | null>(null);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const data = await analyzeTextEmotion(input);
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getBarColor = (emotion: string) => {
    const colors: Record<string, string> = {
      Joy: '#4ade80',      // green-400
      Sadness: '#60a5fa',  // blue-400
      Anger: '#f87171',    // red-400
      Fear: '#a78bfa',     // violet-400
      Surprise: '#facc15', // yellow-400
      Love: '#f472b6',     // pink-400
      Optimism: '#38bdf8', // sky-400
      Neutral: '#94a3b8',  // slate-400
    };
    return colors[emotion] || '#cbd5e1';
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Live Emotion Analyzer</h2>
        <p className="text-slate-500 dark:text-slate-400">Powered by Gemini 2.5 Flash • Simulating the GoEmotions Pipeline</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="glass-panel p-6 rounded-2xl flex flex-col h-[500px]">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-100">
            <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
            Input Text
          </h3>
          <textarea
            className="flex-1 w-full bg-slate-50 border border-slate-200 dark:bg-slate-900/50 dark:border-slate-700 rounded-xl p-4 text-lg text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none transition-all"
            placeholder="Type something here... e.g., 'I am absolutely thrilled about the results, but a bit worried about the deadline!'"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="mt-4 flex justify-between items-center">
            <button 
              onClick={() => { setInput(''); setResult(null); }}
              className="text-slate-500 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white flex items-center gap-2 text-sm px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <RefreshCw size={16} /> Clear
            </button>
            <button
              onClick={handleAnalyze}
              disabled={loading || !input.trim()}
              className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-200 disabled:text-slate-400 dark:disabled:bg-slate-700 dark:disabled:text-slate-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20 dark:shadow-blue-900/20"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Send size={18} />}
              Analyze Emotion
            </button>
          </div>
        </div>

        {/* Output Section */}
        <div className="glass-panel p-6 rounded-2xl h-[500px] flex flex-col relative overflow-hidden">
          {!result && !loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 space-y-4">
              <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                <BarChart3 size={40} className="opacity-50" />
              </div>
              <p>Analysis results will appear here</p>
            </div>
          )}

          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 dark:bg-slate-900/80 z-10 backdrop-blur-sm">
              <Loader2 size={48} className="text-blue-500 animate-spin mb-4" />
              <p className="text-blue-600 dark:text-blue-300 animate-pulse font-medium">Processing linguistic patterns...</p>
              <p className="text-xs text-slate-500 mt-2">Tokenizing • Vectorizing • Classifying</p>
            </div>
          )}

          {result && !loading && (
            <div className="flex flex-col h-full animate-in fade-in zoom-in duration-300">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm uppercase tracking-wider font-semibold">Top Emotion</p>
                  <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
                    {result.topEmotion}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-slate-500 dark:text-slate-400 text-sm uppercase tracking-wider font-semibold">Confidence</p>
                  <div className="text-2xl font-mono text-blue-600 dark:text-blue-400">
                    {(result.confidence * 100).toFixed(1)}%
                  </div>
                </div>
              </div>

              <div className="mb-4 bg-slate-100 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-200 dark:border-slate-700/50">
                <p className="text-sm text-slate-600 dark:text-slate-300 flex gap-2">
                  <AlertCircle size={16} className="text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                  {result.reasoning}
                </p>
              </div>

              <div className="flex-1 w-full min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={result.distribution.slice(0, 6)}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <XAxis type="number" hide domain={[0, 1]} />
                    <YAxis 
                      dataKey="emotion" 
                      type="category" 
                      width={80} 
                      tick={{ fill: 'currentColor', fontSize: 12 }} 
                      className="text-slate-500 dark:text-slate-400"
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'var(--tooltip-bg, #1e293b)', 
                        borderColor: 'var(--tooltip-border, #334155)', 
                        color: 'var(--tooltip-text, #f8fafc)',
                        borderRadius: '0.5rem'
                      }}
                      cursor={{fill: 'rgba(120,120,120,0.1)'}}
                      formatter={(value: number) => [`${(value * 100).toFixed(1)}%`, 'Probability']}
                    />
                    <Bar dataKey="score" radius={[0, 4, 4, 0]} barSize={24}>
                      {result.distribution.slice(0, 6).map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={getBarColor(entry.emotion)} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analyzer;