//https://www.codewars.com/kata/5583090cbe83f4fd8c000051

const digitize = (n) =>
  (n + "")
    .split("")
    .map((d) => parseInt(d))
    .reverse();
