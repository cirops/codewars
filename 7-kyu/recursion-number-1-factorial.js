//https://www.codewars.com/kata/5694cb0ec554589633000036/

const factorial = (n) => (n == 0 || n == 1 ? 1 : n * factorial(n - 1));
