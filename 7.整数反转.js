/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const isNegative = x !== Math.abs(x)
  if (isNegative) {
    const str = (x + '').slice(1)
    const out = -(str.split("").reverse().join(''))
    return out > -2147483648 ? out : 0
  } else {
    const out = +((x + '').split("").reverse().join(''))
    return out < 2147483647 ? out : 0
  }
};
// @lc code=end

