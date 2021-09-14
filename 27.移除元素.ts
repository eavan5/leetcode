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
// 双指针
var removeElement = function (nums: number[], val: number) {
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

function removeElement2(nums: number[], val: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--
    }
  }
  return nums.length
};
