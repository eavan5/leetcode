/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  return Array.from({ length: n }).reduce((p, c, i) => p.concat(nums[i], nums[i + n]), [])
};