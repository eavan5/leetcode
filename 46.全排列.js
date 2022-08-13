/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = []
  const usedMap = new Set // 用来映射用的
  backTracking(nums, nums.length, usedMap)
  return res
  function backTracking (nums, len, usedMap, temp = []) {
    for (const item of nums) {
      if (usedMap.has(item)) continue // 如果有相同的就继续循环
      usedMap.add(item)
      temp.push(item)
      if (temp.length === len) {
        res.push([...temp])
      }
      backTracking(nums, len, usedMap, temp) // 递归
      temp.pop() // 回溯
      usedMap.delete(item)
    }
  }

};
// @lc code=end

