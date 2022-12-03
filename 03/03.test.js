import {
  findBadge,
  findDuplicate,
  sumBadgesPriorities,
  sumDuplicatesPriorities,
} from "./03";

const testInput = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
`;

test("should find duplicates in a line", () => {
  const lines = testInput.split("\n");
  expect(findDuplicate(lines[0])).toBe("p");
  expect(findDuplicate(lines[1])).toBe("L");
  expect(findDuplicate(lines[2])).toBe("P");
  expect(findDuplicate(lines[3])).toBe("v");
  expect(findDuplicate(lines[4])).toBe("t");
  expect(findDuplicate(lines[5])).toBe("s");
});

test("should sum priorities of duplicates", () => {
  expect(sumDuplicatesPriorities(testInput)).toBe(157);
});

test("should find badge in groups of three", () => {
  const groupA = [
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
  ];

  expect(findBadge(groupA)).toBe("r");

  const groupB = [
    "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
    "ttgJtRGJQctTZtZT",
    "CrZsJsPPZsGzwwsLwLmpwMDw",
  ];
  expect(findBadge(groupB)).toBe("Z");
});

test("should sum priorities of badges", () => {
  expect(sumBadgesPriorities(testInput)).toBe(70);
});
