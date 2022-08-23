var countConsistentStrings = function (allowed, words) {
  let count = 0;
  for (let sentence of words) {
    const isAllowed = sentence
      .split("")
      .every((letter) => allowed.includes(letter));
    if (isAllowed) count++;
  }
  return count;
};

//O(nˆ2)

countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]);
countConsistentStrings("abc", [
  "a",
  "b",
  "c",
  "ab",
  "ac",
  "bc",
  "abmxc",
  "xmv",
]);
countConsistentStrings("exdohslrwipnt", [
  "xrwlstne",
  "rs",
  "ioetdll",
  "lwi",
  "r",
  "pieonois",
  "r",
  "xtp",
  "stia",
  "gicfuvmnr",
  "hdntpxse",
  "sodxws",
  "v",
  "hstirooon",
  "d",
]);
countConsistentStrings("exdohslrwipnt", ["d"]);
