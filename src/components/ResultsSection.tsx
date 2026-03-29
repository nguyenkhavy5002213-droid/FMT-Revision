import React, { useState } from 'react';
import { QuizQuestion } from '../data';
import { Trophy, AlertTriangle, RefreshCw, BookOpen, BrainCircuit, Loader2 } from 'lucide-react';
import { generateAdaptiveQuiz } from '../services/geminiService';

interface ResultsSectionProps {
  score: number;
  total: number;
  weakTopics: string[];
  knowledgeBaseContext: string;
  onStartAdaptiveQuiz: (newQuestions: QuizQuestion[]) => void;
  onReset: () => void;
}

export function ResultsSection({ score, total, weakTopics, knowledgeBaseContext, onStartAdaptiveQuiz, onReset }: ResultsSectionProps) {
  const percentage = Math.round((score / total) * 100);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateAdaptiveQuiz = async () => {
    setIsGenerating(true);
    setError(null);
    try {
      const newQuestions = await generateAdaptiveQuiz(weakTopics, knowledgeBaseContext);
      if (newQuestions && newQuestions.length > 0) {
        onStartAdaptiveQuiz(newQuestions);
      } else {
        setError("Không thể tạo câu hỏi mới. Vui lòng thử lại.");
      }
    } catch (err: any) {
      setError(err.message || "Đã xảy ra lỗi khi tạo câu hỏi ôn tập.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col h-full animate-in fade-in zoom-in-95 duration-500 transition-colors">
      <div className="p-8 flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-28 h-28 bg-gradient-to-br from-theme-yellow to-theme-pink text-slate-800 rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-theme-yellow/30 rotate-3">
          <Trophy className="w-14 h-14" />
        </div>
        
        <h2 className="text-4xl font-black text-slate-900 dark:text-slate-100 mb-2 uppercase tracking-tight">Tuyệt vời!</h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 font-bold">
          Bạn đã trả lời đúng <strong className="text-emerald-500 text-3xl">{score}</strong> trên tổng số <strong className="text-slate-900 dark:text-slate-100 text-2xl">{total}</strong> câu hỏi ({percentage}%).
        </p>

        {weakTopics.length > 0 ? (
          <div className="w-full max-w-md bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-xl p-6 mb-8 text-left">
            <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-semibold mb-3">
              <AlertTriangle className="w-5 h-5" />
              <span>Phân tích lỗ hổng kiến thức:</span>
            </div>
            <p className="text-amber-900 dark:text-amber-200 text-sm mb-3">Bạn cần ôn tập thêm các mảng kiến thức sau:</p>
            <ul className="list-disc list-inside text-amber-800 dark:text-amber-300 text-sm space-y-1">
              {weakTopics.map((topic, i) => (
                <li key={i} className="font-medium">{topic}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="w-full max-w-md bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700/50 rounded-xl p-6 mb-8 text-left">
            <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-400 font-semibold mb-2">
              <BookOpen className="w-5 h-5" />
              <span>Tuyệt vời!</span>
            </div>
            <p className="text-emerald-900 dark:text-emerald-200 text-sm">Bạn đã nắm vững toàn bộ kiến thức trong bài kiểm tra này.</p>
          </div>
        )}

        {error && (
          <div className="w-full max-w-md bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-700/50 text-rose-600 dark:text-rose-400 rounded-xl p-4 mb-6 text-sm">
            {error}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          {weakTopics.length > 0 && (
            <button
              onClick={handleGenerateAdaptiveQuiz}
              disabled={isGenerating}
              className="flex-1 py-3 px-6 bg-theme-blue text-white hover:bg-theme-purple disabled:opacity-70 disabled:cursor-not-allowed rounded-xl font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-theme-blue/30"
            >
              {isGenerating ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Đang tạo...</>
              ) : (
                <><BrainCircuit className="w-5 h-5" /> Tạo Quiz Ôn Tập</>
              )}
            </button>
          )}
          <button
            onClick={onReset}
            disabled={isGenerating}
            className="flex-1 py-3 px-6 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600 hover:border-slate-300 dark:hover:border-slate-50 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl font-medium transition-all flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" /> Làm lại từ đầu
          </button>
        </div>
      </div>
    </div>
  );
}
