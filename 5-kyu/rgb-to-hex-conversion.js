//https://www.codewars.com/kata/513e08acc600c94f01000001

const DtoX = (n) =>
  n <= 0
    ? "00"
    : n > 255
    ? "FF"
    : n.toString(16).toUpperCase().padStart(2, "0");

const rgb = (r, g, b) => {
  return DtoX(r) + DtoX(g) + DtoX(b);
};
