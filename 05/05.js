export function getTopCrateMessage(input) {
  const { crates, moves } = parseInput(input);
  for (const { count, from, to } of moves) {
    for (let i = 0; i < count; i++) {
      const crate = crates[from].pop();
      crates[to].push(crate);
    }
  }

  let topCrateMessage = "";
  const stacks = Object.values(crates);
  for (const stack of stacks) {
    topCrateMessage += stack[stack.length - 1];
  }
  return topCrateMessage;
}

function parseInput(input) {
  const [cratesInput, movesInput] = input.split(/\n\n/);
  const crates = parseCrates(cratesInput);
  const moves = parseMoves(movesInput);
  return { crates, moves };
}

function parseCrates(crateInput) {
  const [baseLine, ...crateLines] = crateInput
    .split("\n")
    .filter((l) => l)
    .reverse();

  const crates = {};
  const keys = baseLine.match(/\d/g);

  for (const key of keys) {
    crates[key] = [];
  }

  for (const line of crateLines) {
    const cratesOnLine = Array.from(line.matchAll(/.(.).\s?/g)).map(
      (match) => match[1]
    );
    cratesOnLine.forEach((crate, i) => {
      if (crate === " ") {
        return;
      }
      const key = keys[i];
      crates[key].push(crate);
    });
  }

  return crates;
}

function parseMoves(movesInput) {
  const moves = movesInput
    .split("\n")
    .filter((l) => l)
    .map((line) => {
      const [_, count, from, to] = line.match(/move (\d+) from (\d+) to (\d+)/);
      return { count: Number(count), from, to };
    });
  return moves;
}
