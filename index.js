import { readFile } from "fs/promises";
import { findFullyContainedRanges } from "./04/04.js";

const input = await readFile("./04/input.txt", { encoding: "utf8" });

console.log(findFullyContainedRanges(input));
