// https://www.codewars.com/kata/5f70c883e10f9e0001c89673

const flip = (d, a) =>
  d === "L" ? a.sort((x, y) => x - y) : a.sort((x, y) => y - x);

console.log(flip("R", [3, 2, 1, 2]), [1, 2, 2, 3]);
console.log(flip("L", [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]);
