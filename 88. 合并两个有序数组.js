/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  var cache = new Array(m + n).fill(0)
  let p1 = 0, p2 = 0
  var flag
  while (p1 < m || p2 < n) {
    if (p1 === m) {
      flag = nums2[p2++]
    } else if (p2 === n) {
      flag = nums1[p1++]
    } else if (nums1[p1] < nums2[p2]) {
      flag = nums1[p1++]
    } else {
      flag = nums2[p2++]
    }
    cache[p1 + p2 - 1] = flag
  }
  cache.forEach((item, index) => nums1[index] = item)
};
