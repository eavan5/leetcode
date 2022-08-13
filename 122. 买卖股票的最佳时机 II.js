/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const dp = Array.from({ length: prices.length })
  dp.forEach((item, index) => {
    dp[index] = [0, 0]
  })
  dp[0][0] = 0
  dp[0][1] = -prices[0]
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  }
  return dp.at(-1)[0]
};