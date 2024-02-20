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
 * @return {number}
 */

// TC = O(log n)
// SC = O(n)

var countNodes = function (root) {
  if (!root) return 0;

  let count = countNodesImpl(root);

  return count;
};

function countNodesImpl(root) {
  if (!root) return 0;
  return countNodesImpl(root.right) + countNodesImpl(root.left) + 1;
}
