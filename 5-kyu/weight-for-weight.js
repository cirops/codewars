// https://www.codewars.com/kata/55c6126177c9441a570000cc

const orderWeight = (strng) =>
  strng
    .split(" ")
    .map((number) => [
      number,
      number.split("").reduce((acc, curr) => acc + Number(curr), 0),
    ])
    .sort((n1, n2) =>
      n1[1] - n2[1] === 0 ? n1[0].localeCompare(n2[0]) : n1[1] - n2[1]
    )
    .map((n) => n[0])
    .join(" ");
