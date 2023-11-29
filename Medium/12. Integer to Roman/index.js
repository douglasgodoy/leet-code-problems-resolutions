/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const list = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const valueList = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let result = "";

  while (num != 0) {
    for (let index = 0; index < list.length; index++) {
      const numList = valueList[index];

      if (num >= numList) {
        result += list[index];
        num -= numList;
        break;
      }
    }
  }

  return result;
};

console.log(intToRoman(28));
