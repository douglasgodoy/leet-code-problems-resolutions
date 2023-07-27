/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const numbersMap = new Map();
  let result = { key: null, value: 0 };
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];

    const hasNumber = numbersMap.has(number);

    if (hasNumber) {
      const currNumber = numbersMap.get(number);
      numbersMap.set(number, currNumber + 1);
    } else {
      numbersMap.set(number, 1);
    }
  }

  for (const [key, counter] of numbersMap) {
    if (counter > result.value) {
      result = { key, value: counter };
    }
  }

  return result.key;
};

majorityElement([3, 3, 3, 2, 5, 1, 3]);
