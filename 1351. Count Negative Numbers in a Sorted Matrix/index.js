var countNegatives = function (grid) {
  let negativeNumbersArray = [];
  grid.forEach((array) => {
    array.forEach((value) => value < 0 && negativeNumbersArray.push(value));
  });

  return negativeNumbersArray.length ?? 0;
};

// O(nˆ2)
