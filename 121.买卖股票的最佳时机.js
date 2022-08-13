/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 1.确定dp[i]的含义: dp[i][0]为不卖股票时身上剩下的最多的钱  dp[i][1]表i示第天买了股票又卖了的收益
  // 2.确定递推公式
  //  dp[i][0] = Math.max(dp[i-1][0],-prices[i])
  //  dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]+prices[i])
  // 3. 初始化dp数组
  const dp = new Array(prices.length)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = [0, 0]
  }
  dp[0][0] = -prices[0]
  dp[0][1] = 0
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
  }
  return dp.at(-1)[1]
};
// @lc code=end

