/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let result = false;
  const magazineMap = new Map();
  const noteArray = ransomNote.split("");

  magazine.split("").forEach((letter) => {
    const currentCount = magazineMap.get(letter) || 0;
    magazineMap.set(letter, currentCount + 1);
  });

  for (let i = 0; i < noteArray.length; i++) {
    const letter = noteArray[i];

    if (magazineMap.get(letter) > 0) {
      magazineMap.set(letter, magazineMap.get(letter) - 1);
      result = true;
      continue;
    }

    result = false;
    break;
  }

  return result;
};

console.log(canConstruct("aabcde", "abcdefg"));
