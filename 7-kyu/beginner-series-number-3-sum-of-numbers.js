//https://www.codewars.com/kata/55f2b110f61eb01779000053

const getSum = (a, b) => {
  if (a > b) {
    const aux = a;
    a = b;
    b = aux;
  }
  return ((b - a + 1) * (a + b)) / 2;
};
