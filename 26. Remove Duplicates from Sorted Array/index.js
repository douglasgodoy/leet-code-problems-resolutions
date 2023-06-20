/**
 * @param {number[]} nums
 * @return {number}
 */

// O(log n)
var removeDuplicates = function (nums) {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const num = nums[i];
    let next = nums[i + 1];

    if (num === undefined) break;

    if (num === next) {
      nums.splice([i + 1], 1);
      i -= 1;
    }
  }

  return nums.length;
};
