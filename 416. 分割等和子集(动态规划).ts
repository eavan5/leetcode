/*
其实是一个01背包问题
给你一个体积为nums和的一半的背包和N个物品,其中每物品的重量为nums[i]
是否有一种装法能把背包装满
base case
dp[..][0] = true  背包容量为0，相当于装满了
dp[0][..] = false  没有物品，相当于没法装满了
*/

function canPartition(nums: number[]): boolean {
  let sum = nums.reduce((t, c) => t + c)
  // 如果是单数就不可能有两个和相等的子集
  if (1 & sum) return false
  // 和的一半
  sum = sum / 2
  // 定义DP数组
  // dp[i][j] 前i个物品,背包总容量为j
  // base case 就是 dp[..][0] = true 以及 dp[0][..] = false
  const dp = new Array(nums.length + 1).fill(0).map(() => new Array(sum + 1).fill(false))
  // 背包没有空间的时候，就相当于装满了
  dp.forEach(item => item[0] = true)
  for (let i = 1; i < nums.length + 1; i++) {
    for (let j = 1; j < sum + 1; j++) {
      // nums[i - 1] 是第i个背包的容量
      // 这个时候表示背包的容量j装不下第i个,只能选择不装
      if (j - nums[i - 1] < 0) {
        dp[i][j] = dp[i - 1][j]
      } else {
        //这时候可以选择不装或装 反正只要有一个OK就全部OK 首先看他上一个是不是true 如果是true就没必要继续查找别的呢
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]
      }

    }
  }
  return dp[nums.length][sum]
};