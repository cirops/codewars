// https://www.codewars.com/kata/57a083a57cb1f31db7000028

const powersOfTwo = (n) =>
  [1].concat([...Array(n).keys()].map((x) => Math.pow(2, x + 1)));
