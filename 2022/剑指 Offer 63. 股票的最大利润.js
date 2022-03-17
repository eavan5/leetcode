/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices.length) return 0
  const dp = Array.from({ length: prices.length }, () => [0, 0])
  dp[0][0] = 0
  dp[0][1] = -prices[0]
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], prices[i] + dp[i - 1][1])
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
  }
  return dp.at(-1)[0]

};