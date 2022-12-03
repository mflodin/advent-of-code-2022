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

export function sumDuplicatesPriorities(input) {
  const lines = input.split("\n").filter((l) => l);
  let sum = 0;
  for (const line of lines) {
    const duplicate = findDuplicate(line);
    sum += getPriority(duplicate);
  }
  return sum;
}

export function findBadge([first, second, third]) {
  let candidates = [];

  for (const item of first) {
    if (second.includes(item) && !candidates.includes(item)) {
      candidates.push(item);
    }
  }

  for (const item of candidates) {
    if (third.includes(item)) {
      return item;
    }
  }

  return null;
}

export function sumBadgesPriorities(input) {
  const groups = input
    .match(/.*\n.*\n.*\n/g)
    .map((group) => group.split("\n").filter((l) => l));
  let sum = 0;

  for (const group of groups) {
    const badge = findBadge(group);
    sum += getPriority(badge);
  }
  return sum;
}
