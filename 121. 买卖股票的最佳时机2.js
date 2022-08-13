/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  //  股票买卖有两个状态j 0不持股 1持股
  // dp[i][j] 为在0-i天内 身上的现金流  则我们需要dp[prices.length-1][1] 的
  // 这递推公式为 dp[i][0] = Math.max(dp[i-1][0],dp[i-1][0]+prices[i])
  //            dp[i][1] = Math.max(dp[i-1][1],-prices[i])
  const dp = new Array(prices.length)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = [0, 0]
  }
  dp[0][0] = 0
  dp[0][1] = -prices[0]
  for (let i = 1; i < dp.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
  }
  return dp.at(-1)[0]

};