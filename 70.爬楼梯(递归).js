/**
 * @param {number} n
 * @return {number}
 */
var map = new Map()
var climbStairs = function (n) {
  if (!map.has(n)) {
    var result = n < 4 ? n : climbStairs(n - 1) + climbStairs(n - 2)
    map.set(n, result)
    return result
  }
  return map.get(n)
};

console.log(climbStairs(36));