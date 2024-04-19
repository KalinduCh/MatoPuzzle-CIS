import React from 'react';
import GameLevel from './GameLevel';
import '../styling/Hard.css';


const Hard = () => {
  return (
    <GameLevel
      difficulty="Time Wrap"
      initialTimerDuration={20}
      initialChances={1}
    />
  );
};

export default Hard;
