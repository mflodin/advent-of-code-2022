import { readFile } from "fs/promises";
import { getTopCrateMessage } from "./05/05.js";

const input = await readFile("./05/input.txt", { encoding: "utf8" });

console.log(getTopCrateMessage(input));
