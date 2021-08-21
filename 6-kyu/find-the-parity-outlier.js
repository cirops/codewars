// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(integers) {
  let nEvens = 0;
  let nOdds = 0;
  let oddIndex = -1;
  let evenIndex = -1;

  for (currentIndex = 0; currentIndex < integers.length; currentIndex++) {
    if (integers[currentIndex] % 2 == 0) {
      evenIndex = currentIndex;
      nEvens += 1;
    } else {
      oddIndex = currentIndex;
      nOdds += 1;
    }

    if (nOdds > 1 && evenIndex >= 0) {
      return integers[evenIndex];
    }
    if (nEvens > 1 && oddIndex >= 0) {
      return integers[oddIndex];
    }
  }
}
