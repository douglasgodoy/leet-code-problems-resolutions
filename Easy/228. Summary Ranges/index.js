/**
 * @param {number[]} nums
 * @return {string[]}
 */

// TC = O(N)
// SC = O(1)
var summaryRanges = function (nums) {
  let result = [];
  if (!nums.length) return result;

  let tmpString = nums[0].toString();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num + 1 === nums[i + 1]) {
      continue;
    }

    if (nums[i].toString() !== tmpString)
      result.push(tmpString + "->" + nums[i].toString());
    else result.push(tmpString);

    if (nums.length === i + 1) break;

    tmpString = nums[i + 1].toString();
  }

  return result;
};
