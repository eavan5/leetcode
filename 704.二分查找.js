/*
 * @Author: wumao
 * @Date: 2022-01-09 00:37:28
 * @LastEditors: wumao
 * @LastEditTime: 2022-01-09 00:56:20
 * @Description: file content
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0, r = nums.length - 1
  while (l <= r) {
    const mid = ((r - l) >> 1) + l
    if (nums[mid] > target) {
      r = mid - 1
    } else if (nums[mid] < target) {
      l = mid + 1
    } else {
      return mid
    }
  }
  return -1
};
