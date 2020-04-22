//https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s) {
  return s.length % 2 == 0
    ? s[s.length / 2 - 1].concat(s[s.length / 2])
    : s[Math.floor(s.length / 2)];
}
