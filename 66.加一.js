/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++
      return digits
    } else if (digits[i] === 9 && i !== 0) {
      digits[i] = 0
    } else {
      digits.fill(0)
      return [1, ...digits]
    }
  }
};
// console.log(plusOne([0, 0]));
// @lc code=end

