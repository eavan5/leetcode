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
  if (s.length % 2) return false
  let stack = []
  const map = new Map()
  map.set(')', '(')
  map.set(']', '[')
  map.set('}', '{')
  // for (let index = 0, length = s.length; index < length; index++) {
  //   const i = s[index];
  //   if (["(", "[", "{"].includes(i)) {
  //     stack.push(i)
  //   } else {
  //     if (stack.pop() !== map.get(i)) {
  //       return false
  //     }
  //   }
  // }
  for (const i of s) {
    if (["(", "[", "{"].includes(i)) {
      stack.push(i)
    } else {
      if (stack.pop() !== map.get(i)) {
        return false
      }
    }
  }
  // if (!stack.length) return true
  // else return false
  return !stack.length
};
// console.log(isValid("()"));
// @lc code=end

