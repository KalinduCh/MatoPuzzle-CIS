import React, { useState, useEffect } from 'react';
import '../styling/HowToPlay.css'; // Import the CSS file for styling

const HowToPlay = () => {
  const steps = [
    "Step 1: Start the game by selecting a level.",
    "Step 2: Read the question and look at the image carefully.",
    "Step 3: Type your answer in the input field and submit.",
    "Step 4: If your answer is correct, you'll earn points.",
    "Step 5: Keep playing and try to achieve the highest score!"
  ];

  const [stepIndex, setStepIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const text = steps[stepIndex];
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex === text.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIsTyping(false);
        }, 1000);
      } else {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        currentIndex++;
      }
    }, 100);

    return () => clearInterval(interval);
  }, [stepIndex, steps]);

  useEffect(() => {
    if (!isTyping) {
      setTimeout(() => {
        setCurrentText('');
        setIsTyping(true);
        setStepIndex((prevIndex) => (prevIndex + 1) % steps.length);
      }, 2000);
    }
  }, [isTyping, stepIndex, steps.length]);

  return (
    <div className="how-to-play-container">
      <h2 className="how-to-play-title">How to Play</h2>
      <div className="instruction-container">
        <p className="instruction-text">{currentText}</p>
      </div>
    </div>
  );
};

export default HowToPlay;
