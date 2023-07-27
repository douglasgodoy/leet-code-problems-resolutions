/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  //O(n)
  const romanMap = new Map(Object.entries(obj));

  let skipNext = false;

  //O(n)
  const response = s
    .split("")
    .map((char, idx, array) => {
      const charTogether = char + array[idx + 1];

      if (skipNext) {
        skipNext = false;
        return 0;
      }

      //O(1)
      if (romanMap.has(charTogether)) {
        skipNext = true;
        return romanMap.get(charTogether);
      }

      return romanMap.get(char);
    })
    .reduce((acc, curr) => acc + curr, 0);

  return response;
};

console.log(romanToInt("III"));
console.log(romanToInt("VIII"));
console.log(romanToInt("IV"));
