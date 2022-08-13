/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = []
  function dfs (l, r, str) {
    if (r < l || l < 0 || r < 0) return
    if (str.length === 2 * n) return res.push(str)
    dfs(l - 1, r, str + '(')
    dfs(l, r - 1, str + ')')
  }
  dfs(n, n, '')
  return res
};