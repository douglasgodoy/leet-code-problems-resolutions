/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  const splitString = s.split(""),
    hash = {};
  let target = "";

  for (i = 0; i < splitString.length; i++) {
    if (hash[splitString[i]] !== undefined) {
      target = splitString[i];
      break;
    }
    hash[splitString[i]] = i;
  }
  return target;
};

repeatedCharacter("aa");

//O(n)
