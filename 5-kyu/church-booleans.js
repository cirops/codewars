//https://www.codewars.com/kata/5ac739ed3fdf73d3f0000048

const Not = (A) => A(False)(True);
const And = (A) => (B) => A(B)(A);
const Or = (A) => (B) => A(A)(B);
const Xor = (A) => (B) => Not(A)(B)(Not(B));
