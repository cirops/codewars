//https://www.codewars.com/api/v1/code-challenges/558ee8415872565824000007

function isDivisible() {
  return Object.values(arguments).every((n, _, arr) => arr[0] % n == 0);
}
