/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let l = 0, r = s.length - 1
  while (l < r) {
    if (s[l] !== s[r]) {
      return helper(s, l + 1, r) || helper(s, l, r - 1)
    }
    l++
    r--
  }
  return true
};

function helper (s, l, r) {
  while (l < r) {
    if (s[l] !== s[r]) return false
    l++
    r--
  }
  return true
}
// @lc code=end

