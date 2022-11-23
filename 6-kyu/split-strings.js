// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

const solution = (str) => {
  if (str.length % 2 !== 0) str += "_";
  return str.split(/(..)/).filter((s) => s);
};
