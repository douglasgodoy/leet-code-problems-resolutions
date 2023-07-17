/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let index = 0; index < haystack.length; index++) {
    const newHayStack = haystack;
    const wordSplitted = newHayStack.split("").splice(index).join("");

    if (wordSplitted.startsWith(needle)) return index;
  }
  return -1;
};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
