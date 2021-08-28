//https://www.codewars.com/kata/54da539698b8a2ad76000228

const isValidWalk = (walk) => {
  result = walk.reduce(
    (prev, curr) => {
      switch (curr) {
        case "n":
          return [prev[0], prev[1] + 1];
        case "s":
          return [prev[0], prev[1] - 1];
        case "e":
          return [prev[0] + 1, prev[1]];
        case "w":
          return [prev[0] - 1, prev[1]];
      }
    },
    [0, 0]
  );

  return result[0] === 0 && result[1] === 0 && walk.length === 10;
};
