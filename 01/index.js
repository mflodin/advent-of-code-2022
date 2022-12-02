export function findMostCalories(input) {
  const elves = readInput(input);

  return elves.reduce((max, elf) => {
    const elfCalories = sum(elf);
    if (elfCalories > max) {
      return elfCalories;
    }
    return max;
  }, 0);
}

export function findTopThreeCalories(input) {
  const elves = readInput(input);
  const sorted = elves.map(sum).sort(byNumber);
  const topThree = sorted.slice(0, 3);
  return sum(topThree);
}

function readInput(input) {
  return input.split("\n\n").map((elf) =>
    elf
      .split("\n")
      .filter((e) => e)
      .map(Number)
  );
}

function sum(arr) {
  return arr.reduce((acc, curr) => acc + curr);
}

function byNumber(a, b) {
  return b - a;
}
