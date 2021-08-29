//https://www.codewars.com/kata/5629db57620258aa9d000014

function mix(s1, s2) {
  s1 = s1
    .replace(/[^a-z]/g, "")
    .split("")
    .reduce((acc, curr) => {
      if (curr in acc) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {});

  s2 = s2
    .replace(/[^a-z]/g, "")
    .split("")
    .reduce((acc, curr) => {
      if (curr in acc) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {});
  let sortable = [];

  for (let c in s1) {
    sortable.push([c, s1[c], "1"]);
  }

  for (let c in s2) {
    sortable.push([c, s2[c], "2"]);
  }

  sortable.sort((a, b) => {
    if (b[0] === a[0]) {
      return b[1] - a[1];
    }
    return a[0].charCodeAt(0) - b[0].charCodeAt(0);
  });

  let result = [];
  for (i = 0; i < sortable.length - 1; i++) {
    console.log(sortable[i]);
    if (sortable[i][0] === sortable[i + 1][0]) {
      if (sortable[i][1] === sortable[i + 1][1]) {
        if (sortable[i][1] > 1) {
          result.push(`=:${sortable[i][0].repeat(sortable[i][1])}/`);
        }
      } else {
        result.push(
          `${sortable[i][2]}:${sortable[i][0].repeat(sortable[i][1])}/`
        );
      }
      i++;
    } else {
      if (sortable[i][1] > 1) {
        result.push(
          `${sortable[i][2]}:${sortable[i][0].repeat(sortable[i][1])}/`
        );
      }
    }
  }

  if (sortable[sortable.length - 1][0] !== sortable[sortable.length - 2][0]) {
    console.log(sortable[sortable.length - 1]);
    if (sortable[sortable.length - 1][1] > 1) {
      result.push(
        `${sortable[sortable.length - 1][2]}:${sortable[i][0].repeat(
          sortable[sortable.length - 1][1]
        )}/`
      );
    }
  }

  result.sort((a, b) => {
    if (b.length - a.length === 0) {
      if (b > a) return -1;
      return 1;
    }
    return b.length - a.length;
  });
  result = result.join("");
  return result.slice(0, result.length - 1);
}
