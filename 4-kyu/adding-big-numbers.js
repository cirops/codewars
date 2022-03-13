// https://www.codewars.com/kata/525f4206b73515bffb000b21

const add = (a, b) => {
  const biggestNumber = Math.max(a.length, b.length);
  a = a.padStart(biggestNumber, "0");
  b = b.padStart(biggestNumber, "0");
  let res = [],
    carry = 0;
  for (let len = biggestNumber - 1; len >= 0; len--) {
    let currentSum = Number(a[len]) + Number(b[len]) + carry;
    carry = Math.floor(currentSum / 10);
    res.push(currentSum % 10);
  }
  if (carry > 0) res.push(carry);
  return res.reverse().join("");
};
