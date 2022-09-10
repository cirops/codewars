// https://www.codewars.com/kata/54b72c16cd7f5154e9000457

const decodeMorse = (morseCode) =>
  morseCode
    .trim()
    .replace(/   /g, " * ")
    .split(" ")
    .map((morseLetter) => (morseLetter === "*" ? " " : MORSE_CODE[morseLetter]))
    .join("");
