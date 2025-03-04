import React, { useState, useEffect } from 'react';
import { questions } from './data/questions';
import { mbtiResults } from './data/results';
import { UserAnswers } from './types';
import { calculateMBTIType } from './utils/calculateResult';
import QuestionCard from './components/QuestionCard';
import ProgressBar from './components/ProgressBar';
import ResultCard from './components/ResultCard';
import WelcomeScreen from './components/WelcomeScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'quiz' | 'result'>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [mbtiType, setMbtiType] = useState<string | null>(null);

  const handleStartQuiz = () => {
    setCurrentScreen('quiz');
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setMbtiType(null);
  };

  const handleSelectAnswer = (questionId: number, value: string) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: value }));
    
    // Move to next question after a short delay
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        // Calculate result
        const result = calculateMBTIType(userAnswers);
        setMbtiType(result);
        setCurrentScreen('result');
      }
    }, 500);
  };

  const handleRestart = () => {
    setCurrentScreen('welcome');
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setMbtiType(null);
  };

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
            />
            
            <div className="relative">
              {questions.map((question, index) => (
                <QuestionCard
                  key={question.id}
                  question={question}
                  selectedAnswer={userAnswers[question.id] || null}
                  onSelectAnswer={handleSelectAnswer}
                  isActive={index === currentQuestionIndex}
                />
              ))}
            </div>
          </div>
        )}

        {currentScreen === 'result' && mbtiType && (
          <ResultCard 
            result={mbtiResults[mbtiType]} 
            onRestart={handleRestart} 
          />
        )}
      </div>
    </div>
  );
}

export default App;