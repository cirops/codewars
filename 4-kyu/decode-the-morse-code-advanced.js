// https://www.codewars.com/kata/54b72c16cd7f5154e9000457

//INCOMPLETE

const MORSE_CODE = {
  "....": "H",
  ".": "E",
  "-.--": "Y",
  ".---": "J",
  "..-": "U",
  "-..": "D",
  "...": "S",
  "---": "O",
  "--": "M",
};

const decodeBits = (bits) => {
  const filteredBits = bits.replace(/^0*|0*$/g, "");
  let consecutiveOnes = 0;
  let consecutiveZeros = 0;

  let i = 0;
  for (; i < filteredBits.length; i++) {
    if (filteredBits[i] === "1") {
      consecutiveOnes++;
    } else {
      break;
    }
  }

  for (let j = i; j < filteredBits.length; j++) {
    if (filteredBits[j] === "0") {
      consecutiveZeros++;
    } else {
      break;
    }
  }

  let transmissionRate;
  console.log(consecutiveOnes);
  console.log(consecutiveZeros);
  if (consecutiveOnes === consecutiveZeros) {
    transmissionRate = consecutiveOnes;
  } else {
    transmissionRate = consecutiveOnes / 3;
  }

  console.log(transmissionRate);
  console.log(new RegExp("1".repeat(transmissionRate * 3), "g"), "-");
  console.log(new RegExp("0".repeat(transmissionRate * 7), "g"), " * ");
  console.log(new RegExp("1".repeat(transmissionRate), "g"), ".");
  console.log(new RegExp("0".repeat(transmissionRate), "g"), "_");

  return filteredBits
    .replace(new RegExp("1".repeat(transmissionRate * 3), "g"), "-")
    .replace(new RegExp("0".repeat(transmissionRate * 7), "g"), " * ")
    .replace(new RegExp("1".repeat(transmissionRate), "g"), ".")
    .replace(new RegExp("0".repeat(transmissionRate), "g"), "_")
    .replace(/___/g, " ")
    .replace(/_/g, "");
};

const decodeMorse = (morseCode) =>
  morseCode
    .trim()
    .replace(/   /g, " * ")
    .split(" ")
    .map((morseLetter) => (morseLetter === "*" ? " " : MORSE_CODE[morseLetter]))
    .join("");

console.log(
  decodeMorse(
    decodeBits(
      "1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011"
    )
  ),
  "| HEY JUDE"
);

console.log(decodeMorse(decodeBits("11111100111111")), " | M");

// console.log(
//   // decodeMorse(
//   decodeBits(
//     "00011100010101010001000000011101110101110001010111000101000111010111010001110101110000000111010101000101110100011101110111000101110111000111010000000101011101000111011101110001110101011100000001011101110111000101011100011101110001011101110100010101000000011101110111000101010111000100010111010000000111000101010100010000000101110101000101110001110111010100011101011101110000000111010100011101110111000111011101000101110101110101110"
//   ),
//   // ),
//   " | THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
// );
