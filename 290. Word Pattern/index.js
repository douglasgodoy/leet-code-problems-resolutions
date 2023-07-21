/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let count = 1;
  let patternOne = pattern.split("");
  let patternTwo = s.split(" ");
  if (pattern.length !== patternTwo.length) return false;

  while (/[a-zA-Z]+/gm.test(patternOne)) {
    const letter = patternOne[count - 1];
    let indexOfLetter = patternOne.indexOf(letter);
    while (indexOfLetter !== -1) {
      patternOne[indexOfLetter] = count;
      indexOfLetter = patternOne.indexOf(letter);
    }

    const word = patternTwo[count - 1];
    let indexOf = patternTwo.indexOf(word);
    while (indexOf !== -1) {
      patternTwo[indexOf] = count;
      indexOf = patternTwo.indexOf(word);
    }

    count++;
  }

  return patternOne.join("") === patternTwo.join("");
};

// console.log(wordPattern("abba", "dog cat cat dog")); // true
console.log(
  wordPattern(
    "abcdefghijklmnnmlkjihgfedcba",
    "aa bb cc dd ee ff gg hh ii jj kk ll mm nn nn mm ll kk jj ii hh gg ff ee dd cc bb aa"
  )
); //false
