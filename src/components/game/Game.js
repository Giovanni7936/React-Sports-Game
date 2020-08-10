import React from 'react'
import Team from '../team/Team'
import ScoreBoard from '../scoreboard/Scoreboard'
import Shoutsound from '../assets/soundclips/1-up.mp3'
import Fireball from '../assets/soundclips/fireball.mp3'

class Game extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        resetCount: 0,
        homeTeamStats: {
          shots: 0,
          score: 0,
          
        },
        visitingTeamStats: {
          shots: 0,
          score: 0
        }
        
      } 
      this.Shoutnoise = new Audio(Shoutsound)
      this.smb_Fireball = new Audio(Fireball)
      
  
      
    }
  
    shoot = (team) => {
      const teamStatsKey = `${team}TeamStats`
      let score = this.state[teamStatsKey].score
      this.Shoutnoise.play()
      
  
      if (Math.random() > 0.5) {
        
        score += 1
  
        
      }
  
      this.setState((state, props) => ({
        [teamStatsKey] : {
          shots: state[teamStatsKey].shots + 1,
          score
          
          
        }
        
        

        
      }))
      
    }
  
    resetGame = () => {
      this.setState((state, props) => ({
        resetCount: state.resetCount + 1,
        homeTeamStats: {
          shots: 0,
          score: 0
        },
        visitingTeamStats: {
          shots: 0,
          score: 0
        }
      }))
      this.smb_Fireball.play()
    }
  
    render() {
      return (
        <div className="Game">
          <ScoreBoard
            visitingTeamStats={this.state.visitingTeamStats}
            homeTeamStats={this.state.homeTeamStats}
          />
  
          <h1>Welcome to {this.props.venue}</h1>
          <div className="stats">
            <Team
              name={this.props.visitingTeam.name}
              logo={this.props.visitingTeam.logoSrc}
              stats={this.state.visitingTeamStats}
              shotHandler={() => this.shoot('visiting')}
            />
  
            <div className="versus">
              <h1>VS</h1>
              <div>
                <strong>Resets:</strong> {this.state.resetCount}
                <button onClick={this.resetGame}>Reset Game</button>
                
              </div>
            </div>
  
            <Team
              name={this.props.homeTeam.name}
              logo={this.props.homeTeam.logoSrc}
              stats={this.state.homeTeamStats}
              shotHandler={() => this.shoot('home')}
            />
          </div>
        </div>
      )
      
    }
    
    
  }
  

export default Game