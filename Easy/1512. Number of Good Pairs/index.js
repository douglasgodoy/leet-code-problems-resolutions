/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      const element = nums[j];
      if (number === element) count++;
    }
  }
  return count;
};

//O(nˆ2)
