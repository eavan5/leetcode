/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let i = num1.length - 1, j = num2.length - 1
  let temp = 0
  const res = []
  while (i >= 0 || j >= 0 || temp !== 0) {
    const ii = i >= 0 ? +num1.charAt(i) : 0
    jj = j >= 0 ? +num2.charAt(j) : 0
    res.push((ii + jj + temp) % 10)
    temp = Math.floor((ii + jj + temp) / 10)
    i--
    j--
  }
  return res.reverse().join('')
};


console.log(addStrings("11", "123"));

// @lc code=end

