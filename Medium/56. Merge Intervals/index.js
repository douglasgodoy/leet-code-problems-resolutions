/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// TC = O(N);
// SC = O(Ologn);
var merge = function (intervals) {
  let result = [];
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    if (!result.length) {
      result.push(interval);
      continue;
    }

    if (interval[0] <= result[result.length - 1][1]) {
      if (interval[1] > result[result.length - 1][1])
        result[result.length - 1][1] = interval[1];
      continue;
    }

    result.push(interval);
  }

  return result;
};

console.log(
  merge([
    [1, 4],
    [2, 3],
  ])
);
