var hammingWeight = function (n) {
  const decNumber = n
    .toString(2)
    .split("")
    .filter((num) => num === "1");
  return decNumber.length;
};

console.log(hammingWeight(3));
