import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [humanScore, setHumanScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <p id="title">Rock, Paper, Scissors</p>
        <p id="made-by-text">Made by: Eduardo Lulo</p>
      </header>
      <div id="board">
        <div className="screen" id="human-screen">
          <div id="human-title">Human</div>
          <button class="button">Rock</button>
          <button class="button">Paper</button>
          <button class="button">Scissor</button>
        </div>
        <div id="score-display">
          <div id="score-title">Score</div>
          <p class="score-text">Human</p>
          <output>{humanScore}</output>
          <p class="score-text">Computer</p>
          <output>{computerScore}</output>
        </div>
        <div className="screen" id="computer-screen">
          <div id="computer-title">Computer</div>
          <button class="button">Rock</button>
          <button class="button">Paper</button>
          <button class="button">Scissor</button>
        </div>
      </div>
    </div>
  );
}

export default App;
