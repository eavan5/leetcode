/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const l = needle.length
  for (let index = 0; index <= haystack.length - l; index++) {
    let element = haystack.substr(index, l);
    console.log(element);
    if (element === needle) return index
  }
  return -1
};
console.log(strStr("hello", "ll"));
// @lc code=end

