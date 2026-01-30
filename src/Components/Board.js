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
        ? ""
        : result === "TIE"
          ? "TIE"
          : "";
  const showResultComputer =
    result === "HUMAN"
      ? ""
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
        <div className="result">{showResultHuman}</div>
      </div>

      {/* Scoreboard */}
      <div id="score-display">
        <div id="score-title">Score</div>
        <p id="score-human-text" className="score-text">
          Human
        </p>
        <output>{humanScore}</output>
        <p className="score-text">Computer</p>
        <output>{computerScore}</output>
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
        <div className="result">{showResultComputer}</div>
      </div>
    </div>
  );
}
