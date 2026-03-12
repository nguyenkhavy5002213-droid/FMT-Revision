import React, { useState } from 'react';
import { QuizQuestion } from '../data/initialQuiz';
import { CheckCircle2, XCircle, MapPin, ArrowRight, RefreshCw } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface QuizSectionProps {
  questions: QuizQuestion[];
  onLocateKnowledge: (sectionId: string) => void;
  onComplete: (score: number, weakTopics: string[]) => void;
}

export function QuizSection({ questions, onLocateKnowledge, onComplete }: QuizSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [weakTopics, setWeakTopics] = useState<Set<string>>(new Set());

  const currentQuestion = questions[currentIndex];

  const handleSelect = (optionKey: string) => {
    if (isAnswered) return;
    setSelectedAnswer(optionKey);
  };

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    
    setIsAnswered(true);
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    } else {
      setWeakTopics(prev => new Set(prev).add(currentQuestion.topic));
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      onComplete(score, Array.from(weakTopics));
    }
  };

  if (!currentQuestion) return null;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col h-full transition-colors duration-300">
      <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">Trắc nghiệm (Multiple Choice)</h2>
        <span className="px-3 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300">
          Câu {currentIndex + 1} / {questions.length}
        </span>
      </div>

      <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">{currentQuestion.questionEn}</h3>
          <p className="text-slate-500 dark:text-slate-400 italic text-sm">{currentQuestion.questionVi}</p>
        </div>

        <div className="space-y-4">
          {Object.entries(currentQuestion.options).map(([key, option]) => {
            const isSelected = selectedAnswer === key;
            const isCorrect = key === currentQuestion.correctAnswer;
            
            let optionClass = "border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-500 hover:bg-slate-50 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-200";
            if (isAnswered) {
              if (isCorrect) {
                optionClass = "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-100";
              } else if (isSelected) {
                optionClass = "border-red-500 bg-red-50 dark:bg-red-900/30 text-red-900 dark:text-red-100";
              } else {
                optionClass = "border-slate-200 dark:border-slate-700 opacity-50 text-slate-500 dark:text-slate-400";
              }
            } else if (isSelected) {
              optionClass = "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 ring-1 ring-indigo-500 text-indigo-900 dark:text-indigo-100";
            }

            return (
              <button
                key={key}
                onClick={() => handleSelect(key)}
                disabled={isAnswered}
                className={cn(
                  "w-full text-left p-4 rounded-xl border-2 transition-all duration-200",
                  optionClass
                )}
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 font-bold">
                    {key}
                  </span>
                  <div>
                    <p className="font-medium">{option.en}</p>
                    <p className="text-sm opacity-70 mt-1">{option.vi}</p>
                  </div>
                  {isAnswered && isCorrect && <CheckCircle2 className="w-6 h-6 text-emerald-500 ml-auto flex-shrink-0" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-500 ml-auto flex-shrink-0" />}
                </div>
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="mt-8 p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-2 mb-4">
              {selectedAnswer === currentQuestion.correctAnswer ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" /> Chính xác!
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200 text-sm font-semibold">
                  <XCircle className="w-4 h-4" /> Rất tiếc, chưa chính xác.
                </span>
              )}
            </div>
            
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <div>
                <strong className="text-slate-900 dark:text-slate-100 block mb-1">Giải thích (Explanation):</strong>
                <p>{currentQuestion.explanationEn}</p>
                <p className="italic text-sm mt-1 text-slate-600 dark:text-slate-400">{currentQuestion.explanationVi}</p>
              </div>

              {selectedAnswer !== currentQuestion.correctAnswer && (
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg">
                  <strong className="text-amber-900 dark:text-amber-400 block mb-1">Phân tích lỗi sai:</strong>
                  <p className="text-amber-800 dark:text-amber-200 text-sm">
                    Bạn đã chọn đáp án {selectedAnswer}. Lựa chọn này chưa đúng vì bạn có thể đã nhầm lẫn về khái niệm <strong className="text-amber-900 dark:text-amber-100">{currentQuestion.topic}</strong>. Hãy xem lại phần kiến thức liên quan để nắm vững hơn bản chất của vấn đề này.
                  </p>
                </div>
              )}

              <button
                onClick={() => onLocateKnowledge(currentQuestion.relatedSectionId)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-700 border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-300 rounded-lg hover:bg-indigo-50 dark:hover:bg-slate-600 transition-colors text-sm font-medium shadow-sm"
              >
                <MapPin className="w-4 h-4" />
                Định vị kiến thức
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        {!isAnswered ? (
          <button
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 dark:disabled:bg-slate-700 disabled:text-slate-500 dark:disabled:text-slate-400 text-white rounded-xl font-medium transition-colors shadow-sm"
          >
            Kiểm tra đáp án
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="w-full py-3 px-4 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            {currentIndex < questions.length - 1 ? (
              <>Câu tiếp theo <ArrowRight className="w-5 h-5" /></>
            ) : (
              <>Hoàn thành <CheckCircle2 className="w-5 h-5" /></>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
