/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  let profit = 0;
  let minPrice = Infinity;

  for (let i = 0; i < prices.length; i++) {
    const priceDay = prices[i];
    minPrice = Math.min(minPrice, priceDay);
    if (priceDay - minPrice > 0) {
      profit += priceDay - minPrice;
      minPrice = priceDay;
    }
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([2, 1, 2, 0, 1]));
console.log(maxProfit([2, 4, 1]));
