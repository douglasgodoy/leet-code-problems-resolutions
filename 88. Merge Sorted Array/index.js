/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m);
  nums2.splice(n);
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
};

merge([1, 2, 3, 5, 8, 0, 0, 0], 5, [2, 3, 6, 7], 4);
