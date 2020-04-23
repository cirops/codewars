//https://www.codewars.com/kata/53d40c1e2f13e331fc000c26

let f = {};

const fib = (n) => (n < 0 ? nfib(BigInt(n)) : pfib(BigInt(n)));

const nfib = (n) =>
  f[n] ? f[n] : n === 0n || n === 1n ? n : (f[n] = nfib(n + 2n) - nfib(n + 1n));

const pfib = (n) => {
  if (n === 0n) return 0n;
  if (n === 1n || n == 2n) {
    f[n] = 1n;
    return f[n];
  }
  if (f[n]) return f[n];

  let k = n % 2n !== 0n ? (n + 1n) / 2n : n / 2n;
  return n % 2n !== 0n
    ? (f[n] = pfib(k) * pfib(k) + pfib(k - 1n) * pfib(k - 1n))
    : (f[n] = (2n * pfib(k - 1n) + pfib(k)) * pfib(k));
};
