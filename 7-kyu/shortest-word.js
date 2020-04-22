//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

const findShort = (s) =>
  s
    .split(" ")
    .reduce((res, curr) => Math.min(res, curr.length), Number.MAX_SAFE_INTEGER);
