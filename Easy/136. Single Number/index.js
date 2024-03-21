/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length <= 1) return nums[0];

  const map = new Map();

  for (num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (num of nums) {
    if (map.get(num) === 1) return num;
  }
};
