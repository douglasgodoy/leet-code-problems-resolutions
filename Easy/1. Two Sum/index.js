/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let res = [];

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    if (nums[index + 1]) {
      if (element + nums[index + 1] === target) {
        res = [index, index + 1];
        break;
      }
    }

    for (let nextIndex = index + 1; nextIndex < nums.length; nextIndex++) {
      const nextElement = nums[nextIndex];

      if (element + nextElement === target) {
        res = [index, nextIndex];
        break;
      }
    }
  }
  return res;
};

//O(log n) -> O(nˆ2)

twoSum([2, 7, 11, 15], 9);
