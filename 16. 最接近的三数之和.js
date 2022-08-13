/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let min = Number.MAX_SAFE_INTEGER
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1, r = nums.length - 1
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum === target) {
        return sum
      } else if (sum > target) {
        r--
      } else {
        l++
      }
      if (Math.abs(sum - target) < Math.abs(min - target)) {
        min = sum
      }
    }
  }
  return min
};