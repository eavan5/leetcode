function maxSubArray(nums: number[]): number {
  let max = nums[0]
  let sum = []
  sum[0] = max
  for (let i = 1; i < nums.length; i++) {
    const current = nums[i];
    sum[i] = Math.max(sum[i - 1] + current, current)
    max = Math.max(sum[i], max)
  }
  return max
};