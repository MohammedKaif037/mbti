import React from 'react';

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentQuestion, totalQuestions }) => {
  const progress = (currentQuestion / totalQuestions) * 100;
  
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2 text-sm font-medium">
        <span className="text-purple-600">Question {currentQuestion} of {totalQuestions}</span>
        <span className="text-purple-600">{Math.round(progress)}% Complete</span>
      </div>
      <div className="h-3 bg-purple-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;