import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import StartGame from './components/StartGame';
import Easy from './components/Easy';
import Intermediate from './components/Intermediate';
import Hard from './components/Hard';
import HowToPlay from './components/HowToPlay';


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={SplashScreen} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/start-game" component={StartGame} />
        <Route path="/easy" component={Easy} />
        <Route path="/intermediate" component={Intermediate} />
        <Route path="/hard" component={Hard} />
        <Route path="/howtoplay" component={HowToPlay} />
        
        

      </div>
    </Router>
  );
}

export default App;
