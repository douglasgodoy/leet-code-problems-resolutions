/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums.length) return 0;

  const sortedArray = nums.sort((a, b) => a - b);
  let maximumLength = 1;
  let tmpLength = 1;
  for (let i = 1; i < sortedArray.length; i++) {
    const num = sortedArray[i];
    const prevNum = sortedArray[i - 1];

    if (num === prevNum) continue;

    if (num - prevNum === 1) {
      tmpLength++;
      maximumLength = Math.max(tmpLength, maximumLength);
      continue;
    }

    tmpLength = 1;
  }

  return maximumLength;
};

console.log(longestConsecutive([1, 2, 0, 1]));

// sort array
// split by subarrays
// return the greatest
