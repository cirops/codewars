function tribonacci(signature, n) {
  if (n <= 3) return signature.slice(0, n);
  const resultArray = signature.concat(new Array(n - 3).fill(0));

  for (let i = 3; i < n; i++) {
    resultArray[i] =
      resultArray[i - 1] + resultArray[i - 2] + resultArray[i - 3];
  }
  return resultArray;
}
