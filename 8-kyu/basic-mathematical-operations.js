//https://www.codewars.com/kata/57356c55867b9b7a60000bd7

const basicOp = (operation, value1, value2) =>
  operation === "+"
    ? value1 + value2
    : operation === "-"
    ? value1 - value2
    : operation === "*"
    ? value1 * value2
    : value1 / value2;
