import React from 'react';
import { MBTIResult } from '../types';
import { Share } from 'lucide-react';

interface ResultCardProps {
  result: MBTIResult;
  onRestart: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ result, onRestart }) => {
  const shareResult = () => {
    if (navigator.share) {
      navigator.share({
        title: `I'm an ${result.type} personality type!`,
        text: `According to the MBTI test, I'm an ${result.type} (${result.description}). Take the test to find out your type!`,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(
        `I'm an ${result.type} personality type! ${result.description} Take the test to find out your type! ${window.location.href}`
      );
      alert('Result copied to clipboard! Share it with your friends.');
    }
  };

  return (
    <div className="animate-fadeIn">
      <div 
        className="rounded-xl shadow-xl p-8 max-w-3xl mx-auto"
        style={{ backgroundColor: `${result.color}20` }} // Using the color with 20% opacity
      >
        <div className="text-center mb-8">
          <div 
            className="text-6xl md:text-8xl font-bold mb-4 inline-block p-4 rounded-full"
            style={{ color: result.color }}
          >
            {result.emoji}
          </div>
          <h1 
            className="text-4xl md:text-5xl font-extrabold mb-2"
            style={{ color: result.color }}
          >
            {result.type}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700">{result.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold mb-3 text-purple-700">Strengths</h3>
            <ul className="list-disc pl-5 space-y-1">
              {result.strengths.map((strength, index) => (
                <li key={index} className="text-gray-700">{strength}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold mb-3 text-purple-700">Weaknesses</h3>
            <ul className="list-disc pl-5 space-y-1">
              {result.weaknesses.map((weakness, index) => (
                <li key={index} className="text-gray-700">{weakness}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md mb-8">
          <h3 className="text-xl font-bold mb-3 text-purple-700">Famous {result.type}s</h3>
          <div className="flex flex-wrap gap-2">
            {result.famousPeople.map((person, index) => (
              <span 
                key={index} 
                className="px-3 py-1 rounded-full text-white"
                style={{ backgroundColor: result.color }}
              >
                {person}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={shareResult}
            className="flex items-center justify-center gap-2 bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            <Share size={20} />
            Share Result
          </button>
          
          <button
            onClick={onRestart}
            className="bg-white text-purple-600 border-2 border-purple-600 py-3 px-6 rounded-lg font-medium hover:bg-purple-50 transition-colors"
          >
            Take Quiz Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;