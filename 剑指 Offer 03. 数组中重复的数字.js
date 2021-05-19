/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i]
    if (nums.indexOf(element) !== nums.lastIndexOf(element)) {
      return element
    }
  }
};
var findRepeatNumber = function (nums) {
  const map = new Map();
  for (const i of nums) {
    if (map.has(i)) return i
    map.set(i, 1)
  }
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));