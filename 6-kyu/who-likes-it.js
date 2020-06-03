//https://www.codewars.com/kata/5266876b8f4bf2da9b000362

const likes = (names) =>
  `${
    names.length === 0
      ? "no one"
      : names.length === 1
      ? names[0]
      : names.length === 2
      ? names.join(" and ")
      : names.length === 3
      ? `${names[0]}, ${names[1]} and ${names[2]}`
      : `${names[0]}, ${names[1]} and ${names.length - 2} others`
  } like${names.length < 2 ? "s" : ""} this`;
