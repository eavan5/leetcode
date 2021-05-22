/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  nums.sort((a, b) => b - a)
  return nums[k - 1]
};

// 快排  过不了用例

var findKthLargest = function (nums, k) {
  const quickSort = function (nums) {
    if (nums.length <= 1) return nums
    let mid = nums.splice(Math.floor(nums.length - 1), 1)
    let left = [], right = []
    for (let i = 0; i < nums.length; i++) {
      const element = nums[i];
      if (element > mid) {
        left.push(element)
      } else {
        right.push(element)
      }
    }
    return quickSort(left).concat(mid, quickSort(right))
  }
  return quickSort(nums)[k - 1]
};

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));