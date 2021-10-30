function rob(nums: number[]): number {
  const dp = [0, nums[0]]
  for (let i = 2; i <= nums.length; i++) {
    dp[i] = Math.max(dp[i-2]+nums[i-1],dp[i-1])
  }
  return dp[nums.length]
};

console.log(rob([1,2,3,1]));
