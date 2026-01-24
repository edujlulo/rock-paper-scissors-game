import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import HandRock from "./Assets/hand-rock.svg";
import HandPaper from "./Assets/hand-paper.svg";
import HandScissor from "./Assets/hand-scissor.svg";
import Board from "./Components/Board";

function App() {
  const [humanScore, setHumanScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playHuman, setPlayHuman] = useState("");
  const [playComputer, setPlayComputer] = useState("");
  const [resultHuman, setResultHuman] = useState("");
  const [resultComputer, setResultComputer] = useState("");

  const options = ["Rock", "Paper", "Scissor"];

  function showPlay(e) {
    const humanMove = e.currentTarget.value;
    console.log(humanMove);
    setPlayHuman(humanMove);

    const computerMove = options[Math.floor(Math.random() * options.length)];
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
      </header>
      <Board
        humanScore={humanScore}
        computerScore={computerScore}
        showPlay={showPlay}
        HandRock={HandRock}
        HandPaper={HandPaper}
        HandScissor={HandScissor}
        playHuman={playHuman}
        resultHuman={resultHuman}
        playComputer={playComputer}
        resultComputer={resultComputer}
      />
      <Footer />
    </div>
  );
}

export default App;
