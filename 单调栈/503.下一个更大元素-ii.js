/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const stack = [],res = Array(nums.length*2).fill(-1)
  const newNums = [...nums, ...nums]
  for (let i = 0; i < newNums.length; i++) {
    const current = newNums[i];
    while (newNums[stack.at(-1)] < current) {
      res[stack.pop()] = current
    }
    stack.push(i)
  }
  return res.slice(0,nums.length)
};
// @lc code=end


console.log(nextGreaterElements([1,2,1]));