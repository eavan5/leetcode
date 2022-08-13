/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    '(': ')', '{': '}', '[': ']'
  }
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (map[current]) {
      stack.push(map[current])
    } else {
      const end = stack.pop()
      if (end !== current) return false
    }
  }
  return stack.length === 0
};
// @lc code=end

