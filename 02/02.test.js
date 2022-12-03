import { calculateScore, calculateScore2 } from "./02";

const testInput = `A Y
B X
C Z
`;

test("should calculate score correctly", () => {
  expect(calculateScore(testInput)).toBe(15);
});
test("should really calculate score correctly", () => {
  expect(calculateScore2(testInput)).toBe(12);
});
