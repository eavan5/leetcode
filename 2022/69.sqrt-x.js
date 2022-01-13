/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let l = 0, r = x
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (mid * mid > x) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return r
};
// @lc code=end

