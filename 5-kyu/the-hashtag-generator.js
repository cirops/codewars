// https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag(str) {
  if (str.trim().length == 0) return false;

  return (result =
    "#" +
    str
      .split(" ")
      .filter((word) => word.length > 0)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join("")).length <= 140
    ? result
    : false;
}
