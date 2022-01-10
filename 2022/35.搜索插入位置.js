/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let l = 0, r = nums.length - 1
  while (r >= l) {
    const mid = l + ((r - l) / 2 >> 1)
    if (nums[mid] === target) return mid
    if (nums[mid] < target) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return l
};
// @lc code=end

