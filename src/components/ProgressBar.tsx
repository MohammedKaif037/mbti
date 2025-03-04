import React from 'react';

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
  onJumpToQuestion: (index: number) => void;
  userAnswers: Record<number, string>;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  currentQuestion, 
  totalQuestions, 
  onJumpToQuestion,
  userAnswers
}) => {
  const progress = (currentQuestion / totalQuestions) * 100;
  
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2 text-sm font-medium">
        <span className="text-purple-600">Question {currentQuestion} of {totalQuestions}</span>
        <span className="text-purple-600">{Math.round(progress)}% Complete</span>
      </div>
      
      <div className="h-3 bg-purple-200 rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="flex flex-wrap gap-2 justify-center">
        {Array.from({ length: totalQuestions }).map((_, index) => {
          const questionId = index + 1;
          const isAnswered = userAnswers[questionId] !== undefined;
          const isCurrent = index === currentQuestion - 1;
          
          return (
            <button
              key={index}
              onClick={() => onJumpToQuestion(index)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                isCurrent
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white scale-110 shadow-md'
                  : isAnswered
                  ? 'bg-purple-400 text-white'
                  : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
              }`}
              aria-label={`Go to question ${index + 1}`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;