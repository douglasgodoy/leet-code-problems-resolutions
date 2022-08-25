/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let hashTable = {},
    sum = 0;

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    if (hashTable[number] !== undefined)
      hashTable[number] = hashTable[number] + 1;
    else hashTable[number] = 1;
  }

  for (const key in hashTable) {
    const element = hashTable[key];
    if (element === 1) sum += parseInt(key);
  }

  return sum;
};

//O(n)

sumOfUnique([1, 3, 2, 2]);
