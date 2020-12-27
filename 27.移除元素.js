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
  let index = 0, last = nums.length - 1
  while (index <= last) {
    if (nums[index] === val) {
      nums[index] = nums[last]
      last--
    } else {
      index++
    }
  }
  return index
};
// console.log(removeElement([3, 2, 2, 3], 3));
// @lc code=end

