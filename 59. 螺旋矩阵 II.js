/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
const res = Array.from({length:n},()=>Array.from({length:n},()=>0))
  let l = 0, r = n - 1, t = 0, b = n - 1
  let count = 1
  while (count <= n ** 2) {
    for (let i = l; i <= r; i++) res[t][i] = count++
    t++
    for (let i = t; i <= b; i++) res[i][r] = count++
    r--
    for (let i = r; i >= l; i--) res[b][i] = count++
    b--
    for (let i = b; i >= t; i--) res[i][l] = count++
    l++
  }
  return res
};

console.log((generateMatrix(3)));