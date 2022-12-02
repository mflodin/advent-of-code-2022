import { readFile } from "fs/promises";
import { findMostCalories, findTopThreeCalories } from "./01/index.js";

const input = await readFile("./01/input.txt", { encoding: "utf8" });

console.log(findMostCalories(input));
console.log(findTopThreeCalories(input));
