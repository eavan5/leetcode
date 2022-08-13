/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length < 3) {
    return Math.max(nums[0], nums[1] || 0)
  }
  const dp = Array(nums.length).fill(0)
  // dp[i] 为当一共有i-1个用户时的情况最多能偷到的
  dp[0] = nums[0]
  dp[1] = Math.max(nums[1], nums[0])
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
  }
  return dp[nums.length - 1]


};