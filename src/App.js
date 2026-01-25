import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Board from "./Components/Board";

import HandRock from "./Assets/hand-rock.svg";
import HandPaper from "./Assets/hand-paper.svg";
import HandScissor from "./Assets/hand-scissor.svg";

import { getGameResult } from "./Logic/gameLogic";

function App() {
  const [humanScore, setHumanScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [humanPlay, setHumanPlay] = useState("");
  const [computerPlay, setComputerPlay] = useState("");
  const [result, setResult] = useState("");

  const options = ["Rock", "Paper", "Scissor"];

  function handlePlay(e) {
    const humanMove = e.currentTarget.value;
    const computerMove = options[Math.floor(Math.random() * options.length)];

    const winner = getGameResult(humanMove, computerMove);

    setHumanPlay(humanMove);
    setComputerPlay(computerMove);

    if (winner === "human") {
      setHumanScore((prev) => prev + 1);
      setResult("HUMAN");
    } else if (winner === "computer") {
      setComputerScore((prev) => prev + 1);
      setResult("COMPUTER");
    } else {
      setResult("TIE");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p id="title">Rock, Paper, Scissors</p>
      </header>

      <Board
        humanScore={humanScore}
        computerScore={computerScore}
        humanPlay={humanPlay}
        computerPlay={computerPlay}
        result={result}
        onPlay={handlePlay}
        HandRock={HandRock}
        HandPaper={HandPaper}
        HandScissor={HandScissor}
      />

      <Footer />
    </div>
  );
}

export default App;
