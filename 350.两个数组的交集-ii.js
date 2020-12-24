/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    const temp = nums1
    nums1 = nums2
    nums2 = temp
  }
  let moreArray = nums2
  let intersection = []
  for (let index = 0, length = nums1.length; index < length; index++) {
    const element = nums1[index];
    const sameIndex = moreArray.indexOf(element)
    if (sameIndex > -1) {
      intersection.push(element)
      moreArray.splice(sameIndex, 1)
    }
  }
  return intersection
};
// @lc code=end

