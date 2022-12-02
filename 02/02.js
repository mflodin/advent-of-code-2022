export function calculateScore(input) {
  const strategy = parseInput(input);
  let totalScore = 0;

  for (const { opponent, me } of strategy) {
    const shapeScore = scores[me];
    const outcomeScore = scores[play(opponent, me)];

    totalScore += shapeScore + outcomeScore;
  }

  return totalScore;
}

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const WIN = "WIN";
const DRAW = "DRAW";
const LOSE = "LOSE";

const scores = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3,
  WIN: 6,
  DRAW: 3,
  LOSE: 0,
};

const moves = {
  A: ROCK,
  B: PAPER,
  C: SCISSORS,
  X: ROCK,
  Y: PAPER,
  Z: SCISSORS,
};

function parseInput(input) {
  const lines = input
    .split("\n")
    .filter((l) => l)
    .map((line) => {
      const [opponent, me] = line.split(" ").map((key) => moves[key]);
      return { opponent, me };
    });

  return lines;
}

function play(opponentsMove, myMove) {
  if (opponentsMove === myMove) {
    return DRAW;
  }

  if (
    (opponentsMove === ROCK && myMove === PAPER) ||
    (opponentsMove === PAPER && myMove === SCISSORS) ||
    (opponentsMove === SCISSORS && myMove === ROCK)
  ) {
    return WIN;
  }

  return LOSE;
}
