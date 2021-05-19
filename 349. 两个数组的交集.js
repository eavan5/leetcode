/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  return [...new Set(nums1)].reduce((t, c) => nums2.includes(c) ? [c, ...t] : t, [])
};

var intersection = function (nums1, nums2) {
  return [...new Set(nums1)].filter(v => nums2.includes(v))
};

console.log(intersection([4, 9, 5, 4], [9, 4, 9, 8, 4]));