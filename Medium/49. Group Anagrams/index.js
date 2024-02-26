/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (const word of strs) {
    const sortedWord = [...word].sort().join("");

    if (!map.has(sortedWord)) {
      map.set(sortedWord, []);
    }
    map.get(sortedWord).push(word);
  }

  return Array.from(map.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
