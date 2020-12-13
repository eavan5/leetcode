/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 *
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return []
  const numMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  const digitsArr = digits.split('')
  const englishWordArr = []
  if (digitsArr.length === 1) {
    return numMap[digits].split("")
  }
  digitsArr.forEach(v => englishWordArr.push(numMap[v]))
  const recursion = arr => {
    const temp = []
    for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr[1].length; j++) {
        temp.push(arr[0][i] + arr[1][j])
      }
    }
    arr.splice(0, 2, temp)
    if (arr.length > 1) {
      recursion(arr)
    }
    return arr[0]
  }
  return recursion(englishWordArr)
};
// @lc code=end

