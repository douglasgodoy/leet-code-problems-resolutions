/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (!numsMap.has(num)) {
      numsMap.set(num, [i]);
      continue;
    }

    const newValue = numsMap.get(num);
    newValue.push(i);
    numsMap.set(num, newValue);
  }

  for (const [_, value] of numsMap.entries()) {
    while (value.length !== 1) {
      const subtract = value[1] - value[0];
      value.shift();

      if (subtract <= k) {
        return true;
      }
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); //false
