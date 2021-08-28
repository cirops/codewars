//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

const abbrevName = (name) =>
  name
    .split(" ")
    .map((n) => n[0].toUpperCase())
    .join(".");
