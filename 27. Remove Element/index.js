/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// O(log n)
var removeElement = function (nums, val) {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const num = nums[i];

    if (num === undefined) {
      break;
    }

    if (num === val) {
      nums.splice(i, 1);
      i -= 1;
    }
  }

  return nums.length;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
