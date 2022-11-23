// https://www.codewars.com/kata/5bb904724c47249b10000131

const points = (games) =>
  games.reduce((acc, curr) => {
    const [x, y] = curr.split(":");
    return acc + (x > y ? 3 : x === y ? 1 : 0);
  }, 0);

console.log(
  points([
    "1:0",
    "2:0",
    "3:0",
    "4:0",
    "2:1",
    "3:1",
    "4:1",
    "3:2",
    "4:2",
    "4:3",
  ]),
  30
);

console.log(
  points([
    "1:1",
    "2:2",
    "3:3",
    "4:4",
    "2:2",
    "3:3",
    "4:4",
    "3:3",
    "4:4",
    "4:4",
  ]),
  10
);
console.log(
  points([
    "0:1",
    "0:2",
    "0:3",
    "0:4",
    "1:2",
    "1:3",
    "1:4",
    "2:3",
    "2:4",
    "3:4",
  ]),
  0
);

console.log(
  points([
    "1:0",
    "2:0",
    "3:0",
    "4:0",
    "2:1",
    "1:3",
    "1:4",
    "2:3",
    "2:4",
    "3:4",
  ]),
  15
);

console.log(
  points([
    "1:0",
    "2:0",
    "1:5",
    "4:4",
    "2:2",
    "3:3",
    "1:4",
    "2:3",
    "2:4",
    "3:4",
  ]),
  12
);

const [f, rest] = "Ciro Silva";
console.log(f, rest);

("1:0");

// const [x, y] = "1:0".split(":");
const [x, _, y] = "12:5";
