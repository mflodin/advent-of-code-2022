import { readFile } from "fs/promises";
import { sumDuplicatesPriorities, sumBadgesPriorities } from "./03/03.js";

const input = await readFile("./03/input.txt", { encoding: "utf8" });

console.log(sumDuplicatesPriorities(input));
console.log(sumBadgesPriorities(input));
