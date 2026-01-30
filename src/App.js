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
    <>
      <div className="App">
        <div className="content">
          <header className="App-header">
            <p id="title">Rock, Paper, Scissors Game</p>
          </header>

          <p className="text-to-play">Choose an option to play:</p>

          <div className="buttons-box">
            <button className="button" value="Rock" onClick={handlePlay}>
              <img src={HandRock} alt="Rock" className="icon" />
            </button>
            <button className="button" value="Paper" onClick={handlePlay}>
              <img src={HandPaper} alt="Paper" className="icon" />
            </button>
            <button className="button" value="Scissor" onClick={handlePlay}>
              <img src={HandScissor} alt="Scissor" className="icon" />
            </button>
          </div>

          <Board
            humanScore={humanScore}
            computerScore={computerScore}
            humanPlay={humanPlay}
            computerPlay={computerPlay}
            result={result}
            HandRock={HandRock}
            handImages={{
              Rock: HandRock,
              Paper: HandPaper,
              Scissor: HandScissor,
            }}
          />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
