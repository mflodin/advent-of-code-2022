import { findFullyContainedRanges, findOverlappingRanges } from "./04";

const testInput = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8
`;

test("should find all fully contained ranges", () => {
  expect(findFullyContainedRanges(testInput)).toBe(2);
});

test("should find all fully contained ranges", () => {
  expect(findOverlappingRanges(testInput)).toBe(4);
});
