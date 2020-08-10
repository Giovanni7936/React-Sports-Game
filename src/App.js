import React from 'react';
import logo from './logo.svg';
import './App.css';
import beefPicture from './components/assets/images/Chicago.jpg'
import cheesePicture from './components/assets/images/wisconsin.gif'
import bigApplePicture from './components/assets/images/NewYork.jpg'
import lumberJackPicture from './components/assets/images/Canada.jpg'


import Game from './components/game/Game'


function App(props) {
  const beef =  {
      name: 'Chicago',
      logoSrc: beefPicture
  }

  const cheese = {
      name: 'Wisconson',
      logoSrc: cheesePicture
  }

  const  bigApple = {
      name: 'New York',
      logoSrc: bigApplePicture
  }

  const lumberjack = {
      name: 'Canada',
      logoSrc: lumberJackPicture
  }

  return (
      <div className="App">
          <Game
              venue="Lambeau Field"
              homeTeam={cheese}
              visitingTeam={beef}
          />
          <Game
              venue="Herb Brooks Arena"
              homeTeam={bigApple}
              visitingTeam={lumberjack}
          />
      </div>
  )
}




export default App;
