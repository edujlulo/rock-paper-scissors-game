import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import List from "./Practice.js";

function App() {
  const [humanScore, setHumanScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playHuman, setPlayHuman] = useState("");
  const [playComputer, setPlayComputer] = useState("");
  const [resultHuman, setResultHuman] = useState("");
  const [resultComputer, setResultComputer] = useState("");

  const options = ["Rock", "Paper", "Scissor"];

  function showPlay(e) {
    const humanMove = e.target.value;
    setPlayHuman(humanMove);

    const computerMove = options[Math.floor(Math.random() * options.length)]; // jugada al azar
    setPlayComputer(computerMove);
    showResult(humanMove, computerMove);
  }

  function showResult(humanMove, computerMove) {
    const wins = {
      Rock: "Scissor",
      Paper: "Rock",
      Scissor: "Paper",
    };

    if (humanMove === computerMove) {
      setResultHuman("TIE");
      setResultComputer("TIE");
    } else if (wins[humanMove] === computerMove) {
      setResultHuman("WIN");
      setResultComputer("");
      setHumanScore(humanScore + 1);
    } else {
      setResultHuman("");
      setResultComputer("WIN");
      setComputerScore(computerScore + 1);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p id="title">Rock, Paper, Scissors</p>
        <p id="made-by-text">Made by: Eduardo Lulo</p>
      </header>
      <div id="board">
        <div className="screen" id="human-screen">
          <div id="human-title">Human</div>
          <div className="buttons-box">
            <button className="button" value="Rock" onClick={showPlay}>
              Rock
            </button>
            <button className="button" value="Paper" onClick={showPlay}>
              Paper
            </button>
            <button className="button" value="Scissor" onClick={showPlay}>
              Scissor
            </button>
          </div>
          <div className="play">{playHuman}</div>
          <div className="result">{resultHuman}</div>
        </div>
        <div id="score-display">
          <div id="score-title">Score</div>
          <p className="score-text" id="score-human-text">
            Human
          </p>
          <output>{humanScore}</output>
          <p className="score-text">Computer</p>
          <output>{computerScore}</output>
        </div>
        <div className="screen" id="computer-screen">
          <div id="computer-title">Computer</div>
          <div className="buttons-box">
            <button className="button">Rock</button>
            <button className="button">Paper</button>
            <button className="button">Scissor</button>
          </div>
          <div className="play">{playComputer}</div>
          <div className="result">{resultComputer}</div>
        </div>
      </div>
      <List />
    </div>
  );
}

export default App;
