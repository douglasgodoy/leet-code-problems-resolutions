/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const sMap = new Map();
  const tMap = new Map();

  for (let index = 0; index < s.length; index++) {
    const letter = s[index];
    const hasSMap = sMap.has(letter);

    if (hasSMap) sMap.set(letter, sMap.get(letter) + 1);
    else sMap.set(letter, 1);
  }

  for (let index = 0; index < t.length; index++) {
    const letter = t[index];
    const hasTMap = tMap.has(letter);

    if (hasTMap) tMap.set(letter, tMap.get(letter) + 1);
    else tMap.set(letter, 1);
  }

  for (const [key, value] of sMap.entries()) {
    if (!tMap.has(key) || tMap.get(key) !== value) return false;
  }
  return true;
};

console.log(isAnagram("rat", "car"));
console.log(isAnagram("anagram", "nagaram"));
