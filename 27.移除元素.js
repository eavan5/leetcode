/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let l = 0, r = nums.length - 1
  while (l <= r) {
    if (nums[l] === val) {
      nums[l] = nums[r--]
    } else {
      l++
    }
  };
  return l
}

