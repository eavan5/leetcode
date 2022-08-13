/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let [l, r] = [0, nums.length - 1];
  while (l < r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] < nums[mid + 1]) {
      l = mid + 1
    } else {
      r = mid
    }
  }
  return r
};