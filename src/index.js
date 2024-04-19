import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import firebase, { auth } from './firebase'; 

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
        {showSplash ? (
          <Route path="/" element={<SplashScreen />} />
        ) : authenticated ? (
          <>
            <Route path="/" element={<Home />} />
            {/* Add more routes for authenticated users */}
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* Add more routes for unauthenticated users */}
          </>
        )}
      </Routes>
    </Router>
  );
};

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

reportWebVitals();
