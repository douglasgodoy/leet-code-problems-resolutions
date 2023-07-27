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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let match = false;

  if (root === null || root === undefined) return false;

  function dfs(currentValue, node) {
    if (node && !match) {
      dfs(currentValue + node.val, node.left);
      dfs(currentValue + node.val, node.right);

      if (!node.left && !node.right) {
        if (currentValue + node.val === targetSum) {
          match = true;
        }
      }
    }
  }

  dfs(0, root);

  return match;
};

const tree = {
  val: 0,
  left: {
    val: 2,
    left: {
      val: -2,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    val: 8,
    left: null,
    right: null,
  },
};

console.log(hasPathSum(tree, 0));
