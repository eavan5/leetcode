/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''
  const minLength = Math.min(...(strs.map(v => v.length)))
  const minStr = strs[0].slice(0, minLength)
  for (let i = minLength; i > 0; i--) {
    if (strs.every(v => v.slice(0, i) === minStr.slice(0, i))) {
      return minStr.slice(0, i)
    }
  }
  return ''
};

// 20210519  思路跟以前差不多
var longestCommonPrefix = function (strs) {
  // console.log(strs[0]);
  if (strs.length === 0) return ''
  //1.先找到最小个数
  let minLength = 200
  strs.forEach(item => {
    if (item.length < minLength) minLength = item.length
  })
  const str = strs[0].slice(0, minLength)
  for (let i = 0; i < minLength; i++) {
    for (let j = 0; j < strs.length; j++) {
      const element = strs[j];
      if (element[i] !== str[i]) {
        return str.slice(0, i)
      }
    }
  }
  return str
};
// console.log(longestCommonPrefix(["c", "acc", "ccc"]));
// @lc code=end

