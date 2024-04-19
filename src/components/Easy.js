import React from 'react';
import GameLevel from './GameLevel';
import '../styling/Easy.css';

const Easy = () => {
  // Define the conditions for the Easy level
  const initialTimerDuration = 40; // Initial timer duration in seconds
  const initialChances = 3; // Initial number of chances
  const maxQuestions = 20; // Maximum number of questions

  return (
    <GameLevel
      difficulty="Easy"
      initialTimerDuration={initialTimerDuration}
      initialChances={initialChances}
      maxQuestions={maxQuestions}
    />
  );
};

export default Easy;
