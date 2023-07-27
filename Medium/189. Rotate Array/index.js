/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (k > nums.length) {
    for (let index = 0; index < k * 2; index++) {
      const removed = nums.pop();
      nums.unshift(removed);
      index += 1;
    }
  } else {
    const start = nums.length - k;
    const removedNums = nums.splice(start, k);
    nums.unshift(...removedNums);
  }
};
console.log(rotate([1, 2, 3], 4));
