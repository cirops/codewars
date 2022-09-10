// https://www.codewars.com/kata/5552101f47fc5178b1000050

const digPow = (n, p) =>
  (result =
    n
      .toString()
      .split("")
      .map((n) => Number(n))
      .reduce((prev, curr, i) => prev + curr ** (p + i), 0) / Number(n)) %
    1 !==
  0
    ? -1
    : result;
