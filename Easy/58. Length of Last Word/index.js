/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  return s
    .split(" ")
    .filter((value) => value)
    .pop().length;
};
