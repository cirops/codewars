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

console.log("fib 0", fib(0), 0n);
console.log("fib 1", fib(1), 1n);
console.log("fib 2", fib(2), 1n);
console.log("fib 3", fib(3), 2n);
console.log("fib 4", fib(4), 3n);
console.log("fib 5", fib(5), 5n);
console.log("fib -6", fib(-6), -8n);
