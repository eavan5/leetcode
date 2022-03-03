/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = []
  const temp = []
  backtrack()
  return res
  function backtrack (startIndex = 0) {
    if (temp.reduce((p, c) => p + c, 0) > target) {
      return
    }
    if (temp.reduce((p, c) => p + c, 0) === target) {
      res.push([...temp])
      return
    }
    for (let i = startIndex; i < candidates.length; i++) {
      temp.push(candidates[i])
      backtrack(i)
      temp.pop()
    }
  }
};
console.log(combinationSum);
// @lc code=end

