/**
 * @param {string} s
 * @return {number}
 *
 */

var countSubstrings = function (s) {
  let countPalidromes = 0;
  for (let center = 0; center < s.length; center += 0.5) {
    let left = Math.floor(center);
    let right = Math.ceil(center);

    while (left >= 0 && right < s.length) {
      if (s[left] === s[right]) countPalidromes++;
      else break;

      left -= 1;
      right += 1;
    }
  }
  return countPalidromes;
};

console.log(countSubstrings("dbabt"));
