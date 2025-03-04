import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Confetti component
const Confetti = () => {
  useEffect(() => {
    const container = document.getElementById('confetti-container');
    if (!container) return;

    const colors = ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'];
    
    const createConfetti = () => {
      const confetti = document.createElement('div');
      const size = Math.floor(Math.random() * 10) + 5; // 5-15px
      
      confetti.classList.add('confetti');
      
      // Random animation type
      const animationTypes = ['slow', 'medium', 'fast'];
      const animationType = animationTypes[Math.floor(Math.random() * animationTypes.length)];
      confetti.classList.add(`confetti--animation-${animationType}`);
      
      // Random color
      const color = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.backgroundColor = color;
      
      // Random size
      confetti.style.width = `${size}px`;
      confetti.style.height = `${size}px`;
      
      // Random position
      confetti.style.left = `${Math.floor(Math.random() * 100)}%`;
      
      // Random rotation
      confetti.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
      
      container.appendChild(confetti);
      
      // Remove confetti after animation completes
      setTimeout(() => {
        confetti.remove();
      }, 2500);
    };
    
    // Create confetti at intervals
    const interval = setInterval(createConfetti, 50);
    
    // Initial burst
    for (let i = 0; i < 50; i++) {
      setTimeout(createConfetti, i * 20);
    }
    
    // Clean up
    return () => {
      clearInterval(interval);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);
  
  return null;
};

const Root = () => {
  return (
    <StrictMode>
      <App />
      <Confetti />
    </StrictMode>
  );
};

createRoot(document.getElementById('root')!).render(<Root />);