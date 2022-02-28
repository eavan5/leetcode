/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (!nums[i]) {
      nums.splice(i, 1)
      i--
      count++
    }
  }
  nums.splice(nums.length, 0, ...new Array(count).fill(0))
};

// 这个效率不高,所以要用快慢指针