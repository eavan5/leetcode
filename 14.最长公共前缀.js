/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''
  const minLength = Math.min(...(strs.map(v => v.length)))
  const minStr = strs[0].slice(0, minLength)
  for (let i = minLength; i > 0; i--) {
    if (strs.every(v => v.slice(0, i) === minStr.slice(0, i))) {
      return minStr.slice(0, i)
    }
  }
  return ''
};
// console.log(longestCommonPrefix(["c", "acc", "ccc"]));
// @lc code=end

