/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let repeatedNumbers = [n];

  if (n === 1) return true;

  while (n <= 2147483647) {
    const splitN = n
      .toString()
      .split("")
      .map((n) => parseInt(n));

    const squares = splitN
      .map((number) => Math.pow(number, 2))
      .reduce((curr, acc) => curr + acc, 0);

    if (repeatedNumbers.includes(squares)) return false;
    repeatedNumbers.push(squares);
    if (squares === 1) return true;
    n = squares;
  }
  return false;
};

console.log(isHappy(2));
