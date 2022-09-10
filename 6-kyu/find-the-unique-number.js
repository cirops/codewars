// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
  const memo = {};
  for (const n of arr) {
    if (n in memo) {
      memo[n] = false;
    } else {
      memo[n] = true;
    }
  }

  return Number(Object.entries(memo).find((o) => o[1] === true)[0]);
}

console.log(findUniq([1, 0, 0]), 1);
console.log(findUniq([0, 1, 0]), 1);
console.log(findUniq([0, 0, 1]), 1);
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([1, 1, 2, 1, 1]), 2);
console.log(findUniq([3, 10, 3, 3, 3]), 10);
