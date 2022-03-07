// https://www.codewars.com/kata/563b662a59afc2b5120000c6

const nbYear = (p0, percent, aug, p) => {
  let days = 0;
  let currentValue = p0;
  while (currentValue < p) {
    currentValue += Math.floor((currentValue * percent) / 100 + aug);
    days++;
  }
  return days;
};
