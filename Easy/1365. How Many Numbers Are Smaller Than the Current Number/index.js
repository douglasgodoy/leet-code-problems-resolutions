var smallerNumbersThanCurrent = function (nums) {
  let hashTable = {},
    hashTableIndex = {},
    finalArray = [];

  nums.forEach((num, index) => {
    hashTableIndex[index] = num;
  });

  let sortNumsDesc = nums.sort((a, b) => a - b).reverse();

  for (i = 0; i < sortNumsDesc.length; i++) {
    hashTable[nums[i]] = sortNumsDesc.length - (i + 1);
  }

  Object.values(hashTableIndex).forEach((value) => {
    finalArray.push(hashTable[value]);
  });

  return finalArray;
};


// O(n)
