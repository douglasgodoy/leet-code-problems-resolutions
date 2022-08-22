// Binary Search

var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length;
  let middle = Math.floor(end / 2);

  if (!nums.includes(target)) {
    let correctIndex = 0;
    for (i = 0; i < nums.length; i++) {
      if (target > nums[i]) {
        correctIndex++;
      }
    }
    return correctIndex;
  } else {
    while (start < end) {
      if (target === nums[middle]) {
        return middle;
        break;
      }

      if (target < nums[middle]) {
        end = middle;
        middle = Math.floor(end / 2);
      } else if (target > nums[middle]) {
        start = middle;
        middle = start + ((end - start) >> 1);
      }
    }
  }
};
