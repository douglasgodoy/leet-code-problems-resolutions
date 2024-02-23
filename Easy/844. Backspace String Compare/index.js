/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// TC = O(N);
// SC = O(1);
var backspaceCompare = function (s, t) {
  let newS = [];
  let newT = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "#") {
      newS.pop();
      continue;
    }
    newS.push(char);
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];

    if (char === "#") {
      newT.pop();
      continue;
    }
    newT.push(char);
  }

  if (newS.join("") === newT.join("")) return true;
  return false;
};

console.log(backspaceCompare("bxj##tw", "bxj###tw"));
