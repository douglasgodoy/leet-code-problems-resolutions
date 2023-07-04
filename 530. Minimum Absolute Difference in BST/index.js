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
  if (!root) return null;

  const left = root.left ? root.left.val : 0;
  const right = root.right ? root.right.val : 0;
  if ((!left && !right) || root.val - left === 1) return root.val;

  const leftValues = [];
  const rightValues = [];

  const recursiveValues = (node, array) => {
    if (!node) return;
    if (node.val !== null) {
      array.push(node.val);
      if (node.left !== null) {
        recursiveValues(node.left, array);
      }

      if (node.right !== null) {
        recursiveValues(node.right, array);
      }
    }
  };

  recursiveValues(root.left, leftValues);
  recursiveValues(root.right, rightValues);

  const makeMath = (values) => {
    let result = 100000;
    for (const rootValue of values) {
      for (const value of values) {
        const currResult = rootValue - value;

        if (result === null) {
          result = currResult;
        }

        if (currResult === 1) {
          return 1;
        }
        const subtract = currResult - result;
        if (currResult < result && subtract > 0) {
          result = currResult;
        }
      }
      return result;
    }
  };

  let resultLeft = makeMath(leftValues) || 100000;
  let resultRight = makeMath(rightValues) || 100000;

  return resultLeft < resultRight ? resultLeft : resultRight;
};

// console.log(
//   getMinimumDifference({
//     val: 20,
//     left: {
//       val: 15,
//       left: { val: 7, left: null, right: null },
//       right: { val: 3, left: null, right: null },
//     },
//     right: { val: 22, left: null, right: null },
//   })
// );

console.log(
  getMinimumDifference({
    val: 1,
    left: {
      val: 0,
      left: null,
      right: null,
    },
    right: {
      val: 48,
      left: { val: 12, left: null, right: null },
      right: { val: 49, left: null, right: null },
    },
  })
);

// console.log(
//   getMinimumDifference({
//     val: 4,
//     left: {
//       val: 2,
//       left: {
//         val: 1,
//         left: null,
//         right: null,
//       },
//       right: {
//         val: 3,
//         left: null,
//         right: null,
//       },
//     },
//     right: {
//       val: 3,
//       left: null,
//       right: null,
//     },
//   })
// );

// console.log(
//   getMinimumDifference({
//     val: 1,
//     left: null,
//     right: {
//       val: 3,
//       left: {
//         val: 2,
//         left: null,
//         right: null,
//       },
//       right: null,
//     },
//   })
// );
