/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.trim();
  s = s.replace(/\s+/g, " ");
  s = s.split(" ").reverse().join(" ");
  return s;
};

console.log(reverseWords("  hello             world a  "));
