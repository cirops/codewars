//https://www.codewars.com/kata/5254ca2719453dcc0b00027d

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
}

function permutations(string) {
  if (string.length === 1) return [string];
  const chars = string.split("");
  let perms = [];
  chars.forEach((char, index, arr) => {
    perms = perms.concat(
      permRec(
        char,
        arr.filter((_, i) => index !== i)
      )
    );
  });
  return Array.from(new Set(flatten(perms)));
}

const permRec = (char, rest) => {
  if (rest.length === 1) {
    return char + rest;
  }

  return rest.reduce((acc, curr, index, arr) => {
    return [
      ...acc,
      permRec(
        char + curr,
        arr.filter((_, i) => index !== i)
      ),
    ];
  }, []);
};
