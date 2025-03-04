import React from 'react';
import { MBTIResult } from '../types';
import { Share, RefreshCw, Download } from 'lucide-react';

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
    ctx.fillStyle = '#333'; // Increased opacity here

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
          {/* Increased opacity for description */}
          <p className="text-xl md:text-2xl text-black">{result.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-purple-700">Strengths</h3>
            <ul className="list-disc pl-5 space-y-1">
              {result.strengths.map((strength, index) => (
                <li key={index} className="text-gray-700">{strength}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-purple-700">Weaknesses</h3>
            <ul className="list-disc pl-5 space-y-1">
              {result.weaknesses.map((weakness, index) => (
                <li key={index} className="text-gray-700">{weakness}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow mb-8">
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
          {/* Increased opacity for icons */}
          <button
            onClick={shareResult}
            className="flex items-center justify-center gap-2 bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            <Share size={20} color="#FFFFFF" /> {/* Explicitly set icon color */}
            Share Result
          </button>

          <button
            onClick={downloadResult}
            className="flex items-center justify-center gap-2 bg-pink-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-pink-600 transition-colors"
          >
            <Download size={20} color="#FFFFFF" /> {/* Explicitly set icon color */}
            Download Image
          </button>

          <button
            onClick={onRestart}
            className="flex items-center justify-center gap-2 bg-white text-purple-600 border-2 border-purple-600 py-3 px-6 rounded-lg font-medium hover:bg-purple-50 transition-colors"
          >
            <RefreshCw size={20} color="#800080" /> {/* Explicitly set icon color */}
            Take Quiz Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;