/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const bst = {
    createNode: function (value) {
      return {
        val: value,
        left: null,
        right: null,
      };
    },
  };

  if (!nums.length) return null;
  if (nums.length === 1) return bst.createNode(nums[0]);

  const indexMiddle = Math.floor(nums.length / 2);
  const middle = nums[indexMiddle];

  const firstHalfOfArray = nums.slice(0, indexMiddle);
  const secondHalfOfArray = nums.splice(indexMiddle + 1, nums.length);

  const node = bst.createNode(middle);
  node.left = sortedArrayToBST(firstHalfOfArray);
  node.right = sortedArrayToBST(secondHalfOfArray);

  return node;
};

// sortedArrayToBST([-10, -3, 0, 5, 9]);
console.log(sortedArrayToBST([0, 1, 2, 3, 4, 5]));
