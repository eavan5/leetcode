/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let l = r = sum = 0
  let min = nums.length + 1 // 返回值的最大值
  while (r < nums.length) {
    sum += nums[r++]
    while (sum >= target) {
      min = min < r - l ? min : r - l
      sum -= nums[l++]
    }
  }
  return min <= nums.length ? min : 0

};

// @lc code=end

