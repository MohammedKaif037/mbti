import React from 'react';
import { Question, Option } from '../types';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | null;
  onSelectAnswer: (questionId: number, value: string) => void;
  isActive: boolean;
  onPrevious: () => void;
  onNext: () => void;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  canSkipToNext: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  selectedAnswer, 
  onSelectAnswer,
  isActive,
  onPrevious,
  onNext,
  isFirstQuestion,
  isLastQuestion,
  canSkipToNext
}) => {
  return (
    <div className={`transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none absolute'}`}>
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-purple-700">
          {question.text}
        </h2>
        
        <div className="space-y-3 mb-8">
          {question.options.map((option: Option) => (
            <button
              key={option.value + option.text}
              onClick={() => onSelectAnswer(question.id, option.value)}
              className={`w-full p-4 rounded-lg text-left transition-all duration-300 hover:shadow-md ${
                selectedAnswer === option.value
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg transform scale-102'
                  : 'bg-purple-100 hover:bg-purple-200'
              }`}
            >
              <span className="text-lg">{option.text}</span>
            </button>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={onPrevious}
            disabled={isFirstQuestion}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              isFirstQuestion 
                ? 'opacity-50 cursor-not-allowed bg-gray-200 text-gray-500' 
                : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
            }`}
          >
            <ArrowLeft size={18} />
            Previous
          </button>
          
          <button
            onClick={onNext}
            disabled={!canSkipToNext && !selectedAnswer}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              !canSkipToNext && !selectedAnswer
                ? 'opacity-50 cursor-not-allowed bg-gray-200 text-gray-500'
                : 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:opacity-90'
            }`}
          >
            {isLastQuestion ? 'See Results' : 'Next'}
            {!isLastQuestion && <ArrowRight size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;