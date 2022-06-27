/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let map = {};
  let pairs = 0;
  for (let i = 0; i < nums.length; i++) {
    let key = String(nums[i]);
    map[key] = map[key] === undefined ? 0 : map[key] + 1;
    pairs += map[key];
  }

  return pairs;
};

console.log(numIdenticalPairs([1, 1, 1, 1]));