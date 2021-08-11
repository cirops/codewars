//https://www.codewars.com/kata/526571aae218b8ee490006f4

const countBits = (n) =>
  n
    .toString(2)
    .split("")
    .reduce((acc, curr) => (curr === "1" ? acc + 1 : acc), 0);
