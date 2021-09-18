function deleteAndEarn(nums: number[]): number {
  //处理边界
  if (!nums.length) {
    return 0
  } else if (nums.length === 1) {
    return nums[0]
  }
  const max = Math.max(...nums)
  const countArr = Array(max + 1).fill(0)
  for (const item of nums) {
    countArr[item]++
  }
  const dp = Array(max + 1).fill(0)
  dp[1] = countArr[1] * 1
  dp[2] = Math.max(dp[1], countArr[2] * 2)

  for (let i = 2; i <= max; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + countArr[i] * i)
  }
  return dp[max]
};

console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]));
