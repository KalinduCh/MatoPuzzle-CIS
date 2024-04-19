import React from 'react';
import GameLevel from './GameLevel';
import '../styling/Hard.css';


const Hard = () => {
  return (
    <GameLevel
      difficulty="Hard"
      initialTimerDuration={20}
      initialChances={2}
    />
  );
};

export default Hard;
