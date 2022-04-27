/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = []
  recursion()
  function recursion (index = 0, temp = []) {
    res.push(Array.from(temp))
    for (let i = index; i < nums.length; i++) {
      temp.push(nums[i])
      recursion(i + 1, temp)
      temp.pop()
    }
  }
  return res

};