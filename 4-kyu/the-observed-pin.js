// https://www.codewars.com/kata/5263c6999e0f40dee200059d

const adjacencies = {
  0: ["0", "8"],
  1: ["1", "2", "4"],
  2: ["2", "1", "3", "5"],
  3: ["3", "2", "6"],
  4: ["4", "1", "5", "7"],
  5: ["5", "2", "4", "6", "8"],
  6: ["6", "3", "5", "9"],
  7: ["7", "4", "8"],
  8: ["8", "5", "7", "9", "0"],
  9: ["9", "6", "8"],
};

let alternatives = [];

function getPINs(observed) {
  adjacencies[observed[0]].forEach((digit) => {
    getPINSrec(digit, observed.slice(1));
  });
  const result = [...alternatives];
  alternatives = [];
  return result;
}

function getPINSrec(curr, rest) {
  if (rest.length === 0) {
    alternatives.push(curr);
    return;
  }

  adjacencies[rest[0]].forEach((digit) => {
    getPINSrec(curr + digit, rest.slice(1));
  });
}
