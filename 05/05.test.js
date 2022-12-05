import { getTopCrateMessage } from "./05";

const testInput = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
`;

test("should calculate which crates end up on top", () => {
  expect(getTopCrateMessage(testInput)).toBe("CMZ");
});
