//

const countSheeps = (arrayOfSheep) =>
  arrayOfSheep.reduce((res, curr) => (curr ? res + 1 : res), 0);
