function lastStoneWeightII(stones: number[]): number {
  /* 定义dp:
    dp[j]为容量j的背包能装下的最大的重量的石头
  */
  /*  递推公式:
     dp[j] = dp[j-store[i]]+store[i]
  */
  const sum = stones.reduce((t, c) => t + c)
  /* 确定base 
    容量为0的背包的最大容量是0
  */
  const weight = ~~(sum / 2)
  const dp = new Array(weight + 1).fill(0)
  for (let i = 0; i < stones.length; i++) {
    for (let j = weight; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
    }
  }
  // 找到能装满weight的最大重量的石头
  const maxWidth = dp[weight]
  return sum - 2 * maxWidth

};