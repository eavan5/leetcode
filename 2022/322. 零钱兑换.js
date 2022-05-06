/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  coins.sort((a, b) => a - b)
  let res = Number.MAX_SAFE_INTEGER
  recursion()
  function recursion (index = 0, count = 0, sum = 0) {
    console.log(index, count, sum);
    if (index > coins.length) return
    if (count > res) return
    if (sum > amount) return
    if (sum === amount) {
      res = Math.min(res, count)
      return
    }
    for (let i = index; i < coins.length; i++) {
      recursion(i, count + 1, sum + coins[i])
    }
  }
  return res === Number.MAX_SAFE_INTEGER ? -1 : res
};

// console.log(coinChange([1, 2, 5], 119));
// console.log(coinChange([411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422], 9864));