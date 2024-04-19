import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase'; // Updated import
import '../styling/Signup.css';
import logo from '../Images/tomato mg.png';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    try {
      await auth.createUserWithEmailAndPassword(email, password); // Updated usage
      // Redirect after successful signup
      // history.push('/home'); // Assuming you redirect using React Router
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="background-image"></div>
      <div className="signup-box">
        <img src={logo} alt="Matopuzzle Logo" className="signup-logo" />
        <h2 className="signup-title">Welcome to Matopuzzle</h2>
        <form className="signup-form" onSubmit={handleSignup}>
          <input
            className="signup-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="signup-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="signup-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="signup-input"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="signup-button" type="submit">Register</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <p className="signup-text">Already have an account? <Link className="signup-link" to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Signup;
