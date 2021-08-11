//https://www.codewars.com/kata/5541f58a944b85ce6d00006a

function productFib(prod) {
  const n = Math.sqrt(prod);
  let = a = b = 1;
  while (2 * n > a + b) {
    aux = a + b;
    a = b;
    b = aux;
  }

  return [a, b, a * b === prod];
}
