// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

const isPangram = (string) =>
  Object.keys(
    string
      .split("")
      .map((n) => n.toLowerCase())
      .reduce((prev, curr) => {
        if (curr.charCodeAt(0) >= 97 && curr.charCodeAt(0) <= 122) {
          prev[curr] = true;
        }
        return prev;
      }, {})
  ).length === 26;
