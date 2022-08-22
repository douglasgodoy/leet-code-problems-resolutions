var numJewelsInStones = function (jewels, stones) {
  let hashTable = {},
    count = 0;

  jewels.split("").forEach((stone) => {
    hashTable[stone] = true;
  });

  const arrayStones = stones.split("");
  for (i = 0; i < arrayStones.length; i++) {
    if (hashTable[arrayStones[i]]) {
      count++;
    }
  }
  return count;
};

// O(n)
