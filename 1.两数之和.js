/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (map.has(target - element)) {
      return [i, map.get(target - element)]
    }
    map.set(element, i)
  }
};
// @lc code=end

