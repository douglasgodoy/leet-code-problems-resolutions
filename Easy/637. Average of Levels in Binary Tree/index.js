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
var averageOfLevels = function (root) {
  const mapLevel = new Map();
  function bfs(node, level) {
    if (node) {
      let currValues = [];
      if (node.left) currValues.push(node.left.val);
      if (node.right) currValues.push(node.right.val);

      const newValue = mapLevel.has(level)
        ? [...mapLevel.get(level), ...currValues]
        : currValues;

      if (newValue.length) mapLevel.set(level, newValue);
      bfs(node.left, level + 1);
      bfs(node.right, level + 1);
    }
  }

  bfs(root, 1);

  const result = [root.val];
  for (const [_, arrayValues] of mapLevel.entries()) {
    const average =
      arrayValues.reduce((prev, curr) => prev + curr, 0) / arrayValues.length;
    result.push(average);
  }
  return result;
};
const tree = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null,
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

console.log(averageOfLevels(tree));
