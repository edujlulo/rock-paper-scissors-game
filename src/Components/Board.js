export default function Board({
  humanScore,
  computerScore,
  humanPlay,
  computerPlay,
  result,
  onPlay,
  HandRock,
  HandPaper,
  HandScissor,
}) {
  return (
    <div id="board">
      {/* Human Screen */}
      <div className="screen" id="human-screen">
        <div id="human-title">Human</div>

        <div className="buttons-box">
          <button className="button" value="Rock" onClick={onPlay}>
            <img src={HandRock} alt="Rock" className="icon" />
          </button>
          <button className="button" value="Paper" onClick={onPlay}>
            <img src={HandPaper} alt="Paper" className="icon" />
          </button>
          <button className="button" value="Scissor" onClick={onPlay}>
            <img src={HandScissor} alt="Scissor" className="icon" />
          </button>
        </div>

        <div className="play">{humanPlay}</div>
        <div className="result">
          {result === "HUMAN" || result === "TIE" ? result : ""}
        </div>
      </div>

      {/* Scoreboard */}
      <div id="score-display">
        <div id="score-title">Score</div>
        <p className="score-text">Human</p>
        <output>{humanScore}</output>
        <p className="score-text">Computer</p>
        <output>{computerScore}</output>
      </div>

      {/* Computer Screen */}
      <div className="screen" id="computer-screen">
        <div id="computer-title">Computer</div>
        <div className="play">{computerPlay}</div>
        <div className="result">
          {result === "COMPUTER" || result === "TIE" ? result : ""}
        </div>
      </div>
    </div>
  );
}
