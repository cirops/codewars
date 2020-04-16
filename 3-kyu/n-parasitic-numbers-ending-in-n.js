//https://www.codewars.com/kata/55df87b23ed27f40b90001e5

function calculateSpecial(lastDigit, base) {
  let buildNumber = [lastDigit.toString(base)];
  let cRemainder = lastDigit;
  let cQuotient = 0;
  let cMult;
  while (true) {
    cMult = lastDigit * cRemainder + cQuotient;
    cQuotient = Math.floor(cMult / base);
    cRemainder = cMult % base;
    if (cRemainder == lastDigit && cQuotient == 0) {
      break;
    }
    buildNumber.unshift(cRemainder.toString(base));
  }
  return buildNumber.join("");
}
