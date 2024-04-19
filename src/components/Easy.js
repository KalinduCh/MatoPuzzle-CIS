import React from 'react';
import GameLevel from './GameLevel';
import '../styling/Easy.css';

const Easy = () => {
  return (
    <GameLevel
      difficulty="Easy"
      initialTimerDuration={40}
      initialChances={3}
    />
  );
};

export default Easy;
