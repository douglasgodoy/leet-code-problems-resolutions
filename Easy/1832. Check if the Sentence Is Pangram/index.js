/**
 * @param {string} sentence
 * @return {boolean}
 
 
 1. create array with alphabet "abcdefghijklmnopqrstuvwxyz".split('')
 2. create loop with alph. 
 3. verify if exists in the sentence
 */

var checkIfPangram = function (sentence) {
  const alphabet = new Set("abcdefghijklmnopqrstuvwxyz".split("")),
    setSentence = new Set(sentence.split(""));

  let count = 0;

  for (let letter of alphabet) {
    if (setSentence.has(letter)) {
      count++;
    }
  }

  return count === alphabet.size ? true : false;
};

// O(n)

checkIfPangram("thequickbrownfoxjumpsoverthelazydog");
