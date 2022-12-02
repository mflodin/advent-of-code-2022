import { calculateScore } from "./02";

const testInput = `A Y
B X
C Z
`;

test("should calculate score correctly", () => {
  expect(calculateScore(testInput)).toBe(15);
});
