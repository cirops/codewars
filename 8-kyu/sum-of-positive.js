//https://www.codewars.com/kata/5715eaedb436cf5606000381

const positiveSum = (arr) =>
  arr.filter((n) => n > 0).reduce((res, curr) => res + curr, 0);
