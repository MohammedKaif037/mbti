import React from 'react';
import { Brain } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="animate-fadeIn max-w-3xl mx-auto text-center">
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-4 rounded-full">
            <Brain size={48} className="text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
          MBTI Personality Quiz
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Discover your personality type with our fun and interactive quiz! 
          Find out if you're an introvert or extrovert, how you process information, 
          make decisions, and structure your world.
        </p>
        
        <div className="bg-purple-100 rounded-lg p-4 mb-8 text-left">
          <h3 className="font-bold text-purple-800 mb-2">What is MBTI?</h3>
          <p className="text-gray-700">
            The Myers-Briggs Type Indicator (MBTI) sorts people into 16 personality types 
            based on how they perceive the world and make decisions. This quiz will help 
            you discover which of the 16 types matches your personality!
          </p>
        </div>
        
        <button
          onClick={onStart}
          className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-lg font-medium py-3 px-8 rounded-lg hover:opacity-90 transition-all transform hover:scale-105"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;