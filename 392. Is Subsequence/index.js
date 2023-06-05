/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */ var isSubsequence = function (s, t) {
  const hashT = new Map();

  if (!s.length) return true;

  const splittedSStr = s.split("");
  const splittedTStr = t.split("");

  let prevIdx = 0;

  splittedTStr.forEach((char, idx) => hashT.set(char, idx));

  let result;
  for (let idx = 0; idx < splittedSStr.length; idx++) {
    const ch = splittedSStr[idx];

    if (hashT[ch] === undefined) return false;
    if (hashT[ch] >= prevIdx) {
      prevIdx = hashT[ch];
      result = true;
      continue;
    }
    result = false;
  }

  return result;
};

isSubsequence("aaaaaa", "bbaaaa");
