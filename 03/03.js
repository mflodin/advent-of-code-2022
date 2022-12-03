export function findDuplicate(line) {
  const middle = line.length / 2;
  const first = line.slice(0, middle);
  const second = line.slice(middle);
  for (const item of first) {
    if (second.includes(item)) {
      return item;
    }
  }
  return null;
}

const priorityScoreIndex =
  " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function getPriority(item) {
  return priorityScoreIndex.indexOf(item);
}

export function sumPriorities(input) {
  const lines = input.split("\n").filter((l) => l);
  let sum = 0;
  for (const line of lines) {
    const duplicate = findDuplicate(line);
    sum += getPriority(duplicate);
  }
  return sum;
}
