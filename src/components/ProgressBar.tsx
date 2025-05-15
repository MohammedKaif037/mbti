import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';

interface AnswerStatus {
  isAnswered: boolean;
  isCorrect?: boolean; // Optional for scored quizzes
}

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
  onJumpToQuestion: (index: number) => void;
  userAnswers: Record<number, string>;
  questionStatuses?: Record<number, AnswerStatus>; // Optional for tracking correct/incorrect answers
  allowNavigation?: boolean; // Control if users can jump between questions
  showPercentage?: boolean;
  theme?: 'purple' | 'blue' | 'green' | 'gray';
  showSummary?: boolean; // Show completion summary
  onComplete?: () => void; // Callback when all questions are answered
  sectionBreaks?: number[]; // Optional breakpoints for multi-section quizzes
}

const ProgressBar = ({
  currentQuestion,
  totalQuestions,
  onJumpToQuestion,
  userAnswers,
  questionStatuses,
  allowNavigation = true,
  showPercentage = true,
  theme = 'purple',
  showSummary = true,
  onComplete,
  sectionBreaks = [],
}: ProgressBarProps) => {
  // Calculate progress percentage
  const progress = Math.min(((currentQuestion) / totalQuestions) * 100, 100);
  
  // Count answered questions
  const answeredCount = Object.keys(userAnswers).length;
  const [showCompletionToast, setShowCompletionToast] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);
  
  // Theme colors mapping
  const themeColors = {
    purple: {
      light: 'bg-purple-200',
      medium: 'bg-purple-400',
      dark: 'bg-purple-600',
      text: 'text-purple-700',
      textDark: 'text-purple-900',
      gradient: 'from-purple-500 to-pink-500',
      hover: 'hover:bg-purple-200',
      ring: 'focus:ring-purple-400',
    },
    blue: {
      light: 'bg-blue-200',
      medium: 'bg-blue-400',
      dark: 'bg-blue-600',
      text: 'text-blue-700',
      textDark: 'text-blue-900',
      gradient: 'from-blue-500 to-indigo-500',
      hover: 'hover:bg-blue-200',
      ring: 'focus:ring-blue-400',
    },
    green: {
      light: 'bg-emerald-200',
      medium: 'bg-emerald-400',
      dark: 'bg-emerald-600',
      text: 'text-emerald-700',
      textDark: 'text-emerald-900',
      gradient: 'from-emerald-500 to-teal-500',
      hover: 'hover:bg-emerald-200',
      ring: 'focus:ring-emerald-400',
    },
    gray: {
      light: 'bg-gray-200',
      medium: 'bg-gray-400',
      dark: 'bg-gray-600',
      text: 'text-gray-700',
      textDark: 'text-gray-900',
      gradient: 'from-gray-500 to-slate-500',
      hover: 'hover:bg-gray-200',
      ring: 'focus:ring-gray-400',
    },
  };
  
  const colors = themeColors[theme];

  // Animation effects
  useEffect(() => {
    setAnimateProgress(true);
    const timer = setTimeout(() => setAnimateProgress(false), 600);
    return () => clearTimeout(timer);
  }, [currentQuestion]);

  // Check if all questions are answered and show completion toast
  useEffect(() => {
    if (answeredCount === totalQuestions && answeredCount > 0) {
      setShowCompletionToast(true);
      onComplete?.();
      const timer = setTimeout(() => setShowCompletionToast(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [answeredCount, totalQuestions, onComplete]);

  // Get status for each question
  const getQuestionStatus = (questionId: number) => {
    const isAnswered = userAnswers[questionId] !== undefined;
    const isCurrent = questionId === currentQuestion;
    
    if (questionStatuses && questionStatuses[questionId]) {
      return {
        isAnswered,
        isCurrent,
        isCorrect: questionStatuses[questionId].isCorrect,
      };
    }
    
    return { isAnswered, isCurrent, isCorrect: undefined };
  };

  // Generate aria label for each question button
  const getAriaLabel = (questionId: number, status: ReturnType<typeof getQuestionStatus>) => {
    let label = `Question ${questionId}`;
    
    if (status.isCurrent) {
      label += " (current)";
    }
    
    if (status.isAnswered) {
      label += " - answered";
      if (status.isCorrect !== undefined) {
        label += status.isCorrect ? " correctly" : " incorrectly";
      }
    } else {
      label += " - not answered";
    }
    
    return label;
  };

  return (
    <div className="w-full mb-8 space-y-4" role="navigation" aria-label="Quiz progress">
      {/* Header with progress stats */}
      <div className="flex flex-wrap justify-between items-center mb-1 text-sm font-medium">
        <span className={`${colors.textDark} font-semibold`}>
          Question {currentQuestion} of {totalQuestions}
        </span>
        
        <div className="flex items-center gap-3">
          {showSummary && (
            <span className={`${colors.text} font-medium`}>
              {answeredCount} of {totalQuestions} answered
            </span>
          )}
          
          {showPercentage && (
            <span className={`${colors.textDark} font-bold px-2 py-1 rounded-full bg-opacity-10 ${colors.light}`}>
              {Math.round(progress)}% Complete
            </span>
          )}
        </div>
      </div>
      
      {/* Progress bar */}
      <div 
        className={`h-3 ${colors.light} rounded-full overflow-hidden mb-4 shadow-inner`}
        role="progressbar" 
        aria-valuenow={Math.round(progress)} 
        aria-valuemin={0} 
        aria-valuemax={100}
      >
        <div 
          className={`h-full bg-gradient-to-r ${colors.gradient} transition-all duration-500 ease-out ${animateProgress ? 'animate-pulse' : ''}`}
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Section breaks indicator */}
      {sectionBreaks.length > 0 && (
        <div className="relative h-6 mb-6">
          {sectionBreaks.map((breakPoint, idx) => {
            const position = (breakPoint / totalQuestions) * 100;
            return (
              <div 
                key={idx}
                className={`absolute h-6 w-px ${colors.dark} bottom-1`}
                style={{ left: `${position}%` }}
                aria-hidden="true"
              >
                <div className={`absolute -top-6 -translate-x-1/2 text-xs font-medium ${colors.textDark} whitespace-nowrap`}>
                  Section {idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      )}
      
      {/* Question navigation buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        {Array.from({ length: totalQuestions }).map((_, index) => {
          const questionId = index + 1;
          const status = getQuestionStatus(questionId);
          
          let buttonClasses = "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 shadow-sm";
          
          if (status.isCurrent) {
            buttonClasses += ` bg-gradient-to-r ${colors.gradient} text-white scale-110 shadow-md`;
          } else if (status.isAnswered) {
            if (status.isCorrect === true) {
              buttonClasses += " bg-emerald-500 text-white";
            } else if (status.isCorrect === false) {
              buttonClasses += " bg-red-500 text-white";
            } else {
              buttonClasses += ` ${colors.medium} text-white`;
            }
          } else {
            buttonClasses += ` ${colors.light} ${colors.text} ${allowNavigation ? colors.hover : ''}`;
          }
          
          if (!allowNavigation && !status.isCurrent) {
            buttonClasses += " opacity-60 cursor-not-allowed";
          }
          
          return (
            <button
              key={index}
              onClick={() => allowNavigation && onJumpToQuestion(questionId)}
              disabled={!allowNavigation && !status.isCurrent}
              className={buttonClasses}
              aria-label={getAriaLabel(questionId, status)}
              aria-current={status.isCurrent ? 'step' : undefined}
              tabIndex={allowNavigation || status.isCurrent ? 0 : -1}
            >
              {questionId}
            </button>
          );
        })}
      </div>

      {/* Completion toast message */}
      {showCompletionToast && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 flex items-center gap-3 max-w-xs z-50 border border-gray-100">
          <div className={`${colors.dark} p-2 rounded-full`}>
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="font-medium text-gray-800">All questions answered!</h4>
            <p className="text-sm text-gray-600">You can now submit your quiz.</p>
          </div>
        </div>
      )}
      
      {/* Legend (only show if we're tracking correct/incorrect answers) */}
      {questionStatuses && (
        <div className="flex justify-center mt-4 gap-4 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <div className={`w-3 h-3 rounded-full ${colors.light}`}></div>
            <span>Not answered</span>
          </div>
          <div className="flex items-center gap-1">
            <div className={`w-3 h-3 rounded-full ${colors.medium}`}></div>
            <span>Answered</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            <span>Correct</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <span>Incorrect</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
