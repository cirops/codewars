// https://www.codewars.com/kata/5679aa472b8f57fb8c000047

const findEvenIndex = (arr) => {
  const sums = Array.from({ length: arr.length }, (e) => Array(2).fill(0));

  sums[0][0] = arr[0];
  sums[arr.length - 1][1] = arr[arr.length - 1];

  for (i = 1, j = arr.length - 2; i < arr.length; i++, j--) {
    sums[i][0] = sums[i - 1][0] + arr[i];
    sums[j][1] = sums[j + 1][1] + arr[j];
  }

  return sums.findIndex((s) => s[0] === s[1]);
};
