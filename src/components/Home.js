import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Home.css'; // Adjust the import path
import logo from '../Images/tomato mg.png'; // Import the tomato logo image

function Home() {
  // Sample username/email (replace with actual logic to get username/email)
  const usernameOrEmail = "example_user";

  return (
    <div className="home-container">
      <div className="background-image"></div>
      <div className="game-info">
        <img src={logo} alt="Matopuzzle Logo" className="game-logo" />
        <h1 className="game-name">Matopuzzle</h1>
        <p className="welcome-note">Welcome, {usernameOrEmail}</p>
      </div>
      <div className="navigation">
        <Link to="/start-game" className="nav-button">Start Game</Link>
        <Link to="/howtoplay" className="nav-button">How to Play</Link>
        <Link to="/leaderboard" className="nav-button">Leaderboard</Link>
        <Link to="/my-profile" className="nav-button">My Profile</Link>
        <Link to="/logout" className="nav-button">Logout</Link>
      </div>
    </div>
  );
}

export default Home;
