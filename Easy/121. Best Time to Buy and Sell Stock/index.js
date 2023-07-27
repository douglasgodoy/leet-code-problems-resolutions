/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let lessPrice = 0;
  let greatherPrice = 1;
  let profit = 0;

  //O(log n)
  while (greatherPrice < prices.length) {
    if (prices[lessPrice] < prices[greatherPrice]) {
      const currentProfit = prices[greatherPrice] - prices[lessPrice];
      profit = Math.max(profit, currentProfit);
    } else {
      lessPrice = greatherPrice;
    }

    greatherPrice++;
  }

  return profit;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([2, 4, 1])); // 2
