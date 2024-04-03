/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  if (!nums.length) return null;
  if (nums.length === 1) {
    return nums[0] === 1 ? 0 : 1;
  }
  nums = nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    if (num - nums[i - 1] !== 1) return num - 1;
  }

  if (nums[0] === 0) return nums[nums.length - 1] + 1;
  return 0;
};
