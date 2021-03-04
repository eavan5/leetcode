/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const array = [0, 1]
  for (let index = 2; index <= 30; index++) {
    array[index] = array[index - 1] + array[index - 2]
  }
  return array[n]
};
// @lc code=end

