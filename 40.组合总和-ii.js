/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 这一题实际上可以先去重然后再做

// [10, 1, 2, 7, 6, 1, 5]
// [1, 1, 2, 5, 6, 7, 10]

var combinationSum2 = function (candidates, target) {
  const res = []
  candidates.sort()
  const temp = []
  backtrack()
  return res
  function backtrack (index = 0) {
    if (temp.reduce((p, c) => p + c, 0) > target) return
    if (temp.reduce((p, c) => p + c, 0) === target) {
      res.push([...temp])
      return
    }
    let mark
    for (let i = index; i < candidates.length; i++) {
      const current = candidates[i]
      if (mark === current) continue
      temp.push(current)
      backtrack(i + 1)
      mark = current
      temp.pop()
    }
  }
};
// @lc code=end

