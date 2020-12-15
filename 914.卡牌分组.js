/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 * 1 <= deck.length <= 10000 
 * 0 <= deck[i] < 10000   
 */
var hasGroupsSizeX = function (deck) {
  let obj = {}
  let max = 0
  for (let index = 0; index < deck.length; index++) {
    const element = deck[index];
    obj[element] ? obj[element]++ : obj[element] = 1
    max = Math.max(max, obj[element])
  }
  const objArr = Object.values(obj)
  let x = 2
  while (x <= max) {
    if (objArr.some(v => v % x !== 0)) {
      x++
      continue
    } else {
      return true
    }
  }
  return false

};
// @lc code=end

