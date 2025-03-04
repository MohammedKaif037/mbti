import React from 'react';
import { Question, Option } from '../types';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | null;
  onSelectAnswer: (questionId: number, value: string) => void;
  isActive: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  selectedAnswer, 
  onSelectAnswer,
  isActive
}) => {
  return (
    <div className={`transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none absolute'}`}>
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-purple-700">
          {question.text}
        </h2>
        
        <div className="space-y-4">
          {question.options.map((option: Option) => (
            <button
              key={option.value}
              onClick={() => onSelectAnswer(question.id, option.value)}
              className={`w-full p-4 rounded-lg text-left transition-all duration-300 hover:shadow-md ${
                selectedAnswer === option.value
                  ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-purple-100 hover:bg-purple-200'
              }`}
            >
              <span className="text-lg">{option.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;