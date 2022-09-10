// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b

const sameCase = (a, b) => {
  const isLetter = (char) => {
    const code = char.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
  };

  const isCapitalized = (letter) => {
    const code = letter.charCodeAt(0);
    return code >= 65 && code <= 90;
  };

  return !isLetter(a) || !isLetter(b)
    ? -1
    : (isCapitalized(a) || isCapitalized(b)) &&
      !(isCapitalized(a) && isCapitalized(b))
    ? 0
    : 1;
};
