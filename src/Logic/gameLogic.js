export function getGameResult(humanMove, computerMove) {
  if (humanMove === computerMove) {
    return "tie";
  }

  const winsAgainst = {
    Rock: "Scissor",
    Paper: "Rock",
    Scissor: "Paper",
  };

  if (winsAgainst[humanMove] === computerMove) {
    return "human";
  }

  return "computer";
}
