export function findMostCalories(input) {
    const elves = input.split("\n\n").map(elf => elf.split("\n").filter(e => e).map(Number))


    return elves.reduce((max, elf) => {

        const elfCalories = sum(elf)
        if (elfCalories > max) {
            return elfCalories
        }
        return max;
    }, 0);
}

function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr)
}