/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0, j = 0
  const map = Array.from({ length: m + n }).fill(0)
  while (i < m || j < n) {
    if (i === m) {
      assignMap(nums2[j++])
    } else if (j === n) {
      assignMap(nums1[i++])
    } else if (nums1[i] < nums2[j]) {
      assignMap(nums1[i++])
    } else {
      assignMap(nums2[j++])
    }
    function assignMap (arg) {
      map[i + j - 1] = arg
    }
  }
  map.forEach((item, index) => nums1[index] = item)
};
