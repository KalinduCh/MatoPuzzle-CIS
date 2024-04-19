import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styling/Home.css'; // Adjust the import path
import logo from '../Images/mtlogo.png'; // Import the tomato logo image
import { auth } from '../firebase'; // Import your authentication module

function StartGame() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for changes in authentication state
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        // User is signed in
        setUser(currentUser);
      } else {
        // No user is signed in
        setUser(null);
      }
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  // Render username or email if user is logged in
  const usernameOrEmail = user ? (user.displayName || user.email) : "Guest";

  return (
    <div className="home-container">
      <div className="background-image"></div>
      <div className="content-wrapper">
        <div className="game-info">
          <img src={logo} alt="Matopuzzle Logo" className="game-logo" />
          <h1 className="game-name">Matopuzzle</h1>
          <p className="welcome-note">Welcome, {usernameOrEmail}</p>
        </div>
        <div className="navigation">
          <Link to="/easy" className="nav-button">Easy</Link>
          <Link to="/intermediate" className="nav-button">Intermediate</Link>
          <Link to="/hard" className="nav-button">Hard</Link>
          <Link to="/timewrap" className="nav-button">Tomato Time Wrap</Link>
        </div>
      </div>
    </div>
  );
}

export default StartGame;
