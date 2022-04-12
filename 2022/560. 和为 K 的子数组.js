/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let sum = 0, count = 0
  const map = { 0: 1 }
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (map[sum - k]) {
      count += map[sum - k]
    }
    if (map[sum]) {
      map[sum]++
    } else {
      map[sum] = 1
    }
  }
  return count
};