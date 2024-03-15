/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    const last = s[s.length - i - 1];
    const first = s[i];

    s[i] = last;
    s[s.length - i - 1] = first;
  }
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
