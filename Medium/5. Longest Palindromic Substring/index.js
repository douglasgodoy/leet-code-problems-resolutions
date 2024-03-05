/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = "";
  for (let i = 0; i < s.length; i += 0.5) {
    let center = i;
    let left = Math.floor(center);
    let right = Math.ceil(center);
    let tmpPalidrome = "";

    while (left >= 0 && right <= s.length) {
      if (s[left] !== s[right]) {
        tmpPalidrome = "";
        break;
      }

      if (left === right) tmpPalidrome = s[left];
      else tmpPalidrome = `${s[left]}${tmpPalidrome}${s[right]}`;

      if (tmpPalidrome.length > result.length) result = tmpPalidrome;
      left--;
      right++;
    }
  }

  return result;
};

console.log(longestPalindrome("babadd"));
