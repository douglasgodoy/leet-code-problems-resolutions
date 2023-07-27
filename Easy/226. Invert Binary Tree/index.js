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
 * @return {TreeNode}
 */
// O(n) where n is a range of bst;
var invertTree = function (root) {
  if (root.val === null) return null;

  const oldLeft = root.left;
  root.left = root.right;
  root.right = oldLeft;

  if (root.right !== null) {
    invertTree(root.right);
  }

  if (root.left !== null) {
    invertTree(root.left);
  }

  return root;
};

console.log(
  invertTree({
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
      val: 20,
      left: { val: 15, left: null, right: null },
      right: { val: 7, left: null, right: null },
    },
  })
);

/*output
  
  {
    val: 3,
    left: {
      val: 20,
      left: { val: 7, left: null, right: null },
      right: { val: 15, left: null, right: null }
    },
    right: { val: 9, left: null, right: null },
  }
  
  
  */
