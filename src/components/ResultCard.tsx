import React, { useState, useEffect } from 'react';
import { MBTIResult } from '../types';
import { Share, RefreshCw, Download, Info, Copy, X, ChevronDown, ChevronUp } from 'lucide-react';

interface ResultCardProps {
  result: MBTIResult;
  onRestart: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ result, onRestart }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState('');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [animation, setAnimation] = useState('animate-fadeIn');

  useEffect(() => {
    // Reset animation when result changes
    setAnimation('animate-fadeIn');
    const timer = setTimeout(() => {
      setAnimation('');
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [result.type]);

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
      showTooltipMessage('Result copied to clipboard!');
    }
  };

  const copyText = () => {
    navigator.clipboard.writeText(
      `MBTI Result: ${result.type}\n\n${result.description}\n\nStrengths:\n${result.strengths.join('\n')}\n\nWeaknesses:\n${result.weaknesses.join('\n')}\n\nFamous ${result.type}s:\n${result.famousPeople.join(', ')}`
    );
    showTooltipMessage('Result copied to clipboard!');
  };

  const showTooltipMessage = (message) => {
    setTooltipMessage(message);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 3000);
  };

  const downloadResult = () => {
    // Create a canvas element to generate an image
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = 1200;
    canvas.height = 630;

    // Draw background
    ctx.fillStyle = `${result.color}20`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw border
    ctx.strokeStyle = result.color;
    ctx.lineWidth = 20;
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

    // Draw emoji
    ctx.font = 'bold 120px Arial';
    ctx.fillText(result.emoji, 600 - 60, 200);

    // Draw type
    ctx.font = 'bold 80px Arial';
    ctx.fillStyle = result.color;
    ctx.textAlign = 'center';
    ctx.fillText(result.type, 600, 320);

    // Draw description
    ctx.font = '30px Arial';
    ctx.fillStyle = '#333';

    // Wrap text for description
    const words = result.description.split(' ');
    let line = '';
    let y = 400;

    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;

      if (testWidth > 1000 && i > 0) {
        ctx.fillText(line, 600, y);
        line = words[i] + ' ';
        y += 40;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, 600, y);

    // Add website URL
    ctx.font = '24px Arial';
    ctx.fillStyle = '#666';
    ctx.fillText('Take the test at: ' + window.location.host, 600, 580);

    // Convert canvas to image and download
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `${result.type}-personality.png`;
    link.href = dataUrl;
    link.click();
    
    showTooltipMessage('Image downloaded!');
  };

  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const personalityTraits = {
    extraversion: result.type.includes('E') ? 'Extraversion' : 'Introversion',
    sensing: result.type.includes('S') ? 'Sensing' : 'Intuition',
    thinking: result.type.includes('T') ? 'Thinking' : 'Feeling',
    judging: result.type.includes('J') ? 'Judging' : 'Perceiving'
  };

  const traitDescriptions = {
    Extraversion: "Energized by external world and people",
    Introversion: "Energized by internal thoughts and reflections",
    Sensing: "Focuses on concrete details and present reality",
    Intuition: "Focuses on patterns, possibilities and future",
    Thinking: "Makes decisions based on logic and objective analysis",
    Feeling: "Makes decisions based on values and harmony",
    Judging: "Prefers structure, planning and organization",
    Perceiving: "Prefers flexibility, spontaneity and adaptability"
  };

  const getTraitPercentage = (trait) => {
    // Mock data - in a real app this would come from the actual test results
    const percentages = {
      Extraversion: 65,
      Introversion: 35,
      Sensing: 45,
      Intuition: 55,
      Thinking: 60,
      Feeling: 40,
      Judging: 70,
      Perceiving: 30
    };
    
    return percentages[trait] || 50;
  };

  return (
    <div className={`relative ${animation}`}>
      {/* Tooltip */}
      {showTooltip && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-purple-800 text-white py-2 px-4 rounded-lg shadow-lg z-50 flex items-center gap-2">
          {tooltipMessage}
          <button 
            onClick={() => setShowTooltip(false)} 
            className="ml-2 text-white"
            aria-label="Close notification"
          >
            <X size={16} />
          </button>
        </div>
      )}

      <div
        className="rounded-xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto border-2"
        style={{ 
          backgroundColor: `${result.color}10`,
          borderColor: result.color
        }}
      >
        <div className="text-center mb-8">
          <div
            className="text-6xl md:text-8xl font-bold mb-4 inline-block p-4 rounded-full animate-pulse"
            style={{ color: result.color }}
            aria-hidden="true"
          >
            {result.emoji}
          </div>
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-2"
            style={{ color: result.color }}
          >
            {result.type}
          </h1>
          <div className="flex items-center justify-center flex-wrap gap-2 mb-4">
            {Object.values(personalityTraits).map((trait) => (
              <span key={trait} 
                className="px-3 py-1 rounded-full text-white text-sm font-medium flex items-center gap-1"
                style={{ backgroundColor: result.color }}
                title={traitDescriptions[trait]}
              >
                {trait}
                <Info size={14} className="cursor-help" />
              </span>
            ))}
          </div>
          <p className="text-xl md:text-2xl text-black font-medium">{result.description}</p>
        </div>

        {/* Trait percentage bars */}
        <div className="bg-white rounded-lg p-6 shadow-md mb-6">
          <h3 className="text-xl font-bold mb-4 text-purple-700">Your Personality Traits</h3>
          <div className="space-y-4">
            {Object.entries(personalityTraits).map(([key, trait]) => {
              const percentage = getTraitPercentage(trait);
              const opposite = traitDescriptions[trait].split(" ")[0] === "Energized" ? 
                (trait === "Extraversion" ? "Introversion" : "Extraversion") :
                (trait === "Sensing" ? "Intuition" : 
                 trait === "Intuition" ? "Sensing" :
                 trait === "Thinking" ? "Feeling" :
                 trait === "Feeling" ? "Thinking" :
                 trait === "Judging" ? "Perceiving" : "Judging");
              
              return (
                <div key={key} className="w-full">
                  <div className="flex justify-between mb-1 text-sm font-medium">
                    <span>{trait} ({percentage}%)</span>
                    <span>{opposite} ({100-percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${percentage}%`,
                        backgroundColor: result.color 
                      }}
                      aria-valuenow={percentage}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div 
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            style={{ borderTop: `4px solid ${result.color}` }}
          >
            <button 
              onClick={() => toggleSection('strengths')}
              className="w-full p-4 flex justify-between items-center text-left hover:bg-gray-50"
              aria-expanded={expandedSection === 'strengths'}
            >
              <h3 className="text-xl font-bold text-purple-700">Strengths</h3>
              {expandedSection === 'strengths' ? 
                <ChevronUp size={20} className="text-purple-700" /> : 
                <ChevronDown size={20} className="text-purple-700" />
              }
            </button>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedSection === 'strengths' ? 'max-h-96' : 'max-h-0'}`}>
              <ul className="list-disc pl-10 pr-4 pb-4 space-y-2">
                {result.strengths.map((strength, index) => (
                  <li key={index} className="text-gray-700">{strength}</li>
                ))}
              </ul>
            </div>
          </div>

          <div 
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            style={{ borderTop: `4px solid ${result.color}` }}
          >
            <button 
              onClick={() => toggleSection('weaknesses')}
              className="w-full p-4 flex justify-between items-center text-left hover:bg-gray-50"
              aria-expanded={expandedSection === 'weaknesses'}
            >
              <h3 className="text-xl font-bold text-purple-700">Weaknesses</h3>
              {expandedSection === 'weaknesses' ? 
                <ChevronUp size={20} className="text-purple-700" /> : 
                <ChevronDown size={20} className="text-purple-700" />
              }
            </button>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedSection === 'weaknesses' ? 'max-h-96' : 'max-h-0'}`}>
              <ul className="list-disc pl-10 pr-4 pb-4 space-y-2">
                {result.weaknesses.map((weakness, index) => (
                  <li key={index} className="text-gray-700">{weakness}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div 
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow mb-8 overflow-hidden"
          style={{ borderTop: `4px solid ${result.color}` }}
        >
          <button 
            onClick={() => toggleSection('famous')}
            className="w-full p-4 flex justify-between items-center text-left hover:bg-gray-50"
            aria-expanded={expandedSection === 'famous'}
          >
            <h3 className="text-xl font-bold text-purple-700">Famous {result.type}s</h3>
            {expandedSection === 'famous' ? 
              <ChevronUp size={20} className="text-purple-700" /> : 
              <ChevronDown size={20} className="text-purple-700" />
            }
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedSection === 'famous' ? 'max-h-96' : 'max-h-0'}`}>
            <div className="flex flex-wrap gap-2 p-4">
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
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={shareResult}
            className="flex items-center justify-center gap-2 bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors focus:ring-2 focus:ring-purple-400 focus:outline-none"
            aria-label="Share your result"
          >
            <Share size={20} />
            Share Result
          </button>

          <button
            onClick={copyText}
            className="flex items-center justify-center gap-2 bg-indigo-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-600 transition-colors focus:ring-2 focus:ring-indigo-300 focus:outline-none"
            aria-label="Copy result to clipboard"
          >
            <Copy size={20} />
            Copy Text
          </button>

          <button
            onClick={downloadResult}
            className="flex items-center justify-center gap-2 bg-pink-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-pink-600 transition-colors focus:ring-2 focus:ring-pink-300 focus:outline-none"
            aria-label="Download result as image"
          >
            <Download size={20} />
            Download Image
          </button>

          <button
            onClick={onRestart}
            className="flex items-center justify-center gap-2 bg-white text-purple-600 border-2 border-purple-600 py-3 px-6 rounded-lg font-medium hover:bg-purple-50 transition-colors focus:ring-2 focus:ring-purple-300 focus:outline-none"
            aria-label="Take the quiz again"
          >
            <RefreshCw size={20} className="text-purple-600" />
            Take Quiz Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
