//https://www.codewars.com/kata/55908aad6620c066bc00002a

const XO = (str) =>
  str
    .split("")
    .reduce(
      (res, curr) =>
        curr.toLowerCase() === "x"
          ? res - 1
          : curr.toLowerCase() === "o"
          ? res + 1
          : res,
      0
    ) === 0;
