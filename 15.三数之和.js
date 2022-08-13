/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  const res = []
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1, right = nums.length - 1
    if (i - 1 >= 0 && nums[i - 1] === nums[i]) continue // 如果连续一样的数就跳过
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (!sum) {
        res.push([nums[i], nums[left++], nums[right--]])
        // 如果后续有相同的则跳过
        while (nums[left] === nums[left - 1]) left++
        while (nums[right] === nums[right + 1]) right--
      } else if (sum > 0) {
        right--
      } else {
        left++
      }
    }
  }
  return res
};
// @lc code=end

