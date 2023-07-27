/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length > t.length) return false;

  const splitS = s.split("");

  const string = t.split("");
  for (let i = 0; i < splitS.length; i++) {
    const letter = splitS[i];
    const indexMatch = string.indexOf(letter);

    if (indexMatch === -1) {
      return false;
    }

    string.splice(0, indexMatch + 1);
  }

  return true;
};

console.log(isSubsequence("abc", "ahbgdc")); //true
console.log(isSubsequence("axc", "ahbgdc")); //false
console.log(isSubsequence("aaaaaa", "bbaaaa")); //false
