/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

// TC = O(log n)
// SC = O(1)
var minSubArrayLen = function (target, nums) {
  let minLength = null;
  if (target < 0) return 0;
  if (!nums.length) return 0;

  let pointer1 = 0;
  let pointer2 = 1;
  let tmpSum = nums[pointer1];
  while (pointer1 < pointer2 && pointer2 <= nums.length) {
    if (nums[pointer1] === target || nums[pointer2] === target) return 1;

    if (minLength === 2) {
      pointer1++;
      pointer2--;
      continue;
    }

    if (tmpSum >= target) {
      const calc = pointer2 - pointer1;
      minLength = minLength === null ? calc : Math.min(minLength, calc);
      tmpSum -= nums[pointer1];
      pointer1++;
      continue;
    }

    tmpSum += nums[pointer2];

    pointer2++;
  }

  return minLength;
};

console.log(minSubArrayLen(4, [1, 4, 4]));
