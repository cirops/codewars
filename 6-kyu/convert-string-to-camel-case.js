// https://www.codewars.com/kata/517abf86da9663f1d2000003

const toCamelCase = (str) => {
  return str
    .replace(/_/g, "-")
    .split("-")
    .reduce((acc, curr) => {
      return acc + curr[0].toUpperCase() + curr.substr(1);
    });
};
