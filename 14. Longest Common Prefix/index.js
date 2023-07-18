/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let i = 1;
  let firstWord = strs[0];
  while (i < strs.length) {
    if (!strs[i].startsWith(firstWord)) {
      firstWord = firstWord.slice(0, -1);
    } else {
      i++;
    }
  }

  return firstWord;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
