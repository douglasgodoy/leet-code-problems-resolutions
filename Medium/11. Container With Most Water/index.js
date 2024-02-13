// set two pointers in edge array (ok)
// get length between pointer1 and pointer2 (ok)
// multiple length*pointer2 (ok)
// store the maximum area (ok)

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  let initialPointer = height[left];
  let finalPointer = height[right];

  while (right > left) {
    const length = right - left;

    const minHeightBetweenContainers = Math.min(initialPointer, finalPointer);

    maxArea = Math.max(maxArea, length * minHeightBetweenContainers);

    if (initialPointer < finalPointer) {
      left++;
      initialPointer = height[left];
    } else {
      right--;
      finalPointer = height[right];
    }
  }

  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 3]));
