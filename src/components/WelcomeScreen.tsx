import React, { useState, useEffect } from 'react';
import { Brain, ChevronRight, Info, Users, Clock, Award, Sparkles, ArrowRight, Star } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const [activeTab, setActiveTab] = useState('about');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoverType, setHoverType] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Sample type descriptions for preview
  const typeDescriptions = {
    'INTJ': {
      name: 'The Architect',
      color: '#3366cc',
      emoji: '🧠',
      description: 'Strategic thinkers with a plan for everything'
    },
    'ENFP': {
      name: 'The Campaigner',
      color: '#ff9933',
      emoji: '✨',
      description: 'Enthusiastic, creative, and sociable free spirits'
    },
    'ISFJ': {
      name: 'The Defender',
      color: '#669966',
      emoji: '🛡️',
      description: 'Protective, dedicated and warm protectors'
    },
    'ESTP': {
      name: 'The Entrepreneur',
      color: '#cc3333',
      emoji: '🏄',
      description: 'Smart, energetic and very perceptive people'
    }
  };

  return (
    <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 border-t-4 border-purple-600">
        {/* Header */}
        <div className="relative mb-8">
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-5 rounded-full shadow-lg flex items-center justify-center animate-pulse">
              <Brain size={48} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold pt-8 mb-3 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            MBTI Personality Quiz
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            Discover your unique personality type and unlock insights about your strengths, 
            communication style, and ideal career paths.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="flex items-center text-sm text-gray-500">
              <Users size={16} className="mr-1 text-purple-500" />
              <span>10M+ people tested</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock size={16} className="mr-1 text-purple-500" />
              <span>3 minutes</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Award size={16} className="mr-1 text-purple-500" />
              <span>Research-backed</span>
            </div>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <div className="flex flex-wrap justify-center">
            <button 
              onClick={() => setActiveTab('about')}
              className={`py-2 px-4 font-medium text-lg transition-colors ${
                activeTab === 'about' 
                  ? 'text-purple-600 border-b-2 border-purple-600' 
                  : 'text-gray-500 hover:text-purple-500'
              }`}
            >
              About MBTI
            </button>
            <button 
              onClick={() => setActiveTab('types')}
              className={`py-2 px-4 font-medium text-lg transition-colors ${
                activeTab === 'types' 
                  ? 'text-purple-600 border-b-2 border-purple-600' 
                  : 'text-gray-500 hover:text-purple-500'
              }`}
            >
              The 16 Types
            </button>
            <button 
              onClick={() => setActiveTab('benefits')}
              className={`py-2 px-4 font-medium text-lg transition-colors ${
                activeTab === 'benefits' 
                  ? 'text-purple-600 border-b-2 border-purple-600' 
                  : 'text-gray-500 hover:text-purple-500'
              }`}
            >
              Benefits
            </button>
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="mb-8">
          {/* About MBTI */}
          <div className={`transition-opacity duration-300 ${activeTab === 'about' ? 'block opacity-100' : 'hidden opacity-0'}`}>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 text-left border border-purple-100">
              <div className="flex items-start mb-4">
                <Info size={24} className="text-purple-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-purple-800 text-xl mb-2">What is MBTI?</h3>
                  <p className="text-gray-700">
                    The Myers-Briggs Type Indicator (MBTI) is one of the world's most popular personality assessments. 
                    Based on Carl Jung's theory of psychological types, it categorizes people into 16 distinct personality types.
                    Understanding your type can help you make better career choices, improve relationships, and gain self-awareness.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100 transform transition-transform hover:scale-105 hover:shadow-md">
                  <span className="font-bold text-purple-700 text-lg block mb-1">E vs I</span>
                  <p className="text-gray-600">Extraversion or Introversion</p>
                  <p className="text-xs text-gray-500 mt-2">How you gain energy</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100 transform transition-transform hover:scale-105 hover:shadow-md">
                  <span className="font-bold text-purple-700 text-lg block mb-1">S vs N</span>
                  <p className="text-gray-600">Sensing or Intuition</p>
                  <p className="text-xs text-gray-500 mt-2">How you process information</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100 transform transition-transform hover:scale-105 hover:shadow-md">
                  <span className="font-bold text-purple-700 text-lg block mb-1">T vs F</span>
                  <p className="text-gray-600">Thinking or Feeling</p>
                  <p className="text-xs text-gray-500 mt-2">How you make decisions</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100 transform transition-transform hover:scale-105 hover:shadow-md">
                  <span className="font-bold text-purple-700 text-lg block mb-1">J vs P</span>
                  <p className="text-gray-600">Judging or Perceiving</p>
                  <p className="text-xs text-gray-500 mt-2">How you approach life</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* The 16 Types */}
          <div className={`transition-opacity duration-300 ${activeTab === 'types' ? 'block opacity-100' : 'hidden opacity-0'}`}>
            <div className="text-left mb-4">
              <h3 className="font-bold text-purple-800 text-xl mb-2">The 16 Personality Types</h3>
              <p className="text-gray-700">
                MBTI identifies 16 distinct personality types based on four preference pairs. 
                Hover over each type below to see a brief description.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {Object.entries(typeDescriptions).map(([type, details]) => (
                <div 
                  key={type}
                  className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md"
                  style={{
                    borderLeft: hoverType === type ? `4px solid ${details.color}` : '4px solid transparent'
                  }}
                  onMouseEnter={() => setHoverType(type)}
                  onMouseLeave={() => setHoverType(null)}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold">{type}</span>
                    <span className="text-2xl" aria-hidden="true">{details.emoji}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{details.name}</p>
                  
                  {/* Preview description on hover */}
                  <div className={`overflow-hidden transition-all duration-300 ${hoverType === type ? 'max-h-20 mt-2' : 'max-h-0'}`}>
                    <p className="text-sm text-gray-600 italic">{details.description}</p>
                  </div>
                </div>
              ))}
              
              <div className="col-span-2 sm:col-span-4 text-center mt-2">
                <button 
                  className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center justify-center mx-auto"
                  onClick={() => setActiveTab('about')}
                >
                  <span>Plus 12 more types - discover yours!</span>
                  <ArrowRight size={14} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Benefits */}
          <div className={`transition-opacity duration-300 ${activeTab === 'benefits' ? 'block opacity-100' : 'hidden opacity-0'}`}>
            <div className="text-left">
              <h3 className="font-bold text-purple-800 text-xl mb-4">Why Take The MBTI Quiz?</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm flex">
                  <div className="bg-purple-100 p-2 rounded-full h-min mr-3">
                    <Sparkles size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-800 mb-1">Self-Awareness</h4>
                    <p className="text-sm text-gray-600">Gain deeper insights into your preferences, strengths, and potential blind spots</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm flex">
                  <div className="bg-purple-100 p-2 rounded-full h-min mr-3">
                    <Users size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-800 mb-1">Better Relationships</h4>
                    <p className="text-sm text-gray-600">Understand how you interact with others and improve communication</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm flex">
                  <div className="bg-purple-100 p-2 rounded-full h-min mr-3">
                    <Award size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-800 mb-1">Career Guidance</h4>
                    <p className="text-sm text-gray-600">Discover career paths and work environments where you'll likely thrive</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm flex">
                  <div className="bg-purple-100 p-2 rounded-full h-min mr-3">
                    <Star size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-800 mb-1">Personal Growth</h4>
                    <p className="text-sm text-gray-600">Identify areas for development and leverage your natural strengths</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -left-6 -top-6 w-12 h-12 bg-purple-100 rounded-full opacity-50 hidden md:block" aria-hidden="true"></div>
          <div className="absolute -right-4 -bottom-4 w-8 h-8 bg-pink-100 rounded-full opacity-50 hidden md:block" aria-hidden="true"></div>
          
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 md:p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-purple-800 mb-2">Ready to discover your personality type?</h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Take our research-backed quiz and join millions who've gained insights into their personality.
              </p>
              
              <button
                onClick={onStart}
                className="group bg-gradient-to-r from-purple-600 to-pink-500 text-white text-lg font-medium py-3 px-8 rounded-lg hover:shadow-lg transition-all transform hover:scale-105 shadow-md flex items-center justify-center mx-auto"
                aria-label="Start the MBTI personality quiz"
              >
                Start Quiz Now
                <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-gray-500 mt-4 text-sm flex items-center justify-center">
                <Clock size={14} className="mr-1" />
                Takes about 3 minutes • No sign-up required • Free results
              </p>
            </div>
            
            {/* Decorative gradient */}
            <div 
              className="absolute -right-24 -bottom-24 w-64 h-64 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-30 blur-lg"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
