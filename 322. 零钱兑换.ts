/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins: number[], amount: number) {
  const dp = new Array(amount + 1).fill(Infinity)
  //确定base
  dp[0] = 0
  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i - coin] + 1, dp[i])
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
};