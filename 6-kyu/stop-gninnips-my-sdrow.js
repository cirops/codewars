//https://www.codewars.com/kata/5264d2b162488dc400000001

const spinWords = (s) =>
  s
    .split(" ")
    .map((curr) => (curr.length < 5 ? curr : curr.split("").reverse().join("")))
    .join(" ");
