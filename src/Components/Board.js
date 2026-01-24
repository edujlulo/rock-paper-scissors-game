export default function Board({
  humanScore,
  computerScore,
  showPlay,
  HandRock,
  HandPaper,
  HandScissor,
  playHuman,
  resultHuman,
  playComputer,
  resultComputer,
}) {
  return (
    <>
      <div id="board">
        <div className="screen" id="human-screen">
          <div id="human-title">Human</div>
          <div className="buttons-box">
            <button className="button" value="Rock" onClick={showPlay}>
              <img src={HandRock} alt="Rock" className="icon" />
            </button>
            <button className="button" value="Paper" onClick={showPlay}>
              <img src={HandPaper} alt="Paper" className="icon" />
            </button>
            <button className="button" value="Scissor" onClick={showPlay}>
              <img src={HandScissor} alt="Scissor" className="icon" />
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
          <div className="play">{playComputer}</div>
          <div className="result">{resultComputer}</div>
        </div>
      </div>
    </>
  );
}
