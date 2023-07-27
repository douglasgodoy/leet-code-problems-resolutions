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
var getMinimumDifference = function (root) {
  let minimum = 100001;

  function dfs(node, prevVal) {
    if (node) {
      if (minimum === 1) return;

      dfs(node.right, [...prevVal, node.val]);
      dfs(node.left, [...prevVal, node.val]);

      prevVal.forEach((val) => {
        let sub = node.val - val;
        if (sub < 0) sub *= -1;

        minimum = Math.min(sub, minimum);
      });
    }
  }

  if (root.right) {
    if (root.right.val - root.val === 1) return 1;
    dfs(root.right, [root.val]);
  }
  if (root.left) {
    if (root.val - root.left.val === 1) return 1;
    dfs(root.left, [root.val]);
  }

  return minimum;
};
const tree = {
  val: 236,
  left: {
    val: 104,
    left: null,
    right: {
      val: 701,
      left: {
        val: 227,
        left: null,
        right: null,
      },
      right: {
        val: 911,
        left: null,
        right: null,
      },
    },
  },
  right: null,
};

console.log(getMinimumDifference(tree));
