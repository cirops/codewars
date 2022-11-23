// https://www.codewars.com/kata/62c93765cef6f10030dfa92b

const solution = (start, finish) =>
  Math.floor((finish - start) / 3) + ((finish - start) % 3);
