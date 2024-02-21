/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// TC = O(log N)
// SC = O(1)
var twoSum = function (numbers, target) {
  const map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    if (map.has(target - numbers[i])) {
      const value = map.get(target - numbers[i]);
      return value > i ? [i + 1, value + 1] : [value + 1, i + 1];
    }

    map.set(numbers[i], i);
  }
};
