/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const otherVal = target - element
    const arr = [...nums]
    arr[index] = undefined
    // console.log(arr);
    const sec = arr.findIndex(v => v === otherVal)
    console.log(sec);
    if (sec > -1) {
      return [index, sec]
    }
  }

};
console.log(twoSum([2, 7, 11, 15], 9));
// @lc code=end

