/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  //get greather
  // use recursive function to verify the greather until to come at the end
  if (nums.length === 1) return true;
  return findGreatherJumps(nums);
};

function findGreatherJumps(array) {
  let jumps = array.shift();
  if (!jumps) return false;

  if (jumps >= array.length) return true;

  let greatherValueIndex = 0;

  for (let index = 1; index < jumps; index++) {
    const conditional = index > array[greatherValueIndex] && !!array[index];
    if (array[index] >= array[greatherValueIndex] || conditional) {
      array.splice(0, index);
      index--;
      jumps--;
    }
  }

  return findGreatherJumps(array);
}

console.log(
  canJump([
    8, 2, 4, 4, 4, 9, 5, 2, 5, 8, 8, 0, 8, 6, 9, 1, 1, 6, 3, 5, 1, 2, 6, 6, 0,
    4, 8, 6, 0, 3, 2, 8, 7, 6, 5, 1, 7, 0, 3, 4, 8, 3, 5, 9, 0, 4, 0, 1, 0, 5,
    9, 2, 0, 7, 0, 2, 1, 0, 8, 2, 5, 1, 2, 3, 9, 7, 4, 7, 0, 0, 1, 8, 5, 6, 7,
    5, 1, 9, 9, 3, 5, 0, 7, 5,
  ])
); //true
console.log(canJump([5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0])); //true
console.log(canJump([4, 2, 0, 0, 1, 1, 4, 4, 4, 0, 4, 0])); //true
console.log(canJump([3, 4, 0, 1, 0, 0, 3, 0])); //false

console.log(canJump([3, 0, 8, 2, 0, 0, 1])); //true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([2, 0, 0])); // true
console.log(canJump([1, 1, 1, 0])); // true
console.log(canJump([2, 5, 0, 0])); // true
