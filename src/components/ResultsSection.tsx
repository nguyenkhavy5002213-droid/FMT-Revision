import React, { useState } from 'react';
import { generateAdaptiveQuiz } from '../services/geminiService';
import { QuizQuestion } from '../data/initialQuiz';
import { Trophy, AlertTriangle, RefreshCw, Loader2, BookOpen } from 'lucide-react';

interface ResultsSectionProps {
  score: number;
  total: number;
  weakTopics: string[];
  knowledgeBaseContext: string;
  onStartAdaptiveQuiz: (newQuestions: QuizQuestion[]) => void;
  onReset: () => void;
}

export function ResultsSection({ score, total, weakTopics, knowledgeBaseContext, onStartAdaptiveQuiz, onReset }: ResultsSectionProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const percentage = Math.round((score / total) * 100);

  const handleGenerateAdaptive = async () => {
    setIsGenerating(true);
    try {
      const newQuestions = await generateAdaptiveQuiz(weakTopics.length > 0 ? weakTopics : ['General Review'], knowledgeBaseContext);
      if (newQuestions && newQuestions.length > 0) {
        onStartAdaptiveQuiz(newQuestions);
      } else {
        alert("Không thể tạo câu hỏi mới lúc này. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error(error);
      alert("Đã có lỗi xảy ra khi tạo câu hỏi ôn tập.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col h-full animate-in fade-in zoom-in-95 duration-500 transition-colors">
      <div className="p-8 flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center mb-6 shadow-inner">
          <Trophy className="w-12 h-12" />
        </div>
        
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Hoàn thành bài tập!</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Bạn đã trả lời đúng <strong className="text-indigo-600 dark:text-indigo-400 text-2xl">{score}</strong> trên tổng số <strong className="text-slate-900 dark:text-slate-100 text-xl">{total}</strong> câu hỏi ({percentage}%).
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

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <button
            onClick={onReset}
            className="flex-1 py-3 px-6 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600 hover:border-slate-300 dark:hover:border-slate-500 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" /> Làm lại từ đầu
          </button>
          
          <button
            onClick={handleGenerateAdaptive}
            disabled={isGenerating}
            className="flex-1 py-3 px-6 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 dark:disabled:bg-indigo-800 text-white rounded-xl font-medium transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <><Loader2 className="w-5 h-5 animate-spin" /> Đang tạo...</>
            ) : (
              <><BookOpen className="w-5 h-5" /> Ôn tập lỗ hổng</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
