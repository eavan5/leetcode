function minCostClimbingStairs(cost: number[]): number {
  //dp[i] 为数组为i个的时候最低花费
  //确定base
  // 当台阶为0,最低消耗0,当台阶个数为1的时候也为0
  const dp = [0, 0]
  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  }
  return dp[cost.length]
};

console.log(minCostClimbingStairs([10, 15, 20]));
