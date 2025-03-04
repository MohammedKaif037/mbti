import React, { useState, useEffect } from 'react';
import { questions } from './data/questions';
import { mbtiResults } from './data/results';
import { UserAnswers } from './types';
import { calculateMBTIType } from './utils/calculateResult';
import QuestionCard from './components/QuestionCard';
import ProgressBar from './components/ProgressBar';
import ResultCard from './components/ResultCard';
import WelcomeScreen from './components/WelcomeScreen';
import { ArrowLeft } from 'lucide-react';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'quiz' | 'result'>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [mbtiType, setMbtiType] = useState<string | null>(null);
  const [allowSkipping, setAllowSkipping] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleStartQuiz = () => {
    setCurrentScreen('quiz');
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setMbtiType(null);
  };

  const handleSelectAnswer = (questionId: number, value: string) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: value }));
    
    // Auto-advance after a short delay
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        finishQuiz();
      }
    }, 500);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      finishQuiz();
    }
  };

  const handleJumpToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const finishQuiz = () => {
    // Calculate result
    const result = calculateMBTIType(userAnswers);
    setMbtiType(result);
    setCurrentScreen('result');
    setShowConfetti(true);
    
    // Hide confetti after 5 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  const handleRestart = () => {
    setCurrentScreen('welcome');
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setMbtiType(null);
  };

  const toggleSkipping = () => {
    setAllowSkipping(prev => !prev);
  };

  const handleBackToQuiz = () => {
    setCurrentScreen('quiz');
  };

  // Check if all questions are answered
  const allQuestionsAnswered = questions.every(q => userAnswers[q.id] !== undefined);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-10 px-4">
      <div className="container mx-auto">
        {currentScreen === 'welcome' && (
          <WelcomeScreen onStart={handleStartQuiz} />
        )}

        {currentScreen === 'quiz' && (
          <div className="max-w-3xl mx-auto">
            <ProgressBar 
              currentQuestion={currentQuestionIndex + 1} 
              totalQuestions={questions.length}
              onJumpToQuestion={handleJumpToQuestion}
              userAnswers={userAnswers}
            />
            
            <div className="relative">
              {questions.map((question, index) => (
                <QuestionCard
                  key={question.id}
                  question={question}
                  selectedAnswer={userAnswers[question.id] || null}
                  onSelectAnswer={handleSelectAnswer}
                  isActive={index === currentQuestionIndex}
                  onPrevious={handlePreviousQuestion}
                  onNext={handleNextQuestion}
                  isFirstQuestion={index === 0}
                  isLastQuestion={index === questions.length - 1}
                  canSkipToNext={allowSkipping}
                />
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
              <div className="flex items-center mb-4 sm:mb-0">
                <input
                  type="checkbox"
                  id="allowSkipping"
                  checked={allowSkipping}
                  onChange={toggleSkipping}
                  className="mr-2 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="allowSkipping" className="text-sm text-gray-600">
                  Allow skipping questions
                </label>
              </div>

              {allQuestionsAnswered && (
                <button
                  onClick={finishQuiz}
                  className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 px-6 rounded-lg font-medium hover:opacity-90 transition-all transform hover:scale-105 shadow-md"
                >
                  See My Results
                </button>
              )}
            </div>
          </div>
        )}

        {currentScreen === 'result' && mbtiType && (
          <>
            {showConfetti && (
              <div className="fixed inset-0 pointer-events-none z-50" id="confetti-container"></div>
            )}
            <div className="mb-6">
              <button
                onClick={handleBackToQuiz}
                className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
              >
                <ArrowLeft size={20} />
                Back to Quiz
              </button>
            </div>
            <ResultCard 
              result={mbtiResults[mbtiType]} 
              onRestart={handleRestart} 
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;