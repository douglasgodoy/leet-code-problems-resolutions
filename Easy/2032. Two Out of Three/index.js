/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  const arrayNum1 = new Set(nums1);
  const arrayNum2 = new Set(nums2);
  const arrayNum3 = new Set(nums3);

  let res = new Set();

  for (const element of arrayNum1) {
    if (arrayNum2.has(element) || arrayNum3.has(element)) res.add(element);
  }

  for (const element of arrayNum2) {
    if (arrayNum3.has(element)) res.add(element);
  }

  return Array.from(res);
};

//O(nˆ2)

// twoOutOfThree([1,1,3,2],  [2,3], [3])
twoOutOfThree([1, 2, 2], [4, 3, 3], [5]);
