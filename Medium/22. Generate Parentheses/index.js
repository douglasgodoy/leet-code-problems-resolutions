/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  function backtrack(string = "", left = 0, right = 0) {
    if (string.length === n * 2) {
      result.push(string);
      return;
    }

    if (left < n) backtrack(string + "(", left + 1, right);

    if (right < left) backtrack(string + ")", left, right + 1);
  }

  let result = [];
  backtrack();
  return result;
};
