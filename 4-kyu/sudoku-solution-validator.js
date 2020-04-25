//https://www.codewars.com/kata/529bf0e9bdf7657179000008

const arrFlat = (arr) => arr.reduce((acc, curr) => acc.concat(curr), []);

const rowsAreValid = (board) => {
  return !board.some(hasDuplicates);
};

const hasDuplicates = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) != index).length > 0;

const get3by3 = (matrix, startRow, startCol) =>
  matrix
    .slice(startRow, startRow + 3)
    .map((row) => row.slice(startCol, startCol + 3));

const validSolution = (board) =>
  rowsAreValid(board) &&
  rowsAreValid(board[0].map((col, i) => board.map((row) => row[i]))) &&
  rowsAreValid([
    arrFlat(get3by3(board, 0, 0)),
    arrFlat(get3by3(board, 0, 3)),
    arrFlat(get3by3(board, 0, 6)),
    arrFlat(get3by3(board, 3, 0)),
    arrFlat(get3by3(board, 3, 3)),
    arrFlat(get3by3(board, 3, 6)),
    arrFlat(get3by3(board, 6, 0)),
    arrFlat(get3by3(board, 6, 3)),
    arrFlat(get3by3(board, 6, 6)),
  ]);
