import "./Board.css";

export default function Board({
  humanScore,
  computerScore,
  humanPlay,
  computerPlay,
  result,
  HandRock,
  handImages,
}) {
  const showResultHuman =
    result === "HUMAN"
      ? "WIN"
      : result === "COMPUTER"
        ? "LOSS"
        : result === "TIE"
          ? "TIE"
          : "";
  const showResultComputer =
    result === "HUMAN"
      ? "LOSS"
      : result === "COMPUTER"
        ? "WIN"
        : result === "TIE"
          ? "TIE"
          : "";

  const handImageHuman = humanPlay ? handImages[humanPlay] : null;
  const handImageComputer = computerPlay ? handImages[computerPlay] : null;

  return (
    <div id="board">
      {/* Human Screen */}
      <div className="screen" id="human-screen">
        <div id="human-title">Human</div>

        <div className="play">
          <img
            src={handImageHuman}
            alt={humanPlay}
            className="icon"
            id="icon-human-play"
          />
        </div>
        <div className={`result ${showResultHuman.toLowerCase()}`}>
          {showResultHuman}
        </div>
      </div>

      {/* Scoreboard */}
      <div id="score-display">
        <div id="score-title">Score</div>
        <div id="score-values">
          <div className="score-item">
            <p className="score-text">Human</p>
            <output>{humanScore}</output>
          </div>
          <div className="score-item">
            <p className="score-text">Computer</p>
            <output>{computerScore}</output>
          </div>
        </div>
      </div>

      {/* Computer Screen */}
      <div className="screen" id="computer-screen">
        <div id="computer-title">Computer</div>
        <div className="play">
          <img
            src={handImageComputer}
            alt={computerPlay}
            className="icon"
            id="icon-computer-play"
          />
        </div>
        <div className={`result ${showResultComputer.toLowerCase()}`}>
          {showResultComputer}
        </div>
      </div>
    </div>
  );
}
