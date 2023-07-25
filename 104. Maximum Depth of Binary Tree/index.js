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

var maxDepth = function (root) {
  let depth = 0;

  function dfs(currentValue, node) {
    if (node) {
      depth = Math.max(depth, currentValue);
      dfs(currentValue + 1, node.left);
      dfs(currentValue + 1, node.right);
    }
  }

  dfs(1, root);
  return depth;
};

console.log(
  maxDepth({
    val: 0,
    left: {
      val: 2,
      right: null,
      left: {
        val: 1,
        left: {
          val: 1,
          left: null,
          right: null,
        },
        right: {
          val: 5,
          left: null,
          right: null,
        },
      },
    },
    right: {
      val: 4,
      left: {
        val: 3,
        left: null,
        right: {
          val: 6,
          left: null,
          right: null,
        },
      },
      right: {
        val: -1,
        left: null,
        right: {
          val: 8,
          left: null,
          right: null,
        },
      },
    },
  })
);

const a = {
  val: 1,
  left: {
    val: 2,
    right: {
      val: 4,
      left: null,
      right: null,
    },
    left: null,
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
};
