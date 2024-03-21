/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  for (let x = 0; x < matrix.length; x++) {
    for (let y = x + 1; y < matrix.length; y++) {
      const tmp = matrix[x][y];
      matrix[x][y] = matrix[y][x];
      matrix[y][x] = tmp;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = matrix[i].reverse();
  }
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
