//https://www.codewars.com/kata/51c8e37cee245da6b40000bd

const solution = (input, markers) =>
  input
    .split("\n")
    .map((s) => {
      let cIndex;
      let out = s;
      markers.forEach((marker) => {
        if ((cIndex = s.indexOf(marker)) >= 0) {
          out = s.slice(0, cIndex).trim();
        }
      });
      return out;
    })
    .join("\n");
