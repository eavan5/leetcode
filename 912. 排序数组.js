/**
 * @param {number[]} nums
 * @return {number[]}
 */


var sortArray = function (nums) {
  quickSort(nums)
  return nums
};

var quickSort = function (nums, l = 0, r = nums.length - 1) {
  if (r <= l) return
  const p = partition(nums, l, r)
  quickSort(nums, l, p - 1)
  quickSort(nums, p + 1, r)
};
function partition (arr, l, r) {
  let p = l
  for (let i = l; i < r; i++) {
    if (arr[i] < arr[r]) {
      [arr[i], arr[p]] = [arr[p], arr[i]]
      p++
    }
  }
  [arr[p], arr[r]] = [arr[r], arr[p]]
  return p
}