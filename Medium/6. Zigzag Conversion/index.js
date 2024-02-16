/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

//time complexity O(n^2)
// space complexity O(n)
var convert = function (s, numRows) {
  if (numRows <= 1) return s;
  if (s.length <= 1) return s;

  let result = "";
  const map = new Map();
  let layer = 1;
  let desc = false;

  while (s.length > 0) {
    if (layer === numRows) desc = true;
    if (layer === 1) desc = false;

    let stringByLayer = map.get(layer) ? map.get(layer) + s[0] : s[0];
    map.set(layer, stringByLayer);

    if (desc) {
      layer--;
    } else {
      layer++;
    }

    s = s.slice(1);
  }

  for ([_, value] of map.entries()) {
    result += value;
  }

  return result;
};

console.log(convert("PAYPALISHIRING", 3));
