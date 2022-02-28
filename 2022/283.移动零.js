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


function moveZeroes (nums) {
  let s = 0
  for (let f = 0; f < nums.length; f++) {
    if (nums[f]) {
      nums[s++] = nums[f]
    }
  }
  //   for (; s < nums.length; s++) {
  //     nums[s] = 0
  //   }
  const count = nums.length - s
  nums.splice(s, count, ...new Array(count).fill(0))
};