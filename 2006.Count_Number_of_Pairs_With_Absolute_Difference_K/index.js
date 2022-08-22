var_countKDifference = function (nums, k) {
  count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        if (nums[i] - nums[j] === k) count++;
      } else {
        if (nums[j] - nums[i] === k) count++;
      }
    }
  }
  return count;
};

countKDifference([1, 2, 2, 1], 1); // 4
