import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/StartGame.css'; // Adjust the import path

function StartGame() {
  return (
    <div className="start-game-container">
      <h2>Choose a Level</h2>
      <div className="level-buttons">
        <Link to="/easy" className="level-button">Easy</Link>
        <Link to="/intermediate" className="level-button">Intermediate</Link>
        <Link to="/hard" className="level-button">Hard</Link>
        <Link to="/game/tomato-time-wrap" className="special-level-button">Tomato Time Wrap</Link>
      </div>
    </div>
  );
}

export default StartGame;
