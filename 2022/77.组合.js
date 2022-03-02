/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = []
  backtrack()
  return res
  function backtrack (index = 1, temp = []) {
    if (temp.length === k) {
      res.push([...temp])
      return
    }
    for (let i = index; i < n + 1; i++) {
      temp.push(i)
      backtrack(i + 1, temp)
      temp.pop()
    }
  }
};