var countPoints = function (rings) {
  let hashTable = {},
    rodsCompleted = 0;

  for (i = 0; i < 10; i++) {
    hashTable[i] = {
      R: 0,
      G: 0,
      B: 0,
    };
  }

  const splitStringInLetterAndNumber = rings.match(/\w[0-9]/gi);
  splitStringInLetterAndNumber.forEach((string) => {
    const [color, rod] = string.split("");
    hashTable[rod][color] = 1;
  });

  for (let index in hashTable) {
    const expected = JSON.stringify({ R: 1, G: 1, B: 1 });

    if (JSON.stringify(hashTable[index]) === expected) {
      rodsCompleted++;
    }
  }

  return rodsCompleted;
};

//O(nˆ2)
