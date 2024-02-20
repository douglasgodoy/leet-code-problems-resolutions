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
 */
let stack = [];
var BSTIterator = function (root) {
  getSmallestNode(root);
};

function getSmallestNode(root) {
  while (root) {
    stack.push(root);
    root = root.left;
  }
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  const node = stack.pop();
  if (node.right) {
    getSmallestNode(node.right);
  }
  return node.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return stack.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
