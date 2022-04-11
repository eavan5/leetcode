/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function (nums) {
  // i 当前的指针
  const map = new Map()
  function recursion (i) {
    if (i + 1 >= nums.length) return true
    if (nums[i] === 0) return false
    if (map.has(i)) return map.get(i)
    for (let j = 1; j <= nums[i]; j++) {
      const res = recursion(i + j)
      map.set(i, res)
      if (res) {
        return true
      }
    }
    return false
  }
  return recursion(0)
};

console.log(canJump([3, 2, 1, 0, 4]));