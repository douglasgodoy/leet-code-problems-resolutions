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
var sumNumbers = function (root) {
  if (!root) return 0;
  let arrayWithValues = [];

  sum(root.right, root.val.toString());
  sum(root.left, root.val.toString());

  function sum(node, stringNumber) {
    if (!node) return;

    const newValue = stringNumber.concat(node.val.toString());
    if (!node.right && !node.left) return arrayWithValues.push(newValue);
    sum(node.right, newValue);
    sum(node.left, newValue);
  }

  const sumValue = arrayWithValues.reduce(
    (prev, curr) => parseInt(prev) + parseInt(curr),
    0
  );

  const bits = 4294967295;
  if (sumValue > bits) return bits;
  return sumValue;
};

//verify if result is greater 32bits, return max of 32bit
console.log(
  sumNumbers({
    val: 4,
    right: { val: 0, right: null, left: null },
    left: {
      val: 9,
      right: { val: 5, right: null, left: null },
      left: { val: 1, right: null, left: null },
    },
  })
);
