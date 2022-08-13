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
  let res = ''
  const first = strs[0]
  for (const str of first) {
    if (!strs.every(item => item.startsWith(res + str))) {
      break
    }
    res += str
  }
  return res
};
// @lc code=end

