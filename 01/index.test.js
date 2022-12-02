import {findMostCalories, findTopThreeCalories} from './index.js'

const testInput = 
`1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`

test("finds the largest amount of calories carried", () => {
    const actual = findMostCalories(testInput);

    expect(actual).toBe(24000)
})

test("finds the three largest amounts of calories carried", () => {
    const actual = findTopThreeCalories(testInput);

    expect(actual).toBe(45000)
})

