//https://www.codewars.com/kata/530e15517bc88ac656000716

const rot13 = (m) =>
  m.split("").map((l) => {
    c = l.charCodeAt(0);
    return c < 65 || c > 122
      ? l
      : c <= 77 || (c > 90 && c < 110)
      ? String.fromCharCode(c + 13)
      : String.fromCharCode(c - 13);
  });
