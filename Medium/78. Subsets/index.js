/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const ans = [];
  if (!nums.length) return ans;

  function backtracking(arr, i) {
    if (i === nums.length) {
      ans.push([...arr]);
      return;
    }

    arr.push(nums[i]);
    backtracking(arr, i + 1);

    arr.pop();

    backtracking(arr, i + 1);
  }

  backtracking([], 0);

  return ans;
};

console.log(subsets([1, 2, 3]));
