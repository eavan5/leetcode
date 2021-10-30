function minCostClimbingStairs2(cost: number[]): number {
  const dp = [0,0]
  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  }
   return dp[cost.length]
}

function minCostClimbingStairs3(cost: number[]): number {
  let p = 0, c = 0
  for (let i = 2; i <= cost.length; i++) {
    const n = Math.min(cost[i - 1] + c, cost[i - 2] + p)
    p = c
    c = n
    
  }
  return c
}
