/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const permutations = [];

  function backtrack(i) {
    if (i === nums.length) return permutations.push([...nums]);
    for (let j = i; j < nums.length; j++) {
      let tmpJ = nums[j];
      let tmpI = nums[i];

      nums[i] = tmpJ;
      nums[j] = tmpI;
      backtrack(i + 1);
      nums[i] = tmpI;
      nums[j] = tmpJ;
    }
  }

  backtrack(0);
  return permutations;
};
