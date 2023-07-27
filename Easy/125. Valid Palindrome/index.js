/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const parseString = s
    .split(/[^a-zA-Z0-9]+/)
    .join("")
    .toLocaleUpperCase();

  const reverseString = parseString.split("").reverse().join("");

  return parseString === reverseString;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
