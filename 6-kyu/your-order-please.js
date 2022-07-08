// https://www.codewars.com/kata/55c45be3b2079eccff00010f

const order = (words) =>
  words
    .split(" ")
    .sort(
      (w1, w2) =>
        w1
          .split("")
          .find((l) => [1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(l))) -
        w2
          .split("")
          .find((l) => [1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(l)))
    )
    .join(" ");
