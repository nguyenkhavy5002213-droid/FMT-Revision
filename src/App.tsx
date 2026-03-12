import React, { useState, useMemo, useEffect } from 'react';
import { ReviewSection } from './components/ReviewSection';
import { QuizSection } from './components/QuizSection';
import { ResultsSection } from './components/ResultsSection';
import { ChatBox } from './components/ChatBox';
import { AuthScreen } from './components/AuthScreen';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { AdminPanel } from './components/AdminPanel';
import { knowledgeBase } from './data/knowledgeBase';
import { initialQuiz, QuizQuestion } from './data/initialQuiz';
import { generateAdaptiveQuiz } from './services/geminiService';
import { BookOpen, BrainCircuit, Moon, Sun, LogOut, Loader2, Shield } from 'lucide-react';

function AppContent() {
  const { user, isAdmin, loading, logout } = useAuth();
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const [quizState, setQuizState] = useState<'playing' | 'results'>('playing');
  const [selectedChapter, setSelectedChapter] = useState<number>(1);
  
  const chapterQuestions = useMemo(() => {
    return initialQuiz.filter(q => q.chapter === selectedChapter);
  }, [selectedChapter]);

  const [currentQuestions, setCurrentQuestions] = useState<QuizQuestion[]>([]);
  const [score, setScore] = useState(0);
  const [weakTopics, setWeakTopics] = useState<string[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  
  const chapters = useMemo(() => {
    const chapterSet = new Set<number>();
    knowledgeBase.forEach(s => chapterSet.add(s.chapter));
    initialQuiz.forEach(q => chapterSet.add(q.chapter));
    return Array.from(chapterSet).sort((a, b) => a - b);
  }, [knowledgeBase, initialQuiz]);

  useEffect(() => {
    setCurrentQuestions(chapterQuestions);
    setQuizState('playing');
    setScore(0);
    setWeakTopics([]);
  }, [chapterQuestions]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Stringify knowledge base for AI context
  const knowledgeBaseContext = useMemo(() => {
    const filteredKB = knowledgeBase.filter(s => s.chapter === selectedChapter);
    return JSON.stringify(filteredKB, null, 2);
  }, [selectedChapter, knowledgeBase]);

  const handleLocateKnowledge = (sectionId: string) => {
    setHighlightedId(sectionId);
    // Clear highlight after 3 seconds
    setTimeout(() => setHighlightedId(null), 3000);
  };

  const handleQuizComplete = (finalScore: number, topics: string[]) => {
    setScore(finalScore);
    setWeakTopics(topics);
    setQuizState('results');
  };

  const handleStartAdaptiveQuiz = (newQuestions: QuizQuestion[]) => {
    setCurrentQuestions(newQuestions);
    setQuizState('playing');
    setScore(0);
    setWeakTopics([]);
  };

  const handleReset = () => {
    setCurrentQuestions(chapterQuestions);
    setQuizState('playing');
    setScore(0);
    setWeakTopics([]);
  };

  const handleStartSpecificQuiz = async (sectionId: string, topic: string) => {
    // Scroll to quiz section
    const quizElement = document.getElementById('quiz-section');
    if (quizElement) {
      quizElement.scrollIntoView({ behavior: 'smooth' });
    }

    setQuizState('playing');
    setScore(0);
    setWeakTopics([]);
    
    // 1. Try to find existing questions for this section in the 50 questions
    const existingQuestions = initialQuiz.filter(q => q.relatedSectionId === sectionId || q.relatedSectionId.startsWith(sectionId + '.'));
    
    if (existingQuestions.length > 0) {
      setCurrentQuestions(existingQuestions);
    } else {
      // 2. Fallback: Generate questions for this specific topic using AI
      try {
        const newQuestions = await generateAdaptiveQuiz([topic], knowledgeBaseContext);
        if (newQuestions && newQuestions.length > 0) {
          setCurrentQuestions(newQuestions);
        }
      } catch (error) {
        console.error("Error generating specific quiz:", error);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <AuthScreen />;
  }

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-200 dark:selection:bg-indigo-900 selection:text-indigo-900 dark:selection:text-indigo-100 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-30 shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-inner">
              <BrainCircuit className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-emerald-600 dark:from-indigo-400 dark:to-emerald-400">
              OBE Revision
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 border-l border-slate-200 dark:border-slate-700 pl-4">
              {isAdmin && (
                <button
                  onClick={() => setShowAdminPanel(true)}
                  className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
                  title="Quản lý truy cập"
                >
                  <Shield className="w-4 h-4" />
                  Admin
                </button>
              )}
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300 hidden md:block">
                {user.email}
              </span>
              <button
                onClick={logout}
                className="p-2 text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
                title="Đăng xuất"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Chapter Selection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-wrap items-center gap-4">
          <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Chọn Chương:</span>
          <div className="flex gap-2">
            {chapters.map((ch) => (
              <button
                key={ch}
                onClick={() => setSelectedChapter(ch)}
                className={`px-6 py-2 rounded-lg font-bold transition-all duration-200 ${
                  selectedChapter === ch
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 scale-105'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
              >
                Chương {ch}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* Review Section */}
        <div className="min-h-[600px]">
          <ReviewSection 
            highlightedId={highlightedId} 
            selectedChapter={selectedChapter} 
            onStartSpecificQuiz={handleStartSpecificQuiz}
          />
        </div>

        {/* Quiz / Results Section */}
        <div id="quiz-section" className="min-h-[600px] scroll-mt-20">
          {quizState === 'playing' ? (
            <QuizSection 
              key={selectedChapter + (currentQuestions[0]?.topic || '')}
              questions={currentQuestions} 
              onLocateKnowledge={handleLocateKnowledge}
              onComplete={handleQuizComplete}
            />
          ) : (
            <ResultsSection 
              score={score}
              total={currentQuestions.length}
              weakTopics={weakTopics}
              knowledgeBaseContext={knowledgeBaseContext}
              onStartAdaptiveQuiz={handleStartAdaptiveQuiz}
              onReset={handleReset}
            />
          )}
        </div>
      </main>

      {/* Floating Theme Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed bottom-6 right-24 p-4 rounded-full shadow-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-amber-400 hover:scale-110 transition-all duration-300 z-40"
        title="Toggle Dark/Light Mode"
      >
        {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Floating AI Chat */}
      <ChatBox knowledgeBaseContext={knowledgeBaseContext} />

      {/* Admin Panel Modal */}
      {showAdminPanel && <AdminPanel onClose={() => setShowAdminPanel(false)} />}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
