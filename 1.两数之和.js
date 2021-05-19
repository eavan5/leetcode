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

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    const index = nums.indexOf(target - element)
    if (index > -1 && i !== index) {
      return [i, index]
    }
  }
};

var twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    const
  }
}
console.log(twoSum([2, 7, 11, 15], 9));
// @lc code=end

