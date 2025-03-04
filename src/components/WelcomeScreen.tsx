import React from 'react';
import { Brain, ChevronRight, Info } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="animate-fadeIn max-w-3xl mx-auto text-center">
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-4 rounded-full shadow-lg transform hover:scale-105 transition-transform">
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
        
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-8 text-left border border-purple-100">
          <div className="flex items-start mb-2">
            <Info size={24} className="text-purple-600 mr-2 flex-shrink-0 mt-1" />
            <h3 className="font-bold text-purple-800 text-xl">What is MBTI?</h3>
          </div>
          <p className="text-gray-700 mb-4">
            The Myers-Briggs Type Indicator (MBTI) sorts people into 16 personality types 
            based on how they perceive the world and make decisions. This quiz will help 
            you discover which of the 16 types matches your personality!
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-sm">
            <div className="bg-white p-2 rounded shadow-sm">
              <span className="font-bold text-purple-700">E vs I</span>
              <p className="text-gray-600">Extraversion or Introversion</p>
            </div>
            <div className="bg-white p-2 rounded shadow-sm">
              <span className="font-bold text-purple-700">S vs N</span>
              <p className="text-gray-600">Sensing or Intuition</p>
            </div>
            <div className="bg-white p-2 rounded shadow-sm">
              <span className="font-bold text-purple-700">T vs F</span>
              <p className="text-gray-600">Thinking or Feeling</p>
            </div>
            <div className="bg-white p-2 rounded shadow-sm">
              <span className="font-bold text-purple-700">J vs P</span>
              <p className="text-gray-600">Judging or Perceiving</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <button
            onClick={onStart}
            className="group bg-gradient-to-r from-purple-600 to-pink-500 text-white text-lg font-medium py-3 px-8 rounded-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-md flex items-center"
          >
            Start Quiz
            <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-gray-500 mt-4 text-sm">
            Takes about 3 minutes • No sign-up required
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;