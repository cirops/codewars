// https://www.codewars.com/kata/56269eb78ad2e4ced1000013

const findNextSquare = (sq, sqrt = Math.sqrt(sq)) =>
  Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;

console.log(findNextSquare(120), 144, "Wrong output for 121");
console.log(findNextSquare(625), 676, "Wrong output for 625");
console.log(findNextSquare(319225), 320356, "Wrong output for 319225");
console.log(
  findNextSquare(15241383936),
  15241630849,
  "Wrong output for 15241383936"
);
