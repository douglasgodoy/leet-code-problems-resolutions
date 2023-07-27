/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const firstMap = new Map();
  const secondMap = new Map();

  if (s.length !== t.length) return false;

  addInHashMap(s, firstMap);
  addInHashMap(t, secondMap);

  if (firstMap.size !== secondMap.size) return false;

  for (let i = 0; i < s.length; i++) {
    const letterS = s[i];
    const letterT = t[i];

    const stringFirstMap = firstMap.get(letterS).toString();
    const stringSecondMap = secondMap.get(letterT).toString();

    if (stringFirstMap !== stringSecondMap) {
      return false;
    }
  }

  return true;
};

console.log(isIsomorphic("egghead", "alloank")); //true
console.log(isIsomorphic("bacdd", "asemk")); //false
console.log(isIsomorphic("badc", "baba")); //false
console.log(isIsomorphic("bbbaaaba", "aaabbbba")); // false

function addInHashMap(s, mapper) {
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    const currArray = mapper.get(letter);

    if (!mapper.has(letter)) {
      mapper.set(letter, [i]);
      continue;
    }

    currArray.push(i);
    mapper.set(letter, currArray);
  }
}
