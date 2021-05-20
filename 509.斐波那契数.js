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

var fib = function (n) {
  const array = [0, 1]
  for (let index = 2; index <= 30; index++) {
    array[index] = array[index - 1] + array[index - 2]
  }
  return array[n]
};

// 动态规划
var fib = function (n) {
  const array = []
  array.length = n + 1
  array.fill(0)
  array[1] = 1
  array[2] = 1
  let i
  for (i = 3; i <= n; i++) {
    array[i] = array[i - 1] + array[i - 2]
  }
  return array[n]
};

console.log(fib(0));
// @lc code=end

