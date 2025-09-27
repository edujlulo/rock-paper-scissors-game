import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p id="title">Rock, Paper, Scissors</p>
        <p id="made-by-text">Made by: Eduardo Lulo</p>
      </header>
      <div id="board">
        <div className="screen">O</div>
        <div id="score-display">O</div>
        <div className="screen">O</div>
      </div>
    </div>
  );
}

export default App;
