//https://www.codewars.com/kata/554e4a2f232cdd87d9000038

const DNAStrand = (dna) => {
  const replacements = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  return dna
    .split("")
    .map((e) => replacements[e])
    .join("");
};
