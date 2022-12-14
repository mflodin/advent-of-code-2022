export function findFullyContainedRanges(input) {
  const rangePairs = getRangePairs(input);

  const fullyContainedRanges = rangePairs.filter(
    ([a, b]) =>
      (a.start >= b.start && a.end <= b.end) ||
      (b.start >= a.start && b.end <= a.end)
  );

  return fullyContainedRanges.length;
}

export function findOverlappingRanges(input) {
  const rangePairs = getRangePairs(input);

  const overlappingRanges = rangePairs.filter(
    ([a, b]) =>
      (a.start >= b.start && a.start <= b.end) ||
      (b.start >= a.start && b.start <= a.end)
  );
  return overlappingRanges.length;
}

function getRangePairs(input) {
  return input
    .split("\n")
    .filter((l) => l)
    .map((line) => {
      const pair = line.split(",").map((range) => {
        const [start, end] = range.split("-").map(Number);
        return { start, end };
      });
      return pair;
    });
}
