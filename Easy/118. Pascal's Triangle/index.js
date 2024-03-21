/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) return [];

  const result = [[1]];

  let tmpRow = 1;
  while (numRows > 1) {
    if (tmpRow === 1) {
      result.push([1, 1]);
      tmpRow++;
      numRows--;
      continue;
    }

    const array = result[result.length - 1];
    let tmpArr = [];

    for (let i = 0; i < array.length - 1; i++) {
      const sum = array[i] + array[i + 1];
      tmpArr.push(sum);
      tmpRow++;
      continue;
    }
    numRows--;

    result.push([1, ...tmpArr, 1]);
  }

  return result;
};

console.log(generate(5));
