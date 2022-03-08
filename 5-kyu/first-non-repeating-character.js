// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

const firstNonRepeatingLetter = (s) => {
  if (!s) return "";

  let lettersWithAmounts = Object.entries(
    s.split("").reduce((acc, curr) => {
      if (acc[curr.toLowerCase()]) {
        acc[curr.toLowerCase()][1]++;
      } else {
        acc[curr.toLowerCase()] = [curr, 1];
      }
      return acc;
    }, {})
  ).filter((letterWithAmount) => letterWithAmount[1][1] === 1);
  console.log(lettersWithAmounts);
  if (lettersWithAmounts.length > 0) return lettersWithAmounts[0][1][0];
  return "";
};
