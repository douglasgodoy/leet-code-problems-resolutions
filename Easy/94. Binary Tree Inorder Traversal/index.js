/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// TC = O(n)
// SC = O(n)
var inorderTraversal = function (root) {
  let result = [];
  if (!root) return [];

  function inOrder(root) {
    if (!root) return;

    inOrder(root.left);
    result.push(root.val);
    inOrder(root.right);
  }

  inOrder(root);

  return result;
};
