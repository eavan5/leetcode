/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let [a, b, c] = Array(3).fill(Number.MIN_SAFE_INTEGER)
  for (let val of nums) {
    if (val > a) {
      [a, b, c] = [val, a, b]
    } else if (val < a && val > b) {
      [a, b, c] = [a, val, b]
    } else if (val > c && val < b) {
      [a, b, c] = [a, b, val]
    }
  }
  return c > Number.MIN_SAFE_INTEGER ? c : a
};