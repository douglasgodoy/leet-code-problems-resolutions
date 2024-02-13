var lengthOfLongestSubstring = function (s) {
  let tempStringArray = [];
  let maximumChars = 0;

  for (let index = 0; index < s.length; index++) {
    const char = s[index];

    if (!tempStringArray.includes(char)) {
      tempStringArray.push(char);
      maximumChars = Math.max(tempStringArray.length, maximumChars);
      continue;
    }

    const newString = s.slice(tempStringArray.indexOf(char) + 1);
    tempStringArray = [];
    s = newString;
    index = -1;
  }
  return maximumChars;
};

console.log(lengthOfLongestSubstring("pwwkew"));
// create a variable that to store the maximum chars non repeated (ok)
// iterate string verifing the repeated characters
