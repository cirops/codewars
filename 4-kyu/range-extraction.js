//https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

const solution = (list) =>
  list
    .reduce(
      (acc, curr, i) => {
        if (acc.stack.length == 0) acc.stack.push(curr);
        else {
          if (curr - acc.stack[acc.stack.length - 1] == 1) {
            acc.stack.push(curr);
          } else {
            if (acc.stack.length >= 3) {
              acc.res.push(acc.stack);
            } else {
              acc.res.push(...acc.stack);
            }
            acc.stack = [curr];
          }
        }
        if (i == list.length - 1)
          if (acc.stack.length >= 3) {
            acc.res.push(acc.stack);
          } else {
            acc.res.push(...acc.stack);
          }
        return acc;
      },
      { res: [], stack: [] }
    )
    .res.map((e) =>
      typeof e === "number" ? e + "" : `${e[0]}-${e[e.length - 1]}`
    )
    .join(",");
