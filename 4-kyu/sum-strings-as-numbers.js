//https://www.codewars.com/kata/5324945e2ece5e1f32000370/

const sumStrings = (a, b) => {
  if (a.length > b.length) b = b.padStart(a.length, "0");
  else a = a.padStart(b.length, "0");
  let c = 0;
  let res = [],
    s;
  for (let i = b.length - 1; i >= 0; i--) {
    s = parseInt(a[i]) + parseInt(b[i]) + c;
    c = 0;
    if (s >= 10) {
      c = 1;
      s = s - 10;
    }
    res.unshift(s);
  }
  if (c > 0) res.unshift(c);
  if (res[0] == 0) res.shift();
  return res.join("");
};
