/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  return prices.reduce((t, c, i, a) => i === 0 || c < a[i - 1] ? t : t + c - a[i - 1], 0)
};
// @lc code=end

