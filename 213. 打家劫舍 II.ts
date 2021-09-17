function rob(nums: number[]): number {
  if (!nums.length) {
    return 0
  } else if (nums.length === 1) {
    return nums[0]
  }
  return Math.max(reckon(nums, 0, nums.length - 2), reckon(nums, 1, nums.length - 1))

};

function reckon(nums: number[], start: number, end: number): number {
  const dp: Array<number> = [0]
  dp[start] = nums[start]
  dp[start + 1] = Math.max(nums[start], nums[start + 1])
  for (let i = start + 2; i <= end; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
  }
  return dp[end]
}

console.log(rob([2, 3, 2]));
