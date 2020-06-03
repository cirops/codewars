//https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111/

const triangle = (row) => {
  let curr = row.split("");
  while (curr.length > 1) {
    let aux = [];
    for (let i = 0; i < curr.length - 1; i++) {
      res =
        curr[i] == curr[i + 1]
          ? curr[i]
          : ["R", "G", "B"].filter(
              (e) => ![curr[i], curr[i + 1]].includes(e)
            )[0];
      aux.push(res);
    }
    curr = aux;
  }
  return curr[0];
};
