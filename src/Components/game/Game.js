import React, { Component } from "react";
import ScoreBoard from "../scoreboard/Scoreboard";
import Team from "../team/Team";
import backboardsound from "../../Back+Board.wav";
import basketsound from "../../Swish.wav";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resetCount: 0,
      homeTeamStats: {
        shots: 0,
        score: 0,
      },
      visitingTeamStats: {
        shots: 0,
        score: 0,
      },
    };
    this.shotSound = new Audio(backboardsound);
    this.scoreSound = new Audio(basketsound);
  }

  shoot = (team) => {
    const teamStatsKey = `${team}TeamStats`;
    let score = this.state[teamStatsKey].score;
    this.shotSound.play();

    if (Math.random() > 0.5) {
      score += 1;
      setTimeout(() => {
        this.scoreSound.play();
      }, 200);
    }

    this.setState((state, props) => ({
      [teamStatsKey]: {
        shots: state[teamStatsKey].shots + 1,
        score,
      },
    }));
  };

  resetGame = () => {
    this.setState((state, props) => ({
      resetCount: state.resetCount + 1,
      homeTeamStats: {
        shots: 0,
        score: 0,
      },
      visitingTeamStats: {
        shots: 0,
        score: 0,
      },
    }));
  };

  render() {
    return (
      <div className="Game">
        <ScoreBoard
          homeTeamStats={this.state.homeTeamStats}
          visitingTeamStats={this.state.visitingTeamStats}
        />
        <h1 className="Arena">Welcome to {this.props.venue}</h1>
        <div className="stats">
          <Team
            name={this.props.homeTeam.name}
            logo={this.props.homeTeam.logoSrc}
            stats={this.state.homeTeamStats}
            shotHandler={() => this.shoot("home")}
          />
          <div className="versus">
            <h1>VS</h1>
            <div className="resets">
              <strong>Resets:</strong> {this.state.resetCount}
              <button className="resetButton" onClick={this.resetGame}>
                Reset Game
              </button>
            </div>
          </div>
          <Team
            name={this.props.visitingTeam.name}
            logo={this.props.visitingTeam.logoSrc}
            stats={this.state.visitingTeamStats}
            shotHandler={() => this.shoot("visiting")}
          />
        </div>
      </div>
    );
  }
}

export default Game;
