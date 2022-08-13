/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  let res = 0
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const item1 = nums1[i];
      const item2 = nums2[j];
      if (item1 === item2) {
        let maxCount = 1
        while (i + maxCount < nums1.length && j + maxCount < nums2.length && nums1[i + maxCount] === nums2[j + maxCount]) {
          maxCount++
        }
        res = Math.max(res, maxCount)
      }
    }

  }
  return res

};
// @lc code=end

