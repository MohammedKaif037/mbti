import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Question, Option } from '../types';
import {
  ArrowLeft, ArrowRight, Timer,
  AlertCircle, CheckCircle,
  HelpCircle, MessageCircle
} from 'lucide-react';

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
  theme?: 'purple' | 'blue' | 'green' | 'gray';
  timeLimit?: number;
  showHints?: boolean;
  showFeedback?: boolean;
  isReview?: boolean;
  correctAnswer?: string;
  onAddNote?: (questionId: number, note: string) => void;
  existingNote?: string;
  onSkip?: () => void;
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
  canSkipToNext,
  theme = 'purple',
  timeLimit,
  showHints = false,
  showFeedback = false,
  isReview = false,
  correctAnswer,
  onAddNote,
  existingNote,
  onSkip
}) => {
  const [animateIn, setAnimateIn] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showNoteInput, setShowNoteInput] = useState(false);
  const [noteText, setNoteText] = useState(existingNote || '');
  const [remainingTime, setRemainingTime] = useState(timeLimit || 0);
  const [isTimeWarning, setIsTimeWarning] = useState(false);
  const [optionHover, setOptionHover] = useState<string | null>(null);

  const themeColors = {
    purple: {
      primary: 'from-purple-600 to-pink-500',
      light: 'bg-purple-100',
      hover: 'hover:bg-purple-200',
      text: 'text-purple-700',
      border: 'border-purple-300',
      ring: 'focus:ring-purple-400',
    },
    blue: {
      primary: 'from-blue-600 to-indigo-500',
      light: 'bg-blue-100',
      hover: 'hover:bg-blue-200',
      text: 'text-blue-700',
      border: 'border-blue-300',
      ring: 'focus:ring-blue-400',
    },
    green: {
      primary: 'from-emerald-600 to-teal-500',
      light: 'bg-emerald-100',
      hover: 'hover:bg-emerald-200',
      text: 'text-emerald-700',
      border: 'border-emerald-300',
      ring: 'focus:ring-emerald-400',
    },
    gray: {
      primary: 'from-gray-600 to-slate-500',
      light: 'bg-gray-100',
      hover: 'hover:bg-gray-200',
      text: 'text-gray-700',
      border: 'border-gray-300',
      ring: 'focus:ring-gray-400',
    }
  };

  const colors = themeColors[theme];

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setAnimateIn(true), 50);
      return () => clearTimeout(timer);
    } else {
      setAnimateIn(false);
    }
  }, [isActive]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isActive && timeLimit && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime(prev => {
          const newTime = prev - 1;
          if (newTime <= 10 && newTime > 0) setIsTimeWarning(true);
          if (newTime <= 0) {
            clearInterval(interval);
            if (!selectedAnswer && canSkipToNext) onNext();
          }
          return newTime;
        });
      }, 1000);
    }

    return () => interval && clearInterval(interval);
  }, [isActive, timeLimit, remainingTime, canSkipToNext, onNext, selectedAnswer]);

  useEffect(() => {
    if (timeLimit) {
      setRemainingTime(timeLimit);
      setIsTimeWarning(false);
    }
  }, [question.id, timeLimit]);

  useEffect(() => {
    if (!showNoteInput && noteText.trim() !== '' && onAddNote) {
      onAddNote(question.id, noteText);
    }
  }, [showNoteInput, noteText, onAddNote, question.id]);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleOptionSelect = (value: string) => {
    if (!isReview) {
      onSelectAnswer(question.id, value);
      if (!isLastQuestion && question.autoAdvance) {
        setTimeout(() => onNext(), 750);
      }
    }
  };

  const isCorrectOption = (value: string) =>
    isReview && correctAnswer === value;

  const isIncorrectSelection = (value: string) =>
    isReview && selectedAnswer === value && correctAnswer !== value;

  const getOptionFeedback = (option: Option) => {
    if (!showFeedback || !selectedAnswer) return null;
    if (selectedAnswer === option.value && option.feedback) {
      return (
        <div className="mt-2 text-sm p-2 rounded bg-gray-100">
          {isCorrectOption(option.value) ? (
            <div className="flex items-center text-emerald-600">
              <CheckCircle size={16} className="mr-1" />
              <span>{option.feedback}</span>
            </div>
          ) : isIncorrectSelection(option.value) ? (
            <div className="flex items-center text-red-600">
              <AlertCircle size={16} className="mr-1" />
              <span>{option.feedback}</span>
            </div>
          ) : (
            <div>{option.feedback}</div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className={`transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none absolute'} ${animateIn ? 'transform-none' : 'translate-y-4'}`}
      role="group"
      aria-labelledby={`question-${question.id}-title`}
      aria-hidden={!isActive}
    >
      <div className={`bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-2xl mx-auto ${isTimeWarning ? 'animate-pulse border-2 border-red-300' : ''}`}>
        <div className="flex justify-between items-start mb-4">
          {question.category && (
            <span className={`text-xs font-medium uppercase tracking-wider px-2 py-1 rounded-full ${colors.light} ${colors.text}`}>
              {question.category}
            </span>
          )}
          {timeLimit && isActive && (
            <div className={`flex items-center gap-1 ${isTimeWarning ? 'text-red-600' : 'text-gray-600'}`}>
              <Timer size={16} />
              <span className="font-mono">{formatTime(remainingTime)}</span>
            </div>
          )}
        </div>

        <h2 id={`question-${question.id}-title`} className={`text-2xl md:text-3xl font-bold mb-4 ${colors.text}`}>
          {question.text}
        </h2>

        {question.description && (
          <p className="text-gray-600 mb-6">{question.description}</p>
        )}

        {question.imageUrl && (
          <div className="mb-6 flex justify-center">
            <img
              src={question.imageUrl}
              alt={question.imageAlt || 'Question illustration'}
              className="rounded-lg max-h-64 object-contain"
            />
          </div>
        )}

        <div className="space-y-3 mb-6" role="radiogroup" aria-labelledby={`question-${question.id}-title`}>
          {question.options.map(option => {
            const isSelected = selectedAnswer === option.value;
            const isCorrect = isCorrectOption(option.value);
            const isIncorrect = isIncorrectSelection(option.value);
            const isHovered = optionHover === option.value;

            const optionClass = classNames(
              'w-full p-4 rounded-lg text-left transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2',
              colors.ring,
              {
                [`bg-gradient-to-r ${colors.primary} text-white shadow-lg scale-102`]: isSelected,
                'bg-emerald-100 border-2 border-emerald-400 text-emerald-700': isCorrect,
                'bg-red-100 border-2 border-red-400 text-red-700': isIncorrect,
                [`${colors.light} ${colors.hover} ${isHovered ? 'shadow-md' : ''}`]: !isSelected && !isCorrect && !isIncorrect
              }
            );

            const iconClass = classNames(
              'w-6 h-6 rounded-full flex items-center justify-center mr-3 border',
              {
                'bg-white text-purple-600 border-white': isSelected,
                'bg-emerald-500 text-white border-emerald-500': isCorrect,
                'bg-red-500 text-white border-red-500': isIncorrect,
                [`border-gray-300 ${colors.text}`]: !isSelected && !isCorrect && !isIncorrect
              }
            );

            return (
              <div key={option.value}>
                <button
                  onClick={() => handleOptionSelect(option.value)}
                  onMouseEnter={() => setOptionHover(option.value)}
                  onMouseLeave={() => setOptionHover(null)}
                  className={optionClass}
                  disabled={isReview}
                  aria-checked={isSelected}
                  role="radio"
                  aria-describedby={isSelected ? `feedback-${option.value}` : undefined}
                >
                  <div className="flex items-center">
                    <div className={iconClass}>
                      {isSelected && !isReview && <span className="text-xs font-bold">✓</span>}
                      {isCorrect && <CheckCircle size={14} />}
                      {isIncorrect && <AlertCircle size={14} />}
                    </div>
                    <span className="text-lg">{option.text}</span>
                  </div>
                </button>
                <div id={`feedback-${option.value}`}>{getOptionFeedback(option)}</div>
              </div>
            );
          })}
        </div>

        {showHints && question.hint && (
          <div className="mb-6">
            <button
              onClick={() => setShowHint(!showHint)}
              className={`text-sm flex items-center gap-1 ${colors.text} hover:underline`}
            >
              <HelpCircle size={16} />
              {showHint ? 'Hide hint' : 'Show hint'}
            </button>
            {showHint && (
              <div className={`mt-2 p-3 rounded-lg text-sm ${colors.light} border ${colors.border}`}>
                {question.hint}
              </div>
            )}
          </div>
        )}

        {onAddNote && (
          <div className="mb-6">
            <button
              onClick={() => setShowNoteInput(!showNoteInput)}
              className={`text-sm flex items-center gap-1 ${colors.text} hover:underline`}
            >
              <MessageCircle size={16} />
              {showNoteInput ? 'Hide notes' : existingNote ? 'Edit notes' : 'Add notes'}
            </button>
            {showNoteInput && (
              <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                className={`mt-2 p-3 w-full rounded-lg border ${colors.border} focus:outline-none focus:ring-2 ${colors.ring}`}
                placeholder="Add your notes or thoughts about this question..."
                rows={3}
              />
            )}
            {existingNote && !showNoteInput && (
              <div className={`mt-2 p-3 rounded-lg text-sm ${colors.light} border ${colors.border}`}>
                {existingNote}
              </div>
            )}
          </div>
        )}

        <div className="flex justify-between mt-6">
          <button
            onClick={onPrevious}
            disabled={isFirstQuestion}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all focus:outline-none focus:ring-2 ${colors.ring} ${
              isFirstQuestion
                ? 'opacity-50 cursor-not-allowed bg-gray-200 text-gray-500'
                : `${colors.light} ${colors.text} ${colors.hover}`
            }`}
            aria-label="Go to previous question"
          >
            <ArrowLeft size={18} />
            Previous
          </button>

          <div className="flex gap-2">
            {onSkip && !isLastQuestion && !isReview && !selectedAnswer && (
              <button
                onClick={onSkip}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 ${colors.ring}`}
                aria-label="Skip this question"
              >
                Skip
              </button>
            )}

            <button
              onClick={onNext}
              disabled={!canSkipToNext && !selectedAnswer}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all focus:outline-none focus:ring-2 ${colors.ring} ${
                !canSkipToNext && !selectedAnswer
                  ? 'opacity-50 cursor-not-allowed bg-gray-200 text-gray-500'
                  : `bg-gradient-to-r ${colors.primary} text-white hover:opacity-90`
              }`}
              aria-label={isLastQuestion ? 'Complete quiz and see results' : 'Go to next question'}
            >
              {isLastQuestion ? 'See Results' : 'Next'}
              {!isLastQuestion && <ArrowRight size={18} />}
            </button>
          </div>
        </div>

        {question.points && (
          <div className="text-xs text-gray-500 text-right mt-4">
            Points: {question.points}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
