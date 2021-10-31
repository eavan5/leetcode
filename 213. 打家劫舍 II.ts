function rob(nums: number[]): number {

  if (!nums.length) {
    return 0
  } else if (nums.length === 1) {
    return nums[0]
  }
/*   这时候因为沿街的房屋都是拼接在一起的，意思就是说你偷了第一家就不能偷最后一家

实际上这个和打家劫舍第一题是一模一样的，不过就是多了一层

如果偷第一家，那就偷不了最后一家，那被偷的范围就是dp[0,i-2]

如果偷了最后一家，那就偷不了第一家，被偷的范围就是dp[1,i-1] */
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
