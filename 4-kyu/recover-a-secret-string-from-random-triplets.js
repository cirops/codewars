//INCOMPLETE

const recoverSecret = (triplets) => {
  const sub = {};
  const pre = {};

  for (const [a, b, c] of triplets) {
    if (!(a in sub)) {
      sub[a] = [];
    }

    if (!(a in pre)) {
      pre[a] = [];
    }

    if (!sub[a].includes(b)) sub[a].push(b);
    if (!sub[a].includes(c)) sub[a].push(c);

    if (!(b in sub)) {
      sub[b] = [];
    }

    if (!(b in pre)) {
      pre[b] = [];
    }

    if (!sub[b].includes(c)) sub[b].push(c);
    if (!pre[b].includes(a)) pre[b].push(a);

    if (!(c in sub)) sub[c] = [];
    if (!(c in pre)) pre[c] = [];

    if (!pre[c].includes(a)) pre[c].push(a);
    if (!pre[c].includes(b)) pre[c].push(b);
  }

  const solution = [
    Object.entries(pre).find((a) => a[1].length === 0)[0],
    // Object.entries(sub).find((a) => a[1].length === 0)[0],
  ];

  for (const [a, b, c] of triplets) {
    aIndex = solution.findIndex((e) => e === a);
    bIndex = solution.findIndex((e) => e === b);
    cIndex = solution.findIndex((e) => e === c);
    if (aIndex + bIndex + cIndex <= -3) continue;
    if (aIndex >= 0) {
      if (aIndex === solution.length - 1) solution.push(b, c);
      else {
        //check sub array to see where to put b and c
        for (let i = aIndex + 1; i < solution.length; i++) {
          if (!sub[solution[i]].includes(b)) {
            solution.splice(i - 1, 0, b);
          }
        }
      }
    } else if (cIndex >= 0) {
      if (cIndex === 0) solution.unshift(a, b);
      // for (let i = cIndex - 1; i < solution.length; i++) {
      //   if (!sub[solution[i]].includes(b)) solution.splice(i, 0, b);
      // }
    }
    // else if (cIndex >= 0) {
    // }
  }

  return solution;
};

// W P

secret1 = "whatisup";
triplets1 = [
  ["t", "u", "p"],
  ["w", "h", "i"],
  ["t", "s", "u"],
  ["a", "t", "s"],
  ["h", "a", "p"],
  ["t", "i", "s"],
  ["w", "h", "s"],
];

console.log(recoverSecret(triplets1), secret1);
