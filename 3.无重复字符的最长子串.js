/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let p = 0, max = 0
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    const current = s.charAt(i)
    if (map.get(current) >= p) {
      p = map.get(current) + 1  // +1向前移动一位
    }
    map.set(current, i)
    max = Math.max(max, i - p + 1) //因为求的是个数  两个坐标之间个数要+1
  }
  return max
};
// @lc code=end

