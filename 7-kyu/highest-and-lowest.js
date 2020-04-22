//https://www.codewars.com/kata/554b4ac871d6813a03000035

const highAndLow = (numbers) =>
  numbers
    .split(" ")
    .reduce((acc, curr) => [Math.max(curr, acc[0]), Math.min(curr, acc[1])], [
      Number.MIN_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER,
    ])
    .join(" ");
