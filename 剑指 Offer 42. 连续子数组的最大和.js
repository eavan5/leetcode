/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const dp = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i-1]+nums[i],nums[i])
  }
  return Math.max(...dp)
};

console.log(maxSubArray([5,4,-1,7,8]));