/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  if (nums.length < 3) return [];

  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num > 0) break;

    if (i > 0 && num === nums[i - 1]) continue;

    let low = i + 1;
    let high = nums.length - 1;

    while (low < high) {
      const sum = num + nums[low] + nums[high];
      if (sum > 0) high--;
      else if (sum < 0) low++;
      else {
        ans.push([num, nums[low], nums[high]]);

        let lastLow = nums[low];
        let lastHigh = nums[high];

        while (low < high && lastLow === nums[low]) {
          low++;
        }

        while (low < high && lastHigh === nums[high]) {
          high--;
        }
      }
    }
  }

  return ans;
};

console.log(threeSum([0, 0, 0]));
