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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root.left && !root.right) return true;
  if (!root.left || !root.right) return false;

  reverseTree(root.right);
  const leftSide = JSON.stringify(root.left);
  const rightSide = JSON.stringify(root.right);

  function reverseTree(node) {
    if (node) {
      const oldLeft = node.left;
      node.left = node.right;
      node.right = oldLeft;

      reverseTree(node.left);
      reverseTree(node.right);
    }
  }
  return leftSide === rightSide;
};

console.log(
  isSymmetric({
    val: 1,
    right: {
      val: 2,
      right: { val: 4, right: null, left: null },
      left: { val: 3, right: null, left: null },
    },
    left: {
      val: 2,
      right: { val: 3, right: null, left: null },
      left: { val: 4, right: null, left: null },
    },
  })
);
