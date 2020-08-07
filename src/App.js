import React from "react";
import "./App.css";
import Game from "./Components/game/Game";
import lakerspic from "./assets/images/lakers.png";
import rocketspic from "./assets/images/rockets.png";
import celticspic from "./assets/images/Boston-Celtics-logo.png";
import buckspic from "./assets/images/bucks3drender.png";

function App(props) {
  const lakers = {
    name: "Los Angeles Lakers",
    logoSrc: lakerspic,
  };

  const rockets = {
    name: "Huston Rockets",
    logoSrc: rocketspic,
  };

  const celtics = {
    name: "Boston Celtics",
    logoSrc: celticspic,
  };

  const bucks = {
    name: "Milwaukee Bucks",
    logoSrc: buckspic,
  };
  return (
    <div className="App">
      <Game venue="Staples Center" homeTeam={lakers} visitingTeam={rockets} />
      <Game venue="TD Garden" homeTeam={celtics} visitingTeam={bucks} />
    </div>
  );
}

export default App;
