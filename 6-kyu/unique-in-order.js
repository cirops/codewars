//https://www.codewars.com/kata/54e6533c92449cc251001667

const uniqueInOrder = (iterable) => {
  if (typeof iterable === "string") {
    iterable = iterable.split("");
  }

  return iterable.reduce((prev, curr) => {
    if (curr === prev[prev.length - 1]) {
      return prev;
    } else {
      return [...prev, curr];
    }
  }, []);
};
