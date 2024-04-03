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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const ans = [];

  function getNodes(node, level = 0) {
    if (!node) return;

    ans[level] = ans[level] ?? [];
    ans[level].push(node.val);

    getNodes(node.left, level + 1);
    getNodes(node.right, level + 1);
  }
  getNodes(root);

  return ans;
};
