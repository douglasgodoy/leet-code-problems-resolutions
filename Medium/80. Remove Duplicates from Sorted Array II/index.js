/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let index = 1; index < nums.length; index++) {
    const num = nums[index];
    if (num === "_") break;
    const prevValue = nums[index - 1];
    if (prevValue === num && nums.indexOf(num) !== index - 1) {
      nums.splice(index, 1);
      nums.push("_");
      index -= 1;
    }
  }

  return nums.filter((num) => num !== "_").length;
};

// console.log(removeDuplicates([-1, 0, 0, 0, 0, 3, 3]));
console.log(removeDuplicates([0, 0, 0, 0, 0]));

// console.log(removeDuplicates([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3]));
