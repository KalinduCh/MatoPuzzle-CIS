import React from 'react';
import '../styling/SplashScreen.css'; // Adjust the import path

function SplashScreen() {
  return (
    <div className="splash-screen">
      <h1 className="game-name">Matopuzzle</h1>
      <div className="tomatoes-container">
        {[...Array(20)].map((_, index) => (
          <div key={index} className="tomato"></div>
        ))}
      </div>
    </div>
  );
}

export default SplashScreen;
