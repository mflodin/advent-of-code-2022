import { readFile } from "fs/promises";
import { calculateScore, calculateScore2 } from "./02/02.js";

const input = await readFile("./02/input.txt", { encoding: "utf8" });

console.log(calculateScore(input));
console.log(calculateScore2(input));
