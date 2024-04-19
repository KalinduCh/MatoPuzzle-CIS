import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import StartGame from './components/StartGame';
import Easy from './components/Easy';
import Hard from './components/Hard';
import Intermediate from './components/Intermediate';
import Timewrap from './components/Timewrap';

import HowToPlay from './components/HowToPlay';
import Leaderboard from './components/Leaderboard';
import Profile from './components/Profile';

import { auth } from './firebase'; 

const Root = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate loading time for the splash screen
    setTimeout(() => {
      setShowSplash(false);
    }, 2000); // Adjust the duration as needed

    // Check authentication status
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });

    // Clean up subscription
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/start-game" element={<StartGame />} />
        <Route path="/easy" element={<Easy />} />
        <Route path="/intermediate" element={<Intermediate />} />
        <Route path="/hard" element={<Hard />} />
        <Route path="/timewrap" element={<Timewrap />} />
        <Route path="/howtoplay" element={<HowToPlay />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </Router>
  );
};

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

reportWebVitals();
