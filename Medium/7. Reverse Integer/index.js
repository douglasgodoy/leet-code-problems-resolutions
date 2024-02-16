/**
 * @param {number} x
 * @return {number}
 */
//CT O(n)
//CS O(1)

var reverse = function (x) {
  let operator = x.toString()[0];

  if (operator === "-") {
    const reversedNumber = parseInt(
      x.toString().slice(1).split("").reverse().join("")
    );

    return has32Bits(reversedNumber) ? reversedNumber * -1 : 0;
  }

  const reversedNumber = parseInt(x.toString().split("").reverse().join(""));
  return has32Bits(reversedNumber) ? reversedNumber : 0;
};

function has32Bits(num) {
  return num >= -Math.pow(2, 31) && num <= Math.pow(2, 31) - 1;
}

console.log(reverse(-123));
