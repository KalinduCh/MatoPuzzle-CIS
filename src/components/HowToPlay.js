import React from 'react';
import '../styling/HowToPlay.css'; // Import the stylesheet for HowToPlay component

const HowToPlay = () => {
  return (
    <div className="how-to-play-container">
      <div className="how-to-play-content">
        <div className="how-to-play-header">
          <h1>How to Play MatoPuzzle</h1>
          <p>Welcome to MatoPuzzle! Below are the instructions on how to get started:</p>
        </div>

        <div className="how-to-play-instructions">
          <h2>Registration and Login</h2>
          <p>Users start by registering an account with their email and password. Upon successful registration, they are automatically logged in. For returning users, they can directly log in with their credentials.</p>
        </div>

        <div className="how-to-play-instructions">
          <h2>Game Menu</h2>
          <p>After logging in, users are directed to the game menu. Here, they can select various options, including starting a new game, accessing the leaderboard, viewing their profile, and logging out. Each option in the menu is clearly labeled and intuitive to navigate.</p>
        </div>

        <div className="how-to-play-instructions">
          <h2>Selecting Difficulty Level</h2>
          <p>When users choose to start a new game, they are prompted to select the difficulty level from four options: Easy, Intermediate, Hard, and Expert. Each difficulty level has its own unique set of challenges, such as shorter timers and fewer chances for harder levels.</p>
        </div>

        <div className="how-to-play-instructions">
          <h2>Gameplay</h2>
          <p>Once a difficulty level is selected, the game begins. Users are presented with a series of questions, each accompanied by an image. Users must input their answers within the allotted time frame and limited chances. Incorrect answers result in deductions from the score and chances.</p>
        </div>

        <div className="how-to-play-instructions">
          <h2>Leaderboard</h2>
          <p>After completing a game, users can view the leaderboard to see their ranking compared to other players. The leaderboard displays top scores for each difficulty level, providing users with a competitive incentive to improve their performance.</p>
        </div>

        <div className="how-to-play-instructions">
          <h2>Profile</h2>
          <p>Users can access their profile to view personal information, such as username, email, and statistics (e.g., total games played, highest score). They also have the option to update their profile settings, such as changing their password or email address.</p>
        </div>

        <div className="how-to-play-instructions">
          <h2>Logout</h2>
          <p>Finally, users can log out of their account to securely end their session and protect their privacy.</p>
        </div>

      </div>
    </div>
  );
};

export default HowToPlay;
