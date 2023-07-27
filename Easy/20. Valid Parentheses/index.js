/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (let index = 0; index < s.length; index++) {
    const ch = s[index];

    if (ch === "{") {
      stack.push("}");
      continue;
    } else if (ch === "(") {
      stack.push(")");
      continue;
    } else if (ch === "[") {
      stack.push("]");
      continue;
    } else if (stack.pop() !== ch) {
      result = false;
      break;
    }
  }

  return !stack.length;
};

// console.log(isValid("()[]{}")); // true
// console.log(isValid("([]{})")); // true
// console.log(isValid("([]{}")); // false
// console.log(isValid("(}{)")); // false
// console.log(isValid("[[[]")); // false
// console.log(isValid("(){}}{")); // alse
// console.log(isValid("(([]){})")); // true
console.log(isValid("([)]")); // false
