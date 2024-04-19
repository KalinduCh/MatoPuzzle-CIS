import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styling/GameLevel.css';

const GameLevel = ({ difficulty, initialTimerDuration, initialChances }) => {
  // State variables
  const [question, setQuestion] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [answer, setAnswer] = useState('');
  const [timer, setTimer] = useState(initialTimerDuration);
  const [chances, setChances] = useState(initialChances);
  const [score, setScore] = useState(0);
  const [roundOver, setRoundOver] = useState(false);

  // Function to fetch question and image URL from the API
  const fetchQuestion = async () => {
    try {
      const response = await fetch('https://marcconrad.com/uob/tomato/api.php');
      const data = await response.json();
      setQuestion(data.question);
      // Extract the image URL from the question object
      const imageUrl = data.question.match(/https:\/\/.+\.png/)[0];
      setImageUrl(imageUrl);
    } catch (error) {
      console.error('Error fetching question:', error);
    }
  };

  // Function to handle user's answer submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the answer is correct
    const lastDigit = imageUrl.match(/\d(?=\.png)/)[0];
    if (answer.trim() === lastDigit) {
      // Handle correct answer
      console.log('Correct answer!');
      document.getElementById('correctSound').play(); // Play correct sound
      // Award 5 points for correct answer
      setScore(score + 5);
    } else {
      // Handle wrong answer
      console.log('Wrong answer!');
      document.getElementById('incorrectSound').play(); // Play incorrect sound
      // Decrement chances
      setChances(chances - 1);
      if (chances === 1) {
        // Handle game over
        console.log('Game over!');
      }
    }
    // Clear the input field
    setAnswer('');
    // Fetch a new question
    fetchQuestion();
  };

  // Function to handle timer countdown
  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0 && !roundOver) {
        setTimer(timer - 1);
      } else if (!roundOver) {
        // Time's up
        console.log('Time\'s up!');
        // Decrement chances
        setChances(chances - 1);
        // Reset timer for the next question
        setTimer(initialTimerDuration);
        // Fetch a new question
        fetchQuestion();
      }
    }, 1000);

    // Cleanup function
    return () => clearInterval(countdown);
  }, [timer, roundOver]);

  // Fetch question on component mount
  useEffect(() => {
    fetchQuestion();
  }, []);

  return (
    <div className={`${difficulty.toLowerCase()}-container`}>
      <audio id="correctSound" src="https://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a"></audio>
      <audio id="incorrectSound" src="https://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3"></audio>
      <audio id="gameEventSound" src="https://example.com/https://codeskulptor-demos.commondatastorage.googleapis.com/descent/background%20music.mp3.mp3"></audio>

      {!roundOver && (
        <>
          <div className="timer-container">
            <h3 className="timer">Time left: {timer} seconds</h3>
            <h3 className="chances">Chances left: {chances}</h3>
            <h3 className="score">Score: {score}</h3>
          </div>
          <div className="question-container">
            {imageUrl && <img src={imageUrl} alt="Question" className="question-image" />}
          </div>
          <div className="answer-container">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter your answer"
                className="answer-input"
                required
              />
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </>
      )}
      {roundOver && (
        <div className="round-over-container">
          <h2>Round Over</h2>
          <p>Your final score is: {score}</p>
        </div>
      )}
    </div>
  );
};

GameLevel.propTypes = {
  difficulty: PropTypes.oneOf(['Easy', 'Intermediate', 'Hard']).isRequired,
  initialTimerDuration: PropTypes.number.isRequired,
  initialChances: PropTypes.number.isRequired,
};

export default GameLevel;
